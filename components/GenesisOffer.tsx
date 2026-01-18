'use client';

import { useEffect, useState } from 'react';

export default function GenesisOffer() {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 12, mins: 34, secs: 20 });
  const [typedText, setTypedText] = useState('');
  const fullText = 'genesis_access_protocol_v1.0';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal Window */}
        <div className="bg-[#1a1a1f] border-2 border-cyan-500/50 rounded-lg shadow-[0_0_50px_rgba(0,243,255,0.3)] overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#0d0d10] border-b border-cyan-500/30 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-red-500"></div>
              <div className="size-3 rounded-full bg-yellow-500"></div>
              <div className="size-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-cyan-400 text-sm font-mono">aspine@genesis:~$</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono text-sm">
            {/* System Messages */}
            <div className="space-y-2 mb-8">
              <div className="text-green-400">$ sudo ./initialize_genesis_protocol</div>
              <div className="text-gray-500">[INFO] Loading Aspine Genesis Access System...</div>
              <div className="text-gray-500">[INFO] Connecting to secure servers...</div>
              <div className="text-cyan-400">[SUCCESS] Connection established ✓</div>
              <div className="text-purple-400">[SYSTEM] {typedText}<span className="animate-pulse">_</span></div>
            </div>

            {/* Separator */}
            <div className="border-t border-cyan-500/30 my-8"></div>

            {/* Program Title */}
            <div className="mb-8">
              <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                <span className="text-cyan-400">ASPINE</span> GENESIS <span className="text-purple-400">OFFER</span>
              </div>
              <div className="text-cyan-400 text-sm">🌍 EARLY_ACCESS_PROTOCOL_v1.0</div>
            </div>

            {/* Status Display */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0d0d10] border border-cyan-500/30 p-4 rounded">
                <div className="text-gray-500 text-xs mb-1">// TIER_LEVEL</div>
                <div className="text-cyan-400 font-bold">GENESIS_001</div>
                <div className="text-2xl text-white mt-2">₹999</div>
              </div>
              
              <div className="bg-[#0d0d10] border border-purple-500/30 p-4 rounded">
                <div className="text-gray-500 text-xs mb-1">// SLOTS_REMAINING</div>
                <div className="text-purple-400 font-bold">LIMITED_ACCESS</div>
                <div className="text-2xl text-white mt-2">10/MONTH</div>
              </div>
              
              <div className="bg-[#0d0d10] border border-pink-500/30 p-4 rounded">
                <div className="text-gray-500 text-xs mb-1">// PRIORITY_STATUS</div>
                <div className="text-pink-500 font-bold">EARLY_ADOPTER</div>
                <div className="text-2xl text-white mt-2">⚡ VIP</div>
              </div>
            </div>

            {/* Terminal Countdown */}
            <div className="mb-8">
              <div className="text-yellow-400 mb-4">⏰ OFFER_EXPIRES_IN:</div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { val: timeLeft.days, label: 'DAYS', unit: 'd' },
                  { val: timeLeft.hours, label: 'HRS', unit: 'h' },
                  { val: timeLeft.mins, label: 'MIN', unit: 'm' },
                  { val: timeLeft.secs, label: 'SEC', unit: 's' }
                ].map((item, i) => (
                  <div key={i} className="bg-[#0d0d10] border border-cyan-500/30 p-4 rounded text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
                      {item.val.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-500 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Command Line Options */}
            <div className="space-y-3 mb-8 text-gray-400">
              <div>
                <span className="text-cyan-400">✓</span> SELECT_SERVICE: <span className="text-white">any_one_service</span>
              </div>
              <div>
                <span className="text-purple-400">✓</span> EXCLUSIVE_ACCESS: <span className="text-white">true</span>
              </div>
              <div>
                <span className="text-pink-500">✓</span> PREMIUM_PRIORITY: <span className="text-white">enabled</span>
              </div>
            </div>

            {/* Terminal Command Button */}
            <div className="bg-[#0d0d10] border-2 border-green-500/50 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400">$</span>
                <span className="text-gray-400">sudo claim_genesis_access --now</span>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-black font-bold rounded transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,243,255,0.5)]">
                [ENTER] EXECUTE_COMMAND →
              </button>
            </div>

            {/* Footer Status */}
            <div className="mt-6 text-xs text-gray-600 flex items-center gap-2">
              <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>CONNECTION_SECURE | ENCRYPTED_CHANNEL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
