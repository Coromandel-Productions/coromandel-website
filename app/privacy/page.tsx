import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Coromandel Productions",
  description: "Privacy Policy for Coromandel Productions, outlining how we collect, use, and protect your data in Singapore and India.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 21, 2026">
      <section className="space-y-12">
        <div>
          <h2>1. Introduction</h2>
          <p>
            Coromandel Productions ("we", "us", or "our") operates the website coromandel.sg. We are committed to protecting your personal data and your privacy in accordance with the Singapore Personal Data Protection Act (PDPA). This Privacy Policy explains how we collect, use, disclose, and protect your personal data.
          </p>
        </div>

        <div>
          <h2>2. Personal Data We Collect</h2>
          <p>
            We may collect personal data that you provide to us directly, including but not limited to:
          </p>
          <ul>
            <li>Name and contact information (email address, phone number).</li>
            <li>Professional information (company name, job title).</li>
            <li>Project specifics and communication preferences.</li>
            <li>Technical data (IP address, browser type) via cookies.</li>
          </ul>
        </div>

        <div>
          <h2>3. Purpose of Collection</h2>
          <p>
            We collect and use your personal data for the following purposes:
          </p>
          <ul>
            <li>To respond to your inquiries and fulfill service requests.</li>
            <li>To manage our relationship with you and provide project updates.</li>
            <li>To improve our website experience and marketing efforts.</li>
            <li>To comply with legal and regulatory requirements in Singapore.</li>
          </ul>
        </div>

        <div>
          <h2>4. Data Protection & Security</h2>
          <p>
            We implement reasonable security arrangements to protect your personal data from unauthorized access, collection, use, or disclosure. We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.
          </p>
        </div>

        <div>
          <h2>5. Your Rights</h2>
          <p>
            Under the PDPA, you have the right to request access to and correction of your personal data held by us. You may also withdraw your consent to our collection, use, or disclosure of your personal data at any time.
          </p>
        </div>

        <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <h2>6. Data Protection Officer (DPO)</h2>
          <p>
            If you have any questions or complaints regarding our privacy practices, please contact our Data Protection Officer at:
          </p>
          <p className="font-bold text-foreground">
            Email: dpo@coromandel.sg<br />
            Address: International Plaza, Singapore
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
