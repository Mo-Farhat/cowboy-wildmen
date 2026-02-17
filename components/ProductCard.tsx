import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import PriceView from "./PriceView";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import Title from "./Title";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group text-sm bg-brandCharcoal border border-white/5 hover:border-brandAmber/30 transition-all duration-500 overflow-hidden">
      <div className="overflow-hidden relative bg-zinc-900 aspect-[3/4]">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`} className="block w-full h-full">
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              fill
              className={`object-cover transition-transform duration-1000 opacity-80 group-hover:opacity-100 ${product?.stock !== 0 && "group-hover:scale-110"}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-md px-4 py-2 text-[10px] font-black text-white uppercase tracking-widest">
            Out of Stock
          </div>
        )}
      </div>
      <div className="py-6 px-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-brandAmber opacity-80">{product?.variantInfo || "Gear"}</p>
          <Title className="text-xl font-black uppercase tracking-tight text-white line-clamp-1 group-hover:text-brandAmber transition-colors">{product?.name}</Title>
        </div>
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-lg font-black tracking-widest text-white/60"
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
