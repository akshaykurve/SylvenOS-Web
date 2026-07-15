"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Globe, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants for smooth list-item reveals
  const itemVariants = {
    hover: { x: 5, color: "var(--text)", transition: { duration: 0.2 } },
  };

  return (
    <footer className="w-full border-t border-gray-500/15 bg-transparent text-[var(--muted)]">
      {/* Main Content Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Brand Pitch & Socials */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-extrabold text-[var(--text)] tracking-wide no-underline"
          >
            <div className="relative w-8 h-8">
              <Image
                src="/IMG_20260628_143818.png"
                alt="Sylven OS Logo"
                fill
                sizes="32px"
                className="object-contain"
                unoptimized
              />
            </div>
            <span>Sylven OS</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            A global, community-driven ecosystem empowering developers to learn,
            build, and scale meaningful open-source software together.
          </p>

          {/* Enhanced Interactive Social Row */}
          <div className="flex gap-3 mt-2">
            {/* Enhanced Interactive Social Row */}

            {[
              {
                icon: <FaGithub size={18} />,
                href: "https://github.com/sylvenos",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin size={18} />,
                href: "https://linkedin.com/company/sylvenos",
                label: "LinkedIn",
              },
              {
                icon: <FaXTwitter size={18} />,
                href: "https://x.com/sylvenos_",
                label: "Twitter",
              },
              {
                icon: <Mail size={18} />,
                href: "mailto:hello@sylvenos.org",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-[var(--glass)] border border-gray-500/15 flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Column 2: Ecosystem Links */}
        {/* Replace the Ecosystem, Resources, and Organization lists with this layout structure */}

        {/* Example for Ecosystem Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-[var(--text)] uppercase opacity-70">
            Ecosystem
          </h4>
          <ul className="flex flex-col gap-3 text-sm list-none p-0 m-0">
            {[
              { text: "Explore Projects", href: "#" },
              { text: "Showcase", href: "#" },
              { text: "Community Guidelines", href: "#" },
              { text: "Discussions", href: "#" },
            ].map((link, i) => (
              <li key={i}>
                {/* Next.js 16 style: No passHref, no nested <a> tags, absolute standard string vectors */}
                <Link
                  href={link.href}
                  className="no-underline text-[var(--muted)]"
                >
                  <motion.span
                    variants={itemVariants}
                    whileHover="hover"
                    className="inline-flex items-center gap-1 cursor-pointer"
                  >
                    {link.text}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Example for Resources Links (With Arrow Icon) */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-[var(--text)] uppercase opacity-70">
            Resources
          </h4>
          <ul className="flex flex-col gap-3 text-sm list-none p-0 m-0">
            {[
              { text: "Documentation", href: "#" },
              { text: "Contributing Guide", href: "#" },
              { text: "Brand Assets", href: "#" },
              { text: "Help & Support", href: "#" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="no-underline text-[var(--muted)]"
                >
                  <motion.span
                    variants={itemVariants}
                    whileHover="hover"
                    className="inline-flex items-center gap-1 cursor-pointer"
                  >
                    {link.text}{" "}
                    <ArrowUpRight size={12} className="opacity-40" />
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Example for Organization Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-[var(--text)] uppercase opacity-70">
            Organization
          </h4>
          <ul className="flex flex-col gap-3 text-sm list-none p-0 m-0">
            {[
              { text: "About Us", href: "#" },
              { text: "Our Contributors", href: "#" },
              { text: "Code of Conduct", href: "#" },
              { text: "Contact", href: "#" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="no-underline text-[var(--muted)]"
                >
                  <motion.span
                    variants={itemVariants}
                    whileHover="hover"
                    className="inline-flex items-center gap-1 cursor-pointer"
                  >
                    {link.text}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance Legalities */}
      <div className="w-full border-t border-gray-500/10 bg-[rgba(0,0,0,0.05)]">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {currentYear} Sylven OS • Built with</span>
            <Heart
              size={12}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            <span>To Learn. To Build. To Educate.</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-[var(--text)] transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-[var(--text)] transition-colors no-underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-[var(--text)] transition-colors no-underline"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
