"use client";

import Navigation from "@/components/Navigation";
import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

// Note: Metadata export doesn't work in client components, handle via layout

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    organization: "",
    organizationWebsite: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent("Partnership Inquiry - Flagball");
      const body = encodeURIComponent(
        `First Name: ${formData.firstName}\n` +
          `Email: ${formData.email}\n` +
          `Organization: ${formData.organization}\n` +
          `Organization Website: ${formData.organizationWebsite}\n`
      );

      window.location.href = `mailto:josh@grovehillresearch.com?subject=${subject}&body=${body}`;

      setSubmitMessage("Opening your email client...");

      // Reset form
      setTimeout(() => {
        setFormData({
          firstName: "",
          email: "",
          organization: "",
          organizationWebsite: "",
        });
        setSubmitMessage("");
      }, 2000);
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="relative w-[100dvw] h-[100dvh] md:w-screen md:h-screen overflow-hidden">
      <Navigation />

      {/* Background Image - Moved Down */}
      <div
        className="absolute top-0 left-0 w-[100dvw] h-[100dvh] md:w-full md:h-full bg-cover"
        style={{
          backgroundImage:
            "url(https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_partner_background_v2.png)",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark Overlay 70% */}
      <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] md:w-full md:h-full bg-[#2E2E2E] opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-[100dvh] md:h-full px-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 md:p-8 w-full lg:w-[35%] lg:min-w-[500px] lg:max-w-[750px] shadow-2xl mt-12 md:mt-0">
          <button
            onClick={() => window.history.back()}
            className="mb-4 md:mb-6 text-gray-400 hover:opacity-80 flex items-center gap-2 transition-opacity"
          >
            <IoArrowBackCircle size={32} className="md:w-10 md:h-10" />
          </button>

          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 pb-3 md:pb-6 border-b border-gray-400">
              <label
                htmlFor="firstName"
                className="block text-gray-800 font-medium mb-2 lg:mb-0 lg:w-48 text-base md:text-xl"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="name"
                className="w-full lg:flex-1 px-3 md:px-4 py-2 md:py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 pb-3 md:pb-6 border-b border-gray-400">
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2 lg:mb-0 lg:w-48 text-base md:text-xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email"
                className="w-full lg:flex-1 px-3 md:px-4 py-2 md:py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 pb-3 md:pb-6 border-b border-gray-400">
              <label
                htmlFor="organization"
                className="block text-gray-800 font-medium mb-2 lg:mb-0 lg:w-48 text-base md:text-xl"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                placeholder="organization"
                className="w-full lg:flex-1 px-3 md:px-4 py-2 md:py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
              <label
                htmlFor="organizationWebsite"
                className="block text-gray-800 font-medium mb-2 lg:mb-0 lg:w-48 text-base md:text-xl"
              >
                Website
              </label>
              <input
                type="url"
                id="organizationWebsite"
                name="organizationWebsite"
                value={formData.organizationWebsite}
                onChange={handleChange}
                required
                placeholder="website"
                className="w-full lg:flex-1 px-3 md:px-4 py-2 md:py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm md:text-base"
              />
            </div>

            <div className="border-t border-gray-400 pt-4 md:pt-6 mt-4 md:mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-flagball-red text-white py-3 md:py-4 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-base md:text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {submitMessage && (
              <p className="text-center text-sm text-gray-600">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
