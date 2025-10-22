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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setShowSuccess(false);

    try {
      const response = await fetch("/api/send-partner-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setSubmitMessage("Thank you! Your inquiry has been sent successfully.");

        // Reset form after showing success
        setTimeout(() => {
          setFormData({
            firstName: "",
            email: "",
            organization: "",
            organizationWebsite: "",
          });
          setSubmitMessage("");
          setShowSuccess(false);
        }, 3000);
      } else {
        setSubmitMessage(data.error || "Failed to send. Please try again.");
      }
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
    <main className="relative w-[100dvw] h-[100dvh] min-[500px]:w-screen min-[500px]:h-screen overflow-hidden">
      <Navigation />

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-[100dvw] h-[100dvh] min-[500px]:w-full min-[500px]:h-full bg-cover"
        style={{
          backgroundImage:
            "url(https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_partner_background_v2.png)",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark Overlay 70% */}
      <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] min-[500px]:w-full min-[500px]:h-full bg-[#2E2E2E] opacity-70" />

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 py-[calc(4rem+1rem)] pb-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-[min(4vmin,2rem)] w-full min-[500px]:w-[35%] min-[500px]:min-w-[500px] min-[500px]:max-w-[750px] shadow-2xl max-h-[calc(100dvh-5rem)] min-[500px]:max-h-[calc(100vh-5rem)] overflow-y-auto">
          <button
            onClick={() => window.history.back()}
            className="mb-[min(3vmin,1.5rem)] text-gray-400 hover:opacity-80 flex items-center gap-2 transition-opacity"
          >
            <IoArrowBackCircle
              size={32}
              className="min-[500px]:w-10 min-[500px]:h-10"
            />
          </button>

          <form onSubmit={handleSubmit} className="space-y-[min(3vmin,1.5rem)]">
            {/* Show form fields only when not submitting or showing success */}
            {!isSubmitting && !showSuccess && (
              <>
                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:gap-4 pb-[min(3vmin,1.5rem)] border-b border-gray-400">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-800 font-medium mb-2 min-[500px]:mb-0 min-[500px]:w-48 text-base min-[500px]:text-xl"
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
                    className="w-full min-[500px]:flex-1 px-3 min-[500px]:px-4 py-[min(2vmin,1rem)] min-[500px]:py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm min-[500px]:text-base"
                  />
                </div>

                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:gap-4 pb-[min(3vmin,1.5rem)] border-b border-gray-400">
                  <label
                    htmlFor="email"
                    className="block text-gray-800 font-medium mb-2 min-[500px]:mb-0 min-[500px]:w-48 text-base min-[500px]:text-xl"
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
                    className="w-full min-[500px]:flex-1 px-3 min-[500px]:px-4 py-[min(2vmin,1rem)] min-[500px]:py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm min-[500px]:text-base"
                  />
                </div>

                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:gap-4 pb-[min(3vmin,1.5rem)] border-b border-gray-400">
                  <label
                    htmlFor="organization"
                    className="block text-gray-800 font-medium mb-2 min-[500px]:mb-0 min-[500px]:w-48 text-base min-[500px]:text-xl"
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
                    className="w-full min-[500px]:flex-1 px-3 min-[500px]:px-4 py-[min(2vmin,1rem)] min-[500px]:py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm min-[500px]:text-base"
                  />
                </div>

                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:gap-4">
                  <label
                    htmlFor="organizationWebsite"
                    className="block text-gray-800 font-medium mb-2 min-[500px]:mb-0 min-[500px]:w-48 text-base min-[500px]:text-xl"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    id="organizationWebsite"
                    name="organizationWebsite"
                    value={formData.organizationWebsite}
                    onChange={handleChange}
                    required
                    placeholder="example.com"
                    className="w-full min-[500px]:flex-1 px-3 min-[500px]:px-4 py-[min(2vmin,1rem)] min-[500px]:py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none placeholder:text-gray-400 placeholder:font-normal text-black uppercase font-bold text-sm min-[500px]:text-base"
                  />
                </div>

                <div className="border-t border-gray-400 pt-[min(3vmin,1.5rem)] mt-[min(4vmin,2rem)]">
                  <button
                    type="submit"
                    className="w-full bg-flagball-red text-white py-[min(2vmin,1rem)] rounded-lg font-bold hover:opacity-90 transition-opacity uppercase tracking-wide text-base min-[500px]:text-lg"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}

            {/* Loading State */}
            {isSubmitting && !showSuccess && (
              <div className="flex flex-col items-center justify-center py-16 min-[500px]:py-24">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
              </div>
            )}

            {/* Success State */}
            {showSuccess && (
              <div className="flex flex-col items-center justify-center py-16 min-[500px]:py-24 text-center">
                <p className="text-gray-800 font-medium text-lg min-[500px]:text-2xl mb-6">
                  Thanks for your interest!<br />We will be in touch shortly.
                </p>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                  <svg
                    className="w-10 h-10 text-white animate-draw-check"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
