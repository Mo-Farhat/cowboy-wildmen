import Link from "next/link";
import { Eye, ShoppingBag } from "lucide-react";

const products = [
    { id: 1, name: "Field Varsity Jacket", price: "$189.00", category: "Outerwear" },
    { id: 2, name: "Vintage Gurkha Pants", price: "$125.00", category: "Bottoms" },
    { id: 3, name: "Distressed Denim Shirt", price: "$95.00", category: "Provisions" },
    { id: 4, name: "Heavyweight Box Hoodie", price: "$110.00", category: "Essentials" },
];

export default function BestSellers() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="space-y-4">
                        <span className="text-brandAmber font-black tracking-[0.3em] text-xs uppercase">Hall of Fame</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            BATTLE-TESTED FAVORITES.
                        </h2>
                        <p className="text-zinc-500 font-medium max-w-xl">
                            Proven designs that have survived the frontier and conquered the pavement. 
                            These are the staples of the Cowboy Wildmen wardrobe.
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
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-800 p-8 text-center">
                                    <div className="w-full h-full border border-dashed border-zinc-700 flex items-center justify-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-20">No Visual Data</span>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <button className="p-4 bg-white text-black hover:bg-brandAmber transition-colors" aria-label="Quick View">
                                        <Eye className="w-5 h-5 font-black" />
                                    </button>
                                    <button className="p-4 bg-white text-black hover:bg-brandAmber transition-colors" aria-label="Add to Cart">
                                        <ShoppingBag className="w-5 h-5" />
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
