import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaDiscord, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { breadcrumbJsonLd, SOCIAL_LINKS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sylven OS team — email, Discord, GitHub, and social channels.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@sylvenos.com",
    href: "mailto:contact@sylvenos.com",
    description: "For partnership, security, or general inquiries.",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "Join the community server",
    href: SOCIAL_LINKS.discord,
    description: "The fastest way to reach maintainers and ask questions.",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/sylvenos",
    href: SOCIAL_LINKS.github,
    description: "Open an issue or discussion on any of our repositories.",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    value: "@sylvenos_",
    href: SOCIAL_LINKS.twitter,
    description: "Announcements and community updates.",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Sylven OS",
    href: SOCIAL_LINKS.linkedin,
    description: "Organization updates and partnership contact.",
  },
];

export default function ContactPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-24 px-6 md:px-[15%]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 font-mono text-xs">
          <Link href="/" className="text-[var(--disabled)] hover:text-[var(--primary)] transition-colors">
            ← BACK TO HOME
          </Link>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-[var(--heading)] tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-base text-[var(--subtitle)] leading-relaxed mb-12 max-w-xl">
          Sylven OS is a fully remote, community-run organization. Here&apos;s every way to reach us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="p-5 rounded-[var(--radius-md)] border border-[var(--card-border)] bg-[var(--card-bg)] flex items-start gap-4 transition-colors hover:border-[var(--primary)] hover:bg-[var(--card-hover-bg)]"
            >
              <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--glass)] border border-[var(--card-border)] flex items-center justify-center text-[var(--primary)] shrink-0">
                <channel.icon size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--heading)]">{channel.label}</div>
                <div className="text-sm text-[var(--primary)] font-mono mb-1">{channel.value}</div>
                <p className="text-xs text-[var(--subtitle)] leading-relaxed">{channel.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
