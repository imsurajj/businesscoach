"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}

export default function CustomDropdown({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Custom Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3.5 py-2.5 rounded bg-[var(--coach-bg)] border text-xs text-left flex items-center justify-between transition-colors tap-effect cursor-pointer focus:outline-none ${
          isOpen
            ? "border-[var(--coach-accent)]"
            : "border-[var(--coach-border)] hover:border-[var(--coach-border-focus)]"
        }`}
      >
        <span
          className={`truncate ${
            value ? "text-[var(--coach-text-primary)] font-medium" : "text-[var(--coach-text-muted)]"
          }`}
        >
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[var(--coach-accent)] shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Custom Options Popover */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-[var(--coach-surface)] border border-[var(--coach-border)] rounded-md shadow-xl overflow-hidden py-1 max-h-56 overflow-y-auto animate-coach-fade-in">
          {options.map((option) => {
            const isSelected = value === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-3.5 py-2 text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[var(--coach-surface-hover)] text-[var(--coach-accent)] font-semibold"
                    : "text-[var(--coach-text-primary)] hover:bg-[var(--coach-surface-hover)]"
                }`}
              >
                <span className="truncate">{option}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[var(--coach-accent)] shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
