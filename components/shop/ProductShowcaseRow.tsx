import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product, PRODUCT_SHOWCASE_QUERYResult } from "@/sanity.types";

interface ProductShowcaseRowProps {
    showcases: PRODUCT_SHOWCASE_QUERYResult;
}

const bgColorMap: Record<string, string> = {
    "rose-gold": "bg-brandAmber/10",
    beige: "bg-black",
    cream: "bg-brandCharcoal",
    sand: "bg-zinc-800/20",
    white: "bg-white",
};

export default function ProductShowcaseRow({ showcases }: ProductShowcaseRowProps) {
    if (!showcases || showcases.length === 0) return null;

    return (
        <div className="space-y-16 py-12">
            {showcases.map((showcase) => {
                const bgClass = bgColorMap[showcase.backgroundColor || "cream"] || "bg-brandCharcoal";

                return (
                    <section
                        key={showcase._id}
                        className={`${bgClass} py-12 px-6 md:px-12 rounded-3xl`}
                    >
                        <div className="container mx-auto max-w-7xl">
                            {/* Section Header */}
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                                    {showcase.title}
                                </h2>
                                {showcase.subtitle && (
                                    <p className="text-lg text-zinc-500 font-light">
                                        {showcase.subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Products Grid - 4 columns */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                {showcase.products?.slice(0, 4).map((product) => (
                                    <ProductCard key={product._id} product={product as Product} />
                                ))}
                            </div>

                            {/* CTA Button */}
                            {showcase.ctaText && showcase.ctaLink && (
                                <div className="text-center pt-4">
                                    <Link
                                        href={showcase.ctaLink}
                                        className="brand-button brand-button-primary"
                                    >
                                        {showcase.ctaText}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
