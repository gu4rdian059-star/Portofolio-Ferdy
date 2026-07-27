"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useApp } from "@/context/AppContext";

export default function Education() {
  const { t } = useApp();

  return (
    <section className="py-20 lg:py-24 bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50 mb-3 dark-theme:text-white/60">
            {t("eduBadge")}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-black">
            {t("eduTitle")}<span className="text-purple">.</span>
          </h2>
          <p className="text-black/70 text-base sm:text-lg mt-3 max-w-2xl font-medium">
            {t("eduSubtitle")}
          </p>
        </motion.div>

        {/* Education Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: SMKN 1 Pasuruan */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="bg-white border-[3px] border-black p-8 shadow-brutal brutal-hover relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="bg-pink text-white text-xs font-black uppercase px-3 py-1 border-[2px] border-black tracking-widest sticker-tilt-slight-left">
                  Sekolah Kejuruan
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-black/50">
                  Pasuruan, Jatim
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-28 h-32 shrink-0 bg-cream p-2 border-[3px] border-black shadow-[4px_4px_0px_#000] flex items-center justify-center">
                  <Image
                    src="/school/smkn1pasuruan.png"
                    alt="Logo SMKN 1 Pasuruan"
                    width={100}
                    height={110}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-black text-black mb-1">
                    {t("eduSchoolName")}
                  </h3>
                  <p className="text-xs font-bold text-purple uppercase tracking-wider mb-3">
                    {t("eduSchoolMotto")}
                  </p>
                  <p className="text-base text-black/90 leading-relaxed font-medium">
                    {t("eduSchoolDesc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                Pusat Keunggulan
              </span>
              <span className="text-xs font-black bg-ngreen text-black px-2.5 py-1 border border-black shadow-[2px_2px_0px_#000]">
                ACTIVE
              </span>
            </div>
          </motion.div>

          {/* Card 2: Rekayasa Perangkat Lunak (RPL) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
            className="bg-white border-[3px] border-black p-8 shadow-brutal brutal-hover relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="bg-ngreen text-black text-xs font-black uppercase px-3 py-1 border-[2px] border-black tracking-widest sticker-tilt-slight-right">
                  Jurusan Keahlian
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-black/50">
                  Software Engineering
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-28 h-32 shrink-0 bg-cream p-2 border-[3px] border-black shadow-[4px_4px_0px_#000] flex items-center justify-center">
                  <Image
                    src="/school/rpl.jpg"
                    alt="Logo Jurusan RPL"
                    width={100}
                    height={110}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-black text-black mb-1">
                    {t("eduDeptName")}
                  </h3>
                  <p className="text-xs font-bold text-pink uppercase tracking-wider mb-3">
                    Pengembangan Perangkat Lunak & Gim
                  </p>
                  <p className="text-base text-black/90 leading-relaxed font-medium">
                    {t("eduDeptDesc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Skills Pills */}
            <div className="pt-4 border-t-2 border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-black/60 block mb-2">
                {t("eduSkillsBadge")}:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Next.js / React", "UI/UX Figma", "Web & Mobile App", "MySQL Database", "Git Version Control"].map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-bold bg-black text-white px-2.5 py-1 border border-black shadow-[2px_2px_0px_#ccff00]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
