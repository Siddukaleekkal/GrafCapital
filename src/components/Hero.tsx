"use client";

import { motion } from "framer-motion";
import { AnimatedHero } from "@/components/ui/animated-hero";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/Graf Hero Section.mp4"
                    className="w-full h-full object-cover"
                />
                {/* Subtle dark gradient at bottom for scroll text readability */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />
            </div>

            <AnimatedHero />

        </section>
    );
}
