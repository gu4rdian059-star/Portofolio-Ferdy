"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    img: "/work/work1.png",
    color: "#ccff00",
    tag: "UI/UX Design",
    name: "Desain UI-UX Apps Merchant",
    description:
      "Redesign UI aplikasi merchant dengan fokus pada kemudahan pakai.",
    number: "01",
    offset: false,
  },
  {
    img: "/work/work2.png",
    color: "#ff2d9b",
    tag: "Website Design",
    name: "Website Kasir",
    description:
      "Website untuk kasir dengan tampilan neo-brutalis.",
    number: "02",
    offset: true,
  },
  {
    img: "/work/work3.png",
    color: "#7b2fbe",
    tag: "Website Design",
    name: "Website Sewa Outdoor",
    description:
      "Website untuk persewaan alat outdoor.",
    number: "03",
    offset: false,
  },
  {
    img: "/work/work4.png",
    color: "#ff6b00",
    tag: "UI/UX Mobile Apps",
    name: "Desain Aplikasi To Do List Ibadah",
    description:
      "UI Aplikasi To Do List Ibadah yang membantu meningkatkan kualitas ibadah.",
    number: "04",
    offset: true,
  },
];

export default function Work() {
  return (
    <motion.section 
      id="karya" 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 80, damping: 20, velocity: 2 }}
      className="py-20 lg:py-28 bg-cream relative overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
              karya pilihan.
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              Proyek.
            </h2>
          </div>
          <a
            href="#kontak"
            className="inline-block bg-black text-ngreen font-bold text-sm px-6 py-2.5 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider self-start sm:self-auto sticker-tilt-slight-right hover:!rotate-0"
          >
            Pesan Sekarang →
          </a>
        </motion.div>

        {/* Staggered Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 14,
                delay: i * 0.12
              }}
              className={`relative ${project.offset ? "sm:card-offset-down" : ""
                }`}
            >
              <div className="border-[3px] border-black shadow-brutal brutal-hover cursor-default overflow-visible bg-white relative group">
                {/* Large project number — overflowing */}
                <span
                  className="absolute -top-8 -right-3 lg:-top-10 lg:-right-4 font-display text-[80px] lg:text-[100px] font-black leading-none select-none z-20 pointer-events-none transition-transform duration-300 group-hover:scale-110"
                  style={{
                    color: project.color,
                    WebkitTextStroke: "3px #0a0a0a",
                  }}
                >
                  {project.number}
                </span>

                {/* Thumbnail */}
                <div
                  className="aspect-[16/10] flex items-center justify-center border-b-[3px] border-black relative overflow-hidden"
                  style={{ backgroundColor: project.color }}
                >
                  {project.img ? (
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    /* Subtle pattern inside thumbnail when no image */
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)",
                      }}
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-5 lg:p-6">
                  <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 border border-black mb-3 uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <h3 className="font-display text-lg lg:text-xl font-black text-black mb-1.5">
                    {project.name}
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
