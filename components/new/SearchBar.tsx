"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { client } from "@/sanity/lib/client";
import { Input } from "../ui/input";
import AddToCartButton from "../AddToCartButton";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";
import PriceView from "../PriceView";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Fetch products from Sanity based on search input
  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }

    setLoading(true);
    try {
      const query = `*[_type == "product" && name match $search] | order(name asc)`;
      const params = { search: `${search}*` };
      const response = await client.fetch(query, params);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  // Debounce input changes to reduce API calls
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300); // Delay of 300ms

    return () => clearTimeout(debounceTimer); // Cleanup the timer
  }, [search, fetchProducts]);
  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger
        onClick={() => setShowSearch(!showSearch)}
        className="flex items-center hover:cursor-pointer"
      >
        <Search className="w-5 h-5 text-white hover:text-brandAmber transition-colors" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden bg-brandCharcoal border-white/5">
        <DialogHeader>
          <DialogTitle className="mb-6 text-4xl font-black text-white uppercase tracking-tighter">Inventory Search</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="IDENTIFY GEAR (SHIRTS, JACKETS, ETC...)"
              className="flex-1 bg-black border-white/10 rounded-sm py-8 font-black uppercase tracking-widest text-xs focus-visible:ring-brandAmber"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                onClick={() => setSearch("")}
                className="w-5 h-5 absolute top-5 right-14 text-zinc-500 hover:text-brandAmber transition-colors cursor-pointer"
              />
            )}
            <button
              type="submit"
              className="absolute right-0 top-0 bg-white/5 w-12 h-full flex items-center justify-center rounded-r-sm hover:bg-brandAmber hover:text-black transition-all"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll border border-white/5 rounded-sm bg-black mt-6">
          <div className="">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-brandAmber" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 animate-pulse">
                  Scanning Archives...
                </p>
              </div>
            ) : products?.length ? (
              products.map((product: Product) => (
                <div
                  key={product?._id}
                  className="bg-black overflow-hidden border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center p-4">
                    <Link
                      href={`/product/${product?.slug?.current}`}
                      onClick={() => setShowSearch(false)}
                      className="h-20 w-20 md:h-28 md:w-28 flex-shrink-0 border border-white/10 rounded-sm overflow-hidden group bg-brandCharcoal"
                    >
                      {product?.images && (
                        <Image
                          width={200}
                          height={200}
                          src={urlFor(product?.images[0]).url()}
                          alt={"productImage"}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                    </Link>
                    <div className="px-6 py-2 flex-grow">
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          onClick={() => setShowSearch(false)}
                        >
                          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight line-clamp-1 group-hover:text-brandAmber transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1 line-clamp-1">
                            {product?.variantInfo || "Frontier Provision"}
                          </p>
                        </Link>
                        <PriceView
                          price={product?.price}
                          discount={product?.discount}
                          className="md:text-xl font-black text-white"
                        />
                      </div>

                      <div className="w-48 mt-4">
                        <AddToCartButton product={product} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-24 px-6">
                {search && products?.length === 0 ? (
                  <div className="space-y-4">
                    <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">
                      Zero matches for: <span className="text-brandAmber underline">{search}</span>
                    </p>
                    <p className="text-zinc-600 text-[10px] font-black uppercase">Try identifying by category or material.</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-6 rounded-full bg-white/5">
                        <Search className="w-10 h-10 text-brandAmber" />
                    </div>
                    <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em]">
                      Search and explore the Cowboy Wildmen collection.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
