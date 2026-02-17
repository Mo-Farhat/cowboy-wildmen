import Hero from "@/components/landing/Hero";
import TickerStrip from "@/components/landing/TickerStrip";
import FeaturedCollections from "@/components/landing/FeaturedCollections";
import BestSellers from "@/components/landing/BestSellers";
import NewArrivals from "@/components/landing/NewArrivals";
import Lookbook from "@/components/landing/Lookbook";
import WhyWildmen from "@/components/landing/WhyWildmen";
import CustomerLove from "@/components/landing/CustomerLove";
import InstagramFeed from "@/components/landing/InstagramFeed";
import FooterCTA from "@/components/landing/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <TickerStrip />
      <FeaturedCollections />
      <BestSellers />
      <NewArrivals />
      <Lookbook />
      <WhyWildmen />
      <CustomerLove />
      <InstagramFeed />
      <FooterCTA />
    </main>
  );
}
