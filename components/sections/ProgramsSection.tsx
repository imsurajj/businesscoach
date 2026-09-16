"use client";

import React from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE PROGRAMS SECTION CONSTANTS
   ========================================================================== */
export const PROGRAMS_DATA = {
  eyebrow: "Advisory Formats",
  heading: "Structured For Measurable Outcomes",
  subheading:
    "Tailored advisory engagements for founders and leadership teams who refuse to accept stalled growth.",
  programs: [
    {
      badge: "Flagship",
      isPrimary: true,
      title: "1:1 Executive Advisory",
      summary: "Comprehensive strategic partnership for CEOs doing $3M - $30M ARR.",
      format: "Bi-Weekly Strategy Summits + Async Access",
      features: [
        "Bi-weekly private strategy sessions with Marcus",
        "Direct emergency async channel (Signal / WhatsApp)",
        "Forensic organizational & margin audit",
        "Executive scorecards & compensation design",
        "Strictly capped at 8 active clients",
      ],
      ctaText: "Apply For Advisory",
    },
    {
      badge: "Cohort",
      isPrimary: false,
      title: "90-Day Scale Accelerator",
      summary: "Systematic operational sprint to break through your growth ceiling.",
      format: "90-Day Intensive Cohort",
      features: [
        "Weekly tactical growth architecture reviews",
        "Proven operating playbooks & KPI dashboards",
        "Sales engine & margin expansion sprint",
        "Curated peer council of 7-figure founders",
        "Complete 12-month scaling roadmap",
      ],
      ctaText: "Join Next Cohort",
    },
    {
      badge: "Enterprise",
      isPrimary: false,
      title: "Executive Team Alignment",
      summary: "Two-day immersive offsite for high-stakes leadership realignment.",
      format: "2-Day Intensive + 60-Day Review",
      features: [
        "In-person diagnostic of operational friction",
        "Strategic annual vision cascade & consensus",
        "Role clarity & decision rights matrix",
        "Codified operating rhythm documentation",
        "60-day accountability checkpoints",
      ],
      ctaText: "Inquire About Offsite",
    },
  ],
};

interface ProgramsSectionProps {
  onOpenModal?: () => void;
}

export default function ProgramsSection({ onOpenModal }: ProgramsSectionProps) {
  return (
    <section id="programs" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
              {PROGRAMS_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--coach-text-primary)] tracking-tight">
            {PROGRAMS_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
            {PROGRAMS_DATA.subheading}
          </p>
        </div>

        {/* Minimal 3-Tier Grid with Thin Dividing Lines */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[var(--coach-border)] border-y lg:border border-[var(--coach-border)] rounded-none lg:rounded-lg overflow-hidden bg-[var(--coach-surface)]">
          {PROGRAMS_DATA.programs.map((program, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                program.isPrimary ? "bg-[var(--coach-surface-hover)]" : "bg-[var(--coach-surface)]"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded ${
                      program.isPrimary
                        ? "bg-[var(--coach-accent)] text-[var(--coach-accent-contrast)]"
                        : "bg-[var(--coach-border)] text-[var(--coach-text-secondary)]"
                    }`}
                  >
                    {program.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[var(--coach-text-primary)]">{program.title}</h3>
                  <p className="text-xs text-[var(--coach-text-secondary)] mt-1 leading-relaxed">
                    {program.summary}
                  </p>
                </div>

                <div className="text-xs text-[var(--coach-accent)] font-medium pt-1">
                  Format: <span className="text-[var(--coach-text-primary)]">{program.format}</span>
                </div>

                <div className="pt-3 border-t border-[var(--coach-border)]">
                  <ul className="space-y-2">
                    {program.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[var(--coach-text-secondary)]">
                        <Check className="w-3.5 h-3.5 text-[var(--coach-accent)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenModal}
                  className={`w-full py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 tap-effect cursor-pointer ${
                    program.isPrimary
                      ? "btn-accent"
                      : "btn-outline"
                  }`}
                >
                  <span>{program.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-xs text-[var(--coach-text-muted)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
            Strictly protected under mutual non-disclosure agreements (NDAs).
          </p>
        </div>
      </div>
    </section>
  );
}
