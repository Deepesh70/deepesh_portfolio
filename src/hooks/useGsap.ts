"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useGsap() {
  const scope = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {}, scope);
    return () => {
      ctxRef.current?.revert();
    };
  }, []);

  const animateFrom = useCallback(
    (
      selector: string,
      fromVars: gsap.TweenVars,
      toVars: gsap.TweenVars & { scrollTrigger?: ScrollTrigger.Vars }
    ) => {
      if (!scope.current) return;
      const elements = scope.current.querySelectorAll(selector);
      if (elements.length === 0) return;

      const st = toVars.scrollTrigger;
      const runAnimation = () => {
        gsap.fromTo(elements, fromVars, {
          ...toVars,
          scrollTrigger:
            st && typeof st === "object"
              ? { ...st, trigger: st.trigger || scope.current }
              : st,
        });
      };

      if (ctxRef.current) {
        ctxRef.current.add(runAnimation);
      } else {
        runAnimation();
      }
    },
    [scope]
  );

  return { scope, gsap, ScrollTrigger, animateFrom };
}
