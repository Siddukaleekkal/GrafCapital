import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { InsightsGrid } from "@/components/InsightsGrid";
import { FundMakeup } from "@/components/FundMakeup";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-graf-gold/30 selection:text-white">
      <Header />
      <Hero />
      <About />
      <div className="relative">
        {/* Subtle decorative separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-graf-gold/50 to-transparent z-10" />
      </div>
      <InsightsGrid />
      <FundMakeup />
      <Footer />
    </main>
  );
}
