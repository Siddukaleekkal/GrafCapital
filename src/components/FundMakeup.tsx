"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, TrendingUp, Landmark, LineChart } from "lucide-react";

const portfolio = [
    {
        name: "Private Equity",
        value: 45,
        icon: Briefcase,
        description: "Direct investments in high-growth private companies and structured buyouts.",
        stocks: ["Stripe", "SpaceX", "Databricks", "Epic Games", "Plaid"]
    },
    {
        name: "Real Estate",
        value: 25,
        icon: Building2,
        description: "Premium commercial, logistics, and industrial properties across global markets.",
        stocks: ["Prologis", "Equinix", "Public Storage", "Simon Property", "Welltower"]
    },
    {
        name: "Credit & Yield",
        value: 20,
        icon: TrendingUp,
        description: "High-yield debt, direct lending, and bespoke structured credit instruments.",
        stocks: ["Ares Capital", "Oaktree", "Apollo Global", "Blackstone", "KKR"]
    },
    {
        name: "Hedge Fund Solutions",
        value: 10,
        icon: Landmark,
        description: "Absolute return strategies, macro economics, and quantitative market trading.",
        stocks: ["Bridgewater", "Citadel", "Millennium", "Two Sigma", "D.E. Shaw"]
    },
];

export function FundMakeup() {
    return (
        <section id="performance" className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                <div className="text-center max-w-3xl mb-20 flex flex-col items-center">
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-graf-gold mb-4 relative">
                        <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-graf-gold" />
                        Fund Architecture
                        <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-graf-gold" />
                    </span>
                    <h2 className="font-serif text-4xl lg:text-6xl font-light leading-tight text-white mb-6">
                        Strategic Allocation
                    </h2>
                    <p className="font-sans text-lg text-gray-400 font-light leading-relaxed">
                        Our portfolio is meticulously constructed to capture asymmetric upside while strictly capping downside exposure across four core foundational pillars.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {portfolio.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-[#0A0A0A] border border-white/5 hover:border-graf-gold/40 rounded-xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.15)] relative overflow-hidden cursor-default"
                            >
                                {/* Decorative background number */}
                                <div className="absolute -right-6 -top-6 text-[140px] font-serif font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none select-none">
                                    {item.value}
                                </div>

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-graf-gold group-hover:scale-110 group-hover:bg-graf-gold/10 transition-all duration-500">
                                        <Icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-serif text-3xl text-white font-light">
                                        {item.value}<span className="text-graf-gold text-xl">%</span>
                                    </span>
                                </div>

                                <h3 className="font-sans text-lg font-medium text-white tracking-wide uppercase mb-3 relative z-10">
                                    {item.name}
                                </h3>

                                <p className="font-sans text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                                    {item.description}
                                </p>

                                <div className="border-t border-white/10 pt-6 relative z-10">
                                    <h4 className="font-sans text-[11px] text-graf-gold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                                        <LineChart size={14} />
                                        Core Holdings
                                    </h4>
                                    <ul className="flex flex-col gap-3">
                                        {item.stocks.map((stock, i) => (
                                            <li key={i} className="font-sans text-[13px] text-gray-400 font-light flex items-center gap-3 group/item cursor-crosshair">
                                                <div className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-graf-gold group-hover/item:scale-150 transition-all duration-300" />
                                                <span className="group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">
                                                    {stock}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
