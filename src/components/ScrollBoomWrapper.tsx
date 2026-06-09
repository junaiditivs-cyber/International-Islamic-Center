import { useEffect, useState, type ReactNode } from "react";

type ScrollBoomWrapperProps = {
  children: ReactNode;
};

export default function ScrollBoomWrapper({ children }: ScrollBoomWrapperProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight * 0.9;
      const currentProgress = Math.min(window.scrollY / maxScroll, 1);
      setProgress(currentProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 - progress * 0.22;
  const opacity = 1 - progress * 0.45;
  const translateY = progress * -70;
  const blur = progress * 1.5;

  return (
    <section className="relative h-[170vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div
          className="h-full will-change-transform"
          style={{
            transform: `translateY(${translateY}px) scale(${scale})`,
            opacity,
            filter: `blur(${blur}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}