'use client';

import Link from 'next/link';

import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'BIM Solutions',
    'AI Systems',
    'Web Development',
    'Mobile Applications',
    'SEO & Marketing',
    'Enterprise Software',
  ];

  const social = [
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/company/hilltain-group-of-freelancers/posts/?feedView=all',
      label: 'LinkedIn',
    },

    {
      icon: FiFacebook,
      href: 'https://www.facebook.com/profile.php?id=61575411509738',
      label: 'Facebook',
    },

    {
      icon: FiInstagram,
      href: 'https://www.instagram.com/hilltain_it?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">


        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>

            <Link
              href="/"
              className="group flex items-center gap-4"
            >
              {/* Logo */}
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 group-hover:border-blue-400/40 group-hover:shadow-[0_0_40px_rgba(77,141,255,0.20)]">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 text-3xl font-bold text-white">
                  H
                </span>
              </div>

              {/* Brand Text */}
              <div>

                <h3 className="text-2xl font-semibold text-white">
                  Hilltain Group
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-gray-500">
                  Engineering Digital Infrastructure
                </p>
              </div>
            </Link>

            <p className="mt-8 max-w-sm text-base leading-8 text-gray-400">
              Premium BIM systems, enterprise software,
              AI-driven infrastructure, and scalable digital
              transformation solutions.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-4">

              {social.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-gray-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08] hover:text-blue-400"
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="mb-8 text-xl font-semibold text-white">
              Quick Links
            </h4>

            <div className="space-y-5">

              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between text-gray-400 transition-all duration-300 hover:text-blue-400"
                >
                  <span>{link.label}</span>

                  <FiArrowUpRight className="text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>

            <h4 className="mb-8 text-xl font-semibold text-white">
              Services
            </h4>

            <div className="space-y-5">

              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="group flex items-center justify-between text-gray-400 transition-all duration-300 hover:text-blue-400"
                >
                  <span>{service}</span>

                  <FiArrowUpRight className="text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h4 className="mb-8 text-xl font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-blue-500/10 text-blue-400">
                  <FiMail className="text-xl" />
                </div>

                <div>
                  <p className="mb-2 text-sm text-gray-500">
                  Email
                </p>

                  <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="mailto:hilltain@yahoo.com"
                    className="break-all text-base font-medium text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    hilltain@yahoo.com
                  </a>

                  <a
                    href="mailto:info@hilltaintech.in"
                    className="break-all text-base font-medium text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    info@hilltaintech.in
                  </a>
                </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-blue-500/10 text-blue-400">
                  <FiPhone className="text-xl" />
                </div>

                <div>
                  <p className="mb-2 text-sm text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+Phone +917679743819"
                    className="text-base text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    +91 7679743819
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">

          <p className="text-sm text-gray-500">
            © {currentYear} Hilltain Group. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">

            <Link
              href="/privacy"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="#about"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}