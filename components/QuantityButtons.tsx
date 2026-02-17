import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";
import useCartStore from "@/store";
import { Product } from "@/sanity.types";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

const QuantityButtons = ({ product, className }: Props) => {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);

  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity reduced");
    } else {
      toast.success(`${product?.name?.substring(0, 12)}... removed`);
    }
  };

  const handleAddProduct = () => {
    addItem(product);
    toast.success("Quantity increased");
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={handleRemoveProduct}
        className="w-8 h-8 rounded-sm bg-brandCharcoal border-white/10 text-white hover:bg-brandAmber hover:text-black transition-all"
      >
        <Minus className="w-3 h-3" />
      </Button>
      <span className="w-8 text-center font-black text-xs text-white">
        {itemCount}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={handleAddProduct}
        className="w-8 h-8 rounded-sm bg-brandCharcoal border-white/10 text-white hover:bg-brandAmber hover:text-black transition-all"
      >
        <Plus className="w-3 h-3" />
      </Button>
    </div>
  );
};

export default QuantityButtons;
