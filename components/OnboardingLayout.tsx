"use client";

import { useEffect, useRef, useState } from "react";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  videoSrc?: string;
  overlay?: boolean;
  centerContent?: boolean;
}

export default function OnboardingLayout({
  children,
  videoSrc = "",
  overlay = false,
  centerContent = true,
}: OnboardingLayoutProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setLoaded(false);

    video.load();
    const onLoad = () => setLoaded(true);

    video.addEventListener("loadeddata", onLoad);
    return () => video.removeEventListener("loadeddata", onLoad);
  }, [videoSrc]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[rgba(13,18,32,0.9)]">
      {/* 🎥 Background Video */}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`fixed top-0 left-0 h-screen w-screen object-cover transition-opacity duration-700 pointer-events-none ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 🌑 Overlay */}
      {overlay && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />
      )}

      {/* 🧩 Content Layer */}
      <div
        className={`relative z-10 w-full min-h-screen px-4 ${
          centerContent
            ? "flex flex-col items-center justify-center"
            : "flex flex-col"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
