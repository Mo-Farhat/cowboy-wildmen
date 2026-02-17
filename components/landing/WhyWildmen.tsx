import { Box, Hammer, Shield } from "lucide-react";

const benefits = [
    {
        icon: Box,
        title: "Heavyweight Materials",
        description: "Dense fabrics that soften with wear, not wash."
    },
    {
        icon: Hammer,
        title: "Crafted to Age",
        description: "Every piece gains character, not damage."
    },
    {
        icon: Shield,
        title: "Built to Last",
        description: "Reinforced stitching. Structured silhouettes. No shortcuts."
    }
];

export default function WhyWildmen() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start p-10 bg-brandCharcoal border border-white/5 hover:border-brandAmber/30 transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 bg-brandAmber rounded-sm flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-medium">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
