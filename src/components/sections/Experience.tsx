"use client";

import React, { useEffect, useRef } from "react";
import { experiences } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { gsap } from "@/lib/gsap";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".timeline-entry", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 85%",
        },
        x: (i) => (i % 2 === 0 ? -60 : 60),
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".timeline-dot", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 85%",
        },
        scale: 0,
        stagger: 0.2,
        duration: 0.4,
        ease: "back.out(1.7)",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Where I've worked and what I've learned">
          Experience
        </SectionHeading>

        <div className="timeline-container max-w-3xl mx-auto relative">
          {/* Vertical dashed line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-pencil/30 -translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={`${exp.company}-${exp.role}-${i}`}
              className={`timeline-entry relative flex flex-col md:flex-row items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                <Card decoration="tack">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-8 h-8 bg-marker/10 border-2 border-pencil flex items-center justify-center"
                      style={{
                        borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
                      }}
                    >
                      <Briefcase size={14} strokeWidth={2.5} className="text-marker" />
                    </div>
                    <span className="font-body text-sm text-pencil/50">{exp.period}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-pencil mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-heading text-base text-pen mb-3">
                    @ {exp.company}
                  </p>
                  <p className="font-body text-base text-pencil/70 leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="timeline-dot hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                <div
                  className="w-5 h-5 bg-marker border-[3px] border-pencil"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
                  }}
                />
              </div>

              {/* Spacer for alternate alignment */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
