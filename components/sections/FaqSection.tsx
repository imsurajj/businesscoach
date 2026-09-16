"use client";

import React, { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE FAQ CONSTANTS
   ========================================================================== */
export const FAQ_DATA = {
  eyebrow: "Frequently Asked Questions",
  heading: "Direct Answers Before Applying",
  subheading:
    "Transparent details regarding qualification criteria, time commitment, and confidentiality.",
  faqs: [
    {
      question: "Who is the ideal candidate for Marcus Vance's advisory?",
      answer:
        "Our advisory engagements are tailored specifically for founders and CEOs running commercial businesses doing between $2M and $30M in annual revenue who are experiencing founder bottleneck or stalled top-line growth.",
    },
    {
      question: "How much time will this require from me and my leadership team?",
      answer:
        "You typically invest 90 minutes bi-weekly for strategic reviews with Marcus, plus 1 hour weekly on sprint execution. The goal is elimination of operational drag—clients average 15 to 25 hours per week of reclaimed founder time within 90 days.",
    },
    {
      question: "How does this differ from traditional consultants or mindset coaches?",
      answer:
        "Traditional consultancies deliver theoretical decks and leave you to execute. Mindset coaches provide generic encouragement without commercial understanding. We provide concrete operating architectures, weekly accountability, and direct partnership with a 2x-exited operator.",
    },
    {
      question: "Do you work with international companies?",
      answer:
        "Yes. Approximately 35% of our portfolio clients operate across the United Kingdom, Europe, Singapore, and Australia, coordinated seamlessly across global time zones.",
    },
    {
      question: "Are our financials and conversations confidential?",
      answer:
        "Strictly and unconditionally. We execute mutual non-disclosure agreements (NDAs) prior to reviewing any proprietary financial statements or internal operational workflows.",
    },
  ],
  supportNote: "Have a specific question regarding your business model?",
  ctaText: "Ask Your Question Directly",
};

interface FaqSectionProps {
  onOpenModal?: () => void;
}

export default function FaqSection({ onOpenModal }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)] section-appear">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
            <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
              {FAQ_DATA.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--coach-text-primary)] tracking-tight">
            {FAQ_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
            {FAQ_DATA.subheading}
          </p>
        </div>

        {/* Smooth Accordion: Full row click with smooth height transition */}
        <div className="divide-y divide-[var(--coach-border)] border-y border-[var(--coach-border)]">
          {FAQ_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="py-5 cursor-pointer select-none group"
              >
                {/* Clickable Header Row */}
                <div className="w-full flex items-center justify-between gap-4">
                  <span className="text-base sm:text-lg font-semibold text-[var(--coach-text-primary)] group-hover:text-[var(--coach-accent)] transition-colors">
                    {faq.question}
                  </span>

                  {/* Smooth rotating icon */}
                  <span className="text-[var(--coach-accent)] shrink-0 p-1">
                    <Plus
                      className={`w-4 h-4 transform transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </span>
                </div>

                {/* Smoothly expanding/collapsing content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-3 pr-8 text-sm sm:text-base text-[var(--coach-text-secondary)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-[var(--coach-text-secondary)]">{FAQ_DATA.supportNote}</p>
          <button
            onClick={onOpenModal}
            className="btn-outline px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 tap-effect cursor-pointer"
          >
            <span>{FAQ_DATA.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
