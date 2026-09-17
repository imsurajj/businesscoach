"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE FRAMEWORK CONSTANTS (Content Strictly Preserved)
   ========================================================================== */
export const FRAMEWORK_DATA = {
  eyebrow: "Proven Methodology",
  heading: "The 4-Stage Autonomous Engine",
  subheading:
    "A systematic roadmap that transitions your company from individual founder hustle to an enduring, self-governing commercial machine.",
  stages: [
    {
      step: "01",
      industry: "Stage 01 Architecture",
      title: "Diagnostic & Bottleneck Audit",
      period: "Days 1–30",
      metricLabel: "Execution Cadence",
      description:
        "Forensic assessment of gross margin leaks, founder time distribution, and operational drag across leadership channels.",
      deliverable: "40-Point Growth Diagnostic & Delegated Hand-off Plan",
    },
    {
      step: "02",
      industry: "Stage 02 Architecture",
      title: "Moat & Margin Architecture",
      period: "Days 31–60",
      metricLabel: "Execution Cadence",
      description:
        "Repositioning your offering and unit economics to command high enterprise pricing and eliminate recurring churn.",
      deliverable: "High-Margin Commercial Packaging & ICP Protocol",
    },
    {
      step: "03",
      industry: "Stage 03 Architecture",
      title: "Executive Cadence & Governance",
      period: "Days 61–90",
      metricLabel: "Execution Cadence",
      description:
        "Codifying operating rhythms so leaders make decisive calls without escalating trivial matters to the CEO.",
      deliverable: "Quarterly OKR Cascade & Leadership Scorecards",
    },
    {
      step: "04",
      industry: "Stage 04 Architecture",
      title: "Predictable Scale & Valuation",
      period: "Days 91+",
      metricLabel: "Execution Cadence",
      description:
        "Expanding distribution channels and institutionalizing operational systems for peak market valuation or liquidity.",
      deliverable: "Enterprise Valuation Multiple Audit & Scale Roadmap",
    },
  ],
  ctaText: "Review Your Roadmap",
};

interface FrameworkSectionProps {
  onOpenModal?: () => void;
}

export default function FrameworkSection({ onOpenModal }: FrameworkSectionProps) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const windowHeight = window.innerHeight;

      // Determine active card based on position relative to viewport
      const triggerY = windowHeight * 0.42;
      let currentIndex = 0;

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top <= triggerY) {
          currentIndex = idx;
        }
      });

      setActiveStageIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      const topOffset = 120;
      const targetY = targetCard.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <section
      id="framework"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--coach-bg)] border-b border-[var(--coach-border)] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ================================================================
              LEFT SIDE: STICKY STAGE PROGRESS BAR & POINTER (Desktop)
              ================================================================ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 sm:space-y-8">
            {/* Section Header */}
            <div className="space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
                <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
                  {FRAMEWORK_DATA.eyebrow}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--coach-text-primary)] tracking-tight">
                {FRAMEWORK_DATA.heading}
              </h2>
              <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
                {FRAMEWORK_DATA.subheading}
              </p>
            </div>

            {/* Scroll-Driven Vertical Progress Bar (Desktop) */}
            <div className="hidden lg:block pt-2">
              <div className="relative pl-7 space-y-7">
                {/* Continuous Vertical Track Line */}
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-[var(--coach-border)] rounded-full">
                  {/* Smooth Color Fill based on Active Stage */}
                  <div
                    className="w-full bg-[var(--coach-accent)] rounded-full transition-all duration-300 ease-out"
                    style={{
                      height: `${(activeStageIndex / (FRAMEWORK_DATA.stages.length - 1)) * 100}%`,
                    }}
                  />
                </div>

                {/* 4 Interactive Stage Nodes & Moving Pointer */}
                {FRAMEWORK_DATA.stages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  const isPassed = activeStageIndex > idx;

                  return (
                    <button
                      key={stage.step}
                      onClick={() => scrollToCard(idx)}
                      className="group flex items-center gap-3.5 text-left focus:outline-none cursor-pointer w-full"
                    >
                      {/* Node Indicator / Moving Pointer Dot */}
                      <div
                        className={`relative z-10 w-5 h-5 -ml-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-200 ${
                          isActive
                            ? "bg-[var(--coach-accent)] text-[var(--coach-accent-contrast)] scale-110 shadow-sm ring-4 ring-[var(--coach-accent)]/20"
                            : isPassed
                            ? "bg-[var(--coach-accent)] text-[var(--coach-accent-contrast)]"
                            : "bg-[var(--coach-surface)] border border-[var(--coach-border)] text-[var(--coach-text-muted)] group-hover:border-[var(--coach-text-secondary)]"
                        }`}
                      >
                        {stage.step}
                      </div>

                      {/* Text Label aligned in lane */}
                      <div className="min-w-0">
                        <span
                          className={`text-xs block font-bold transition-colors ${
                            isActive
                              ? "text-[var(--coach-accent)]"
                              : isPassed
                              ? "text-[var(--coach-text-primary)]"
                              : "text-[var(--coach-text-muted)] group-hover:text-[var(--coach-text-secondary)]"
                          }`}
                        >
                          Stage {stage.step} • {stage.period}
                        </span>
                        <span
                          className={`text-xs block truncate transition-colors ${
                            isActive
                              ? "text-[var(--coach-text-primary)] font-semibold"
                              : "text-[var(--coach-text-secondary)]"
                          }`}
                        >
                          {stage.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="btn-accent px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 tap-effect cursor-pointer"
              >
                <span>{FRAMEWORK_DATA.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ================================================================
              RIGHT SIDE: SCROLLING STAGE CARDS
              - On Desktop: Clean editorial cards with dividers & aligned lanes
              - On Mobile: Minimal separated bordered cards (no shadow, no hover)
              ================================================================ */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:pb-16">
            {FRAMEWORK_DATA.stages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;

              return (
                <div
                  key={stage.step}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`rounded-xl bg-[var(--coach-surface)] p-6 sm:p-7 space-y-5 shadow-none transition-colors duration-200 border ${
                    isActive
                      ? "border-[var(--coach-accent)] lg:border-[var(--coach-accent)]"
                      : "border-[var(--coach-border)]"
                  }`}
                >
                  {/* Lane 1: Eyebrow & Stage Header */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono font-bold text-[var(--coach-accent)] uppercase tracking-wider">
                      {stage.industry}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-[var(--coach-text-secondary)]">
                      {stage.period}
                    </span>
                  </div>

                  {/* Lane 2: Stage Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--coach-text-primary)] tracking-tight">
                    {stage.title}
                  </h3>

                  {/* Subtle Divider Line (as requested in Image 1) */}
                  <div className="border-t border-[var(--coach-border)]" />

                  {/* Lane 3: Big Metric Callout & Execution Cadence */}
                  <div className="space-y-0.5">
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--coach-accent)]">
                      {stage.period}
                    </div>
                    <div className="text-xs text-[var(--coach-text-secondary)] font-medium uppercase tracking-wide">
                      {stage.metricLabel}
                    </div>
                  </div>

                  {/* Lane 4: Summary Description */}
                  <p className="text-xs sm:text-sm text-[var(--coach-text-secondary)] leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Lane 5: Key Deliverable (Green checkmark, clean lane) */}
                  <div className="pt-3 border-t border-[var(--coach-border)]/80 text-[11px] sm:text-xs font-semibold text-[var(--coach-success)] flex items-start gap-1.5">
                    <span className="shrink-0 font-bold">✓</span>
                    <span>{stage.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
