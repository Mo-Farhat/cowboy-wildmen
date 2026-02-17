"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { Product, NEW_ARRIVALS_QUERYResult, BEST_SELLING_QUERYResult, TOP_RATED_QUERYResult } from "@/sanity.types";

interface FeaturedProductsProps {
    newArrivals: NEW_ARRIVALS_QUERYResult;
    bestSelling: BEST_SELLING_QUERYResult;
    topRated: TOP_RATED_QUERYResult;
}

type TabType = "new" | "best" | "top";

export default function FeaturedProducts({
    newArrivals,
    bestSelling,
    topRated,
}: FeaturedProductsProps) {
    const [activeTab, setActiveTab] = useState<TabType>("new");

    const tabs = [
        { id: "new" as TabType, label: "New Arrival", products: newArrivals },
        { id: "best" as TabType, label: "Best Selling", products: bestSelling },
        { id: "top" as TabType, label: "Top Rated", products: topRated },
    ];

    const currentProducts = tabs.find((tab) => tab.id === activeTab)?.products || [];

    return (
        <section className="py-24 px-6 md:px-12 bg-black">
            <div className="container mx-auto max-w-7xl">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                        FEATURED GEAR
                    </h2>
                    <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto italic">
                        &ldquo;Selected for their endurance and city-ready silhouettes.&rdquo;
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 rounded-sm font-black uppercase tracking-widest text-xs transition-all duration-300 ${activeTab === tab.id
                                ? "bg-brandAmber text-black shadow-2xl"
                                : "bg-white/5 text-zinc-500 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Products Grid - 3 rows x 4 columns = 12 products */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        {currentProducts?.slice(0, 12).map((product) => (
                            <ProductCard key={product._id} product={product as Product} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {currentProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-zinc-500 text-lg">
                            No products available in this category yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
