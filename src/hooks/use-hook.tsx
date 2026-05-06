import { useState, useEffect } from "react";

interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  screenWidth: number;
}

export const useScreenSize = (): ScreenSize => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  return { isMobile, isTablet, screenWidth };
};
