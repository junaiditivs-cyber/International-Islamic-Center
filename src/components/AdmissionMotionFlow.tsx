import { useEffect, useMemo, useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  UserPlus,
  Video,
  type LucideIcon,
} from "lucide-react";

type StepItem = {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
};

const steps: StepItem[] = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register",
    text: "Parents share student name, age, country, current level and preferred timing.",
    tag: "Student Details",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Schedule Trial",
    text: "Our team matches a suitable teacher and arranges the trial class timing.",
    tag: "Class Setup",
  },
  {
    number: "03",
    icon: Video,
    title: "Attend 3 Days Free Trial",
    text: "Student joins trial classes and experiences the teacher, method and comfort level.",
    tag: "Free Trial",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Parent Feedback",
    text: "Parents discuss class experience, teacher match, student response and next targets.",
    tag: "Trust Review",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Confirm Admission",
    text: "After satisfaction, regular classes begin with a clear learning plan and support.",
    tag: "Admission",
  },
];

export default function AdmissionMotionFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const activeStep = useMemo(() => steps[active], [active]);
  const ActiveIcon = activeStep.icon;

  const getCardStyle = (index: number) => {
    const total = steps.length;
    const diff = (index - active + total) % total;

    if (diff === 0) {
      return {
        transform: "translateX(-50%) translateY(0px) scale(1) rotateY(0deg)",
        opacity: 1,
        zIndex: 50,
        filter: "blur(0px)",
        pointerEvents: "auto" as const,
      };
    }

    if (diff === 1) {
      return {
        transform:
          "translateX(calc(-50% + 310px)) translateY(42px) scale(0.72) rotateY(-20deg)",
        opacity: 0.34,
        zIndex: 25,
        filter: "blur(2px)",
        pointerEvents: "none" as const,
      };
    }

    if (diff === total - 1) {
      return {
        transform:
          "translateX(calc(-50% - 310px)) translateY(42px) scale(0.72) rotateY(20deg)",
        opacity: 0.34,
        zIndex: 25,
        filter: "blur(2px)",
        pointerEvents: "none" as const,
      };
    }

    if (diff === 2) {
      return {
        transform:
          "translateX(-50%) translateY(130px) scale(0.58) rotateY(0deg)",
        opacity: 0.12,
        zIndex: 10,
        filter: "blur(6px)",
        pointerEvents: "none" as const,
      };
    }

    return {
      transform:
        "translateX(-50%) translateY(-120px) scale(0.52) rotateY(0deg)",
      opacity: 0,
      zIndex: 0,
      filter: "blur(10px)",
      pointerEvents: "none" as const,
    };
  };

  return (
    <div className="relative overflow-hidden rounded-[52px] border border-yellow-400/25 bg-white/[0.045] p-6 shadow-[0_0_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
          <CalendarCheck className="h-4 w-4" />
          Admission Motion Flow
        </div>

        <h3 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
          From Trial To
          <span className="block text-yellow-400">Trusted Admission</span>
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
          Each step moves smoothly so parents can understand the journey before
          confirming admission.
        </p>
      </div>

      <div className="relative min-h-[500px] overflow-hidden [perspective:1400px]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[110px]" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === active;

          return (
            <div
              key={step.number}
              className="absolute left-1/2 top-12 w-[86%] max-w-[560px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={getCardStyle(index)}
            >
              <div
                className={`group relative overflow-hidden rounded-[36px] border p-7 backdrop-blur-2xl transition-all duration-500 ${
                  isActive
                    ? "border-yellow-400/65 bg-black/85 shadow-[0_0_45px_rgba(250,204,21,0.28),0_0_120px_rgba(250,204,21,0.16)]"
                    : "border-white/10 bg-black/70 shadow-[0_0_55px_rgba(0,0,0,0.50)]"
                }`}
              >
                {isActive && (
                  <>
                    <div className="pointer-events-none absolute -inset-1 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.24),transparent_45%)]" />
                    <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-yellow-300/25" />
                    <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent" />
                  </>
                )}

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-black transition-all duration-700 ${
                        isActive
                          ? "bg-yellow-400 shadow-[0_0_45px_rgba(250,204,21,0.48)]"
                          : "bg-yellow-400/80 shadow-[0_0_25px_rgba(250,204,21,0.25)]"
                      }`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>

                    <div className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300">
                      STEP {step.number}
                    </div>
                  </div>

                  <h4 className="text-3xl font-black text-white">
                    {step.title}
                  </h4>

                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 md:text-base">
                    {step.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300">
                    <CheckCircle2 className="h-4 w-4" />
                    {step.tag}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[30px] border border-yellow-400/20 bg-yellow-400/10 p-5 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_35px_rgba(250,204,21,0.35)]">
          <ActiveIcon className="h-7 w-7" />
        </div>

        <p className="text-lg font-black text-white">
          Current Step:{" "}
          <span className="text-yellow-400">{activeStep.title}</span>
        </p>

        <div className="mt-5 flex justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActive(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-10 bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.55)]"
                  : "w-3 bg-white/20 hover:bg-yellow-400/60"
              }`}
              aria-label={`Go to step ${step.number}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}