"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

// Note: Metadata export doesn't work in client components, handle via layout or other means

export default function WatchPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      router.push("/");
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [router]);

  const handleClose = () => {
    router.push("/");
  };

  const toggleControls = () => {
    setShowControls(!showControls);
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

      {/* Video Container - Click to toggle controls */}
      <div
        onClick={toggleControls}
        className="w-[100dvw] h-[100dvh] md:w-full md:h-full cursor-pointer"
      >
        {/* Full Screen Video */}
        <video
          ref={videoRef}
          autoPlay
          controls={showControls}
          className="w-[100dvw] h-[100dvh] md:w-full md:h-full object-contain"
        >
          <source
            src="https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_trailer_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}
