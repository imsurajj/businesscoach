"use client";

import React from "react";
import { ArrowUp, Mail, MapPin } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE FOOTER CONSTANTS
   ========================================================================== */
export const FOOTER_DATA = {
  brandName: "MARCUS VANCE",
  brandSubtitle: "EXECUTIVE ADVISORY & SCALE ARCHITECTURE",
  description:
    "Systematic operational architecture and private strategic advisory for founders, CEOs, and managing partners scaling to 8 figures and beyond.",
  offices: "New York • San Francisco • London",
  email: "advisory@marcusvance.com",
  navSections: [
    {
      title: "Strategic Advisory",
      links: [
        { label: "1:1 Executive Mentorship", href: "#programs" },
        { label: "90-Day Scale Accelerator", href: "#programs" },
        { label: "Corporate Team Offsites", href: "#programs" },
        { label: "4-Stage Scale Framework", href: "#framework" },
      ],
    },
    {
      title: "Proof & Credentials",
      links: [
        { label: "Audited Case Histories", href: "#results" },
        { label: "Executive Testimonials", href: "#testimonials" },
        { label: "About Marcus Vance", href: "#about" },
        { label: "Diagnostic Audit FAQ", href: "#faq" },
      ],
    },
    {
      title: "Engage",
      links: [
        { label: "Book Strategy Audit", href: "#booking" },
        { label: "Private Signal / WhatsApp", href: "#booking" },
        { label: "Client Portal Login", href: "#booking" },
        { label: "Bilateral NDA Protocol", href: "#booking" },
      ],
    },
  ],
  disclaimer:
    "Confidentiality is paramount. All client engagements are protected by mutual non-disclosure agreements. Case studies represent verified historical performance.",
  copyright: "© 2026 Marcus Vance Advisory LLC. All Rights Reserved.",
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--coach-bg-secondary)] border-t border-[var(--coach-border)] text-[var(--coach-text-secondary)]">
      {/* Top Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-lg font-bold tracking-wider text-[var(--coach-text-primary)] block">
                {FOOTER_DATA.brandName}
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[var(--coach-accent)] font-medium block mt-0.5">
                {FOOTER_DATA.brandSubtitle}
              </span>
            </div>

            <p className="text-xs text-[var(--coach-text-secondary)] leading-relaxed max-w-sm">
              {FOOTER_DATA.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-[var(--coach-text-primary)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
                <span>{FOOTER_DATA.offices}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
                <a
                  href={`mailto:${FOOTER_DATA.email}`}
                  className="hover:text-[var(--coach-accent)] transition-colors"
                >
                  {FOOTER_DATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Nav Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_DATA.navSections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--coach-text-primary)]">
                  {sec.title}
                </h4>
                <ul className="space-y-2">
                  {sec.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-xs text-[var(--coach-text-secondary)] hover:text-[var(--coach-text-primary)] transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[var(--coach-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[var(--coach-text-muted)] text-center sm:text-left space-y-1">
            <p>{FOOTER_DATA.copyright}</p>
            <p>{FOOTER_DATA.disclaimer}</p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)] text-[var(--coach-text-secondary)] hover:text-[var(--coach-text-primary)] hover:border-[var(--coach-accent)] transition-colors tap-effect cursor-pointer shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
