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

      {/* Video Container */}
      <div className="relative w-[100dvw] h-[100dvh] md:w-full md:h-full p-12 md:p-20 flex items-center justify-center">
        {/* Full Screen Video */}
        <video
          ref={videoRef}
          playsInline
          preload="auto"
          poster="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/logo_v1.png"
          controls={showControls}
          onClick={toggleControls}
          className="w-full h-full max-w-[600px] object-contain cursor-pointer"
        >
          <source
            src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_trailer_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay - Shows when video is not playing, positioned below center to not cover logo */}
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-8 transition-all duration-300"
            aria-label="Play video"
          >
            <FaPlay className="text-white text-6xl ml-2" />
          </button>
        )}
      </div>
    </main>
  );
}
