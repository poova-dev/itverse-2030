"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  delay?: number;
}

export function SectionWrapper({ children, className = "", dark = false, id, delay = 0 }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`${dark ? "section-dark" : ""} ${className}`}
    >
      {children}
    </motion.section>
  );
}
