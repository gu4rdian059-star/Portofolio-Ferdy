"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";

export default function TentangPage() {
  const { lang } = useApp();
  const [activeTab, setActiveTab] = useState<"philosophy" | "tech" | "vokasi">("philosophy");
  const [isPhotoColored, setIsPhotoColored] = useState(false);

  const coreValues = [
    {
      icon: "⚡",
      title_id: "Performa & Kecepatan Kilat",
      title_en: "High Performance & Speed",
      desc_id: "Menggunakan Next.js App Router & Server Components untuk memastikan setiap halaman dimuat secara instan di bawah 1 detik.",
      desc_en: "Utilizing Next.js App Router & Server Components to guarantee instant page loads under 1 second.",
      badgeColor: "#ccff00",
      textColor: "#000",
    },
    {
      icon: "🎨",
      title_id: "Estetika Neo-Brutalisme Berani",
      title_en: "Bold Neo-Brutalist Aesthetic",
      desc_id: "Kombinasi warna kontras tinggi, tipografi eksplisit, dan stiker interaktif yang mencuri perhatian pengguna secara instan.",
      desc_en: "High-contrast color palettes, bold typography, and interactive stickers that capture instant user engagement.",
      badgeColor: "#ff2d9b",
      textColor: "#fff",
    },
    {
      icon: "🤝",
      title_id: "Komunikasi & Kode Bersih",
      title_en: "Clean Code & Communication",
      desc_id: "Arsitektur kode TypeScript terstruktur, dokumentasi jelas, serta komunikasi transparan sepanjang proses pengerjaan.",
      desc_en: "Structured TypeScript code architecture, clear documentation, and transparent communication throughout development.",
      badgeColor: "#7b2fbe",
      textColor: "#fff",
    },
  ];

  const philosophyContent = {
    philosophy: {
      title_id: "Filosofi Desain & Kode: Form Follows Function, Personality Wins.",
      title_en: "Design & Code Philosophy: Form Follows Function, Personality Wins.",
      body_id:
        "Saya percaya bahwa produk digital terbaik tidak hanya harus mudah digunakan dan memiliki performa secepat kilat, tetapi juga harus memiliki kepribadian visual yang kuat. Dalam dunia web modern yang makin seragam, estetika Neo-Brutalisme membawa kesegaran visual yang membuat brand Anda berdiri paling menonjol.",
      body_en:
        "I believe the best digital products should not only be seamless and lightning-fast, but must also exude a strong visual personality. In today's uniform web landscape, Neo-Brutalist aesthetics offer a bold visual breath of fresh air that makes your brand stand out.",
      tags: ["High Impact UI", "Pixel Perfect", "SEO Ready", "TypeScript Clean Code"],
    },
    tech: {
      title_id: "Stack Teknologi Unggulan: Modern, Skalabel & Cepat.",
      title_en: "Core Tech Stack: Modern, Scalable & High-Speed.",
      body_id:
        "Spesialisasi utama saya terletak pada perkakas web modern paling mutakhir: Next.js (App Router, Server Actions), TypeScript untuk type safety ketat, TailwindCSS untuk styling responsif presisi tinggi, Figma untuk prototyping UI/UX, serta Laravel / PHP & SQL untuk kebutuhan backend.",
      body_en:
        "My primary specialization relies on cutting-edge modern web stack: Next.js (App Router, Server Actions), TypeScript for strict type safety, TailwindCSS for precision responsive styling, Figma for UI/UX prototyping, and Laravel / PHP & SQL for backend architecture.",
      tags: ["Next.js 14/15", "TailwindCSS 3", "TypeScript", "Laravel / PHP", "Figma Design"],
    },
    vokasi: {
      title_id: "Pendidikan Vokasi RPL SMKN 1 Pasuruan: Praktis & Solutif.",
      title_en: "SMKN 1 Pasuruan Software Engineering Vocation: Practical & Impactful.",
      body_id:
        "Sebagai siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Negeri 1 Pasuruan dengan motto 'Wiyata Sarwatama', saya ditempah secara intensif dalam logika pemrograman, analisis kebutuhan klien, manajemen basis data, serta standar industri pembuatan perangkat lunak.",
      body_en:
        "As a Software Engineering (RPL) student at SMK Negeri 1 Pasuruan carrying the motto 'Wiyata Sarwatama', I am intensively trained in programming logic, client requirements analysis, database management, and industry-standard software development.",
      tags: ["SMKN 1 Pasuruan", "RPL Major", "Wiyata Sarwatama", "Software Architecture"],
    },
  };

  return (
    <div className="min-h-screen bg-cream text-black flex flex-col pt-20">
      <Navbar />

      <main className="flex-1 pt-10 pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          
          {/* Main Hero Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-[4px] border-black bg-purple text-white p-8 sm:p-12 shadow-[8px_8px_0px_#000] mb-12 relative overflow-hidden"
          >
            {/* Subtle grid pattern background accent */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:18px_18px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="bg-black text-ngreen text-xs font-black uppercase px-4 py-1.5 border-[2.5px] border-black tracking-widest sticker-tilt-slight-left shadow-[3px_3px_0px_#ccff00]">
                    {lang === "id" ? "✦ Profil Desainer & Developer" : "✦ Designer & Developer Profile"}
                  </span>
                  <span className="bg-ngreen text-black text-xs font-black uppercase px-4 py-1.5 border-[2.5px] border-black tracking-wider sticker-tilt-slight-right shadow-[3px_3px_0px_#000]">
                    SMKN 1 Pasuruan — RPL
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.0] mb-6 tracking-tight text-white">
                  Ferdy Firmansyah<span className="text-ngreen">.</span>
                </h1>

                <p className="text-white/90 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mb-8">
                  {lang === "id"
                    ? "Siswa Rekayasa Perangkat Lunak (RPL) SMKN 1 Pasuruan, UI/UX Designer & Full-Stack Web Developer yang mendedikasikan waktu untuk menciptakan antarmuka digital berani, estetik, dan performa super kilat."
                    : "Software Engineering student at SMKN 1 Pasuruan, UI/UX Designer & Full-Stack Web Developer dedicated to building bold, aesthetic, and lightning-fast digital interfaces."}
                </p>

                {/* Quick Stats Badges */}
                <div className="grid grid-cols-3 gap-3 max-w-md">
                  <div className="bg-black/80 border-[2px] border-white p-3 text-center">
                    <span className="font-display text-2xl font-black text-ngreen block">15+</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {lang === "id" ? "Proyek Rilis" : "Projects Done"}
                    </span>
                  </div>
                  <div className="bg-black/80 border-[2px] border-white p-3 text-center">
                    <span className="font-display text-2xl font-black text-pink block">100%</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {lang === "id" ? "Responsif" : "Responsive"}
                    </span>
                  </div>
                  <div className="bg-black/80 border-[2px] border-white p-3 text-center">
                    <span className="font-display text-2xl font-black text-ngreen block">99%</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {lang === "id" ? "Kepuasan" : "Satisfaction"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column Photo Frame */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative">
                  {/* Photo Box — Tap/Click to toggle full color on mobile & hover on desktop */}
                  <div
                    onClick={() => setIsPhotoColored(!isPhotoColored)}
                    className="border-[4px] border-black bg-white p-2.5 shadow-[8px_8px_0px_#ccff00] rotate-2 w-56 sm:w-64 aspect-[3/4] relative overflow-hidden group cursor-pointer select-none active:scale-95 transition-transform"
                  >
                    <Image
                      src="/ferdy.jpg"
                      alt="Ferdy Firmansyah"
                      fill
                      className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
                        isPhotoColored
                          ? "grayscale-0 contrast-100 scale-105"
                          : "grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                      }`}
                      priority
                    />
                    <div className={`absolute bottom-3 left-3 right-3 font-black text-xs uppercase py-1.5 text-center border-[2px] border-black tracking-widest shadow-[2px_2px_0px_#fff] transition-colors duration-300 ${
                      isPhotoColored ? "bg-ngreen text-black" : "bg-black text-ngreen group-hover:bg-ngreen group-hover:text-black"
                    }`}>
                      FERDY FIRMANSYAH
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1 sm:-bottom-4 sm:-left-4 bg-pink text-white text-[11px] font-black uppercase px-3 py-1.5 border-[2px] border-black shadow-[3px_3px_0px_#000] -rotate-6 z-20">
                    ⚡ Pasuruan, ID
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Philosophy, Tech, & Education Showcase Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
            
            {/* Left Column: Interactive Tabs Container (7 cols) — Locked card height */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] flex flex-col justify-between h-[540px] sm:h-[500px]"
            >
              <div className="flex-1 flex flex-col justify-between">
                {/* Tab Controls — 100% consistent shadow for all buttons */}
                <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b-2 border-black/10">
                  <button
                    onClick={() => setActiveTab("philosophy")}
                    className={`px-4 py-2 border-[2.5px] border-black font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 ${
                      activeTab === "philosophy"
                        ? "bg-black text-ngreen"
                        : "bg-white text-black hover:bg-cream"
                    }`}
                  >
                    🧠 {lang === "id" ? "Filosofi" : "Philosophy"}
                  </button>
                  <button
                    onClick={() => setActiveTab("tech")}
                    className={`px-4 py-2 border-[2.5px] border-black font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 ${
                      activeTab === "tech"
                        ? "bg-black text-pink"
                        : "bg-white text-black hover:bg-cream"
                    }`}
                  >
                    💻 Tech Stack
                  </button>
                  <button
                    onClick={() => setActiveTab("vokasi")}
                    className={`px-4 py-2 border-[2.5px] border-black font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 ${
                      activeTab === "vokasi"
                        ? "bg-black text-purple"
                        : "bg-white text-black hover:bg-cream"
                    }`}
                  >
                    🎓 SMKN 1 RPL
                  </button>
                </div>

                {/* Tab Content Viewer — Locked 260px container so card height NEVER changes */}
                <div className="h-[270px] sm:h-[250px] flex flex-col justify-between overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="flex-1 flex flex-col justify-start">
                        {/* Title container locked height */}
                        <div className="h-[68px] sm:h-[64px] flex items-center mb-2">
                          <h2 className="font-display text-xl sm:text-2xl font-black text-black leading-snug line-clamp-2">
                            {lang === "id"
                              ? philosophyContent[activeTab].title_id
                              : philosophyContent[activeTab].title_en}
                          </h2>
                        </div>

                        {/* Body paragraph locked height */}
                        <div className="h-[125px] sm:h-[115px] overflow-hidden mb-2">
                          <p className="text-black/85 text-xs sm:text-sm leading-relaxed font-medium">
                            {lang === "id"
                              ? philosophyContent[activeTab].body_id
                              : philosophyContent[activeTab].body_en}
                          </p>
                        </div>
                      </div>

                      {/* Skill Tags locked height */}
                      <div className="h-[40px] flex items-center flex-wrap gap-2 overflow-hidden">
                        {philosophyContent[activeTab].tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-cream text-black text-[11px] font-bold px-2.5 py-1 border border-black shadow-[2px_2px_0px_#000] whitespace-nowrap"
                          >
                            ✦ {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t-2 border-black/10 flex flex-wrap gap-4 mt-auto">
                <Link
                  href="/karya"
                  className="bg-black text-ngreen font-black text-xs px-6 py-3 border-[2.5px] border-black shadow-[4px_4px_0px_#000] brutal-hover uppercase tracking-wider"
                >
                  {lang === "id" ? "Lihat Portofolio Karya →" : "View Portfolio Work →"}
                </Link>
                <Link
                  href="/kontak"
                  className="bg-cream text-black font-black text-xs px-6 py-3 border-[2.5px] border-black shadow-[4px_4px_0px_#000] brutal-hover uppercase tracking-wider"
                >
                  {lang === "id" ? "Hubungi Saya Sekarang" : "Contact Me Now"}
                </Link>
              </div>
            </motion.div>

            {/* Right Column: School & Major Showcase Card (5 cols) — Locked card height */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-black text-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_#ccff00] relative overflow-hidden flex flex-col justify-between h-[540px] sm:h-[500px]"
            >
              <div>
                <span className="inline-block bg-ngreen text-black text-xs font-black uppercase px-3.5 py-1.5 border-[2px] border-black tracking-wider mb-6">
                  {lang === "id" ? "Latar Belakang Pendidikan Vokasi" : "Vocational Education Background"}
                </span>

                {/* School Header */}
                <div className="flex items-center gap-4 mb-6 bg-[#181818] p-4 border-[2px] border-white/20">
                  <div className="w-16 h-16 relative bg-white rounded-full p-2 border-2 border-ngreen shrink-0 shadow-[2px_2px_0px_#ccff00]">
                    <Image
                      src="/school/smkn1pasuruan.png"
                      alt="SMK Negeri 1 Pasuruan"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-white">SMK Negeri 1 Pasuruan</h3>
                    <p className="text-ngreen text-xs font-bold uppercase tracking-wider mt-0.5">Motto: Wiyata Sarwatama</p>
                  </div>
                </div>

                {/* Major Header */}
                <div className="flex items-center gap-4 mb-6 bg-[#181818] p-4 border-[2px] border-pink/40">
                  <div className="w-14 h-14 relative bg-white rounded-full p-1 border-2 border-pink shrink-0">
                    <Image
                      src="/school/rpl.jpg"
                      alt="Rekayasa Perangkat Lunak"
                      width={56}
                      height={56}
                      className="object-contain w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-black text-pink">Rekayasa Perangkat Lunak (RPL)</h4>
                    <p className="text-white/60 text-xs font-medium">Software Engineering Specialization</p>
                  </div>
                </div>

                <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-medium bg-[#141414] p-4 border border-[#333]">
                  {lang === "id"
                    ? "Pendidikan vokasi yang menekankan pada praktik langsung pemrograman web modern, struktur data, arsitektur perangkat lunak, dan standar desain industri."
                    : "Vocational education emphasizing hands-on practice in modern web programming, data structures, software architecture, and industry design standards."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="inline-block bg-ngreen text-black text-xs font-black uppercase px-3.5 py-1.5 border-[2px] border-black tracking-widest mb-3 sticker-tilt-slight-right">
                {lang === "id" ? "✦ Nilai Utama" : "✦ Core Values"}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-black">
                {lang === "id" ? "Prinsip Kerja & Komitmen." : "Work Principles & Commitment."}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000] brutal-hover flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 border-[2.5px] border-black flex items-center justify-center font-black text-xl mb-4 shadow-[3px_3px_0px_#000]"
                      style={{ backgroundColor: val.badgeColor, color: val.textColor }}
                    >
                      {val.icon}
                    </div>
                    <h3 className="font-display text-xl font-black text-black mb-3">
                      {lang === "id" ? val.title_id : val.title_en}
                    </h3>
                    <p className="text-black/80 text-sm leading-relaxed font-medium">
                      {lang === "id" ? val.desc_id : val.desc_en}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-black text-white p-8 sm:p-12 border-[4px] border-black shadow-[8px_8px_0px_#ccff00] relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-4xl font-black text-ngreen mb-2">
                  {lang === "id" ? "Tertarik Berkolaborasi dengan Ferdy?" : "Interested in Collaborating with Ferdy?"}
                </h3>
                <p className="text-white/80 text-sm sm:text-base font-medium max-w-xl">
                  {lang === "id"
                    ? "Mari diskusikan ide proyek Anda, kebutuhan desain visual, atau pembuatan aplikasi web Next.js berkecepatan tinggi."
                    : "Let's discuss your project ideas, visual design needs, or building high-speed Next.js web applications."}
                </p>
              </div>
              <Link
                href="/kontak"
                className="bg-ngreen text-black font-black text-sm px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_#fff] uppercase tracking-wider shrink-0 sticker-tilt-slight-right hover:!rotate-0 inline-block text-center"
              >
                {lang === "id" ? "Mulai Konsultasi Gratis →" : "Start Free Consultation →"}
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
