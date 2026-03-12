"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative z-10 bg-black border-t border-white/5 pt-20 pb-10 text-gray-400 font-sans text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center">
                    <Link href="/" className="flex items-center justify-center mb-6">
                        <img
                            src="/logo-transparent.png"
                            alt="Graf Capital"
                            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                        />
                    </Link>
                    <p className="max-w-md leading-relaxed font-light mt-2 sm:mt-4 mx-auto text-sm">
                        Transforming alternative investments through rigorous analysis,
                        global perspective, and an unwavering commitment to excellence.
                    </p>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-12 md:mt-16 text-xs text-center md:text-left">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Graf Capital Partners. All rights reserved.</p>
                        <p className="text-gray-500">
                            Designed and maintained by Viracis Technology Solutions.
                        </p>
                    </div>
                    <div className="flex gap-6 relative z-50">
                        <Link href="/privacy-policy" className="hover:text-white transition cursor-pointer">Privacy Policy</Link>
                        <Link href="/terms-of-use" className="hover:text-white transition cursor-pointer">Terms of Use</Link>
                        <Link href="/disclosures" className="hover:text-white transition cursor-pointer">Disclosures</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
