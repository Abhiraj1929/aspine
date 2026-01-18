export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/10 relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold glow-text mb-4">ASPINE</h2>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Engineering the Future. Building tomorrow's technology infrastructure today.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="size-12 glass-card flex items-center justify-center rounded-lg hover:border-cyan-400/50 transition-all group"
                >
                  <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {['UI/UX Design', 'Web Development', 'CRM Systems', 'Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {['About', 'Projects', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Aspine. All rights reserved. Built with the future in mind.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
