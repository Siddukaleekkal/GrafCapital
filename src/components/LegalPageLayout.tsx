"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, subtitle, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-graf-gold/30">
      <Header />

      {/* Hero / Header */}
      <section className="pt-40 md:pt-48 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              {title}
            </h1>
            <div className="h-1 w-20 bg-graf-gold mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-invert prose-graf-gold prose-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 font-light leading-loose space-y-12"
          >
            {children}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
