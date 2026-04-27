"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
      <Link href="/" className="text-2xl font-display font-bold tracking-tighter uppercase">
        Zedinc<span className="text-accent">.</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium uppercase tracking-widest hover:text-white/70 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="w-6 h-0.5 bg-white" 
        />
        <motion.span 
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-6 h-0.5 bg-white" 
        />
        <motion.span 
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
          className="w-6 h-0.5 bg-white" 
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-display font-bold uppercase tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
