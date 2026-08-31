"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";

const projects = [
  {
    id: 1,
    img: "/work/work1.png",
    color: "#ccff00",
    category: "UI/UX Design",
    name_id: "Desain UI-UX Apps Merchant",
    name_en: "Merchant App UI/UX Design",
    desc_id: "Redesign UI aplikasi merchant dengan fokus pada kemudahan pakai, alur transaksi efisien, dan analitik bisnis terintegrasi.",
    desc_en: "Merchant app UI redesign focused on effortless usability, efficient checkout flow, and business analytics.",
    number: "01",
    link: "https://www.figma.com/design/gYiujwC8535GgY1Ww24mJC/Apps-Koperasi?node-id=3202-1542&t=QlCARnVPsZvofwET-1",
    featured: true,
  },
  {
    id: 2,
    img: "/work/work2.png",
    color: "#ff2d9b",
    category: "Website Design",
    name_id: "Website Kasir Neo-Brutalist",
    name_en: "Neo-Brutalist POS Website",
    desc_id: "Aplikasi web kasir berkecepatan tinggi dengan antarmuka neo-brutalis untuk manajemen inventaris & POS modern.",
    desc_en: "High-speed point of sale web app with neo-brutalist interface for inventory & modern POS management.",
    number: "02",
    link: "https://project-kasir-pi.vercel.app",
    featured: true,
  },
  {
    id: 3,
    img: "/work/work3.png",
    color: "#7b2fbe",
    category: "Website Design",
    name_id: "Website Sewa Alat Outdoor",
    name_en: "Outdoor Rental Platform",
    desc_id: "Platform penyewaan perlengkapan petualangan outdoor lengkap dengan sistem pemesanan & kalender ketersediaan.",
    desc_en: "Outdoor adventure gear rental web platform complete with booking system & availability calendar.",
    number: "03",
    link: "#",
    featured: false,
  },
  {
    id: 4,
    img: "/work/work4.png",
    color: "#ff6b00",
    category: "UI/UX Mobile Apps",
    name_id: "Desain Aplikasi To Do List Ibadah",
    name_en: "Worship Tracker Mobile UI",
    desc_id: "UI Mobile App interaktif pengingat & pencatat jurnal ibadah harian dengan visualisasi progres personal.",
    desc_en: "Interactive mobile app UI for daily worship journaling & smart reminders with progress tracking.",
    number: "04",
    link: "https://www.figma.com/design/vhgtxAQickqJjrM5WsdcX5/Untitled?node-id=0-1&t=JgsNlW3XtznyLZix-1",
    featured: true,
  },
];

export default function KaryaPage() {
  const { lang, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label_id: "Semua", label_en: "All" },
    { id: "UI/UX Design", label_id: "UI/UX Design", label_en: "UI/UX Design" },
    { id: "Website Design", label_id: "Website Design", label_en: "Website Design" },
    { id: "UI/UX Mobile Apps", label_id: "UI/UX Mobile Apps", label_en: "UI/UX Mobile Apps" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const name = lang === "id" ? project.name_id : project.name_en;
    const desc = lang === "id" ? project.desc_id : project.desc_en;
    const matchesSearch =
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream text-black flex flex-col pt-20">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Banner — Redesigned Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-[3px] border-black bg-purple p-8 sm:p-12 shadow-brutal mb-12 relative overflow-hidden text-white"
          >
            {/* Subtle grid pattern background accent */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-ngreen text-black text-xs font-black uppercase px-3 py-1 border-[2px] border-black tracking-widest sticker-tilt-slight-left">
                    {t("karyaBannerBadge")}
                  </span>
                  <span className="bg-pink text-black text-xs font-black uppercase px-3 py-1 border-[2px] border-black tracking-wider">
                    {projects.length} {t("karyaBannerCount")}
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-6xl font-black leading-tight mb-4 tracking-tight">
                  {t("karyaBannerTitle")}
                </h1>
                <p className="text-white/90 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
                  {t("karyaBannerDesc")}
                </p>
              </div>

              {/* Decorative badge right side */}
              <div className="hidden lg:flex flex-col items-center justify-center bg-black border-[3px] border-white p-5 shadow-[4px_4px_0px_#ccff00] text-center rotate-2 shrink-0">
                <span className="text-ngreen text-3xl font-black">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-1">
                  {lang === "id" ? "Kualitas Terjamin" : "Guaranteed Quality"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Controls: Category Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2.5 border-[3px] border-black transition-all duration-200 shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 ${
                    selectedCategory === cat.id
                      ? "bg-black text-ngreen font-black"
                      : "bg-white text-black hover:bg-cream"
                  }`}
                >
                  {lang === "id" ? cat.label_id : cat.label_en}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative min-w-[240px]">
              <input
                id="search-project"
                type="text"
                aria-label={t("karyaSearchPlaceholder") || "Cari proyek"}
                placeholder={t("karyaSearchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-black placeholder:text-black/60 text-sm font-bold px-4 py-2.5 border-[3px] border-black shadow-[3px_3px_0px_#000] focus:outline-none focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label={lang === "id" ? "Hapus pencarian" : "Clear search"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-black text-black/75 hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="relative group h-full"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-[3px] border-black shadow-brutal brutal-hover flex flex-col h-full bg-white relative overflow-hidden"
                    >
                      {/* Badge Number */}
                      <span
                        className="absolute top-4 right-4 font-display text-4xl sm:text-5xl font-black leading-none select-none z-20 pointer-events-none"
                        style={{
                          color: project.color,
                          WebkitTextStroke: "2px #0a0a0a",
                        }}
                      >
                        {project.number}
                      </span>

                      {/* Thumbnail Container */}
                      <div
                        className="aspect-[16/9] border-b-[3px] border-black relative overflow-hidden flex items-center justify-center"
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
                          <div
                            className="absolute inset-0 opacity-10"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 12px)",
                            }}
                          />
                        )}
                      </div>

                      {/* Info Content */}
                      <div className="p-6 relative flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="bg-black text-white text-[11px] font-bold px-3 py-1 border border-black uppercase tracking-wider">
                              {project.category}
                            </span>
                            {project.featured && (
                              <span className="bg-ngreen text-black text-[11px] font-black px-2.5 py-1 border border-black uppercase tracking-wider">
                                Featured
                              </span>
                            )}
                          </div>

                          <h3 className="font-display text-xl sm:text-2xl font-black text-black mb-2 group-hover:text-purple transition-colors">
                            {lang === "id" ? project.name_id : project.name_en}
                          </h3>
                          <p className="text-sm sm:text-base text-black/85 font-medium leading-relaxed mb-6">
                            {lang === "id" ? project.desc_id : project.desc_en}
                          </p>
                        </div>

                        {/* CTA Link Row */}
                        <div className="flex items-center justify-between pt-4 border-t border-black/10">
                          <span className="font-display font-black text-xs uppercase tracking-wider text-purple group-hover:underline">
                            {lang === "id" ? "Lihat Proyek →" : "View Project →"}
                          </span>
                          <div className="bg-black text-ngreen w-8 h-8 rounded-full border border-black flex items-center justify-center font-black text-sm group-hover:scale-110 transition-transform">
                            ↗
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white border-[3px] border-black shadow-brutal p-8"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-display text-2xl font-black text-black mb-2">
                  {t("karyaNoResults")}
                </h3>
                <p className="text-black/60 text-sm font-medium mb-6">
                  {lang === "id" ? "Coba gunakan kata kunci lain atau reset filter pencarian." : "Try using different keywords or reset your filter."}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="bg-black text-ngreen font-bold text-xs px-6 py-3 border-[2px] border-black shadow-[3px_3px_0px_#000] uppercase tracking-wider brutal-hover"
                >
                  {t("karyaResetFilter")}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom CTA Card */}
          <div className="mt-16 bg-black text-white p-8 sm:p-12 border-[3px] border-black shadow-[8px_8px_0px_#ccff00] relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-4xl font-black text-ngreen mb-2">
                  {t("karyaCTATitle")}
                </h3>
                <p className="text-white/80 text-sm sm:text-base font-medium max-w-xl">
                  {t("karyaCTADesc")}
                </p>
              </div>
              <Link
                href="/kontak"
                className="bg-ngreen text-black font-black text-sm px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_#fff] uppercase tracking-wider shrink-0 sticker-tilt-slight-right hover:!rotate-0 inline-block text-center"
              >
                {t("karyaCTABtn")}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
