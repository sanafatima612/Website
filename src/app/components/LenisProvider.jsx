'use client';
import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LenisProvider({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function updateScroll(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(updateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateScroll);
    };
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        autoRaf: false,
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false
      }} 
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}