import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  /** Show a trailing arrow (diagonal for external links). Default true. */
  arrow?: boolean;
}

const BASE =
  "group inline-flex min-h-12 items-center whitespace-nowrap justify-center gap-2 rounded-xl px-6 text-[15px] font-semibold no-underline cursor-pointer transition-[background-color,border-color,box-shadow,color] duration-200";

const VARIANTS = {
  primary:
    "bg-[var(--btn-primary-bg)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--btn-primary-hover)] hover:shadow-[var(--glow-primary)]",
  secondary:
    "border border-[var(--hover-border)] bg-transparent text-[var(--heading)] hover:bg-[var(--hover-bg)] hover:border-[var(--accent)]",
};

/**
 * The one button style for navigation CTAs. It is a real <a>, so the whole
 * surface is clickable and keyboard/screen-reader users get link semantics.
 * 48px minimum height satisfies the 44px touch-target guideline.
 */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: ButtonLinkProps) {
  const external = /^https?:\/\//.test(href);
  const Icon = external ? ArrowUpRight : ArrowRight;

  return (
    <Link
      href={href}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      {arrow && (
        <Icon
          size={18}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
