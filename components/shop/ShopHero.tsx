"use client";

import Image from "next/image";
import Link from "next/link";
import { SHOP_HERO_QUERYResult } from "@/sanity.types";

interface ShopHeroProps {
    heroes: SHOP_HERO_QUERYResult;
}

export default function ShopHero({ heroes }: ShopHeroProps) {
    if (!heroes || heroes.length === 0) return null;

    const currentHero = heroes[0];

    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/cowboy-shop.jpeg"
                    alt={currentHero.mainHeading || "Shop Hero"}
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 flex flex-col items-center justify-center text-center">
                <div className="max-w-5xl space-y-8">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="text-brandAmber font-black tracking-[0.4em] text-xs uppercase">
                            {currentHero.seasonTitle || "Proprietary Collection"}
                        </p>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] uppercase drop-shadow-2xl">
                            {currentHero.mainHeading}
                        </h1>
                        {currentHero.subheading && (
                            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto italic">
                                &ldquo;{currentHero.subheading}&rdquo;
                            </p>
                        )}
                    </div>

                    {/* CTA Buttons - Square and Bold */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        {currentHero.primaryButtonText && currentHero.primaryButtonLink && (
                            <Link
                                href={currentHero.primaryButtonLink}
                                className="brand-button brand-button-primary"
                            >
                                {currentHero.primaryButtonText}
                            </Link>
                        )}
                        {currentHero.secondaryButtonText && currentHero.secondaryButtonLink && (
                            <Link
                                href={currentHero.secondaryButtonLink}
                                className="brand-button brand-button-outline"
                            >
                                {currentHero.secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
