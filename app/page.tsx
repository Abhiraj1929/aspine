import type { Metadata } from "next";
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GenesisOffer from '@/components/GenesisOffer';
import ProjectsSection from '@/components/ProjectsSection';
import AIProductTeaser from '@/components/AIProductTeaser';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Aspine - Engineering the Future",
  description: "Elite technology services for tomorrow's world. Building the future today.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <HeroSection />
      <ServicesSection />
      <GenesisOffer />
      <ProjectsSection />
      <AIProductTeaser />
      <Footer />
    </main>
  );
}
