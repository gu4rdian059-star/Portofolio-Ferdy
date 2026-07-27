"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

const milestones = [
  {
    year: "2024",
    title_id: "Freelance UI/UX & Web Developer",
    title_en: "Freelance UI/UX & Web Developer",
    category: "Karir & Freelance",
    desc_id: "Mengembangkan aplikasi web Next.js berkecepatan tinggi, sistem kasir neo-brutalist, serta antarmuka UI/UX mobile apps untuk 15+ proyek klien.",
    desc_en: "Developing high-speed Next.js web applications, neo-brutalist POS systems, and mobile UI/UX apps for 15+ client projects.",
    color: "#ccff00",
    textColor: "#000000",
  },
  {
    year: "2023 - 2024",
    title_id: "Spesialisasi RPL — SMKN 1 Pasuruan",
    title_en: "Software Engineering — SMKN 1 Pasuruan",
    category: "Pendidikan Vokasi",
    desc_id: "Fokus mendalami Rekayasa Perangkat Lunak (Software Engineering), arsitektur database SQL, Next.js React framework, dan prinsip UI/UX modern.",
    desc_en: "Focusing on Software Engineering, SQL database architecture, Next.js React framework, and modern UI/UX design principles.",
    color: "#ff2d9b",
    textColor: "#ffffff",
  },
  {
    year: "2023",
    title_id: "Peluncuran Aplikasi Kasir & Merchant UI",
    title_en: "Launch of POS App & Merchant UI",
    category: "Highlight Proyek",
    desc_id: "Merancang dan merilis antarmuka aplikasi merchant dan website kasir dengan gaya desain neo-brutalisme yang berkarakter kuat.",
    desc_en: "Designing and launching merchant app interfaces and POS websites featuring high-impact neo-brutalist aesthetic.",
    color: "#7b2fbe",
    textColor: "#ffffff",
  },
];

export default function Timeline() {
  const { lang } = useApp();

  return (
    <section className="py-20 lg:py-24 bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="inline-block bg-purple text-white text-xs font-black uppercase px-3.5 py-1.5 border-[2px] border-black tracking-widest mb-3 sticker-tilt-slight-left">
            {lang === "id" ? "✦ Jejak Langkah" : "✦ Experience Timeline"}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-black">
            {lang === "id" ? "Perjalanan & Milestones." : "Career & Education Path."}
          </h2>
        </motion.div>

        {/* Timeline Stack Cards */}
        <div className="relative border-l-[4px] border-black ml-4 sm:ml-8 pl-6 sm:pl-10 flex flex-col gap-10">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 14,
                delay: i * 0.1,
              }}
              className="relative group"
            >
              {/* Pin node on vertical line */}
              <div
                className="absolute -left-[35px] sm:-left-[51px] top-6 w-6 h-6 border-[3px] border-black bg-white shadow-[2px_2px_0px_#000] flex items-center justify-center font-mono text-[10px] font-black group-hover:bg-ngreen transition-colors"
              >
                ✦
              </div>

              {/* Milestone Card */}
              <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000] relative overflow-hidden brutal-hover">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span
                    className="text-xs font-black uppercase px-3 py-1 border-[2px] border-black tracking-wider shadow-[2px_2px_0px_#000]"
                    style={{ backgroundColor: m.color, color: m.textColor }}
                  >
                    {m.year}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50">
                    {m.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black text-black mb-3">
                  {lang === "id" ? m.title_id : m.title_en}
                </h3>
                <p className="text-black/90 text-base sm:text-lg leading-relaxed font-medium">
                  {lang === "id" ? m.desc_id : m.desc_en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
