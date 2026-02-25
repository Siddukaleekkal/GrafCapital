"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header
                className={`sticky top-0 w-full z-50 transition-transform duration-300 bg-black border-b border-white/5 ${showNav ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="w-full px-6 md:px-12 lg:px-16 h-24 md:h-32 flex items-center justify-between">
                    <div className="flex items-center gap-12 md:gap-24">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logo-transparent.png"
                                alt="Graf Capital"
                                className="h-24 md:h-32 py-3 md:py-4 w-auto object-contain scale-[1.8] md:scale-[2.4] origin-left -ml-2"
                            />
                        </Link>

                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex gap-8 items-center font-sans text-sm tracking-widest uppercase text-gray-300">
                            <Link href="/#about" className="hover:text-white transition-colors">About</Link>
                            <Link href="/#insights" className="hover:text-white transition-colors">Insights</Link>
                            <Link href="/#performance" className="hover:text-white transition-colors">Performance</Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:tgraf@grafcapitalholdings.com"
                            className="hidden md:block px-6 py-3 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-graf-gold hover:text-white transition-all duration-300"
                        >
                            Get in Touch
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex flex-col pt-24 px-6 pb-6"
                    >
                        <button
                            className="absolute top-8 right-6 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <nav className="flex flex-col gap-8 text-2xl font-serif mt-10">
                            <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-graf-gold transition-colors">About</Link>
                            <Link href="/#insights" onClick={() => setMobileMenuOpen(false)} className="hover:text-graf-gold transition-colors">Insights</Link>
                            <Link href="/#performance" onClick={() => setMobileMenuOpen(false)} className="hover:text-graf-gold transition-colors">Performance</Link>

                            <a
                                href="mailto:tgraf@grafcapitalholdings.com"
                                className="mt-4 px-6 py-4 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get in Touch
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
