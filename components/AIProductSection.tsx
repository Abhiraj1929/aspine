'use client';

import React from 'react';

export default function AIProductSection() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-3 border-2 border-white px-6 py-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-black uppercase tracking-widest">Coming Soon</span>
            </div>

            {/* Product Name */}
            <div>
              <h2 className="text-6xl md:text-7xl font-black leading-none mb-4">
                VoiceCore
                <br />
                <span className="italic text-gray-400">AI</span>
              </h2>
              <div className="w-24 h-1 bg-white"></div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              The future of AI assistance is here. VoiceCore AI doesn't just hear you—it 
              <span className="font-bold text-white"> understands your tone, emotions, and intent</span>. 
              Have natural conversations, get intelligent responses, and experience AI that truly gets you.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black flex-shrink-0">1</div>
                <div>
                  <div className="font-bold text-lg mb-1">Voice Recognition</div>
                  <div className="text-gray-400">Understands natural speech in multiple languages</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black flex-shrink-0">2</div>
                <div>
                  <div className="font-bold text-lg mb-1">Emotion Detection</div>
                  <div className="text-gray-400">Analyzes tone and sentiment for better responses</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black flex-shrink-0">3</div>
                <div>
                  <div className="font-bold text-lg mb-1">Intelligent Conversations</div>
                  <div className="text-gray-400">Context-aware AI that remembers your preferences</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="px-10 py-5 bg-white text-black font-black text-lg hover:bg-gray-200 transition-all duration-300">
              Join Waitlist →
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white text-black p-10 border-4 border-white relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-white opacity-50"></div>
              
              <div className="relative space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b-2 border-black pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <span className="font-black text-xl">VoiceCore AI</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-black"></div>
                    <div className="w-3 h-3 bg-black"></div>
                    <div className="w-3 h-3 bg-black"></div>
                  </div>
                </div>

                {/* Conversation Example */}
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-black text-white px-6 py-3 max-w-xs">
                      <p className="text-sm">"I'm feeling stressed about my project deadline..."</p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="border-2 border-black px-6 py-3 max-w-xs">
                      <p className="text-sm font-medium">
                        I can sense you're worried. Let's break this down together. What's the biggest challenge right now?
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Analyzing tone: Stressed → Supportive response mode</span>
                  </div>
                </div>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black">
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold">VOICE</span>
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold">EMOTION AI</span>
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold">24/7</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 border-4 border-white shadow-xl">
              <div className="font-black text-3xl">98%</div>
              <div className="text-xs font-bold uppercase">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
