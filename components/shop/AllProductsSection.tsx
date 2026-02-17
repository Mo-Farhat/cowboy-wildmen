"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Loader2 } from "lucide-react";
import { FEATURED_CATEGORIES_QUERYResult, ALL_PRODUCTS_QUERYResult } from "@/sanity.types";

interface AllProductsSectionProps {
    categories: FEATURED_CATEGORIES_QUERYResult;
    initialProducts: ALL_PRODUCTS_QUERYResult;
}

export default function AllProductsSection({
    categories,
    initialProducts,
}: AllProductsSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [products, setProducts] = useState(initialProducts);
    const [loading, setLoading] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const fetchProducts = async (categorySlug: string) => {
        try {
            setLoading(true);
            let query = "";

            if (categorySlug === "all") {
                query = `*[_type == "product"] | order(name asc)`;
            } else {
                query = `*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`;
            }

            const data = await client.fetch(query, { categorySlug });
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedCategory !== "all") {
            fetchProducts(selectedCategory);
        } else {
            setProducts(initialProducts);
        }
    }, [selectedCategory, initialProducts]);

    const currentCategoryName =
        selectedCategory === "all"
            ? "All Products"
            : categories.find((c) => c.slug?.current === selectedCategory)?.title ||
            "All Products";

    return (
        <section className="py-24 px-6 md:px-12 bg-black">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header with Filter */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                            THE ARMORY.
                        </h2>
                        <p className="text-lg text-zinc-500 font-medium">
                            Explore the full Cowboy Wildmen collection. Built for the bold.
                        </p>
                    </div>

                    {/* Category Filter Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 px-6 py-3 bg-black border-2 border-white/10 rounded-sm hover:border-brandAmber transition-all duration-300 min-w-[220px] justify-between"
                        >
                            <span className="text-white font-black uppercase tracking-widest text-xs">
                                {currentCategoryName}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-brandAmber transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-full bg-brandCharcoal rounded-sm shadow-2xl border border-white/5 p-2 z-50">
                                <button
                                    onClick={() => {
                                        setSelectedCategory("all");
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCategory === "all"
                                        ? "bg-brandAmber text-black"
                                        : "hover:bg-white/5 text-zinc-400 font-black uppercase tracking-widest text-[10px]"
                                        }`}
                                >
                                    All Products
                                </button>
                                {categories.filter(cat => cat.slug?.current).map((category) => (
                                    <button
                                        key={category._id}
                                        onClick={() => {
                                            if (category.slug?.current) {
                                                setSelectedCategory(category.slug.current);
                                                setIsDropdownOpen(false);
                                            }
                                        }}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors capitalize ${selectedCategory === category.slug?.current
                                            ? "bg-brandAmber text-black"
                                            : "hover:bg-white/5 text-zinc-400 font-black uppercase tracking-widest text-[10px]"
                                            }`}
                                    >
                                        {category.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="flex items-center gap-3 text-brandAmber">
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span className="text-lg font-light">Loading products...</span>
                        </div>
                    </div>
                ) : products?.length > 0 ? (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        >
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {products.map((product: any) => (
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                <ProductCard key={product._id} product={product as any} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-zinc-500 text-lg font-light">
                            No products found in this category.
                        </p>
                    </div>
                )}

                {/* Product Count */}
                {!loading && products?.length > 0 && (
                    <div className="text-center mt-8">
                        <p className="text-zinc-500 font-light">
                            Showing {products.length} product{products.length !== 1 ? "s" : ""}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
