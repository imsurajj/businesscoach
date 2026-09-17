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
  // Triple items to guarantee smooth infinite seamless looping on all screens
  const tickerItems = [
    ...TRUST_DATA.companies,
    ...TRUST_DATA.companies,
    ...TRUST_DATA.companies,
  ];

  return (
    <section className="py-8 sm:py-10 bg-[var(--coach-bg)] border-b border-[var(--coach-border)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-[var(--coach-text-muted)] uppercase">
          {TRUST_DATA.label}
        </p>
      </div>

      {/* Infinite Logo Marquee Track */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-logo-ticker flex items-center whitespace-nowrap">
          {tickerItems.map((co, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 sm:gap-14 px-4 sm:px-7"
            >
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--coach-text-muted)] hover:text-[var(--coach-text-primary)] transition-colors duration-200 cursor-default uppercase select-none">
                {co}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-border)] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
