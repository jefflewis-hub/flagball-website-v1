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
    <main className="relative w-[100dvw] h-[100dvh] min-[500px]:w-screen min-[500px]:h-screen overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Mobile (<500px): Full width, account for navbar */
          .rules-container-width {
            width: 100dvw !important;
            height: calc(100dvh - 4.5rem) !important;
          }
          
          /* Desktop 500-999px: Full width with padding */
          @media (min-width: 500px) and (max-width: 999px) {
            .rules-container-width {
              width: calc(100dvw - 80px) !important;
              height: 80vh !important;
            }
          }
          
          /* Large Desktop (>=1000px): Centered container */
          @media (min-width: 1000px) {
            .rules-container-width {
              width: min(80dvw, 1000px) !important;
              height: 80vh !important;
            }
          }
        `,
        }}
      />
      <Navigation />

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-[100dvw] h-[100dvh] min-[500px]:w-full min-[500px]:h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_rules_background.png)",
        }}
      />

      {/* Dark Overlay 80% */}
      <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] min-[500px]:w-full min-[500px]:h-full bg-[#2E2E2E] opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex items-start justify-center max-[499px]:h-[100dvh] min-[500px]:h-full max-[499px]:p-0 max-[499px]:pt-[4.5rem] min-[500px]:p-4 min-[500px]:pt-20">
        <div className="rules-container-width">
          <RulesModule />
        </div>
      </div>
    </main>
  );
}
