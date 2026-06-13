"use client";

import React, { useEffect, useRef } from "react";
import { projects } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { gsap } from "@/lib/gsap";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const rotations = ["rotate-1", "-rotate-1", "rotate-0", "-rotate-1", "rotate-1", "rotate-0"];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="A selection of things I've built and shipped">
          My Projects
        </SectionHeading>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card hover:rotate-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(45,45,45,0.15)] transition-all duration-100"
            >
              <Card
                decoration="tape"
                rotate={rotations[i % rotations.length]}
              >
                {/* Image Placeholder */}
                <div
                  className="w-full h-40 bg-erased/40 border-2 border-dashed border-pencil/30 flex items-center justify-center mb-4"
                  style={{
                    borderRadius: "185px 10px 195px 10px / 10px 195px 10px 185px",
                  }}
                >
                  <span className="font-body text-pencil/30 text-sm">
                    [ Project Screenshot ]
                  </span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-pencil mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-base text-pencil/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-sm bg-postit/60 text-pencil border border-pencil/30 px-2 py-0.5"
                      style={{
                        borderRadius: "185px 10px 195px 10px / 10px 195px 10px 185px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-base text-pen hover:text-marker transition-colors"
                  >
                    <ExternalLink size={16} strokeWidth={2.5} />
                    Live
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-base text-pen hover:text-marker transition-colors"
                  >
                    <Code2 size={16} strokeWidth={2.5} />
                    Code
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
