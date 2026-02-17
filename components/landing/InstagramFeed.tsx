import Link from "next/link";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-brandAmber font-black tracking-[0.3em] text-xs uppercase mb-4 block">Visual Archive</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                            WORN IN THE WILD.
                        </h2>
                        <p className="text-zinc-500 font-medium">
                            Join the ranks. Tag your transmissions with <span className="text-white">#COWBOYWILDMEN</span> to be featured.
                        </p>
                    </div>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm border-b-2 border-white hover:text-brandAmber hover:border-brandAmber transition-all pb-1 mb-2"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Follow the Frontier</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square bg-brandCharcoal border border-white/5 overflow-hidden relative group cursor-pointer"
                        >
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-800 bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-10">Signal {i + 1}</span>
                            </div>

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-brandAmber/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Instagram className="w-8 h-8 text-black drop-shadow-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
