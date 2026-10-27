import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { SITE_NAME, SITE_URL, absoluteUrl, seoPages, structuredData, type SeoPage } from "../src/seo/seoData";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const NAV_LINKS: Array<[string, string]> = [
  ["/", "Home"],
  ["/courses", "Courses"],
  ["/trial", "Free Trial"],
  ["/enroll", "Enroll"],
  ["/pricing", "Pricing"],
  ["/reviews", "Reviews"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
];

function headTags(page: SeoPage): string {
  const canonical = absoluteUrl(page.canonicalPath ?? page.path);
  const lines = [
    `<title data-seo>${esc(page.title)}</title>`,
    `<meta data-seo name="description" content="${esc(page.description)}" />`,
    `<meta data-seo name="robots" content="index,follow,max-image-preview:large" />`,
    `<link data-seo rel="canonical" href="${canonical}" />`,
    `<meta data-seo property="og:title" content="${esc(page.title)}" />`,
    `<meta data-seo property="og:description" content="${esc(page.description)}" />`,
    `<meta data-seo property="og:url" content="${canonical}" />`,
    `<meta data-seo name="twitter:title" content="${esc(page.title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(page.description)}" />`,
  ];
  if (page.path === "/") {
    lines.push(
      `<script data-seo type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`
    );
  }
  return lines.map((l) => `    ${l}`).join("\n");
}

// Crawler/no-JS fallback only. Hidden whenever JavaScript runs, so the visual design is unchanged.
function noscript(page: SeoPage): string {
  const links = NAV_LINKS.map(([p, label]) => `<a href="${p}">${esc(label)}</a>`).join(" | ");
  return `<noscript><h1>${esc(page.title)}</h1><p>${esc(page.description)}</p><nav>${links}</nav></noscript>`;
}

function buildHtml(template: string, page: SeoPage): string {
  const stripped = template
    .replace(/[ \t]*<title\b[^>]*\bdata-seo\b[^>]*>[\s\S]*?<\/title>\s*\n?/g, "")
    .replace(/[ \t]*<script\b[^>]*\bdata-seo\b[^>]*>[\s\S]*?<\/script>\s*\n?/g, "")
    .replace(/[ \t]*<(?:meta|link)\b[^>]*\bdata-seo\b[^>]*>\s*\n?/g, "");
  return stripped
    .replace("</head>", `${headTags(page)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscript(page)}`);
}

function buildNotFoundHtml(template: string): string {
  const stripped = template
    .replace(/[ \t]*<title\b[^>]*\bdata-seo\b[^>]*>[\s\S]*?<\/title>\s*\n?/g, "")
    .replace(/[ \t]*<script\b[^>]*\bdata-seo\b[^>]*>[\s\S]*?<\/script>\s*\n?/g, "")
    .replace(/[ \t]*<(?:meta|link)\b[^>]*\bdata-seo\b[^>]*>\s*\n?/g, "");
  const tags = [
    `<title data-seo>Page Not Found | ${SITE_NAME}</title>`,
    `<meta data-seo name="robots" content="noindex,follow" />`,
  ];
  return stripped.replace("</head>", `${tags.map((l) => `    ${l}`).join("\n")}\n  </head>`);
}

// Fail the build if the SEO list drifts from the real route data.
function assertProgramsInSync(root: string) {
  const src = fs.readFileSync(path.resolve(root, "src/data/programs.ts"), "utf8");
  const slugs = [...src.matchAll(/\bslug:\s*"([^"]+)"/g)].map((m) => m[1]).sort();
  const seoSlugs = seoPages
    .filter((p) => p.path.startsWith("/topic/"))
    .map((p) => p.path.replace("/topic/", ""))
    .sort();
  if (JSON.stringify(slugs) !== JSON.stringify(seoSlugs)) {
    throw new Error(`[seo] /topic/* pages out of sync with programs.ts.\n  programs: ${slugs}\n  seoData:  ${seoSlugs}`);
  }
}

function sitemapXml(): string {
  const urls = seoPages
    .filter((p) => p.sitemap)
    .map(
      (p) =>
        `  <url>\n    <loc>${absoluteUrl(p.path)}</loc>\n    <changefreq>${p.changefreq ?? "monthly"}</changefreq>\n    <priority>${p.priority ?? "0.5"}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export default function seoPlugin(): Plugin {
  let root = process.cwd();
  let outDir = path.resolve(root, "dist");
  return {
    name: "iic-seo-prerender",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      assertProgramsInSync(root);
      const indexPath = path.join(outDir, "index.html");
      const template = fs.readFileSync(indexPath, "utf8");
      for (const page of seoPages) {
        const html = buildHtml(template, page);
        // Vercel `cleanUrls` serves /courses from courses.html and /topic/wudu from topic/wudu.html.
        const file = page.path === "/" ? indexPath : path.join(outDir, `${page.path.slice(1)}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }
      // 404.html: Vercel serves it with a real 404 status for unknown URLs. It is the same app shell
      // (so the site chrome and client router work) but must never be indexed or carry a canonical.
      fs.writeFileSync(path.join(outDir, "404.html"), buildNotFoundHtml(template));
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml());
      console.log(`[seo] prerendered <head> for ${seoPages.length} routes, sitemap has ${seoPages.filter((p) => p.sitemap).length} URLs (${SITE_URL})`);
    },
  };
}
