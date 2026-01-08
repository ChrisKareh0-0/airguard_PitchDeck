import { useRef, useEffect, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export default function OptimizedVideo({
  src,
  className = "",
  muted = true,
  loop = true,
  playsInline = true,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load video when it comes into view
            video.load();
            observer.unobserve(video);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="none"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
    </div>
  );
}
