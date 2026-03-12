import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function TermsOfUsePage() {
    return (
        <LegalPageLayout
            title="Terms of Use"
            subtitle="Last Updated: March 12, 2026"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Acceptance of Terms</h2>
                    <p>
                        By accessing or using our website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Use License</h2>
                    <p>
                        The content, images, data, and designs on this site are the property of Graf Capital Partners. You are granted a limited license to access and view the content for personal, non-commercial use only.
                    </p>
                    <p className="mt-4 font-semibold text-white">You may not:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Modify or copy the materials.</li>
                        <li>Use the materials for any commercial purpose or public display.</li>
                        <li>Incorporate the materials into any other website or digital service without prior written consent.</li>
                        <li>Decompile or reverse engineer any software contained on Graf Capital's website.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">No Financial Advice</h2>
                    <p>
                        The information provided on this website is for informational purposes only and does not constitute financial, investment, legal, or tax advice. No information on this website should be interpreted as an offer to sell or a solicitation of an offer to buy any security or investment product.
                    </p>
                    <p className="mt-4">
                        Investing involves significant risks, and you should consult with qualified professionals before making any investment decisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Disclaimer of Liability</h2>
                    <p>
                        The materials on Graf Capital's website are provided on an 'as is' basis. Graf Capital makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Governing Law</h2>
                    <p>
                        These Terms of Use are governed by and construed in accordance with the laws of the jurisdiction in which Graf Capital is headquartered, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
