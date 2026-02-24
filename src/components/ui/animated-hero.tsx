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
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] flex flex-col items-start"
            >
                <span>Building Exceptional</span>
                <span className="relative flex overflow-hidden w-[280px] md:w-[400px] lg:w-[500px] h-[80px] md:h-[120px] lg:h-[140px] items-center">
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
                className="font-sans text-lg md:text-xl text-white max-w-2xl mb-12 font-light drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            >
                We deploy specialized capital into uniquely structured funds designed for the modern market. Our boutique approach prioritizes precision and alignment, ensuring your investment grows with purpose.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-row gap-4"
            >
                <button className="px-8 py-4 bg-black text-white border border-black font-sans uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 ease-out transform hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    EXPLORE OUR FUNDS
                </button>
            </motion.div>
        </div>
    );
}

export { AnimatedHero };
