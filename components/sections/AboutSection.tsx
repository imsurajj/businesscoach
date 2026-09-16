"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE ABOUT SECTION CONSTANTS
   ========================================================================== */
export const ABOUT_DATA = {
  eyebrow: "Advisory Leadership",
  heading: "Built For Founders Who Refuse Fluffy Theory",
  role: "Marcus Vance • Former 2x Founder & Operating Advisor",
  bioParagraph1:
    "Over 16 years, I built and exited two enterprise service firms, worked alongside private equity operating partners, and personally advised over 450 CEOs through their critical scale bottlenecks.",
  bioParagraph2:
    "My advisory work cuts through generic mindset slogans. It is anchored strictly in organizational governance, unit economics, executive leadership autonomy, and high-margin commercial architecture.",
  keyCredentials: [
    { title: "2x Bootstrapped Exits", desc: "Scaled to $24M ARR and exited to institutional private equity." },
    { title: "PE Portfolio Advisor", desc: "Operational guidance for 30+ mid-market scale-ups." },
    { title: "Best-Selling Author", desc: "'The Autonomous Enterprise' (WSJ Best-seller)." },
  ],
  principles: [
    { title: "Operational Rigor", desc: "Focus strictly on contribution margin and sprint cadence." },
    { title: "Direct Candor", desc: "Zero yes-men. Objective strategic truth to de-risk decisions." },
    { title: "Enterprise Multiple", desc: "Architecting systems that maximize valuation multiple." },
  ],
  ctaText: "Request Introduction",
};

interface AboutSectionProps {
  onOpenModal?: () => void;
}

export default function AboutSection({ onOpenModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
              {ABOUT_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--coach-text-primary)] tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--coach-accent)] font-medium">
            {ABOUT_DATA.role}
          </p>
        </div>

        {/* Minimal Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
            <p>{ABOUT_DATA.bioParagraph1}</p>
            <p>{ABOUT_DATA.bioParagraph2}</p>

            <div className="pt-4 border-t border-[var(--coach-border)] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--coach-text-primary)]">
                Core Operating Principles:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {ABOUT_DATA.principles.map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-xs font-bold text-[var(--coach-accent)] block">
                      {p.title}
                    </span>
                    <p className="text-xs text-[var(--coach-text-muted)] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="btn-accent px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 tap-effect cursor-pointer"
              >
                <span>{ABOUT_DATA.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Track Record List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--coach-text-primary)]">
              Verified Track Record
            </h3>
            <div className="divide-y divide-[var(--coach-border)] border-y border-[var(--coach-border)]">
              {ABOUT_DATA.keyCredentials.map((cred, idx) => (
                <div key={idx} className="py-3.5 space-y-0.5">
                  <div className="text-xs sm:text-sm font-semibold text-[var(--coach-text-primary)]">
                    {cred.title}
                  </div>
                  <div className="text-xs text-[var(--coach-text-secondary)]">{cred.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--coach-text-muted)] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
              <span>Direct 1:1 advisory only. No junior substitutes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
