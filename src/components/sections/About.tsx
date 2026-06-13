"use client";

import React, { useEffect, useRef } from "react";
import { siteConfig, stats } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { y: 40, opacity: 0, rotateZ: -2 },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Stat counters
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;

        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          delay: i * 0.15,
          onUpdate: function () {
            el.textContent = Math.ceil(
              Number(gsap.getProperty(el, "textContent") || 0)
            ).toString();
          },
        });
      });

      gsap.fromTo(
        ".stat-circle",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.7)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const organicRadii = [
    "60% 40% 55% 45% / 45% 60% 40% 55%",
    "45% 55% 40% 60% / 55% 45% 60% 40%",
    "50% 50% 45% 55% / 40% 60% 50% 50%",
    "55% 45% 60% 40% / 50% 50% 45% 55%",
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="A little bit about me and what drives me">
          About Me
        </SectionHeading>

        <div className="about-content max-w-3xl mx-auto mb-16">
          <p className="drop-cap font-body text-lg md:text-xl text-pencil/80 leading-relaxed">
            {siteConfig.description} When I&apos;m not coding, you&apos;ll find me sketching ideas in
            my notebook, exploring new coffee shops, or getting lost in a good book. I believe
            the best digital products feel like they were made by a real person — with care,
            personality, and maybe a few happy accidents along the way.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div
                className="stat-circle h-24 w-24 md:h-32 md:w-32 border-[3px] border-pencil bg-white flex flex-col items-center justify-center shadow-[3px_3px_0px_0px_rgba(45,45,45,0.1)]"
                style={{ borderRadius: organicRadii[i % organicRadii.length] }}
              >
                <span
                  ref={(el) => { counterRefs.current[i] = el; }}
                  className="font-heading text-2xl md:text-3xl font-bold text-marker"
                >
                  {stat.value}
                </span>
                {typeof stat.value === "number" && stat.value >= 100 && (
                  <span className="font-heading text-marker text-sm">+</span>
                )}
              </div>
              <span className="font-body text-base md:text-lg text-pencil/70 mt-3 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
