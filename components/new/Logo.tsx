import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"}>
      <div className={cn("relative w-24 h-auto", className)}>
        <Image
          src="/images/nuzi-logo.png"
          alt="Nuzii Logo"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
