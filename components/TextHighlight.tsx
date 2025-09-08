"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      whileInView={{
        backgroundSize: "100% 100%",
      }}
      viewport={{ once: true, amount: 0.6 }} // only animate when ~60% visible
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.3,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 px-1 pb-1 dark:from-blue-700 dark:to-cyan-800`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
