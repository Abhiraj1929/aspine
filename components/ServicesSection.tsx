export default function ServicesSection() {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Engineering',
      description: 'Interfaces designed to feel fast, intuitive, and futuristic.',
      features: ['Design Systems', 'Micro-interactions', 'User Research']
    },
    {
      icon: '⚡',
      title: 'Full-Stack Development',
      description: 'Scalable web systems built for performance and growth.',
      features: ['Next.js', 'React', 'Node.js']
    },
    {
      icon: '🧠',
      title: 'Custom CRM Systems',
      description: 'Smart management systems for shops and colleges.',
      features: ['Automation', 'Analytics', 'Integration']
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="glow-text">Elite Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Not just services — engineered solutions for the next generation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group glass-card p-8 hover:neon-border transition-all duration-500 hover:scale-105 cursor-pointer relative"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
