"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Heart } from "lucide-react";
import Image from "next/image";

interface TopNavBarProps {
  logoText?: string;
  logoImage?: string;
  links?: Array<{ label: string; href: string }>;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  logoText = "The Date Curator",
  logoImage = "/logo.png",
  links = [
    { label: "Home", href: "/" },
    { label: "Experiences", href: "#section-2" },
    { label: "Curate My Date", href: "/plan" },
    { label: "Concierge", href: "/membership" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string | null>("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a1817] shadow-xl border-b border-gray-700/40"
          : "bg-transparent"
      }`}
    >
      {/* Gradient underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-black w-full bg-gradient-to-r from-amber-500 via-orange-400 to-red-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      <div className="w-full px-0 md:px-8 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center  cursor-pointer"
        >
          <Image
            src={logoImage}
            alt={logoText}
            width={200}
            height={60}
            priority
            className="w-[80px] md:w-[160px] lg:w-[200px] h-auto pb-2 object-contain"
          />
        </motion.div>
<motion.div
  className="flex flex-col items-start pl-5"
  animate={{
    opacity: isScrolled ? 0.8 : 1,
    scale: isScrolled ? 0.95 : 1,
  }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  {/* Brand name – Cormorant, light weight, responsive sizes */}
  <motion.span
    className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic leading-none bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {logoText}
  </motion.span>

  {/* Tagline – smaller, uppercase, light italic */}
  <motion.p
    className="font-cormorant text-[0.5rem] sm:text-xs md:text-sm font-light italic uppercase tracking-[0.2em] text-amber-200/80 mt-0.5 sm:mt-1"
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
  >
    Curated Moments. Unforgettable Dates.
  </motion.p>
</motion.div>
        {/* DESKTOP LINKS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-2"
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <motion.a
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className="px-5 py-2 text-gray-300 font-semibold flex items-center gap-2 relative"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}

                {(hoveredLink === link.label ||
                  activeLink === link.label) && (
                  <ExternalLink className="w-4 h-4 text-orange-400" />
                )}
              </motion.a>

              {/* Hover background */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-red-500/20 border border-amber-500/20"
                initial={{ scaleX: 0 }}
                animate={
                  hoveredLink === link.label ||
                  activeLink === link.label
                    ? { scaleX: 1 }
                    : { scaleX: 0 }
                }
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <X className="w-7 h-7 text-amber-400" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <Menu className="w-7 h-7 text-amber-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#1a1817] border-t border-gray-700"
          >
            <div className="flex flex-col">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className="px-6 py-4 text-gray-200 text-lg border-b border-gray-700 hover:text-amber-400"
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default TopNavBar;