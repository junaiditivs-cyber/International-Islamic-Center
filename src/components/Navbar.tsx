import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  MapPin,
  Menu,
  MessageCircleQuestion,
  MoonStar,
  Quote,
  ScrollText,
  Sparkles,
  Star,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react";
import BrandLogo from "./BrandLogo";

type NavItem = {
  name: string;
  path: string;
  icon?: LucideIcon;
};

type CourseItem = {
  name: string;
  path: string;
  desc: string;
  icon: LucideIcon;
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks: NavItem[] = [
    { name: "Home", path: "/", icon: Home },
    { name: "Pricing", path: "/pricing", icon: Wallet },
    { name: "Reviews", path: "/reviews", icon: Quote },
    { name: "FAQ", path: "/faq", icon: MessageCircleQuestion },
    { name: "Location", path: "/location", icon: MapPin },
    { name: "Contact", path: "/contact" },
  ];

  const courseLinks: CourseItem[] = [
    {
      name: "Quran Reading",
      path: "/topic/quran-reading",
      desc: "Learn Quran reading with confidence and correct pronunciation.",
      icon: BookOpen,
    },
    {
      name: "Tajweed Rules",
      path: "/topic/tajweed-rules",
      desc: "Improve Makharij, rules, fluency and recitation correction.",
      icon: Sparkles,
    },
    {
      name: "Hifz Quran",
      path: "/topic/hifz-quran",
      desc: "Memorize Quran with revision, targets and progress tracking.",
      icon: BadgeCheck,
    },
    {
      name: "Namaz",
      path: "/topic/how-to-perform-namaz",
      desc: "Learn Salah, prayer positions, duas and common mistakes.",
      icon: MoonStar,
    },
    {
      name: "Wudu",
      path: "/topic/wudu",
      desc: "Learn purification and Wudu step by step.",
      icon: Droplets,
    },
    {
      name: "Daily Duas",
      path: "/topic/daily-duas",
      desc: "Memorize morning, evening, food, sleep and protection duas.",
      icon: HandHeart,
    },
    {
      name: "Akhlaq & Adab",
      path: "/topic/akhlaq-adab",
      desc: "Build Islamic manners, honesty, respect and good character.",
      icon: HeartHandshake,
    },
    {
      name: "Islamic Studies",
      path: "/topic/islamic-studies",
      desc: "Learn Seerah, Prophets’ stories, beliefs and Islamic lifestyle.",
      icon: ScrollText,
    },
  ];

  const isCoursesActive =
    location.pathname === "/courses" || location.pathname.startsWith("/topic/");

  const closeMenu = () => {
    setIsOpen(false);
    setCoursesOpen(false);
  };
const goBack = () => {
  setIsOpen(false);
  setCoursesOpen(false);

  if (window.history.length > 1) {
    navigate(-1);
  } else {
    navigate("/");
  }
};
  useEffect(() => {
    let frame = 0;
    const updateScroll = () => {
      const totalHeight = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const progress = totalHeight ? Math.min(1, window.scrollY / totalHeight) : 0;
      // Updating the bar directly avoids a full 500-line Navbar React render
      // on every single scroll event.
      if (scrollBarRef.current) {
        scrollBarRef.current.style.transform = `scaleX(${progress})`;
      }
      const scrolled = window.scrollY > 18;
      setIsScrolled((old) => old === scrolled ? old : scrolled);
      frame = 0;
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    const timer = setTimeout(() => {
      window.requestAnimationFrame(updateScroll);
    }, 250);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
  setIsOpen(false);
  setCoursesOpen(false);
}, [location.pathname]);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[99999] transition-all duration-700 ${
        isScrolled
          ? "bg-black/[0.78] shadow-[0_24px_90px_rgba(0,0,0,0.72)] backdrop-blur-2xl"
          : "bg-black/[0.92] backdrop-blur-xl"
      }`}
    >
      {/* Scroll progress */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
        <div
          ref={scrollBarRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 shadow-[0_0_22px_rgba(250,204,21,0.85)]"
        />
      </div>

      {/* Premium light frame */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[-140px] h-64 w-64 rounded-full bg-yellow-400/18 blur-[130px]" />
        <div className="absolute right-[10%] top-[-150px] h-72 w-72 rounded-full bg-yellow-300/12 blur-[140px]" />
        <div className="absolute left-1/2 top-0 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400/45 to-transparent" />
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <nav
        className={`relative mx-auto grid w-[calc(100%-32px)] max-w-[1500px] grid-cols-[auto_1fr_auto] items-center gap-5 px-2 transition-all duration-700 md:px-4 ${
          isScrolled ? "h-[76px]" : "h-[94px]"
        }`}
      >
        {/* LEFT LOGO */}
        {/* LEFT LOGO */}
{/* LEFT LOGO */}
<div className="relative z-[100001] flex min-w-0 flex-1 items-center overflow-visible pr-4 xl:flex-none xl:max-w-[390px]">
  <BrandLogo size="navbar" />
</div>
{/* CENTER NAV */}

        {/* CENTER NAV */}
        <div className="hidden justify-center xl:flex">
          <div className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_18px_65px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 via-white/[0.03] to-yellow-400/10" />

            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-black transition-all duration-500 ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-[0_0_42px_rgba(250,204,21,0.48)]"
                    : "text-white/78 hover:bg-white/10 hover:text-yellow-300"
                }`
              }
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </NavLink>

            {/* Courses mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <Link
                to="/courses"
                className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-sm font-black transition-all duration-500 ${
                  isCoursesActive
                    ? "bg-yellow-400 text-black shadow-[0_0_42px_rgba(250,204,21,0.48)]"
                    : "text-white/78 hover:bg-white/10 hover:text-yellow-300"
                }`}
              >
                <BookOpen className="relative z-10 h-4 w-4" />
                <span className="relative z-10">Courses</span>
                <ChevronDown
                  className={`relative z-10 h-4 w-4 transition-transform duration-300 ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <div
                className={`absolute left-1/2 top-[58px] w-[900px] -translate-x-1/2 transition-all duration-300 ${
                  coursesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-4 opacity-0"
                }`}
              >
                <div className="relative overflow-hidden rounded-[40px] border border-yellow-400/25 bg-black/[0.92] p-5 shadow-[0_36px_110px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12),transparent_35%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:34px_34px]" />

                  <div className="relative z-10 mb-4 flex items-center justify-between rounded-[28px] border border-white/10 bg-white/[0.05] p-5">
                    <div>
                      <p className="text-base font-black text-yellow-400">
                        Complete Islamic Learning
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">
                        Premium Quran programs with dedicated pages and clear learning paths.
                      </p>
                    </div>

                    <Link
                      to="/trial"
                      className="group inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-yellow-400 px-6 py-3.5 text-sm font-black text-black transition hover:bg-yellow-300"
                    >
                      Book Free Trial
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-3">
                    {courseLinks.map((course) => {
                      const Icon = course.icon;

                      return (
                        <Link
                          key={course.name}
                          to={course.path}
                          className="group rounded-[26px] border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400/50 hover:bg-yellow-400/10"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-[0_0_30px_rgba(250,204,21,0.30)] transition-transform duration-300 group-hover:scale-105">
                              <Icon className="h-5 w-5" />
                            </div>

                            <div>
                              <h4 className="font-black text-white transition-colors group-hover:text-yellow-300">
                                {course.name}
                              </h4>
                              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                                {course.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-black transition-all duration-500 ${
                      isActive
                        ? "bg-yellow-400 text-black shadow-[0_0_42px_rgba(250,204,21,0.48)]"
                        : "text-white/78 hover:bg-white/10 hover:text-yellow-300"
                    }`
                  }
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {Icon && <Icon className="h-4 w-4" />}
                    {link.name}
                  </span>
                  <span className="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-yellow-300 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* RIGHT CTA, NO CALL ICON */}
        <div className="hidden justify-end xl:flex">
          <Link
            to="/trial"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[26px] bg-yellow-400 px-8 py-4.5 font-black text-black shadow-[0_0_55px_rgba(250,204,21,0.50)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_0_85px_rgba(250,204,21,0.72)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <GraduationCap className="relative z-10 h-5 w-5" />
            <span className="relative z-10 leading-tight">
              Start Free Trial
            </span>
            <ChevronRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
{/* MOBILE BACK BUTTON */}
{location.pathname !== "/" && !isOpen && (
  <button
    type="button"
    onClick={goBack}
    aria-label="Go back"
    className="relative z-[100001] flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-yellow-400/25 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:bg-yellow-400/10 hover:text-yellow-300 xl:hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-br from-yellow-400/12 via-transparent to-transparent" />
    <ChevronRight className="relative z-10 h-7 w-7 rotate-180" />
  </button>
)}
        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-yellow-400/25 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:bg-yellow-400/10 hover:text-yellow-300 xl:hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-yellow-400/12 via-transparent to-transparent" />
          <Menu className="relative z-10 h-7 w-7" />
        </button>
      </nav>
    </header>

    {/* MOBILE MENU (SOLID PORTAL DRAWER) */}
    {mounted && isOpen
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed inset-0 z-[9999999] flex flex-col text-white xl:hidden"
            style={{ backgroundColor: "#050505" }}
          >
            {/* Solid Top Header */}
            <div className="relative z-10 flex h-[88px] shrink-0 items-center justify-between border-b border-yellow-400/25 bg-[#0a0a0a] px-5 shadow-2xl">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-yellow-400/35 bg-white shadow-[0_0_25px_rgba(250,204,21,0.35)]">
                  <img
                    src="/images/international-islamic-center-logo-sm.webp"
                    alt="International Islamic Center"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div>
                  <div className="text-[16px] font-black leading-tight tracking-wide">
                    <span className="text-white">INTERNATIONAL</span>{" "}
                    <span className="text-yellow-400">ISLAMIC CENTER</span>
                  </div>

                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-yellow-400">
                    Knowledge | Unity | Service
                  </p>
                </div>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/30 bg-white/[0.08] text-white transition-all hover:bg-yellow-400 hover:text-black active:scale-95"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Solid Scrollable Content */}
            <div className="relative z-10 flex-1 overflow-y-auto bg-[#050505] px-5 pb-12 pt-6">
              <div className="mb-6 rounded-[28px] border border-yellow-400/25 bg-[#111111] p-5 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-yellow-300">
                    <Sparkles className="h-5 w-5" />
                    <p className="font-black">Premium Islamic Education</p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-400/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-yellow-300">
                    <Star className="h-3 w-3" />
                    Elite
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-zinc-300">
                  Learn Quran, Tajweed, Hifz, Salah, Duas and Islamic manners with
                  professional online teachers.
                </p>
              </div>

              <div className="space-y-3">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-base font-black transition-all duration-300 ${
                      isActive
                        ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.35)]"
                        : "border-white/10 bg-[#121212] text-white hover:border-yellow-400/40"
                    }`
                  }
                >
                  <span>Home</span>
                  <ChevronRight className="h-5 w-5" />
                </NavLink>

                <div className="rounded-[28px] border border-yellow-400/25 bg-[#0e0e0e] p-4">
                  <button
                    type="button"
                    onClick={() => setMobileCoursesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between text-yellow-300 py-1"
                  >
                    <span className="flex items-center gap-2 font-black">
                      <BookOpen className="h-5 w-5" />
                      Courses
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        mobileCoursesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileCoursesOpen && (
                    <div className="mt-3 grid grid-cols-1 gap-2.5">
                      {courseLinks.map((course) => {
                        const Icon = course.icon;

                        return (
                          <Link
                            key={course.name}
                            to={course.path}
                            onClick={closeMenu}
                            className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#181818] p-3.5 transition hover:border-yellow-400/50 hover:bg-[#202020]"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                              <Icon className="h-5 w-5" />
                            </div>

                            <div>
                              <p className="font-black text-white text-sm">
                                {course.name}
                              </p>
                              <p className="text-xs text-zinc-400">
                                {course.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {navLinks.slice(1).map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-base font-black transition-all duration-300 ${
                        isActive
                          ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.35)]"
                          : "border-white/10 bg-[#121212] text-white hover:border-yellow-400/40"
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="h-5 w-5" />
                  </NavLink>
                ))}
              </div>

              <Link
                to="/trial"
                onClick={closeMenu}
                className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-yellow-400 px-7 py-4.5 font-black text-black shadow-[0_0_40px_rgba(250,204,21,0.45)] transition hover:bg-yellow-300 active:scale-98"
              >
                <GraduationCap className="h-5 w-5" />
                Start Free Trial
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>,
          document.body
        )
      : null}
    </>
  );
}