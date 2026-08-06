'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  FiCompass,
  FiTarget,
  FiEdit3,
  FiCode,
  FiZap,
  FiCheckCircle,
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: '01',
    title: 'Discovery',
    description:
      'Understanding your business goals, operational workflows, technical requirements, and future scalability objectives.',
    icon: FiCompass,
  },

  {
    id: '02',
    title: 'Strategy',
    description:
      'Building a structured roadmap with enterprise-grade planning, system architecture, and intelligent execution models.',
    icon: FiTarget,
  },

  {
    id: '03',
    title: 'Design',
    description:
      'Crafting premium digital experiences, modern UI systems, and intuitive infrastructure workflows.',
    icon: FiEdit3,
  },

  {
    id: '04',
    title: 'Development',
    description:
      'Engineering scalable, high-performance platforms with robust backend architecture and modern technologies.',
    icon: FiCode,
  },

  {
    id: '05',
    title: 'Optimization',
    description:
      'Fine-tuning performance, security, scalability, responsiveness, and overall system efficiency.',
    icon: FiZap,
  },

  {
    id: '06',
    title: 'Deployment',
    description:
      'Seamless launch, continuous monitoring, enterprise support, and long-term digital growth management.',
    icon: FiCheckCircle,
  },
];

export default function ProcessTimeline() {
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
        stagger: 0.15,
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
      id="workflow"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Ambient Background */}
      <div className="absolute left-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mx-auto mb-24 max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-medium text-blue-400">
              Our Workflow
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Intelligent
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Project Execution
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A refined enterprise workflow designed to deliver scalable,
            high-performance digital infrastructure with precision,
            efficiency, and long-term operational success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500/50 via-blue-400/20 to-transparent lg:block" />

          {/* Steps */}
          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className={`relative flex flex-col gap-8 lg:flex-row ${
                    isEven
                      ? 'lg:justify-start'
                      : 'lg:justify-end'
                  }`}
                >
                  {/* Card */}
                  <div className="relative w-full lg:w-[48%]">

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-12 hidden h-6 w-6 -translate-x-1/2 rounded-full border border-blue-400/40 bg-[#050816] shadow-[0_0_30px_rgba(77,141,255,0.35)] lg:flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-blue-400" />
                    </div>

                    {/* Main Card */}
                    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-500/[0.04] hover:shadow-[0_0_80px_rgba(77,141,255,0.16)]">

                      {/* Glow */}
                      <div className="absolute -right-16 top-[-60px] h-48 w-48 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Top */}
                      <div className="relative z-10 flex items-start justify-between">

                        {/* Left */}
                        <div className="flex items-start gap-5">

                          {/* Number */}
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl font-bold text-blue-400 shadow-[0_0_30px_rgba(77,141,255,0.15)]">
                            {step.id}
                          </div>

                          {/* Content */}
                          <div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300 md:text-3xl">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-4 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Icon */}
                        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/10 md:flex">
                          <Icon className="text-2xl" />
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="relative z-10 mt-10">

                        {/* Progress */}
                        <div className="flex items-center gap-3">

                          <div className="h-2 w-20 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-full bg-gradient-to-r from-blue-400 to-blue-600" />
                          </div>

                          <span className="text-sm text-gray-500">
                            Workflow Stage
                          </span>
                        </div>
                      </div>

                      {/* Bottom Border */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}