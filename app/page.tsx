"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProblemsSection from "@/components/sections/ProblemsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ResultsSection from "@/components/sections/ResultsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";
import CtaPopup from "@/components/sections/CtaPopup";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[var(--coach-bg)] text-[var(--coach-text-primary)] flex flex-col selection:bg-[var(--coach-accent)] selection:text-[var(--coach-accent-contrast)] transition-colors duration-200">
      {/* Top Fixed Header Navigation */}
      <Navbar onOpenModal={openModal} />

      {/* Main Landing Page Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <HeroSection onOpenModal={openModal} />

        {/* 2. Client Proof & Media Trust Bar */}
        <TrustBar />

        {/* 3. The 7-Figure Founder Bottleneck vs. Scaled Architecture */}
        <ProblemsSection onOpenModal={openModal} />

        {/* 4. About Marcus Vance / Bio & Credentials */}
        <AboutSection onOpenModal={openModal} />

        {/* 5. 3 Tier Advisory Programs */}
        <ProgramsSection onOpenModal={openModal} />

        {/* 6. The 4-Stage Proven Scaling Methodology (Interactive One-by-One Progress) */}
        <FrameworkSection onOpenModal={openModal} />

        {/* 7. Audited Client Results & Case Studies */}
        <ResultsSection onOpenModal={openModal} />

        {/* 8. Executive Testimonials & Social Proof */}
        <TestimonialsSection onOpenModal={openModal} />

        {/* 9. Interactive FAQ Accordion (Icon Only Animation, Full Row Click) */}
        <FaqSection onOpenModal={openModal} />

        {/* 10. Direct Application & Booking Form */}
        <BookingSection />
      </main>

      {/* Footer Navigation & Legal */}
      <Footer />

      {/* Smart CTA Popup (Triggers after 5s or scrolling to programs/booking) */}
      <CtaPopup
        isOpen={isModalOpen}
        onOpen={openModal}
        onClose={closeModal}
      />
    </div>
  );
}
