'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import {
  FiHome,
  FiCode,
  FiBriefcase,
  FiShoppingCart,
  FiDollarSign,
  FiBook,
  FiCalendar,
  FiPackage,
  FiAward,
  FiTrendingUp,
  FiCpu,
  FiLayers,
  FiShield,
} from 'react-icons/fi';

const industries = [
  {
    name: 'Construction',
    description: 'BIM coordination & structural systems',
    icon: FiAward,
  },
  {
    name: 'Real Estate',
    description: 'Digital property visualization solutions',
    icon: FiHome,
  },
  {
    name: 'Technology',
    description: 'Scalable enterprise software systems',
    icon: FiCode,
  },
  {
    name: 'Consulting',
    description: 'Workflow automation & analytics',
    icon: FiBriefcase,
  },
  {
    name: 'Retail',
    description: 'Modern commerce infrastructure',
    icon: FiShoppingCart,
  },
  {
    name: 'Finance',
    description: 'Secure digital transformation systems',
    icon: FiDollarSign,
  },
  {
    name: 'Education',
    description: 'Smart learning infrastructure platforms',
    icon: FiBook,
  },
  {
    name: 'Hospitality',
    description: 'Integrated guest experience systems',
    icon: FiCalendar,
  },
  {
    name: 'Manufacturing',
    description: 'Industrial automation & coordination',
    icon: FiPackage,
  },
  {
    name: 'Infrastructure',
    description: 'Large-scale engineering ecosystems',
    icon: FiTrendingUp,
  },
];

const highlights = [
  {
    title: 'BIM Engineering',
    description:
      'Advanced modeling workflows for infrastructure and construction systems.',
    icon: FiLayers,
  },
  {
    title: 'AI Integration',
    description:
      'Intelligent automation systems designed for operational efficiency.',
    icon: FiCpu,
  },
  {
    title: 'Secure Infrastructure',
    description:
      'Enterprise-ready digital ecosystems built for scalability and security.',
    icon: FiShield,
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
      id="industries"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-medium text-blue-400">
              Industries We Serve
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Solutions Across
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Multiple Industries
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Hilltain Group delivers enterprise-grade BIM and digital
            infrastructure solutions tailored for modern industries
            and future-ready organizations.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.name}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:shadow-[0_0_40px_rgba(77,141,255,0.12)]"
              >
                {/* Hover Glow */}
                <div className="absolute right-[-50px] top-[-50px] h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
                    <Icon className="text-3xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {industry.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {industry.description}
                  </p>

                  {/* Bottom Label */}
                  <div className="mt-8">
                    <span className="text-sm font-medium text-gray-500">
                      Enterprise Solutions
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Premium Banner */}
        <div className="relative mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-2xl md:p-12">

          <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10">

           <div className="mx-auto max-w-4xl text-center">

              {/* <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2"> */}
               <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                <span className="text-sm font-medium text-blue-400">
                  Enterprise Ready Infrastructure
                </span>
              </div>

              <h3 className="mx-auto max-w-5xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Intelligent Digital Ecosystems
                <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  For Modern Businesses
                </span>
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                We combine BIM expertise, scalable software engineering,
                AI automation, and enterprise digital transformation
                to help organizations operate smarter and faster.
              </p>
            </div>

            {/* Highlights */}
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.04]"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                      <Icon className="text-2xl" />
                    </div>

                    <h4 className="text-xl font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}