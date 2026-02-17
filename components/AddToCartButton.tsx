"use client";
import { Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import { Button } from "./ui/button";
import useCartStore from "@/store";
import QuantityButtons from "./QuantityButtons";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div className="w-full h-14 flex items-center">
      {itemCount ? (
        <div className="text-sm w-full bg-black/40 p-4 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">In Saddle</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t border-white/5 pt-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Total</span>
            <PriceFormatter
              amount={product?.price ? product.price * itemCount : 0}
              className="font-black text-brandAmber"
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {
            addItem(product);
            toast.success(
              `${product?.name?.substring(0, 12)}... added successfully!`
            );
          }}
          disabled={isOutOfStock}
          className={cn(
            "brand-button brand-button-primary w-full h-full text-xs",
            className
          )}
        >
          {isOutOfStock ? "Depleted" : "Add to Cart"}
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
