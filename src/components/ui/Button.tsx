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
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  className, 
  variant = "primary",
  disabled,
  type = "button"
}: ButtonProps) {
  const baseStyles = "px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-white text-black border border-white hover:bg-transparent hover:text-white disabled:hover:bg-white disabled:hover:text-black",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black disabled:hover:bg-transparent disabled:hover:text-white",
    ghost: "bg-transparent text-white border border-transparent hover:bg-white/10 disabled:hover:bg-transparent",
  };

  const content = (
    <motion.span
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={cn(
        baseStyles, 
        variants[variant], 
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button 
      onClick={onClick} 
      className="inline-block" 
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}
