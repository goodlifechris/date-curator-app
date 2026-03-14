"use client";

import { useRef } from "react";
import CustomCursor from "@/components/CustomCursor";
import ProgressDots from "@/components/ProgressDots";
import BottomNav from "@/components/BottomNav";
import StorySection from "@/components/StorySection";
import ExploreSection from "@/components/ExploreSection";
import CTASection from "@/components/CTASection";
import HeroSectionWithVideos from "@/components/HeroSectionWithVideos";
import TopNavBar from "@/components/TopNavBar";
import HeroSectionWithVideoAndButtons from "@/components/HeroSectionWithVideoAndButton";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
 

      <div
        ref={containerRef}
        id="scroll-container"
        className=""
      >

        <HeroSectionWithVideoAndButtons containerRef={containerRef} />
    
      </div>


    </>
  );
}
