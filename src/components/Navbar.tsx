"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Read theme on mount to prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsLight(savedTheme === "light");
    } else {
      setIsLight(window.matchMedia("(prefers-color-scheme: light)").matches);
    }
  }, []);

  // Handle theme body class
  useEffect(() => {
    if (!mounted) return;
    const root = document.body;
    root.classList.toggle("light", isLight);
  }, [isLight, mounted]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle click outside and Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextState = !isLight;
    setIsLight(nextState);
    localStorage.setItem("theme", nextState ? "light" : "dark");
  };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Contributors", href: "/contributors" },
    { text: "About Us", href: "/about" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 h-[72px] flex justify-center top-2 md:top-4 z-50 px-4 md:px-16"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[24px] md:rounded-[36px] h-full backdrop-blur-lg bg-[#050f1f]/80 border border-white/5 shadow-lg flex items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg md:text-xl font-extrabold tracking-wide cursor-pointer no-underline text-white z-50"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/IMG_20260628_143818.png"
              alt="Sylven OS Logo"
              fill
              sizes="(max-width: 768px) 32px, 40px"
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <span>Sylven OS</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-[35px] text-sm md:text-base list-none m-0 p-0 h-full">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <li key={i} className="relative flex items-center h-full">
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-white text-[#0a1a33]"
                      : "text-slate-300 hover:text-white hover:bg-white/25"
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions (Theme Toggle + Mobile Menu Toggle) */}
        <div className="flex items-center gap-3 md:gap-0 z-50">
          {/* Theme Toggle Controller */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual layout mode"
            className="w-[56px] h-[30px] md:w-[60px] md:h-[32px] bg-slate-950 border border-white/20 hover:border-white/40 transition-colors rounded-[50px] relative cursor-pointer overflow-hidden p-1 flex items-center justify-between gap-1 md:ml-6"
          >
            <span className="text-[10px] pl-1 select-none">🌙</span>
            <span className="text-[10px] pr-1 select-none">☀️</span>

            <motion.div
              className="absolute w-[22px] h-[22px] md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center shadow-md"
              layout
              animate={{
                left: mounted && isLight ? "calc(100% - 26px)" : "4px",
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {mounted ? (
                isLight ? (
                  <Sun size={12} className="text-amber-500 fill-amber-500" />
                ) : (
                  <Moon size={12} className="text-slate-950 fill-slate-950" />
                )
              ) : null}
            </motion.div>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[85px] left-4 right-4 rounded-[24px] backdrop-blur-xl bg-[#050f1f]/95 border border-white/10 p-4 flex flex-col gap-2 shadow-2xl md:hidden z-40"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`px-5 py-3.5 rounded-xl transition-all duration-300 font-medium flex items-center ${
                    isActive
                      ? "bg-white text-[#0a1a33]"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.text}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}