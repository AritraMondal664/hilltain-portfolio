'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Image from "next/image";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animate loading screen
    const tl = gsap.timeline();

    // Particle animation
    tl.to('.loading-particles', {
      opacity: 1,
      duration: 0.5,
    })
      .to(
        '.loading-logo',
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        },
        '<'
      )
      .to(
        '.loading-text',
        {
          opacity: 1,
          duration: 0.5,
        },
        '<0.3'
      )
      .to(
        '.loading-bar',
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
        },
        '<0.2'
      )
      .to(
        '.loading-screen',
        {
          opacity: 0,
          duration: 0.5,
          delay: 0.3,
          onComplete: () => setIsVisible(false),
        }
      );

    return () => {
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen fixed inset-0 bg-brand-dark z-50 flex items-center justify-center">
      {/* Glowing particles background */}
      <div className="loading-particles absolute inset-0 opacity-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-blue rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-glow-blue rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="loading-logo scale-0 opacity-0 mb-8">
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center">

            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-[24px] bg-blue-500/20 blur-2xl"></div>

            {/* Logo Container */}
            <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-white shadow-[0_0_30px_rgba(77,141,255,0.20)]">

              <Image
                src="/logo.png"
                alt="Hilltain Group Logo"
                width={80}
                height={80}
                priority
                className="object-contain"
              />

            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="loading-text opacity-0">
          <h2 className="mb-2 text-3xl font-bold text-white tracking-tight">
            Hilltain
          </h2>
          <p className="text-sm uppercase tracking-[0.28em] text-gray-400">Go With the Flow</p>
        </div>

        {/* Loading bar */}
        <div className="mt-8">
          <div className="mx-auto h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <div className="loading-bar h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
