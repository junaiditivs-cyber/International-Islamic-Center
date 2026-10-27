import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  GraduationCap,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useInViewport from "./useInViewport";

const regions = [
  {
    name: "UK & Europe",
    short: "Europe",
    position: "left-[43%] top-[25%]",
  },
  {
    name: "USA & Canada",
    short: "North America",
    position: "left-[23%] top-[43%]",
  },
  {
    name: "UAE & GCC",
    short: "GCC",
    position: "left-[61%] top-[48%]",
  },
  {
    name: "Saudi Arabia",
    short: "Saudi",
    position: "left-[55%] top-[62%]",
  },
  {
    name: "Australia",
    short: "Australia",
    position: "left-[76%] top-[70%]",
  },
  {
    name: "Global Families",
    short: "Global",
    position: "left-[72%] top-[34%]",
  },
];

const trustCards = [
  { icon: ShieldCheck, title: "Safe Classes" },
  { icon: GraduationCap, title: "Qualified Tutors" },
  { icon: Clock, title: "Flexible Timing" },
  { icon: CalendarCheck, title: "Parent Support" },
];

export default function GlobalTrustGlobeCTA() {
  const [active, setActive] = useState(0);
  const activeRegion = regions[active];
  const rootRef = useRef<HTMLElement | null>(null);
  const inView = useInViewport(rootRef);

  useEffect(() => {
    if (!inView) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % regions.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [inView]);

  return (
    <section ref={rootRef} className="relative overflow-x-hidden overflow-y-hidden bg-black px-4 py-20 text-white touch-pan-y sm:px-6 lg:py-32">
      <div className="absolute inset-0 bg-black" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)] bg-[size:78px_78px]" />

      <div className="trust-glow-one pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[140px]" />
      <div className="trust-glow-two pointer-events-none absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-yellow-400/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] overflow-x-hidden">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
             
            Global Parent Trust
          </div>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Trusted By Parents
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Families from 50+ countries choose our ISLAMIC CENTER for Quran, Tajweed,
            Hifz, Salah, Duas and Islamic manners.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-yellow-400/20 bg-white/[0.035] p-4 shadow-[0_40px_130px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:rounded-[50px] sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.10),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[30px] border border-yellow-400/15 bg-black/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:rounded-[40px] sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_45%)]" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
                  <MapPin className="h-4 w-4" />
                  Active Region
                </div>

                <h3 className="text-3xl font-black text-white sm:text-5xl">
                  {activeRegion.name}
                </h3>

                <div className="mt-6 rounded-[26px] border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="text-sm font-bold leading-7 text-zinc-300">
                    Parents trust us for safe classes, qualified teachers,
                    flexible timing and regular progress support.
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {trustCards.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="trust-card-hover rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                      >
                        <Icon className="mb-3 h-5 w-5 text-yellow-400" />
                        <h4 className="text-sm font-black text-white">
                          {item.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/trial"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-[0_0_50px_rgba(250,204,21,0.38)] transition hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto"
                  >
                    Start 3-Day Free Trial
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/how-it-works"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.045] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-yellow-400/45 hover:text-yellow-300 sm:w-auto"
                  >
                    How It Works
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-yellow-400/15 bg-black/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:min-h-[540px] sm:rounded-[40px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.14),transparent_56%)]" />

            <div className="country-chip-wrap">
  <div className="float-chip chip-one">UK & Europe</div>
  <div className="float-chip chip-two">USA & Canada</div>
  <div className="float-chip chip-three">UAE & GCC</div>
</div>

              <div className="relative mx-auto mt-32 flex h-[280px] w-[280px] items-center justify-center rounded-full sm:mt-12 sm:h-[430px] sm:w-[430px]">
                <div className="ring-spin absolute inset-0 rounded-full border border-yellow-400/18">
                  <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,0.95)]" />
                  <span className="absolute bottom-12 left-8 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.85)]" />
                </div>

                <div className="ring-spin-reverse absolute inset-[34px] rounded-full border border-yellow-400/14">
                  <span className="absolute -right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-yellow-200 shadow-[0_0_22px_rgba(250,204,21,0.95)]" />
                  <span className="absolute left-10 top-8 h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.85)]" />
                </div>

                <div className="globe-float relative h-[230px] w-[230px] rounded-full border border-yellow-400/25 bg-black shadow-[inset_-30px_-24px_75px_rgba(0,0,0,0.98),inset_24px_14px_55px_rgba(250,204,21,0.12),0_0_100px_rgba(250,204,21,0.22)] sm:h-[350px] sm:w-[350px]">
                  <div className="globe-surface absolute inset-0 rounded-full opacity-85" />

                  <div className="absolute inset-[15px] rounded-full border border-yellow-400/15 sm:inset-[18px]" />
                  <div className="absolute inset-[42px] rounded-full border border-yellow-400/10 sm:inset-[58px]" />

                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-yellow-400/15" />
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-yellow-400/15" />
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-45 bg-yellow-400/10" />
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-45 bg-yellow-400/10" />

                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 400 400"
                  >
                    <path
                      d="M75 195 C135 80, 270 95, 335 175"
                      fill="none"
                      stroke="#facc15"
                      strokeOpacity="0.46"
                      strokeWidth="2"
                    />
                    <path
                      d="M150 120 C225 100, 320 150, 350 250"
                      fill="none"
                      stroke="#facc15"
                      strokeOpacity="0.34"
                      strokeWidth="2"
                    />
                    <path
                      d="M185 245 C245 315, 320 300, 365 238"
                      fill="none"
                      stroke="#facc15"
                      strokeOpacity="0.34"
                      strokeWidth="2"
                    />
                  </svg>

                  {regions.map((region, index) => {
                    const isActive = index === active;

                    return (
                      <button
                        key={region.name}
                        type="button"
                        onClick={() => setActive(index)}
                        className={`absolute ${region.position} z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border px-2 py-1.5 text-[10px] font-black backdrop-blur-xl transition-all duration-500 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs ${
                          isActive
                            ? "scale-110 border-yellow-300 bg-yellow-400 text-black shadow-[0_0_35px_rgba(250,204,21,0.6)]"
                            : "border-yellow-400/35 bg-black/85 text-white hover:scale-105 hover:border-yellow-300"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${
                            isActive
                              ? "bg-black"
                              : "bg-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.9)]"
                          }`}
                        />
                        <span className="hidden sm:inline">{region.short}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-6 grid gap-4 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[28px] border border-yellow-400/20 bg-black/75 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.65)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-yellow-400/45">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_45%)]" />

              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_35px_rgba(250,204,21,0.35)]">
                    <GraduationCap className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                      Male Teacher Availability
                    </p>
                    <h4 className="mt-1 text-2xl font-black text-white">
                      Male Quran Tutors Available
                    </h4>
                  </div>
                </div>

                <span className="w-fit rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300">
                  Online Classes
                </span>
              </div>

              <p className="relative z-10 mt-5 text-sm leading-7 text-zinc-300">
                Students can learn Quran, Tajweed, Hifz, Salah and Duas with
                qualified male teachers in a safe and respectful online
                environment.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-yellow-400/20 bg-black/75 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.65)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-yellow-400/45">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_45%)]" />

              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_35px_rgba(250,204,21,0.35)]">
                    <Users className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                      Female Teacher Availability
                    </p>
                    <h4 className="mt-1 text-2xl font-black text-white">
                      Female Quran Tutors Available
                    </h4>
                  </div>
                </div>

                <span className="w-fit rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300">
                  Parent Preferred
                </span>
              </div>

              <p className="relative z-10 mt-5 text-sm leading-7 text-zinc-300">
                Female teachers are available for girls, kids and families who
                prefer a female tutor for Quran reading, Tajweed, Islamic
                manners and regular learning support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes surfaceSpin {
          0% {
            transform: rotate(0deg);
            background-position: 0px 0px;
          }
          100% {
            transform: rotate(360deg);
            background-position: 420px 0px;
          }
        }

        @keyframes ringSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ringReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes floatGlobe {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-12px) rotateX(4deg) rotateY(-5deg);
          }
        }

        @keyframes floatChip {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes glowMoveOne {
          0%, 100% {
            transform: translate3d(0,0,0) scale(1);
          }
          50% {
            transform: translate3d(20px,-16px,0) scale(1.08);
          }
        }

        @keyframes glowMoveTwo {
          0%, 100% {
            transform: translate3d(0,0,0) scale(1);
          }
          50% {
            transform: translate3d(-20px,16px,0) scale(1.08);
          }
        }

        .globe-surface {
          animation: surfaceSpin 34s linear infinite;
          background:
            radial-gradient(circle at 28% 35%, rgba(250,204,21,0.38) 0 2px, transparent 3px),
            radial-gradient(circle at 62% 42%, rgba(250,204,21,0.32) 0 2px, transparent 3px),
            radial-gradient(circle at 70% 62%, rgba(250,204,21,0.28) 0 2px, transparent 3px),
            radial-gradient(circle at 42% 70%, rgba(250,204,21,0.22) 0 2px, transparent 3px),
            linear-gradient(90deg, rgba(250,204,21,0.08) 1px, transparent 1px),
            linear-gradient(0deg, rgba(250,204,21,0.06) 1px, transparent 1px);
          background-size: 120px 120px, 160px 160px, 180px 180px, 140px 140px, 42px 42px, 42px 42px;
        }

        .ring-spin {
          animation: ringSpin 20s linear infinite;
        }

        .ring-spin-reverse {
          animation: ringReverse 30s linear infinite;
        }

        .globe-float {
          animation: floatGlobe 7s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .float-chip {
          position: absolute;
          z-index: 35;
          border-radius: 18px;
          border: 1px solid rgba(250, 204, 21, 0.22);
          background: rgba(0, 0, 0, 0.76);
          padding: 12px 16px;
          color: #fde047;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(18px);
          animation: floatChip 6s ease-in-out infinite;
        }

        .chip-one {
          left: 28px;
          top: 110px;
        }

        .chip-two {
          right: 30px;
          top: 145px;
          animation-delay: .7s;
        }

        .chip-three {
          right: 52px;
          bottom: 140px;
          animation-delay: 1.3s;
        }

        .trust-card-hover {
          transition: transform .35s ease, border-color .35s ease, background .35s ease;
        }

        .trust-card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(250, 204, 21, 0.4);
          background: rgba(250, 204, 21, 0.08);
        }

        .trust-glow-one {
          animation: glowMoveOne 12s ease-in-out infinite;
        }

        .trust-glow-two {
          animation: glowMoveTwo 14s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .globe-surface {
            animation-duration: 48s;
          }
        }
      `}</style>
    </section>
  );
}