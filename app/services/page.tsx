'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      id: "ui-design",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. Every pixel perfect, every interaction seamless.",
      skills: ["FIGMA DESIGN", "USER RESEARCH", "PROTOTYPING", "DESIGN SYSTEMS"],
      projectCount: 2
    },
    {
      number: "02",
      id: "full-stack",
      title: "Full-Stack Development",
      description: "End-to-end web applications built with cutting-edge technology. Fast, secure, scalable.",
      skills: ["REACT/NEXT.JS", "NODE.JS/PYTHON", "DATABASE DESIGN", "API INTEGRATION"],
      projectCount: 3
    },
    {
      number: "03",
      id: "ai-products",
      title: "AI Products",
      description: "Intelligent solutions powered by machine learning. Automate, predict, optimize your business.",
      skills: ["CHATGPT INTEGRATION", "CUSTOM AI MODELS", "VOICE RECOGNITION", "DATA ANALYTICS"],
      projectCount: 2
    },
    {
      number: "04",
      id: "custom-crm",
      title: "Custom CRM Systems",
      description: "Tailored customer management platforms that fit your exact workflow. No compromises.",
      skills: ["LEAD MANAGEMENT", "SALES PIPELINE", "ANALYTICS DASHBOARD", "AUTOMATION"],
      projectCount: 2
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">What We Do</div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            Our Services
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl">
            Click on any service to explore our projects in that category.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white text-black p-10 border-4 border-white hover:bg-black hover:text-white hover:border-white transition-all duration-500 group relative"
              >
                {/* Large Number */}
                <div className="text-9xl font-black text-gray-100 group-hover:text-gray-800 absolute top-4 right-4">
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-2">
                      {service.number}
                    </div>
                    <h2 className="text-4xl font-black mb-4">{service.title}</h2>
                    <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black text-white text-xs font-bold group-hover:bg-white group-hover:text-black transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Project Count & CTA */}
                  <div className="pt-6 border-t-2 border-black group-hover:border-white flex justify-between items-center">
                    <div className="text-sm font-bold">
                      {service.projectCount} {service.projectCount === 1 ? 'Project' : 'Projects'}
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="px-6 py-3 bg-black text-white group-hover:bg-white group-hover:text-black font-bold uppercase text-sm transition-colors"
                    >
                      View Projects →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
