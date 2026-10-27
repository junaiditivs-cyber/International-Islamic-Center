// SEO verification. Usage:
//   node scripts/verify-seo.mjs                       -> checks http://localhost:4180 (e.g. `npx serve dist -l 4180`)
//   node scripts/verify-seo.mjs https://www.internationalislamiccenter.com   -> checks production after deploy
// Exits non-zero on any problem. Never reports a ranking; it only checks what the server returns.
const base = (process.argv[2] || 'http://localhost:4180').replace(/\/$/, '');
const PROD = 'https://www.internationalislamiccenter.com';
const HOME_TITLE = 'International Islamic Center | Online Quran Classes';
const HOME_DESC = 'International Islamic Center offers online Quran classes, Tajweed, Hifz and Islamic education for children and adults. Learn with experienced teachers. Start a free trial.';
const dec = (s) => s?.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pick = (h, re) => dec((h.match(re) || [])[1]);
let problems = 0;
const fail = (m) => { problems++; console.log('FAIL', m); };
const ok = (m) => console.log('ok  ', m);

const smRes = await fetch(base + '/sitemap.xml', { redirect: 'manual' });
const sm = await smRes.text();
if (smRes.status !== 200 || !sm.includes('<urlset')) fail(`sitemap.xml status ${smRes.status} / not XML`);
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (new Set(urls).size !== urls.length) fail('duplicate sitemap URLs');
if (urls.some((u) => !u.startsWith(PROD))) fail('sitemap contains non-www/non-production URL');
console.log(`sitemap: ${urls.length} URLs`);

const titles = new Map(), descs = new Map();
for (const u of urls) {
  const p = u.slice(PROD.length) || '/';
  const r = await fetch(base + p, { redirect: 'manual' });
  const h = await r.text();
  const title = pick(h, /<title[^>]*>([^<]*)<\/title>/), desc = pick(h, /name="description" content="([^"]*)"/);
  const canon = pick(h, /rel="canonical" href="([^"]*)"/), robots = pick(h, /name="robots" content="([^"]*)"/);
  const errs = [];
  if (r.status !== 200) errs.push('status ' + r.status);
  if (!title || !desc) errs.push('missing title/description');
  if (canon !== u) errs.push(`canonical ${canon} != ${u}`);
  if (/noindex/i.test(robots || '') || /noindex/i.test(r.headers.get('x-robots-tag') || '')) errs.push('noindex present');
  if (!/International Islamic Center/.test(title || '')) errs.push('brand missing from title');
  if (titles.has(title)) errs.push('duplicate title with ' + titles.get(title)); titles.set(title, p);
  if (descs.has(desc)) errs.push('duplicate description with ' + descs.get(desc)); descs.set(desc, p);
  if (p === '/') {
    if (title !== HOME_TITLE) errs.push('home title mismatch');
    if (desc !== HOME_DESC) errs.push('home description mismatch');
    const ld = [...h.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    try {
      const g = JSON.parse(ld[0])['@graph'];
      const site = g.find((x) => x['@type'] === 'WebSite'), org = g.find((x) => x['@type'] === 'Organization');
      if (site?.name !== 'International Islamic Center' || org?.name !== 'International Islamic Center') errs.push('JSON-LD name mismatch');
      if (site?.url !== PROD + '/' || org?.url !== PROD + '/') errs.push('JSON-LD url mismatch');
    } catch { errs.push('JSON-LD missing/invalid'); }
  }
  (errs.length ? fail : ok)(`${p.padEnd(28)} ${title} ${errs.join('; ')}`);
}

// Non-indexable duplicate: must canonicalise to the pillar page.
for (const s of ['quran', 'sunnah', 'salah']) {
  const h = await (await fetch(`${base}/topics/${s}`)).text();
  const c = pick(h, /rel="canonical" href="([^"]*)"/);
  c === `${PROD}/pillar/${s}` ? ok(`/topics/${s} -> canonical /pillar/${s}`) : fail(`/topics/${s} canonical ${c}`);
}

// True 404 for unknown URLs, noindex.
for (const p of ['/definitely-missing-page', '/topic/not-a-real-program']) {
  const r = await fetch(base + p, { redirect: 'manual' }); const h = await r.text();
  r.status === 404 && /noindex/.test(h) ? ok(`${p} -> 404 + noindex`) : fail(`${p} -> status ${r.status}, noindex=${/noindex/.test(h)}`);
}

// Static files.
for (const f of ['/robots.txt', '/favicon.ico', '/favicon-48x48.png', '/apple-touch-icon.png', '/logo.png', '/og-image.jpg']) {
  const r = await fetch(base + f, { redirect: 'manual' });
  r.status === 200 ? ok(`${f} 200 ${r.headers.get('content-type')}`) : fail(`${f} status ${r.status}`);
}
const robots = await (await fetch(base + '/robots.txt')).text();
/Sitemap:\s*https:\/\/www\.internationalislamiccenter\.com\/sitemap\.xml/.test(robots) && !/Disallow:\s*\/\s*$/m.test(robots)
  ? ok('robots.txt references www sitemap, no blanket Disallow') : fail('robots.txt problem');

// Domain behaviour (only meaningful against production).
if (base.startsWith('https://')) {
  const bare = await fetch(PROD.replace('www.', '') + '/', { redirect: 'manual' });
  [301, 308].includes(bare.status) && (bare.headers.get('location') || '').startsWith(PROD)
    ? ok(`bare domain -> ${bare.status} ${bare.headers.get('location')}`) : fail(`bare domain status ${bare.status} location ${bare.headers.get('location')}`);
  const http = await fetch(PROD.replace('https', 'http') + '/', { redirect: 'manual' });
  [301, 307, 308].includes(http.status) ? ok(`http -> https (${http.status})`) : fail(`http status ${http.status}`);
}
console.log(`\nURLs checked: ${urls.length + 5}, problems: ${problems}`);
process.exit(problems ? 1 : 0);
