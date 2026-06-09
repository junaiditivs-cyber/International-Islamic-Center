import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  Home,
  MoonStar,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export default function Sunnah() {
  const coreValues: FeatureCard[] = [
    {
      icon: HeartHandshake,
      title: "Beautiful Character",
      text: "Students learn kindness, honesty, respect, patience, forgiveness, and gentle speech.",
    },
    {
      icon: ScrollText,
      title: "Daily Sunnah Habits",
      text: "We teach practical Sunnah habits that children can follow at home, in class, and in daily life.",
    },
    {
      icon: ShieldCheck,
      title: "Authentic Guidance",
      text: "Lessons are based on Quranic guidance and authentic teachings of Prophet Muhammad ﷺ.",
    },
  ];

  const learningPoints = [
    "Daily duas for routine life",
    "Islamic manners and adab",
    "Respect for parents and teachers",
    "Kindness, mercy and forgiveness",
    "Good speech and honesty",
    "Cleanliness and personal habits",
    "Stories from the life of the Prophet ﷺ",
    "Love for Prophet Muhammad ﷺ",
  ];

  const classJourney = [
    {
      step: "01",
      title: "Understand",
      text: "Students first understand the meaning and value of the Sunnah in simple words.",
    },
    {
      step: "02",
      title: "Practice",
      text: "They practice daily duas, manners and habits in a calm teacher-led environment.",
    },
    {
      step: "03",
      title: "Apply",
      text: "The goal is to help students apply Islamic manners in real daily life.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.12),transparent_36%),linear-gradient(180deg,#000_0%,#080705_55%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 backdrop-blur-xl transition hover:bg-yellow-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Home
          </Link>

          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.15)] backdrop-blur-xl">
                 
                Sunnah & Character Program
              </div>

              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[26px] bg-yellow-400 text-black shadow-[0_0_45px_rgba(250,204,21,0.42)]">
                <ScrollText className="h-10 w-10" />
              </div>

              <h1 className="text-6xl font-black leading-tight tracking-tight md:text-8xl">
                Sunnah
                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  & Adab
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-2xl font-black leading-relaxed text-white">
                Help your child build Islamic manners, daily duas, respect,
                kindness, and love for Prophet Muhammad ﷺ.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Our Sunnah program is designed for children, beginners, and
                families who want Islamic learning that is practical, gentle,
                and connected to daily life. Students learn beautiful manners,
                Prophet stories, duas, and simple Sunnah habits with love and
                teacher guidance.
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

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-[64px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.24),transparent_62%)] blur-3xl" />

              <div className="relative overflow-hidden rounded-[56px] border border-yellow-400/30 bg-black/70 p-4 shadow-[0_0_130px_rgba(250,204,21,0.20)] backdrop-blur-2xl md:p-5">
                <div className="pointer-events-none absolute left-7 top-7 z-20 h-14 w-14 border-l border-t border-yellow-400/45" />
                <div className="pointer-events-none absolute right-7 top-7 z-20 h-14 w-14 border-r border-t border-yellow-400/45" />
                <div className="pointer-events-none absolute bottom-7 left-7 z-20 h-14 w-14 border-b border-l border-yellow-400/45" />
                <div className="pointer-events-none absolute bottom-7 right-7 z-20 h-14 w-14 border-b border-r border-yellow-400/45" />

                <div className="relative overflow-hidden rounded-[44px] bg-black">
                  <img
                    src="/images/topics/sunnah-main.png"
                    alt="Sunnah learning"
                    className="h-auto w-full rounded-[44px] object-contain shadow-[0_0_80px_rgba(0,0,0,0.85)]"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[44px] bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
                      Sunnah Program
                    </div>

                    <h2 className="text-4xl font-black md:text-5xl">
                      Learn Sunnah Online
                    </h2>

                    <p className="mt-3 max-w-xl text-zinc-300">
                      Practical Islamic manners for children and families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST CARDS */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {coreValues.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[30px] border border-yellow-400/20 bg-yellow-400/10 p-6 shadow-[0_0_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-yellow-400/15"
                >
                  <Icon className="mb-4 h-8 w-8 text-yellow-400" />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QURANIC GUIDANCE */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_36%),linear-gradient(180deg,#000_0%,#080705_55%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[44px] border border-yellow-400/25 bg-yellow-400/10 p-8 shadow-[0_0_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
              <ShieldCheck className="mb-7 h-10 w-10 text-yellow-400" />

              <p className="font-serif text-3xl leading-relaxed text-yellow-400 md:text-5xl">
                لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ
              </p>

              <p className="mt-6 text-lg text-zinc-300">
                “Indeed, in the Messenger of Allah you have an excellent
                example.”
              </p>

              <p className="mt-3 text-lg font-black text-yellow-300">
                Surah Al-Ahzab 33:21
              </p>
            </div>

            <div className="rounded-[44px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                Why Sunnah Matters
              </div>

              <h2 className="text-4xl font-black">
                The Sunnah Builds A Better Muslim Character
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                The Sunnah teaches students how to live Islam with love, mercy,
                discipline, respect, cleanliness, and good manners. It helps
                children understand that Islam is not only something we study,
                but something we practice every day.
              </p>

              <div className="mt-8 rounded-[28px] border border-yellow-400/20 bg-yellow-400/10 p-6">
                <p className="font-serif text-2xl leading-relaxed text-yellow-400">
                  قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ
                </p>

                <p className="mt-4 text-zinc-300">
                  “Say, if you love Allah, then follow me; Allah will love you.”
                </p>

                <p className="mt-3 font-black text-yellow-300">
                  Surah Aal-Imran 3:31
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT STUDENTS LEARN */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-black" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300">
              <CheckCircle2 className="h-4 w-4" />
              What Students Learn
            </div>

            <h2 className="text-4xl font-black md:text-6xl">
              Simple Lessons,
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Daily Practice
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-zinc-400">
              We keep Sunnah learning practical, age-friendly and easy for
              children to apply at home and in class.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learningPoints.map((item) => (
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

      {/* CLASS JOURNEY */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.14),transparent_36%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300">
              <Users className="h-4 w-4" />
              How We Teach Sunnah
            </div>

            <h2 className="text-4xl font-black md:text-6xl">
              Learn, Practice
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                And Apply
              </span>
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {classJourney.map((item) => (
              <div
                key={item.step}
                className="group rounded-[40px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-yellow-400/10"
              >
                <div className="mb-6 text-6xl font-black text-yellow-400/25">
                  {item.step}
                </div>

                <h3 className="text-3xl font-black">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHENTIC HADITH */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-black" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="overflow-hidden rounded-[50px] border border-yellow-400/25 bg-yellow-400/10 p-8 shadow-[0_0_90px_rgba(250,204,21,0.14)] backdrop-blur-2xl md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Authentic Hadith
                </div>

                <h2 className="text-3xl font-black md:text-5xl">
                  The Best Are Those With The Best Character
                </h2>

                <p className="mt-4 max-w-2xl text-zinc-300">
                  This is the heart of our Sunnah program: helping students
                  become better Muslims through beautiful manners and character.
                </p>
              </div>

              <div className="rounded-[34px] border border-yellow-400/20 bg-black/45 p-7">
                <Star className="mb-5 h-8 w-8 text-yellow-400" />

                <p className="text-2xl font-black leading-relaxed text-white">
                  “The best among you are those who have the best manners and
                  character.”
                </p>

                <p className="mt-5 font-black text-yellow-300">
                  Sahih al-Bukhari 3559
                </p>
              </div>
            </div>
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
                Build Beautiful Islamic Character
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
                Book a free trial class and help your child learn Sunnah,
                manners and daily Islamic habits in a calm online environment.
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