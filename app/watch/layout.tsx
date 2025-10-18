import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch | Flagball - 11-on-11 Flag Football",
  description:
    "Watch the official Flagball trailer and highlights. Experience the future of 11-on-11 flag football.",
  alternates: {
    canonical: "https://flagball.com/watch",
  },
};

export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

