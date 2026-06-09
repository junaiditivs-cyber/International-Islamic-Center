import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import QuranModel from "./QuranModel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-20 bg-black text-white overflow-hidden">
      {/* BACKGROUND LAYERS */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.14),transparent_36%)]" />
      <div className="pointer-events-none absolute top-24 right-16 w-80 h-80 bg-yellow-400/20 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-80 h-80 bg-yellow-400/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="relative z-30 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Premium Islamic Online Quran ISLAMIC CENTER
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Illuminate Your Heart
            <span className="block text-yellow-400">With Quran</span>
          </h1>

          <p className="mt-7 text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Begin a beautiful Quran learning journey from home. Our certified
            male and female tutors help students read, recite and memorize the
            Holy Quran with Tajweed, Adab and Islamic manners.
          </p>

          {/* BUTTONS */}
          <div className="relative z-40 mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/trial"
              className="relative z-50 group inline-flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:bg-yellow-300 transition-all shadow-[0_0_40px_rgba(250,204,21,0.35)]"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              to="/how-it-works"
              className="relative z-50 inline-flex items-center justify-center gap-3 border border-white/15 bg-white/5 px-8 py-4 rounded-2xl font-bold hover:border-yellow-400/40 hover:bg-yellow-400/10 transition-all"
            >
              <PlayCircle className="w-5 h-5" />
              How It Works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-zinc-300">
            {["3-Day free trial", "Flexible timings", "Male & female tutors"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-12 inline-flex items-center gap-4 bg-white/5 border border-yellow-400/20 rounded-3xl p-5 backdrop-blur-sm">
            <div className="w-14 h-14 bg-yellow-400 text-black rounded-2xl flex items-center justify-center">
              <BookOpen className="w-7 h-7" />
            </div>

            <div className="text-left">
              <p className="font-black text-yellow-300">
                Quran Learning With Tajweed & Adab
              </p>
              <p className="text-sm text-zinc-400">
                Let your child experience our teaching style before joining.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT 3D MODEL */}
        <div className="relative z-10">
          <div className="pointer-events-none absolute inset-0 bg-yellow-400/20 blur-[90px] rounded-full" />

          <div className="relative rounded-[40px] border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-5 md:p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            <div className="rounded-[32px] bg-black/70 border border-white/10 p-4 min-h-[360px] md:min-h-[420px] flex items-center justify-center overflow-hidden relative">
              <QuranModel />
            </div>

            <div className="pointer-events-none absolute -left-3 md:-left-5 top-10 md:top-14 rounded-2xl border border-yellow-400/20 bg-black/85 backdrop-blur-xl px-4 md:px-5 py-3 md:py-4 shadow-xl">
              <p className="text-yellow-400 font-black">24/7</p>
              <p className="text-xs text-zinc-400">Global Timings</p>
            </div>

            <div className="pointer-events-none absolute -right-3 md:-right-5 bottom-10 md:bottom-14 rounded-2xl border border-yellow-400/20 bg-black/85 backdrop-blur-xl px-4 md:px-5 py-3 md:py-4 shadow-xl">
              <p className="text-yellow-400 font-black">1-on-1</p>
              <p className="text-xs text-zinc-400">Private Classes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}