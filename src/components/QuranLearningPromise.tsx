import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Languages,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const ayahCards = [
  {
    label: "Correct Recitation",
    arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
    translation: "And recite the Quran with measured recitation.",
    reference: "Surah Al-Muzzammil 73:4",
  },
  {
    label: "Quran Made Easy",
    arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ",
    translation: "And We have certainly made the Quran easy to remember.",
    reference: "Surah Al-Qamar 54:17",
  },
];

const teachingPoints = [
  {
    icon: GraduationCap,
    title: "Qualified Quran Teachers",
    text: "Teachers guide students in Quran reading, Tajweed and Makharij with proper correction.",
  },
  {
    icon: UserCheck,
    title: "Correct Pronunciation",
    text: "Students learn step by step so reading becomes clear and confident.",
  },
  {
    icon: Languages,
    title: "English / Urdu Support",
    text: "Parents and students can communicate easily and stay informed.",
  },
];

const countries = [
  "UK",
  "USA",
  "Canada",
  "UAE",
  "Saudi",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
];

export default function QuranLearningPromise() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-10 text-white sm:px-6 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_36%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-yellow-300 backdrop-blur-xl sm:px-5 sm:text-xs">
             
            Worldwide Quran Teaching
          </div>

          <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">
            We Teach The Quran Correctly
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              To Students Worldwide
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base md:text-lg md:leading-8">
            Our online Quran classes help students around the world learn Quran
            reading and Tajweed with proper teacher correction, confidence and
            parent support.
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative overflow-hidden rounded-[28px] border border-yellow-400/20 bg-white/[0.04] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:rounded-[50px] sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_55%)]" />

          <div className="relative grid gap-5 xl:grid-cols-[0.95fr_1.05fr_0.9fr] xl:gap-6">
            {/* Left */}
            <div className="order-2 grid gap-4 xl:order-1">
              <div className="rounded-[24px] border border-yellow-400/15 bg-black/75 p-5 sm:rounded-[30px] sm:p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300">
                  <BookOpenCheck className="h-4 w-4" />
                  Quran Reminder
                </div>

                <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                  Quran must be learned with care, respect and correct
                  recitation.
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  We help parents understand that Quran learning should be clear,
                  structured and guided by qualified teachers.
                </p>
              </div>

              {ayahCards.map((ayah) => (
                <div
                  key={ayah.reference}
                  className="rounded-[24px] border border-yellow-400/20 bg-yellow-400/10 p-5 shadow-[0_0_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[28px]"
                >
                  <div className="mb-4 inline-flex rounded-full border border-yellow-400/25 bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-yellow-300">
                    {ayah.label}
                  </div>

                  <p
                    className="font-serif text-2xl font-bold leading-relaxed text-yellow-100 sm:text-3xl"
                    dir="rtl"
                  >
                    {ayah.arabic}
                  </p>

                  <p className="mt-4 text-sm font-semibold leading-7 text-zinc-200">
                    “{ayah.translation}”
                  </p>

                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
                    {ayah.reference}
                  </p>
                </div>
              ))}
            </div>

            {/* Center */}
            <div className="order-1 relative overflow-hidden rounded-[24px] border border-yellow-400/15 bg-black/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:min-h-[540px] sm:rounded-[42px] sm:p-5 xl:order-2 xl:min-h-[580px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16),transparent_58%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />

              <div className="relative z-20 flex items-center justify-center sm:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-black/75 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-yellow-300 backdrop-blur-xl sm:text-xs">
                  <Globe2 className="h-4 w-4" />
                  Quran Correctly Worldwide
                </div>
              </div>

              {/* Country chips */}
              <div className="relative z-20 mt-4 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:overflow-visible">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="shrink-0 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1.5 text-center text-[9px] font-black uppercase tracking-[0.08em] text-yellow-300 sm:px-3 sm:py-2 sm:text-[10px]"
                  >
                    {country}
                  </span>
                ))}
              </div>
                   <div className="relative z-10 mx-auto mt-3 flex h-[300px] items-center justify-center overflow-visible sm:mt-5 sm:h-[420px] xl:h-[460px]">
                <div className="world-scene">
                  <div className="world-orbit world-orbit-one" />
                  <div className="world-orbit world-orbit-two" />
                  <div className="world-orbit world-orbit-three" />

                  <div className="world-dot dot-one" />
                  <div className="world-dot dot-two" />
                  <div className="world-dot dot-three" />
                  <div className="world-dot dot-four" />
                  <div className="world-dot dot-five" />

                  <div className="world-sphere">
                    <div className="world-lines" />
                    <div className="world-lat lat-one" />
                    <div className="world-lat lat-two" />
                    <div className="world-lat lat-three" />
                    <div className="world-meridian meridian-one" />
                    <div className="world-meridian meridian-two" />
                    <div className="world-shine" />
                    <div className="world-shadow" />
                  </div>

                  <div className="world-center-card">
                    <BookOpen className="mx-auto h-7 w-7 text-black sm:h-8 sm:w-8" />
                    <p>Quran</p>
                    <span>Correctly Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="order-3 grid gap-4">
              <div className="rounded-[24px] border border-yellow-400/15 bg-black/75 p-5 sm:rounded-[30px] sm:p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300">
                  <ShieldCheck className="h-4 w-4" />
                  Our Teaching Promise
                </div>

                <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                  We help students recite Quran with confidence and correct
                  pronunciation.
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Parents should feel that their child is learning Quran in a
                  respectful and teacher-guided environment.
                </p>
              </div>

              <div className="grid gap-3">
                {teachingPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_24px_rgba(250,204,21,0.28)]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h4 className="text-sm font-black text-white">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-zinc-400">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-[24px] border border-yellow-400/20 bg-yellow-400/10 p-5 sm:rounded-[30px]">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-yellow-300" />
                  <h4 className="text-lg font-black text-white">
                    Parent Confidence
                  </h4>
                </div>

                <p className="text-sm leading-7 text-zinc-300">
                  Parents can start with a free trial, check the teacher and
                  continue only when satisfied.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons Only */}
          <div className="relative mt-5 flex flex-col items-center justify-center gap-3 rounded-[24px] border border-yellow-400/20 bg-black/55 p-4 sm:mt-6 sm:flex-row sm:rounded-[28px] sm:p-5">
            <Link
              to="/trial"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-[0_0_35px_rgba(250,204,21,0.30)] transition hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/courses"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-black/50 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-yellow-400/45 hover:text-yellow-300 sm:w-auto"
            >
              View Courses
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
  @keyframes sphereFloat {
    0%, 100% {
      transform: translateY(0px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: translateY(-8px) rotateX(4deg) rotateY(-5deg);
    }
  }

  @keyframes sphereSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes orbitSpin {
    from {
      transform: rotateX(68deg) rotateZ(0deg);
    }
    to {
      transform: rotateX(68deg) rotateZ(360deg);
    }
  }

  @keyframes orbitReverse {
    from {
      transform: rotateX(68deg) rotateZ(360deg);
    }
    to {
      transform: rotateX(68deg) rotateZ(0deg);
    }
  }

  @keyframes pulseDot {
    0%, 100% {
      transform: scale(1);
      opacity: 0.75;
    }
    50% {
      transform: scale(1.45);
      opacity: 0.18;
    }
  }

  @keyframes gridMove {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.04);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

 @keyframes orbitShineMove {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbitSoftPulse {
  0%, 100% {
    opacity: 0.55;
    filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.2));
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 18px rgba(250, 204, 21, 0.45));
  }
}
  @keyframes brightOrbitArc {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes latLineMove {
  from {
    transform: rotateX(58deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(58deg) rotateZ(360deg);
  }
}

@keyframes meridianLineMove {
  from {
    transform: rotateY(58deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(58deg) rotateZ(360deg);
  }
}

  .world-scene {
    position: relative;
    width: min(64vw, 250px) !important;
    height: min(64vw, 250px) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1200px;
    transform-style: preserve-3d;
  }

  .world-orbit {
  position: absolute;
  border-radius: 999px;
  border: 1.5px solid rgba(250, 204, 21, 0.28);
  box-shadow:
    0 0 18px rgba(250, 204, 21, 0.28),
    inset 0 0 18px rgba(250, 204, 21, 0.12);
  overflow: visible;
}

.world-orbit::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 210deg,
    rgba(250, 204, 21, 0.08) 235deg,
    rgba(250, 204, 21, 0.95) 275deg,
    rgba(254, 240, 138, 1) 300deg,
    transparent 330deg,
    transparent 360deg
  );
  filter: drop-shadow(0 0 14px rgba(250, 204, 21, 0.9));
  animation: brightOrbitArc 3s linear infinite;
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 5px),
    #000 calc(100% - 4px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 5px),
    #000 calc(100% - 4px)
  );
}

.world-orbit-one {
  width: 92% !important;
  height: 92% !important;
  animation: orbitSpin 24s linear infinite;
}

.world-orbit-one::after {
  animation-duration: 3s;
}

.world-orbit-two {
  width: 74% !important;
  height: 74% !important;
  animation: orbitReverse 32s linear infinite;
}

.world-orbit-two::after {
  animation-duration: 4.3s;
  animation-direction: reverse;
}

.world-orbit-three {
  width: 98% !important;
  height: 98% !important;
  opacity: 0.85;
  animation: orbitSpin 42s linear infinite;
}

.world-orbit-three::after {
  animation-duration: 5.5s;
}

  .world-dot {
    position: absolute;
    z-index: 5;
    width: 8px !important;
    height: 8px !important;
    border-radius: 999px;
    background: #facc15;
    box-shadow: 0 0 24px rgba(250, 204, 21, 0.95);
    animation: pulseDot 3s ease-in-out infinite;
  }

  .dot-one {
    left: 14%;
    top: 28%;
  }

  .dot-two {
    right: 12%;
    top: 34%;
    animation-delay: .5s;
  }

  .dot-three {
    left: 25%;
    bottom: 18%;
    animation-delay: 1s;
  }

  .dot-four {
    right: 23%;
    bottom: 18%;
    animation-delay: 1.5s;
  }

  .dot-five {
    left: 48%;
    top: 8%;
    animation-delay: 2s;
  }

  .world-sphere {
    position: relative;
    z-index: 10;
    width: 70% !important;
    height: 70% !important;
    border-radius: 999px;
    overflow: hidden;
    background:
      radial-gradient(circle at 30% 22%, rgba(254, 240, 138, 0.92), rgba(250, 204, 21, 0.22) 22%, transparent 34%),
      radial-gradient(circle at 68% 72%, rgba(250, 204, 21, 0.38), transparent 36%),
      radial-gradient(circle at 50% 50%, #1b1507 0%, #070707 58%, #000 100%);
    border: 1px solid rgba(250, 204, 21, 0.42);
    box-shadow:
      inset -28px -25px 60px rgba(0,0,0,0.9),
      inset 22px 16px 56px rgba(250,204,21,0.22),
      0 0 70px rgba(250,204,21,0.30),
      0 0 115px rgba(250,204,21,0.18);
    animation: sphereFloat 7s ease-in-out infinite;
    transform-style: preserve-3d;
  }

  .world-lines {
    position: absolute;
    inset: -20%;
    opacity: 0.78 !important;
    background:
      linear-gradient(90deg, rgba(250,204,21,0.14) 1px, transparent 1px),
      linear-gradient(0deg, rgba(250,204,21,0.12) 1px, transparent 1px),
      radial-gradient(circle at 25% 35%, rgba(250,204,21,0.50) 0 3px, transparent 4px),
      radial-gradient(circle at 65% 42%, rgba(250,204,21,0.42) 0 2px, transparent 3px),
      radial-gradient(circle at 52% 70%, rgba(250,204,21,0.38) 0 2px, transparent 3px);
    background-size: 34px 34px, 34px 34px, 120px 120px, 140px 140px, 130px 130px;
    animation: gridMove 22s linear infinite;
  }

  .world-lat,
.world-meridian {
  position: absolute;
  inset: 12%;
  border-radius: 999px;
  border: 1.5px solid rgba(250, 204, 21, 0.42) !important;
  box-shadow: 0 0 14px rgba(250, 204, 21, 0.22);
}

  .lat-one {
    transform: rotateX(58deg);
  }

  .lat-two {
    transform: rotateX(75deg) scale(0.78);
  }

  .lat-three {
    transform: rotateX(35deg) scale(0.92);
  }

  .meridian-one {
    transform: rotateY(58deg);
  }

  .meridian-two {
    transform: rotateY(75deg) rotateZ(28deg);
  }

  .world-shine {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 30% 22%, rgba(255,255,255,0.35), transparent 25%);
    mix-blend-mode: screen;
  }

  .world-shadow {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 74% 74%, rgba(0,0,0,0.82), transparent 46%);
  }

  .world-center-card {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 20;
    min-width: 100px !important;
    width: 100px !important;
    max-width: 100px !important;
    transform: translate(-50%, -50%) scale(1) !important;
    border-radius: 17px !important;
    border: 1px solid rgba(250,204,21,0.32);
    background: rgba(250,204,21,0.94);
    padding: 9px 10px !important;
    text-align: center;
    color: #000;
    box-shadow: 0 0 40px rgba(250,204,21,0.26);
    backdrop-filter: blur(18px);
  }

  .world-center-card svg {
    width: 22px !important;
    height: 22px !important;
  }

  .world-center-card p {
    margin-top: 5px !important;
    font-size: 10px !important;
    line-height: 1.1 !important;
    font-weight: 900;
  }

  .world-center-card span {
    margin-top: 2px !important;
    display: block;
    font-size: 6.5px !important;
    line-height: 1.1 !important;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.04em !important;
  }

  @media (min-width: 640px) {
    .world-scene {
      width: min(82vw, 390px) !important;
      height: min(82vw, 390px) !important;
    }

    .world-dot {
      width: 14px !important;
      height: 14px !important;
    }

    .world-sphere {
      width: 62% !important;
      height: 62% !important;
      background:
        radial-gradient(circle at 32% 25%, rgba(254, 240, 138, 0.72), rgba(250, 204, 21, 0.16) 20%, transparent 31%),
        radial-gradient(circle at 65% 70%, rgba(250, 204, 21, 0.28), transparent 34%),
        radial-gradient(circle at 50% 50%, #141006 0%, #050505 58%, #000 100%);
      box-shadow:
        inset -24px -22px 60px rgba(0,0,0,0.95),
        inset 18px 14px 50px rgba(250,204,21,0.16),
        0 0 48px rgba(250,204,21,0.20),
        0 0 90px rgba(250,204,21,0.12);
    }

    .world-lines {
      opacity: 0.55 !important;
      background:
        linear-gradient(90deg, rgba(250,204,21,0.08) 1px, transparent 1px),
        linear-gradient(0deg, rgba(250,204,21,0.07) 1px, transparent 1px),
        radial-gradient(circle at 25% 35%, rgba(250,204,21,0.38) 0 3px, transparent 4px),
        radial-gradient(circle at 65% 42%, rgba(250,204,21,0.30) 0 2px, transparent 3px),
        radial-gradient(circle at 52% 70%, rgba(250,204,21,0.26) 0 2px, transparent 3px);
      background-size: 44px 44px, 44px 44px, 140px 140px, 170px 170px, 150px 150px;
      animation: sphereSpin 34s linear infinite;
    }

    .world-lat,
    .world-meridian {
      border-color: rgba(250, 204, 21, 0.14) !important;
    }

    .world-orbit-one {
      width: 94% !important;
      height: 94% !important;
    }

    .world-orbit-two {
      width: 74% !important;
      height: 74% !important;
    }

    .world-orbit-three {
      width: 108% !important;
      height: 108% !important;
    }

    .world-center-card {
      min-width: 155px !important;
      width: auto !important;
      max-width: none !important;
      transform: translate(-50%, -50%) scale(1) !important;
      padding: 15px 16px !important;
      border-radius: 24px !important;
    }

    .world-center-card svg {
      width: 32px !important;
      height: 32px !important;
    }

    .world-center-card p {
      margin-top: 8px !important;
      font-size: 15px !important;
    }

    .world-center-card span {
      margin-top: 3px !important;
      font-size: 10px !important;
      letter-spacing: 0.1em !important;
    }
  }
`}</style>
    </section>
  );
}