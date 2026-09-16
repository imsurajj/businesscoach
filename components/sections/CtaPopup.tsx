"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, ShieldCheck, Calendar, CheckCircle2 } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE CTA POPUP CONSTANTS
   ========================================================================== */
export const POPUP_CONFIG = {
  initialDelaySeconds: 5, // Triggers 5s after load
  triggerSectionId: "programs", // Triggers when scrolling to programs
  eyebrow: "Complimentary Advisory Session",
  valueNotice: "Valued at $1,250 • Waived for Qualified Founders",
  title: "45-Minute Growth Architecture Diagnostic",
  description:
    "Direct session with Marcus Vance to identify your primary operational bottleneck, review gross margins, and map an execution blueprint.",
  benefits: [
    "Identify top EBITDA leaks & operational drags",
    "Decouple founder time from revenue growth",
    "Direct 1-on-1 strategy (Zero junior sales reps)",
  ],
  submitButtonText: "Claim Complimentary Audit",
  floatingButtonLabel: "Claim Free Audit",
  successTitle: "Audit Request Received",
  successMessage:
    "Marcus Vance will personally review your profile and contact you within 24 business hours with scheduling details.",
};

interface CtaPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function CtaPopup({ isOpen, onClose, onOpen }: CtaPopupProps) {
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    revenue: "$3M – $7M ARR",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Trigger 1: 5 seconds delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("coach_popup_dismissed");
      if (!dismissed && !hasAutoOpened) {
        onOpen();
        setHasAutoOpened(true);
      }
    }, POPUP_CONFIG.initialDelaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [hasAutoOpened, onOpen]);

  // Trigger 2: Section scroll trigger
  useEffect(() => {
    const targetSection = document.getElementById(POPUP_CONFIG.triggerSectionId);
    if (!targetSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dismissed = sessionStorage.getItem("coach_popup_dismissed");
            if (!dismissed && !hasAutoOpened) {
              onOpen();
              setHasAutoOpened(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(targetSection);
    return () => observer.disconnect();
  }, [hasAutoOpened, onOpen]);

  const handleClose = () => {
    sessionStorage.setItem("coach_popup_dismissed", "true");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sessionStorage.setItem("coach_popup_dismissed", "true");
    }, 500);
  };

  return (
    <>
      {/* Floating Action Pill */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-30 btn-accent px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xl tap-effect cursor-pointer border border-[var(--coach-accent)]"
          aria-label="Open Audit Request"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{POPUP_CONFIG.floatingButtonLabel}</span>
        </button>
      )}

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Solid Backdrop */}
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-black/75"
            aria-hidden="true"
          />

          {/* Modal Card (Minimal, Solid, No Gradients) */}
          <div className="relative w-full max-w-lg bg-[var(--coach-surface)] border border-[var(--coach-border)] rounded-lg shadow-2xl overflow-hidden z-10 animate-coach-modal-in">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--coach-border)] bg-[var(--coach-bg)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--coach-accent)]" />
                <span className="text-[11px] font-semibold tracking-wider text-[var(--coach-accent)] uppercase">
                  {POPUP_CONFIG.eyebrow}
                </span>
              </div>
              <button
                onClick={handleClose}
                className="text-[var(--coach-text-muted)] hover:text-[var(--coach-text-primary)] transition-colors p-1"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-5">
              {isSubmitted ? (
                <div className="py-6 text-center space-y-3 animate-coach-fade-in">
                  <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--coach-text-primary)]">
                    {POPUP_CONFIG.successTitle}
                  </h3>
                  <p className="text-xs text-[var(--coach-text-secondary)] leading-relaxed max-w-sm mx-auto">
                    {POPUP_CONFIG.successMessage}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleClose}
                      className="btn-accent px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-semibold text-[var(--coach-success)] uppercase tracking-wide">
                      {POPUP_CONFIG.valueNotice}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--coach-text-primary)] leading-snug">
                      {POPUP_CONFIG.title}
                    </h3>
                    <p className="text-xs text-[var(--coach-text-secondary)] leading-relaxed">
                      {POPUP_CONFIG.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 py-1">
                    {POPUP_CONFIG.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[var(--coach-text-secondary)]">
                        <span className="text-[var(--coach-accent)] font-bold">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your Name"
                          className="w-full px-3 py-2 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-xs text-[var(--coach-text-primary)] placeholder-[var(--coach-text-muted)] focus:outline-none focus:border-[var(--coach-accent)]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="work@company.com"
                          className="w-full px-3 py-2 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-xs text-[var(--coach-text-primary)] placeholder-[var(--coach-text-muted)] focus:outline-none focus:border-[var(--coach-accent)]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-semibold text-[var(--coach-text-primary)] uppercase tracking-wider block">
                        Annual Revenue *
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) =>
                          setFormData({ ...formData, revenue: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded bg-[var(--coach-bg)] border border-[var(--coach-border)] text-xs text-[var(--coach-text-primary)] focus:outline-none focus:border-[var(--coach-accent)]"
                      >
                        <option value="$1M – $3M ARR">$1M – $3M ARR</option>
                        <option value="$3M – $7M ARR">$3M – $7M ARR</option>
                        <option value="$7M – $15M ARR">$7M – $15M ARR</option>
                        <option value="$15M – $30M+ ARR">$15M – $30M+ ARR</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-accent py-3 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 tap-effect disabled:opacity-50 cursor-pointer mt-2"
                    >
                      <span>
                        {isSubmitting ? "Submitting..." : POPUP_CONFIG.submitButtonText}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--coach-text-muted)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--coach-accent)]" />
                    <span>Protected by mutual NDA. Limited to 8 clients/quarter.</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
