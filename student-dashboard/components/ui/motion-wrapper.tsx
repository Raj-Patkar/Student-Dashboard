"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
}

export default function MotionWrapper({
  children,
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay,
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.995,
      }}
      className="h-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}