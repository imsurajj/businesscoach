"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import CustomDropdown from "@/components/ui/CustomDropdown";

/* ==========================================================================
   EASILY EDITABLE BOOKING CONSTANTS
   ========================================================================== */
export const BOOKING_CONFIG = {
  eyebrow: "Private Strategy Application",
  heading: "Claim Your 45-Minute Growth Diagnostic",
  subheading:
    "An unhurried working session directly with Marcus Vance to diagnose your primary bottleneck and outline a bespoke 12-month operational roadmap.",
  commitments: [
    "100% Confidentiality under bilateral mutual NDA",
    "Direct working session with Marcus Vance (No sales reps)",
    "Concrete 3-point operational blueprint delivered within 24 hours",
  ],
  revenueRanges: [
    "$1M – $3M Annual Revenue",
    "$3M – $7M Annual Revenue",
    "$7M – $15M Annual Revenue",
    "$15M – $30M+ Annual Revenue",
  ],
  bottlenecks: [
    "Founder Bottleneck / Daily Firefighting",
    "Stalled Top-Line ARR Growth",
    "Shrinking EBITDA Margins & Overhead Drag",
    "Executive Team Alignment & Hiring Friction",
    "Preparing for PE Recapitalization or M&A Exit",
  ],
  submitButtonText: "Submit Diagnostic Application",
  successTitle: "Application Received Confidentially",
  successMessage:
    "Thank you. Marcus Vance personally reviews every application within 24 business hours. If approved, you will receive private calendar scheduling access via email.",
};

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    revenueRange: BOOKING_CONFIG.revenueRanges[1],
    primaryBottleneck: BOOKING_CONFIG.bottlenecks[0],
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="booking" className="py-20 bg-[var(--coach-bg)] border-b border-[var(--coach-border)] section-appear">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--coach-surface)] border border-[var(--coach-border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
              <span className="text-xs font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
                {BOOKING_CONFIG.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--coach-text-primary)] tracking-tight leading-tight">
              {BOOKING_CONFIG.heading}
            </h2>

            <p className="text-sm text-[var(--coach-text-secondary)] leading-relaxed">
              {BOOKING_CONFIG.subheading}
            </p>

            <div className="pt-4 border-t border-[var(--coach-border)] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--coach-text-primary)]">
                Engagement Standards:
              </h3>
              <ul className="space-y-2.5">
                {BOOKING_CONFIG.commitments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--coach-text-secondary)]">
                    <span className="text-[var(--coach-accent)] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--coach-text-muted)] pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
              <span>Limited to 8 active advisory clients per quarter.</span>
            </div>
          </div>

          {/* Right Column: Clean Minimal Form with Custom Dropdowns */}
          <div className="lg:col-span-7 pt-2">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 border border-[var(--coach-border)] rounded-lg p-8 bg-[var(--coach-surface)] animate-coach-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--coach-text-primary)]">
                  {BOOKING_CONFIG.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--coach-text-secondary)] max-w-md mx-auto leading-relaxed">
                  {BOOKING_CONFIG.successMessage}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider tap-effect cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 border border-[var(--coach-border)] rounded-lg p-6 sm:p-8 bg-[var(--coach-surface)]">
                <div className="border-b border-[var(--coach-border)] pb-3">
                  <h3 className="text-base font-bold text-[var(--coach-text-primary)]">
                    Diagnostic Application
                  </h3>
                  <p className="text-xs text-[var(--coach-text-muted)]">
                    All submissions held under strict confidentiality.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. David Vance"
                      className="w-full px-3.5 py-2.5 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-xs text-[var(--coach-text-primary)] placeholder-[var(--coach-text-muted)] focus:outline-none focus:border-[var(--coach-accent)]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      placeholder="e.g. david@company.com"
                      className="w-full px-3.5 py-2.5 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-xs text-[var(--coach-text-primary)] placeholder-[var(--coach-text-muted)] focus:outline-none focus:border-[var(--coach-accent)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      placeholder="e.g. Apex Logistics Inc"
                      className="w-full px-3.5 py-2.5 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-xs text-[var(--coach-text-primary)] placeholder-[var(--coach-text-muted)] focus:outline-none focus:border-[var(--coach-accent)]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                      Current Annual Revenue *
                    </label>
                    {/* Replaced native select with CustomDropdown */}
                    <CustomDropdown
                      value={formData.revenueRange}
                      onChange={(val) =>
                        setFormData({ ...formData, revenueRange: val })
                      }
                      options={BOOKING_CONFIG.revenueRanges}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                    Primary Operational Bottleneck *
                  </label>
                  {/* Replaced native select with CustomDropdown */}
                  <CustomDropdown
                    value={formData.primaryBottleneck}
                    onChange={(val) =>
                      setFormData({ ...formData, primaryBottleneck: val })
                    }
                    options={BOOKING_CONFIG.bottlenecks}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                    Key Scaling Goal (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Briefly state your desired revenue target or friction point..."
                    className="w-full px-3.5 py-2 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-xs text-[var(--coach-text-primary)] placeholder-[var(--coach-text-muted)] focus:outline-none focus:border-[var(--coach-accent)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent py-3.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 tap-effect disabled:opacity-50 cursor-pointer"
                >
                  <span>
                    {isSubmitting ? "Processing..." : BOOKING_CONFIG.submitButtonText}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
