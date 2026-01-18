'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b-4 border-black'
          : 'bg-white border-b-2 border-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-black text-white font-black text-xl px-4 py-2 group-hover:bg-gray-800 transition-colors">
              A
            </div>
            <span className="text-2xl font-black text-black">ASPINE</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#services" 
              className="text-black font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4 transition-all"
            >
              Services
            </Link>
            <Link 
              href="/work" 
              className="text-black font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4 transition-all"
            >
              Projects
            </Link>
            <Link 
              href="#about" 
              className="text-black font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4 transition-all"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-black text-white font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-all border-2 border-black"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black">
          <div className="px-4 py-8 space-y-6">
            <Link
              href="#services"
              className="block text-black font-bold uppercase tracking-wider text-lg py-3 border-b-2 border-black hover:bg-black hover:text-white hover:px-4 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/work"
              className="block text-black font-bold uppercase tracking-wider text-lg py-3 border-b-2 border-black hover:bg-black hover:text-white hover:px-4 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="block text-black font-bold uppercase tracking-wider text-lg py-3 border-b-2 border-black hover:bg-black hover:text-white hover:px-4 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block bg-black text-white px-6 py-4 font-bold uppercase tracking-wider text-center hover:bg-gray-800 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
