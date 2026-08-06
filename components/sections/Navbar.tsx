'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from 'react-icons/fi';

import { useScrollProgress } from '@hooks/useAnimations';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuHeight = isOpen ? '580px' : '88px';
  const progressRef = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <div
            className="transition-all duration-500 lg:hidden"
            style={{
            height: mobileMenuHeight,
            }}
        />
      {/* Scroll Progress */}
      <div
        ref={progressRef as any}
        className="fixed left-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-blue-400 to-blue-600"
        style={{
          transform: 'scaleX(0)',
        }}
      />

      {/* NAVBAR WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">

        <nav className="w-full">

          <div className="mx-auto max-w-7xl px-0 md:px-4 lg:px-6">

            {/* MAIN CONTAINER */}
            <div
              className={`overflow-hidden border-b md:border md:rounded-2xl transition-all duration-500 ${
                isScrolled
                  ? 'border-white/10 bg-[#050816]/92 backdrop-blur-2xl shadow-[0_0_40px_rgba(77,141,255,0.10)]'
                  : 'border-white/5 bg-[#050816]/85 backdrop-blur-xl'
              }`}
            >

              {/* TOP BAR */}
              <div className="relative flex items-center justify-between px-4 py-4 md:px-8">

                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,141,255,0.12),transparent_40%)]" />

                {/* LEFT */}
                <Link
                  href="/"
                  className="relative z-10 flex items-center gap-4"
                >
                  {/* Logo */}
                  {/* <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_20px_rgba(77,141,255,0.08)]"> */}
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] shadow-[0_0_20px_rgba(77,141,255,0.08)]">
                    <Image
                      src="/logo.png"
                      alt="Hilltain Group Logo"
                      width={54}
                      height={54 }
                      priority
                      className="object-contain"
                    />
                  </div>

                  {/* Brand */}
                  <div className="hidden sm:block">
                    <h2 className="text-lg font-semibold text-white">
                      Hilltain
                    </h2>

                    <p className="text-[12px] uppercase tracking-[0.32em] text-gray-400">
                      Go With the Flow
                    </p>
                  </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="relative z-10 hidden items-center gap-2 lg:flex">

                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group relative rounded-xl px-5 py-3 text-sm font-medium text-gray-400 transition-all duration-300 hover:text-white"
                    >
                      <div className="absolute inset-0 rounded-xl bg-white/[0.04] opacity-0 transition-all duration-300 group-hover:opacity-100" />

                      <span className="relative z-10">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* DESKTOP CTA */}
                {/* <div className="relative z-10 hidden lg:flex">

                  <button className="group flex items-center gap-2 rounded-xl border border-blue-400/20 bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(77,141,255,0.25)] transition-all duration-300 hover:scale-[1.03]">

                    Start Project

                    <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </div> */}

                {/* MOBILE BUTTON */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-blue-400/40 lg:hidden"
                >
                  {isOpen ? (
                    <FiX className="text-xl" />
                  ) : (
                    <FiMenu className="text-xl" />
                  )}
                </button>
              </div>

              {/* MOBILE MENU */}
              <div
                className={`lg:hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? 'max-h-[700px] opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >

                <div className="border-t border-white/10 bg-[#050816] px-4 pb-5 pt-4">

                  {/* Mobile Links */}
                  <div className="space-y-3">

                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-white transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
                      >
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>

                        <FiArrowUpRight className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" />
                      </Link>
                    ))}
                  </div>

                  {/* MOBILE CTA */}
                  {/* <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(77,141,255,0.25)] transition-all duration-300 hover:scale-[1.02]">
                    Start Your Project
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}