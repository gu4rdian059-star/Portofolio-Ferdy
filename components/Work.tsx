"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

const projects = [
  {
    img: "/work/work1.png",
    color: "#ccff00",
    tag: "UI/UX Design",
    name_id: "Desain UI-UX Apps Merchant",
    name_en: "Merchant App UI/UX Design",
    desc_id: "Redesign UI aplikasi merchant dengan fokus pada kemudahan pakai dan pengalaman pengguna.",
    desc_en: "Merchant app UI redesign focused on effortless usability and intuitive user experience.",
    number: "01",
    offset: false,
    link: "https://www.figma.com/design/gYiujwC8535GgY1Ww24mJC/Apps-Koperasi?node-id=3202-1542&t=QlCARnVPsZvofwET-1",
  },
  {
    img: "/work/work2.png",
    color: "#ff2d9b",
    tag: "Website Design",
    name_id: "Website Kasir Neo-Brutalist",
    name_en: "Neo-Brutalist POS Website",
    desc_id: "Website untuk kasir dengan tampilan gaya visual neo-brutalis berkarakter kuat.",
    desc_en: "High-speed point of sale website built with bold neo-brutalist aesthetic.",
    number: "02",
    offset: true,
    link: "https://project-kasir-pi.vercel.app",
  },
  {
    img: "/work/work3.png",
    color: "#7b2fbe",
    tag: "Website Design",
    name_id: "Website Sewa Outdoor",
    name_en: "Outdoor Rental Platform",
    desc_id: "Website platform pemesanan dan persewaan alat outdoor dan camping.",
    desc_en: "Web platform for outdoor & camping gear rental and booking management.",
    number: "03",
    offset: false,
    link: "https://github.com/gu4rdian059-star/Portofolio-Ferdy",
  },
  {
    img: "/work/work4.png",
    color: "#ff6b00",
    tag: "UI/UX Mobile Apps",
    name_id: "Desain Aplikasi To Do List Ibadah",
    name_en: "Worship Tracker Mobile UI",
    desc_id: "UI Aplikasi To Do List Ibadah yang membantu pengingat & pelacak ibadah harian.",
    desc_en: "Mobile app UI design for daily worship tracking & smart reminders.",
    number: "04",
    offset: true,
    link: "https://www.figma.com/design/vhgtxAQickqJjrM5WsdcX5/Untitled?node-id=0-1&t=JgsNlW3XtznyLZix-1",
  },
];

export default function Work() {
  const { lang, t } = useApp();
  return (
    <motion.section
      id="karya"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 80, damping: 20, velocity: 2 }}
      className="py-20 lg:py-28 bg-cream relative overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/75 mb-3">
              {t("workTag")}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-black">
              {t("workTitle")}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/karya"
              className="inline-block bg-black text-ngreen font-bold text-sm px-6 py-2.5 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider self-start sm:self-auto sticker-tilt-slight-right hover:!rotate-0"
            >
              {t("workCTA")}
            </Link>
          </div>
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
              className={`relative h-full ${project.offset ? "sm:card-offset-down" : ""
                }`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat proyek ${lang === "id" ? project.name_id : project.name_en}`}
                className="border-[3px] border-black shadow-brutal brutal-hover cursor-pointer flex flex-col h-full overflow-visible bg-white relative group"
              >
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
                      alt={lang === "id" ? project.name_id : project.name_en}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                <div className="p-5 lg:p-6 relative flex-1">
                  <div className="pr-12 lg:pr-14">
                    <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 border border-black mb-3 uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-lg lg:text-xl font-black text-black mb-1.5 group-hover:text-purple transition-colors">
                      {lang === "id" ? project.name_id : project.name_en}
                    </h3>
                    <p className="text-base text-black/85 font-medium leading-relaxed">
                      {lang === "id" ? project.desc_id : project.desc_en}
                    </p>
                  </div>

                  {/* Arrow Link Button Bottom Right */}
                  <div 
                    aria-hidden="true"
                    className="absolute bottom-5 right-5 lg:bottom-6 lg:right-6 bg-white border-[3px] border-black w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full shadow-[2px_2px_0px_#000] transition-transform duration-300 group-hover:scale-110 group-hover:bg-ngreen text-black text-xl lg:text-2xl font-black"
                  >
                    ↗
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Bottom Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/karya"
            className="inline-block bg-purple text-white font-black text-base px-8 py-4 border-[3px] border-black shadow-brutal brutal-hover uppercase tracking-wider"
          >
            {t("workBannerCTA")}
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
