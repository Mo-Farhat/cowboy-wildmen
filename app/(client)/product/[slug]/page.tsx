import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import ImageView from "@/components/new/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { getProductBySlug } from "@/sanity/helpers";
import { Heart } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

import { TbTruckDelivery } from "react-icons/tb";
import { PortableText } from "@portabletext/react";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-20 py-16">
        {product?.images && (
            <div className="w-full md:w-1/2">
                <ImageView images={product?.images} />
            </div>
        )}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="space-y-4">
             <span className="text-brandAmber font-black uppercase tracking-[0.3em] text-[10px]">Premium Grade Gear</span>
             <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">{product?.name}</h1>
             <PriceView
                price={product?.price}
                discount={product?.discount}
                className="text-2xl font-black text-white"
             />
          </div>

          {product?.stock && (
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brandAmber animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-widest text-brandAmber">
                  Available in Stock
                </p>
            </div>
          )}

          {product?.description && (
            <div className="text-zinc-400 font-medium leading-relaxed max-w-xl border-t border-white/5 pt-8">
              <PortableText
                value={product.description}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-4">{children}</p>
                    ),
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-black uppercase mb-4 text-white">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-black uppercase mb-3 text-white">
                        {children}
                      </h2>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="space-y-2 mb-4">
                        {children}
                      </ul>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="flex items-start gap-3">
                         <span className="text-brandAmber mt-1.5">•</span>
                         <span>{children}</span>
                      </li>
                    ),
                  },
                }}
              />
            </div>
          )}
          
          <div className="flex flex-col gap-4 border-t border-white/5 pt-8">
            <div className="flex items-center gap-4">
                <AddToCartButton
                    product={product}
                    className="brand-button brand-button-primary flex-1 py-4"
                />
                <button className="p-4 border-2 border-white/10 hover:border-brandAmber transition-colors group">
                    <Heart className="w-6 h-6 group-hover:fill-brandAmber group-hover:text-brandAmber transition-all" />
                </button>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 text-center">
                Limited Drop — Once it's gone, it's gone for good.
            </p>
          </div>

          <ProductCharacteristics product={product} />

          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
            <div className="p-6 bg-brandCharcoal/50 border border-white/5 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-brandAmber">Heavyweight Build</p>
              <p className="text-sm text-zinc-500 font-medium">Dense fabrics built for durability and character.</p>
            </div>
            <div className="p-6 bg-brandCharcoal/50 border border-white/5 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-brandAmber">Expedited Transit</p>
              <p className="text-sm text-zinc-500 font-medium">Tracked shipping on all global transmissions.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
