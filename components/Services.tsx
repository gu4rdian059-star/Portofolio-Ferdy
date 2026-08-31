"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

const services = [
  {
    name_id: "Desain Grafis",
    name_en: "Graphic Design",
    desc_id:
      "Poster brutal, layout majalah, feed Instagram, dan aset visual liar yang memaksa mata audiens berhenti scrolling secara instan.",
    desc_en:
      "Bold posters, magazine layouts, Instagram feeds, and striking visual assets that instantly stop audiences from scrolling.",
    bg: "#ff2d9b",
    text: "#000000",
    span: "",
    tilt: "",
  },
  {
    name_id: "Pengembangan Web",
    name_en: "Web Development",
    desc_id:
      "Website Next.js berkecepatan tinggi dengan integrasi animasi canggih, SEO mantap, dan performa mulus yang siap meroketkan kredibilitas brand Anda.",
    desc_en:
      "High-speed Next.js websites built with smooth animations, solid SEO, and flawless performance to skyrocket your brand's credibility.",
    bg: "#7b2fbe",
    text: "white",
    span: "",
    tilt: "",
  },
  {
    name_id: "Desain UI/UX",
    name_en: "UI/UX Design",
    desc_id:
      "Wireframe & prototipe interaktif yang didesain secara presisi. Fokus pada kenyamanan jari pengguna dan alur konversi yang intuitif.",
    desc_en:
      "Precision-crafted interactive wireframes & prototypes focused on user accessibility and intuitive conversion flows.",
    bg: "#ff6b00",
    text: "#000000",
    span: "",
    tilt: "",
  },
  {
    name_id: "Mobile Apps",
    name_en: "Mobile Apps",
    desc_id:
      "Aplikasi Android & iOS native/cross-platform dengan performa secepat kilat, transisi dinamis, dan integrasi API yang kokoh.",
    desc_en:
      "Native & cross-platform Android & iOS applications featuring lightning-fast speed, dynamic transitions, and robust API integration.",
    bg: "#1a1aff",
    text: "white",
    span: "",
    tilt: "",
  },
];

const workflowSteps = [
  {
    num: "01",
    title_id: "Brief & Brainstorming",
    title_en: "Brief & Brainstorming",
    desc_id: "Berdiskusi santai untuk menyelaraskan visi brand Anda, memetakan kebutuhan audiens target, dan merumuskan strategi visual yang tepat sasaran.",
    desc_en: "Casual discussions to align your brand vision, map out target audience needs, and craft a pinpoint visual strategy.",
    color: "#ff2d9b",
  },
  {
    num: "02",
    title_id: "Sketsa & Desain Konsep",
    title_en: "Sketch & Concept Design",
    desc_id: "Membuat beberapa alternatif sketsa visual awal, layout kasar, atau wireframe aplikasi yang interaktif untuk disepakati bersama.",
    desc_en: "Creating initial visual sketches, wireframes, and interactive concept layouts for joint review and approval.",
    color: "#ff6b00",
  },
  {
    num: "03",
    title_id: "Pengembangan & Finishing",
    title_en: "Development & Finishing",
    desc_id: "Memulai proses coding dengan Next.js yang bersih, performa mulus, atau merampungkan aset desain grafis beresolusi tinggi dengan presisi piksel.",
    desc_en: "Executing clean Next.js code architecture or polishing high-resolution graphic assets with pixel-perfect precision.",
    color: "#7b2fbe",
  },
  {
    num: "04",
    title_id: "Optimasi & Serah Terima",
    title_en: "Optimization & Handover",
    desc_id: "Menguji performa, optimasi SEO untuk pencarian Google, mempublikasikan situs Anda, serta menyerahkan seluruh berkas master secara lengkap.",
    desc_en: "Running performance tests, Google SEO optimizations, deploying your site live, and delivering all complete master assets.",
    color: "#ccff00",
  },
];

const techStack = [
  {
    category: "Design Tools",
    items: ["Figma", "Photoshop", "Canva", "Ai"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "Next.js", "Laravel", "PHP"],
  },
  {
    category: "Mobile Techs",
    items: ["Flutter", "React Native", "Dart", "Android"],
  },
  {
    category: "Others / Platforms",
    items: ["Antigravity", "Git/GitHub", "Vercel", "Supabase"],
  },
];

export default function Services() {
  const { lang, t } = useApp();

  return (
    <motion.section 
      id="layanan" 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 80, damping: 20, velocity: 2 }}
      className="py-20 lg:py-28 bg-cream relative scroll-mt-20"
    >
      {/* Decorative star */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 360] }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
        className="deco-star -left-20 top-20 text-black hidden lg:block"
      >
        ✦
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/75 mb-3">
            {t("servicesTag")}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-black">
            {t("servicesTitle")}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: i * 0.08
              }}
              className={`border-[3px] border-black shadow-brutal brutal-hover-straighten cursor-default ${service.span} ${service.tilt}`}
              style={{ backgroundColor: service.bg }}
            >
              <div
                className={`p-6 lg:p-8 ${
                  service.span ? "lg:flex lg:items-center lg:gap-6" : ""
                }`}
                style={{ color: service.text }}
              >
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-black mb-2 mt-3 lg:mt-0">
                    {lang === "id" ? service.name_id : service.name_en}
                  </h3>
                  <p
                    className="text-base sm:text-lg leading-relaxed font-medium"
                    style={{
                      color:
                        service.text === "white"
                          ? "rgba(255,255,255,0.95)"
                          : service.text === "#ccff00"
                          ? "rgba(204,255,0,0.95)"
                          : "rgba(0,0,0,0.95)",
                    }}
                  >
                    {lang === "id" ? service.desc_id : service.desc_en}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brutalist Divider */}
        <div className="border-t-[3px] border-black my-16 lg:my-24" />

        {/* Workflow Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="mb-14"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/75 mb-3">
              {lang === "id" ? "proses kreatif." : "creative process."}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              {lang === "id" ? "Alur Kerja Saya." : "My Workflow."}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: i * 0.1,
                }}
                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                className="bg-white border-[3px] border-black shadow-brutal p-6 relative group overflow-visible flex flex-col h-full justify-between"
              >
                {/* Step Number */}
                <span
                  className="absolute -top-7 right-4 font-display text-6xl font-black select-none pointer-events-none transition-transform duration-300 group-hover:scale-110"
                  style={{
                    color: step.color,
                    WebkitTextStroke: "2.5px #0a0a0a",
                  }}
                >
                  {step.num}
                </span>

                <div className="mt-2 flex flex-col flex-1">
                  {/* Fixed height title header container for 100% pixel-perfect horizontal alignment */}
                  <div className="min-h-[58px] flex items-end mb-3 border-b border-black/10 pb-2.5">
                    <h3 className="font-display text-base sm:text-lg font-black text-black leading-snug">
                      {lang === "id" ? step.title_id : step.title_en}
                    </h3>
                  </div>

                  <p className="text-sm text-black/90 font-medium leading-relaxed flex-1">
                    {lang === "id" ? step.desc_id : step.desc_en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="bg-white dark:bg-[#181818] text-black dark:text-white p-8 sm:p-12 border-[3px] border-black shadow-brutal relative overflow-hidden">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple dark:text-ngreen mb-3">
              {lang === "id" ? "teknologi & perkakas." : "tech & tools."}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-black dark:text-white">
              {lang === "id" ? "Tech Stack Pilihan." : "Curated Tech Stack."}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((group, i) => (
              <div key={i} className="border-l-2 border-purple dark:border-ngreen/40 pl-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-purple dark:text-ngreen mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-cream dark:bg-[#222] text-black dark:text-white text-xs font-bold px-3 py-1.5 border border-black dark:border-[#444]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
