import Link from "next/link";
import Image from "next/image";

const collections = [
    { 
        name: "Heavyweighters", 
        image: "/_next/image?url=%2Fhome%2Ffarhat%2F.gemini%2Fantigravity%2Fbrain%2Fbec0e9a7-cedc-4650-ae76-ed93c4cc13c4%2Fcowboy_wildmen_category_heavyweighters_hero_1771331044059.png&w=1080&q=75",
        tag: "Core Armor"
    },
    { 
        name: "Outerwear", 
        image: "/_next/image?url=%2Fhome%2Ffarhat%2F.gemini%2Fantigravity%2Fbrain%2Fbec0e9a7-cedc-4650-ae76-ed93c4cc13c4%2Fcowboy_wildmen_hero_varsity_1771330881978.png&w=1080&q=75",
        tag: "Frontier Proof"
    },
    { 
        name: "Daily Drivers", 
        image: "/_next/image?url=%2Fhome%2Ffarhat%2F.gemini%2Fantigravity%2Fbrain%2Fbec0e9a7-cedc-4650-ae76-ed93c4cc13c4%2Fcowboy_wildmen_leather_landscape_1771330948154.png&w=1080&q=75",
        tag: "Urban Utility"
    },
    { 
        name: "Rare Drops", 
        image: "/_next/image?url=%2Fhome%2Ffarhat%2F.gemini%2Fantigravity%2Fbrain%2Fbec0e9a7-cedc-4650-ae76-ed93c4cc13c4%2Fcowboy_wildmen_lookbook_editorial_2_1771330908107.png&w=1080&q=75",
        tag: "Limited Supply"
    },
];

export default function FeaturedCollections() {
    return (
        <section className="py-32 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-6">
                        <span className="text-brandAmber font-black tracking-[0.4em] text-xs uppercase">The Foundation</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                            FRONTIER <br /> ESSENTIALS
                        </h2>
                        <p className="text-zinc-500 max-w-2xl text-xl font-medium italic">
                            &ldquo;Built for the wild, tailored for the city.&rdquo;
                        </p>
                    </div>
                    <Link 
                        href="/shop" 
                        className="brand-button brand-button-outline mb-2"
                    >
                        Scout Full Inventory
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collections.map((collection, index) => (
                        <Link
                            key={index}
                            href={`/shop`}
                            className="group block relative overflow-hidden bg-brandCharcoal aspect-[3/4] border border-white/5 hover:border-brandAmber/40 transition-all duration-500"
                        >
                            <Image
                                src={collection.image}
                                alt={collection.name}
                                fill
                                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <span className="text-brandAmber font-black uppercase tracking-[0.3em] text-[10px] mb-3 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {collection.tag}
                                </span>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-brandAmber transition-colors">
                                    {collection.name}
                                </h3>
                                <div className="mt-6 flex items-center gap-2 text-white font-black uppercase tracking-widest text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Enter Category</span>
                                    <div className="h-[1px] w-6 bg-white" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
