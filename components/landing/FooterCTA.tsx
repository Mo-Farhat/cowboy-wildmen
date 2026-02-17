export default function FooterCTA() {
    return (
        <section className="py-24 bg-brandAmber">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-brandAmber p-12 md:p-20 border-4 border-black">
                    <div className="max-w-xl text-left">
                        <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-4">
                            JOIN THE WILDMEN
                        </h2>
                        <p className="text-black/80 text-lg font-bold">
                            Early access to drops, rare restocks, and community releases.<br />
                            No spam. Just gear.
                        </p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col sm:flex-row gap-0 border-4 border-black bg-black">
                        <input 
                            type="email" 
                            placeholder="ENTER YOUR EMAIL" 
                            className="bg-black text-white px-6 py-4 outline-none font-black uppercase tracking-widest text-xs min-w-[300px]"
                        />
                        <button className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-brandAmber transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
