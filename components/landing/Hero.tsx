"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Animated Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cowboy-hero.webp"
          alt="Cowboy Wildmen Hero Animation"
          fill
          className="object-cover opacity-80"
          priority
          unoptimized
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 max-w-5xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-brandAmber font-black tracking-widest text-sm uppercase mb-2"
          >
            New Fall/Winter 2024
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] uppercase drop-shadow-2xl"
          >
            MADE FOR THE WILD.
            <br />
            SHAPED FOR THE CITY.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mt-4"
          >
            Western grit meets urban edge. Durable silhouettes built to move,
            age, and outlast trends.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/shop" className="brand-button brand-button-primary">
              Shop New Drop
            </Link>
            <Link href="/shop" className="brand-button brand-button-outline">
              Enter the Wild
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
