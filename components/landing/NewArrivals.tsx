import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newArrivals = [
    { id: 1, name: "Viscose Geometric Shirt", price: "$85.00", tag: "New Drop", image: "/images/western_chic_patterned_shirt.png" },
    { id: 2, name: "Premium Lace Button-Down", price: "$95.00", tag: "Hot", image: "/images/western_chic_party_wear_lace.png" },
    { id: 3, name: "Midnight Varsity Jacket", price: "$150.00", tag: "Restocked", image: "/images/western_chic_varsity_jacket.png" },
    { id: 4, name: "Slim Fit Western Trouser", price: "$110.00", tag: "Trending", image: "/images/western_chic_pants_stylish.png" },
];

export default function NewArrivals() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <span className="text-brandAmber font-black tracking-[0.4em] text-xs uppercase">Fresh Drops</span>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                        JUST LANDED.
                    </h2>
                    <p className="text-zinc-500 max-w-2xl font-medium">
                        New silhouettes designed for the modern cowboy. Secure your size before they're gone.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {newArrivals.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-brandCharcoal relative overflow-hidden mb-6 border border-white/5 transition-all duration-500 group-hover:border-brandAmber/40">
                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Tag */}
                                <div className="absolute top-0 right-0 bg-brandAmber px-4 py-2 text-[10px] font-black text-black uppercase tracking-widest">
                                    {product.tag}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-brandAmber transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-zinc-500 font-black tracking-widest text-xs">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/shop?sort=newest"
                        className="brand-button brand-button-outline inline-flex items-center gap-4"
                    >
                        <span>Scout All Arrivals</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
