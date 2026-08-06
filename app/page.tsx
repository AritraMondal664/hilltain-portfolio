'use client';

import LoadingScreen from '@sections/LoadingScreen';
import Navbar from '@sections/Navbar';
import Hero from '@sections/Hero';
import Services from '@sections/Services';
import WhyChooseUs from '@sections/WhyChooseUs';
import Industries from '@sections/Industries';
import ProcessTimeline from '@sections/ProcessTimeline';
import TechStack from '@sections/TechStack';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';
import { useEffect, useState } from 'react';
import AboutSection from '@/components/sections/AboutSection';
import FloatingWhatsApp from '@sections/FloatingWhatsApp';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <Industries />
      <ProcessTimeline />
      <TechStack />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
