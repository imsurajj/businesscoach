"use client";

import React from "react";

/* ==========================================================================
   EASILY EDITABLE TRUST BAR CONSTANTS
   ========================================================================== */
export const TRUST_DATA = {
  label: "Trusted by founders & leaders backed by premier firms",
  companies: [
    "APEX VENTURES",
    "KESTREL SCALE",
    "HYPERION HEALTH",
    "VANGUARD FREIGHT",
    "NEXUS WORKFLOW",
    "OMNICLOUD",
  ],
};

export default function TrustBar() {
  return (
    <section className="py-10 bg-[var(--coach-bg)] border-b border-[var(--coach-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-[var(--coach-text-muted)] uppercase">
          {TRUST_DATA.label}
        </p>

        {/* Minimalist Wordmarks Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-semibold tracking-wider text-[var(--coach-text-secondary)]">
          {TRUST_DATA.companies.map((co, idx) => (
            <span
              key={idx}
              className="hover:text-[var(--coach-text-primary)] transition-colors duration-150 cursor-default"
            >
              {co}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
