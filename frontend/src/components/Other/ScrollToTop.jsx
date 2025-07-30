import { useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Handle initial page load/refresh
    window.scrollTo(0, 0);
    
    return () => {
      // Reset when component unmounts
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // Handle route changes (navigation between pages)
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}