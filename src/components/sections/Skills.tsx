"use client";

import React, { useEffect, useRef } from "react";
import { skillCategories } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { gsap } from "@/lib/gsap";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".skill-badge", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pseudo-random rotations for badges
  const rotations = [-2, 1, -1, 2, 0, -1.5, 1.5, -0.5, 2, -2, 1, -1];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Technologies and tools I work with">
          My Skills
        </SectionHeading>

        <div className="skills-grid grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category text-center">
              {/* Category label as sticky note */}
              <div
                className="inline-block bg-white border-2 border-pencil px-5 py-2 mb-6 shadow-[3px_3px_0px_0px_#2d2d2d] font-heading text-xl"
                style={{
                  borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                  transform: "rotate(-1deg)",
                }}
              >
                {category.name}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, j) => (
                  <div key={skill} className="skill-badge">
                    <Badge rotate={rotations[j % rotations.length]}>
                      {skill}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
