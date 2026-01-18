'use client';

import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. Every pixel perfect, every interaction seamless.",
      features: ["Figma Design", "User Research", "Prototyping", "Design Systems"]
    },
    {
      number: "02",
      title: "Full-Stack Development",
      description: "End-to-end web applications built with cutting-edge technology. Fast, secure, scalable.",
      features: ["React/Next.js", "Node.js/Python", "Database Design", "API Integration"]
    },
    {
      number: "03",
      title: "AI Products",
      description: "Intelligent solutions powered by machine learning. Automate, predict, optimize your business.",
      features: ["ChatGPT Integration", "Custom AI Models", "Voice Recognition", "Data Analytics"]
    },
    {
      number: "04",
      title: "Custom CRM Systems",
      description: "Tailored customer management platforms that fit your exact workflow. No compromises.",
      features: ["Lead Management", "Sales Pipeline", "Analytics Dashboard", "Automation"]
    }
  ];

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">What We Do</div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">Elite Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Premium solutions for businesses that demand excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white text-black p-8 border-4 border-black hover:bg-black hover:text-white hover:border-white transition-all duration-500"
            >
              {/* Number */}
              <div className="text-8xl font-black opacity-10 absolute top-4 right-4 group-hover:opacity-20 transition-opacity">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-4">
                  {service.number}
                </div>
                <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wide group-hover:bg-white group-hover:text-black transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
