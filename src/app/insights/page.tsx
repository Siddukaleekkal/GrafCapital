"use client";

import { Header } from "@/components/Header";
import { InsightsGrid } from "@/components/InsightsGrid";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function InsightsArchivePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-graf-gold/30">
            <Header />

            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif mb-6">
                            Investment <em className="text-graf-gold italic leading-none">Research</em>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                            Deep dives into private markets, technology shifts, and structural megatrends shaping the modern investment landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The same InsightsGrid but as the main content */}
            <div className="bg-black">
                <InsightsGrid />
            </div>

            <Footer />
        </main>
    );
}
