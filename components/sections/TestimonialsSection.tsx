"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE TESTIMONIALS CONSTANTS
   ========================================================================== */
export const TESTIMONIALS_DATA = {
  eyebrow: "Client Endorsements",
  heading: "Direct Feedback From 7 & 8-Figure Founders",
  subheading:
    "Unfiltered reviews from executives who have completed Marcus Vance advisory engagements.",
  reviews: [
    {
      author: "Julian Drake",
      role: "CEO & Co-Founder, Omnia Cloud Software",
      tier: "$14M ARR",
      quote:
        "Marcus diagnosed our gross margin leak in 45 minutes. Over the next 9 months, he helped us restructure our sales leadership. Our EBITDA expanded from 12% to 28% with zero executive churn.",
    },
    {
      author: "Sarah Lin",
      role: "Managing Partner, Apex Capital Solutions",
      tier: "$18M Portfolio",
      quote:
        "Before working with Marcus, I was approving every client agreement and working 70+ hour weeks. His framework empowered my directors to execute autonomously. I reclaimed 25 hours a week.",
    },
    {
      author: "David Thorne",
      role: "Founder & CEO, Hyperion Freight",
      tier: "$22M Enterprise",
      quote:
        "The ROI of our advisory engagement was easily 12x in year one. Marcus doesn't teach theoretical concepts—he brings battle-hardened operating frameworks that directly shaped our PE recapitalization.",
    },
    {
      author: "Elena Rostova",
      role: "Co-Founder & President, Solis HealthTech",
      tier: "$9.5M ARR",
      quote:
        "If you are stuck in the founder trap and feel like you're the bottleneck, stop hesitating. Marcus combines ruthless operational discipline with high-level commercial acumen.",
    },
  ],
  ctaText: "Join Our Founder Roster",
};

interface TestimonialsSectionProps {
  onOpenModal?: () => void;
}

export default function TestimonialsSection({ onOpenModal }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
              {TESTIMONIALS_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--coach-text-primary)] tracking-tight">
            {TESTIMONIALS_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
            {TESTIMONIALS_DATA.subheading}
          </p>
        </div>

        {/* Minimal Editorial Quote Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {TESTIMONIALS_DATA.reviews.map((rev, idx) => (
            <div key={idx} className="space-y-4 border-l-2 border-[var(--coach-border)] pl-6">
              <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed italic">
                &ldquo;{rev.quote}&rdquo;
              </p>

              <div>
                <h3 className="text-sm font-bold text-[var(--coach-text-primary)]">{rev.author}</h3>
                <div className="text-xs text-[var(--coach-text-muted)] mt-0.5">
                  {rev.role} • <span className="text-[var(--coach-accent)] font-medium">{rev.tier}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenModal}
            className="btn-accent px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 tap-effect cursor-pointer"
          >
            <span>{TESTIMONIALS_DATA.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
