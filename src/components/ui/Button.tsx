"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({ children, href, onClick, className, variant = "primary" }: ButtonProps) {
  const baseStyles = "px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-white text-black border border-white hover:bg-transparent hover:text-white",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-white border border-transparent hover:bg-white/10",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
