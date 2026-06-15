"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";
import HandDrawnArrow from "@/components/decorations/HandDrawnArrow";
import BouncingCircle from "@/components/decorations/BouncingCircle";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

      tl.from(".hero-greeting", {
        y: 40,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-name",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            rotateZ: -3,
          },
          "-=0.3"
        )
        .from(
          ".hero-tagline",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".hero-arrow",
          {
            x: -30,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.1"
        )
        .from(
          ".hero-image",
          {
            scale: 0.8,
            opacity: 0,
            rotateZ: 5,
            duration: 0.8,
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center pt-24 pb-16 px-6"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column — Text */}
        <div>
          <p className="hero-greeting font-body text-xl md:text-2xl text-pencil/70 mb-2">
            Hey there! I&apos;m
          </p>
          <h1 className="hero-name font-heading text-5xl md:text-7xl font-bold text-pencil leading-tight mb-4">
            {siteConfig.name}
            <span
              className="inline-block text-marker ml-2"
              style={{ transform: "rotate(12deg)" }}
            >
              !
            </span>
          </h1>
          <p className="hero-tagline font-body text-xl md:text-2xl text-pencil/80 mb-8 max-w-md">
            {siteConfig.tagline}. I craft{" "}
            <span className="text-marker font-heading">delightful</span>{" "}
            digital experiences with a human touch.
          </p>

          <div className="hero-cta flex flex-wrap items-center gap-4">
            <Button href="#projects">See My Work</Button>
            <Button href="#contact" variant="secondary">
              Say Hello
            </Button>
          </div>

          {/* Arrow pointing to CTA */}
          <div className="hero-arrow hidden md:block mt-2 ml-4" style={{ transform: "rotate(15deg) scaleX(-1)" }}>
            <HandDrawnArrow />
          </div>
        </div>

        {/* Right Column — Photo Placeholder */}
        <div className="relative flex justify-center">
          <div
            className="hero-image relative w-64 h-64 md:w-80 md:h-80 border-[3px] border-pencil bg-erased/50 flex items-center justify-center overflow-hidden"
            style={{
              borderRadius: "30px 200px 20px 225px / 200px 30px 225px 20px",
              transform: "rotate(2deg)",
            }}
          >
            {/* Corner frame marks */}
            <svg
              className="absolute -top-3 -left-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 12 L0 0 L12 0"
                stroke="#2d2d2d"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="absolute -top-3 -right-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0 L24 0 L24 12"
                stroke="#2d2d2d"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="absolute -bottom-3 -left-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 12 L0 24 L12 24"
                stroke="#2d2d2d"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="absolute -bottom-3 -right-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 24 L24 24 L24 12"
                stroke="#2d2d2d"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* <span className="font-body text-pencil/40 text-lg text-center px-4">
              [ Your Photo Here ]
            </span> */}
            <Image
              src="/images/me1.jpeg"
              alt={`Portrait of ${siteConfig.name}`}
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover"
              preload={true}
            />
          </div>

          <BouncingCircle className="absolute -bottom-4 -right-4 md:-right-10" />
        </div>
      </div>
    </section>
  );
}
