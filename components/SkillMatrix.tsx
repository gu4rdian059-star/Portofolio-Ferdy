"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

interface SkillItem {
  id: string;
  name_id: string;
  name_en: string;
  level: number;
  category: "frontend" | "uiux" | "backend";
  categoryName_id: string;
  categoryName_en: string;
  color: string;
  projectsCount_id: string;
  projectsCount_en: string;
  experience_id: string;
  experience_en: string;
  keyFeatures_id: string[];
  keyFeatures_en: string[];
}

const allSkills: SkillItem[] = [
  {
    id: "nextjs",
    name_id: "Next.js / React Framework",
    name_en: "Next.js / React Framework",
    level: 95,
    category: "frontend",
    categoryName_id: "Frontend & Web Tech",
    categoryName_en: "Frontend & Web Tech",
    color: "#ccff00",
    projectsCount_id: "12+ Proyek",
    projectsCount_en: "12+ Projects",
    experience_id: "Produksi Server-side Rendering (SSR), App Router, Static Site Generation (SSG), & Server Actions.",
    experience_en: "Production Server-side Rendering (SSR), App Router, Static Site Generation (SSG), & Server Actions.",
    keyFeatures_id: ["App Router & Server Components", "Optimasi SEO & Meta Metadata", "Animasi Framer Motion", "Integrasi TypeScript"],
    keyFeatures_en: ["App Router & Server Components", "SEO Optimization & Meta Metadata", "Framer Motion Animations", "TypeScript Integration"],
  },
  {
    id: "tailwind",
    name_id: "TailwindCSS Styling",
    name_en: "TailwindCSS Styling",
    level: 95,
    category: "frontend",
    categoryName_id: "Frontend & Web Tech",
    categoryName_en: "Frontend & Web Tech",
    color: "#ccff00",
    projectsCount_id: "15+ Proyek",
    projectsCount_en: "15+ Projects",
    experience_id: "Merancang sistem desain Neo-Brutalisme kustom, utility classes, responsive grid, & mode gelap/terang.",
    experience_en: "Designing custom Neo-Brutalist design systems, utility classes, responsive grids, & dark/light mode themes.",
    keyFeatures_id: ["Sistem Tema Kustom", "Utility Neo-Brutalisme", "Breakpoint Responsif", "CSS Grid & Flexbox"],
    keyFeatures_en: ["Custom Theme System", "Neo-Brutalist Utilities", "Responsive Breakpoints", "CSS Grid & Flexbox"],
  },
  {
    id: "ts",
    name_id: "TypeScript / JavaScript",
    name_en: "TypeScript / JavaScript",
    level: 85,
    category: "frontend",
    categoryName_id: "Frontend & Web Tech",
    categoryName_en: "Frontend & Web Tech",
    color: "#ccff00",
    projectsCount_id: "10+ Proyek",
    projectsCount_en: "10+ Projects",
    experience_id: "Menulis kode JavaScript ES6+ modern berkecepatan tinggi dengan tipe data strict TypeScript.",
    experience_en: "Writing high-speed modern ES6+ JavaScript code with strict TypeScript type checking.",
    keyFeatures_id: ["Strict Type Checking", "Panggilan API Async / Await", "State Context Management", "Sintaks Modern ES6+"],
    keyFeatures_en: ["Strict Type Checking", "Async / Await API Calls", "State Context Management", "Modern ES6+ Syntax"],
  },
  {
    id: "htmlcss",
    name_id: "HTML5 / CSS3 Responsive",
    name_en: "HTML5 / CSS3 Responsive",
    level: 98,
    category: "frontend",
    categoryName_id: "Frontend & Web Tech",
    categoryName_en: "Frontend & Web Tech",
    color: "#ccff00",
    projectsCount_id: "20+ Proyek",
    projectsCount_en: "20+ Projects",
    experience_id: "Struktur HTML5 semantik, optimasi aksesibilitas (a11y), dan animasi CSS3 performa tinggi.",
    experience_en: "Semantic HTML5 structure, accessibility (a11y) optimization, and high-performance CSS3 animations.",
    keyFeatures_id: ["Tata Letak HTML5 Semantik", "Animasi CSS & Keyframes", "Dukungan Lintas Browser", "Desain Mobile-First"],
    keyFeatures_en: ["Semantic HTML5 Layout", "CSS Animation & Keyframes", "Cross-browser Support", "Mobile-First Design"],
  },
  {
    id: "figma",
    name_id: "Figma UI/UX Prototyping",
    name_en: "Figma UI/UX Prototyping",
    level: 92,
    category: "uiux",
    categoryName_id: "UI/UX & Desain Grafis",
    categoryName_en: "UI/UX & Visual Design",
    color: "#ff2d9b",
    projectsCount_id: "18+ Desain",
    projectsCount_en: "18+ Designs",
    experience_id: "Perancangan wireframe interaktif, sistem komponen UI (Design Tokens), auto-layout, & prototyping.",
    experience_en: "Crafting interactive wireframes, UI component systems (Design Tokens), auto-layout, & prototyping.",
    keyFeatures_id: ["Prototyping Interaktif", "Sistem Desain & Varian", "Auto Layout 5.0", "Diagram Alur Pengguna"],
    keyFeatures_en: ["Interactive Prototyping", "Design System & Variants", "Auto Layout 5.0", "User Flow Diagrams"],
  },
  {
    id: "wireframe",
    name_id: "Wireframing & Alur Pengguna",
    name_en: "Wireframing & User Flow",
    level: 90,
    category: "uiux",
    categoryName_id: "UI/UX & Desain Grafis",
    categoryName_en: "UI/UX & Visual Design",
    color: "#ff2d9b",
    projectsCount_id: "15+ Proyek",
    projectsCount_en: "15+ Projects",
    experience_id: "Pemetaan kebutuhan pengguna, arsitektur informasi, dan pengujian kegunaan antarmuka (Usability Testing).",
    experience_en: "User needs mapping, information architecture, and interface usability testing.",
    keyFeatures_id: ["Arsitektur Informasi", "Sketsa Low & High Fidelity", "Pemetaan Persona Pengguna", "Konsep A/B Testing"],
    keyFeatures_en: ["Information Architecture", "Low & High Fidelity Sketches", "User Persona Mapping", "A/B Testing Concepts"],
  },
  {
    id: "photoshop",
    name_id: "Adobe Photoshop Grafis",
    name_en: "Adobe Photoshop Graphics",
    level: 88,
    category: "uiux",
    categoryName_id: "UI/UX & Desain Grafis",
    categoryName_en: "UI/UX & Visual Design",
    color: "#ff2d9b",
    projectsCount_id: "25+ Poster",
    projectsCount_en: "25+ Posters",
    experience_id: "Manipulasi foto resolusi tinggi, desain poster branding, pamflet promosi, dan aset grafis sosial media.",
    experience_en: "High-resolution photo manipulation, branding poster design, promotional flyers, and social media graphic assets.",
    keyFeatures_id: ["Editing Foto & Retouching", "Aset Branding & Banner", "Manipulasi Grafis Raster", "Color Grading & FX"],
    keyFeatures_en: ["Photo Editing & Retouching", "Branding Assets & Banners", "Raster Graphic Manipulation", "Color Grading & FX"],
  },
  {
    id: "git",
    name_id: "Git & GitHub Workflow",
    name_en: "Git & GitHub Workflow",
    level: 90,
    category: "backend",
    categoryName_id: "Backend & Dev Tools",
    categoryName_en: "Backend & Dev Tools",
    color: "#7b2fbe",
    projectsCount_id: "250+ Commits",
    projectsCount_en: "250+ Commits",
    experience_id: "Manajemen versi kode, kolaborasi branching, pull requests, dan pengerjaan CI/CD deployment.",
    experience_en: "Code version management, branching collaboration, pull requests, and CI/CD deployment workflows.",
    keyFeatures_id: ["Strategi Branching & Merge Git", "Aksi Repositori GitHub", "Manajemen Kontrol Versi", "Resolusi Konflik Kode"],
    keyFeatures_en: ["Git Branching & Merge Strategy", "GitHub Repository Actions", "Version Control Management", "Code Conflict Resolution"],
  },
  {
    id: "mysql",
    name_id: "MySQL / Database SQL",
    name_en: "MySQL / SQL Database",
    level: 85,
    category: "backend",
    categoryName_id: "Backend & Dev Tools",
    categoryName_en: "Backend & Dev Tools",
    color: "#7b2fbe",
    projectsCount_id: "8+ Database",
    projectsCount_en: "8+ Databases",
    experience_id: "Perancangan skema relasional, optimasi kueri SQL, indexing, dan pengintegrasian dengan ORM.",
    experience_en: "Relational schema design, SQL query optimization, indexing, and ORM integration.",
    keyFeatures_id: ["Arsitektur DB Relasional", "Kueri SQL Kompleks", "Constraint Foreign Key", "ORM Eloquent & Prisma"],
    keyFeatures_en: ["Relational DB Architecture", "Complex SQL Queries", "Foreign Key Constraints", "Eloquent & Prisma ORM"],
  },
  {
    id: "laravel",
    name_id: "Laravel / PHP Backend",
    name_en: "Laravel / PHP Backend",
    level: 80,
    category: "backend",
    categoryName_id: "Backend & Dev Tools",
    categoryName_en: "Backend & Dev Tools",
    color: "#7b2fbe",
    projectsCount_id: "5+ Aplikasi",
    projectsCount_en: "5+ Apps",
    experience_id: "Pembuatan RESTful API, otentikasi JWT/Session, middleware, dan arsitektur MVC di backend.",
    experience_en: "Building RESTful APIs, JWT/Session authentication, middleware, and MVC backend architecture.",
    keyFeatures_id: ["Pengembangan RESTful API", "Otentikasi & Middleware", "Pola Arsitektur MVC", "Migrasi Basis Data"],
    keyFeatures_en: ["RESTful API Development", "Authentication & Middleware", "MVC Architecture Pattern", "Database Migrations"],
  },
];

export default function SkillMatrix() {
  const { lang } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(allSkills[0]);
  const [minLevel, setMinLevel] = useState<number>(75);

  const filteredSkills = allSkills.filter((s) => {
    const matchesCat = activeCategory === "all" || s.category === activeCategory;
    const matchesLevel = s.level >= minLevel;
    return matchesCat && matchesLevel;
  });

  return (
    <section className="py-20 lg:py-24 bg-cream relative overflow-hidden text-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-10 text-center max-w-2xl mx-auto"
        >
          <span className="inline-block bg-pink text-white text-xs font-black uppercase px-3.5 py-1.5 border-[2px] border-black tracking-widest mb-3 sticker-tilt-slight-right">
            {lang === "id" ? "✦ Real-Time Matrix & Stats" : "✦ Real-Time Matrix & Stats"}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-black">
            {lang === "id" ? "Matriks Keahlian Teknis." : "Technical Skill Matrix."}
          </h2>
          <p className="text-black/80 font-medium text-sm sm:text-base mt-2">
            {lang === "id"
              ? "Klik pada keahlian mana pun untuk membuka detail pengalaman proyek & fitur utama secara interaktif."
              : "Click on any skill to interactively inspect project experience & core capabilities."}
          </p>
        </motion.div>

        {/* Real-time Metric Live Counters Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white dark:bg-[#181818] text-black dark:text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_#ccff00] text-center">
            <span className="font-display text-2xl sm:text-3xl font-black text-purple dark:text-ngreen block leading-none">18+</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-black/80 dark:text-white/70 mt-1 block">
              {lang === "id" ? "Proyek Selesai" : "Completed Projects"}
            </span>
          </div>
          <div className="bg-white dark:bg-[#181818] text-black dark:text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_#ff2d9b] text-center">
            <span className="font-display text-2xl sm:text-3xl font-black text-pink block leading-none">250+</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-black/80 dark:text-white/70 mt-1 block">
              {lang === "id" ? "Commits GitHub" : "GitHub Commits"}
            </span>
          </div>
          <div className="bg-white dark:bg-[#181818] text-black dark:text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_#7b2fbe] text-center">
            <span className="font-display text-2xl sm:text-3xl font-black text-purple block leading-none">100%</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-black/80 dark:text-white/70 mt-1 block">
              {lang === "id" ? "Responsive UI" : "Responsive UI"}
            </span>
          </div>
          <div className="bg-white dark:bg-[#181818] text-black dark:text-white p-4 border-[3px] border-black shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] text-center">
            <span className="font-display text-2xl sm:text-3xl font-black text-black dark:text-white block leading-none">95%+</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-black/80 dark:text-white/70 mt-1 block">
              {lang === "id" ? "Rata-Rata Mastery" : "Average Mastery"}
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border-[3px] border-black p-4 sm:p-6 shadow-[6px_6px_0px_#000] mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label_id: "Semua Skill", label_en: "All Skills" },
              { id: "frontend", label_id: "Frontend", label_en: "Frontend" },
              { id: "uiux", label_id: "UI/UX Design", label_en: "UI/UX Design" },
              { id: "backend", label_id: "Backend & Tools", label_en: "Backend & Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 border-[2px] border-black font-bold text-xs uppercase tracking-wider transition-all shadow-[2px_2px_0px_#000] ${
                  activeCategory === tab.id
                    ? "bg-black text-ngreen font-black shadow-[3px_3px_0px_#ccff00]"
                    : "bg-white text-black hover:bg-[#fbf9f4]"
                }`}
              >
                {lang === "id" ? tab.label_id : tab.label_en}
              </button>
            ))}
          </div>

          {/* Real-time Level Filter Slider */}
          <div className="flex items-center gap-3">
            <label className="text-xs font-black uppercase text-black/70 shrink-0">
              {lang === "id" ? "Filter Level Min:" : "Min Level Filter:"} <span className="font-mono text-purple">{minLevel}%</span>
            </label>
            <input
              type="range"
              min="75"
              max="95"
              step="5"
              value={minLevel}
              onChange={(e) => setMinLevel(Number(e.target.value))}
              className="accent-purple cursor-pointer w-32"
            />
          </div>
        </div>

        {/* Main Grid: Interactive Skills List (7 cols) + Selected Skill Detail Drawer (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Skills Interactive List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.id === skill.id;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] cursor-pointer transition-all ${
                    isSelected ? "ring-4 ring-purple border-black shadow-[6px_6px_0px_#7b2fbe]" : "hover:bg-[#fbf9f4]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-black uppercase text-black mb-2">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 border border-black inline-block shadow-[1px_1px_0px_#000]" style={{ backgroundColor: skill.color }} />
                      {lang === "id" ? skill.name_id : skill.name_en}
                    </span>
                    <span className="font-mono font-black text-purple text-sm">{skill.level}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-4 bg-[#eee] border-[2px] border-black shadow-[2px_2px_0px_#000] p-0.5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Skill Detail Inspector Drawer */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white dark:bg-[#181818] text-black dark:text-white border-[3px] border-black p-6 sm:p-8 shadow-[6px_6px_0px_#ccff00] sticky top-24"
                >
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-black/20 dark:border-white/20">
                    <span
                      className="text-xs font-black uppercase px-2.5 py-1 border border-black shadow-[2px_2px_0px_#000]"
                      style={{ backgroundColor: selectedSkill.color, color: selectedSkill.color === "#ccff00" ? "#000" : "#fff" }}
                    >
                      {lang === "id" ? selectedSkill.categoryName_id : selectedSkill.categoryName_en}
                    </span>
                    <span className="font-mono text-purple dark:text-ngreen text-xs font-bold">
                      ✦ {lang === "id" ? selectedSkill.projectsCount_id : selectedSkill.projectsCount_en}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-black text-black dark:text-white mb-2">
                    {lang === "id" ? selectedSkill.name_id : selectedSkill.name_en}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-black/60 dark:text-white/50">
                      {lang === "id" ? "Tingkat Penguasaan:" : "Mastery Level:"}
                    </span>
                    <span className="font-mono font-black text-purple dark:text-ngreen text-base">{selectedSkill.level}%</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-bold text-purple dark:text-ngreen uppercase tracking-wider block mb-1">
                      {lang === "id" ? "Pengalaman & Implementasi Real Proyek:" : "Real Project Implementation:"}
                    </span>
                    <p className="text-black/90 dark:text-white/90 text-sm font-medium leading-relaxed bg-cream dark:bg-[#141414] p-3.5 border border-black dark:border-[#333]">
                      {lang === "id" ? selectedSkill.experience_id : selectedSkill.experience_en}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-pink uppercase tracking-wider block mb-2">
                      {lang === "id" ? "Kemampuan Utama Dikuasai:" : "Key Mastered Capabilities:"}
                    </span>
                    <div className="flex flex-col gap-2">
                      {(lang === "id" ? selectedSkill.keyFeatures_id : selectedSkill.keyFeatures_en).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-bold text-black/90 dark:text-white/90">
                          <span className="text-purple dark:text-ngreen font-mono">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
