import React from "react";
import { siteConfig, navLinks } from "@/lib/constants";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t-2 border-dashed border-pencil/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="font-heading text-2xl font-bold text-pencil mb-3"
              style={{ transform: "rotate(-1deg)" }}
            >
              {siteConfig.name}
            </h3>
            <p className="font-body text-base text-pencil/60 max-w-xs">
              Building delightful digital things with a human touch.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-pencil mb-3">
              <span className="wavy-underline">Quick Links</span>
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-base text-pencil/60 hover:text-marker hover:line-through transition-colors duration-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-bold text-pencil mb-3">
              <span className="wavy-underline">Find Me</span>
            </h4>
            <div className="flex flex-col gap-2">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-pencil/60 hover:text-marker hover:line-through transition-colors duration-100 capitalize"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-pencil/15 pt-6">
          <p className="font-body text-base text-pencil/40 text-center flex items-center justify-center gap-1.5">
            Sketched with{" "}
            <Heart
              size={16}
              strokeWidth={2.5}
              className="text-marker inline fill-marker"
            />{" "}
            by {siteConfig.name} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
