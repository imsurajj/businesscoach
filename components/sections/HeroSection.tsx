"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE HERO CONSTANTS
   ========================================================================== */
export const HERO_DATA = {
  eyebrow: "Executive & Business Advisory",
  headline: "Scale Past The $10M Ceiling Without Operational Chaos.",
  subheading:
    "Systematic 1:1 business architecture and operational cadence for founders, managing partners, and CEOs ready to remove themselves as the bottleneck.",
  primaryCtaText: "Claim Strategy Audit",
  secondaryCtaText: "Explore Framework",
  secondaryHref: "#framework",
  availabilityNote: "Currently accepting 2 advisory clients for Q3/Q4",
  stats: [
    { target: 140, prefix: "$", suffix: "M+", decimals: 0, label: "Client Value Generated" },
    { target: 450, prefix: "", suffix: "+", decimals: 0, label: "Founders Mentored" },
    { target: 3.4, prefix: "", suffix: "x", decimals: 1, label: "Average EBITDA Expansion" },
    { target: 98, prefix: "", suffix: "%", decimals: 0, label: "Client Retention Rate" },
  ],
};

interface HeroSectionProps {
  onOpenModal?: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  // Animated counting numbers state
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1600; // 1.6 seconds counting duration
    const startTime = performance.now();

    const animateCounts = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic formula for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        HERO_DATA.stats.map((stat) => {
          const val = stat.target * easeOut;
          return stat.decimals > 0 ? parseFloat(val.toFixed(1)) : Math.floor(val);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      } else {
        setCounts(HERO_DATA.stats.map((s) => s.target));
      }
    };

    const animId = requestAnimationFrame(animateCounts);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)] section-appear">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
          <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
            {HERO_DATA.eyebrow}
          </span>
        </div>

        {/* Headline (Increased size on mobile as requested) & Subheading */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--coach-text-primary)] leading-[1.12]">
            {HERO_DATA.headline}
          </h1>
          <p className="text-base sm:text-lg text-[var(--coach-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {HERO_DATA.subheading}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto btn-accent px-7 py-3.5 rounded text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 tap-effect cursor-pointer"
          >
            <span>{HERO_DATA.primaryCtaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={HERO_DATA.secondaryHref}
            className="w-full sm:w-auto btn-outline px-7 py-3.5 rounded text-xs font-semibold tracking-wider uppercase text-center tap-effect"
          >
            {HERO_DATA.secondaryCtaText}
          </a>
        </div>

        {/* Availability Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-[var(--coach-text-muted)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
          <span>{HERO_DATA.availabilityNote}</span>
        </div>

        {/* Animated Counting Stats Strip */}
        <div className="pt-12 mt-12 border-t border-[var(--coach-border)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {HERO_DATA.stats.map((stat, idx) => {
            const displayValue =
              stat.decimals > 0
                ? counts[idx].toFixed(1)
                : counts[idx].toString();

            return (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--coach-text-primary)] tracking-tight tabular-nums">
                  {stat.prefix}
                  {displayValue}
                  {stat.suffix}
                </div>
                <div className="text-xs text-[var(--coach-text-secondary)] font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
