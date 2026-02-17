"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import emptyCart from "@/images/emptyCart.png";

export default function EmptyCart() {
  return (
    <div className="py-20 md:py-32 bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-brandCharcoal border border-white/5 p-12 md:p-20 max-w-2xl w-full space-y-12 text-center"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
            <ShoppingCart size={64} className="text-zinc-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 border-2 border-brandAmber/20 rounded-full animate-ping" />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            YOUR INVENTORY IS EMPTY
          </h2>
          <p className="text-zinc-500 text-lg font-medium max-w-md mx-auto">
            The frontier is vast and unforgiving. Gear up properly before you head out.
          </p>
        </div>

        <div>
          <Link
            href="/shop"
            className="brand-button brand-button-primary inline-block w-full md:w-auto"
          >
            Scout for Gear
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
