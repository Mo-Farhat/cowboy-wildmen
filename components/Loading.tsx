"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100]">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="w-24 h-24 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 border-2 border-brandAmber/20 rounded-full" />
        <div className="absolute inset-0 border-t-2 border-brandAmber rounded-full animate-spin" />
        <span className="text-[10px] font-black text-brandAmber uppercase tracking-tighter">Wildmen</span>
      </motion.div>
      <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 animate-pulse">
        Initializing Gear
      </p>
    </div>
  );
};

export default Loading;
