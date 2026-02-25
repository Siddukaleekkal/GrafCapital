"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function AnimatedHero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Alpha", "Edge", "Growth", "Value", "Vision"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2500);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-16 text-left text-white flex flex-col items-start mt-20 md:mt-0">

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 md:mb-8 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] flex flex-col items-start"
            >
                <span>Building Exceptional</span>
                <span className="relative flex overflow-hidden w-[220px] sm:w-[280px] md:w-[400px] lg:w-[500px] h-[60px] sm:h-[80px] md:h-[120px] lg:h-[140px] items-center">
                    {titles.map((title, index) => (
                        <motion.span
                            key={index}
                            className="absolute italic font-light opacity-100 text-graf-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] pb-4 md:pb-6"
                            initial={{ opacity: 0, y: "-100%" }}
                            transition={{ type: "spring", stiffness: 50 }}
                            animate={
                                titleNumber === index
                                    ? { y: 0, opacity: 1 }
                                    : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                            }
                        >
                            {title}
                        </motion.span>
                    ))}
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="font-sans text-sm sm:text-base md:text-lg text-white max-w-4xl mb-8 md:mb-12 font-light drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-relaxed"
            >
                At Graf Capital Holdings, we work to identify durable companies positioned to benefit from structural shifts in technology, infrastructure, and industrial demand. We concentrate capital in businesses that sit at critical bottlenecks of growth, whose products or services remain essential regardless of market cycles. Our approach blends disciplined fundamental analysis with a long-term ownership mindset, prioritizing resilience, indispensability, and asymmetric upside.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-row gap-4 w-full md:w-auto"
            >
                <a
                    href="#performance"
                    className="w-full md:w-auto px-6 sm:px-8 py-4 bg-black text-white border border-black font-sans uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 ease-out transform hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.5)] block text-center"
                >
                    EXPLORE OUR HOLDINGS
                </a>
            </motion.div>
        </div>
    );
}

export { AnimatedHero };
