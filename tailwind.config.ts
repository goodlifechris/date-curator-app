import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96A",
          pale: "#F5E6B8",
          dark: "#8B6914",
          muted: "rgba(201,168,76,0.15)",
        },
        obsidian: "#0A0A0A",
        charcoal: "#111111",
        "dark-surface": "#161616",
        "dark-card": "#1C1C1C",
        "dark-border": "#2A2A2A",
        cream: "#F8F3E8",
        "text-muted": "#888888",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        "fade-up": "fadeUp 1s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "scale-in": "scaleIn 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "rotate-slow": "rotateSlow 30s linear infinite",
        "rotate-slow-r": "rotateSlow 30s linear infinite reverse",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        heartbeat: "heartbeat 2s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
        "orb-float-1": "orbFloat1 12s ease-in-out infinite",
        "orb-float-2": "orbFloat2 15s ease-in-out infinite",
        "gold-pulse": "goldPulse 4s ease-in-out infinite",
        "card-reveal": "cardReveal 0.8s ease both",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,76,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.08)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.2)" },
          "70%": { transform: "scale(1)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0) translateX(-50%)", opacity: "0.6" },
          "50%": { transform: "translateY(8px) translateX(-50%)", opacity: "1" },
        },
        orbFloat1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(30px, -20px)" },
          "66%": { transform: "translate(-20px, 15px)" },
        },
        orbFloat2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(-25px, 20px)" },
          "66%": { transform: "translate(15px, -25px)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        cardReveal: {
          from: { opacity: "0", transform: "translateY(30px) scale(0.96)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      backgroundSize: {
        "200": "200% auto",
      },
    },
  },
  plugins: [],
};

export default config;
