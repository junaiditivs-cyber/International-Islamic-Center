import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Globe,
  GraduationCap,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
};

function RevealOnScroll({ children, delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        show
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-14 scale-[0.96] opacity-0 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}


type CountUpNumberProps = {
  value: string;
  delay?: number;
  duration?: number;
};

function CountUpNumber({
  value,
  delay = 0,
  duration = 1600,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const startedRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const match = value.match(/^(\d+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = Number(match[1]);
    const suffix = match[2] || "";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;

        startedRef.current = true;

        timerRef.current = window.setTimeout(() => {
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentNumber = Math.floor(targetNumber * easedProgress);

            setDisplayValue(`${currentNumber}${suffix}`);

            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          frameRef.current = requestAnimationFrame(animate);
        }, delay);

        observer.unobserve(element);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, delay, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

type StatItem = {
  icon: LucideIcon;
  value: string;
  title: string;
  text: string;
  action: string;
  link: string;
};

const stats: StatItem[] = [
  {
    icon: Globe,
    value: "50+",
    title: "Countries",
    text: "Students learning from different countries worldwide.",
    action: "Global Reach",
    link: "/location",
  },
  {
    icon: Users,
    value: "5000+",
    title: "Students",
    text: "Trusted by thousands of students and families.",
    action: "View Reviews",
    link: "/reviews",
  },
  {
    icon: Clock,
    value: "24/7",
    title: "Flexible Timing",
    text: "Choose class timings that fit your daily schedule.",
    action: "Book Trial",
    link: "/trial",
  },
  {
    icon: GraduationCap,
    value: "100+",
    title: "Qualified Tutors",
    text: "Learn with trained Quran and Islamic studies teachers.",
    action: "Explore Courses",
    link: "/courses",
  },
];

export default function AnimatedStats() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_38%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.12)] backdrop-blur-xl">
           
            Trusted Online Quran ISLAMIC CENTER
          </div>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Learning That Feels
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Personal, Safe And Global
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Our ISLAMIC CENTER supports students from different countries with flexible
            online classes, qualified teachers and a calm Islamic learning
            environment.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <RevealOnScroll key={item.title} delay={index * 120}>
                <Link
                  to={item.link}
                  className="group relative block min-h-[370px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400/60 hover:bg-yellow-400/10 hover:shadow-[0_0_95px_rgba(250,204,21,0.18)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute left-5 top-5 h-12 w-12 border-l border-t border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-12 border-b border-r border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex min-h-[310px] flex-col">
                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_38px_rgba(250,204,21,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="text-5xl font-black leading-none text-white">
                      <CountUpNumber
                        value={item.value}
                        delay={index * 180}
                        duration={1700}
                      />
                    </h3>

                    <p className="mt-3 text-xl font-black text-white">
                      {item.title}
                    </p>

                    <p className="mt-6 text-sm leading-7 text-zinc-400">
                      {item.text}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                        {item.action}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}