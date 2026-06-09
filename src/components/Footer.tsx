import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  
  Star,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import { CREATOR_CREDIT } from "../config/brand";

export default function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Pricing", path: "/pricing" },
    { label: "Reviews", path: "/reviews" },
    { label: "Free Trial", path: "/trial" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  const programs = [
    "Quran Reading",
    "Tajweed Rules",
    "Hifz Quran",
    "Salah Learning",
    "Daily Duas",
    "Islamic Manners",
  ];

  return (
    <>
      <style>{`
        @keyframes royalFloat {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-18px) rotateX(5deg) rotateY(-7deg);
          }
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitRotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes goldenDrift {
          0%, 100% {
            transform: translate3d(0,0,0) scale(1);
          }
          50% {
            transform: translate3d(24px,-20px,0) scale(1.08);
          }
        }

        @keyframes chipMove {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes softPulse {
          0%, 100% {
            opacity: .45;
            transform: scale(1);
          }
          50% {
            opacity: .9;
            transform: scale(1.06);
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes lightSweep {
          0% {
            transform: translateX(-140%) skewX(-20deg);
            opacity: 0;
          }
          35% {
            opacity: .45;
          }
          70% {
            opacity: 0;
          }
          100% {
            transform: translateX(140%) skewX(-20deg);
            opacity: 0;
          }
        }

        .royal-float {
          animation: royalFloat 7s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .orbit {
          animation: orbitRotate 18s linear infinite;
        }

        .orbit-reverse {
          animation: orbitRotateReverse 28s linear infinite;
        }

        .golden-drift {
          animation: goldenDrift 12s ease-in-out infinite;
        }

        .chip-move {
          animation: chipMove 6s ease-in-out infinite;
        }

        .soft-pulse {
          animation: softPulse 4s ease-in-out infinite;
        }

        .premium-border {
          position: relative;
        }

        .premium-border::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 42px;
          padding: 1px;
          background: linear-gradient(
            120deg,
            rgba(250,204,21,.12),
            rgba(250,204,21,.85),
            rgba(255,255,255,.18),
            rgba(250,204,21,.12)
          );
          background-size: 300% 300%;
          animation: borderFlow 8s ease infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .shine {
          position: relative;
          overflow: hidden;
        }

        .shine::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 42%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.24),
            transparent
          );
          animation: lightSweep 5s ease-in-out infinite;
          pointer-events: none;
        }

        .tilt-card {
          transition: transform .35s ease, border-color .35s ease, background .35s ease;
        }

        .tilt-card:hover {
          transform: perspective(900px) rotateX(3deg) rotateY(-3deg) translateY(-8px);
        }
      `}</style>

      <footer className="relative overflow-hidden bg-black text-white">
        {/* Deep background */}
     {/* Pure Black Background */}
<div className="absolute inset-0 bg-black" />

        <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-16 md:px-8">
          {/* Top Hero */}
          <div className="premium-border mb-10 rounded-[42px] bg-white/[0.035] shadow-[0_38px_130px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[42px] border border-yellow-400/15 bg-[#070707]/90">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(250,204,21,.10),transparent_32%,transparent_68%,rgba(250,204,21,.08))]" />
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />

              <div className="relative grid gap-10 px-7 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
                {/* Left */}
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-yellow-300">
                     
                    Premium Islamic Learning
                  </div>

                 <BrandLogo size="footer" />

                  <p className="mt-7 max-w-2xl text-[15px] leading-8 text-zinc-300">
                    Learn Quran, Tajweed, Hifz, Salah, Duas and Islamic manners
                    with caring teachers, clear goals, regular progress support
                    and parent guidance.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/trial"
                      className="shine group inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 text-sm font-black text-black shadow-[0_20px_65px_rgba(250,204,21,.42)] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
                    >
                      Start Free Trial
                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to="/how-it-works"
                      className="inline-flex items-center justify-center rounded-2xl border border-yellow-400/25 bg-white/[0.035] px-8 py-4 text-sm font-black text-yellow-300 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400/10"
                    >
                      How It Works
                    </Link>
                  </div>
                </div>

                {/* Right 3D Area */}
                <div className="relative flex min-h-[380px] items-center justify-center">
                  {/* Stage glow */}
                  <div className="soft-pulse absolute h-80 w-80 rounded-full bg-yellow-400/14 blur-[105px]" />

                  {/* 3D floor ellipse */}
                  <div className="absolute bottom-12 h-24 w-[330px] rounded-[50%] border border-yellow-400/10 bg-yellow-400/5 blur-[1px]" />

                  {/* Orbit rings */}
                  <div className="orbit absolute h-[320px] w-[320px] rounded-full border border-yellow-400/16">
                    <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,.95)]" />
                    <span className="absolute bottom-12 left-5 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,.8)]" />
                  </div>

                  <div className="orbit-reverse absolute h-[250px] w-[250px] rounded-full border border-yellow-400/12">
                    <span className="absolute -right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-yellow-200 shadow-[0_0_22px_rgba(250,204,21,.95)]" />
                    <span className="absolute left-10 top-7 h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_16px_rgba(250,204,21,.85)]" />
                  </div>

                  {/* Main 3D Quran card */}
                  <div className="royal-float relative rounded-[38px] border border-yellow-400/25 bg-white/[0.06] p-5 shadow-[0_35px_105px_rgba(0,0,0,.86)] backdrop-blur-2xl">
                    <div className="absolute inset-0 rounded-[38px] bg-[linear-gradient(180deg,rgba(255,255,255,.08),transparent_58%)]" />

                    <div className="relative flex h-[215px] w-[215px] flex-col items-center justify-center rounded-[32px] border border-white/5 bg-gradient-to-br from-[#1c1c1c] via-[#0b0b0b] to-[#030303] text-center shadow-[inset_0_1px_0_rgba(255,255,255,.06)]">
                      <div className="soft-pulse absolute inset-7 rounded-[28px] bg-yellow-400/13 blur-2xl" />

                      <div className="shine relative flex h-17 w-17 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 p-4 text-black shadow-[0_18px_48px_rgba(250,204,21,.38)]">
                        <BookOpen className="h-8 w-8" />
                      </div>

                      <h3 className="relative mt-5 text-2xl font-black text-white">
                        Quran
                      </h3>

                      <p className="relative mt-2 text-xs font-black uppercase tracking-[0.28em] text-yellow-300">
                        Guided Learning
                      </p>
                    </div>
                  </div>

                  {/* Floating chips */}
                  <div className="chip-move absolute left-0 top-12 rounded-2xl border border-yellow-400/20 bg-black/75 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 shadow-[0_20px_60px_rgba(0,0,0,.78)] backdrop-blur-xl">
                    Quran
                  </div>

                  <div
                    className="chip-move absolute right-0 top-9 rounded-2xl border border-yellow-400/20 bg-black/75 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-yellow-300 shadow-[0_20px_60px_rgba(0,0,0,.78)] backdrop-blur-xl"
                    style={{ animationDelay: "0.7s" }}
                  >
                    Tajweed
                  </div>

                  <div
                    className="chip-move absolute bottom-14 right-4 rounded-2xl border border-yellow-400/20 bg-black/75 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-yellow-300 shadow-[0_20px_60px_rgba(0,0,0,.78)] backdrop-blur-xl"
                    style={{ animationDelay: "1.2s" }}
                  >
                    Hifz Quran
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Main Cards */}
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
            {/* Why Parents Trust Us */}
            <div className="tilt-card rounded-[30px] border border-yellow-400/15 bg-white/[0.035] p-7 shadow-[0_24px_78px_rgba(0,0,0,.75)] backdrop-blur-xl hover:border-yellow-400/35 hover:bg-white/[0.055]">
              <h3 className="mb-5 text-xl font-black text-yellow-400">
                Why Parents Trust Us
              </h3>

              <p className="text-sm leading-8 text-zinc-300">
                Every class is designed with care, respect and clear learning
                goals. Students study in a safe online environment with teacher
                guidance, structured lessons and regular progress support.
              </p>

              <div className="mt-6 rounded-[24px] border border-yellow-400/15 bg-black/45 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <CalendarCheck className="h-5 w-5 text-yellow-400" />
                  <h4 className="font-black text-white">
                    Parent-Teacher Meetups
                  </h4>
                </div>

                <p className="text-sm leading-7 text-zinc-400">
                  Monthly or bi-monthly meetups help parents review progress,
                  strengths, weak areas and next learning targets.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="tilt-card rounded-[30px] border border-yellow-400/15 bg-white/[0.035] p-7 shadow-[0_24px_78px_rgba(0,0,0,.75)] backdrop-blur-xl hover:border-yellow-400/35 hover:bg-white/[0.055]">
              <h3 className="mb-6 text-xl font-black text-yellow-400">
                Quick Links
              </h3>

              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex w-fit items-center gap-3 text-sm font-semibold text-zinc-300 transition hover:text-yellow-300"
                  >
                    <ArrowRight className="h-4 w-4 text-yellow-400 transition group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div className="tilt-card rounded-[30px] border border-yellow-400/15 bg-white/[0.035] p-7 shadow-[0_24px_78px_rgba(0,0,0,.75)] backdrop-blur-xl hover:border-yellow-400/35 hover:bg-white/[0.055]">
              <h3 className="mb-6 text-xl font-black text-yellow-400">
                Programs
              </h3>

              <div className="space-y-4">
                {programs.map((program) => (
                  <div
                    key={program}
                    className="flex items-center gap-3 text-sm font-semibold text-zinc-300"
                  >
                    <Star className="h-4 w-4 text-yellow-400" />
                    {program}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="tilt-card rounded-[30px] border border-yellow-400/15 bg-white/[0.035] p-7 shadow-[0_24px_78px_rgba(0,0,0,.75)] backdrop-blur-xl hover:border-yellow-400/35 hover:bg-white/[0.055]">
              <h3 className="mb-6 text-xl font-black text-yellow-400">
                Contact Us
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">Email</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      info@internationalislamiccenter.example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">Phone</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      +1 (234) 567-8900
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">Logo</p>
                    <a
                      href="/images/international-islamic-center-logo.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex text-sm font-bold text-yellow-400 transition hover:text-yellow-300"
                    >
                      View International Islamic Center Logo
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-yellow-400/15 bg-yellow-400/10 p-4">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                  <p className="text-sm font-black text-white">
                    Trusted by parents worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-9 border-t border-yellow-400/10 px-2 pt-6">
            <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <p className="text-sm text-zinc-500">
                © 2026 INTERNATIONAL ISLAMIC CENTER. All rights reserved.
              </p>

              {CREATOR_CREDIT}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}