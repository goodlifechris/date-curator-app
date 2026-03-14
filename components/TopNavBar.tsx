
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ExternalLink, Heart } from "lucide-react";
import Image from "next/image";

interface TopNavBarProps {
  logoText?: string;
  logoImage?: string;
  links?: Array<{ label: string; href: string }>;
  location?: string;
  phone?: string;
  onLocationClick?: () => void;
  onPhoneClick?: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  logoText = "The Date Curator",
  logoImage,
  links = [
    { label: "Home", href: "#home" },
    { label: "Experiences", href: "#section-2" },
    { label: "Curate My Date", href: "#explore" },
    { label: "Membership", href: "#explore" },
    { label: "Gallery", href: "#explore" },
    { label: "Contact Us", href: "#explore" },
  ],
  location = "Nairobi, Kenya",
  phone = "+254 722 123 456",
  onLocationClick,
  onPhoneClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1817] border-b border-gray-700/30 shadow-2xl overflow-hidden"
    >
      {/* Animated gradient underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-red-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />

      <div className="h-full w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full w-full gap-4">
          {/* Logo - FAR LEFT */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {logoImage ? (
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center h-full"
              >
                <Image
                  src={logoImage}
                  alt="Logo"
                  width={280}
                  height={200}
                  priority
                  className="w-[50vw] md:w-[220px] h-auto object-contain drop-shadow-lg"
                  style={{
                    animation:
                      "scaleIn 1.2s cubic-bezier(0.16,1,0.3,1) forwards, float 6s ease-in-out 1.5s",
                  }}
                />
              </motion.div>
            ) : (
              <>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br rounded-lg shadow-2xl h-full md:h-auto flex items-center justify-center flex-shrink-0"
                >
                  <Image
                    src="/logo.png"
                    alt="The Date Curator — By Luxury Proposal"
                    width={100}
                    height={100}
                    priority
                    className="w-[80px] md:w-[100px] h-auto drop-shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  animate={{
                    opacity: isScrolled ? 0 : 1,
                    scale: isScrolled ? 0 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.span
                    className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent flex-shrink-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontStyle: "italic",
              opacity: 0,
              animation: "fadeUp 1s ease 1s forwards",
              textShadow:
                "0 4px 20px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.4)",
            }}
          >
            <Heart />
            <span
              className="gold-text"
              style={{ textShadow: "0 2px 8px rgba(201,168,76,0.3)" }}
            >
              {logoText}
            </span>
            <p
              className="uppercase tracking-[0.35em] mb-6 text-sm md:text-base"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                color: "var(--gold-pale)",
                opacity: 0,
                animation: "fadeUp 1s ease 0.8s forwards",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              Curated Moments. Unforgettable Dates.
            </p>
          </h1>
</motion.span>
          {/* Spacer - Pushes content to sides */}
          <div className="flex-1" />

                </motion.div>
              </>
            )}
            
          </motion.div>

          {/* Spacer - Pushes content to sides */}
          <div className="flex-1" />

          {/* Contact Info - Center-Right (Hidden when scrolled on mobile) */}

          {/* Desktop Navigation Links - FAR RIGHT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-2 flex-shrink-0"
          >
            {links.map((link, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => {
                  setHoveredLink(link.label);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                }}
                onClick={() => setActiveLink(link.label)}
              >
                <motion.a
                  href={link.href}
                  className="relative px-6 py-3 text-gray-300 font-bold transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  animate={{
                    fontSize: isScrolled ? "0.875rem" : "1rem",
                    padding: isScrolled ? "0.5rem 1rem" : "0.75rem 1.5rem",
                  }}
                >
                  {link.label}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={
                      hoveredLink === link.label || activeLink === link.label
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0, rotate: -180 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.a>

                {/* Animated slider background - illuminated on hover/focus */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-red-500/20 border border-amber-500/30"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={
                    hoveredLink === link.label || activeLink === link.label
                      ? { scaleX: 1, originX: 0 }
                      : { scaleX: 0, originX: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Glowing effect on active */}
                <motion.div
                  className="absolute inset-0 -z-20 rounded-lg bg-gradient-to-r from-amber-500 via-orange-400 to-red-500 blur-xl"
                  initial={{ opacity: 0 }}
                  animate={
                    activeLink === link.label
                      ? { opacity: 0.6 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />

                {/* Text color change on hover/focus */}
                <motion.div
                  initial={{ color: "#d1d5db" }}
                  animate={
                    hoveredLink === link.label || activeLink === link.label
                      ? { color: "#fca5a5" }
                      : { color: "#d1d5db" }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 px-6 py-3 flex items-center gap-2 whitespace-nowrap font-bold pointer-events-none"
                >
                  {link.label}
                </motion.div>

                {/* Bottom highlight bar */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-red-500 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={
                    hoveredLink === link.label || activeLink === link.label
                      ? { scaleX: 1, originX: 0 }
                      : { scaleX: 0, originX: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-orange-500/20 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 90, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-amber-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden overflow-hidden bg-gradient-to-b from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-lg mt-2 mb-4 border border-orange-500/30"
            >
              <div className="px-4 py-4 space-y-3">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={mobileLinkVariants}
                    className="relative group"
                  >
                    <motion.a
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.label);
                        setMobileMenuOpen(false);
                      }}
                      className="block px-4 py-3 rounded-lg text-gray-300 hover:text-amber-300 transition-colors duration-200 font-bold relative"
                    >
                      {/* Mobile slider background */}
                      <motion.div
                        className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-red-500/20 border border-orange-500/30"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={
                          activeLink === link.label
                            ? { scaleX: 1 }
                            : { scaleX: 0 }
                        }
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                      {link.label}
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative glow effect */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/5 via-orange-400/5 to-red-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default TopNavBar;
