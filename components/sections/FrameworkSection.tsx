"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE FRAMEWORK CONSTANTS (Content Strictly Preserved)
   ========================================================================== */
export const FRAMEWORK_DATA = {
  eyebrow: "Proven Methodology",
  heading: "The 4-Stage Autonomous Engine",
  subheading:
    "A systematic roadmap that transitions your company from individual founder hustle to an enduring, self-governing commercial machine.",
  stageDurationSeconds: 4.5, // Duration for animated border progress per stage
  stages: [
    {
      step: "01",
      title: "Diagnostic & Bottleneck Audit",
      period: "Days 1–30",
      description:
        "Forensic assessment of gross margin leaks, founder time distribution, and operational drag.",
      deliverable: "40-Point Growth Diagnostic & Delegated Hand-off Plan",
    },
    {
      step: "02",
      title: "Moat & Margin Architecture",
      period: "Days 31–60",
      description:
        "Repositioning your offering and unit economics to command high enterprise pricing and eliminate churn.",
      deliverable: "High-Margin Commercial Packaging & ICP Protocol",
    },
    {
      step: "03",
      title: "Executive Cadence & Governance",
      period: "Days 61–90",
      description:
        "Codifying operating rhythms so leaders make decisive calls without escalating trivial matters to the CEO.",
      deliverable: "Quarterly OKR Cascade & Leadership Scorecards",
    },
    {
      step: "04",
      title: "Predictable Scale & Valuation",
      period: "Days 91+",
      description:
        "Expanding distribution channels and institutionalizing processes for peak valuation or liquidity.",
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
  const [progress, setProgress] = useState(0);

  // Animated progress border that shifts automatically when it reaches 100%
  useEffect(() => {
    const totalMs = FRAMEWORK_DATA.stageDurationSeconds * 1000;
    const intervalMs = 40;
    const stepIncrement = (intervalMs / totalMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Progress reached end: shift to next stage and reset progress to 0
          setActiveStageIndex((curr) => (curr + 1) % FRAMEWORK_DATA.stages.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [activeStageIndex]);

  const selectStage = (index: number) => {
    setActiveStageIndex(index);
    setProgress(0); // Reset animation progress on manual tap
  };

  const activeStage = FRAMEWORK_DATA.stages[activeStageIndex];

  return (
    <section id="framework" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)] section-appear">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
              {FRAMEWORK_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--coach-text-primary)] tracking-tight">
            {FRAMEWORK_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
            {FRAMEWORK_DATA.subheading}
          </p>
        </div>

        {/* 4 Stage Stepper Track (Zero Boxed Cards) */}
        <div className="space-y-8">
          {/* Top Progress Line Headers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {FRAMEWORK_DATA.stages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => selectStage(idx)}
                  className="group text-left focus:outline-none cursor-pointer space-y-2 tap-effect"
                >
                  {/* Animated Border Line from Start to End */}
                  <div className="w-full h-1 bg-[var(--coach-border)] rounded-full overflow-hidden relative">
                    {isActive ? (
                      <div
                        className="h-full bg-[var(--coach-accent)] transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    ) : (
                      <div
                        className={`h-full ${
                          idx < activeStageIndex
                            ? "bg-[var(--coach-text-muted)] w-full"
                            : "w-0"
                        }`}
                      />
                    )}
                  </div>

                  {/* Stage Label & Title */}
                  <div className="pt-1">
                    <span
                      className={`text-xs font-bold block tracking-wider ${
                        isActive
                          ? "text-[var(--coach-accent)]"
                          : "text-[var(--coach-text-muted)] group-hover:text-[var(--coach-text-primary)]"
                      }`}
                    >
                      STAGE {stage.step}
                    </span>
                    <span
                      className={`text-xs font-semibold block truncate mt-0.5 ${
                        isActive
                          ? "text-[var(--coach-text-primary)]"
                          : "text-[var(--coach-text-secondary)]"
                      }`}
                    >
                      {stage.title.split("&")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Data Showcase (Minimal, Editorial, Zero Cards) */}
          <div className="py-8 border-y border-[var(--coach-border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-[var(--coach-accent)] tracking-tight">
                  {activeStage.step}
                </span>
                <div>
                  <span className="text-[10px] font-bold text-[var(--coach-accent)] uppercase tracking-wider block">
                    Active Scale Phase
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--coach-text-primary)]">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)] text-xs font-semibold text-[var(--coach-text-secondary)] self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
                <span>{activeStage.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--coach-text-secondary)] leading-relaxed">
              {activeStage.description}
            </p>

            {/* Core Asset Callout */}
            <div className="pt-2 flex items-start gap-3 text-sm text-[var(--coach-text-primary)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--coach-accent)] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[var(--coach-accent)] uppercase tracking-wider block mb-0.5">
                  Critical Deliverable:
                </span>
                <span className="font-semibold">{activeStage.deliverable}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenModal}
            className="btn-accent px-7 py-3.5 rounded text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 tap-effect cursor-pointer"
          >
            <span>{FRAMEWORK_DATA.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
