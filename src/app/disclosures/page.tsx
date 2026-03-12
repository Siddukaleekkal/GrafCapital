import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function DisclosuresPage() {
    return (
        <LegalPageLayout
            title="Disclosures"
            subtitle="Last Updated: March 12, 2026"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Investment Risks</h2>
                    <p>
                        All investments involve significant risk, including the loss of principal. Performance data provided represents past performance and does not guarantee future results.
                    </p>
                    <p className="mt-4">
                        Private markets, alternative investments, and technology-focused funds often involve higher degrees of volatility, liquidity risk, and concentration compared to traditional public market investments. Investors should only commit capital they can afford to lose.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Regulatory Disclosures</h2>
                    <p>
                        Graf Capital Partners operates as an independent investment firm. We are committed to transparency and compliance with all applicable financial regulations.
                    </p>
                    <p className="mt-4">
                        Our firm does not provide investment advisory services to the general public. Our communication is intended for qualified investors and institutional partners as defined by relevant securities laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Proprietary Research</h2>
                    <p>
                        The research and insights shared on this website are proprietary to Graf Capital. All opinions expressed are subject to change without notice and should be considered as of the date of publication.
                    </p>
                    <p className="mt-4">
                        While we strive for accuracy, the information provided is sourced from data we believe to be reliable, but we do not guarantee its completeness or correctness.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Conflicts of Interest</h2>
                    <p>
                        Graf Capital maintains robust internal controls and policies designed to manage and mitigate potential conflicts of interest that may arise during the course of our investment activities.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Contact for Inquiries</h2>
                    <p>
                        For further clarification on our disclosures or for investor-specific information, please contact our compliance department at:
                    </p>
                    <div className="mt-4 p-6 border border-white/10 bg-zinc-950/50 rounded-lg">
                        <p className="font-serif text-white">Graf Capital Compliance</p>
                        <p>Email: tgraf@grafcapitalholdings.com</p>
                    </div>
                </section>
            </div>
        </LegalPageLayout>
    );
}
