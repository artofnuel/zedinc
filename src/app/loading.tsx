"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-2 border-white mb-8 mx-auto relative"
        >
          <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-xl">
            Z
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-[10px] uppercase tracking-[0.5em] text-light-grey"
        >
          Loading Craft
        </motion.div>
      </div>
    </div>
  );
}
