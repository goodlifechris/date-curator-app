"use client";

import { useRef } from "react";
import CustomCursor from "@/components/CustomCursor";
import ProgressDots from "@/components/ProgressDots";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ExploreSection from "@/components/ExploreSection";
import CTASection from "@/components/CTASection";
import HeroSectionWithVideos from "@/components/HeroSectionWithVideos";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CustomCursor />
      <ProgressDots containerRef={containerRef} />

      <div
        ref={containerRef}
        id="scroll-container"
        className="scroll-snap-container"
      >

        <HeroSectionWithVideos containerRef={containerRef} />
        {/* Section 1 — Hero */}
        <HeroSection containerRef={containerRef} />

        {/* Section 2 — Story / About */}
        <StorySection />

        {/* Section 3 — Explore (not snap, full content) */}
        <ExploreSection />

        {/* Section 4 — Plan Your Date CTA */}
        <CTASection />
      </div>

      <BottomNav containerRef={containerRef} />
    </>
  );
}
