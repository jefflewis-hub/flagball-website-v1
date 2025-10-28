"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

// Note: Metadata export doesn't work in client components, handle via layout or other means

export default function WatchPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      router.push("/");
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, [router]);

  const handleClose = () => {
    router.push("/");
  };

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <main className="relative w-[100dvw] h-[100dvh] md:w-screen md:h-screen overflow-hidden bg-black">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-50 text-white hover:opacity-80 transition-opacity"
        aria-label="Close video"
      >
        <IoIosCloseCircle size={48} />
      </button>

      {/* Video Container - Full Screen */}
      <div className="relative w-[100dvw] h-[100dvh] md:w-full md:h-full md:flex md:items-center md:justify-center">
        {/* Full Screen Video */}
        <video
          ref={videoRef}
          playsInline
          preload="auto"
          poster="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_v1.png"
          controls={showControls}
          onClick={toggleControls}
          className={`cursor-pointer bg-black ${
            isPlaying
              ? "absolute top-0 left-0 w-full h-full object-contain"
              : "absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] px-10 h-auto object-contain md:static md:translate-x-0 md:translate-y-0 md:px-0"
          }`}
        >
          <source
            src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_trailer_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play Button - Positioned just below center on mobile, fixed at bottom on desktop */}
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-24 md:translate-y-0 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-8 transition-all duration-300 z-40"
            aria-label="Play video"
          >
            <FaPlay className="text-white text-6xl ml-2" />
          </button>
        )}
      </div>
    </main>
  );
}
