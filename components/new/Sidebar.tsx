import { X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import Logo from "./Logo";
import Link from "next/link";
import { useOutsideClick } from "@/hooks";
import SocialMedia from "./SocialMedia";
import { FEATURED_CATEGORIES_QUERYResult } from "@/sanity.types";
import { categoriesData } from "@/constants";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: FEATURED_CATEGORIES_QUERYResult;
}


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, categories }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  const [isShopOpen, setIsShopOpen] = useState(true);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md xl:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            ref={sidebarRef}
            className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm bg-black border-r border-white/5 shadow-2xl xl:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <Logo className="w-24" />
                <button
                  onClick={onClose}
                  className="p-3 text-zinc-500 hover:text-brandAmber transition-colors rounded-full hover:bg-white/5"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-8 px-6 flex flex-col gap-3">
                <Link
                  onClick={onClose}
                  href="/"
                  className={`px-4 py-4 rounded-sm text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-between ${pathname === "/"
                    ? "bg-white/5 text-brandAmber border-l-2 border-brandAmber"
                    : "text-zinc-400 hover:bg-white/5 hover:text-brandAmber"
                    }`}
                >
                  Home
                </Link>

                {/* Shop Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setIsShopOpen(!isShopOpen)}
                    className={`px-4 py-4 rounded-sm text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-between w-full ${pathname.startsWith("/shop") || pathname.startsWith("/category")
                      ? "text-brandAmber"
                      : "text-zinc-400 hover:bg-white/5 hover:text-brandAmber"
                      }`}
                  >
                    <span>SHOP</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isShopOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isShopOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 border-l border-white/5 flex flex-col gap-2 py-4">
                          <Link
                            onClick={onClose}
                            href="/shop"
                            className={`px-4 py-2 text-[10px] uppercase font-black tracking-widest transition-colors flex items-center gap-2 ${pathname === "/shop"
                              ? "text-brandAmber"
                              : "text-zinc-600 hover:text-white"
                              }`}
                          >
                            All Products
                          </Link>
                          {categoriesData?.map((item) => (
                            <Link
                              onClick={onClose}
                              key={item?.title}
                              href={item?.href}
                              className={`px-4 py-2 text-[10px] uppercase font-black tracking-widest transition-colors flex items-center gap-2 ${pathname === item?.href
                                ? "text-brandAmber"
                                : "text-zinc-600 hover:text-white"
                                }`}
                            >
                              {item?.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  onClick={onClose}
                  href="/about"
                  className={`px-4 py-4 rounded-sm text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-between ${pathname === "/about"
                    ? "bg-white/5 text-brandAmber border-l-2 border-brandAmber"
                    : "text-zinc-400 hover:bg-white/5 hover:text-brandAmber"
                    }`}
                >
                  About
                </Link>

                <Link
                  onClick={onClose}
                  href="/contact"
                  className={`px-4 py-4 rounded-sm text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-between ${pathname === "/contact"
                    ? "bg-white/5 text-brandAmber border-l-2 border-brandAmber"
                    : "text-zinc-400 hover:bg-white/5 hover:text-brandAmber"
                    }`}
                >
                  Contact
                </Link>

                <Link
                  onClick={onClose}
                  href="/orders"
                  className={`px-4 py-4 rounded-sm text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-between ${pathname === "/orders"
                    ? "bg-white/5 text-brandAmber border-l-2 border-brandAmber"
                    : "text-zinc-400 hover:bg-white/5 hover:text-brandAmber"
                    }`}
                >
                  My Orders
                </Link>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-white/5 bg-brandCharcoal/50">
                <SocialMedia />
                <p className="text-center text-[10px] font-black uppercase tracking-widest text-zinc-700 mt-6">
                  © {new Date().getFullYear()} COWBOY WILDMEN.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Sidebar;
