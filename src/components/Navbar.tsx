"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { text: "Home", href: "/" },
  { text: "Projects", href: "/projects" },
  { text: "Contributors", href: "/contributors" },
  { text: "About", href: "/about" },
];

const THEME_EVENT = "sylven:themechange";

// The theme lives on <html class="light"> (set by an inline script before first
// paint), so the DOM is the source of truth and React just subscribes to it.
function subscribeTheme(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}
const getIsLight = () => document.documentElement.classList.contains("light");
const getServerIsLight = () => false;

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  // The menu counts as open only for the route it was opened on, so navigating closes it.
  const isMenuOpen = menuPath === pathname;
  const isLight = useSyncExternalStore(subscribeTheme, getIsLight, getServerIsLight);

  useEffect(() => {
    if (!isMenuOpen) return;
    const close = () => setMenuPath(null);
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const next = !getIsLight();
    // Suppress transitions for a frame pair so dozens of blurred cards don't
    // all cross-fade at once (see .theme-switching in globals.css).
    document.body.classList.add("theme-switching");
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
    window.dispatchEvent(new Event(THEME_EVENT));
    requestAnimationFrame(() =>
      requestAnimationFrame(() => document.body.classList.remove("theme-switching"))
    );
  };

  const linkClass = (active: boolean) =>
    `rounded-full font-medium transition-colors duration-200 ${
      active
        ? "bg-[var(--active-bg)] text-[var(--heading)]"
        : "text-[var(--subtitle)] hover:text-[var(--heading)] hover:bg-[var(--hover-bg)]"
    }`;

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="fixed left-0 right-0 h-[64px] md:h-[72px] flex justify-center top-2 md:top-4 z-50 px-4 md:px-16"
    >
      <div className="mx-auto w-full max-w-7xl h-full rounded-2xl md:rounded-full backdrop-blur-lg bg-[var(--nav-bg)] border border-[var(--nav-border)] shadow-[var(--shadow-sm)] flex items-center justify-between pl-4 pr-3 md:pl-6 md:pr-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg md:text-xl font-bold tracking-tight no-underline text-[var(--heading)]"
        >
          <span className="relative w-8 h-8 md:w-9 md:h-9 shrink-0">
            <Image
              src="/logo-96.webp"
              alt=""
              fill
              sizes="36px"
              className="object-contain"
              priority
              unoptimized
            />
          </span>
          Sylven OS
        </Link>

        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block px-4 py-2 text-[15px] ${linkClass(active)}`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
            className="grid place-items-center w-11 h-11 rounded-full border border-[var(--card-border)] text-[var(--heading)] hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)] transition-colors"
          >
            {isLight ? <Moon size={18} aria-hidden /> : <Sun size={18} aria-hidden />}
          </button>

          <button
            type="button"
            className="md:hidden grid place-items-center w-11 h-11 rounded-full border border-[var(--card-border)] text-[var(--heading)] hover:bg-[var(--hover-bg)] transition-colors"
            onClick={() => setMenuPath(isMenuOpen ? null : pathname)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-[72px] left-4 right-4 rounded-2xl backdrop-blur-xl bg-[var(--nav-bg)] border border-[var(--nav-border)] p-2 flex flex-col gap-1 shadow-[var(--shadow-lg)] md:hidden"
          >
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-3.5 rounded-xl ${linkClass(active)}`}
                >
                  {link.text}
                </Link>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
