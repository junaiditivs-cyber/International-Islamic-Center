import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  Clock3,
  Users,
  GraduationCap,
  X,
} from "lucide-react";
import { programs, type Program } from "../data/programs";

// Additional metadata for courses display
const courseMeta: Record<
  string,
  { duration: string; level: string; age: string }
> = {
  "quran-reading": {
    duration: "2 - 4 Months",
    level: "Beginner to Fluent",
    age: "5+ Years & Adults",
  },
  "tajweed-rules": {
    duration: "3 - 6 Months",
    level: "All Levels",
    age: "6+ Years & Adults",
  },
  "hifz-quran": {
    duration: "1 - 3 Years",
    level: "Structured Hifz",
    age: "6+ Years & Adults",
  },
  "how-to-perform-namaz": {
    duration: "4 - 8 Weeks",
    level: "Essential Fard",
    age: "All Ages",
  },
  wudu: {
    duration: "2 - 4 Weeks",
    level: "Purification",
    age: "All Ages",
  },
  "daily-duas": {
    duration: "Ongoing",
    level: "Sunnah Prayers",
    age: "All Ages",
  },
  "akhlaq-adab": {
    duration: "Ongoing",
    level: "Character Building",
    age: "Children & Teens",
  },
  "islamic-studies": {
    duration: "Ongoing",
    level: "Comprehensive",
    age: "All Ages",
  },
};

export default function Courses() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <main className="relative overflow-hidden min-h-screen bg-black text-white">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.10),transparent_30%),linear-gradient(180deg,#000_0%,#070604_50%,#000_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute left-0 top-32 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-sm font-bold mb-8 shadow-[0_0_30px_rgba(250,204,21,0.15)] backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Complete Islamic Curriculum</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
            Explore Our
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mt-2">
              Premium Programs
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            One-on-one online Islamic classes with certified male and female
            teachers. Every course is tailored to the student&apos;s pace, age,
            and goals with 24/7 flexible scheduling.
          </p>

          {/* Quick value props */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-zinc-300">
            {[
              "1-on-1 Personalized Attention",
              "Male & Female Certified Tutors",
              "24/7 Global Flexible Timings",
              "100% Free 3-Day Trial",
            ].map((prop) => (
              <span
                key={prop}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
              >
                <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                {prop}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="relative z-10 max-w-[1500px] mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {programs.map((program, index) => {
            const meta = courseMeta[program.slug] || {
              duration: "Flexible",
              level: "All Levels",
              age: "All Ages",
            };

            return (
              <div
                key={program.slug}
                className="group relative min-h-[420px] overflow-hidden rounded-[38px] border border-white/10 bg-black shadow-[0_0_60px_rgba(0,0,0,0.60)] transition-all duration-700 hover:-translate-y-3 hover:border-yellow-400/60 hover:shadow-[0_0_85px_rgba(250,204,21,0.25)] flex flex-col justify-between"
              >
                {/* Main Program Image */}
                <img
                  loading="lazy"
                  decoding="async"
                  src={program.image}
                  alt={program.title}
                  width={400}
                  height={500}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-110"
                />

                {/* Readability Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

                {/* Golden hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.28),transparent_45%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Futuristic grid overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />

                {/* Corner decorative frames */}
                <div className="pointer-events-none absolute left-5 top-5 h-10 w-10 border-l border-t border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-b border-l border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 border-b border-r border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Badge: Course Number */}
                <div className="relative z-10 flex items-center justify-between p-6">
                  <div className="rounded-full border border-yellow-400/25 bg-black/70 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
                    Course {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-zinc-300 backdrop-blur-xl">
                    {meta.level}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-7">
                  <h2 className="text-2xl sm:text-3xl font-black leading-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
                    {program.title}
                  </h2>

                  <p className="mt-2 text-zinc-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {program.subtitle}
                  </p>

                  {/* Highlights pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {program.highlights.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-black/60 border border-white/10 px-2.5 py-1 text-[11px] text-zinc-300 backdrop-blur-md"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex items-center gap-3">
                    <Link
                      to={program.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 text-black py-3 px-4 text-sm font-black transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedProgram(program)}
                      className="rounded-2xl border border-white/15 bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
                      aria-label={`View syllabus for ${program.title}`}
                      title="Quick Syllabus Overview"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK SYLLABUS MODAL */}
      <AnimatePresence>
        {selectedProgram && (
          <div
            className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-yellow-400/20 rounded-[32px] sm:rounded-[38px] shadow-[0_0_90px_rgba(0,0,0,0.9)] p-6 sm:p-10"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-20 h-20 rounded-2xl object-cover border border-yellow-400/30"
                />
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs font-bold mb-1">
                    Featured Course
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    {selectedProgram.subtitle}
                  </p>
                </div>
              </div>

              {/* Metadata strip */}
              <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Clock3 className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                  <p className="text-[11px] text-zinc-400">Duration</p>
                  <p className="text-xs font-bold text-white mt-0.5">
                    {courseMeta[selectedProgram.slug]?.duration || "Flexible"}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Users className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                  <p className="text-[11px] text-zinc-400">Age Group</p>
                  <p className="text-xs font-bold text-white mt-0.5">
                    {courseMeta[selectedProgram.slug]?.age || "All Ages"}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <GraduationCap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                  <p className="text-[11px] text-zinc-400">Level</p>
                  <p className="text-xs font-bold text-white mt-0.5">
                    {courseMeta[selectedProgram.slug]?.level || "All Levels"}
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedProgram.description}
              </p>

              {/* Highlights & Lessons */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-yellow-400 font-bold text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Key Course Highlights
                  </h4>
                  <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm">
                    {selectedProgram.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-yellow-400 font-bold text-sm mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Lessons Covered
                  </h4>
                  <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm">
                    {selectedProgram.lessons.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/trial"
                  className="flex-1 py-4 px-6 rounded-2xl bg-yellow-400 text-black font-black text-center text-sm sm:text-base hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.35)]"
                >
                  Book 3-Day Free Trial
                </Link>

                <Link
                  to={selectedProgram.link}
                  className="flex-1 py-4 px-6 rounded-2xl border border-white/15 bg-white/5 text-white font-bold text-center text-sm sm:text-base hover:border-yellow-400/40 hover:bg-white/10 transition-all"
                >
                  View Full Course Syllabus →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BOTTOM ENROLLMENT CTA SECTION */}
      <section className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Risk-Free Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Start Your Child&apos;s Quran Journey with a
            <span className="block text-yellow-400 mt-2">
              Free 3-Day Trial Class
            </span>
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Experience our interactive one-on-one classes, meet your qualified teacher, and see the comfort of learning from home before paying anything.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/trial"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-8 py-4 text-base font-black text-black hover:bg-yellow-300 transition-all shadow-[0_0_40px_rgba(250,204,21,0.4)]"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book Free Trial Now</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white hover:border-yellow-400/40 hover:bg-white/10 transition-all"
            >
              <span>Talk to Counselor</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
