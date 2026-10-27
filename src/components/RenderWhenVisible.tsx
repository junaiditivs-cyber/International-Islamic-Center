import { type ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  minimumHeight?: string;
  rootMargin?: string;
  unmountWhenHidden?: boolean;
};

export default function RenderWhenVisible({
  children,
  className,
  minimumHeight = "400px",
  rootMargin = "500px 0px",
  unmountWhenHidden = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        setSeen(true);
        if (!unmountWhenHidden) observer.disconnect();
      }
    }, { rootMargin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, unmountWhenHidden]);

  const shouldRender = seen && (!unmountWhenHidden || visible);
  return (
    <div ref={ref} className={className} style={shouldRender ? undefined : { minHeight: minimumHeight }}>
      {shouldRender ? children : null}
    </div>
  );
}
