"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaStopCircle } from "react-icons/fa";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const storyVideoRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Aggressively load mobile video immediately
  useEffect(() => {
    const mobileVideo = document.querySelector('video.min-\\[500px\\]\\:hidden') as HTMLVideoElement;
    if (mobileVideo) {
      // Use prefetched blob if available, otherwise force load
      if ((window as any).__mobileVideoBlob__) {
        mobileVideo.src = (window as any).__mobileVideoBlob__;
      }
      mobileVideo.load();
      const playPromise = mobileVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Mobile video auto-play prevented:", error);
        });
      }
    }
    
    // Load desktop video separately with lower priority
    const desktopVideo = document.querySelector('video.hidden.min-\\[500px\\]\\:block') as HTMLVideoElement;
    if (desktopVideo && window.innerWidth >= 500) {
      setTimeout(() => {
        desktopVideo.load();
        desktopVideo.play().catch((error) => {
          console.log("Desktop video auto-play prevented:", error);
        });
      }, 100);
    }
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowControls(false);
    }
  };

  const handleStopClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      setShowControls(!showControls);
    }
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lazy load trailer video with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      {
        rootMargin: "100px", // Start loading 100px before video is visible
        threshold: 0.1,
      }
    );

    const currentRef = storyVideoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [shouldLoadVideo]);

  return (
    <main className="relative w-[100dvw] md:w-screen overflow-x-hidden">
      <Navigation bgColor={isScrolled ? "#1F1F1E" : "transparent"} />

      {/* Hero Section */}
      <section className="relative w-[100dvw] h-[100dvh] md:w-full md:h-screen overflow-hidden">
        {/* Video Background - Mobile (PRIORITY LOAD) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="min-[500px]:hidden absolute top-0 left-0 w-[100dvw] h-[100dvh] object-cover"
          style={{ 
            contentVisibility: "auto",
            willChange: "transform"
          }}
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%232E2E2E' width='1' height='1'/%3E%3C/svg%3E"
        >
          <source
            src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flag_landing_video_mobile_v1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video Background - Desktop (Lower priority) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hidden min-[500px]:block absolute top-0 left-0 w-full h-full object-cover"
          style={{ 
            contentVisibility: "auto",
            willChange: "transform"
          }}
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%232E2E2E' width='1' height='1'/%3E%3C/svg%3E"
        >
          <source
            src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_landing_page_v3.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] md:w-full md:h-full bg-[#2E2E2E] opacity-70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 md:px-4 pt-16 md:pt-0">
          <Image
            src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_svg_v1.svg"
            alt="FLAGBALL"
            width={600}
            height={150}
            className="mb-4 w-[75dvw] md:w-auto max-w-xl h-auto md:h-32"
            priority
          />
          <p className="text-white text-xl md:text-2xl tracking-wide font-medium">
            Coming June 2026
          </p>
        </div>
      </section>

      {/* The Game Section */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-4">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-flagball-red mb-12 md:mb-16">
            The Game
          </h2>
          <div className="grid grid-cols-1 gap-0">
            {/* Card 1: 11-on-11 */}
            <div className="flex items-center gap-8 md:gap-10 pb-6 md:pb-5 pt-6 md:pt-5 border-t border-b border-gray-300">
              <div className="w-14 h-14 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                <div
                  className="font-bold text-flagball-red leading-none text-center"
                  style={{ fontSize: "50px" }}
                >
                  11
                </div>
              </div>
              <div className="text-lg md:text-xl text-gray-900 text-left leading-tight">
                <span className="font-bold text-flagball-red">on-11</span>.{" "}
                <span className="md:hidden">
                  5 receivers, 5 lineman, and a QB
                </span>
                <span className="hidden md:inline">
                  There are 5 receivers, 5 lineman, and a QB
                </span>
              </div>
            </div>

            {/* Card 2: Flag */}
            <div className="flex items-center gap-8 md:gap-10 py-6 md:py-5 border-b border-gray-300">
              <div className="w-14 h-14 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 34 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <rect x="1" y="2.34717" width="2" height="5" fill="#FF0000" />
                  <rect
                    x="30"
                    y="2.34717"
                    width="2"
                    height="5"
                    fill="#FF0000"
                  />
                  <rect
                    x="3"
                    y="9.34717"
                    width="6"
                    height="71"
                    fill="#FF0000"
                  />
                  <rect
                    x="24"
                    y="9.34717"
                    width="6"
                    height="71"
                    fill="#FF0000"
                  />
                  <rect
                    x="3.2963"
                    y="77.5931"
                    width="2.2963"
                    height="20.1087"
                    transform="rotate(-45 3.2963 77.5931)"
                    fill="#FF0000"
                  />
                  <rect
                    x="27.8486"
                    y="75.9696"
                    width="2.2963"
                    height="20.1087"
                    transform="rotate(45 27.8486 75.9696)"
                    fill="#FF0000"
                  />
                  <path
                    d="M3.77188 88.402C2.87512 87.5053 2.87512 86.0514 3.77187 85.1546L17.9908 99.3736L16.3671 100.997L3.77188 88.402Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M29.6443 85.6555C30.541 86.5523 30.541 88.0062 29.6443 88.903L16.4015 102.146L14.7778 100.522L29.6443 85.6555Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M32.521 3.33681V1.6684C32.521 1.22591 32.4375 0.80155 32.2887 0.488664C32.14 0.175778 31.9382 0 31.7278 0H1.58639C1.37602 0 1.17427 0.175778 1.02552 0.488664C0.876765 0.80155 0.793196 1.22591 0.793196 1.6684V3.33681C0.582827 3.33681 0.381075 3.51258 0.232322 3.82547C0.0835688 4.13836 0 4.56272 0 5.00521C0 5.4477 0.0835688 5.87206 0.232322 6.18495C0.381075 6.49783 0.582827 6.67361 0.793196 6.67361V8.34201C0.793196 8.7845 0.876765 9.20887 1.02552 9.52175C1.17427 9.83464 1.37602 10.0104 1.58639 10.0104H2.37959V88.4253C2.37953 88.7419 2.42229 89.052 2.50287 89.3193C2.58346 89.5867 2.69854 89.8003 2.83468 89.9353L16.319 103.282C16.4248 103.387 16.5403 103.441 16.6571 103.441C16.774 103.441 16.8894 103.387 16.9952 103.282L30.4796 89.9353C30.6157 89.8003 30.7308 89.5867 30.8114 89.3193C30.8919 89.052 30.9347 88.7419 30.9346 88.4253V10.0104H31.7278C31.9382 10.0104 32.14 9.83464 32.2887 9.52175C32.4375 9.20887 32.521 8.7845 32.521 8.34201V6.67361C32.7314 6.67361 32.9332 6.49783 33.0819 6.18495C33.2307 5.87206 33.3142 5.4477 33.3142 5.00521C33.3142 4.56272 33.2307 4.13836 33.0819 3.82547C32.9332 3.51258 32.7314 3.33681 32.521 3.33681ZM29.3483 87.3659L16.6571 99.929L3.96598 87.3659V81.0447L16.319 93.2721C16.4248 93.3764 16.5403 93.4306 16.6571 93.4306C16.774 93.4306 16.8894 93.3764 16.9952 93.2721L29.3483 81.0447V87.3659ZM29.3483 77.3555L16.6571 89.9186L3.96598 77.3555V10.0104H29.3483V77.3555ZM30.9346 6.67361H2.37959V3.33681H30.9346V6.67361Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
              <div className="text-lg md:text-xl text-gray-900 text-left leading-tight">
                Pull <span className="font-bold text-flagball-red">flag</span>{" "}
                to down the ball carrier
              </div>
            </div>

            {/* Card 3: Blocking */}
            <div className="flex items-center gap-8 md:gap-10 pt-6 md:pt-5 pb-6 md:pb-5 border-b border-gray-300">
              <div className="w-14 h-14 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <g clipPath="url(#clip0_5_92)">
                    <path
                      d="M67.7422 0H24.2578C10.8821 0 0 10.8821 0 24.2578V40.6094C0 42.0979 1.20678 43.3047 2.69531 43.3047H16.3516V89.3047C16.3516 90.7932 17.5583 92 19.0469 92H72.9531C74.4417 92 75.6484 90.7932 75.6484 89.3047V43.3047H89.3047C90.7932 43.3047 92 42.0979 92 40.6094V24.2578C92 10.8821 81.1179 0 67.7422 0ZM37.9051 5.39062H54.0951C54.0825 5.58199 54.0861 5.22693 54.0861 8.26562C54.0861 12.7242 50.4588 16.3516 46.0002 16.3516C41.5416 16.3516 37.9142 12.7242 37.9142 8.26562V5.57031C37.9141 5.50958 37.9089 5.45028 37.9051 5.39062ZM86.6094 37.9141H75.6484V29.8281C75.6484 28.3396 74.4417 27.1328 72.9531 27.1328C71.4646 27.1328 70.2578 28.3396 70.2578 29.8281V86.6094H21.7422V29.8281C21.7422 28.3396 20.5354 27.1328 19.0469 27.1328C17.5583 27.1328 16.3516 28.3396 16.3516 29.8281V37.9141H5.39062V24.2578C5.39062 13.8544 13.8544 5.39062 24.2578 5.39062H32.5324C32.5198 5.58199 32.5234 5.22693 32.5234 8.26562C32.5234 15.6966 38.569 21.7422 46 21.7422C53.431 21.7422 59.4766 15.6966 59.4766 8.26562C59.4766 5.22585 59.4802 5.58199 59.4676 5.39062H67.7422C78.1456 5.39062 86.6094 13.8544 86.6094 24.2578V37.9141Z"
                      fill="#FF0000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_92">
                      <rect width="92" height="92" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-lg md:text-xl text-gray-900 text-left leading-tight">
                Open-hand{" "}
                <span className="font-bold text-flagball-red">blocking</span>{" "}
                between the waist and shoulders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The League Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 md:px-4">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-flagball-red mb-12 md:mb-16">
            The League
          </h2>
          <div className="grid grid-cols-1 gap-0">
            <div className="flex flex-col md:flex-row text-gray-900 pb-6 border-b border-gray-300">
              <span className="text-gray-600 text-base uppercase md:text-gray-700 md:text-xl md:normal-case mb-2 md:mb-0 md:w-56 md:flex-shrink-0">
                Regular Season
              </span>
              <span className="text-lg md:text-xl">
                6 teams each play 16 games
              </span>
            </div>
            <div className="flex flex-col md:flex-row text-gray-900 py-6 border-b border-gray-300">
              <span className="text-gray-600 text-base uppercase md:text-gray-700 md:text-xl md:normal-case mb-2 md:mb-0 md:w-56 md:flex-shrink-0">
                Playoffs
              </span>
              <span className="text-lg md:text-xl">
                4 teams. Win or go home
              </span>
            </div>
            <div className="flex flex-col md:flex-row text-gray-900 py-6 border-b border-gray-300">
              <span className="text-gray-600 text-base uppercase md:text-gray-700 md:text-xl md:normal-case mb-2 md:mb-0 md:w-56 md:flex-shrink-0">
                Schedule
              </span>
              <span className="text-lg md:text-xl">
                Teams play twice per week for eight weeks
              </span>
            </div>
            <div className="flex flex-col md:flex-row text-gray-900 pt-6">
              <span className="text-gray-600 text-base uppercase md:text-gray-700 md:text-xl md:normal-case mb-2 md:mb-0 md:w-56 md:flex-shrink-0">
                Roster
              </span>
              <span className="text-lg md:text-xl">30 players per team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-4">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-flagball-red mb-12 md:mb-16">
            Our Story
          </h2>
          <div ref={storyVideoRef}>
            <div
              className="relative w-full cursor-pointer bg-white rounded-lg"
              style={{ paddingBottom: "56.25%" }}
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                preload="none"
                playsInline
                poster="/poster.jpg"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl bg-white object-cover"
              >
                {shouldLoadVideo && (
                  <source
                    src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_trailer_video.mp4"
                    type="video/mp4"
                  />
                )}
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Button - Always visible when not playing */}
              {!isPlaying && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayClick();
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:opacity-80 transition-opacity z-10"
                  aria-label="Play video"
                >
                  <FaCirclePlay size={64} />
                </button>
              )}

              {/* Custom Stop Button - Only visible on click while playing */}
              {isPlaying && showControls && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStopClick();
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:opacity-80 transition-opacity z-10"
                  aria-label="Stop video"
                >
                  <FaStopCircle size={64} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F1F1E] py-12 md:py-16 px-5 md:px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-6">
            Flag for the whole team
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} Flagball. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
