import { useEffect } from "react";

export function useScrollNavbar(closeMenu: () => void) {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const header = document.querySelector("header");
      const heroSection = document.getElementById("hero");
      const currentScrollY = window.scrollY;

      if (!header || !heroSection) return;

      // Get the height of the hero section
      const heroHeight = heroSection.offsetHeight;

      if (currentScrollY < 100) {
        // At the top - show transparent navbar
        header.style.transform = "translateY(0)";
        header.classList.remove("navbar-opaque");
        header.classList.add("navbar-transparent");
      } else if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
        // Scrolling down AND past hero section - hide navbar and close mobile menu
        header.style.transform = "translateY(-100%)";
        header.classList.remove("navbar-transparent");
        header.classList.add("navbar-opaque");
        closeMenu();
      } else if (currentScrollY <= heroHeight) {
        // Within hero section - show opaque navbar but keep visible
        header.style.transform = "translateY(0)";
        header.classList.remove("navbar-transparent");
        header.classList.add("navbar-opaque");
      } else {
        // Scrolling up - show opaque navbar
        header.style.transform = "translateY(0)";
        header.classList.remove("navbar-transparent");
        header.classList.add("navbar-opaque");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    // Call once on mount
    updateNavbar();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeMenu]);
}
