"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig, domMax } from "motion/react";

/**
 * One provider for the whole app.
 *
 * - LazyMotion + the `m` component keeps the animation engine out of every
 *   component's import graph. `domMax` is needed for the shared-layout
 *   timeline on the Projects page; hover/tap/in-view are included.
 * - `strict` makes any leftover `motion.*` usage throw in development, so a
 *   stray full-bundle import can't silently undo the savings.
 * - reducedMotion="user" disables movement for people who ask for less motion.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
