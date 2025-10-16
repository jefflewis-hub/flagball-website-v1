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
    <main className="relative w-[100dvw] h-[100dvh] md:w-screen md:h-screen overflow-hidden">
      <Navigation />

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-[100dvw] h-[100dvh] md:w-full md:h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_rules_background.png)",
        }}
      />

      {/* Dark Overlay 80% */}
      <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] md:w-full md:h-full bg-[#2E2E2E] opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex items-start justify-center h-[100dvh] md:h-full p-0 md:p-4 pt-16 md:pt-20">
        <div className="w-[100dvw] md:w-auto lg:w-[max(60dvw,950px)] h-[100dvh] md:h-[80vh]">
          <RulesModule />
        </div>
      </div>
    </main>
  );
}
