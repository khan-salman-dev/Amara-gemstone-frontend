import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit the Workshop — Verdant & Ore",
  description:
    "Write to our lapidary bench or arrange a viewing in Ratnapura. Stones can be seen in daylight, on the bench where they were cut.",
  openGraph: {
    title: "Visit the Workshop — Verdant & Ore",
    description:
      "Write to our bench or arrange a daylight viewing of any stone in Ratnapura.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
