import { type RefObject, useEffect, useState } from "react";

/**
 * Reports whether an element is near the viewport. Used to pause timers that
 * only drive visual animation while the section is off-screen.
 * Defaults to `true` (animation runs) when IntersectionObserver is unavailable.
 */
export default function useInViewport(ref: RefObject<Element | null>, rootMargin = "100px 0px") {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}
