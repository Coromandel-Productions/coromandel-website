import type { Metadata } from "next";
import BehindTheLensClient from "./BehindTheLensClient";

export const metadata: Metadata = {
  title: "Our Team & Story | Coromandel Productions",
  description:
    "Meet the collective behind Coromandel Productions. Cinematic video production in Chennai and Singapore. We tell stories from the heart.",
  keywords: [
    "video production team Chennai",
    "video production team Singapore",
    "cinematic storytellers",
    "Coromandel Productions team",
  ],
};

export default function BehindTheLens() {
  return <BehindTheLensClient />;
}
