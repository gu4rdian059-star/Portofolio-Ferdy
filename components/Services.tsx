"use client";

import { motion } from "framer-motion";

const services = [
  {
    // icon: "🎨",
    name: "Desain Grafis",
    description:
      "Poster brutal, layout majalah, feed Instagram, dan aset visual liar yang memaksa mata audiens berhenti scrolling secara instan.",
    bg: "#ff2d9b",
    text: "white",
    span: "",
    tilt: "",
  },
  {
    // icon: "💻",
    name: "Pengembangan Web",
    description:
      "Website Next.js berkecepatan tinggi dengan integrasi animasi canggih, SEO mantap, dan performa mulus yang siap meroketkan kredibilitas brand Anda.",
    bg: "#7b2fbe",
    text: "white",
    span: "",
    tilt: "",
  },
  {
    // icon: "📱",
    name: "Desain UI/UX",
    description:
      "Wireframe & prototipe interaktif yang didesain secara presisi. Fokus pada kenyamanan jari pengguna dan alur konversi yang intuitif.",
    bg: "#ff6b00",
    text: "white",
    span: "",
    tilt: "",
  },
  {
    // icon: "🤖",
    name: "Mobile Apps",
    description:
      "Aplikasi Android & iOS native/cross-platform dengan performa secepat kilat, transisi dinamis, dan integrasi API yang kokoh.",
    bg: "#1a1aff",
    text: "white",
    span: "",
    tilt: "",
  }, 
];

const workflowSteps = [
  {
    num: "01",
    title: "Brief & Brainstorming",
    description: "Berdiskusi santai untuk menyelaraskan visi brand Anda, memetakan kebutuhan audiens target, dan merumuskan strategi visual yang tepat sasaran.",
    color: "#ff2d9b",
  },
  {
    num: "02",
    title: "Sketsa & Desain Konsep",
    description: "Membuat beberapa alternatif sketsa visual awal, layout kasar, atau wireframe aplikasi yang interaktif untuk disepakati bersama.",
    color: "#ff6b00",
  },
  {
    num: "03",
    title: "Pengembangan & Finishing",
    description: "Memulai proses coding dengan Next.js yang bersih, performa mulus, atau merampungkan aset desain grafis beresolusi tinggi dengan presisi piksel.",
    color: "#7b2fbe",
  },
  {
    num: "04",
    title: "Optimasi & Serah Terima",
    description: "Menguji performa, optimasi SEO untuk pencarian Google, mempublikasikan situs Anda, serta menyerahkan seluruh berkas master secara lengkap.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
            apa yang saya buat.
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
            Layanan Saya.
          </h2>
        </motion.div>

        {/* Bento Grid — uneven card sizes */}
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
                <span
                  className={`text-4xl block ${
                    service.span ? "lg:text-5xl mb-0 shrink-0" : "mb-4"
                  }`}
                >
                  {/* {service.icon} */}
                </span>
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-black mb-2 mt-3 lg:mt-0">
                    {service.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{
                      color:
                        service.text === "white"
                          ? "rgba(255,255,255,0.85)"
                          : service.text === "#ccff00"
                          ? "rgba(204,255,0,0.85)"
                          : "rgba(0,0,0,0.7)",
                    }}
                  >
                    {service.description}
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
              proses kreatif.
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              Alur Kerja Saya.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="bg-white border-[3px] border-black shadow-brutal p-6 relative group overflow-visible"
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

                <h3 className="font-display text-lg font-black text-black mb-3 mt-4 border-b border-black/10 pb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brutalist Divider */}
        <div className="border-t-[3px] border-black my-16 lg:my-24" />

        {/* Tech Stack Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
              teknologi.
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              Senjata Tempur.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 14,
                  delay: i * 0.1,
                }}
                className="bg-white border-[3px] border-black shadow-brutal flex flex-col overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-black text-white px-5 py-3.5 border-b-[3px] border-black flex items-center gap-2">
                  {/* <span className="text-lg">{stack.icon}</span> */}
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {stack.category}
                  </span>
                </div>
                {/* Category Tags */}
                <div className="p-5 flex flex-wrap gap-2.5 bg-[#fbf9f4]">
                  {stack.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#ccff00",
                        color: "#0a0a0a",
                        rotate: Math.random() > 0.5 ? 1.5 : -1.5,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="text-xs font-bold bg-white text-black px-3 py-1.5 border-[2px] border-black cursor-default select-none shadow-[2px_2px_0px_#000] hover:shadow-[3px_3px_0px_#000]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
