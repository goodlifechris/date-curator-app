"use client";

import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences, categories } from "@/lib/experiences";

const ALL_TAB = "All";
const TAB_KEYS = ["Simple Romantic Experience", "Signature Experiences", "Premium Experiences"];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState(ALL_TAB);
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filtered = experiences.filter((exp) => {
    if (activeTab !== ALL_TAB && exp.categoryKey !== activeTab) return false;
    if (activeCat && exp.categoryKey !== activeCat) return false;
    return true;
  });

  return (
    <div
      id="section-2"
      className="scroll-snap-section"
      style={{
        background: "var(--obsidian)",
        height: "auto",
        minHeight: "100vh",
        scrollSnapAlign: "start",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-20 pb-12">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.1,
              }}
            >
              Our <span className="gold-text">Experiences</span>
            </h2>
            <p
              className="mt-2"
              style={{
                fontSize: "0.7rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Handcrafted moments that last a lifetime
            </p>
          </div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(248,243,232,0.4)",
            }}
          >
            Every detail, perfectly placed
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full mb-14 overflow-hidden rounded-lg" 
          style={{
            aspectRatio: "16/9",
            border: "1px solid var(--dark-border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
          }}
        >
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/path-to-video-poster.jpg" // Add your poster image path
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Optional overlay text */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6))"
            }}
          >
            <p 
              className="text-center px-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontStyle: "italic",
                color: "var(--cream)",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                marginTop: "auto",
                paddingBottom: "2rem"
              }}
            >
              Watch the magic unfold
            </p>
          </div>
        </div>

        {/* Category Tabs with equal width */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {TAB_KEYS.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setActiveCat(null); }}
              className="cat-tab px-4 py-3 transition-all duration-300 w-full text-center"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: `1px solid ${activeTab === tab ? "var(--gold)" : "var(--dark-border)"}`,
                background: activeTab === tab ? "rgba(201,168,76,0.06)" : "transparent",
                color: activeTab === tab ? "var(--gold)" : "var(--text-muted)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filtered.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} delay={i * 0.1} />
          ))}
          {filtered.length === 0 && (
            <div
              className="col-span-full text-center py-20"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontStyle: "italic" }}
            >
              No experiences in this category yet
            </div>
          )}
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-6 mb-14">
          <div style={{ height: 1, flex: 1, background: "var(--dark-border)" }} />
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            Browse by Category
          </span>
          <div style={{ height: 1, flex: 1, background: "var(--dark-border)" }} />
        </div>

        {/* Categories sub-heading */}
        <div className="mb-8">
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Find your perfect <span className="gold-text">kind of moment</span>
          </h3>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-24">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className="category-card text-center p-8"
              onClick={() => {
                setActiveCat(activeCat === cat.key ? null : cat.key);
                setActiveTab(ALL_TAB);
                const el = document.getElementById("section-2");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                border: `1px solid ${activeCat === cat.key ? "rgba(201,168,76,0.4)" : "var(--dark-border)"}`,
                background:
                  activeCat === cat.key
                    ? "rgba(201,168,76,0.05)"
                    : "var(--dark-surface)",
              }}
            >
              <div
                className="cat-icon-ring w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{
                  border: `1px solid ${activeCat === cat.key ? "var(--gold)" : "rgba(201,168,76,0.2)"}`,
                  background:
                    activeCat === cat.key ? "rgba(201,168,76,0.08)" : "transparent",
                }}
              >
                {cat.icon}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  marginBottom: 4,
                  color: activeCat === cat.key ? "var(--gold-light)" : "var(--cream)",
                }}
              >
                {cat.name}
              </p>
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                {cat.count} Experiences
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}