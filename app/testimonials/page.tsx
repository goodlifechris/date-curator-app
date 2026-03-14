"use client";

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
        <TopNavBar/>
      <div className="max-w-[1200px] mx-auto mt-32 px-6 md:px-16 pt-32 pb-32">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem,5vw,4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
            }}
          >
            Custom <span className="gold-text">Curated Date</span>
          </h1>

          <p
            className="mt-4"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              fontFamily: "var(--font-montserrat)",
            }}
          >
            Tell us your dream moment
          </p>

          <p
            className="mt-6 max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              color: "rgba(248,243,232,0.6)",
              fontSize: "1.1rem",
            }}
          >
            No two love stories are the same so why should your date be? Our team crafts fully bespoke romantic experiences designed around your love, your partner, and the moment you want to create. Show up, relax, and let us make the night unforgettable.
          </p>
        </div>

        {/* Form */}
        <form className="grid md:grid-cols-2 gap-10">

          {/* Left Column */}
          <div className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+254..."
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="form-label">What event are you planning?</label>
   <input
                type="text"
                className="form-input"
                placeholder="Anniversary, Birthday..."
              />

            </div>

            {/* Custom event */}
            {eventType === "Other" && (
              <div>
                <label className="form-label">Describe your event</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Romantic rooftop dinner..."
                  value={customEvent}
                  onChange={(e) => setCustomEvent(e.target.value)}
                />
              </div>
            )}

            {/* Location */}
            <div>
              <label className="form-label">Preferred Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="City, venue, or destination"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="form-label">Budget Range</label>
     <input
                type="text"
                className="form-input"
                placeholder="10,000KSH - 250,000KSH"
              />
         
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">

            <label className="form-label mb-3">
              Describe your vision for the date
            </label>

            <textarea
              rows={12}
              className="form-input flex-1"
              placeholder="Tell us the atmosphere, decorations, surprise elements, music, location, and anything that would make the moment unforgettable..."
            />

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 luxury-btn"
            >
              Submit Request
            </button>
          </div>
        </form>
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