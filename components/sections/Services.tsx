'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiBarChart2,
  FiSearch,
  FiShoppingCart,
  FiCpu,
  FiBox,
  FiLayers,
  FiZap,
  FiCheckCircle,
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Information Technology',
    icon: FiCode,
    gradient:
      'from-blue-500/20 via-blue-400/5 to-transparent',
    services: [
      'Web Development',
      'Android & iOS App Development',
      'Custom Software Development',
      'UI / UX Design',
      'Data Analysis',
      'Database Engineering',
      'Backend Development',
      'SEO & Digital Marketing',
      'AI Solutions',
      'E-Commerce Platforms',
      'Technical Writing'
    ],
  },

  {
    title: 'Building Information Modeling',
    icon: FiBox,
    gradient:
      'from-indigo-500/20 via-blue-400/5 to-transparent',
    services: [
      'Architectural Modeling',
      'Structural Modeling',
      'MEP Modeling',
      'LOD 400 Development',
      'Clash Detection & Coordination',
      'Shop Drawing',
      'Construction Documentation',
      'Rendering & Visualization',
      'BIM Coordination',
      'Project Workflow Optimization',
    ],
  },
];

export default function Services() {
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
        stagger: 0.2,
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
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Ambient Background */}
      <div className="absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-medium text-blue-400">
              Our Expertise
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Engineering Premium
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Ecosystems
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Hilltain Group combines advanced BIM engineering and
            modern software systems to deliver enterprise-grade
            digital infrastructure solutions.
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {services.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_0_80px_rgba(77,141,255,0.18)]"
              >
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70`}
                />

                {/* Hover Glow */}
                <div className="absolute -right-20 top-[-80px] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(77,141,255,0.18)] transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/20">
                    <Icon className="text-4xl" />
                  </div>

                  {/* Title */}
                  <h3 className="max-w-md text-3xl font-bold leading-tight text-white md:text-4xl">
                    {category.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-400/50 to-transparent" />

                  {/* Service List */}
                  <div className="mt-8 grid grid-cols-1 gap-5">

                    {category.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                          <FiCheckCircle className="text-sm" />
                        </div>

                        <p className="text-lg leading-7 text-gray-300 transition-colors duration-300 group-hover:text-white">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}