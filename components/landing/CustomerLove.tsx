import { Star } from "lucide-react";

export default function CustomerLove() {
    return (
        <section className="py-32 bg-brandCharcoal/50 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="flex gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-brandAmber text-brandAmber" />
                        ))}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                        &ldquo;Wears like vintage. Fits like now.&rdquo;
                    </h2>

                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-8 bg-brandAmber" />
                        <span className="text-zinc-500 font-black uppercase tracking-[0.3em] text-sm">
                            Streetwear Journal
                        </span>
                        <div className="h-[1px] w-8 bg-brandAmber" />
                    </div>
                </div>
            </div>
        </section>
    );
}
