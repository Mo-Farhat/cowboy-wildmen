import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"}>
      <div className={cn("inline-block", className)}>
        <span className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter hover:text-brandAmber transition-colors">
            COWBOY<br className="md:hidden" /> WILDMEN
        </span>
      </div>
    </Link>
  );
};

export default Logo;
