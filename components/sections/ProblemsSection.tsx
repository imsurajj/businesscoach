"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE PROBLEMS SECTION CONSTANTS
   ========================================================================== */
export const PROBLEMS_DATA = {
  eyebrow: "The Scaling Shift",
  heading: "Why More Effort Won't Get You Past $10M",
  subheading:
    "The relentless hustle that got you to 7 figures is the exact bottleneck keeping you from 8 figures. Scaling requires moving from personal execution to institutional architecture.",
  leftColumnTitle: "The Founder Bottleneck (Current State)",
  rightColumnTitle: "Autonomous Enterprise (Transformed State)",
  comparisons: [
    {
      problem: "Every critical decision, escalation, and hire requires CEO presence.",
      solution: "Empowered leadership team with clear ownership of unit KPIs.",
    },
    {
      problem: "Top-line revenue expands while net EBITDA margins steadily erode.",
      solution: "Engineered operating leverage that protects margins as volume grows.",
    },
    {
      problem: "Relying on hero individual effort and 70-hour work weeks.",
      solution: "Codified playbooks and operating rhythms that run automatically.",
    },
    {
      problem: "Daily tactical firefighting suffocates high-level capital strategy.",
      solution: "Reclaiming 20+ hours per week for board-level growth and M&A.",
    },
  ],
  ctaText: "Break Through Your Ceiling",
};

interface ProblemsSectionProps {
  onOpenModal?: () => void;
}

export default function ProblemsSection({ onOpenModal }: ProblemsSectionProps) {
  return (
    <section id="problem" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-text-secondary)] uppercase">
              {PROBLEMS_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--coach-text-primary)] tracking-tight">
            {PROBLEMS_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
            {PROBLEMS_DATA.subheading}
          </p>
        </div>

        {/* Minimal Comparison Table / List */}
        <div className="divide-y divide-[var(--coach-border)] border-y border-[var(--coach-border)]">
          {/* Column Titles */}
          <div className="grid grid-cols-1 md:grid-cols-2 py-4 text-xs font-bold uppercase tracking-wider">
            <div className="text-[#ef4444] pb-2 md:pb-0">
              {PROBLEMS_DATA.leftColumnTitle}
            </div>
            <div className="text-[var(--coach-accent)] md:pl-8">
              {PROBLEMS_DATA.rightColumnTitle}
            </div>
          </div>

          {/* Comparison Rows */}
          {PROBLEMS_DATA.comparisons.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 py-5 gap-4 md:gap-8 items-start text-sm"
            >
              <div className="text-[var(--coach-text-secondary)] flex items-start gap-2.5">
                <span className="text-[#ef4444] font-semibold text-xs mt-0.5">•</span>
                <span>{item.problem}</span>
              </div>
              <div className="text-[var(--coach-text-primary)] md:pl-8 flex items-start gap-2.5">
                <span className="text-[var(--coach-accent)] font-semibold text-xs mt-0.5">✓</span>
                <span>{item.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenModal}
            className="btn-accent px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 tap-effect cursor-pointer"
          >
            <span>{PROBLEMS_DATA.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
