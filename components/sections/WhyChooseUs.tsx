'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  FiAward,
  FiZap,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiClock,
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: 'Engineering Excellence',
    description:
      'Enterprise-grade execution standards with precision-driven digital engineering workflows.',
    icon: FiAward,
  },

  {
    id: 2,
    title: 'Rapid Deployment',
    description:
      'Accelerated implementation pipelines without compromising system stability or quality.',
    icon: FiZap,
  },

  {
    id: 3,
    title: 'Scalable Infrastructure',
    description:
      'Modern digital ecosystems designed to scale seamlessly with business growth.',
    icon: FiTrendingUp,
  },

  {
    id: 4,
    title: 'Enterprise Security',
    description:
      'Advanced protection systems with secure infrastructure and compliance-focused architecture.',
    icon: FiShield,
  },

  {
    id: 5,
    title: 'Expert Engineering Team',
    description:
      'A multidisciplinary team of experienced BIM specialists, developers, and consultants.',
    icon: FiUsers,
  },

  {
    id: 6,
    title: '24/7 Technical Support',
    description:
      'Dedicated support systems ensuring uninterrupted operational continuity.',
    icon: FiClock,
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-medium text-blue-400">
              Why Industry Leaders Choose Hilltain
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Enterprise-Level
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Engineering Advantages
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We combine advanced engineering precision, intelligent
            digital systems, and enterprise-grade scalability to
            deliver high-performance infrastructure solutions for
            modern organizations.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* LEFT FEATURED CARD */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_80px_rgba(77,141,255,0.16)] lg:col-span-5"
          >
            {/* Glow */}
            <div className="absolute right-[-100px] top-[-80px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:bg-blue-500/20" />

            {/* Content */}
            <div className="relative z-10">

              {/* Badge */}
              <div className="mb-8 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
                <span className="text-sm font-medium text-blue-400">
                  Enterprise Infrastructure
                </span>
              </div>

              {/* Heading */}
              <h3 className="max-w-md text-4xl font-bold leading-tight text-white md:text-5xl">
                Built For
                <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Modern Digital Scale
                </span>
              </h3>

              {/* Description */}
              <p className="mt-8 text-lg leading-8 text-gray-400">
                Hilltain Group engineers intelligent ecosystems
                combining BIM precision, AI automation, enterprise
                software systems, and scalable digital infrastructure.
              </p>

              {/* Stats */}
              {/* Capability Highlights */}
              <div className="mt-12 space-y-4">

                {/* Row 1 */}
                <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:shadow-[0_0_40px_rgba(77,141,255,0.10)]">

                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <FiAward className="text-3xl" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-white">
                      BIM Precision
                    </h4>

                    <p className="mt-2 max-w-xl text-base leading-7 text-gray-400">
                      Intelligent BIM coordination systems for architecture,
                      structural engineering, MEP workflows, and infrastructure projects.
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:shadow-[0_0_40px_rgba(77,141,255,0.10)]">

                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <FiZap className="text-3xl" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-white">
                      AI Automation
                    </h4>

                    <p className="mt-2 max-w-xl text-base leading-7 text-gray-400">
                      Smart automation systems and intelligent digital workflows
                      designed to improve operational efficiency and scalability.
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:shadow-[0_0_40px_rgba(77,141,255,0.10)]">

                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <FiTrendingUp className="text-3xl" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-white">
                      Scalable Systems
                    </h4>

                    <p className="mt-2 max-w-xl text-base leading-7 text-gray-400">
                      Enterprise-ready software systems and scalable digital
                      infrastructure engineered for modern business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURE GRID */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index + 1] = el;
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-500/[0.04] hover:shadow-[0_0_60px_rgba(77,141,255,0.15)]"
                >
                  {/* Hover Glow */}
                  <div className="absolute -right-12 top-[-50px] h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">

                    {/* Top */}
                    <div className="mb-8">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                        <Icon className="text-3xl" />
                      </div>

                      {/* <FiArrowUpRight className="text-lg text-gray-500 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" /> */}
                    </div>

                    {/* Text */}
                    <h4 className="text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-blue-300">
                      {feature.title}
                    </h4>

                    <p className="mt-4 text-base leading-7 text-gray-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}