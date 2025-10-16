import Navigation from "@/components/Navigation";
import RulesModule from "@/components/RulesModule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules | Flagball - 11-on-11 Flag Football",
  description:
    "Learn the complete rules of Flagball. Comprehensive guide to field specifications, gameplay, penalties, and referee signals for 11-on-11 flag football.",
  alternates: {
    canonical: "https://flagball.com/rules",
  },
};

export default function RulesPage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Navigation />

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_rules_background.png)",
        }}
      />

      {/* Dark Overlay 80% */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#2E2E2E] opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full p-0 md:p-4 pt-16 md:pt-24">
        <div className="w-full md:w-auto lg:w-[max(60vw,800px)] h-full md:h-[85vh]">
          <RulesModule />
        </div>
      </div>
    </main>
  );
}
