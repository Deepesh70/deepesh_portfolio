"use client";

import React, { useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b-2 border-dashed border-pencil/20"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          style={{ transform: "rotate(-2deg)" }}
        >
          {/* Hand-drawn monogram */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="transition-transform duration-200 group-hover:rotate-6"
          >
            {/* Wobbly circle border */}
            <path
              d="M20 2C28 1.5 36 8 37.5 16C39 24 35 34 26 37C17 40 6 35 3 26C0 17 6 5 14 2.5C16 2 18 2 20 2Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-pencil group-hover:text-marker transition-colors duration-200"
            />
            {/* Letter D - first */}
            <text
              x="10"
              y="27"
              fontFamily="var(--font-heading)"
              fontSize="18"
              fontWeight="700"
              className="fill-pencil group-hover:fill-marker transition-colors duration-200"
            >
              D
            </text>
            {/* Letter D - second, slightly offset */}
            <text
              x="21"
              y="27"
              fontFamily="var(--font-heading)"
              fontSize="18"
              fontWeight="700"
              className="fill-marker"
            >
              D
            </text>
          </svg>
          <span className="font-heading text-xl md:text-2xl font-bold text-pencil group-hover:text-marker transition-colors duration-100">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-lg text-pencil hover:text-marker transition-colors duration-100 wavy-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-pencil hover:text-marker transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-t-2 border-dashed border-pencil/20 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xl text-pencil hover:text-marker transition-colors duration-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
