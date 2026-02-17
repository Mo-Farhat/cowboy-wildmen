import { Product } from "@/sanity.types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProductCharacteristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible className="border-t border-white/5">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="font-black uppercase tracking-widest text-xs hover:text-brandAmber transition-colors py-6">
          Technical Specifications
        </AccordionTrigger>
        <AccordionContent className="pb-8 space-y-4">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Origin</span>
            <span className="text-sm font-bold">{product?.brand || "COWBOY WILDMEN"}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Deployment</span>
            <span className="text-sm font-bold">{product?.collection || "Frontier Essential"}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Classification</span>
            <span className="text-sm font-bold">{product?.variant || "Heavyweight"}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Inventory Status</span>
            <span className="text-sm font-bold text-brandAmber">{product?.stock ? "Active" : "Depleted"}</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
