"use client";

import React, { useEffect, useRef } from "react";
import { testimonials, type Testimonial } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap } from "@/lib/gsap";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (testimonials.length === 0 || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (testimonials.length === 0) {
    return null;
  }

  const testimonialsList: Testimonial[] = testimonials;
  const rotations = ["-rotate-1", "rotate-1", "-rotate-0.5"];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Kind words from people I've worked with">
          Testimonials
        </SectionHeading>

        <div className="testimonials-grid grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonialsList.map((t, i) => (
            <div
              key={t.id}
              className={`testimonial-card relative ${rotations[i % rotations.length]} hover:rotate-0 transition-transform duration-100`}
            >
              {/* Speech bubble */}
              <div
                className="bg-white border-2 border-pencil p-6 shadow-[3px_3px_0px_0px_rgba(45,45,45,0.1)] relative"
                style={{
                  borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px",
                }}
              >
                <Quote
                  size={24}
                  strokeWidth={2.5}
                  className="text-marker/30 mb-3"
                />
                <p className="font-body text-base md:text-lg text-pencil/80 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Speech bubble tail */}
                <div
                  className="absolute -bottom-3 left-8 w-0 h-0"
                  style={{
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderTop: "14px solid #2d2d2d",
                  }}
                />
                <div
                  className="absolute -bottom-[9px] left-[33px] w-0 h-0"
                  style={{
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "12px solid white",
                  }}
                />
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mt-6 ml-4">
                <div
                  className="w-12 h-12 bg-postit border-2 border-pencil flex items-center justify-center font-heading text-base font-bold text-pencil shadow-[2px_2px_0px_0px_#2d2d2d]"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading text-base font-bold text-pencil">
                    {t.name}
                  </p>
                  <p className="font-body text-sm text-pencil/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

