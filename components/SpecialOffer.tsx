'use client';

import React from 'react';

export default function SpecialOffer() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-black"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-4 border-b-4 border-black"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="inline-block border-2 border-black px-6 py-2 mb-8">
          <span className="text-sm font-black uppercase tracking-widest">Limited Time Offer</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Bring Your Dream
            <br />
            <span className="italic">Into Reality</span>
          </h2>

          {/* Price Tag */}
          <div className="inline-block bg-black text-white py-6 px-12 relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-black"></div>
            <div className="relative">
              <div className="text-sm font-bold uppercase tracking-widest mb-2">Starting at just</div>
              <div className="text-6xl font-black">₹999</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Get a professional landing page, complete with modern design, responsive layout, and deployment. 
            <span className="font-bold text-black"> Perfect for startups, businesses, and personal brands.</span>
          </p>

          {/* What's Included */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
            <div className="border-2 border-black p-6">
              <div className="text-3xl font-black mb-2">✓</div>
              <div className="font-bold text-lg mb-2">Modern Design</div>
              <div className="text-sm text-gray-600">Clean, professional UI that converts visitors</div>
            </div>
            <div className="border-2 border-black p-6 bg-black text-white">
              <div className="text-3xl font-black mb-2">✓</div>
              <div className="font-bold text-lg mb-2">Fully Responsive</div>
              <div className="text-sm text-gray-300">Works perfectly on all devices</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-3xl font-black mb-2">✓</div>
              <div className="font-bold text-lg mb-2">Fast Delivery</div>
              <div className="text-sm text-gray-600">Complete in 3-5 days, deployed live</div>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-8 px-12 py-5 bg-black text-white font-black text-lg uppercase tracking-wider hover:bg-gray-900 transition-all duration-300 relative group overflow-hidden">
            <span className="relative z-10">Claim Your Offer Now</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-black">
              Claim Your Offer Now
            </span>
          </button>

          <p className="text-sm text-gray-500 italic">* Limited slots available. First come, first served.</p>
        </div>
      </div>
    </section>
  );
}
