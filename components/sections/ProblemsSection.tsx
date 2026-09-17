"use client";

import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

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
    <section
      id="problem"
      className="py-16 sm:py-20 pb-28 sm:pb-20 scroll-mt-20 sm:scroll-mt-24 bg-[var(--coach-bg)] border-b border-[var(--coach-border)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto pt-2 sm:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-text-secondary)] uppercase">
              {PROBLEMS_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--coach-text-primary)] tracking-tight">
            {PROBLEMS_DATA.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--coach-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            {PROBLEMS_DATA.subheading}
          </p>
        </div>

        {/* ================================================================
            DESKTOP VIEW (md:): Clean 2-Column Comparative Table
            ================================================================ */}
        <div className="hidden md:block border-y border-[var(--coach-border)] divide-y divide-[var(--coach-border)]">
          {/* Table Column Headers */}
          <div className="grid grid-cols-2 divide-x divide-[var(--coach-border)] py-4 text-xs font-bold uppercase tracking-wider">
            {/* Left Column Header: RED */}
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 pr-6">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <span>{PROBLEMS_DATA.leftColumnTitle}</span>
            </div>

            {/* Right Column Header: GREEN */}
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 pl-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>{PROBLEMS_DATA.rightColumnTitle}</span>
            </div>
          </div>

          {/* Comparison Rows */}
          {PROBLEMS_DATA.comparisons.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 divide-x divide-[var(--coach-border)] py-5 items-start text-sm transition-colors hover:bg-[var(--coach-surface)]/40"
            >
              {/* Left Cell: Problem (Red Indicator & Muted Text) */}
              <div className="text-[var(--coach-text-secondary)] flex items-start gap-3 pr-6">
                <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold select-none">
                  ✕
                </span>
                <span className="leading-relaxed">{item.problem}</span>
              </div>

              {/* Right Cell: Solution (Green Checkmark & Primary Text) */}
              <div className="text-[var(--coach-text-primary)] font-medium flex items-start gap-3 pl-6">
                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold select-none">
                  ✓
                </span>
                <span className="leading-relaxed">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================================
            MOBILE VIEW (< md): High-Impact Transformation Shift Cards
            ================================================================ */}
        <div className="md:hidden space-y-4">
          {PROBLEMS_DATA.comparisons.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[var(--coach-border)] bg-[var(--coach-surface)] p-4 sm:p-5 space-y-3 shadow-none"
            >
              {/* 1. The Bottleneck (Red Accent) */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                  <span className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✕
                  </span>
                  <span>The Bottleneck</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--coach-text-secondary)] leading-relaxed pl-6">
                  {item.problem}
                </p>
              </div>

              {/* Transition Divider / Shift Indicator */}
              <div className="relative flex items-center py-1">
                <div className="flex-grow border-t border-[var(--coach-border)]" />
                <span className="flex-shrink mx-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--coach-accent)] bg-[var(--coach-bg)] px-2.5 py-0.5 rounded border border-[var(--coach-border)] inline-flex items-center gap-1">
                  Shift <ArrowDown className="w-2.5 h-2.5" />
                </span>
                <div className="flex-grow border-t border-[var(--coach-border)]" />
              </div>

              {/* 2. Autonomous Scale (Green Accent) */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✓
                  </span>
                  <span>Autonomous Scale</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[var(--coach-text-primary)] leading-relaxed pl-6">
                  {item.solution}
                </p>
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
