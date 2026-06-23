# PROMPT — Neo-Brutalism Portfolio Website

---

## PASTE INI KE AI / BOLT.NEW / V0.DEV:

---

Build a complete Neo-Brutalism personal portfolio website using **Next.js 14 (App Router) + Tailwind CSS + Framer Motion**. Single page, fully responsive, production-ready.

---

## DESIGN SYSTEM

**Color Palette:**
- Background: `#f5f2eb` (cream)
- Black: `#0a0a0a`
- Neon Green: `#ccff00`
- Hot Pink: `#ff2d9b`
- Purple: `#7b2fbe`
- Orange: `#ff6b00`
- Blue: `#1a1aff`

**Typography:**
- Display / Heading: `Playfair Display` (Google Fonts) — weight 700, 900
- Body / UI: `Space Grotesk` (Google Fonts) — weight 400, 500, 600, 700

**Neo-Brutalism Rules:**
- All cards and buttons: `border: 3-4px solid #0a0a0a`
- Box shadow: `5px 5px 0px #0a0a0a`
- Hover state: `transform: translate(-3px, -3px)` + `box-shadow: 8px 8px 0px #0a0a0a`
- No border-radius anywhere (0px)
- High contrast, bold typography

---

## TAILWIND CONFIG

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      cream:  "#f5f2eb",
      ngreen: "#ccff00",
      pink:   "#ff2d9b",
      purple: "#7b2fbe",
      orange: "#ff6b00",
      blue:   "#1a1aff",
    },
    fontFamily: {
      sans:    ["Space Grotesk", "sans-serif"],
      display: ["Playfair Display", "serif"],
    },
    boxShadow: {
      brutal:   "5px 5px 0px #0a0a0a",
      brutalLg: "8px 8px 0px #0a0a0a",
    },
  },
}
```

---

## SECTIONS — BUILD ALL OF THESE:

### 1. NAVBAR (fixed, top)
- Left: Logo `YourName.` — font-display, font-black
- Center: Links → Services | Work | Clients
- Right: CTA button `Hire Me` — bg black, text neon green, brutal shadow
- Border bottom 3px black
- Background cream

---

### 2. HERO SECTION
**Left side:**
- Small tag badge: `✦ Available for projects` — bg pink, white text, border black
- Headline (font-display, 80-96px, font-black, tracking-tighter, leading-none):
  ```
  hey, i'm
  [YourName]   ← highlighted with bg neon green
  a designer+dev
  building loud
  brands.
  ```
- Subtext (20-24px): "Logo, poster, graphics & branding yang bikin brand kamu **unforgettable**." — bold purple on word "unforgettable"
- Two CTA buttons side by side:
  - `See My Work →` — bg black, text neon green, brutal shadow
  - `Let's Talk` — bg cream, text black, brutal shadow
- Stats row (border-top black, padding-top):
  - `390+` Projects Done
  - `69+` Happy Clients  
  - `4+` Years Exp.
  - Numbers animate count-up when scrolled into view (Framer Motion)

**Right side:**
- Photo card: bg purple, border 4px black, brutal-lg shadow, padding 24px
- Inside: `<img src="/foto.jpg" />` — full width, border 4px black, aspect-ratio 3/4
- Floating badge bottom-right: bg neon green, border black, brutal shadow
  - Text: `● Open for work` — dot pulses with CSS animation

---

### 3. MARQUEE TICKER
- Full width, bg black, border top + bottom 3px black
- Infinite scroll left animation (CSS @keyframes or Framer Motion)
- Items (white text, 14px, font-bold, uppercase, tracking-widest):
  - `✦ poster design`
  - `✦ web development`
  - `✦ brand identity`
  - `✦ creative direction`
  - `✦ graphic design`
  - `✦ logo design`
  - `✦ UI/UX design`
- Star `✦` in neon green, text in white
- Duplicate items for seamless loop

---

### 4. SERVICES SECTION
- Eyebrow: `what i make.` — small, uppercase, gray
- Heading: `My Services.` — font-display, 56-64px, font-black

**6 cards in CSS grid (3 cols desktop, 2 cols tablet, 1 col mobile):**

| # | Icon | Name | Description | BG | Text |
|---|------|------|-------------|-----|------|
| 1 | 🎨 | Graphic Design | Poster, flyer, social media — visual yang bikin orang berhenti scroll. | `#ccff00` | black |
| 2 | 🔷 | Logo Design | Identitas brand yang kuat, timeless, dan langsung dikenal. | `#ff2d9b` | white |
| 3 | 💻 | Web Development | Website modern, cepat, dan responsif yang convert visitors jadi klien. | `#7b2fbe` | white |
| 4 | 🎯 | Brand Identity | Dari logo sampai panduan brand — semua satu paket yang konsisten. | `#ff6b00` | white |
| 5 | 📱 | UI/UX Design | Interface yang intuitif dan enak dipakai — bukan sekadar cantik. | `#1a1aff` | white |
| 6 | ✦ | Creative Direction | Strategi visual menyeluruh agar semua aset brand terasa satu jiwa. | `#0a0a0a` | `#ccff00` |

Each card: border 3px black, brutal shadow, hover effect translate + bigger shadow

---

### 5. WORK / PORTFOLIO SECTION
- Eyebrow: `selected work.`
- Heading: `Projects.`
- Header row: heading left, `Get One →` button right (bg black, text green)

**4 project cards in 2x2 grid:**

| # | Color Thumb | Tag | Name | Description |
|---|------------|-----|------|-------------|
| 1 | `#ccff00` | Branding | Brand Identity — Kopi Lokal | Logo, color palette, dan packaging untuk brand kopi indie lokal. |
| 2 | `#ff2d9b` | Web Dev | Website — Studio Kreatif | Portfolio website neo-brutalism untuk studio desain di Jakarta. |
| 3 | `#7b2fbe` | Poster | Event Poster — Musik Fest | Serangkaian poster bold untuk festival musik underground. |
| 4 | `#ff6b00` | UI/UX | App Design — Fintech Startup | Redesign UI aplikasi keuangan dengan fokus pada kemudahan pakai. |

Each card:
- Top: colored thumbnail div (aspect 16/10), show large number `01` `02` etc in Playfair Display center, border bottom black
- Bottom: white bg, tag chip (bg black, white text, small), project name bold, desc gray

---

### 6. TESTIMONIALS SECTION
- BG: `#0a0a0a` (full black section)
- Eyebrow: `client words.` — neon green
- Heading: `What They Say.` — white, font-display

**3 cards in 3-col grid:**

**Card 1:**
- Quote: `"` in neon green, Playfair, 48px
- Text: *"Hasilnya sangat melampaui ekspektasi. Brand kami sekarang punya visual yang kuat dan dikenal banyak orang. Highly recommended!"*
- Author: Ahmad Fauzi / CEO, Kopi Lokal / Avatar circle "A"

**Card 2:**
- Text: *"Proses kerja sangat profesional, responsif, dan hasilnya bener-bener sesuai visi kami. Website kami sekarang jauh lebih menarik."*
- Author: Sari Dewi / Founder, Studio Kreatif / Avatar "S"

**Card 3:**
- Text: *"Poster yang dibuat beneran bikin event kami viral di sosmed. Desainnya unik dan berkarakter, beda dari yang lain."*
- Author: Rizky Pratama / Event Organizer / Avatar "R"

Cards: border 2px `#333`, hover shadow neon green `7px 7px 0 #ccff00`
Avatar: circle, border neon green, bg `#222`, text neon green

---

### 7. CONTACT / CTA SECTION
- BG: `#ccff00` (full neon green section)
- Left: big headline font-display 64-72px font-black:
  ```
  Got a bold
  [idea?]     ← word in black bg, neon green text
  Let's build it.
  ```
- Right: two stacked buttons:
  - `✉ hello@yourname.com` — bg black, text green, brutal shadow, links to mailto
  - `💬 WhatsApp Me` — bg cream, text black, brutal shadow, links to wa.me

---

### 8. FOOTER
- BG: `#0a0a0a`
- Left: Logo `YourName.` — white, dot in neon green
- Center: `© 2026 — All rights reserved.` — gray small text
- Right: 4 social icon buttons (ig / be / gh / li) — square 40px, border `#333`, hover bg neon green

---

## ANIMATIONS

Use **Framer Motion** for:
- Hero elements: fade + slide up on load (staggered, 0.1s delay each)
- Section headings: fade in when scrolled into view (`whileInView`, `viewport: { once: true }`)
- Stats: count-up number animation on scroll into view
- Cards: no auto-animation, only hover micro-interactions via Tailwind

---

## RESPONSIVE BREAKPOINTS

| Screen | Layout changes |
|--------|---------------|
| Desktop (lg+) | Hero 2-col, Services 3-col, Work 2-col, Testimonials 3-col |
| Tablet (md) | Hero 1-col (photo on top), Services 2-col, Work 2-col, Testimonials 1-col |
| Mobile (sm) | All 1-col, nav links hidden, reduced font sizes |

---

## FILE STRUCTURE

```
app/
├── layout.tsx          ← fonts, metadata
├── page.tsx            ← imports all sections
└── globals.css         ← base styles, @keyframes marquee

components/
├── Navbar.tsx
├── Hero.tsx
├── Marquee.tsx
├── Services.tsx
├── Work.tsx
├── Testimonials.tsx
├── Contact.tsx
└── Footer.tsx

public/
└── foto.jpg            ← ganti dengan foto kamu
```

---

## IMPORTANT NOTES

- Use `next/font/google` for Space Grotesk and Playfair Display (no external link tags)
- `"use client"` on components that use Framer Motion or useState
- All images use `next/image` component
- No `border-radius` anywhere — this is Neo-Brutalism
- Every interactive element must have hover: translate(-3px, -3px) + bigger shadow
- Marquee must loop seamlessly (duplicate items + CSS animation)
- Stats counter triggers only once when scrolled into view

---

*Replace semua `YourName`, email, WhatsApp number, dan foto dengan data kamu sendiri.*
