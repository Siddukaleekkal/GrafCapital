"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 bg-black text-white relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[500px] md:h-[650px] rounded-lg overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10 duration-700" />
                    <img
                        src="/About Tommy Graf.jpeg"
                        alt="Thomas Graf"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-graf-gold mb-2 border-l-2 border-graf-gold pl-4">
                        Local Expertise
                    </h2>
                    <h3 className="font-serif text-4xl lg:text-5xl leading-tight font-light mb-4">
                        Rooted in Richmond, Virginia
                    </h3>

                    <div className="font-sans text-gray-300 font-light text-lg leading-relaxed flex flex-col gap-4">
                        <p>
                            Graf Capital is proudly based out of Richmond, Virginia. We partner with local clients and regional firms to generate exceptional returns through meticulously structured alternative asset strategies.
                        </p>
                        <p>
                            Founded by Thomas Graf, a dedicated economics student with deep-seated interest and hands-on experience in modern investments. His academic rigor and fresh perspective drive the firm's boutique approach to capital allocation.
                        </p>
                        <p>
                            Since our inception, we have aligned our interests with visionary management teams, providing strategic guidance to build enduring value. Our disciplined approach to local and regional risk management sets us apart.
                        </p>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
