"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section 
      id="kontak" 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 80, damping: 20, velocity: 2 }}
      className="py-20 lg:py-28 bg-ngreen relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative huge star background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="text-[400px] lg:text-[600px] text-black opacity-[0.04] font-black leading-none flex items-center justify-center w-0 h-0"
        >
          ✦
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — Dramatic Headline (8 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] lg:leading-[0.9] tracking-tight flex flex-col items-start">
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 13 }}
              >
                Punya ide
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -2.5 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.15 }}
                className="inline-block bg-black text-ngreen px-4 py-1 mt-2 sticker-tilt-slight-left"
              >
                berani?
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 13, delay: 0.3 }}
                className="inline-block mt-2"
              >
                Ayo wujudkan.
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-lg text-black/60 mt-6 max-w-md"
            >
              Siap bikin sesuatu yang beda dari yang lain? Langsung hubungi saya sekarang.
            </motion.p>
          </div>

          {/* Right — CTA Buttons (4 cols), sticker style */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 95, damping: 14, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <a
              href="mailto:frdyfirmansyahh@gmail.com"
              className="flex items-center justify-center gap-3 bg-black text-ngreen font-bold text-base lg:text-lg px-8 py-5 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider sticker-tilt-slight-right hover:!rotate-0"
            >
              <span className="text-xl">✉</span>
             EMAIL SAYA
            </a>
            <a
              href="https://wa.me/6285236132763"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-cream text-black font-bold text-base lg:text-lg px-8 py-5 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider sticker-tilt-slight-left hover:!rotate-0"
            >
              <span className="text-xl">💬</span>
              WhatsApp Saya
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
