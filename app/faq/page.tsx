import Navigation from "@/components/Navigation";
import FAQAccordion from "@/components/FAQAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Flagball - 11-on-11 Flag Football",
  description:
    "Frequently asked questions about Flagball. Learn about league format, rules, players, and the future of 11-on-11 flag football.",
  alternates: {
    canonical: "https://flagball.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="relative min-h-screen overflow-y-auto">
      <Navigation bgColor="#1F1F1E" />

      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url(https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_faq_background.png)",
          filter: "brightness(0.4)",
        }}
      />

      {/* Content with Off-White Background */}
      <div className="relative z-10 pt-20 md:pt-40 pb-8 md:pb-16 px-4 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion />
        </div>
      </div>
    </main>
  );
}
