import { useEffect, useRef, useState, type ReactNode } from "react";

type ZoomOutOnScrollProps = {
  children: ReactNode;
};

export default function ZoomOutOnScroll({ children }: ZoomOutOnScrollProps) {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateAnimation = () => {
      const scrollLimit = 650;
      const value = Math.min(window.scrollY / scrollLimit, 1);
      setProgress(value);
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateAnimation);
        ticking.current = true;
      }
    };

    updateAnimation();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 - progress * 0.32;
  const translateY = progress * -100;
  const rotateX = progress * 14;
  const opacity = 1 - progress * 0.62;
  const blur = progress * 3;
  const glowOpacity = 1 - progress * 0.75;
  const ringScale = 1 + progress * 0.45;

  return (
    <div className="relative mx-auto w-full max-w-5xl [perspective:1200px]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-yellow-400/20 blur-[90px]"
        style={{
          opacity: glowOpacity,
          transform: `scale(${ringScale})`,
        }}
      />

      <div
        className="will-change-transform"
        style={{
          opacity,
          filter: `blur(${blur}px)`,
          transform: `
            translateY(${translateY}px)
            scale(${scale})
            rotateX(${rotateX}deg)
          `,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}