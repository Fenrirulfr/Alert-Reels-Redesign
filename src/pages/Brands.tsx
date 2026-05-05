import React from 'react';
import { ArrowRight, Filter, Grid2X2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Brands() {
  const partners = [
    { name: "ProLite", url: "https://alertreels.com/brands/prolite/" },
    { name: "ProReel", url: "https://alertreels.com/brands/proreel/" },
    { name: "ShockStopper", url: "https://alertreels.com/brands/shockstopper/" },
    { name: "Wrap-N-Carry", url: "https://alertreels.com/brands/wrap-n-carry/" },
  ];

  return (
    <div className="font-sans bg-brand-surface rounded-lg text-brand-text">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-brand-border">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 opacity-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg"></div>
          <img 
            className="w-full h-full object-cover" 
            alt="A high-contrast industrial interior showcasing heavy steel beams and yellow safety equipment in a precision engineering workshop." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBA3WVKiKtVunr2F20Y_JBvey-xP9X_75rMfJ9oXzWcznf8ugZab50MiEchwZrFofhFlHILJINR44cMxPGe2XAwtA929MwVC7vsJRz9X2pyE6k61_rRXma4-qHOQZdjNjWaPsXOq16WWzcXdrS40NXG3TSuV023l_B1DmcQstw32OzwrQ8t0M8bsTuJ7gZ_Tk-GdctUIRXLiWt30zEA4kBxquNj2tWeXfZpPiKWZD5mylMIOUjG-M27waF7NLNX3Kzim3kfymVeaI"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 mb-6"
            >
              <span className="w-2 h-2 bg-brand-yellow animate-pulse"></span>
              <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">Industry Partnerships</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-brand-text mb-6 tracking-tight leading-tight uppercase"
            >
              Built by the Best, <br/><span className="text-brand-yellow">Trusted by Leaders.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-brand-text-muted max-w-2xl mb-8 leading-relaxed"
            >
              Alert Reels collaborates with global industrial pioneers to deliver safety-critical power solutions. Our partner ecosystem represents the gold standard in construction, manufacturing, and heavy engineering.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-brand-blue text-brand-text px-8 py-3 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-brand-yellow hover:text-black active:scale-95 transition-all shadow-brand-shadow hover:shadow-brand-yellow/20 group cursor-pointer">
                Become a Partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Wall Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase">Our Brand Ecosystem</h2>
            <p className="text-brand-text-muted leading-relaxed">Strategic alliances that power the world's most demanding worksites. Each partner is selected for their commitment to industrial excellence.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-brand-border hover:border-brand-yellow hover:text-brand-yellow transition-colors cursor-pointer text-brand-text-muted">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 border border-brand-border hover:border-brand-yellow hover:text-brand-yellow transition-colors cursor-pointer text-brand-text-muted">
              <Grid2X2 className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-brand-border"
        >
          {partners.map((partner, idx) => (
            <motion.a 
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square md:aspect-[4/3] border-r border-b border-brand-border group relative overflow-hidden flex flex-col items-center justify-center bg-brand-surface rounded-lg hover:bg-brand-surface rounded-lg transition-all duration-300 p-12 cursor-pointer text-center"
            >
              {idx === 0 && (
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">Tier 1 Partner</span>
                </div>
              )}
              <h3 className="text-3xl md:text-3xl font-black text-brand-text-muted group-hover:text-brand-text transition-colors tracking-tight uppercase mb-4">
                {partner.name}
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-brand-yellow">
                <span className="text-[10px] font-bold uppercase tracking-widest">View Products</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Bento Grid Featured Case Study */}
      <section className="py-24 bg-brand-bg border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl font-bold mb-12 text-center uppercase tracking-tight"
          >
            Partnership in Action
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-8 relative overflow-hidden border border-brand-border group cursor-pointer"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Featured collaboration - The Hyperion Project" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCswhp6V8jtSAS9j3rIGMCvjRiyULWxonjiQVC9C9VTdSQe5HJper6Oczv56wiREIwsOXOMlzxOjaVZaPsrVfFSQGiOYqtpiJM_Qz1_zCbSTPGmbB_moKp5HY9bXqupd5NcWx3HNquyw6-4Uv1SIX7KETnRk8xgJ2W38ZkFShZzLPSkCnO7snl0LbBQAGi_X8KcHxoB3_Iay8uKXndRP7YPoMgQBqgV8PSZLVZ8BWBBrfUbs1_E3_B_XkQfL2CGKnnYrLZTtSHZXjI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
                <span className="text-brand-yellow font-bold text-[10px] uppercase tracking-widest mb-2">Featured Collaboration</span>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">The Hyperion Project</h3>
                <p className="text-brand-text-muted max-w-xl leading-relaxed">Supplying 500+ industrial reels for the world's largest automated logistics center. A testament to reliability under 24/7 operational stress.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-4 grid grid-rows-2 gap-6"
            >
              <div className="bg-brand-surface rounded-lg p-8 border border-brand-border flex flex-col justify-center group hover:border-brand-yellow/50 transition-colors cursor-pointer">
                <div className="text-5xl md:text-6xl font-bold text-brand-yellow mb-2 tracking-tight">12M+</div>
                <div className="font-bold text-[10px] uppercase tracking-widest text-brand-text-muted">Hours Operational</div>
                <p className="mt-4 text-sm text-brand-text-muted leading-relaxed">Zero failure rate across our entire distributor network in 2023.</p>
              </div>
              
              <div className="bg-brand-yellow p-8 border border-brand-yellow flex flex-col justify-center group hover:bg-white transition-colors cursor-pointer">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2 tracking-tight">50+</div>
                <div className="font-bold text-[10px] uppercase tracking-widest text-black/60">Global Brands</div>
                <p className="mt-4 text-sm text-black/70 leading-relaxed">Co-developing next-generation smart reels with industry leaders.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-brand-surface rounded-lg backdrop-blur-xl p-12 md:p-16 border border-brand-yellow/20 max-w-4xl mx-auto shadow-brand-shadow"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight text-brand-text">Scale Your Solutions</h2>
          <p className="text-lg text-brand-text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            Join the Alert Reels ecosystem and leverage our global distribution network and premium industrial hardware.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-brand-yellow text-black px-10 py-5 font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-brand-shadow hover:shadow-brand-yellow/20 text-sm cursor-pointer">
              Become a Distributor
            </button>
            <button className="border border-brand-border text-brand-text px-10 py-5 font-bold uppercase tracking-widest hover:border-brand-yellow hover:text-brand-yellow active:scale-95 transition-all text-sm cursor-pointer">
              Partner Portal
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
