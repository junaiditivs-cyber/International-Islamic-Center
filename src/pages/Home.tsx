
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  MessageCircle,
  MoonStar,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,

} from "lucide-react";
import { lazy, Suspense } from "react";
import RenderWhenVisible from "../components/RenderWhenVisible";
const QuranModel = lazy(() => import("../components/QuranModel"));
const AdmissionMotionFlow = lazy(() => import("../components/AdmissionMotionFlow"));
const QuranLearningPromise = lazy(() => import("../components/QuranLearningPromise"));

import { useEffect, useRef } from "react";
import ZoomOutOnScroll from "../components/ZoomOutOnScroll";
import AnimatedStats from "../components/AnimatedStats";
const GlobalParentMapReviews = lazy(() => import("../components/GlobalParentMapReviews"));
const GlobalTrustGlobeCTA = lazy(() => import("../components/GlobalTrustGlobeCTA"));

function HadithSplitBanner() {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();

      /*
        Effect starts only when the banner starts going upward.
        Image stays normal first, then splits left/right on scroll.
      */
      const start = window.innerHeight * 0.35;
      const end = -rect.height * 0.45;

      const rawProgress = (start - rect.top) / (start - end);
      const nextProgress = Math.min(Math.max(rawProgress, 0), 1);

      // CSS variables update the visual without rerendering the entire homepage.
      bannerRef.current.style.setProperty("--hadith-move", `${nextProgress * 38}%`);
      bannerRef.current.style.setProperty("--hadith-opacity", String(Math.max(1 - nextProgress * 1.1, 0)));
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });

        ticking = true;
      }
    };

    // Defer initial layout calculation to prevent forced reflow during critical render path
    const timer = setTimeout(() => {
      window.requestAnimationFrame(updateProgress);
    }, 250);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      style={{ "--hadith-move": "0%", "--hadith-opacity": "1" } as React.CSSProperties}
      className="hadith-split relative mx-auto mb-16 w-full max-w-[1420px] overflow-hidden sm:mb-24"
    >
      {/* Soft glow outside only */}
      <div className="pointer-events-none absolute -inset-4 rounded-[34px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.14),transparent_62%)] blur-2xl sm:-inset-8 sm:rounded-[56px] sm:blur-3xl" />

      {/* Main container */}
      <div className="relative isolate overflow-hidden rounded-[28px] border border-yellow-400/20 bg-black shadow-[0_0_80px_rgba(250,204,21,0.12)] md:rounded-[44px]">
        {/* DESKTOP IMAGE */}
        <div className="relative hidden aspect-[1672/941] w-full overflow-hidden bg-black md:block">
          {/* Left half */}
          <div
            className="hadith-half hadith-left absolute inset-0 overflow-hidden"
          >
            <img loading="lazy" decoding="async"
              src="/images/hadith-desktop.webp"
              alt="Quran learning hadith"
              width={1672}
              height={941}
              className="absolute inset-0 h-full w-full object-contain object-center"
              draggable={false}
            />
          </div>

          {/* Right half */}
          <div
            className="hadith-half hadith-right absolute inset-0 overflow-hidden"
          >
            <img loading="lazy" decoding="async"
              src="/images/hadith-desktop.webp"
              alt=""
              width={1672}
              height={941}
              className="absolute inset-0 h-full w-full object-contain object-center"
              draggable={false}
            />
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className="relative aspect-[941/1672] w-full overflow-hidden bg-black md:hidden">
          {/* Left half */}
          <div
            className="hadith-half hadith-left absolute inset-0 overflow-hidden"
          >
            <img loading="lazy" decoding="async"
              src="/images/hadith-mobile.webp"
              alt="Quran learning hadith"
              width={440}
              height={782}
              className="absolute inset-0 h-full w-full object-contain object-center"
              draggable={false}
            />
          </div>

          {/* Right half */}
          <div
            className="hadith-half hadith-right absolute inset-0 overflow-hidden"
          >
            <img loading="lazy" decoding="async"
              src="/images/hadith-mobile.webp"
              alt=""
              width={440}
              height={782}
              className="absolute inset-0 h-full w-full object-contain object-center"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  
  

  const programs = [
    {
      title: "Quran Reading",
      subtitle:
        "Learn to read the Holy Quran with confidence, fluency and correct pronunciation.",
      image: "/images/topics/quran-reading.webp",
      icon: BookOpen,
     link: "/topic/quran-reading",
    },
    {
      title: "Tajweed Rules",
      subtitle:
        "Improve recitation with Makharij, Tajweed rules and teacher correction.",
      image: "/images/topics/tajweed.webp",
      icon: Sparkles,
      link: "/topic/tajweed-rules",
    },
    {
      title: "Hifz Quran",
      subtitle:
        "Memorize Quran with revision, discipline, daily targets and progress tracking.",
      image: "/images/topics/hifz-quran.webp",
      icon: BadgeCheck,
      link: "/topic/hifz-quran",
    },
    {
      title: "How To Perform Namaz",
      subtitle:
        "Learn Wudu, Salah positions, duas in prayer and common prayer mistakes.",
      image: "/images/topics/namaz.webp",
      icon: MoonStar,
      link: "/topic/how-to-perform-namaz",
    },
    {
      title: "Wudu",
      subtitle:
        "Learn purification, cleanliness and how to prepare properly for Salah.",
      image: "/images/topics/wudu.webp",
      icon: Droplets,
      link: "/topic/wudu",
    },
    {
      title: "Daily Duas",
      subtitle:
        "Memorize duas for morning, evening, food, sleep, protection and parents.",
      image: "/images/topics/duas.webp",
      icon: HandHeart,
      link: "/topic/daily-duas",
    },
    {
      title: "Akhlaq & Adab",
      subtitle:
        "Build Islamic manners, respect, kindness, honesty and good character.",
      image: "/images/topics/manners.webp",
      icon: HeartHandshake,
      link: "/topic/akhlaq-adab",
    },
    {
      title: "Islamic Studies",
      subtitle:
        "Learn Seerah, Prophets' stories, beliefs, Salah basics and Islamic lifestyle.",
      image: "/images/topics/islamic-studies.webp",
      icon: ScrollText,
      link: "/topic/islamic-studies",
    },
  ];

const learningPillars = [
  {
    slug: "quran",
    title: "Quran",
    desc: "Improve recitation, Tajweed, pronunciation, fluency, and strengthen your connection with the Book of Allah.",
    image: "/images/topics/quran-main.webp",
    icon: BookOpen,
    badge: "PILLAR 01",
    imagePosition: "center center",
  },
  {
    slug: "sunnah",
    title: "Sunnah",
    desc: "Learn daily duas, Islamic manners, respect, kindness, and beautiful character through the teachings of the Prophet ﷺ.",
    image: "/images/topics/sunnah-main.webp",
    icon: ScrollText,
    badge: "PILLAR 02",
    imagePosition: "55% center",
  },
  {
    slug: "salah",
    title: "Salah",
    desc: "Understand wudu, prayer positions, daily prayers, short Surahs, and essential duas used inside Salah.",
    image: "/images/topics/salah-main.webp",
    icon: MoonStar,
    badge: "PILLAR 03",
    imagePosition: "58% center",
  },
];
 
  



  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
    
    {/* ISLAMIC FRONT HERO */}
   <section className="relative min-h-screen overflow-hidden bg-black px-6 pt-32 pb-28 text-white">
  {/* PREMIUM BACKGROUND */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_30%),radial-gradient(circle_at_bottom,rgba(250,204,21,0.10),transparent_38%)]" />

  <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:88px_88px]" />

  <div className="pointer-events-none absolute top-24 right-10 h-96 w-96 rounded-full bg-yellow-400/18 blur-[150px]" />
  <div className="pointer-events-none absolute bottom-20 left-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[150px]" />
  <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[170px]" />

  {/* GOLD LINES */}
  <div className="pointer-events-none absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
  <div className="pointer-events-none absolute left-0 bottom-24 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

  <div className="relative z-10 mx-auto w-full max-w-[1500px]">
    {/* BISMILLAH AREA ONLY */}
    <ZoomOutOnScroll>
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.12)] backdrop-blur-xl">
          
          Begin With The Name Of Allah
        </div>

        <div className=" md:block">
          <h2 className="font-serif text-5xl leading-relaxed text-yellow-400 drop-shadow-[0_0_35px_rgba(250,204,21,0.25)] md:text-7xl lg:text-8xl">
            بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </h2>

          <p className="mt-4 text-sm text-zinc-300 md:text-base">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>
      </div>
    </ZoomOutOnScroll>

    {/* HADITH IMAGE BANNER - NO OVERLAP */}
  {/* HADITH IMAGE BANNER - MOBILE FIXED */}
  {/* HADITH / MOBILE READABLE BANNER */}
  

 <HadithSplitBanner />
    {/* MAIN HERO CONTENT WITH 3D MODEL */}
    <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
      {/* LEFT CONTENT */}
      <div className="relative z-30 order-1 text-center lg:order-none lg:text-left">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.10)] backdrop-blur-xl">
           
          Quran, Sunnah, Salah & Islamic Manners
        </div>

        <h1 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
          Learn The Quran
          <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(250,204,21,0.22)]">
            With Faith & Adab
          </span>
        </h1>

        <div className="mt-8 max-w-2xl rounded-[30px] border border-yellow-400/15 bg-white/[0.04] p-6 shadow-[0_0_55px_rgba(0,0,0,0.40)] backdrop-blur-xl lg:mx-0">
          Join one-on-one online Islamic classes focused on Quran reading,
          Tajweed, Hifz, Wudu, Salah practice, daily duas and Islamic character
          building from the comfort of your home.
        </div>

        <div className="mt-8 max-w-2xl rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_0_45px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:mx-0">
          <p className="font-serif text-2xl leading-relaxed text-yellow-400 md:text-3xl">
            وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
          </p>

          <p className="mt-3 text-zinc-300">
            “And recite the Quran with measured recitation.”
          </p>

          <p className="mt-2 text-sm font-semibold text-yellow-400">
            Surah Al-Muzzammil 73:4
          </p>
        </div>

        <div className="relative z-40 mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
          <Link
            to="/trial"
            className="group relative z-50 inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-[0_0_45px_rgba(250,204,21,0.38)] transition-all hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-[0_0_65px_rgba(250,204,21,0.55)]"
          >
            Start Free Trial
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>

          <Link
            to="/courses"
            className="relative z-50 inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-bold backdrop-blur-xl transition-all hover:border-yellow-400/45 hover:bg-yellow-400/10 hover:text-yellow-300"
          >
            Explore Courses
            <BookOpen className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* RIGHT 3D QURAN MODEL - RESTORED */}
     {/* RIGHT CLEAN PREMIUM 3D QURAN MODEL */}
{/* RIGHT SIMPLE 3D QURAN MODEL */}
{/* RIGHT 3D QURAN MODEL - NO OVERLAP */}
<div className="relative z-20 order-2 mx-auto flex w-full max-w-[620px] items-center justify-center overflow-hidden lg:order-none">
  <style>{`
    .quran-model-safe canvas {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
    }

    .quran-model-safe > div {
      width: 100% !important;
      height: 100% !important;
    }
  `}</style>

  <div className="pointer-events-none absolute h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[90px] sm:h-[340px] sm:w-[340px] md:h-[430px] md:w-[430px]" />

  <div className="quran-model-safe relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[30px] bg-black/20 sm:h-[360px] md:h-[440px] lg:h-[500px]">
    <div className="flex h-full w-full scale-[0.78] items-center justify-center sm:scale-[0.86] md:scale-[0.94] lg:scale-100">
      <RenderWhenVisible className="h-[340px] sm:h-[420px] md:h-[500px] lg:h-[560px]" minimumHeight="0px" rootMargin="250px 0px" unmountWhenHidden>
        <Suspense fallback={<div className="h-[340px] sm:h-[420px] md:h-[500px] lg:h-[560px]" />}><QuranModel /></Suspense>
      </RenderWhenVisible>
    </div>
  </div>
</div>
</div>
</div>
</section>

  {/* connect animation.tsx  PREMIUM STATS CARDS */}
<AnimatedStats />


      {/* AYAH AND HADITH */}
     {/* FINAL PREMIUM QURAN MESSAGE SECTION */}
<section className="relative overflow-hidden bg-black px-6 py-32 text-white">
  {/* Deep background glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.14),transparent_36%),linear-gradient(180deg,#000_0%,#060504_50%,#000_100%)]" />

  {/* Futuristic grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:82px_82px]" />

  {/* Gold scan lines */}
  <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
  <div className="pointer-events-none absolute left-0 bottom-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

  <div className="relative z-10 mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.14)] backdrop-blur-xl">
         
        Quranic Guidance & Teaching Mission
      </div>

      <h2 className="text-4xl font-black leading-tight md:text-6xl">
        Learning That Builds
        <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Faith, Adab & Character
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
        Our classes are designed to help students learn Quran with sincerity,
        confidence, discipline and beautiful Islamic manners.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Quran Guidance Card */}
      <Link
        to="/courses"
        className="group relative overflow-hidden rounded-[42px] border border-yellow-400/25 bg-white/[0.045] p-7 shadow-[0_0_75px_rgba(0,0,0,0.48)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/55 hover:bg-yellow-400/10 hover:shadow-[0_0_90px_rgba(250,204,21,0.22)] md:p-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.24),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-yellow-400/15 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-yellow-400/10 blur-[90px]" />

        <div className="relative z-10">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_38px_rgba(250,204,21,0.38)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Sun className="h-8 w-8" />
            </div>

            <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
              Surah Al-Isra 17:9
            </span>
          </div>

          <p className="font-serif text-3xl leading-relaxed text-yellow-400 md:text-4xl">
            إِنَّ هَـٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ
          </p>

          <h3 className="mt-8 text-3xl font-black leading-tight text-white md:text-4xl">
            This Quran Guides To What Is Most Upright
          </h3>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300">
            The Quran is guidance for life. Our classes help students build
            love, respect and confidence in reciting and understanding the words
            of Allah.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Quran Reading",
              "Tajweed Practice",
              "Confidence Building",
              "Step-by-step Learning",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm font-bold text-zinc-300"
              >
                <CheckCircle2 className="h-4 w-4 text-yellow-400" />
                {item}
              </div>
            ))}
          </div>

          <div className="relative z-20 mt-9 inline-flex items-center gap-2 font-black text-yellow-400">
            Explore Quran Courses
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

      
        
      </Link>

      {/* Mission Card */}
      <Link
        to="/trial"
        className="group relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_75px_rgba(0,0,0,0.48)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/55 hover:bg-yellow-400/10 hover:shadow-[0_0_90px_rgba(250,204,21,0.22)] md:p-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.22),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-yellow-400/12 blur-[85px]" />
        <div className="pointer-events-none absolute -right-12 -bottom-12 h-44 w-44 rounded-full bg-yellow-400/14 blur-[90px]" />

        <div className="relative z-10">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_38px_rgba(250,204,21,0.38)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <ScrollText className="h-8 w-8" />
            </div>

            <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
              Hadith Mission
            </span>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
            Sahih al-Bukhari 5027
          </div>

          <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
            Learn Quran With Love, Adab And Sincerity
          </h3>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300">
            This beautiful Hadith inspires our mission to teach Quran with
            patience, care and excellence. We focus on correct recitation,
            gentle correction, regular practice and Islamic manners.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                text: "Patient Teachers",
              },
              {
                icon: BookOpen,
                text: "Structured Lessons",
              },
              {
                icon: HeartHandshake,
                text: "Adab & Manners",
              },
              {
                icon: Star,
                text: "Regular Practice",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm font-bold text-zinc-300"
                >
                  <Icon className="h-4 w-4 text-yellow-400" />
                  {item.text}
                </div>
              );
            })}
          </div>

          <div className="relative z-20 mt-9 inline-flex items-center gap-2 font-black text-yellow-400">
            Book A Free Trial
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        
      </Link>
    </div>

    {/* Bottom mini strip */}
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {[
        "One-on-one online Quran classes",
        "Flexible timing for global students",
        "Quran, Tajweed, Salah, Duas & Manners",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-yellow-400/15 bg-yellow-400/10 px-5 py-4 text-center text-sm font-bold text-yellow-300 backdrop-blur-xl"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>

     {/* PROGRAMS - FINAL PREMIUM SECTION */}
<section className="relative overflow-hidden bg-black px-6 py-32 text-white">
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.10),transparent_32%),linear-gradient(180deg,#000_0%,#070604_50%,#000_100%)]" />

  {/* Futuristic grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

  {/* Gold lines */}
  <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
  <div className="pointer-events-none absolute left-0 bottom-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

  <div className="relative z-10 mx-auto max-w-[1500px]">
    {/* Section Header */}
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.14)] backdrop-blur-xl">
         
        Complete Islamic Learning
      </div>

      <h2 className="text-4xl font-black leading-tight md:text-6xl">
        Explore Our
        <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Premium Programs
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
        Learn Quran, Tajweed, Hifz, Salah, Wudu, Duas and Islamic manners with
        professional online teachers.
      </p>
    </div>

    {/* Program Cards */}
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {programs.map((program, index) => (
        <Link
          key={program.title}
          to={program.link}
          className="group relative min-h-[380px] overflow-hidden rounded-[38px] border border-white/10 bg-black shadow-[0_0_60px_rgba(0,0,0,0.50)] transition-all duration-700 hover:-translate-y-3 hover:border-yellow-400/60 hover:shadow-[0_0_85px_rgba(250,204,21,0.22)]"
        >
          {/* Main Image */}
          <img
            loading="lazy"
            decoding="async"
            src={program.image}
            alt={program.title}
            width={400}
            height={500}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-110"
          />

          {/* Image readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/20" />

          {/* Premium glow on hover */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.28),transparent_42%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          {/* Futuristic grid over image */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />

          {/* Corner frames */}
          <div className="pointer-events-none absolute left-5 top-5 h-10 w-10 border-l border-t border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-b border-l border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 border-b border-r border-yellow-400/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Top badge */}
          <div className="absolute left-6 top-6 z-10 rounded-full border border-yellow-400/25 bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
            Course {String(index + 1).padStart(2, "0")}
          </div>

          {/* Bottom content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-7">
            {/* <div className="mb-5 h-px w-full bg-gradient-to-r from-yellow-400/70 via-yellow-400/20 to-transparent" /> */}

            <h3 className="text-3xl font-black leading-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
              {program.title}
            </h3>

            <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-300 backdrop-blur-xl transition-all duration-500 group-hover:bg-yellow-400 group-hover:text-black">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Big background title */}
          <div className="pointer-events-none absolute -bottom-5 left-6 text-6xl font-black text-white/[0.035] transition-all duration-700 group-hover:text-yellow-400/[0.08]">
            {program.title.split(" ")[0]}
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

     {/* UPDATED SALAH SECTION - CLEAN PREMIUM FINAL */}
<section className="relative overflow-hidden bg-black px-6 py-32 text-white">
  {/* Background */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.10),transparent_36%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />

  {/* Grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

  {/* Gold lines */}
  <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
  <div className="pointer-events-none absolute left-0 bottom-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

  <div className="relative z-10 mx-auto max-w-[1450px]">
    <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
      {/* LEFT CONTENT */}
      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.12)] backdrop-blur-xl">
           
          Salah Learning Program
        </div>

        <h2 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
          How To Perform
          <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Namaz Step By Step
          </span>
        </h2>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Salah is one of the most important acts of worship in Islam. Our
          teachers help students learn the correct method of prayer with Wudu,
          Takbir, Qiyam, Ruku, Sujood, Tashahhud and Salam.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
          Students are guided slowly and clearly so they understand the
          positions, the words recited in prayer, the meaning of humility, and
          the common mistakes that should be avoided.
        </p>

        {/* Quran Reminder */}
        <div className="mt-9 rounded-[34px] border border-yellow-400/25 bg-yellow-400/10 p-7 shadow-[0_0_55px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-yellow-300">
            Quran Reminder
          </p>

          <p className="font-serif text-2xl leading-relaxed text-yellow-400 md:text-3xl">
            إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
          </p>

          <p className="mt-5 text-zinc-300">
            “Indeed, prayer has been decreed upon the believers at specified
            times.”
          </p>

          <p className="mt-3 text-sm font-black text-yellow-400">
            Surah An-Nisa 4:103
          </p>
        </div>

        {/* Learn List */}
        <div className="mt-8 rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_55px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <h3 className="mb-5 text-lg font-black text-yellow-400">
            What Students Learn
          </h3>

          <div className="space-y-4">
            {[
              "Correct method of Wudu before Salah",
              "Takbir, Qiyam, Ruku, Sujood and Salam",
              "Words and duas recited inside prayer",
              "Daily prayer habit with focus and humility",
              "Common Salah mistakes and corrections",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <p className="text-sm font-semibold leading-relaxed text-zinc-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/trial"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-[0_0_45px_rgba(250,204,21,0.38)] transition-all hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-[0_0_65px_rgba(250,204,21,0.55)]"
          >
            Learn Salah Online
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
        <div className="pointer-events-none absolute -inset-8 rounded-[56px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.22),transparent_62%)] blur-3xl" />

        <div className="relative overflow-hidden rounded-[46px] border border-yellow-400/30 bg-black/70 p-4 shadow-[0_0_110px_rgba(250,204,21,0.16)] backdrop-blur-2xl md:p-5">
          {/* Corner frame */}
          <div className="pointer-events-none absolute left-6 top-6 z-20 h-12 w-12 border-l border-t border-yellow-400/45" />
          <div className="pointer-events-none absolute right-6 top-6 z-20 h-12 w-12 border-r border-t border-yellow-400/45" />
          <div className="pointer-events-none absolute bottom-6 left-6 z-20 h-12 w-12 border-b border-l border-yellow-400/45" />
          <div className="pointer-events-none absolute bottom-6 right-6 z-20 h-12 w-12 border-b border-r border-yellow-400/45" />

          {/* Image full visible */}
          <div className="relative z-10 overflow-hidden rounded-[36px] bg-black">
            <img loading="lazy" decoding="async"
              src="/images/topics/salah-steps.webp"
              alt="Steps of Salah"
              width={1122}
              height={1402}
              className="h-auto w-full rounded-[36px] object-contain shadow-[0_0_70px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* learningPillars, parentTrust, timeline, programs */}

  {/* LEARNING PILLARS - ULTRA PREMIUM IMAGE CARDS */}
<section className="relative overflow-hidden bg-black px-6 py-32 text-white">
  {/* Premium background */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.10),transparent_35%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />

  {/* Grid background */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:88px_88px]" />

  {/* Gold scan lines */}
  <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
  <div className="pointer-events-none absolute left-0 bottom-20 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

  <div className="relative z-10 mx-auto max-w-[1450px]">

    {/* Header */}
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.14)] backdrop-blur-xl">
         
        Our Learning Pillars
      </div>

      <h2 className="text-4xl font-black leading-tight md:text-6xl">
        Quran, Sunnah
        <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          And Salah
        </span>
      </h2>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-3">
      {learningPillars.map((pillar, index) => {
        const Icon = pillar.icon;

        return (
          <Link
            key={pillar.slug}
            to={`/pillar/${pillar.slug}`}
            className="group relative min-h-[500px] overflow-hidden rounded-[48px] border border-yellow-400/25 bg-black shadow-[0_0_80px_rgba(0,0,0,0.58)] transition-all duration-700 hover:-translate-y-4 hover:border-yellow-400/70 hover:shadow-[0_0_110px_rgba(250,204,21,0.28)]"
          >
            {/* Full image */}
            <img
              loading="lazy"
              decoding="async"
              src={pillar.image}
              alt={pillar.title}
              width={500}
              height={600}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              style={{ objectPosition: pillar.imagePosition || "center" }}
            />

            {/* Dark overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/25" />

            {/* Golden hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.34),transparent_45%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Inner grid effect */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />

            {/* Corner frame */}
            <div className="pointer-events-none absolute left-5 top-5 h-14 w-14 border-l border-t border-yellow-400/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute right-5 top-5 h-14 w-14 border-r border-t border-yellow-400/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-5 left-5 h-14 w-14 border-b border-l border-yellow-400/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-5 right-5 h-14 w-14 border-b border-r border-yellow-400/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Top badge */}
            <div className="absolute left-6 top-6 z-10 rounded-full border border-yellow-400/30 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 backdrop-blur-xl">
              Pillar {String(index + 1).padStart(2, "0")}
            </div>

            {/* Icon */}
            <div className="absolute right-6 top-6 z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_42px_rgba(250,204,21,0.42)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon className="h-8 w-8" />
            </div>

            {/* Bottom content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              

              <h3 className="text-5xl font-black text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.95)]">
                {pillar.title}
              </h3>

              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-3 text-sm font-black text-yellow-300 backdrop-blur-xl transition-all duration-500 group-hover:bg-yellow-400 group-hover:text-black">
                Open Page
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Big faint text */}
            {/* <div className="pointer-events-none absolute -bottom-6 left-6 text-8xl font-black text-white/[0.035] transition-all duration-700 group-hover:text-yellow-400/[0.08]">
              {pillar.title}
            </div> */}
          </Link>
        );
      })}
    </div>
  </div>
</section>
      {/* WHY PARENTS TRUST US */}
  {/* WHY PARENTS TRUST US - PREMIUM TRUST IMAGE SECTION */}

 {/* WHY PARENTS TRUST US - PREMIUM TRUST IMAGE SECTION */}
{/* WHY PARENTS TRUST US - CLEAN BALANCED SECTION */}
<section className="relative overflow-hidden bg-black px-6 pb-24 pt-28 text-white lg:pt-32">
  {/* Background */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.08),transparent_38%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />
  <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />
  <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-[1450px]">
    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      {/* LEFT CONTENT */}
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.10)] backdrop-blur-xl">
           
          Why Parents Trust Us
        </div>

        <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
          Safe, Structured And
          <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Parent-Trusted Learning
          </span>
        </h2>

        <div className="mt-7 rounded-[30px] border border-yellow-400/15 bg-white/[0.04] p-6 shadow-[0_0_45px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7">
          <p className="text-base leading-8 text-zinc-300 md:text-lg">
            Parents trust our Islamic Center because every class is planned with
            care, respect and clear learning goals. Students learn Quran,
            Tajweed, Salah, Duas and Islamic manners in a safe online
            environment under the guidance of qualified teachers.
          </p>

          <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
            We also keep parents involved through regular progress updates and
            parent-teacher meetups, helping families stay connected with their
            child’s learning journey.
          </p>
        </div>

        {/* Balanced trust cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "Safe Online Classes",
              text: "Respectful and calm learning environment for children.",
            },
            {
              icon: GraduationCap,
              title: "Qualified Teachers",
              text: "Experienced teachers with proper guidance and care.",
            },
            {
              icon: MessageCircle,
              title: "Parent Communication",
              text: "Regular updates and helpful parent-teacher meetups.",
            },
            {
              icon: Clock,
              title: "Flexible Timings",
              text: "Suitable class schedules for students worldwide.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_35px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.28)]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Simple bottom points */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            "Progress Updates",
            "Parent-Teacher Meetups",
            "Clear Learning Goals",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-yellow-400/15 bg-yellow-400/10 px-4 py-3"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-400" />
              <span className="text-sm font-bold text-zinc-300">{item}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/trial"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-[0_0_45px_rgba(250,204,21,0.38)] transition hover:-translate-y-1 hover:bg-yellow-300"
          >
            Book Free Trial
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:border-yellow-400/50 hover:text-yellow-300"
          >
            Explore Courses
            <BookOpen className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE ONLY */}
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 rounded-[50px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.18),transparent_60%)] blur-3xl" />

        <div className="relative overflow-hidden rounded-[40px] border border-yellow-400/20 bg-black/70 p-3 shadow-[0_0_90px_rgba(250,204,21,0.14)] backdrop-blur-xl md:p-4">
          <div className="overflow-hidden rounded-[30px] bg-black">
            <picture>
              {/* Mobile image */}
              <source
                media="(max-width: 767px)"
                srcSet="/images/topics/parent-trust-mobile.webp"
              />

              {/* Desktop / tablet image */}
              <img loading="lazy" decoding="async"
                src="/images/topics/parent-trust-desktop.webp"
                alt="Trusted online Islamic learning"
                width={1448}
                height={1086}
                className="h-auto w-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* HOW IT WORKS */}
{/* SIMPLE ADMISSION PROCESS - PREMIUM TIMELINE */}
{/* ADMISSION JOURNEY - PREMIUM TRUST FLOW */}
{/* ADMISSION PROCESS - ANIMATED PREMIUM TRIAL JOURNEY */}
{/* ADMISSION MOTION FLOW */}
<section className="relative overflow-hidden bg-black px-6 py-28 text-white">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_38%),linear-gradient(180deg,#000_0%,#070604_55%,#000_100%)]" />

  <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:86px_86px]" />

  <div className="relative z-10 mx-auto max-w-[1450px]">
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-sm font-black text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.12)] backdrop-blur-xl">
      
        Simple Admission Journey
      </div>

      <h2 className="text-4xl font-black leading-tight md:text-6xl">
        Try First,
        <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Join With Confidence
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
        Parents can check the teacher, class quality, student comfort and
        learning plan through our 3-day free trial before confirming admission.
      </p>
    </div>

    
       {/* REVIEWS */}
     <RenderWhenVisible minimumHeight="1050px" rootMargin="700px 0px">
        <Suspense fallback={<section className="min-h-[1050px] bg-black" />}><GlobalParentMapReviews /></Suspense>
      </RenderWhenVisible>
   {/* QURAN LEARNING PROMISE LAB */}
        <RenderWhenVisible minimumHeight="900px" rootMargin="700px 0px">
          <Suspense fallback={<div className="min-h-[900px] bg-black" />}><QuranLearningPromise /></Suspense>
        </RenderWhenVisible>

      {/* FINAL CTA */}
    <RenderWhenVisible minimumHeight="900px" rootMargin="700px 0px">
      <Suspense fallback={<div className="min-h-[900px] bg-black" />}><GlobalTrustGlobeCTA /></Suspense>
    </RenderWhenVisible>
    <RenderWhenVisible minimumHeight="750px" rootMargin="700px 0px">
      <Suspense fallback={<div className="min-h-[750px] bg-black" />}><AdmissionMotionFlow /></Suspense>
    </RenderWhenVisible>
  </div>
</section>
    
  </main>
  );
}
 