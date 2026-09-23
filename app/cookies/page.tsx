import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Coromandel Productions",
  description: "Cookie Policy for Coromandel Productions. Learn how we use cookies to improve your experience.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="April 21, 2026">
      <section className="space-y-12">
        <div>
          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
          </p>
        </div>

        <div>
          <h2>2. How We Use Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users, providing a better experience and allowing us to improve our site. We use the following types of cookies:
          </p>
          <ul>
            <li><strong>Strictly Necessary:</strong> Required for the operation of our website (e.g., theme persistence).</li>
            <li><strong>Analytical/Performance:</strong> Allow us to recognize and count the number of visitors and see how they move around our site.</li>
            <li><strong>Functionality:</strong> Used to recognize you when you return to our website and remember your preferences (like your choice between Night and Day mode).</li>
          </ul>
        </div>

        <div>
          <h2>3. Third-Party Cookies</h2>
          <p>
            Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. Our video embeds from Vimeo may also set cookies to ensure the video player functions correctly.
          </p>
        </div>

        <div>
          <h2>4. Managing Cookies</h2>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-primary underline">www.aboutcookies.org</a>.
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
