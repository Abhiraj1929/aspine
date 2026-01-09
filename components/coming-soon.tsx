"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call - Replace this with your actual DB call (Supabase/MongoDB)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm text-neutral-400 backdrop-blur-sm"
      >
        <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
        Launch pending
      </motion.div>

      {/* Main Heading */}
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
      >
        Engineering the future of{" "}
        <span className="text-indigo-500">digital innovation.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl text-lg text-neutral-400 mb-10 leading-relaxed"
      >
        We transform complex challenges into scalable, high-performance software
        solutions. Be the first to partner with us when we launch.
      </motion.p>


      {/* Email Capture Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-md"
      >
        {submitted ? (
          <div className="flex items-center justify-center space-x-2 rounded-lg border border-green-900/50 bg-green-900/20 p-4 text-green-400">
            <Check className="h-5 w-5" />
            <span>
              {`You're`} on the list! {`We'll`} be in touch soon.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <Mail className="absolute left-3 h-5 w-5 text-neutral-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/80 py-3 pl-10 pr-32 text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-1.5 top-1.5 bottom-1.5 rounded-md bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="flex items-center">
                  Join Waitlist <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              )}
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-neutral-600">
          No spam. Unsubscribe at any time.
        </p>
      </motion.div>

      {/* Optional: Stack/Technology Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
      >
        {/* You can replace these with actual SVGs of your stack */}
        <span className="text-neutral-500 font-semibold">Web Development</span>
        <span className="text-neutral-500 font-semibold">UI/UX</span>
        <span className="text-neutral-500 font-semibold">CRM</span>
      </motion.div>
    </div>
  );
}
