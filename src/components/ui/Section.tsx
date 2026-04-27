"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export default function Section({ children, id, className = "", dark = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`snap-section relative flex flex-col justify-center px-6 md:px-24 overflow-hidden ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
