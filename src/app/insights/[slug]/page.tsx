"use client";

import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

const ARTICLES = {
    "secondaries-renaissance": {
        title: "The Secondaries Renaissance: Why Liquidity Is Reshaping the PE Landscape",
        date: "Feb 24, 2026",
        readTime: "8 min read",
        category: "Private Equity",
        tags: ["Capital Markets", "LP Strategy"],
        image: "/Insights.jpg",
        deck: "As the exit environment remains constrained, the secondary market has evolved from a niche liquidity mechanism into a sophisticated capital allocation tool — one that sophisticated LPs can no longer afford to ignore.",
        content: (
            <>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The private equity secondary market closed 2024 with an estimated $140 billion in transaction volume, surpassing prior-year records and signaling a structural shift in how institutional capital navigates illiquidity premiums. What was once a distressed seller's last resort has become a dynamic asset class in its own right — offering attractive risk-adjusted returns, compressed J-curves, and enhanced portfolio visibility.
                </p>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    Several converging forces have catalyzed this transformation. First, an extended period of muted IPO activity and compressed M&A multiples has constrained traditional exit pathways, creating a growing backlog of unrealized value across buyout portfolios. According to Preqin data, global unrealized PE value exceeded $3.2 trillion as of mid-2024 — a record that has pushed LPs to actively manage their exposure rather than remain passive holders.
                </p>

                <h3 className="text-2xl font-serif text-white mt-12 mb-6 italic">GP-Led Transactions: The Architecture of Modern Secondaries</h3>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The most consequential evolution within the secondaries ecosystem is the proliferation of GP-led continuation vehicles. These transactions — in which a general partner migrates a high-conviction asset (or a curated portfolio) into a newly formed vehicle — allow managers to extend their hold period on assets they believe have additional value creation runway, while simultaneously offering incumbent LPs a liquidity option and welcoming new capital at a current-market valuation.
                </p>

                <div className="my-12 p-8 border-l-4 border-graf-gold bg-graf-charcoal/50 italic text-xl text-white font-serif leading-relaxed">
                    "The continuation vehicle has effectively decoupled the investment horizon from the fund structure — giving GPs the flexibility to act like permanent capital allocators without abandoning the discipline of the carry model."
                </div>

                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    For institutional buyers entering these transactions as new LPs, the value proposition is compelling: seasoned assets with established management teams, known performance trajectories, and shorter durations than blind-pool commitments. However, this dynamic also introduces structural complexity around conflicts of interest — particularly around valuation, information asymmetry, and the alignment of GP economics across legacy and continuation fund investors.
                </p>

                <h3 className="text-2xl font-serif text-white mt-12 mb-6 italic">Pricing Dynamics and Discount Rate Normalization</h3>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The bid-ask spread compression witnessed since mid-2023 reflects both increased price discovery and a recalibration of NAV expectations. As rising interest rates repriced discount rates across the asset management industry, LP sellers who had previously been unwilling to transact below NAV gradually accepted that book values reflected lagged, rather than current, market conditions.
                </p>

                <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Market Volume</div>
                        <div className="text-3xl font-serif text-graf-gold">$140B</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">2024E</div>
                    </div>
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">GP-Led Share</div>
                        <div className="text-3xl font-serif text-graf-gold">48%</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">of total</div>
                    </div>
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Avg. Discount</div>
                        <div className="text-3xl font-serif text-graf-gold">9%</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">vs. 15% in '22</div>
                    </div>
                </div>

                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    For institutional allocators reassessing their private market exposure, secondaries offer a pragmatic bridge between strategic reallocation and the reality of long-duration, illiquid commitments. The asset class's maturation — evidenced by dedicated fund sizes now routinely exceeding $20 billion at firms such as Lexington Partners and Ardian — underscores its emergence as a core rather than satellite allocation for sophisticated endowments, pension funds, and sovereign wealth vehicles.
                </p>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The forward outlook remains constructive. Denominator effects continue to pressure some LPs toward portfolio rationalization, while increasing GP appetite for continuation structures shows little sign of abatement. Investors with dry powder, rigorous diligence infrastructure, and deep manager relationships are positioned to extract durable value from a market that rewards expertise over opportunism.
                </p>
            </>
        )
    },
    "vc-ai": {
        title: "Venture Capital in the Age of Artificial Intelligence: Navigating a Reconfigured Risk Landscape",
        date: "Feb 12, 2026",
        readTime: "7 min read",
        category: "Venture Capital",
        tags: ["AI & Technology", "Portfolio Construction"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
        deck: "The AI investment cycle has disrupted conventional venture underwriting frameworks. For institutional LPs, separating durable secular growth from speculative froth requires a more granular analysis of defensibility, data moats, and the evolving economics of model deployment.",
        content: (
            <>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    Venture capital's exposure to artificial intelligence has evolved from a thematic overlay into the defining structural force reshaping portfolio construction across virtually every sector. In 2024, AI-related investments accounted for approximately 40% of total U.S. venture deployment — a concentration that is simultaneously creating enormous value and introducing systemic risks that warrant careful assessment by institutional limited partners.
                </p>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The prevailing narrative — that large language model capabilities will fundamentally transform enterprise software, scientific research, and professional services — is empirically well-supported. The disagreement, among serious investors, is not whether AI will create value but rather where in the value chain that value will accrue, over what time horizon, and with what degree of defensibility.
                </p>

                <h3 className="text-2xl font-serif text-white mt-12 mb-6 italic">The Infrastructure Layer: Necessary but Not Sufficient</h3>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The capital intensity of AI infrastructure — GPU clusters, data centers, interconnect fabric — has attracted institutional-scale investment from both strategic and financial sponsors. Hyperscaler capex guidance for 2025 exceeds $250 billion in aggregate, a figure that reflects genuine demand but also the competitive imperative to avoid being structurally disadvantaged in the foundational compute layer.
                </p>

                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    For venture investors, the infrastructure layer presents a paradox: the companies supplying the "picks and shovels" of the AI buildout (semiconductor design, cooling systems, networking) command premium valuations but carry significant customer concentration risk and cyclicality exposure.
                </p>

                <div className="my-12 p-8 border-l-4 border-graf-gold bg-graf-charcoal/50 italic text-xl text-white font-serif leading-relaxed">
                    "The companies that will deliver the most durable venture returns are not those with the best models — they are those that have embedded themselves so deeply into workflow and data infrastructure that switching costs approach infinity."
                </div>

                <h3 className="text-2xl font-serif text-white mt-12 mb-6 italic">Defensibility and the Data Moat Thesis</h3>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    In prior technology cycles, competitive advantage was achieved through network effects, switching costs, and proprietary distribution. In the AI era, a fourth dimension has emerged: proprietary data flywheel dynamics. Companies that can continuously collect, label, and learn from domain-specific datasets — whether in healthcare, legal, financial services, or industrial operations — are building compounding advantages that generic foundation model providers cannot easily replicate.
                </p>

                <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">AI VC Share</div>
                        <div className="text-3xl font-serif text-graf-gold">40%</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">of U.S. deals</div>
                    </div>
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Hyperscaler Capex</div>
                        <div className="text-3xl font-serif text-graf-gold">$250B</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">2025 guidance</div>
                    </div>
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Median Series B</div>
                        <div className="text-3xl font-serif text-graf-gold">$85M</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">vs. $42M '21</div>
                    </div>
                </div>

                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    For institutional LPs evaluating fund managers in this environment, the analytical framework must extend well beyond the technology assessment. Key diligence dimensions include the manager's ability to distinguish genuine enterprise adoption (measured by net revenue retention, expansion economics, and budget sourcing) from pilot proliferation driven by enterprise AI mandates; their underwriting discipline in a market where median Series B valuations for AI companies have doubled since 2021; and their portfolio construction philosophy in an environment where power-law dynamics may be even more pronounced than in prior software cycles.
                </p>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The managers best positioned to generate top-quartile performance in this cycle are those who have developed both technical fluency — capable of genuine capability assessment — and deep enterprise relationships that surface the implementation realities that PowerPoint narratives obscure. In an environment saturated with AI-focused capital, access and discernment remain the irreducible sources of venture alpha.
                </p>
            </>
        )
    },
    "infrastructure-core": {
        title: "Infrastructure as a Core Allocation: The Institutional Case for Real Asset Re-Rating",
        date: "Feb 4, 2026",
        readTime: "9 min read",
        category: "Alternatives",
        tags: ["Real Assets", "Portfolio Construction"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        deck: "Structural megatrends — energy transition, digital infrastructure buildout, and supply chain deglobalization — are converging to create a generational infrastructure investment opportunity. For institutional allocators, the question is no longer whether to allocate, but how to do so with precision.",
        content: (
            <>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    Infrastructure, once relegated to a modest allocation sleeve within broader real assets frameworks, has ascended to strategic prominence in institutional portfolios. The asset class's appeal is intuitive: long-duration cash flows, inflation-linkage, essential service characteristics, and low correlation to public market cycles. What is less appreciated, however, is the extent to which the infrastructure opportunity set has been fundamentally restructured by a confluence of secular forces that are unlikely to reverse on any meaningful investment horizon.
                </p>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    Three distinct but reinforcing megatrends are driving this re-rating. The first is the energy transition — a capital formation cycle of historic magnitude. The International Energy Agency's Net Zero by 2050 pathway requires approximately $5 trillion in annual clean energy investment through 2030. Even in scenarios that fall meaningfully short of this target, the scale of grid modernization, renewable generation deployment, battery storage, and hydrogen infrastructure represents multi-decade demand for patient capital.
                </p>

                <h3 className="text-2xl font-serif text-white mt-12 mb-6 italic">Digital Infrastructure: The Convergence of Technology and Real Assets</h3>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The second megatrend is the explosive growth of digital infrastructure — a category that has become definitionally blurred as technology assets increasingly exhibit the cash flow characteristics historically associated with physical infrastructure. Data centers, fiber networks, cell towers, and satellite communications infrastructure share the contractual stability, essential-service dynamics, and capital intensity that define the infrastructure investment thesis.
                </p>

                <div className="my-12 p-8 border-l-4 border-graf-gold bg-graf-charcoal/50 italic text-xl text-white font-serif leading-relaxed">
                    "The most sophisticated institutional allocators are no longer treating infrastructure as a defensive ballast in their alternatives portfolio. They are treating it as an active source of compounding return — one uniquely suited to the macroeconomic environment of the next decade."
                </div>

                <h3 className="text-2xl font-serif text-white mt-12 mb-6 italic">Supply Chain Deglobalization and Industrial Reshoring</h3>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The third driver — perhaps the least priced by capital markets — is the structural reshoring of critical industrial capacity across Western economies. The intersection of geopolitical reconfiguration, legislative mandates, and genuine supply chain risk management has catalyzed a manufacturing investment supercycle in semiconductor fabrication, clean energy equipment, pharmaceutical production, and logistics infrastructure.
                </p>

                <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Annual Clean Energy</div>
                        <div className="text-3xl font-serif text-graf-gold">$5T</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">required p.a.</div>
                    </div>
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Infra AUM Growth</div>
                        <div className="text-3xl font-serif text-graf-gold">+18%</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">5yr CAGR</div>
                    </div>
                    <div className="bg-graf-charcoal p-6 rounded-sm border border-white/10">
                        <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Avg. Duration</div>
                        <div className="text-3xl font-serif text-graf-gold">22yr</div>
                        <div className="text-[10px] text-gray-400 mt-1 uppercase italic">core infra</div>
                    </div>
                </div>

                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    For institutional allocators constructing their infrastructure exposure, the critical distinction lies between core, core-plus, and value-add strategies — categories that differ not merely in return expectations but in the nature of the risk being underwritten. Core infrastructure — regulated utilities, contracted renewables, mature digital networks — offers predictable, inflation-linked cash yields with limited upside optionality.
                </p>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                    The structural case for infrastructure has never been more compelling. The execution challenge — constructing a diversified, vintage-year-staggered allocation across sub-sectors, geographies, and risk profiles — is where institutional sophistication creates durable advantage. In an asset class defined by long durations and irreversibility, getting the portfolio architecture right at the outset is not merely advantageous. It is essential.
                </p>
            </>
        )
    }
};

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const article = ARTICLES[slug as keyof typeof ARTICLES];

    if (!article) {
        return (
            <main className="min-h-screen bg-black text-white flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-serif mb-4">Insight Not Found</h1>
                        <Link href="/#insights" className="text-graf-gold hover:underline">Return to Insights</Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-graf-gold/30">
            <Header />

            {/* Article Hero */}
            <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />
                </div>

                <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-graf-gold font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
                            {article.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                            {article.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-sans tracking-widest uppercase">
                            <span className="flex items-center gap-2"><Calendar size={14} /> {article.date}</span>
                            <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/#insights" className="inline-flex items-center gap-2 text-graf-gold text-sm tracking-widest uppercase mb-12 hover:gap-4 transition-all">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <div className="text-xl md:text-2xl font-serif text-gray-200 italic mb-12 leading-relaxed border-l-4 border-graf-gold/30 pl-8">
                            {article.deck}
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            {article.content}
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/10">
                            <div className="flex flex-wrap gap-3">
                                {article.tags.map(tag => (
                                    <span key={tag} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase bg-graf-charcoal px-3 py-1.5 rounded-full text-gray-400 border border-white/5">
                                        <Tag size={10} className="text-graf-gold" /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-16 text-xs text-gray-500 italic leading-relaxed max-w-2xl">
                            The information provided herein is for discussion purposes only and does not constitute investment advice or a solicitation to buy or sell securities. Past performance is not indicative of future results.
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
