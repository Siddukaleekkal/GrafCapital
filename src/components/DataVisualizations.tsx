"use client";

import { motion } from "framer-motion";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "2016", fund: 100, market: 100 },
    { name: "2018", fund: 135, market: 115 },
    { name: "2020", fund: 180, market: 140 },
    { name: "2022", fund: 220, market: 160 },
    { name: "2024", fund: 295, market: 195 },
    { name: "2026", fund: 380, market: 230 },
];

export function DataVisualizations() {
    return (
        <section className="py-24 bg-graf-charcoal border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--color-graf-charcoal)_0%,_var(--color-graf-black)_100%)] opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">

                <div className="md:w-1/3 flex flex-col gap-6">
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-graf-silver border-l-2 border-graf-gold pl-4">
                        Track Record
                    </span>
                    <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight">
                        Consistent <br /> Alpha Generation
                    </h2>
                    <p className="font-sans text-sm text-gray-400 font-light leading-relaxed mb-6">
                        Our distinct investment philosophy has consistently outperformed blended benchmarks across multiple market cycles, prioritizing capital preservation while capturing asymmetric upside.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-graf-gold block rounded-full" />
                            <span className="font-sans text-sm uppercase text-gray-300 tracking-widest">
                                Graf Capital
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-gray-600 block rounded-full" />
                            <span className="font-sans text-sm uppercase text-gray-500 tracking-widest">
                                Blended Benchmark
                            </span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full md:w-2/3 h-[400px] bg-black/40 border border-white/10 p-6 rounded-sm relative backdrop-blur-sm"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorFund" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#666666" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#666666" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#444" tick={{ fill: '#888', fontSize: 12 }} />
                            <YAxis stroke="#444" tick={{ fill: '#888', fontSize: 12 }} />
                            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                                itemStyle={{ color: '#D4AF37' }}
                            />
                            <Area type="monotone" dataKey="fund" stroke="#D4AF37" fillOpacity={1} fill="url(#colorFund)" strokeWidth={2} />
                            <Area type="monotone" dataKey="market" stroke="#666666" fillOpacity={1} fill="url(#colorMarket)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
        </section>
    );
}
