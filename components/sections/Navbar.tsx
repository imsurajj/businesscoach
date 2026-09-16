"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react";

/* ==========================================================================
   EASILY EDITABLE NAVBAR CONSTANTS
   ========================================================================== */
export const NAV_CONFIG = {
  brandName: "MARCUS VANCE",
  brandSubtitle: "EXECUTIVE ADVISORY",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "The Shift", href: "#problem" },
    { label: "Programs", href: "#programs" },
    { label: "Framework", href: "#framework" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaText: "Book Strategy Audit",
  ctaHref: "#booking",
};

interface NavbarProps {
  onOpenModal?: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Default to Light Theme
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from document or localStorage (Default Light)
  useEffect(() => {
    const savedTheme = localStorage.getItem("coach_theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("coach_theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("coach_theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? "bg-[var(--coach-bg)]/95 border-b border-[var(--coach-border)] shadow-xs"
          : "bg-[var(--coach-bg)] border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <a
            href="#"
            className="flex flex-col group tap-effect"
            aria-label="Marcus Vance Home"
          >
            <span className="text-base sm:text-lg font-bold tracking-wider text-[var(--coach-text-primary)] group-hover:text-[var(--coach-accent)] transition-colors">
              {NAV_CONFIG.brandName}
            </span>
            <span className="text-[9px] tracking-[0.22em] text-[var(--coach-text-muted)] font-semibold">
              {NAV_CONFIG.brandSubtitle}
            </span>
          </a>

          {/* Desktop Navigation Links with subtle hover animation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_CONFIG.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-[var(--coach-text-secondary)] hover:text-[var(--coach-accent)] transition-all duration-150 py-1 relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--coach-accent)] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions: CTA + Borderless Theme Toggle Strictly at right */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={handleCtaClick}
              className="btn-accent px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-2 tap-effect cursor-pointer"
            >
              <span>{NAV_CONFIG.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Light / Dark Theme Toggle (Only Icon, No Border) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border-0 bg-transparent text-[var(--coach-text-secondary)] hover:text-[var(--coach-text-primary)] hover:bg-[var(--coach-surface-hover)] transition-colors tap-effect cursor-pointer"
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[var(--coach-accent)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--coach-accent)]" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Borderless Hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            {/* Borderless Theme Toggle Icon for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 border-0 bg-transparent text-[var(--coach-text-secondary)] hover:text-[var(--coach-text-primary)] transition-colors tap-effect cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[var(--coach-accent)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--coach-accent)]" />
              )}
            </button>

            {/* Borderless Hamburger / Close Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--coach-text-primary)] focus:outline-none border-0 bg-transparent tap-effect cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--coach-accent)]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Page Mobile Navigation (Smooth Transition, Covers Entire Page) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[var(--coach-bg)] z-50 flex flex-col justify-between px-6 py-8 overflow-y-auto transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <nav className="flex flex-col space-y-4 pt-4">
          {NAV_CONFIG.navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-[var(--coach-text-primary)] hover:text-[var(--coach-accent)] hover:translate-x-2 transition-all py-2 border-b border-[var(--coach-border)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pt-8 space-y-4">
          <button
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleCtaClick(e);
            }}
            className="w-full btn-accent py-4 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 tap-effect cursor-pointer"
          >
            <span>{NAV_CONFIG.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center text-xs text-[var(--coach-text-muted)]">
            Marcus Vance Executive Advisory • Private & Confidential
          </div>
        </div>
      </div>
    </header>
  );
}
