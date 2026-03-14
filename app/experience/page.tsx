"use client";

import ExploreSection from "@/components/ExploreSection";
import TopNavBar from "@/components/TopNavBar";
import { useState } from "react";



export default function PlanPage() {
  const [eventType, setEventType] = useState("");
  const [customEvent, setCustomEvent] = useState("");

  return (
    <div
      style={{
        background: "var(--obsidian)",
        minHeight: "100vh",
      }}
    >
      
      <div className="max-w-[1200px] mx-auto mt-32 px-6 md:px-16 pt-32 pb-32">


<ExploreSection/>
      </div>

      {/* Styling */}
      <style jsx>{`
        .form-label {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 8px;
          color: var(--text-muted);
          font-family: var(--font-montserrat);
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          color: var(--cream);
          font-family: var(--font-montserrat);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          border-color: var(--gold);
          background: rgba(201,168,76,0.05);
        }

        textarea.form-input {
          resize: none;
        }

        .luxury-btn {
          padding: 14px 28px;
          border: 1px solid var(--gold);
          color: var(--gold);
          font-family: var(--font-cinzel);
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          background: transparent;
          transition: all 0.3s ease;
        }

        .luxury-btn:hover {
          background: rgba(201,168,76,0.08);
        }
      `}</style>
    </div>
  );
}