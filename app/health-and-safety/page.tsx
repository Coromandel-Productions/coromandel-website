import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Safety | Coromandel Productions",
  description: "Our commitment to Health & Safety at Coromandel Productions across Singapore and Chennai.",
};

export default function HealthSafetyPage() {
  return (
    <LegalLayout title="Health & Safety" lastUpdated="April 21, 2026">
      <section className="space-y-12">
        <div>
          <h2>1. Commitment to Safety</h2>
          <p>
            Coromandel Productions is committed to providing a safe and healthy environment for our employees, contractors, and partners. Our policies are designed to comply with Singapore's Workplace Safety and Health Act (WSHA) and the specific safety standards of the film and media production industry.
          </p>
        </div>

        <div>
          <h2>2. Production Site Safety</h2>
          <p>
            For every production, we conduct a comprehensive Risk Assessment (RA) to identify hazards and implement control measures. This includes:
          </p>
          <ul>
            <li>Electrical safety for lighting and camera equipment.</li>
            <li>Structural safety for sets and rigging.</li>
            <li>Crowd control and traffic management for public location shoots.</li>
            <li>Adherence to specialized safety protocols for sports and high-velocity filming.</li>
          </ul>
        </div>

        <div>
          <h2>3. Roles & Responsibilities</h2>
          <p>
            Safety is a shared responsibility. We ensure that:
          </p>
          <ul>
            <li>Production Managers and Directors are briefed on site-specific risks.</li>
            <li>All crew members receive appropriate safety induction before filming begins.</li>
            <li>Appropriate Personal Protective Equipment (PPE) is provided where necessary.</li>
          </ul>
        </div>

        <div>
          <h2>4. Incident Reporting</h2>
          <p>
            In accordance with Singapore law, all workplace incidents, near-misses, and dangerous occurrences must be reported to the Production Manager immediately. Notifiable incidents will be reported to the Ministry of Manpower (MOM) as required by the WSHA.
          </p>
        </div>

        <div className="p-8 border border-border rounded-2xl bg-surface-2 italic">
          <p className="m-0">
            "We believe that no story is worth a life or an injury. Excellence in production begins with excellence in safety." 
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
