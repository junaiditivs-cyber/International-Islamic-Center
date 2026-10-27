import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ScrollText,
  Star,
} from "lucide-react";

export default function Sunnah() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative px-6 pb-28 pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.12),transparent_38%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 backdrop-blur-xl hover:bg-yellow-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Home
          </Link>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 backdrop-blur-xl">
                 
                Sunnah And Character Program
              </div>

              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[26px] bg-yellow-400 text-black shadow-[0_0_45px_rgba(250,204,21,0.40)]">
                <ScrollText className="h-10 w-10" />
              </div>

              <h1 className="text-6xl font-black leading-tight md:text-8xl">
                Sunnah
                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Manners
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-2xl font-black leading-relaxed text-white">
                Build beautiful Islamic manners, daily duas and strong character.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
                Students learn daily duas, respect, kindness, Islamic habits and
                stories from the life of the Prophet ﷺ in a simple and practical way.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/trial"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-[0_0_45px_rgba(250,204,21,0.38)] transition-all hover:-translate-y-1 hover:bg-yellow-300"
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

            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-[60px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.22),transparent_62%)] blur-3xl" />

              <div className="relative overflow-hidden rounded-[52px] border border-yellow-400/30 bg-black/70 p-4 shadow-[0_0_120px_rgba(250,204,21,0.18)] backdrop-blur-2xl md:p-5">
                <img decoding="async"
                  src="/images/topics/sunnah-main.webp"
                  alt="Sunnah learning"
                  className="h-auto w-full rounded-[40px] object-contain shadow-[0_0_80px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[42px] border border-yellow-400/25 bg-yellow-400/10 p-8 backdrop-blur-2xl">
              <p className="font-serif text-4xl leading-relaxed text-yellow-400">
                لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ
              </p>
              <p className="mt-5 text-lg font-black text-yellow-300">
                Surah Al-Ahzab 33:21
              </p>
            </div>

            <div className="rounded-[42px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
              <h2 className="mb-6 text-3xl font-black">What Students Learn</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Daily duas for routine life",
                  "Islamic manners at home and class",
                  "Stories of the Prophet ﷺ",
                  "Respect and kindness",
                  "Good character building",
                  "Practical Sunnah habits",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/35 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                    <p className="text-sm font-semibold text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[42px] border border-yellow-400/25 bg-yellow-400/10 p-8 text-center">
            <Star className="mx-auto mb-4 h-9 w-9 text-yellow-400" />
            <h3 className="text-3xl font-black">Build Islamic Character</h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Learn Sunnah with love, respect and practical daily guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}