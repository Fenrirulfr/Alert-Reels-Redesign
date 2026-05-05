import React from 'react';
import { ArrowRight, Search, BookOpen, PlayCircle, AlertTriangle, Download, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function Resources() {
  return (
    <div className="font-sans bg-brand-surface rounded-lg text-brand-text min-h-screen">
      {/* Blog Featured Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl border border-brand-border group bg-brand-surface rounded-lg"
        >
          <img 
            alt="Featured Article" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBESnTusK1HhNjOlw4LAiaNjvQyzGGnCk47SA19cYHSb4yet6EfedKBU4Fngj1mPDl-anzde9ee-_5ujRsN9Uk4YttEoDa2LH-liZ4oRHQpJTNk84sy-OyCyTn3E13lwIm8G98Ktolc9yrzMhsdRpkqL_7rq9xG8bG36n9WAt08vdqCKbtiLq7pFD49K609dZ-7KcIg78WCSzDSv8rGxX-NVvWI9nUnGV3-ozLft7B4ug405LOc-WGv6HRXZLw7laqgZzzfvXmSfEw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
            <span className="bg-brand-yellow text-black px-3 py-1 font-bold text-[10px] uppercase tracking-widest mb-6 inline-block">Industry Insights</span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight leading-tight">The Future of High-Visibility Cable Management</h1>
            <p className="text-lg text-brand-text-muted mb-8 leading-relaxed line-clamp-2 md:line-clamp-none">
              Exploring how automated reel systems are reducing site accidents by 40% through integrated alert technology and industrial-grade glassmorphism interfaces.
            </p>
            <button className="flex items-center gap-2 bg-brand-surface border border-brand-border text-brand-text font-bold uppercase tracking-widest text-xs px-8 py-4 active:scale-95 hover:bg-brand-yellow hover:text-black transition-all cursor-pointer">
              Read Full Report
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-brand-border pb-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-text uppercase tracking-tight mb-2">Technical Resources</h2>
            <p className="text-brand-text-muted leading-relaxed">Access our complete library of technical documentation, installation guides, and safety training videos designed for enterprise-scale deployments.</p>
          </div>
          <div className="w-full md:w-96">
            <div className="relative group">
              <label htmlFor="resource-search" className="sr-only">Search technical manuals</label>
              <input 
                id="resource-search"
                className="w-full bg-brand-surface border border-brand-border px-4 py-4 text-xs font-bold uppercase focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-brand-text placeholder:text-brand-text-muted transition-all outline-none rounded-lg" 
                placeholder="SEARCH MANUALS..." 
                type="search"
              />
              <Search className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-muted group-focus-within:text-brand-yellow transition-colors" />
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Guide Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface rounded-lg backdrop-blur-xl border border-brand-border p-8 flex flex-col justify-between hover:border-brand-yellow/50 transition-all group min-h-[320px]"
          >
            <div>
              <div className="w-14 h-14 bg-brand-yellow/10 flex items-center justify-center mb-6">
                <BookOpen className="text-brand-yellow w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-4 tracking-tight">Master Installation Guide 2024</h3>
              <p className="text-brand-text-muted mb-6 text-sm leading-relaxed">Comprehensive documentation for the AR-900 Series industrial reels including load-bearing specs and wiring diagrams.</p>
            </div>
            <a href="#" className="flex items-center justify-between w-full p-4 border border-brand-yellow/30 bg-brand-yellow/5 text-brand-yellow font-bold text-[10px] uppercase tracking-widest group-hover:bg-brand-yellow group-hover:text-black transition-all cursor-pointer">
              <span>Download PDF (45MB)</span>
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Video Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface rounded-lg backdrop-blur-xl border border-brand-border p-8 flex flex-col justify-between hover:border-brand-blue/50 transition-all group min-h-[320px]"
          >
            <div>
              <div className="w-14 h-14 bg-brand-blue/10 flex items-center justify-center mb-6">
                <PlayCircle className="text-brand-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-4 tracking-tight">Safety Protocols</h3>
              <p className="text-brand-text-muted mb-6 text-sm leading-relaxed">12-minute technical briefing on rapid deployment safety and high-tension environment management.</p>
            </div>
            <a href="#" className="flex items-center justify-between w-full p-4 border border-brand-blue/30 bg-brand-blue/5 text-brand-blue font-bold text-[10px] uppercase tracking-widest group-hover:bg-brand-blue group-hover:text-brand-text transition-all cursor-pointer">
              <span>Watch Video</span>
              <PlayCircle className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Registry Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface rounded-lg backdrop-blur-xl border border-brand-border p-8 flex flex-col justify-between hover:border-[#FF5656]/50 transition-all group min-h-[320px]"
          >
            <div>
              <div className="w-14 h-14 bg-brand-surface rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="text-[#FF5656] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-4 tracking-tight">Hazard Registry</h3>
              <p className="text-brand-text-muted mb-6 text-sm leading-relaxed">Quarterly updated compliance and safety standards for international shipping terminals.</p>
            </div>
            <a href="#" className="flex items-center justify-between w-full p-4 border border-[#FF5656]/30 bg-brand-surface5 text-[#FF5656] font-bold text-[10px] uppercase tracking-widest group-hover:bg-brand-surface rounded-lg group-hover:text-brand-text transition-all cursor-pointer">
              <span>View Registry</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Masonry Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex items-center gap-6 mb-12">
          <div className="h-10 w-1 bg-brand-yellow"></div>
          <h2 className="text-3xl font-bold text-brand-text uppercase tracking-tight">Latest from the Field</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {/* Post 1 */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface rounded-lg border border-brand-border overflow-hidden group flex flex-col h-full cursor-pointer hover:border-brand-border transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img alt="Tech Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX9J-ydZMskn75zEq0Y3vWm4iz30kHnPQpn9Q4CrHG63MChW2vMgjnofG5hy_3cPLKjGjqS_0bk5j1z6dVWRUeBST0K37cNfY3s0afHk5_UtcHe2h5u2ZxEal09ODe6WptdcUBRqspp_GoWdDI-x1FkanZaLh2hHW9VLtGEhpdCTFAkjKYaZhja4CS3h_4vHAUzPRjBvzh5CA8C26uY0BG1Ngbd6lIjm08g7PTlMv8PSDSf9m1E4Tc5uP886USlpObdNkcZERXoPQ"/>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="font-bold text-[10px] text-brand-yellow uppercase tracking-widest block mb-4">Engineering</span>
              <h3 className="font-bold text-brand-text text-xl mb-4 group-hover:text-brand-yellow transition-colors tracking-tight">Optimizing High-Tension Environments</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">A deep dive into the stress mechanics of spring-loaded retraction systems in arctic conditions.</p>
              <div className="flex items-center gap-4 border-t border-brand-border pt-6 mt-auto">
                <div className="flex-1">
                  <p className="text-brand-text text-sm font-bold tracking-tight">Marcus Vance</p>
                  <p className="text-brand-text-muted text-[10px] uppercase tracking-widest">Lead Engineer</p>
                </div>
                <span className="text-[#FF8C00] font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">Read More <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </div>
          </motion.article>

          {/* Post 2 */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface rounded-lg border border-brand-border overflow-hidden group flex flex-col h-full cursor-pointer hover:border-brand-blue/30 transition-colors"
          >
            <div className="aspect-video overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
              <img alt="Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5qE1gLbn5PNBBQsLZ1mD3Ghd8yeuYdIi7Gnhtqb1KBBf-TniN35w3umlVkcWUvFoCI7enUu20E60XUBWhwj4N0oh9sHvx4hcAdpVuTZX_c-xEWGBZqRKusveD4f29fh0ibPtJoVVHwYgUBa-b6t5KuDlraYlFMtFNinq7WURWi2Z3yfiqHS760L6_cp417SdM9300s7UfTTwpejPZo9QH7IG8Wp4vmygPbSABmYGrfwkZ1jkH8A65SC0hVQqfzK7ITWpyDbNP5eI"/>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="font-bold text-[10px] text-brand-blue uppercase tracking-widest block mb-4">Case Study</span>
              <h3 className="font-bold text-brand-text text-xl mb-4 group-hover:text-brand-blue transition-colors tracking-tight">The Delta-9 Port Expansion Project</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">How Alert Reels managed over 15km of hazardous cabling across the world's largest automated shipping terminal without a single downtime event.</p>
              <div className="flex items-center gap-4 border-t border-brand-border pt-6 mt-auto">
                <div className="flex-1">
                  <p className="text-brand-text text-sm font-bold tracking-tight">Sarah Chen</p>
                  <p className="text-brand-text-muted text-[10px] uppercase tracking-widest">Project Director</p>
                </div>
                <span className="text-[#FF8C00] font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">Read More <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </div>
          </motion.article>

          {/* Post 3 */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface rounded-lg border border-brand-border overflow-hidden group flex flex-col h-full cursor-pointer hover:border-[#FF5656]/30 transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img alt="Product News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArKEBQM_KelSICuZMew9OvQipOX2797nh3LuApqRh2vHwqwhIPbg7fewzY2hKtme_fyaon1AnO243JnN7UiCRnPqEuLyRnWpK45piK89uGFUrkAowVosaneT2SGDzbS77EnCHJYY2qh3V5Qo8I4IV6-TrqBPAQdqSYsoP4bsU8Tmt-iqoBvCuir4he9gKv6FO7ihAtRWPEBPcNFtB4I0ITm0CXh-8iY8AQjQURU363QSQN7-9oiUMWhXUzB8-5UfoX1AiyAOB-rA0"/>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="font-bold text-[10px] text-[#FF5656] uppercase tracking-widest block mb-4">Announcements</span>
              <h3 className="font-bold text-brand-text text-xl mb-4 group-hover:text-[#FF5656] transition-colors tracking-tight">Introducing the Stealth Core™ Series</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed mb-8 flex-1">Lighter, faster, and more durable. The new standard for rapid-response electrical deployment.</p>
              <div className="flex items-center gap-4 border-t border-brand-border pt-6 mt-auto">
                <div className="flex-1">
                  <p className="text-brand-text text-sm font-bold tracking-tight">Product Team</p>
                  <p className="text-brand-text-muted text-[10px] uppercase tracking-widest">Release HQ</p>
                </div>
                <span className="text-[#FF8C00] font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">Read More <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </section>

      {/* Company Timeline Section */}
      <section className="bg-brand-bg py-24 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl font-bold text-brand-text uppercase tracking-tight mb-4">Company Legacy</h2>
            <p className="text-lg text-brand-text-muted max-w-2xl mx-auto leading-relaxed">Forty years of engineering excellence, documented through our commitment to industrial safety.</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line - hidden on mobile sm */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/5"></div>
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-1/3 bg-brand-yellow shadow-brand-shadow"></div>
            
            <div className="space-y-16 md:space-y-24 relative">
              {/* Timeline 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row items-center w-full group"
              >
                <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl md:text-2xl font-bold text-brand-text mb-2 tracking-tight group-hover:text-brand-yellow transition-colors uppercase">The Foundation</h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">Founded in Detroit as Alert Safety Systems, pioneering the first high-visibility retractable reel for automotive assembly lines.</p>
                </div>
                <div className="hidden md:block relative z-10 w-4 h-4 rounded-full bg-brand-yellow border-4 border-[#0e0e0e] outline outline-4 outline-brand-yellow/20 -mx-2"></div>
                <div className="w-full md:w-1/2 md:pl-12 flex items-center justify-center md:justify-start gap-4">
                  <span className="text-brand-yellow/10 font-black text-5xl md:text-6xl tracking-tighter italic">1984</span>
                </div>
              </motion.div>

              {/* Timeline 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row-reverse items-center w-full group"
              >
                <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left mb-6 md:mb-0">
                  <h4 className="text-xl md:text-2xl font-bold text-brand-text mb-2 tracking-tight group-hover:text-brand-yellow transition-colors uppercase">Industrial Pivot</h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">Launched the heavy-duty Reels Division, expanding into aerospace and marine environments with patented spring technologies.</p>
                </div>
                <div className="hidden md:block relative z-10 w-4 h-4 rounded-full bg-brand-yellow border-4 border-[#0e0e0e] outline outline-4 outline-brand-yellow/20 -mx-2"></div>
                <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right flex items-center justify-center md:justify-end gap-4">
                  <span className="text-brand-yellow/10 font-black text-5xl md:text-6xl tracking-tighter italic">2002</span>
                </div>
              </motion.div>

              {/* Timeline 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row items-center w-full group"
              >
                <div className="w-full md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                  <h4 className="text-xl md:text-2xl font-bold text-brand-text mb-2 tracking-tight group-hover:text-brand-yellow transition-colors uppercase">Smart Alert™ Era</h4>
                  <p className="text-brand-text-muted text-sm leading-relaxed">Integration of IoT and visual alert systems, setting new global standards for "Aware" cable management solutions.</p>
                </div>
                <div className="hidden md:block relative z-10 w-4 h-4 rounded-full bg-brand-yellow border-4 border-[#0e0e0e] outline outline-4 outline-brand-yellow/20 shadow-[0_0_20px_#fce300] -mx-2"></div>
                <div className="w-full md:w-1/2 md:pl-12 flex items-center justify-center md:justify-start gap-4">
                  <span className="text-brand-yellow font-black text-4xl md:text-5xl tracking-tighter italic">TODAY</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
