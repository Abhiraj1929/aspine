export default function AIProductTeaser() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Animated Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] border-2 border-cyan-500/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] border-2 border-purple-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12 relative inline-block">
          <div className="text-8xl mb-6 animate-float">🤖</div>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">The Future of</span>
          <br />
          <span className="glow-text">AI-Powered Products</span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We're not just building software. We're engineering the AI that will reshape industries.
        </p>
        
        <div className="inline-flex items-center gap-3 px-8 py-4 mb-12 glass-card border-2 border-cyan-400/50 rounded-full animate-pulse">
          <div className="size-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-lg font-bold text-cyan-400 uppercase tracking-wider">Coming Soon</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '⚡', title: 'Lightning Fast', desc: 'AI that thinks faster than you type' },
            { icon: '🧠', title: 'Self-Learning', desc: 'Evolves with every interaction' },
            { icon: '🌐', title: 'Global Scale', desc: 'Built to serve millions' }
          ].map((feature, i) => (
            <div key={i} className="glass-card p-8 border border-white/10 hover:border-cyan-400/50 transition-all">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(176,48,255,0.6)]">
            Join Waitlist →
          </button>
          <button className="px-10 py-5 glass-card border-2 border-cyan-400/50 text-cyan-400 text-lg font-bold rounded-xl hover:bg-cyan-400/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
