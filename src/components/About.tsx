"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-24 bg-white text-black relative border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-md lg:w-5/12 h-[400px] md:h-[520px] rounded-2xl overflow-hidden group shadow-2xl shrink-0"
                >
                    <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-all z-10 duration-700" />
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
                    className="flex flex-col gap-6 lg:w-7/12"
                >
                    <h2 className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-graf-gold mb-2 border-l-2 border-graf-gold pl-4">
                        Local Expertise
                    </h2>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight font-light mb-4">
                        Rooted in Richmond, Virginia
                    </h3>

                    <div className="font-sans text-gray-600 font-light text-base sm:text-lg leading-relaxed flex flex-col gap-4">
                        <p>
                            Graf Capital is proudly based out of Richmond, Virginia. We partner with local clients and regional firms to generate exceptional returns through meticulously structured alternative asset strategies.
                        </p>
                        <p>
                            Founded by Thomas Graf, a dedicated economics student with deep-seated interest and hands-on experience in modern investments. His academic rigor and fresh perspective drive the firm's boutique approach to capital allocation.
                        </p>
                        <p>
                            Since our inception, we have aligned our interests with visionary management teams, providing strategic guidance to build enduring value. Our disciplined approach to local and regional risk management sets us apart.
                        </p>
                        <p className="mt-4 pt-4 border-t border-black/10">
                            <strong>Contact Thomas directly at</strong> <a href="mailto:tgraf@grafcapitalholdings.com" className="text-graf-gold hover:text-black transition-colors underline underline-offset-4 decoration-graf-gold/30 hover:decoration-black">tgraf@grafcapitalholdings.com</a>
                        </p>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
