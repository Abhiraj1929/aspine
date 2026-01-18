import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const serviceData: Record<string, any> = {
  'full-stack': {
    title: 'Full-Stack Development Projects',
    description: 'End-to-end applications built with modern technology',
    projects: [
      {
        id: 1,
        title: "CIA Labs",
        fullDescription: "CIA Labs is a comprehensive platform designed for college societies to unite under one roof. Features include event management, club directories, community showcases, and collaborative spaces where students can present their projects and innovations during special Community Days events.",
        tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Framer Motion"],
        result: "10+ Clubs United",
        image: "🎓",
        year: "2025"
      },
      {
        id: 2,
        title: "Synwick",
        fullDescription: "Synwick.com is a complete real estate solution featuring property listings, advanced search filters, virtual tours, agent profiles, mortgage calculators, and inquiry management. Built with modern tech stack for seamless user experience.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Google Maps API", "Cloudinary"],
        result: "200+ Properties Listed",
        image: "🏢",
        year: "2025"
      },
      {
        id: 3,
        title: "HomeSathi",
        fullDescription: "HomeSathi is your trusted companion in finding the perfect home. Platform includes smart property matching, neighborhood insights, price comparisons, saved searches, and direct agent communication. Making home buying simple and transparent.",
        tech: ["React", "Node.js", "MongoDB", "Mapbox", "AWS S3"],
        result: "150+ Happy Homeowners",
        image: "🏠",
        year: "2026"
      }
    ]
  },
  'ui-design': {
    title: 'UI/UX Design Projects',
    description: 'Beautiful interfaces crafted with precision',
    projects: [
      {
        id: 1,
        title: "MediCare Dashboard",
        fullDescription: "Complete UI/UX design for healthcare platform focusing on accessibility and user-friendly navigation.",
        tech: ["Figma", "Adobe XD", "Prototyping"],
        result: "95% Satisfaction",
        image: "🏥",
        year: "2025"
      }
    ]
  },
  'ai-products': {
    title: 'AI Product Projects',
    description: 'Intelligent solutions powered by machine learning',
    projects: [
      {
        id: 1,
        title: "VoiceCore AI",
        fullDescription: "Advanced AI assistant powered by machine learning and NLP.",
        tech: ["Python", "OpenAI", "TensorFlow"],
        result: "92% Accuracy",
        image: "🤖",
        year: "2026"
      }
    ]
  },
  'custom-crm': {
    title: 'Custom CRM Projects',
    description: 'Tailored management systems',
    projects: [
      {
        id: 1,
        title: "SalesPro CRM",
        fullDescription: "Custom CRM built for sales teams with lead tracking and analytics.",
        tech: ["Next.js", "PostgreSQL", "Prisma"],
        result: "45% More Conversions",
        image: "📊",
        year: "2025"
      }
    ]
  }
};

export default async function ServiceProjectsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">404</h1>
          <p className="text-xl mb-8">Service not found</p>
          <Link href="/" className="px-8 py-4 bg-white text-black font-bold">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#work" className="inline-block text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white mb-6">
            ← Back to Work
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            {service.title}
          </h1>
          <p className="text-2xl text-gray-300">
            {service.description}
          </p>
          <div className="mt-8 text-sm font-bold">
            {service.projects.length} {service.projects.length === 1 ? 'Project' : 'Projects'}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {service.projects.map((project: any, index: number) => (
              <div
                key={project.id}
                className="border-4 border-black p-10 hover:bg-black hover:text-white transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-2">
                    <div className="text-8xl mb-4">{project.image}</div>
                    <div className="text-5xl font-black text-gray-200 group-hover:text-gray-800">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-2">
                        {project.year}
                      </div>
                      <h2 className="text-4xl font-black mb-4">{project.title}</h2>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-lg">
                      {project.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 border-2 border-black group-hover:border-white text-xs font-bold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 text-right">
                    <div className="text-3xl font-black mb-4">{project.result}</div>
                    <button className="px-6 py-3 bg-black text-white group-hover:bg-white group-hover:text-black font-bold uppercase transition-colors">
                      View Details →
                    </button>
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
