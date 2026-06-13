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
          className="font-heading text-2xl md:text-3xl font-bold text-pencil hover:text-marker transition-colors duration-100"
          style={{ transform: "rotate(-2deg)" }}
        >
          {siteConfig.name}
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
