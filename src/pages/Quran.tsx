import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BookMarked,
  CheckCircle2,
  Clock3,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";

export default function Quran() {
  const learningSteps = [
    {
      icon: BookOpen,
      title: "Quran Reading",
      text: "Students learn Quran reading from basic level with clear pronunciation and regular teacher correction.",
    },
    {
      icon: BookMarked,
      title: "Tajweed Practice",
      text: "Rules of Tajweed are taught slowly with examples so students can recite beautifully and correctly.",
    },
    {
      icon: ShieldCheck,
      title: "Teacher Correction",
      text: "Every student receives personal guidance, correction and support during live online classes.",
    },
    {
      icon: HeartHandshake,
      title: "Love For Quran",
      text: "We focus on building respect, love and connection with the Book of Allah, not only reading words.",
    },
  ];

  const highlights = [
    "Beginner-friendly Quran reading",
    "Correct Arabic pronunciation",
    "Tajweed with live correction",
    "Fluency and confidence building",
    "One-to-one teacher attention",
    "Structured revision and practice",
  ];

  const whyQuranMatters = [
    {
      icon: Compass,
      title: "Guidance From Allah",
      text: "The Quran guides the heart, mind and actions. It teaches students how to live with purpose, faith and responsibility.",
    },
    {
      icon: HeartHandshake,
      title: "Faith And Character",
      text: "Learning Quran helps students grow in iman, patience, manners, discipline and respect for Islamic values.",
    },
    {
      icon: BookMarked,
      title: "Beauty Of Tajweed",
      text: "Correct recitation with Tajweed preserves the beauty, rhythm and meaning of the words of Allah.",
    },
    {
      icon: Users,
      title: "Islamic Identity",
      text: "When children connect with Quran from a young age, they build confidence, adab and a strong Muslim identity.",
    },
  ];

  const classFocus = [
    "Noorani Qaida / basic Arabic letters",
    "Makharij and correct pronunciation",
    "Tajweed rules step by step",
    "Quran reading fluency",
    "Hifz support and revision",
    "Daily practice with teacher correction",
    "Respect and adab of reciting Quran",
    "Building love for the Book of Allah",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36">
        {/* Premium background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.14),transparent_38%),linear-gradient(180deg,#000_0%,#080705_55%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 backdrop-blur-xl transition hover:bg-yellow-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Home
          </Link>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.15)] backdrop-blur-xl">
                 
                Premium Islamic Learning Program
              </div>

              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[26px] bg-yellow-400 text-black shadow-[0_0_45px_rgba(250,204,21,0.42)]">
                <BookOpen className="h-10 w-10" />
              </div>

              <h1 className="text-6xl font-black leading-tight tracking-tight md:text-8xl">
                Quran
                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Reading
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-2xl font-black leading-relaxed text-white">
                Learn Quran with correct recitation, Tajweed, fluency,
                understanding, and love for the Book of Allah.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Our Quran program is designed for kids, beginners, and adults
                who want to learn in a calm, respectful, and structured Islamic
                environment. Each student receives personal attention, regular
                correction, and step-by-step progress tracking.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/trial"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-[0_0_50px_rgba(250,204,21,0.40)] transition-all hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-[0_0_70px_rgba(250,204,21,0.55)]"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:border-yellow-400/50 hover:text-yellow-300"
                >
                  Explore Courses
                  <BookOpen className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-[64px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.24),transparent_62%)] blur-3xl" />

              <div className="relative overflow-hidden rounded-[56px] border border-yellow-400/30 bg-black/70 p-4 shadow-[0_0_130px_rgba(250,204,21,0.20)] backdrop-blur-2xl md:p-5">
                <div className="pointer-events-none absolute left-7 top-7 z-20 h-14 w-14 border-l border-t border-yellow-400/45" />
                <div className="pointer-events-none absolute right-7 top-7 z-20 h-14 w-14 border-r border-t border-yellow-400/45" />
                <div className="pointer-events-none absolute bottom-7 left-7 z-20 h-14 w-14 border-b border-l border-yellow-400/45" />
                <div className="pointer-events-none absolute bottom-7 right-7 z-20 h-14 w-14 border-b border-r border-yellow-400/45" />

                <div className="relative overflow-hidden rounded-[44px] bg-black">
                  <img decoding="async"
                    src="/images/topics/quran-reading.webp"
                    alt="Quran learning"
                    className="h-auto w-full rounded-[44px] object-contain shadow-[0_0_80px_rgba(0,0,0,0.85)]"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[44px] bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
                      Quran Program
                    </div>

                    <h2 className="text-4xl font-black md:text-5xl">
                      Learn Quran Online
                    </h2>

                    <p className="mt-3 max-w-xl text-zinc-300">
                      Live classes with professional Quran teachers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Qualified Teachers",
                text: "Patient online tutors",
              },
              {
                icon: Clock3,
                title: "Flexible Timing",
                text: "Classes for global students",
              },
              {
                icon: Layers,
                title: "Structured Plan",
                text: "Step-by-step learning path",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-yellow-400/20 bg-yellow-400/10 p-6 shadow-[0_0_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                >
                  <Icon className="mb-4 h-7 w-7 text-yellow-400" />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QURAN MESSAGE */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_36%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[44px] border border-yellow-400/25 bg-yellow-400/10 p-8 shadow-[0_0_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
              <ShieldCheck className="mb-7 h-10 w-10 text-yellow-400" />

              <p className="font-serif text-4xl leading-relaxed text-yellow-400 md:text-5xl">
                وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
              </p>

              <p className="mt-6 text-lg text-zinc-300">
                “And recite the Quran with measured recitation.”
              </p>

              <p className="mt-3 text-lg font-black text-yellow-300">
                Surah Al-Muzzammil 73:4
              </p>
            </div>

            <div className="rounded-[44px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                Quran Message
              </div>

              <h2 className="text-4xl font-black">
                A Complete Quran Learning Path
              </h2>

              <p className="mt-4 max-w-3xl text-zinc-400">
                Our Quran classes are designed to help students improve reading,
                pronunciation, Tajweed, fluency and confidence with a clear
                learning plan.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                    <p className="text-sm font-semibold leading-relaxed text-zinc-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LEARNING QURAN MATTERS */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_36%),linear-gradient(180deg,#000_0%,#080705_55%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300">
               
              Why Learning Quran Matters
            </div>

            <h2 className="text-4xl font-black md:text-6xl">
              Guidance For The Heart,
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Life And Character
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-zinc-400">
              Quran learning is not only about reading. It builds faith, adab,
              discipline and a lifelong connection with Allah’s words.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {whyQuranMatters.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[38px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-yellow-400/10"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_35px_rgba(250,204,21,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-black">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUIDANCE VERSE */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="overflow-hidden rounded-[48px] border border-yellow-400/25 bg-yellow-400/10 p-8 shadow-[0_0_90px_rgba(250,204,21,0.14)] backdrop-blur-2xl md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Quranic Guidance
                </div>

                <h2 className="text-3xl font-black md:text-5xl">
                  The Quran Guides To What Is Most Upright
                </h2>

                <p className="mt-4 max-w-2xl text-zinc-300">
                  This verse beautifully reminds students and parents that the
                  Quran is guidance for belief, worship, manners and daily life.
                </p>
              </div>

              <div className="rounded-[34px] border border-yellow-400/20 bg-black/45 p-7">
                <p className="font-serif text-3xl leading-relaxed text-yellow-400 md:text-4xl">
                  إِنَّ هَـٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ
                </p>

                <p className="mt-5 text-zinc-300">
                  “Indeed, this Quran guides to that which is most upright.”
                </p>

                <p className="mt-3 font-black text-yellow-300">
                  Surah Al-Isra 17:9
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE FOCUS ON IN QURAN CLASSES */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-black" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300">
              <Target className="h-4 w-4" />
              What We Focus On In Quran Classes
            </div>

            <h2 className="text-4xl font-black md:text-6xl">
              Clear, Structured
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                And Teacher-Guided
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-zinc-400">
              Every class is designed to help students improve step by step
              without pressure, confusion or fear.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {classFocus.map((item) => (
              <div
                key={item}
                className="group rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-yellow-400/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_28px_rgba(250,204,21,0.30)]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <p className="text-base font-black leading-relaxed text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING STEPS */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-black" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300">
              <Star className="h-4 w-4" />
              Learning Experience
            </div>

            <h2 className="text-4xl font-black md:text-6xl">
              Built For Serious
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Quran Progress
              </span>
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {learningSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group rounded-[38px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-yellow-400/10"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_35px_rgba(250,204,21,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-black">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 pb-32 pt-10">
        <div className="mx-auto max-w-[1450px]">
          <div className="relative overflow-hidden rounded-[50px] border border-yellow-400/25 bg-yellow-400/10 p-8 text-center shadow-[0_0_90px_rgba(250,204,21,0.14)] backdrop-blur-2xl md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.18),transparent_55%)]" />

            <div className="relative z-10">
              <Star className="mx-auto mb-5 h-10 w-10 text-yellow-400" />

              <h2 className="text-4xl font-black md:text-5xl">
                Start Your Quran Journey Today
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
                Book a free trial class and experience professional online Quran
                learning with a patient teacher and structured lesson plan.
              </p>

              <Link
                to="/trial"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-yellow-400 px-9 py-4 font-black text-black shadow-[0_0_45px_rgba(250,204,21,0.38)] transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Book Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}