export default function ProjectsSection() {
  const projects = [
    {
      title: 'Enterprise CRM',
      category: 'SaaS Platform',
      description: 'Full-stack college management system with AI-powered analytics',
      tech: ['Next.js', 'Supabase', 'AI'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'High-performance shop management with real-time inventory',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Design System',
      category: 'UI/UX',
      description: 'Component library with futuristic design patterns',
      tech: ['Figma', 'React', 'Tailwind'],
      gradient: 'from-pink-500 to-orange-500'
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-[#0a0a0f]">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 mb-6 glass-card border border-purple-500/50 rounded-full">
            <span className="text-sm text-purple-400 font-mono uppercase">Our Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future, one system at a time
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group glass-card p-8 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Project Number */}
              <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 font-mono">
                0{i + 1}
              </div>
              
              <div className="relative z-10">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 mb-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  <span className="text-xs text-cyan-400 font-mono">{project.category}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View Link */}
                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                  <span>View Project</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
