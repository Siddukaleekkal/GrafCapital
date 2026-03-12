import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout
            title="Privacy Policy"
            subtitle="Last Updated: March 12, 2026"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Introduction</h2>
                    <p>
                        At Graf Capital, your trust is our most valuable asset. This Privacy Policy describes how Graf Capital Partners and its affiliates ("Graf Capital", "we", "us", or "our") collect, use, and protect your personal information when you visit our website or use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Information We Collect</h2>
                    <p>
                        We collect personal information that you provide to us directly, such as when you contact us via email, submit an inquiry, or participate in our investment services. This may include your name, email address, phone number, and professional details.
                    </p>
                    <p className="mt-4">
                        We also automatically collect technical data regarding your interaction with our website, including your IP address, browser type, and navigation patterns.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">How We Use Your Information</h2>
                    <p>
                        The information we collect is used to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Provide and maintain our investment services.</li>
                        <li>Communicate with you regarding our research and insights.</li>
                        <li>Ensure compliance with relevant financial regulations and legal requirements.</li>
                        <li>Improve the functionality and performance of our digital platform.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Data Security</h2>
                    <p>
                        We implement industry-standard administrative, technical, and physical security measures designed to safeguard your personal information from unauthorized access, loss, or disclosure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Contact Us</h2>
                    <p>
                        If you have any questions regarding this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="mt-4 p-6 border border-white/10 bg-zinc-950/50 rounded-lg">
                        <p className="font-serif text-white">Graf Capital Partners</p>
                        <p>Email: tgraf@grafcapitalholdings.com</p>
                    </div>
                </section>
            </div>
        </LegalPageLayout>
    );
}
