"use client";
import { FEATURED_CATEGORIES_QUERYResult } from "@/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const HeaderMenu = ({ categories }: { categories: FEATURED_CATEGORIES_QUERYResult }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden xl:inline-flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-white">
      <Link
        href={"/"}
        className={`hover:text-brandAmber transition-colors duration-300 ${isActive("/") ? "text-brandAmber" : ""
          }`}
      >
        Frontier
      </Link>

      <div className="relative group">
        <button
          className={`flex items-center gap-1 hover:text-brandAmber transition-colors duration-300 ${pathname.startsWith("/shop") || pathname.startsWith("/category")
            ? "text-brandAmber"
            : ""
            }`}
        >
          Gear
          <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
        </button>

        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
          <div className="bg-brandCharcoal border border-white/5 p-6 min-w-[240px] flex flex-col gap-3 shadow-2xl backdrop-blur-xl">
            <Link
              href="/shop"
              className="px-4 py-3 hover:bg-white/5 rounded-sm text-zinc-400 hover:text-brandAmber transition-all font-black tracking-widest text-[10px]"
            >
              All Provisions
            </Link>
            <div className="h-px bg-white/5 my-1" />
            {categories?.map((category) => (
              <Link
                key={category?._id}
                href={`/category/${category?.slug?.current}`}
                className="px-4 py-3 hover:bg-white/5 rounded-sm text-zinc-400 hover:text-brandAmber transition-all font-black tracking-widest text-[10px] uppercase"
              >
                {category?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={"/about"}
        className={`hover:text-brandAmber transition-colors duration-300 ${isActive("/about") ? "text-brandAmber" : ""
          }`}
      >
        Chronicles
      </Link>

      <Link
        href={"/contact"}
        className={`hover:text-brandAmber transition-colors duration-300 ${isActive("/contact") ? "text-brandAmber" : ""
          }`}
      >
        Signal
      </Link>
    </div>
  );
};

export default HeaderMenu;
