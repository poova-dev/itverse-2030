"use client";

import React, { Children, cloneElement, ReactElement, useState, useId } from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedBackgroundProps {
  children: ReactElement<{ "data-id": string; className?: string; onClick?: () => void; children?: React.ReactNode }>[];
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
}

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition = {
    type: "spring",
    bounce: 0.15,
    stiffness: 300,
    damping: 30,
  },
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);
  const uniqueId = useId();

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);
    if (onValueChange) {
      onValueChange(id);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      {Children.map(children, (child) => {
        const id = child.props["data-id"];
        const isActive = activeId === id;

        const interactionProps = enableHover
          ? {
              onMouseEnter: () => handleSetActiveId(id),
              onMouseLeave: () => handleSetActiveId(null),
            }
          : {
              onClick: () => {
                child.props.onClick?.();
                handleSetActiveId(id);
              },
            };

        return cloneElement(
          child,
          {
            key: id,
            className: cn("relative z-10", child.props.className),
            ...interactionProps,
          },
          <>
            {isActive && (
              <motion.div
                layoutId={`animated-bg-${uniqueId}`}
                className={cn("absolute inset-0 z-0 rounded-lg", className)}
                transition={transition}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{child.props.children}</span>
          </>
        );
      })}
    </div>
  );
}
