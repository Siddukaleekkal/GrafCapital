"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const INSIGHTS = [
    {
        id: 1,
        category: "Market Outlook",
        title: "Navigating Volatility in Global Equities",
        date: "February 2026",
        image: "/Insights.jpg",
    },
    {
        id: 2,
        category: "Private Credit",
        title: "The Emergence of Direct Lending Opportunities",
        date: "January 2026",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 3,
        category: "Real Estate",
        title: "Future-Proofing Commercial Assets",
        date: "December 2025",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    },
];

export function InsightsGrid() {
    return (
        <section id="insights" className="py-24 bg-white text-black relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-black font-semibold mb-4">
                            Perspective
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-black">
                            Latest Insights
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {INSIGHTS.map((insight, idx) => (
                        <motion.div
                            key={insight.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="group cursor-pointer relative h-80 rounded-sm overflow-hidden"
                        >
                            <img
                                src={insight.image}
                                alt={insight.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all flex items-center justify-center">
                                <h4 className="font-serif text-3xl text-white text-center px-4 drop-shadow-md">
                                    Coming Soon
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
