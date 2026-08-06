'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Link from 'next/link';

import {
  FiArrowRight,
  FiArrowDown,
  FiArrowUpRight,
  FiCpu,
  FiLayers,
  FiCode,
} from 'react-icons/fi';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    tl.to('.hero-grid', {
      opacity: 1,
      duration: 1.2,
    })
      .to(
        '.hero-badge',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        '-=0.7'
      )
      .to(
        '.hero-title',
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .to(
        '.hero-subtitle',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.6'
      )
      .to(
        '.hero-cta',
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .to(
        '.hero-highlights',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
        },
        '-=0.4'
      )
      .to(
        '.hero-visual',
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=1'
      );
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] pt-32 md:pt-36"
    >
      {/* Background Grid */}
      <div className="hero-grid absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,141,255,0.12),transparent_70%)]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-600/20 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-between gap-20 px-6 md:flex-row md:px-10 lg:px-16">

        {/* LEFT SIDE */}
        <div className="w-full max-w-2xl text-center md:text-left">

          {/* Badge */}
          <div className="hero-badge opacity-0 translate-y-8 mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

            <span className="text-sm text-gray-300">
              Future-Ready Engineering & Digital Systems
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-title opacity-0 translate-y-10 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Engineering
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Intelligent Digital
            </span>

            <br />

            Infrastructure
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle opacity-0 translate-y-10 mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
            Hilltain Group delivers premium BIM solutions,
            AI-powered systems, enterprise software engineering,
            and scalable digital infrastructure for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">

            <Link
              href="#contact"
              className="hero-cta opacity-0 translate-y-10 group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(77,141,255,0.45)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="#services"
              className="hero-cta opacity-0 translate-y-10 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              Explore Services
            </Link>
          </div>

          {/* Premium Highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">

            <div className="hero-highlights opacity-0 translate-y-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] px-6 py-4 backdrop-blur-2xl min-w-[165px] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_35px_rgba(77,141,255,0.18)]">
              <p className="text-2xl font-bold text-blue-400">
                BIM
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Intelligent Modeling Systems
              </p>
            </div>

            <div className="hero-highlights opacity-0 translate-y-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] px-6 py-4 backdrop-blur-2xl min-w-[165px] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_35px_rgba(77,141,255,0.18)]">
              <p className="text-2xl font-bold text-blue-400">
                AI
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Smart Workflow Automation
              </p>
            </div>

            <div className="hero-highlights opacity-0 translate-y-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] px-6 py-5 backdrop-blur-2xl min-w-[165px] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_35px_rgba(77,141,255,0.18)]">
              <p className="text-2xl font-bold text-blue-400">
                Web
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Enterprise Software Systems
              </p>
            </div>

            {/* Scroll
            <div className="hidden items-center gap-2 pl-4 text-gray-500 lg:flex">
              <span className="text-sm">
                Scroll
              </span>

              <FiArrowDown className="animate-bounce text-lg" />
            </div> */}


          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual opacity-0 scale-90 relative flex w-full max-w-xl items-center justify-center">

          {/* Main Circle */}
          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent backdrop-blur-3xl">

            {/* Glow */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

            {/* Floating Cards */}
            <div className="absolute left-[-30px] top-[70px] rounded-2xl border border-white/10 bg-[#0D1324]/80 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(77,141,255,0.15)]">
              <FiLayers className="mb-3 text-3xl text-blue-400" />

              <h4 className="font-semibold text-white">
                BIM Solutions
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                Intelligent modeling systems
              </p>
            </div>

            <div className="absolute right-[-20px] top-[180px] rounded-2xl border border-white/10 bg-[#0D1324]/80 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(77,141,255,0.15)]">
              <FiCpu className="mb-3 text-3xl text-blue-400" />

              <h4 className="font-semibold text-white">
                AI Automation
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                Smart digital workflows
              </p>
            </div>

            <div className="absolute bottom-[20px] left-[70px] rounded-2xl border border-white/10 bg-[#0D1324]/80 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(77,141,255,0.15)]">
              <FiCode className="mb-3 text-3xl text-blue-400" />

              <h4 className="font-semibold text-white">
                Software Systems
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                Enterprise-grade engineering
              </p>
            </div>

            {/* Core */}
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-xl shadow-[0_0_60px_rgba(77,141,255,0.25)]">

              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_40px_rgba(77,141,255,0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:flex">
        <div className="flex animate-bounce flex-col items-center text-gray-400">
          <span className="mb-2 text-sm">
            Scroll
          </span>

          <FiArrowDown className="text-xl" />
        </div>
      </div>
    </section>
  );
}