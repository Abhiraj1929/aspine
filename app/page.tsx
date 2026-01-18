import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SpecialOffer from '@/components/SpecialOffer';
import AIProductSection from '@/components/AIProductSection';
import WorkSection from '@/components/WorkSection';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SpecialOffer />
      <AIProductSection />
      <WorkSection />
      <ConnectSection />
      <Footer />
    </main>
  );
}
