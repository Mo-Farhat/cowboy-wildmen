import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-nuziiBeige">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/landing/hero.png"
                    alt="Nuzii Modest Fashion"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-nuziiBeige/80 to-transparent/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-start max-w-6xl">
                <div className="max-w-xl space-y-6 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight text-nuziiText leading-[1.1]">
                        Elevate Your <br />
                        <span className="font-medium text-nuziiRoseGoldDark">Everyday Style</span>
                    </h1>
                    <p className="text-lg md:text-xl text-nuziiTextLight font-light max-w-md">
                        Modest friendly fashion that feels premium without the high price.
                        Timeless pieces for the modern woman.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/shop"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-nuziiRoseGold hover:bg-nuziiRoseGoldDark text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <span className="font-medium tracking-wide">Shop Now</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
