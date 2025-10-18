import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner | Flagball - 11-on-11 Flag Football",
  description:
    "Partner with Flagball. Discover partnership opportunities with the premier 11-on-11 flag football league. Coming June 2026.",
  alternates: {
    canonical: "https://flagball.com/partner",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

