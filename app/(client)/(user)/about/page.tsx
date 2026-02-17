import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Section 1: Our Story - Hero */}
      <section className="w-full border-b border-white/5">
        <div className="grid md:grid-cols-2 min-h-[700px]">
          {/* Left Column - Image Placeholder */}
          <div className="relative h-[500px] md:h-full w-full bg-zinc-900 group overflow-hidden">
            <div className="absolute inset-0 bg-zinc-800 transition-transform duration-1000 group-hover:scale-105" />
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
                Cowboy Wildmen was built on the belief that clothing should carry stories, not expiration dates.
              </p>
              <p>
                Inspired by western landscapes, worn-in workwear, and urban street culture, every garment is designed to endure movement, weather, and time.
              </p>
              <p className="text-white font-bold">
                Not trend-driven. Not disposable. Just built right.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="block text-brandAmber font-black text-xl">2024</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Established</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-brandAmber font-black text-xl">HEAVY</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Fabric Weight</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-brandAmber font-black text-xl">REINFORCED</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Stitching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="py-32 bg-brandCharcoal/30">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-16">
            <div className="max-w-md">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">The Mission</h2>
                <div className="h-2 w-20 bg-brandAmber mb-8" />
                <p className="text-2xl font-bold text-zinc-200 leading-tight">
                    To create durable apparel that blends heritage grit with modern street identity.
                </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12 flex-1">
                {[
                    { title: "Longevity over trends", desc: "We build for decades, not seasons." },
                    { title: "Craft over speed", desc: "No shortcuts in production. Every seam matters." },
                    { title: "Identity over imitation", desc: "Designed for those who stand their ground." },
                    { title: "Substance over hype", desc: "No noise. Just quality gear." }
                ].map((val, i) => (
                    <div key={i} className="flex gap-6 group">
                        <span className="text-brandAmber font-black text-2xl opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                        <div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-2">{val.title}</h3>
                            <p className="text-zinc-500 font-medium">{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Values Backdrop */}
      <section className="relative py-40 overflow-hidden bg-zinc-900 border-y border-white/5">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-widest text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                BUILT TO ENDURE
            </h2>
            <div className="max-w-3xl mx-auto">
                <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
                    &ldquo;EVERY PIECE GAINS CHARACTER, NOT DAMAGE.&rdquo;
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
