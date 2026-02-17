import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Section 1: Our Story - Hero */}
      <section className="w-full border-b border-white/5">
        <div className="grid md:grid-cols-2 min-h-[700px]">
          {/* Left Column - Image */}
          <div className="relative h-[500px] md:h-full w-full bg-zinc-900 group overflow-hidden">
            <Image
              src="/images/western_chic_polo_fitted.png"
              alt="Western Chic Aesthetic"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 space-y-12">
            <div className="space-y-4">
               <span className="text-brandAmber font-black uppercase tracking-[0.3em] text-sm">Our Origin</span>
               <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                 WILD AT HEART.<br />URBAN BY DESIGN.
               </h1>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg font-medium leading-relaxed max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-white font-bold">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="block text-brandAmber font-black text-xl">2024</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Established</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-brandAmber font-black text-xl">PREMIUM</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Viscose & Silk</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-brandAmber font-black text-xl">TAILORED</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Western Fit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="py-32 bg-brandCharcoal/30">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Night Vision</h2>
                  <div className="h-2 w-20 bg-brandAmber" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-zinc-200 leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            
            <div className="relative w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-white/5">
                <Image
                  src="/images/western_chic_patterned_shirt.png"
                  alt="Patterned Shirt Detail"
                  fill
                  className="object-cover opacity-70"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Principles */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                {[
                    { title: "Longevity over trends", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                    { title: "Metropolitan Grit", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                    { title: "Evening Sophistication", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
                    { title: "Substance over hype", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
                ].map((val, i) => (
                    <div key={i} className="flex gap-6 group">
                        <span className="text-brandAmber font-black text-2xl opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-brandAmber transition-colors">{val.title}</h3>
                            <p className="text-zinc-500 font-medium leading-relaxed">{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Section 4: Values Backdrop */}
      <section className="relative py-40 overflow-hidden bg-zinc-900 border-y border-white/5">
        <Image
          src="/images/western_chic_varsity_jacket.png"
          alt="Varsity Jacket Backdrop"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-widest text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                BUILT TO ENDURE
            </h2>
            <div className="max-w-3xl mx-auto">
                <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
                    &ldquo;LOREM IPSUM DOLOR SIT AMET.&rdquo;
                </p>
                <Link 
                    href="/shop" 
                    className="brand-button brand-button-primary"
                >
                    Explore the Collection
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
