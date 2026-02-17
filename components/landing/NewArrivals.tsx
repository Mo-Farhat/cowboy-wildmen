import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newArrivals = [
    { id: 1, name: "Reinforced Field Jacket", price: "$210.00", tag: "Limited", image: "/images/cowboy_wildmen_category_outerwear_field_jacket_hero.png" },
    { id: 2, name: "Heavyweight Corduroy Pants", price: "$145.00", tag: "New Drop", image: "/images/cowboy_wildmen_category_heavyweighters_hero.png" },
    { id: 3, name: "Urban Frontier Graphic Tee", price: "$55.00", tag: "Restocked", image: "/images/cowboy_wildmen_lookbook_editorial_2.png" },
    { id: 4, name: "Moleskin Work Shirt", price: "$130.00", tag: "Rare", image: "/images/cowboy_wildmen_hero_varsity.png" },
];

export default function NewArrivals() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <span className="text-brandAmber font-black tracking-[0.4em] text-xs uppercase">The Frontier Files</span>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                        FRESH PROVISIONS.
                    </h2>
                    <p className="text-zinc-500 max-w-2xl font-medium">
                        New silhouettes designed for endurance. Once these are gone, they vanish back into the wild.
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
