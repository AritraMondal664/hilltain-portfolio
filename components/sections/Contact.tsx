'use client';

import {
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiCheckCircle,
  FiArrowUpRight,
} from 'react-icons/fi';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(77,141,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,141,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Blue Glow */}
      <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute right-[-180px] bottom-[10%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-medium text-blue-400">
              Contact Hilltain Group
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Let's Build
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Intelligent Infrastructure
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Whether you're planning a BIM implementation, enterprise software,
            Information Technology solution, or digital transformation project,
            our team is ready to discuss your requirements.
          </p>

        </div>

        {/* Main Container */}
        <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl">

          <h3 className="text-center text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Engineering Digital Transformation
          </h3>

          <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400 md:text-xl">
            Hilltain Group delivers premium BIM engineering, Information
            Technology services, enterprise software development, automation,
            cloud infrastructure, and intelligent digital transformation
            solutions designed to help organizations build smarter, scale
            faster, and operate more efficiently.
          </p>

          {/* Cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {/* EMAIL */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-400/40 hover:bg-blue-500/[0.05] hover:shadow-[0_0_40px_rgba(77,141,255,.18)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <FiMail className="text-3xl text-blue-400" />
              </div>

              <h4 className="mt-6 text-2xl font-bold text-white">
                Email Us
              </h4>

              <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500 group-hover:w-24" />

              <div className="mt-6 space-y-3">

                <a
                  href="mailto:hilltain@yahoo.com"
                  className="block text-lg text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  hilltain@yahoo.com
                </a>

                <a
                  href="mailto:info@hilltaintech.in"
                  className="block text-lg text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  info@hilltaintech.in
                </a>

              </div>

              <a
                href="mailto:hilltain@yahoo.com"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                Send Email
                <FiArrowUpRight />
              </a>

            </div>

            {/* PHONE */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-400/40 hover:bg-blue-500/[0.05] hover:shadow-[0_0_40px_rgba(77,141,255,.18)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <FiPhone className="text-3xl text-blue-400" />
              </div>

              <h4 className="mt-6 text-2xl font-bold text-white">
                Call Us
              </h4>

              <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500 group-hover:w-24" />

              <p className="mt-6 text-2xl text-gray-300">
                +91 76797 43819
              </p>

              <a
                href="tel:+917679743819"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                Call Now
                <FiArrowUpRight />
              </a>

            </div>
                        {/* WHATSAPP */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-green-400/40 hover:bg-green-500/[0.05] hover:shadow-[0_0_40px_rgba(34,197,94,.18)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/20 bg-green-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <FiMessageSquare className="text-3xl text-green-400" />
              </div>

              <h4 className="mt-6 text-2xl font-bold text-white">
                WhatsApp
              </h4>

              <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-green-500 to-transparent transition-all duration-500 group-hover:w-24" />

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Need a quick response? Chat directly with our team for project
                discussions, quotations, technical consultations, and business
                inquiries.
              </p>

              <a
                href="https://wa.me/917679743819"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-green-400/30 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-white"
              >
                Open WhatsApp
                <FiArrowUpRight />
              </a>

            </div>

            {/* WHY CONTACT US */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-400/40 hover:bg-blue-500/[0.05] hover:shadow-[0_0_40px_rgba(77,141,255,.18)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <FiCheckCircle className="text-3xl text-blue-400" />
              </div>

              <h4 className="mt-6 text-2xl font-bold text-white">
                Why Work With Hilltain?
              </h4>

              <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500 group-hover:w-24" />

              <div className="mt-8 space-y-5">

                {[
                  "Free initial consultation",
                  "Tailor-made digital solutions",
                  "Fast response within 24 hours",
                  "Dedicated project guidance",
                  "Professional BIM & IT expertise",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10">
                      <FiCheckCircle className="text-blue-400" />
                    </div>

                    <span className="text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}