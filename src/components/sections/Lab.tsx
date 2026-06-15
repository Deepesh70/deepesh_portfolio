"use client";

import React, { useEffect, useRef, useState } from "react";
import { experiments } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { gsap } from "@/lib/gsap";
import { FlaskConical, ExternalLink, ChevronDown } from "lucide-react";

export default function Lab() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".lab-card",
        { y: 50, opacity: 0, rotateZ: -2 },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          scrollTrigger: {
            trigger: ".lab-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          stagger: 0.15,
          duration: 0.7,
          ease: "back.out(1.4)",
        }
      );

      gsap.fromTo(
        ".lab-flask-icon",
        { rotate: -15, scale: 0.8 },
        {
          rotate: 0,
          scale: 1,
          scrollTrigger: {
            trigger: ".lab-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const rotations = ["-rotate-1", "rotate-1"];

  return (
    <section ref={sectionRef} id="lab" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Experimental builds, sandbox projects, and creative testing grounds">
          <span className="inline-flex items-center gap-3">
            <FlaskConical
              className="lab-flask-icon inline-block text-marker"
              size={36}
              strokeWidth={2.5}
            />
            The Lab
          </span>
        </SectionHeading>

        <div className="lab-grid grid md:grid-cols-2 gap-10">
          {experiments.map((experiment, i) => {
            const isExpanded = expandedCards.has(i);

            return (
              <div
                key={experiment.title}
                className="lab-card hover:-translate-y-1 transition-all duration-100"
              >
                <Card
                  decoration="tack"
                  rotate={rotations[i % rotations.length]}
                  bgColor="bg-white"
                >
                  {/* Lab badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="font-body text-xs tracking-wider uppercase text-pen border-2 border-dashed border-pen/40 px-3 py-1"
                      style={{
                        borderRadius:
                          "185px 10px 195px 10px / 10px 195px 10px 185px",
                      }}
                    >
                      Experiment #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-pencil mb-2">
                    {experiment.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-base text-pencil/70 mb-4 leading-relaxed">
                    {experiment.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {experiment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-sm bg-postit/60 text-pencil border border-pencil/30 px-2 py-0.5"
                        style={{
                          borderRadius:
                            "185px 10px 195px 10px / 10px 195px 10px 185px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dashed separator */}
                  <div className="border-t-2 border-dashed border-pencil/20 my-4" />

                  {/* Sub-projects toggle */}
                  <button
                    onClick={() => toggleCard(i)}
                    className="w-full flex items-center justify-between font-body text-base text-pen hover:text-marker transition-colors group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <FlaskConical size={16} strokeWidth={2.5} />
                      {experiment.subProjects.length} sub-project
                      {experiment.subProjects.length !== 1 ? "s" : ""}
                    </span>
                    <ChevronDown
                      size={18}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expandable sub-project list */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? "max-h-96 opacity-100 mt-3"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <ul className="space-y-2 pl-1">
                      {experiment.subProjects.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-body text-base text-pencil/80 hover:text-marker transition-colors group/link"
                          >
                            <span
                              className="w-2 h-2 bg-marker/60 group-hover/link:bg-marker border border-pencil/30 transition-colors"
                              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                            />
                            {sub.label}
                            <ExternalLink
                              size={13}
                              strokeWidth={2.5}
                              className="opacity-0 group-hover/link:opacity-100 transition-opacity -translate-x-1 group-hover/link:translate-x-0"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
