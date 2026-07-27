"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
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

/* ===== ANIMATION VARIANTS ===== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 1.0 // Delay to allow the intro loader to slide up
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const { lang, t } = useApp();
  const [isPhotoColored, setIsPhotoColored] = useState(false);

  return (
    <motion.section
      id="beranda"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 80, damping: 20, velocity: 2 }}
      className="relative pt-24 lg:pt-28 pb-20 lg:pb-32 bg-cream overflow-hidden min-h-screen flex items-center"
    >
      {/* Dot grid background */}
      <div className="hero-dot-grid" />

      {/* Decorative floating star — top right */}
      <motion.div
        initial={{ opacity: 0, rotate: -20, y: 0 }}
        animate={{ 
          opacity: 0.07, 
          rotate: 360, 
          y: [0, -20, 0] 
        }}
        transition={{ 
          opacity: { duration: 1.2, delay: 0.5 },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -top-10 right-10 text-[280px] font-black text-black pointer-events-none select-none hidden lg:block"
      >
        ✦
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT COLUMN — 7 cols (wider, asymmetric) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 lg:col-span-7"
          >
            {/* Availability Badge & School Badge Row — tilted stickers */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-3 items-center">
              <span className="inline-block bg-pink text-white text-xs font-bold px-4 py-2.5 border-[3px] border-black shadow-brutal uppercase tracking-wider sticker-tilt-left">
                {t("heroBadge")}
              </span>
              <span className="inline-flex items-center gap-2 bg-ngreen text-black text-xs font-black px-4 py-2 border-[3px] border-black shadow-brutal uppercase tracking-wider sticker-tilt-right">
                <Image src="/school/smkn1pasuruan.png" alt="SMKN 1 Pasuruan" width={18} height={18} className="object-contain" />
                SMKN 1 PASURAN — RPL
              </span>
            </motion.div>

            {/* Headline — super big, tight */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-7xl lg:text-8xl xl:text-[105px] font-black tracking-tighter leading-[1.1] sm:leading-[1.0] lg:leading-[0.85] mb-8 text-black"
            >
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
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-black/70 mb-10 max-w-xl leading-relaxed"
            >
              {t("heroSubtext")}
            </motion.p>

            {/* CTA Buttons — sticker style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
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
            </motion.div>

            {/* Stats Row — tilted badges */}
            <motion.div
              variants={itemVariants}
              className="border-t-[3px] border-black pt-8 flex flex-wrap gap-6 lg:gap-10"
            >
              <div className="flex flex-col sticker-tilt-slight-left">
                <CountUp target={15} suffix="+" />
                <span className="text-[10px] font-semibold text-black/60 uppercase tracking-wider mt-1">
                  {t("heroStatProjects")}
                </span>
              </div>
              <div className="flex flex-col sticker-tilt-slight-right">
                <CountUp target={15} suffix="+" />
                <span className="text-[10px] font-semibold text-black/60 uppercase tracking-wider mt-1">
                  {t("heroStatClients")}
                </span>
              </div>
              <div className="flex flex-col sticker-tilt-slight-left">
                <CountUp target={1} suffix="+" />
                <span className="text-[10px] font-semibold text-black/60 uppercase tracking-wider mt-1">
                  {t("heroStatExp")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — 5 cols (narrower, asymmetric) */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            whileInView={{ opacity: 1, rotate: [0, 2], scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
            className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center max-w-sm lg:max-w-none mx-auto w-full px-2 sm:px-0"
          >
            {/* Photo card — responsive tilted, tap to toggle full color on mobile */}
            <div
              onClick={() => setIsPhotoColored(!isPhotoColored)}
              className="bg-purple border-[4px] border-black shadow-brutal sm:shadow-brutal-lg p-4 sm:p-5 lg:p-6 relative lg:translate-y-6 group cursor-pointer w-full max-w-[290px] sm:max-w-sm lg:max-w-none lg:rotate-3 select-none active:scale-95 transition-transform"
            >
              <div className="relative aspect-[3/4] w-full border-[4px] border-black overflow-hidden bg-black">
                <Image
                  src="/me.png"
                  alt="Foto portrait"
                  fill
                  className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
                    isPhotoColored
                      ? "grayscale-0 contrast-100 scale-105"
                      : "grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                  }`}
                  sizes="(max-width: 768px) 80vw, 40vw"
                  preload
                />
              </div>

              {/* Floating Badge — bottom right, responsive alignment */}
              <div className="absolute -bottom-4 right-1 sm:-bottom-5 sm:-right-4 bg-ngreen border-[3px] border-black shadow-brutal px-3.5 sm:px-5 py-2 sm:py-3 sticker-tilt-left z-20">
                <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold text-black whitespace-nowrap">
                  <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black animate-pulse-dot" />
                  {t("heroOpenForWork")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
