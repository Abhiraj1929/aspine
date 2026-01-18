'use client';

import React, { useState } from 'react';

export default function ConnectSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Get In Touch</div>
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Let's Build
                <br />
                <span className="italic text-gray-400">Something Great</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Have a project in mind? Whether it's a website, app, or custom solution—we're here to make it happen.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 pt-8 border-t-2 border-white">
              <div>
                <div className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">Email</div>
                <a href="mailto:hello@aspine.com" className="text-2xl font-bold hover:underline">
                  hello@aspine.com
                </a>
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">Phone</div>
                <a href="tel:+917488502554" className="text-2xl font-bold hover:underline">
                  +91 74885 02554
                </a>
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">Response Time</div>
                <div className="text-2xl font-bold">Within 24 Hours</div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white text-black p-10 border-4 border-white relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-white opacity-30"></div>
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="ui-design">UI/UX Design</option>
                  <option value="full-stack">Full-Stack Development</option>
                  <option value="ai-products">AI Products</option>
                  <option value="custom-crm">Custom CRM</option>
                  <option value="999-package">₹999 Package</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-black text-white font-black text-lg uppercase tracking-wider hover:bg-gray-900 transition-all duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
