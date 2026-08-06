'use client';

import {
  FiArrowUpRight,
  FiLayers,
  FiCpu,
  FiCode,
  FiGlobe,
} from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-24 md:py-32"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute right-[-140px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">

          <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-medium text-blue-400">
              About Hilltain Group
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Engineering Intelligent

            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Infrastructure
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Hilltain Group specializes in premium BIM engineering,
            enterprise software systems, AI-driven automation,
            and scalable digital transformation solutions for
            modern businesses and infrastructure organizations.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT CARD */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/20 hover:shadow-[0_0_60px_rgba(77,141,255,0.10)] md:p-10">

            {/* Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-blue-500/10 blur-3xl" />

            {/* Badge */}
            <div className="mb-6 inline-flex rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-xl">
              Our Vision
            </div>

            {/* Title */}
            <h3 className="max-w-lg text-3xl font-semibold leading-tight text-white md:text-4xl">
              Delivering Scalable & Future-Ready Solutions
            </h3>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-400">
              We combine engineering expertise with modern
              digital technologies to build innovative,
              intelligent, and scalable solutions for
              enterprises, construction firms, startups,
              and infrastructure organizations.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {/* BIM */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.04]">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <FiLayers className="text-2xl" />
                </div>

                <h4 className="text-xl font-semibold text-white">
                  BIM Engineering
                </h4>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Intelligent modeling systems for
                  architecture, MEP, structural
                  coordination, and infrastructure projects.
                </p>
              </div>

              {/* AI */}
              {/* Information Technology */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.04]">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <FiCode className="text-2xl" />
                </div>

                <h4 className="text-xl font-semibold text-white">
                  Information Technology
                </h4>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Enterprise software, web applications,
                  cloud systems, and scalable digital
                  technology solutions for modern businesses.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/20 hover:shadow-[0_0_60px_rgba(77,141,255,0.10)] md:p-10">

            {/* Glow */}
            <div className="absolute bottom-[-100px] left-[-100px] h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-3xl" />

            {/* Badge */}
            <div className="mb-6 inline-flex rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-xl">
              What We Do
            </div>

            {/* Services */}
            <div className="space-y-5">

              {[
                {
                  title: 'Building Information Modeling (BIM)',
                  icon: FiLayers,
                },
                {
                  title: 'Enterprise Software Development',
                  icon: FiCode,
                },
                {
                  title: 'AI & Automation Systems',
                  icon: FiCpu,
                },
                {
                  title: 'Web & Mobile Application Development',
                  icon: FiGlobe,
                },
                {
                  title: 'Cloud Infrastructure Solutions',
                  icon: FiCode,
                },
                {
                  title: 'Digital Transformation Consulting',
                  icon: FiArrowUpRight,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5 transition-all duration-500 hover:border-blue-400/30 hover:bg-blue-500/[0.05] hover:shadow-[0_0_30px_rgba(77,141,255,0.10)]"
                  >
                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                        <Icon className="text-xl" />
                      </div>

                      <span className="text-base leading-7 text-gray-300 md:text-lg">
                        {item.title}
                      </span>
                    </div>

                    <FiArrowUpRight className="text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
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