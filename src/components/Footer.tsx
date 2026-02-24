import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10 text-gray-400 font-sans text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="col-span-1 md:col-span-4 flex flex-col items-center text-center">
                    <Link href="/" className="flex items-center justify-center mb-6">
                        <img
                            src="/logo-transparent.png"
                            alt="Graf Capital"
                            className="h-28 md:h-36 w-auto object-contain scale-[1.5] md:scale-[2]"
                        />
                    </Link>
                    <p className="max-w-md leading-relaxed font-light mt-4 mx-auto">
                        Transforming alternative investments through rigorous analysis,
                        global perspective, and an unwavering commitment to excellence.
                    </p>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs mt-16">
                    <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Graf Capital Partners. All rights reserved.</p>
                        <p className="text-gray-500">
                            Designed and maintained by Viracis Technology Solutions.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Use</Link>
                        <Link href="#" className="hover:text-white transition">Disclosures</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
