import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Flagball | 11-on-11 Flag Football",
  description:
    "Flagball is revolutionizing football with 11-on-11 flag football. Watch highlights, learn the rules, and discover partnership opportunities. Coming June 2026.",
  keywords:
    "flagball, flag football, 11-on-11 flag football, football league, sports, June 2026",
  authors: [{ name: "Flagball" }],
  openGraph: {
    title: "Flagball | 11-on-11 Flag Football",
    description:
      "Flagball is revolutionizing football with 11-on-11 flag football. Coming June 2026.",
    url: "https://flagball.com",
    siteName: "Flagball",
    images: [
      {
        url: "https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_v1.png",
        width: 1200,
        height: 630,
        alt: "Flagball Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flagball | 11-on-11 Flag Football",
    description:
      "Flagball is revolutionizing football with 11-on-11 flag football. Coming June 2026.",
    images: [
      "https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_v1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here", // Replace with actual token
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch and preconnect for faster CDN connection */}
        <link
          rel="dns-prefetch"
          href="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com"
        />
        <link
          rel="preconnect"
          href="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com"
          crossOrigin="anonymous"
        />

        {/* CRITICAL: Preload mobile video with highest priority for immediate streaming */}
        <link
          rel="preload"
          as="video"
          href="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flag_landing_video_mobile_v1.mp4"
          type="video/mp4"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        
        {/* Service Worker registration for video caching */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Register service worker for aggressive video caching
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered:', registration.scope);
                  }).catch(function(error) {
                    console.log('SW registration failed:', error);
                  });
                });
              }
            `,
          }}
        />
        
        {/* Immediate video element injection for instant load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Create and inject video element ASAP for fastest load
              (function() {
                window.__videoReady__ = false;
                var video = document.createElement('video');
                video.setAttribute('preload', 'auto');
                video.setAttribute('autoplay', '');
                video.setAttribute('muted', '');
                video.setAttribute('playsinline', '');
                video.setAttribute('loop', '');
                video.style.display = 'none';
                video.src = 'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flag_landing_video_mobile_v1.mp4';
                document.documentElement.appendChild(video);
                video.load();
                video.play().catch(function() {});
                window.__preloadedVideo__ = video;
                video.addEventListener('loadeddata', function() {
                  window.__videoReady__ = true;
                });
              })();
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://flagball.com/#organization",
                  name: "Flagball",
                  url: "https://flagball.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_v1.png",
                    width: 600,
                    height: 150,
                  },
                  description:
                    "Flagball is revolutionizing football with 11-on-11 flag football",
                  foundingDate: "2026-06",
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://flagball.com/#website",
                  url: "https://flagball.com",
                  name: "Flagball | 11-on-11 Flag Football",
                  description:
                    "Flagball is revolutionizing football with 11-on-11 flag football",
                  publisher: {
                    "@id": "https://flagball.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://flagball.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://flagball.com/#webpage",
                  url: "https://flagball.com",
                  name: "Flagball | 11-on-11 Flag Football",
                  isPartOf: {
                    "@id": "https://flagball.com/#website",
                  },
                  about: {
                    "@id": "https://flagball.com/#organization",
                  },
                  description:
                    "Flagball is revolutionizing football with 11-on-11 flag football. Coming June 2026.",
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://flagball.com/#navigation",
                  name: "Main Navigation",
                  hasPart: [
                    {
                      "@type": "SiteNavigationElement",
                      name: "Watch",
                      url: "https://flagball.com/watch",
                      description: "Watch Flagball highlights and trailer",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      name: "Rules",
                      url: "https://flagball.com/rules",
                      description: "Learn the complete rules of Flagball",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      name: "Partner",
                      url: "https://flagball.com/partner",
                      description: "Partnership opportunities with Flagball",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      name: "FAQ",
                      url: "https://flagball.com/faq",
                      description: "Frequently asked questions about Flagball",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {children}
      </body>
    </html>
  );
}
