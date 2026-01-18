import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-black text-white font-black text-2xl px-4 py-3">A</div>
              <span className="text-3xl font-black">ASPINE</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Building digital excellence. Elite web development, AI solutions, and custom software for businesses that demand the best.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all font-bold">
                TW
              </a>
              <a href="#" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all font-bold">
                LI
              </a>
              <a href="#" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all font-bold">
                GH
              </a>
              <a href="#" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all font-bold">
                IG
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">UI/UX Design</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">Full-Stack Dev</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">AI Products</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">Custom CRM</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">₹999 Package</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-black mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">Our Work</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-black font-medium hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-gray-600">
            © 2026 ASPINE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-bold">
            <Link href="#" className="text-gray-600 hover:text-black hover:underline">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-black hover:underline">Terms of Service</Link>
            <Link href="#" className="text-gray-600 hover:text-black hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
