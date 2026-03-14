// components/FloatingWhatsApp.tsx
"use client";

import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber?: string; // e.g., "254722123456" (without +)
  message?: string;     // optional pre-filled message
}

export default function FloatingWhatsApp({
  phoneNumber = "254722172759", // Default phone number (replace with your own)
  message = "Hello! I'd like to inquire about your dating experiences.",
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl group"
      style={{
        background: "var(--gold)",
        boxShadow: "0 8px 24px rgba(201,168,76,0.3)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle
        size={28}
        className="text-white transition-transform duration-300 group-hover:rotate-12"
        strokeWidth={1.5}
      />

      {/* Optional subtle pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ background: "var(--gold)" }}
      />
    </a>
  );
}