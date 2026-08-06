'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917679743819?text=Hello%20Hilltain%20Group,%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_45px_rgba(37,211,102,0.6)]"
    >
      <FaWhatsapp className="text-4xl" />

      {/* Ping Animation */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20"></span>
    </a>
  );
}