import Link from "next/link";
import Logo from "./new/Logo";
import SocialMedia from "./new/SocialMedia";
import { customerCareLinks } from "@/constants";
import { getAllCategories } from "@/sanity/helpers";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/sanity.types";

const Footer = async () => {
  // Fetch categories from Sanity
  const categories = await getAllCategories();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About Cowboy Wildmen */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">COWBOY WILDMEN</h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              Independent design for the modern rebel. We build gear that lasts, tailored for the streets and worn for the journey.
            </p>
            <div className="pt-4">
               <SocialMedia
                className="justify-start opacity-60 hover:opacity-100 transition-opacity"
                iconClassName="border-white/20 text-white hover:border-brandAmber hover:bg-brandAmber hover:text-black"
                tooltipClassName="bg-brandAmber"
              />
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-black text-white uppercase tracking-widest text-sm mb-8">Shop</h3>
            <ul className="space-y-4">
              {categories && categories.length > 0 ? (
                categories.map((category: Category) => (
                  <li key={category.slug?.current || category._id}>
                    <Link
                      href={`/category/${category.slug?.current}`}
                      className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li><Link href="/shop" className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors">New Arrivals</Link></li>
                  <li><Link href="/shop" className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors">Best Sellers</Link></li>
                  <li><Link href="/shop" className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors">Outerwear</Link></li>
                  <li><Link href="/shop" className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors">Tops</Link></li>
                  <li><Link href="/shop" className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors">Bottoms</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="font-black text-white uppercase tracking-widest text-sm mb-8">Support</h3>
            <ul className="space-y-4">
              {customerCareLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li><Link href="/track" className="text-zinc-500 hover:text-brandAmber text-xs font-black uppercase tracking-widest transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-8">
            <div>
              <h3 className="font-black text-white uppercase tracking-widest text-sm mb-8">Company</h3>
              <ul className="space-y-4 text-zinc-500 text-xs font-black uppercase tracking-widest">
                <li><Link href="/about" className="hover:text-brandAmber transition-colors">Our Story</Link></li>
                <li><Link href="/sustainability" className="hover:text-brandAmber transition-colors">Sustainability</Link></li>
                <li><Link href="/careers" className="hover:text-brandAmber transition-colors">Careers</Link></li>
                <li><Link href="/press" className="hover:text-brandAmber transition-colors">Press</Link></li>
                <li><Link href="/stockists" className="hover:text-brandAmber transition-colors">Stockists</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="py-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-600">
            <p>© {new Date().getFullYear()} COWBOY WILDMEN. All rights reserved.</p>
            <div className="flex gap-8">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
