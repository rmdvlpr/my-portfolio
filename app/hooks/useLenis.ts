"use client";
import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

const useLenis = () => {
  useEffect(() => {
    if (!lenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);
};

export { useLenis, lenis };
