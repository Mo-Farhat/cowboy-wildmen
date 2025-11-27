import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"}>
      <div className={cn("relative w-24 h-auto", className)}>
        <img
          src="/images/nuzi-logo.png"
          alt="Nuzii Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
