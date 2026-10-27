import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, CalendarCheck } from "lucide-react";
import { programs } from "../data/programs";

export default function ProgramPage() {
  const { slug } = useParams<{ slug: string }>();

  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">Program Not Found</h1>
          <p className="text-zinc-400 mb-8">
            The page you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:bg-yellow-300 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back To Home
          </Link>
        </div>
      </main>
    );
  }

  const Icon = program.icon;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${program.image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-yellow-400 font-bold mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back To Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-6 shadow-[0_0_35px_rgba(250,204,21,0.45)]">
                <Icon className="w-8 h-8" />
              </div>

              <p className="text-yellow-400 font-bold mb-3">
                 Program
              </p>

              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                {program.heroTitle}
              </h1>

              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                {program.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/trial"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:bg-yellow-300 transition"
                >
                  Book Free Trial
                  <CalendarCheck className="w-5 h-5" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-8 py-4 rounded-2xl font-bold hover:border-yellow-400/50 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <img decoding="async"
                src={program.image}
                alt={program.title}
                className="w-full rounded-[34px] border border-white/10 shadow-2xl object-cover max-h-[440px]"
              />
              <div className="absolute inset-0 rounded-[34px] bg-gradient-to-t from-black/45 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-yellow-400 font-bold mb-3">
              What You Will Learn
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              {program.title}
            </h2>
            <p className="text-zinc-400 mt-5 leading-relaxed">
              This program is designed to make Islamic learning simple,
              practical and easy to follow for students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.highlights.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 hover:border-yellow-400/40 transition"
              >
                <CheckCircle2 className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="font-bold text-white leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LESSONS SECTION */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              Course Lessons
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {program.lessons.map((lesson, index) => (
                <div
                  key={lesson}
                  className="flex items-start gap-4 rounded-2xl bg-black/40 border border-white/10 p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-black shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-zinc-200 font-semibold leading-relaxed">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/trial"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:bg-yellow-300 transition"
              >
                Start Learning Now
                <CalendarCheck className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}