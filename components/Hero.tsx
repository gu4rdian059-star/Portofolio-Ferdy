"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

/* ===== COUNT-UP COMPONENT ===== */
function CountUp({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) { 
  const [count, setCount] = useState(target);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200;
          const intervalMs = 50;
          const increment = target / (duration / intervalMs);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, intervalMs);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="font-display text-4xl lg:text-5xl font-black">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { lang, t } = useApp();
  const [isPhotoColored, setIsPhotoColored] = useState(false);

  return (
    <section
      id="beranda"
      className="relative pt-24 lg:pt-28 pb-20 lg:pb-32 bg-cream overflow-hidden min-h-screen flex items-center"
    >
      {/* Dot grid background */}
      <div className="hero-dot-grid" />

      {/* Decorative floating star — top right */}
      <div className="absolute -top-10 right-10 text-[280px] font-black text-black pointer-events-none select-none hidden lg:block opacity-[0.07] animate-spin-slow">
        ✦
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT COLUMN — 7 cols (wider, asymmetric) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            {/* Availability Badge & School Badge Row — tilted stickers */}
            <div className="mb-8 flex flex-wrap gap-3 items-center">
              <span className="inline-block bg-pink text-black text-xs font-black px-4 py-2.5 border-[3px] border-black shadow-brutal uppercase tracking-wider sticker-tilt-left">
                {t("heroBadge")}
              </span>
              <span className="inline-flex items-center gap-2 bg-ngreen text-black text-xs font-black px-4 py-2 border-[3px] border-black shadow-brutal uppercase tracking-wider sticker-tilt-right">
                <Image src="/school/smkn1pasuruan.webp" alt="SMKN 1 Pasuruan" width={18} height={18} className="object-contain" priority unoptimized />
                SMKN 1 PASURAN — RPL
              </span>
            </div>

            {/* Headline — super big, tight */}
            <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl xl:text-[105px] font-black tracking-tighter leading-[1.1] sm:leading-[1.0] lg:leading-[0.85] mb-8 text-black">
              {lang === "id" ? "halo, saya" : "hello, I'm"}{" "}
              <br className="hidden sm:inline" />
              <span className="relative inline-block mr-2 my-1">
                <span className="relative z-10 px-2">Ferdy</span>
                <span className="absolute inset-0 bg-ngreen -skew-x-3 z-0" />
              </span>
              <span className="relative inline-block my-1">
                <span className="relative z-10 px-2">Firmansyah,</span>
                <span className="absolute inset-0 bg-ngreen -skew-x-3 z-0" />
              </span>
              <br className="hidden sm:inline" />
              {lang === "id" ? (
                <>
                  <span className="block sm:inline mt-1 sm:mt-0">
                    desainer+dev
                  </span>{" "}
                  <br className="hidden sm:inline" />
                  yang bikin{" "}
                  <br className="hidden sm:inline" />
                  brand <span className="text-purple italic">nendang.</span>
                </>
              ) : (
                <>
                  <span className="block sm:inline mt-1 sm:mt-0">
                    designer+dev
                  </span>{" "}
                  <br className="hidden sm:inline" />
                  making brands{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-purple italic">punchy.</span>
                </>
              )}
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-black/80 mb-10 max-w-xl leading-relaxed font-medium">
              {t("heroSubtext")}
            </p>

            {/* CTA Buttons — sticker style */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/karya"
                className="inline-block bg-black text-ngreen font-bold text-sm px-8 py-4 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider"
              >
                {t("heroCTAWork")}
              </Link>
              <Link
                href="/kontak"
                className="inline-block bg-cream text-black font-bold text-sm px-8 py-4 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider sticker-tilt-slight-right hover:!rotate-0"
              >
                {t("heroCTAContact")}
              </Link>
            </div>

            {/* Stats Row — tilted badges */}
            <div className="border-t-[3px] border-black pt-8 flex flex-wrap gap-6 lg:gap-10">
              <div className="flex flex-col sticker-tilt-slight-left">
                <CountUp target={15} suffix="+" />
                <span className="text-[10px] font-bold text-black/80 uppercase tracking-wider mt-1">
                  {t("heroStatProjects")}
                </span>
              </div>
              <div className="flex flex-col sticker-tilt-slight-right">
                <CountUp target={15} suffix="+" />
                <span className="text-[10px] font-bold text-black/80 uppercase tracking-wider mt-1">
                  {t("heroStatClients")}
                </span>
              </div>
              <div className="flex flex-col sticker-tilt-slight-left">
                <CountUp target={1} suffix="+" />
                <span className="text-[10px] font-bold text-black/80 uppercase tracking-wider mt-1">
                  {t("heroStatExp")}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — 5 cols (narrower, asymmetric) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center max-w-sm lg:max-w-none mx-auto w-full px-2 sm:px-0 pb-8">
            {/* Photo card — responsive tilted, tap to toggle full color on mobile */}
            <div
              onClick={() => setIsPhotoColored(!isPhotoColored)}
              className="bg-purple border-[4px] border-black shadow-brutal sm:shadow-brutal-lg p-4 sm:p-5 lg:p-6 relative lg:translate-y-6 group cursor-pointer w-full max-w-[290px] sm:max-w-sm lg:max-w-none lg:rotate-3 select-none active:scale-95 transition-transform"
            >
              <div className="relative aspect-[3/4] w-full border-[4px] border-black overflow-hidden bg-black">
                <Image
                  src={isPhotoColored ? "/me-color.webp" : "/me.webp"}
                  alt="Foto profil Ferdy Firmansyah - UI/UX Designer & Web Developer"
                  width={320}
                  height={427}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating Badge — bottom right, responsive alignment */}
              <div className="absolute -bottom-6 right-1 sm:-bottom-7 sm:-right-4 bg-ngreen border-[3px] border-black shadow-brutal px-3.5 sm:px-5 py-2 sm:py-3 sticker-tilt-left z-20">
                <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-black whitespace-nowrap">
                  <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black animate-pulse-dot" />
                  {t("heroOpenForWork")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
