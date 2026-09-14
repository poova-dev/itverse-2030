"use client";

import { useEffect } from "react";
import { useSpring, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedNumberProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedNumber({
  value,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedNumberProps) {
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const formatted = useTransform(spring, (current) => {
    return `${prefix}${current.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span className={cn("inline-block font-mono", className)}>{formatted}</motion.span>;
}
