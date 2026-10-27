import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MoonStar,
  ScrollText,
  ShieldCheck,
  
  Star,
  type LucideIcon,
} from "lucide-react";

type Pillar = {
  title: string;
  subtitle: string;
  mainImage: string;
  icon: LucideIcon;
  badge: string;
  intro: string;
  quote: string;
  quoteRef: string;
  points: string[];
};

const pillars: Record<string, Pillar> = {
  quran: {
    title: "Quran",
    subtitle: "Learn Quran Reading, Tajweed And Fluency",
    mainImage: "/images/topics/quran-reading.webp",
    icon: BookOpen,
    badge: "Quran Learning Program",
    intro:
      "Our Quran program helps students read the Holy Quran with correct pronunciation, fluency, confidence and love for the Book of Allah. Teachers guide students step by step with patience and regular correction.",
    quote: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
    quoteRef: "Surah Al-Muzzammil 73:4",
    points: [
      "Quran reading from beginner to advanced level",
      "Correct pronunciation and fluency improvement",
      "Basic and advanced Tajweed guidance",
      "Teacher correction during live classes",
      "Regular practice with patience and love",
    ],
  },

  sunnah: {
    title: "Sunnah",
    subtitle: "Learn Daily Duas, Manners And Beautiful Character",
    mainImage: "/images/topics/sunnah-main.webp",
    icon: ScrollText,
    badge: "Sunnah & Character Program",
    intro:
      "Our Sunnah program teaches students daily duas, Islamic manners, kindness, respect and beautiful character through the teachings and stories of the Prophet ﷺ. The goal is to help students apply Islam in daily life.",
    quote: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
    quoteRef: "Surah Al-Ahzab 33:21",
    points: [
      "Daily duas for morning, evening and routine life",
      "Islamic manners at home, school and society",
      "Stories from the life of the Prophet ﷺ",
      "Respect, kindness and good character building",
      "Practical Sunnah habits for daily life",
    ],
  },

  salah: {
    title: "Salah",
    subtitle: "Learn Wudu, Prayer Positions And Duas Inside Salah",
    mainImage: "/images/topics/salah-steps.webp",
    icon: MoonStar,
    badge: "Salah Step By Step Program",
    intro:
      "Our Salah program helps students understand Wudu, Takbir, Qiyam, Ruku, Sujood, Tashahhud and Salam. Students learn the correct method of prayer with clear explanation and teacher guidance.",
    quote:
      "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
    quoteRef: "Surah An-Nisa 4:103",
    points: [
      "Correct method of Wudu before Salah",
      "Prayer positions explained step by step",
      "Duas and words recited inside Salah",
      "Daily prayer habit with focus and humility",
      "Common Salah mistakes and corrections",
    ],
  },
};

export default function PillarPage() {
  const { slug } = useParams<{ slug: string }>();
  const pillar = slug ? pillars[slug] : undefined;

  if (!pillar) {
    return (
      <main className="min-h-screen bg-black px-6 pt-36 text-white">
        <div className="mx-auto max-w-3xl rounded-[34px] border border-yellow-400/25 bg-white/[0.05] p-10 text-center">
          <h1 className="text-4xl font-black">Page Not Found</h1>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 font-black text-black hover:bg-yellow-300"
          >
            <ArrowLeft className="h-5 w-5" />
            Back To Home
          </Link>
        </div>
      </main>
    );
  }

  const Icon = pillar.icon;

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative overflow-hidden px-6 pb-28 pt-36">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12),transparent_36%),linear-gradient(180deg,#000_0%,#080705_55%,#000_100%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          {/* Back Button */}
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 backdrop-blur-xl transition hover:bg-yellow-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back To Home
          </Link>

          {/* Hero */}
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.14)] backdrop-blur-xl">
                 
                {pillar.badge}
              </div>

              <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[26px] bg-yellow-400 text-black shadow-[0_0_45px_rgba(250,204,21,0.40)]">
                <Icon className="h-10 w-10" />
              </div>

              <h1 className="text-6xl font-black leading-tight md:text-8xl">
                {pillar.title}
                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Learning
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-2xl font-black leading-relaxed text-white">
                {pillar.subtitle}
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
                {pillar.intro}
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

            {/* Right Image */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-[60px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.24),transparent_62%)] blur-3xl" />

              <div className="relative overflow-hidden rounded-[52px] border border-yellow-400/30 bg-black/70 p-4 shadow-[0_0_120px_rgba(250,204,21,0.18)] backdrop-blur-2xl md:p-5">
                <div className="relative overflow-hidden rounded-[40px] bg-black">
                  <img decoding="async"
                    src={pillar.mainImage}
                    alt={pillar.title}
                    className="h-auto w-full rounded-[40px] object-contain shadow-[0_0_80px_rgba(0,0,0,0.85)]"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
                      {pillar.title} Program
                    </div>

                    <h2 className="text-4xl font-black md:text-5xl">
                      Learn {pillar.title} Online
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote + Points */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Quote Card */}
            <div className="rounded-[42px] border border-yellow-400/25 bg-yellow-400/10 p-7 shadow-[0_0_70px_rgba(0,0,0,0.40)] backdrop-blur-2xl md:p-9">
              <ShieldCheck className="mb-6 h-9 w-9 text-yellow-400" />

              <p className="font-serif text-3xl leading-relaxed text-yellow-400 md:text-4xl">
                {pillar.quote}
              </p>

              <p className="mt-6 text-lg font-black text-yellow-300">
                {pillar.quoteRef}
              </p>
            </div>

            {/* Points Card */}
            <div className="rounded-[42px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_70px_rgba(0,0,0,0.40)] backdrop-blur-2xl md:p-9">
              <h3 className="mb-7 text-3xl font-black">
                What Students Learn
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {pillar.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                    <p className="text-sm font-semibold leading-relaxed text-zinc-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-[42px] border border-yellow-400/25 bg-yellow-400/10 p-8 text-center backdrop-blur-2xl">
            <Star className="mx-auto mb-4 h-9 w-9 text-yellow-400" />

            <h3 className="text-3xl font-black">
              Start Your {pillar.title} Learning Journey
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Join online classes with professional teachers and a structured
              Islamic learning plan.
            </p>

            <Link
              to="/trial"
              className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black hover:bg-yellow-300"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}