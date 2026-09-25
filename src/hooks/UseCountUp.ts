// src/hooks/useCountUp.ts
"use client";
import { useEffect } from "react";
import { useSpring, useTransform, useInView } from "motion/react";

export function useCountUp<T extends Element>(value: number, ref: React.RefObject<T | null>) {
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  return display;
}