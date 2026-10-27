import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

/**
 * Keeps <title>, description, canonical, Open Graph and robots tags in sync with the current route
 * during client-side navigation. The initial HTML for each route is already prerendered with the
 * same values at build time (see scripts/seoPlugin.ts), so this mostly confirms what is already there.
 * The page metadata is loaded lazily so it does not enlarge the main JavaScript bundle.
 */
export default function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;
    import("./seoData").then(({ OG_IMAGE, SITE_NAME, absoluteUrl, findSeoPage }) => {
      if (cancelled) return;
      const page = findSeoPage(pathname);
      const title = page ? page.title : `Page Not Found | ${SITE_NAME}`;
      const description = page ? page.description : "The page you are looking for could not be found.";
      const url = page ? absoluteUrl(page.canonicalPath ?? page.path) : "";

      document.title = title;
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[name="robots"]', "name", "robots", page ? "index,follow,max-image-preview:large" : "noindex,follow");
      setMeta('meta[property="og:title"]', "property", "og:title", title);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[property="og:image"]', "property", "og:image", OG_IMAGE);
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (url) {
        if (!canonical) {
          canonical = document.createElement("link");
          canonical.rel = "canonical";
          document.head.appendChild(canonical);
        }
        canonical.href = url;
        setMeta('meta[property="og:url"]', "property", "og:url", url);
      } else if (canonical) {
        canonical.remove();
      }
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);
}
