"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Hasilnya sangat melampaui ekspektasi. Brand kami sekarang punya visual yang kuat dan dikenal banyak orang. Sangat direkomendasikan!",
    author: "Ahmad Fauzi",
    role: "CEO, Kopi Lokal",
    avatar: "A",
    tilt: -2.5,
  },
  {
    quote:
      "Proses kerja sangat profesional, responsif, dan hasilnya bener-bener sesuai visi kami. Website kami sekarang jauh lebih menarik.",
    author: "Sari Dewi",
    role: "Pendiri, Studio Kreatif",
    avatar: "S",
    tilt: 1.5,
  },
  {
    quote:
      "Poster yang dibuat beneran bikin event kami viral di sosmed. Desainnya unik dan berkarakter, beda dari yang lain.",
    author: "Rizky Pratama",
    role: "Event Organizer",
    avatar: "R",
    tilt: -1.5,
  },
];

export default function Testimonials() {
  return (
    <section id="klien" className="py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Decorative star */}
      <div className="absolute right-10 top-10 text-ngreen text-[180px] opacity-[0.05] font-black pointer-events-none select-none hidden lg:block">
        ✦
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ngreen mb-3">
            kata klien.
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Apa Kata Mereka.
          </h2>
        </motion.div>

        {/* Stacked & Rotated Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: t.tilt }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 14,
                delay: i * 0.12,
              }}
              whileHover={{
                rotate: 0,
                x: -4,
                y: -4,
                boxShadow: "7px 7px 0px #ccff00",
                borderColor: "#ccff00",
              }}
              className="bg-[#111] border-[3px] border-[#333] p-6 lg:p-8 flex flex-col justify-between cursor-default"
            >
              {/* Quote Mark */}
              <div>
                <span className="font-display text-6xl text-ngreen leading-none block mb-4">
                  &ldquo;
                </span>
                <p className="text-white/75 text-sm lg:text-base leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="avatar-circle w-12 h-12 flex items-center justify-center border-2 border-ngreen bg-[#222] text-ngreen font-bold text-sm shrink-0" style={{ borderRadius: "50%" }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-white/35 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
