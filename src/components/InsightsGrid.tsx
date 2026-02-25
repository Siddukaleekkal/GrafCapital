"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const INSIGHTS = [
    {
        id: 1,
        category: "Private Equity",
        title: "The Secondaries Renaissance",
        date: "Feb 24, 2026",
        image: "/Insights.jpg",
        slug: "secondaries-renaissance"
    },
    {
        id: 2,
        category: "Venture Capital",
        title: "Venture Capital in the Age of AI",
        date: "Feb 12, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
        slug: "vc-ai"
    },
    {
        id: 3,
        category: "Alternatives",
        title: "Infrastructure as a Core Allocation",
        date: "Feb 4, 2026",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        slug: "infrastructure-core"
    },
];

export function InsightsGrid() {
    return (
        <section id="insights" className="py-24 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-white font-semibold mb-4">
                            Perspective
                        </h2>
                        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white">
                            Latest Insights
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {INSIGHTS.map((insight, idx) => (
                        <Link href={`/insights/${insight.slug}`} key={insight.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                className="group cursor-pointer relative h-96 rounded-sm overflow-hidden"
                            >
                                <img
                                    src={insight.image}
                                    alt={insight.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="mb-3">
                                        <span className="text-[10px] tracking-[0.2em] uppercase text-graf-gold font-semibold bg-graf-gold/10 px-2 py-1 rounded-sm">
                                            {insight.category}
                                        </span>
                                    </div>
                                    <h4 className="font-serif text-2xl text-white mb-4 group-hover:text-graf-gold transition-colors duration-300">
                                        {insight.title}
                                    </h4>
                                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <span className="text-xs tracking-widest text-gray-400 capitalize">{insight.date}</span>
                                        <div className="flex items-center gap-2 text-graf-gold text-xs font-semibold tracking-widest uppercase">
                                            Read Article <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
