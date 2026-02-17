import Link from "next/link";
import Image from "next/image";
import { Eye, ShoppingBag } from "lucide-react";

const products = [
    { id: 1, name: "Viscose Geometric Shirt", price: "LKR 85", category: "Designer Shirts", image: "/images/western_chic_patterned_shirt.png" },
    { id: 2, name: "Premium Lace Button-Down", price: "LKR 95", category: "Party Wear", image: "/images/western_chic_party_wear_lace.png" },
    { id: 3, name: "Midnight Varsity Jacket", price: "LKR 150", category: "Outerwear", image: "/images/western_chic_varsity_jacket.png" },
    { id: 4, name: "Statement Party Shirt", price: "LKR 90", category: "Night Edit", image: "/images/western_chic_patterned_shirt.png" },
];

export default function BestSellers() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="space-y-4">
                        <span className="text-brandAmber font-black tracking-[0.3em] text-xs uppercase">The Hype</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            TRENDING NOW.
                        </h2>
                        <p className="text-zinc-500 font-medium max-w-xl">
                            Styles moving fast. Premium fits for the modern nightlife. 
                            Secure your look before the archive closes.
                        </p>
                    </div>
                    <Link
                        href="/shop"
                        className="text-white hover:text-brandAmber font-black uppercase tracking-widest text-sm border-b-2 border-white hover:border-brandAmber transition-all pb-1 mb-2"
                    >
                        View All Gear
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-brandCharcoal border border-white/5 overflow-hidden transition-all duration-500 hover:border-brandAmber/30">
                            <div className="aspect-[3/4] bg-zinc-900 relative overflow-hidden">
                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />

                                {/* Quick Actions */}
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <button className="p-3 bg-white text-black border border-transparent hover:bg-black hover:text-white hover:border-white transition-all duration-300" aria-label="Quick View">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button className="p-3 bg-brandAmber text-black border border-transparent hover:bg-black hover:text-brandAmber hover:border-brandAmber transition-all duration-300" aria-label="Add to Cart">
                                        <ShoppingBag className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-[10px] font-black uppercase tracking-widest text-brandAmber mb-2">{product.category}</p>
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-brandAmber transition-colors">{product.name}</h3>
                                <p className="text-white font-black tracking-wider opacity-60">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
