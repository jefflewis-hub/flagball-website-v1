"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation({ bgColor }: { bgColor?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu - only below the menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 top-[19rem] bg-black/80 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{ backgroundColor: bgColor || "transparent" }}
      >
        <div className="w-full px-4 py-4 md:px-10 md:py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity"
              onClick={closeMobileMenu}
            >
              <Image
                src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_svg_v1.svg"
                alt="FLAGBALL"
                width={180}
                height={40}
                className="h-7 md:h-10 w-auto"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden py-2 px-1 ml-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger Lines */}
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "translate-y-0"
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "opacity-0 scale-0"
                      : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "translate-y-0"
                  }`}
                />
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-12">
              <Link
                href="/watch"
                className="text-white hover:opacity-80 transition-opacity text-lg font-bold"
              >
                Watch
              </Link>
              <Link
                href="/rules"
                className="text-white hover:opacity-80 transition-opacity text-lg font-bold"
              >
                Rules
              </Link>
              <Link
                href="/partner"
                className="text-white hover:opacity-80 transition-opacity text-lg font-bold"
              >
                Partner
              </Link>
              <Link
                href="/faq"
                className="text-white hover:opacity-80 transition-opacity text-lg font-bold"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed left-0 right-0 top-[4.5rem] md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white shadow-lg">
              <div className="divide-y divide-gray-200">
                <Link
                  href="/watch"
                  className="block w-full px-6 py-4 text-gray-900 hover:bg-gray-100 transition-colors font-semibold text-lg"
                  onClick={closeMobileMenu}
                >
                  Watch
                </Link>
                <Link
                  href="/rules"
                  className="block w-full px-6 py-4 text-gray-900 hover:bg-gray-100 transition-colors font-semibold text-lg"
                  onClick={closeMobileMenu}
                >
                  Game Rules
                </Link>
                <Link
                  href="/partner"
                  className="block w-full px-6 py-4 text-gray-900 hover:bg-gray-100 transition-colors font-semibold text-lg"
                  onClick={closeMobileMenu}
                >
                  Partner
                </Link>
                <Link
                  href="/faq"
                  className="block w-full px-6 py-4 text-gray-900 hover:bg-gray-100 transition-colors font-semibold text-lg"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
