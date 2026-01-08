import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Video autoplay observer
    const videos = document.querySelectorAll<HTMLVideoElement>("video");
    const videoObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    videos.forEach((video) => {
      videoObserver.observe(video);
    });

    return () => {
      revealElements.forEach((el) => {
        revealObserver.unobserve(el);
      });
      videos.forEach((video) => {
        videoObserver.unobserve(video);
      });
    };
  }, []);
}
