import React from "react";
import Image from "next/image";
import Link from "next/link";

const Lookbook = () => {
  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[900px]">
          {/* Main Large Image */}
          <div className="relative group overflow-hidden bg-brandCharcoal h-[600px] md:h-full border border-white/5">
            <Image
              src="/images/western_chic_party_wear_lace.png"
              alt="Nightlife Aesthetic"
              fill
              className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-16 left-16 right-16">
              <span className="text-brandAmber font-black tracking-[0.4em] text-xs uppercase mb-6 block">Editorial Vol. 02</span>
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.85]">
                OWN THE <br /> NIGHT
              </h2>
              <p className="text-zinc-300 font-medium mb-10 max-w-sm text-lg italic opacity-80">
                &ldquo;When the sun sets, the real style comes out.&rdquo;
              </p>
              <Link 
                href="/shop" 
                className="brand-button brand-button-primary inline-block"
              >
                View Lookbook
              </Link>
            </div>
          </div>

          {/* Right Column with two smaller images */}
          <div className="grid grid-rows-2 gap-6 h-[700px] md:h-full">
            {/* Top Right */}
            <div className="relative group overflow-hidden bg-zinc-900 border border-white/5">
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-brandAmber/5 mix-blend-color" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                 <div className="w-full h-full border border-white/5 flex flex-col items-center justify-center gap-4">
                    <span className="text-brandAmber font-black tracking-widest text-[10px] uppercase">Review</span>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">WESTERN <br /> CHIC</h3>
                 </div>
              </div>
            </div>
            
            {/* Bottom Right */}
            <div className="relative group overflow-hidden bg-brandCharcoal border border-white/5">
              <Image
                src="/images/western_chic_patterned_shirt.png"
                alt="Detail Oriented"
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-12 left-12">
                <span className="text-brandAmber font-black tracking-widest text-[10px] uppercase mb-2 block">Featured Fit</span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">PREMIUM <br /> VISCOSE</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
