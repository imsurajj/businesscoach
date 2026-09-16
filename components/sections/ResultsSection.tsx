"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE RESULTS CONSTANTS
   ========================================================================== */
export const RESULTS_DATA = {
  eyebrow: "Audited Case Outcomes",
  heading: "Measurable Multiples. Real Performance.",
  subheading:
    "We don't measure success by feelings. We measure it by net EBITDA margin expansion and reclaimed founder bandwidth.",
  caseStudies: [
    {
      company: "Nexus Cloud Solutions",
      industry: "Enterprise B2B SaaS",
      metric: "$4.2M → $14.8M",
      metricLabel: "ARR Scaled",
      impact: "+252% ARR • 22 hrs/wk Reclaimed",
      summary:
        "Removed founder bottleneck in enterprise sales closing by restructuring the commercial engine into an autonomous pod model.",
    },
    {
      company: "Vanguard Global Freight",
      industry: "Tech-Enabled Logistics",
      metric: "11% → 27%",
      metricLabel: "Net EBITDA Expansion",
      impact: "+1600 bps Margin • 100% Exec Retention",
      summary:
        "Implemented standardized operating cadence, single-metric dashboards, and empowered executive leadership.",
    },
    {
      company: "Sterling Analytics",
      industry: "Institutional FinTech",
      metric: "$2.1M → $7.6M",
      metricLabel: "Productized ARR Scale",
      impact: "PE Buyout • < 1.2% Churn",
      summary:
        "Transformed custom consulting delivery into high-margin productized retainer tiers, paving the way for an institutional exit.",
    },
  ],
  disclaimer: "Audited client performance. Specific names protected under mutual NDA.",
  ctaText: "Explore What Your Business Can Achieve",
};

interface ResultsSectionProps {
  onOpenModal?: () => void;
}

export default function ResultsSection({ onOpenModal }: ResultsSectionProps) {
  return (
    <section id="results" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
              {RESULTS_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--coach-text-primary)] tracking-tight">
            {RESULTS_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
            {RESULTS_DATA.subheading}
          </p>
        </div>

        {/* Minimal 3-Column Case Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--coach-border)] border-y border-[var(--coach-border)] py-4">
          {RESULTS_DATA.caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="py-6 md:py-4 px-0 md:px-6 first:pl-0 last:pr-0 space-y-4"
            >
              <div>
                <span className="text-[10px] font-bold text-[var(--coach-text-muted)] uppercase tracking-wider block">
                  {cs.industry}
                </span>
                <h3 className="text-base font-bold text-[var(--coach-text-primary)]">{cs.company}</h3>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--coach-accent)]">
                  {cs.metric}
                </div>
                <div className="text-xs text-[var(--coach-text-secondary)] font-medium uppercase tracking-wide">
                  {cs.metricLabel}
                </div>
              </div>

              <p className="text-xs text-[var(--coach-text-secondary)] leading-relaxed">
                {cs.summary}
              </p>

              <div className="pt-2 text-[11px] font-semibold text-[var(--coach-success)]">
                ✓ {cs.impact}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer & CTA */}
        <div className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 text-xs text-[var(--coach-text-muted)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
            {RESULTS_DATA.disclaimer}
          </p>
          <div>
            <button
              onClick={onOpenModal}
              className="btn-accent px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 tap-effect cursor-pointer"
            >
              <span>{RESULTS_DATA.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
