import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Section 1: Contact Intro */}
      <section className="relative w-full py-32 border-b border-white/5 overflow-hidden bg-brandCharcoal/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandAmber/5 rounded-full blur-[120px]" />
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-8">
            <span className="text-brandAmber font-black uppercase tracking-[0.4em] text-xs">Reach Out</span>
            
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              WE&apos;VE<br />GOT YOU.
            </h1>

            <div className="space-y-4 text-xl md:text-2xl text-zinc-400 font-bold max-w-2xl">
              <p>Need sizing help, order updates, or styling advice?</p>
              <p className="text-white">Real people respond. Usually within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Industrial Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Form */}
                <div className="space-y-12">
                     <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Name</label>
                                <input type="text" className="w-full bg-transparent border-b-2 border-zinc-800 py-4 focus:border-brandAmber outline-none text-lg font-bold transition-colors uppercase" placeholder="Enter Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email</label>
                                <input type="email" className="w-full bg-transparent border-b-2 border-zinc-800 py-4 focus:border-brandAmber outline-none text-lg font-bold transition-colors uppercase" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">How can we help?</label>
                            <textarea className="w-full bg-transparent border-b-2 border-zinc-800 py-4 focus:border-brandAmber outline-none text-lg font-bold transition-colors uppercase h-32 resize-none" placeholder="Message Details"></textarea>
                        </div>
                        <button className="brand-button brand-button-primary w-full md:w-auto">
                            Send Transmission
                        </button>
                     </form>
                </div>

                {/* Contact Links */}
                <div className="space-y-16">
                    <div className="space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Transmission</h3>
                        <a href="mailto:support@cowboywildmen.com" className="text-3xl font-black uppercase tracking-tight hover:text-brandAmber transition-colors block">
                            SUPPORT@<br />COWBOYWILDMEN.COM
                        </a>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Social Intelligence</h3>
                        <div className="flex gap-8">
                             {['Instagram', 'X', 'TikTok'].map(plat => (
                                <Link key={plat} href="#" className="font-black uppercase tracking-widest text-xs hover:text-brandAmber transition-colors">{plat}</Link>
                             ))}
                        </div>
                    </div>

                    <div className="p-8 bg-brandCharcoal/50 border border-white/5 space-y-4">
                        <h4 className="font-black uppercase tracking-widest text-xs text-brandAmber italic">Operational Window</h4>
                        <p className="font-bold text-zinc-400 leading-relaxed">
                            Monday &mdash; Friday<br />
                            09:00 &mdash; 18:00 EST
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
