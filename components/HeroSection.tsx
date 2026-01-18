'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 60px),
                           repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 60px)`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border-2 border-black rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-black uppercase tracking-wider">
              Elite Digital Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none">
            Building
            <br />
            <span className="italic">Digital Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into reality with world-class web development, AI solutions, and custom software.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-10 py-5 bg-black text-white font-bold text-lg rounded-none hover:bg-gray-900 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                Start Your Project
              </span>
            </button>
            <button className="px-10 py-5 bg-white text-black font-bold text-lg border-2 border-black rounded-none hover:bg-black hover:text-white transition-all duration-300">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 border-t-2 border-black mt-16">
            <div>
              <div className="text-4xl md:text-5xl font-black text-black">100+</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mt-2">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black">98%</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mt-2">Client Success</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black">24/7</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mt-2">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
