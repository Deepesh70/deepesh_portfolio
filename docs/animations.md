# 🎬 Animation Architecture & GSAP

This portfolio features butter-smooth, responsive animations using the **GreenSock Animation Platform (GSAP)**. It is structured to work efficiently with Next.js Server Components and React 19's rendering cycle.

---

## 🏗️ GSAP Core Configuration (`src/lib/gsap.ts`)

To prevent server-side execution failures in Next.js, plugins are registered only when the browser context exists:

```typescript
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

---

## ⚡ React Lifecycle Management (`src/hooks/useGsap.ts`)

Direct DOM modifications in React can lead to stale state, race conditions, or orphaned scroll event triggers. To resolve this, we leverage:
1. **`gsap.context()`**: Groups all tweens created within a specific DOM scope so they can be cleaned up in a single call.
2. **Double-Render Protection:** In React 19 Strict Mode, components render twice in development. Returning `ctxRef.current?.revert()` in the `useEffect` cleanup prevents duplicated animations or double-applied triggers.

### Custom `useGsap` Hook Signature

```typescript
export function useGsap() {
  const scope = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {}, scope);
    return () => {
      ctxRef.current?.revert(); // Automatically cleans up triggers & resets inline styles
    };
  }, []);

  const animateFrom = useCallback((selector, fromVars, toVars) => { ... });

  return { scope, gsap, ScrollTrigger, animateFrom };
}
```

---

## 🎬 Section Animation Breakdown

### 1. Hero Entrance Timeline
- **File:** `src/components/sections/Hero.tsx`
- **Implementation:** Creates an entrance timeline `gsap.timeline({ defaults: { ease: "back.out(1.7)" } })`.
- **Sequence:**
  1. `.hero-greeting`: Slides up from `y: 40`.
  2. `.hero-name`: Rotates slightly and slides up.
  3. `.hero-tagline` + `.hero-cta` + `.hero-arrow`: Fade in with overlapping offsets.
  4. `.hero-image`: Zooms and spins slightly into place.

### 2. Projects ScrollTrigger
- **File:** `src/components/sections/Projects.tsx`
- **Trigger:** `.projects-grid`
- **Style:** Staggered slide up of project cards (`stagger: 0.12`) triggered when the top of the grid hits `85%` of the viewport height.

### 3. Experience Timeline
- **File:** `src/components/sections/Experience.tsx`
- **Trigger:** `.timeline-container`
- **Style:** 
  - Even timeline index cards slide in from the left (`x: -60`).
  - Odd timeline index cards slide in from the right (`x: 60`).
  - `.timeline-dot` pins expand outward (`scale: 0` to `1`) using `ease: "back.out(1.7)"` delayed slightly.

---

## ♿ Accessibility (Reduced Motion)

We respect users' accessibility choices. In `Hero.tsx`, we verify system motion preferences prior to timeline initialization:

```typescript
const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

useEffect(() => {
  const ctx = gsap.context(() => {
    if (prefersReduced) return; // Disables heavy entrance timeline sequences
    ...
  }, sectionRef);
  return () => ctx.revert();
}, []);
```

---

## 🔄 CSS Micro-Animations

For continuous movement, light CSS keyframes are configured in `globals.css`:
- **`.animate-bounce-gentle`**: Slow vertical wave with slight rotation for hand-drawn visual decorations.
- **`.animate-wiggle`**: Applied on hover to produce an organic sketch shake.
