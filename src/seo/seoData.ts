// Single source of truth for page-level SEO. Used by:
//  - scripts/seoPlugin.ts  (build-time: per-route HTML <head>, sitemap.xml)
//  - src/seo/useSeo.ts     (runtime: keeps tags correct during client-side navigation)
// Keep this file free of React / icon imports so the Vite config can load it in Node.

export const SITE_URL = "https://www.internationalislamiccenter.com";
export const SITE_NAME = "International Islamic Center";
export const SITE_LOGO = `${SITE_URL}/logo.png`;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT = "International Islamic Center logo";

/**
 * Official social profiles for Organization.sameAs. Intentionally empty: no verified profile URLs exist in
 * the project (the Reviews page only has placeholder links). Add real, owner-confirmed URLs here, e.g.
 * "https://www.facebook.com/<official-page>", and rebuild.
 */
export const SOCIAL_PROFILES: string[] = [];

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  /** Path of the canonical page when this URL duplicates another one. Defaults to `path`. */
  canonicalPath?: string;
  /** Listed in sitemap.xml (only self-canonical, indexable pages). */
  sitemap?: boolean;
  changefreq?: "weekly" | "monthly";
  priority?: string;
};

const t = (name: string) => `${name} | ${SITE_NAME}`;

const programs: Array<{ slug: string; name: string; description: string }> = [
  {
    slug: "quran-reading",
    name: "Online Quran Reading Classes",
    description:
      "Learn to read the Quran online with correct pronunciation and fluency. Beginner-friendly one-to-one classes for children and adults.",
  },
  {
    slug: "tajweed-rules",
    name: "Online Tajweed Classes",
    description:
      "Improve your Quran recitation with Makharij and Tajweed rules, taught online with teacher correction for children and adults.",
  },
  {
    slug: "hifz-quran",
    name: "Online Hifz Quran Program",
    description:
      "Memorize the Quran online with structured revision, daily targets and progress tracking guided by an experienced teacher.",
  },
  {
    slug: "how-to-perform-namaz",
    name: "Learn How to Perform Namaz",
    description:
      "Learn Wudu, Salah positions, duas in prayer and common prayer mistakes step by step in live online classes.",
  },
  {
    slug: "wudu",
    name: "Learn Wudu Step by Step",
    description:
      "Learn the correct method of Wudu and how to prepare for Salah, taught step by step in online classes for kids and adults.",
  },
  {
    slug: "daily-duas",
    name: "Daily Duas Online Course",
    description:
      "Memorize daily duas for morning, evening, food, sleep and protection, with meanings explained in simple online lessons.",
  },
  {
    slug: "akhlaq-adab",
    name: "Islamic Manners & Good Character",
    description:
      "Build Islamic manners, respect, honesty and kindness through Akhlaq and Adab lessons for children and adults, taught online.",
  },
  {
    slug: "islamic-studies",
    name: "Islamic Studies for Kids & Adults",
    description:
      "Learn Seerah, stories of the Prophets, core beliefs and Islamic lifestyle in clear, simple online Islamic studies classes.",
  },
];

const pillars: Array<{ slug: string; name: string; description: string }> = [
  {
    slug: "quran",
    name: "Quran Learning Program",
    description:
      "Improve Quran recitation, Tajweed, pronunciation and fluency, and strengthen your connection with the Quran through online classes.",
  },
  {
    slug: "sunnah",
    name: "Sunnah & Islamic Manners",
    description:
      "Learn daily duas, Islamic manners and good character through the teachings of the Prophet ﷺ in online classes.",
  },
  {
    slug: "salah",
    name: "Salah Learning Program",
    description:
      "Understand Wudu, prayer positions, daily prayers, short Surahs and the duas used inside Salah with online guidance.",
  },
];

export const seoPages: SeoPage[] = [
  {
    path: "/",
    title: "International Islamic Center | Online Quran Classes",
    description:
      "International Islamic Center offers online Quran classes, Tajweed, Hifz and Islamic education for children and adults. Learn with experienced teachers. Start a free trial.",
    sitemap: true,
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/courses",
    title: t("Online Quran Courses"),
    description:
      "Browse online courses in Quran reading, Tajweed, Hifz, Namaz, Wudu, daily duas, Islamic manners and Islamic studies for children and adults.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/trial",
    title: t("Free Trial Quran Class"),
    description:
      "Book a free trial Quran class. Add your students, choose a class length and your available times, and meet a teacher before you commit.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/enroll",
    title: t("Enroll in Online Quran Classes"),
    description:
      "Enroll in online Quran classes. Share the student's details and your preferred days and times to begin learning Quran with a teacher.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/pricing",
    title: t("Pricing & Class Plans"),
    description:
      "See class plans and pricing for online Quran, Tajweed, Hifz and Islamic studies lessons with teachers at International Islamic Center.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/how-it-works",
    title: t("How Online Quran Classes Work"),
    description:
      "See how classes work: begin with a free trial, choose a time that suits you, then learn and grow with a Quran teacher online.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/reviews",
    title: t("Student & Parent Reviews"),
    description:
      "Read reviews about learning Quran online with International Islamic Center and see what families say about the classes.",
    sitemap: true,
    changefreq: "weekly",
    priority: "0.6",
  },
  {
    path: "/faq",
    title: t("Frequently Asked Questions"),
    description:
      "Answers to common questions about online Quran classes, free trials, class timings, teachers and enrollment.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/contact",
    title: t("Contact Us"),
    description:
      "Contact International Islamic Center with your questions about online Quran classes, schedules, the free trial and enrollment.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/location",
    title: t("Learn Quran Online from Anywhere"),
    description:
      "International Islamic Center teaches students in different countries through live online classes with flexible timings.",
    sitemap: true,
    changefreq: "monthly",
    priority: "0.5",
  },
  ...programs.map(
    (p): SeoPage => ({
      path: `/topic/${p.slug}`,
      title: t(p.name),
      description: p.description,
      sitemap: true,
      changefreq: "monthly",
      priority: "0.7",
    })
  ),
  ...pillars.map(
    (p): SeoPage => ({
      path: `/pillar/${p.slug}`,
      title: t(p.name),
      description: p.description,
      sitemap: true,
      changefreq: "monthly",
      priority: "0.7",
    })
  ),
  // /topics/:slug renders the same three pillars. It is not linked from the site, so it
  // is excluded from the sitemap and canonicalised to the /pillar/* page.
  ...pillars.map(
    (p): SeoPage => ({
      path: `/topics/${p.slug}`,
      title: t(p.name),
      description: p.description,
      canonicalPath: `/pillar/${p.slug}`,
      sitemap: false,
    })
  ),
];

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export const findSeoPage = (pathname: string): SeoPage | undefined => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return seoPages.find((p) => p.path === clean);
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: "Online Quran, Tajweed, Hifz and Islamic studies classes.",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: SITE_LOGO, width: 256, height: 256 },
      image: OG_IMAGE,
      ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
    },
  ],
};
