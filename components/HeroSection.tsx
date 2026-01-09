'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  
  const terminalText = `$ aspine --init
> Initializing Aspine Systems...
> Loading future_tech_stack.config
> ████████████████████ 100%

✓ We don't build websites. We engineer digital futures.
✓ Elite systems. Zero compromise.
✓ The future is not predicted. It's built.

$ echo "Welcome to Aspine."
> Welcome to Aspine.`;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 50;
    
    const typingInterval = setInterval(() => {
      if (index < terminalText.length) {
        setTypedText(terminalText.slice(0, index + 1));
        index++;
      } else {
        setTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (typingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [typingComplete]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 size-96 bg-cyan-500/20 rounded-full blur-[120px] animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 size-96 bg-purple-500/20 rounded-full blur-[120px] animate-[float_6s_ease-in-out_infinite] [animation-delay:3s]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Subtitle Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card neon-border">
            <div className="size-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-mono">ASPINE_v2026.1</span>
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight text-white text-center">
          Building Tomorrow's
          <br />
          <span className="glow-text">Technology — Today</span>
        </h1>
        
        {/* Terminal Window - Fixed Height */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1a1f] border-2 border-cyan-500/50 rounded-lg shadow-[0_0_50px_rgba(0,243,255,0.3)] overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-[#0d0d10] border-b border-cyan-500/30 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-500"></div>
                <div className="size-3 rounded-full bg-yellow-500"></div>
                <div className="size-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-cyan-400 text-xs md:text-sm font-mono">root@aspine:~</span>
              </div>
            </div>
            
            {/* Terminal Content - Fixed Height */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base h-[400px] overflow-hidden">
              <div className="text-green-400 leading-relaxed">
                {typedText.split('\n').map((line, i) => (
                  <div 
                    key={i} 
                    className={
                      line.startsWith('$') ? 'text-cyan-400 mb-1' :
                      line.startsWith('>') ? 'text-gray-500 mb-1' :
                      line.startsWith('✓') ? 'text-green-400 mb-1' :
                      line.startsWith('//') ? 'text-purple-400' :
                      line === '' ? 'mb-2' :
                      'text-white mb-1'
                    }
                  >
                    {line || '\u00A0'}
                  </div>
                ))}
                {typingComplete && showCursor && (
                  <span className="text-green-400 inline-block">█</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
