# The Date Curator — By Luxury Proposal

A luxury romantic experience curation web app built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** icons.

---

## ✨ Features

- **4-section scroll-snap experience** — full viewport snap scrolling with smooth transitions
- **Hero Landing** — animated gold shimmer logo, floating animations, elegant headline
- **Story / About** — rotating ring visual, philosophy copy, stat counters
- **Explore** — 8 experience cards with category filtering tabs + 8-category grid
- **Plan Your Date CTA** — rotating decorative rings, gold gradient button, glow pulse
- Custom animated gold cursor with trailing ring
- Side progress dots for navigation
- Glassmorphism bottom navigation bar (Home, Explore, Plan Date, Profile)
- Fully responsive (mobile-first)
- Cormorant Garamond + Cinzel + Montserrat typography
- All animations via CSS keyframes + Tailwind config

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
date-curator/
├── app/
│   ├── globals.css          # All custom CSS, animations, variables
│   ├── layout.tsx           # Root layout with Google Fonts (Cormorant, Cinzel, Montserrat)
│   └── page.tsx             # Main page — composes all sections
│
├── components/
│   ├── CustomCursor.tsx     # Gold animated cursor + trailing ring
│   ├── ProgressDots.tsx     # Fixed side dots — scroll position indicator
│   ├── BottomNav.tsx        # Glassmorphism bottom navigation bar
│   ├── HeroSection.tsx      # Section 1 — Logo, headline, CTA, scroll indicator
│   ├── StorySection.tsx     # Section 2 — Rotating rings, philosophy, stats
│   ├── ExploreSection.tsx   # Section 3 — Experience cards + category grid
│   ├── ExperienceCard.tsx   # Individual experience card component
│   └── CTASection.tsx       # Section 4 — Plan Your Date full-screen CTA
│
├── lib/
│   └── experiences.ts       # All experience & category data
│
├── public/
│   └── logo.png             # The Date Curator logo
│
├── tailwind.config.ts       # Custom colors, fonts, animations, keyframes
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#C9A84C` | Primary accent |
| `--gold-light` | `#E8C96A` | Highlights |
| `--gold-pale` | `#F5E6B8` | Subtle text |
| `--gold-dark` | `#8B6914` | Deep accent |
| `--obsidian` | `#0A0A0A` | Primary background |
| `--charcoal` | `#111111` | Secondary background |
| `--dark-card` | `#1C1C1C` | Card surfaces |
| `--cream` | `#F8F3E8` | Primary text |

### Typography
- **Cormorant Garamond** — Headings, display, italic elegance
- **Cinzel** — Labels, badges, uppercase details
- **Montserrat** — Body copy, UI elements

### Key Animations
- `shimmer` — Gold gradient text sweep
- `float` — Logo gentle bob
- `rotateSlow` — Decorative rings rotation
- `heartbeat` — Heart icon pulse
- `glowPulse` — CTA button radiance
- `cardReveal` — Cards entrance animation
- `orbFloat1/2` — Background orb drift

---

## 🔧 Customisation

### Add a new experience
Edit `lib/experiences.ts` and add an object to the `experiences` array:

```ts
{
  id: "9",
  category: "Your Category",
  title: "Experience Name",
  description: "...",
  price: "50,000",
  currency: "KSH",
  badge: "New",              // optional
  bgGradient: "linear-gradient(135deg, #0a0a1a, #1a1a3d)",
  emoji: "🌙",
  categoryKey: "Rooftop",   // must match a tab key
}
```

### Add a new category tab
Add the key to the `TAB_KEYS` array in `components/ExploreSection.tsx` and add a matching entry to the `categories` array in `lib/experiences.ts`.

---

## 🌐 Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com).

---

## 📦 Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.2.0 | Framework |
| react | 18 | UI library |
| typescript | 5 | Type safety |
| tailwindcss | 3.4 | Utility CSS |
| lucide-react | 0.378 | Icons |
| framer-motion | 11 | Animations (ready to use) |
| clsx | 2.1 | Class utilities |

---

*The Date Curator — by Luxury Proposal. Curating extraordinary moments.*
