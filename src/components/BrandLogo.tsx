import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type BrandLogoProps = {
  size?: "navbar" | "footer";
};

export default function BrandLogo({ size = "navbar" }: BrandLogoProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isNavbar = size === "navbar";

  const logoSrc = "/images/international-islamic-center-logo-sm.webp";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const modal =
    open && mounted
      ? createPortal(
          <div className="iic-modal-bg fixed inset-0 z-[999999] overflow-y-auto p-4">
            <div className="flex min-h-screen w-full items-center justify-center py-8">
              <div className="iic-panel relative w-full max-w-[1500px] overflow-hidden rounded-[42px] border border-yellow-400/20 bg-[#050505] px-5 py-8 shadow-[0_35px_130px_rgba(0,0,0,0.9)] sm:px-8 lg:px-12 lg:py-12">
                <div className="pointer-events-none absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.14),transparent_58%)]" />
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />
                <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[140px]" />
                <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-[150px]" />

                <div className="relative grid gap-10 lg:min-h-[72vh] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="relative flex min-h-[330px] items-center justify-center sm:min-h-[430px] lg:min-h-[540px]">
                    <div className="iic-glow-pulse absolute h-[270px] w-[270px] rounded-full bg-yellow-400/12 blur-[110px] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]" />

                    <div className="iic-orbit absolute h-[270px] w-[270px] rounded-full border border-yellow-400/16 sm:h-[370px] sm:w-[370px] lg:h-[470px] lg:w-[470px]">
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,.95)]" />
                      <span className="absolute bottom-12 left-8 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,.85)]" />
                    </div>

                    <div className="iic-orbit-reverse absolute h-[205px] w-[205px] rounded-full border border-yellow-400/12 sm:h-[290px] sm:w-[290px] lg:h-[360px] lg:w-[360px]">
                      <span className="absolute -right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-yellow-200 shadow-[0_0_22px_rgba(250,204,21,.95)]" />
                    </div>

                    <div className="iic-float relative">
                      <div className="absolute inset-0 rounded-[48px] bg-yellow-400/20 blur-3xl" />

                      <div className="relative flex h-[205px] w-[205px] items-center justify-center overflow-hidden rounded-[42px] border border-yellow-400/35 bg-white shadow-[0_0_90px_rgba(250,204,21,0.28)] sm:h-[285px] sm:w-[285px] lg:h-[340px] lg:w-[340px]">
                        <img
                          src="/images/international-islamic-center-logo.webp"
                          alt="International Islamic Center Logo"
                          width={340}
                          height={340}
                          className="h-full w-full object-contain p-4"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center text-center lg:text-left">
                    <div className="mb-5 inline-flex w-fit self-center rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-yellow-300 lg:self-start">
                      Premium Islamic Learning
                    </div>

                    <h2 className="iic-title text-[34px] font-black tracking-tight sm:text-[50px] md:text-[70px] xl:text-[88px]">
                      <span className="iic-top-3d">INTERNATIONAL</span>
                      <span className="iic-bottom-3d">ISLAMIC CENTER</span>
                    </h2>

                    <p className="iic-tagline mt-5 text-xs font-black uppercase tracking-[0.34em] text-yellow-400/90 md:text-sm">
                      Knowledge | Unity | Service
                    </p>

                    <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-zinc-300 md:text-lg lg:mx-0 lg:text-[19px] lg:leading-9">
                      A modern Islamic learning center dedicated to Quran,
                      Tajweed, Hifz, Salah, Duas and Islamic manners with care,
                      structure, guidance and a premium online learning
                      experience.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                      {["Quran", "Tajweed", "Hifz", "Islamic Manners"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-2xl border border-yellow-400/20 bg-white/[0.04] px-5 py-3 text-sm font-black text-yellow-300"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                      <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-8 py-4 text-sm font-black text-black shadow-[0_0_35px_rgba(250,204,21,0.35)] transition hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto"
                      >
                        Go To Home
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="inline-flex w-full items-center justify-center rounded-2xl border border-yellow-400/25 bg-white/[0.04] px-8 py-4 text-sm font-black text-yellow-300 transition hover:bg-yellow-400/10 sm:w-auto"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <style>{`
        .iic-logo-card {
          position: relative;
          overflow: hidden;
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .iic-logo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 55px rgba(250,204,21,0.20);
        }

        .iic-title {
          transform-style: preserve-3d;
          line-height: .94;
        }

        .iic-top-3d {
          display: block;
          color: #ffffff;
          letter-spacing: .03em;
          text-shadow:
            0 1px 0 rgba(255,255,255,.28),
            0 2px 0 rgba(255,255,255,.18),
            0 3px 0 rgba(0,0,0,.45),
            0 7px 14px rgba(0,0,0,.72),
            0 18px 35px rgba(0,0,0,.62),
            0 0 18px rgba(255,255,255,.08);
        }

        .iic-bottom-3d {
          display: block;
          letter-spacing: .02em;
          background: linear-gradient(180deg, #fff7bf 0%, #facc15 35%, #c99806 68%, #6f4e00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 1px 0 rgba(255,255,255,.16),
            0 2px 0 rgba(190,140,0,.65),
            0 4px 0 rgba(90,62,0,.78),
            0 8px 18px rgba(0,0,0,.75),
            0 0 30px rgba(250,204,21,.28);
        }

        .iic-navbar-white {
          color: #ffffff;
          letter-spacing: .03em;
          text-shadow:
            0 1px 0 rgba(255,255,255,.18),
            0 3px 8px rgba(0,0,0,.75);
        }

        .iic-navbar-gold {
          background: linear-gradient(180deg, #fff3a6 0%, #facc15 48%, #b88700 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: .02em;
          text-shadow:
            0 1px 0 rgba(255,255,255,.10),
            0 3px 8px rgba(0,0,0,.75);
        }

        .iic-tagline {
          text-shadow: 0 0 18px rgba(250,204,21,.18);
        }

        .iic-modal-bg {
          background:
            radial-gradient(circle at top left, rgba(250,204,21,.10), transparent 30%),
            radial-gradient(circle at top right, rgba(250,204,21,.08), transparent 28%),
            radial-gradient(circle at bottom center, rgba(250,204,21,.08), transparent 32%),
            rgba(0,0,0,.97);
          backdrop-filter: blur(14px);
        }

        .iic-panel::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 42px;
          padding: 1px;
          background: linear-gradient(
            120deg,
            rgba(250,204,21,.10),
            rgba(250,204,21,.62),
            rgba(255,255,255,.12),
            rgba(250,204,21,.10)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .iic-orbit {
          animation: iicOrbit 18s linear infinite;
        }

        .iic-orbit-reverse {
          animation: iicOrbitReverse 28s linear infinite;
        }

        .iic-float {
          animation: iicFloat 6.5s ease-in-out infinite;
        }

        .iic-glow-pulse {
          animation: iicGlowPulse 4.5s ease-in-out infinite;
        }

        @keyframes iicOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes iicOrbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes iicFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes iicGlowPulse {
          0%, 100% { opacity: .55; transform: scale(1); }
          50% { opacity: .95; transform: scale(1.06); }
        }
      `}</style>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`iic-trigger group flex items-center text-left ${
          isNavbar
            ? "w-[calc(100vw-92px)] max-w-[270px] gap-2.5 overflow-hidden sm:max-w-[330px] lg:max-w-[390px] lg:gap-3"
            : "gap-4"
        }`}
      >
        <div className="relative shrink-0">
          {!isNavbar && (
  <div className="absolute inset-0 rounded-2xl bg-yellow-400/22 blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-yellow-300/38" />
)}

          <div
            className={`iic-logo-card relative flex items-center justify-center overflow-hidden border border-yellow-400/35 bg-white shadow-[0_0_22px_rgba(0,0,0,0.35)] ${
              isNavbar
                ? "h-14 w-14 rounded-2xl sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                : "h-20 w-20 rounded-[24px] bg-white"
            }`}
          >
            <img
              src={logoSrc}
              alt="International Islamic Center Logo"
              width={isNavbar ? 64 : 80}
              height={isNavbar ? 64 : 80}
              className={`h-full w-full ${
                isNavbar ? "object-contain p-1" : "object-contain p-1.5"
              }`}
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 leading-none">
          {isNavbar ? (
            <>
              <div className="text-[16px] font-black leading-[0.96] sm:text-[19px] lg:text-[25px]">
                <span className="iic-navbar-white block whitespace-nowrap">
                  INTERNATIONAL
                </span>
                <span className="iic-navbar-gold block whitespace-nowrap">
                  ISLAMIC CENTER
                </span>
              </div>

              <p className="mt-1 hidden text-[8px] font-black uppercase tracking-[0.2em] text-yellow-400/85 sm:block">
                Knowledge | Unity | Service
              </p>
            </>
          ) : (
            <>
              <div className="iic-title text-[28px] font-black tracking-tight md:text-[48px]">
                <span className="iic-top-3d">INTERNATIONAL</span>
                <span className="iic-bottom-3d">ISLAMIC CENTER</span>
              </div>

              <p className="iic-tagline mt-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-yellow-400/85 md:text-xs">
                Knowledge | Unity | Service
              </p>
            </>
          )}
        </div>
      </button>

      {modal}
    </>
  );
}