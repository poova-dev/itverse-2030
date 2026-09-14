"use client";

import React from "react";
import { motion, type Variants, type Variant } from "framer-motion";
import { cn } from "@/lib/utils";

export type PresetType = "blur" | "fade-in-blur" | "scale" | "slide";
export type PerType = "word" | "char";

export interface TextEffectProps {
  children: string;
  per?: PerType;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
}

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.02,
  word: 0.05,
};

const presetItemVariants: Record<PresetType, { hidden: Variant; visible: Variant }> = {
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } },
  },
  "fade-in-blur": {
    hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  },
  slide: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  },
};

export function TextEffect({
  children,
  per = "word",
  as: Component = "span",
  className,
  preset = "fade-in-blur",
  delay = 0,
  trigger = true,
}: TextEffectProps) {
  const words = children.split(/(\s+)/);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: defaultStaggerTimes[per],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: presetItemVariants[preset].hidden,
    visible: presetItemVariants[preset].visible,
  };

  if (per === "char") {
    const chars = children.split("");
    return (
      <Component className={cn("inline-block", className)}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={trigger ? "visible" : "hidden"}
          className="inline-block"
        >
          {chars.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={itemVariants}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    );
  }

  return (
    <Component className={cn("inline-block", className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={itemVariants}
            className="inline-block whitespace-pre"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
