"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
            {/* Availability Badge — tilted sticker */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block bg-pink text-white text-xs font-bold px-4 py-2.5 border-[3px] border-black shadow-brutal uppercase tracking-wider sticker-tilt-left">
                ✦ Tersedia untuk proyek
              </span>
            </motion.div>

            {/* Headline — super big, tight */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-7xl lg:text-8xl xl:text-[105px] font-black tracking-tighter leading-[1.1] sm:leading-[1.0] lg:leading-[0.85] mb-8"
            >
              halo, saya{" "}
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
              <span className="block sm:inline mt-1 sm:mt-0">
                desainer+dev
              </span>{" "}
              <br className="hidden sm:inline" />
              yang bikin{" "}
              <br className="hidden sm:inline" />
              brand <span className="text-purple italic">nendang.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-black/60 mb-10 max-w-xl leading-relaxed"
            >
              Logo, poster, grafis & branding yang bikin brand kamu{" "}
              <span className="font-bold text-purple">unforgettable</span>.
              Siap bikin sesuatu yang luar biasa?
            </motion.p>

            {/* CTA Buttons — sticker style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#karya"
                className="inline-block bg-black text-ngreen font-bold text-sm px-8 py-4 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider"
              >
                Lihat Karya →
              </a>
              <a
                href="#kontak"
                className="inline-block bg-cream text-black font-bold text-sm px-8 py-4 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider sticker-tilt-slight-right hover:!rotate-0"
              >
                Hubungi Saya
              </a>
            </motion.div>

            {/* Stats Row — tilted badges */}
            <motion.div
              variants={itemVariants}
              className="border-t-[3px] border-black pt-8 flex flex-wrap gap-6 lg:gap-10"
            >
              <div className="flex flex-col sticker-tilt-slight-left">
                <CountUp target={120} suffix="+" />
                <span className="text-[10px] font-semibold text-black/50 uppercase tracking-wider mt-1">
                  Proyek Selesai
                </span>
              </div>
              <div className="flex flex-col sticker-tilt-slight-right">
                <CountUp target={50} suffix="+" />
                <span className="text-[10px] font-semibold text-black/50 uppercase tracking-wider mt-1">
                  Klien Puas
                </span>
              </div>
              <div className="flex flex-col sticker-tilt-slight-left">
                <CountUp target={2} suffix="+" />
                <span className="text-[10px] font-semibold text-black/50 uppercase tracking-wider mt-1">
                  Tahun Pengalaman
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — 5 cols (narrower, asymmetric) */}
          <motion.div
            initial={{ opacity: 0, rotate: 4, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" as const }}
            className="order-1 lg:order-2 lg:col-span-5 relative"
          >
            {/* Photo card — tilted */}
            <div className="bg-purple border-[4px] border-black shadow-brutal-lg p-5 lg:p-6 relative lg:translate-y-6">
              <div className="relative aspect-[3/4] w-full border-[4px] border-black overflow-hidden">
                <Image
                  src="/me.png"
                  alt="Foto portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  preload
                />
              </div>

              {/* Floating Badge — bottom right, counter-tilted */}
              <div className="absolute -bottom-5 -right-5 lg:-bottom-6 lg:-right-6 bg-ngreen border-[3px] border-black shadow-brutal px-5 py-3 sticker-tilt-left">
                <span className="flex items-center gap-2 text-sm font-bold text-black whitespace-nowrap">
                  <span className="inline-block w-2.5 h-2.5 bg-black animate-pulse-dot" />
                  Buka untuk kerja
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
