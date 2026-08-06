'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  FiCpu,
  FiLayers,
  FiGlobe,
  FiDatabase,
  FiCode,
  FiBarChart2,
  FiZap,
  FiBox,
  FiCloud,
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const ecosystem = [
  {
    id: 1,
    title: 'BIM Coordination',
    description:
      'Advanced multi-disciplinary BIM coordination workflows with intelligent clash detection systems.',
    icon: FiBox,
  },

  {
    id: 2,
    title: 'AI Automation',
    description:
      'Smart automation systems engineered for modern business operations and digital workflows.',
    icon: FiCpu,
  },

  {
    id: 3,
    title: 'Enterprise Software',
    description:
      'Scalable enterprise-grade applications built for performance, security, and reliability.',
    icon: FiCode,
  },

  {
    id: 4,
    title: 'Cloud Infrastructure',
    description:
      'Modern cloud-native architecture enabling high-performance deployment and scalability.',
    icon: FiCloud,
  },

  {
    id: 5,
    title: 'Data Intelligence',
    description:
      'Real-time analytics systems delivering actionable insights and operational intelligence.',
    icon: FiBarChart2,
  },

  {
    id: 6,
    title: 'Digital Ecosystems',
    description:
      'Integrated digital platforms connecting BIM, AI, software, and enterprise systems.',
    icon: FiGlobe,
  },

  {
    id: 7,
    title: 'Infrastructure Systems',
    description:
      'Robust backend architecture designed for long-term enterprise scalability.',
    icon: FiDatabase,
  },

  {
    id: 8,
    title: 'Automation Workflows',
    description:
      'Intelligent process optimization pipelines for modern engineering and business environments.',
    icon: FiZap,
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 70,
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
      className="relative overflow-hidden bg-[#050816] py-28"
      id="ecosystem"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[15%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mx-auto mb-24 max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-medium text-blue-400">
              Infrastructure Ecosystem
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Intelligent
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Engineering
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Hilltain Group combines BIM engineering, AI systems,
            enterprise software, and scalable infrastructure into
            one unified digital ecosystem built for modern businesses.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Featured Left Card */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_80px_rgba(77,141,255,0.16)] md:p-10 lg:col-span-5"
          >
            {/* Glow */}
            <div className="absolute right-[-100px] top-[-80px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:bg-blue-500/20" />

            <div className="relative z-10 flex h-full flex-col justify-between">

              {/* Top Content */}
              <div>

                {/* Badge */}
                <div className="mb-8 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
                  <span className="text-sm font-medium text-blue-400">
                    Unified Infrastructure
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                  Engineering
                  <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Connected Ecosystems
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-8 text-xl leading-9 text-gray-300 md:text-2xl md:leading-10">
                  We integrate advanced BIM engineering, intelligent automation,
                  enterprise software systems, cloud infrastructure, and modern
                  digital technologies into scalable ecosystems designed for
                  construction firms, infrastructure organizations, startups,
                  and future-ready enterprises seeking long-term operational
                  efficiency, precision, and digital transformation.
                </p>
              </div>

              {/* Visual System */}
              <div className="relative mt-12 flex items-center justify-center">

                <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-blue-400/10">

                  {/* Orbit Rings */}
                  <div className="absolute h-56 w-56 rounded-full border border-blue-400/10" />

                  <div className="absolute h-40 w-40 rounded-full border border-blue-400/10" />

                  {/* Center Core */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_0_60px_rgba(77,141,255,0.45)]">

                    <FiLayers className="text-4xl text-white" />
                  </div>

                  {/* Floating Nodes */}
                  <div className="absolute left-0 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                    <FiBox className="text-2xl text-blue-400" />
                  </div>

                  <div className="absolute right-0 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                    <FiCpu className="text-2xl text-blue-400" />
                  </div>

                  <div className="absolute top-0 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                    <FiCode className="text-2xl text-blue-400" />
                  </div>

                  <div className="absolute bottom-0 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                    <FiCloud className="text-2xl text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">

            {ecosystem.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index + 1] = el;
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-500/[0.04] hover:shadow-[0_0_60px_rgba(77,141,255,0.15)]"
                >
                  {/* Hover Glow */}
                  <div className="absolute -right-12 top-[-50px] h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">

                    {/* Icon */}
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                      <Icon className="text-3xl" />
                    </div>

                    {/* Title */}
                    <h4 className="text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-blue-300">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-4 text-base leading-7 text-gray-400">
                      {item.description}
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