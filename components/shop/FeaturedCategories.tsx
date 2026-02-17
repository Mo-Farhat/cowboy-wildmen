import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { FEATURED_CATEGORIES_QUERYResult } from "@/sanity.types";

interface FeaturedCategoriesProps {
    categories: FEATURED_CATEGORIES_QUERYResult;
}

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
    if (!categories || categories.length === 0) return null;

    return (
        <section className="py-16 px-6 md:px-12 bg-black">
            <div className="container mx-auto max-w-7xl">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                        SCOUT BY SECTOR
                    </h2>
                    <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto italic">
                        &ldquo;Categorized for the modern frontiersman.&rdquo;
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category._id}
                            href={category.slug?.current ? `/category/${category.slug.current}` : '#'}
                            className="group relative overflow-hidden rounded-lg bg-brandCharcoal border border-white/5 hover:border-brandAmber/40 transition-all duration-500"
                        >
                            {/* Category Image */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden">
                                {category.image ? (
                                    <Image
                                        src={(category.image as any).asset?.url || urlFor(category.image).url()}
                                        alt={category.title || "Category"}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-brandAmber/20 to-zinc-800/40 flex items-center justify-center">
                                        <span className="text-6xl text-brandAmber/40">
                                            {category.title?.charAt(0) || '?'}
                                        </span>
                                    </div>
                                )}
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Category Info */}
                             <div className="p-8 relative">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-brandAmber transition-colors">
                                    {category.title}
                                </h3>
                                {category.description && (
                                    <p className="text-sm text-zinc-500 font-light line-clamp-2">
                                        {category.description}
                                    </p>
                                )}
                                {/* Decorative border on hover */}
                                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-brandAmber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
