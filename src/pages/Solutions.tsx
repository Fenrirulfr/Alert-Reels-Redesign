import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Solutions() {
  return (
    <div className="font-sans bg-brand-surface rounded-lg text-brand-text">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden py-12">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img className="w-full h-full object-cover opacity-30 grayscale" alt="Industrial facility atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1PECwbuznEmjOi-WveY4UwSe-S8KaaRhahO_4X865C8s2D7Q4as6ubTCLq4Bls8BjfZbFspaaW-0sOFO99OnJezzOBhrrZKYMbyg84l_uUZCIN5ixI2i6IWNMBGI4UGrP32OcczC1pbZWOzUauI3-XI6azty-xZobS_cQY5sZPQ6wIq6ry_vC4JE-Zc6peVFMW84WyHQAtGGsWffHF-U3dXYsIgJW49x9Z8OJO85so9F8x_7yjjlKOGTYoetE9bzmzFwpMJ_FPvU"/>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-transparent"></div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-3 py-1 bg-brand-yellow text-black font-bold uppercase mb-6 text-[11px] tracking-widest"
            >
              Custom Engineering
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-5xl md:text-6xl font-bold text-brand-text mb-6 uppercase tracking-tight leading-tight"
            >
              Tailored Power Reels for Uncompromising Environments
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-lg text-brand-text-muted mb-10 leading-relaxed max-w-xl"
            >
              When standard solutions won't cut it, Alert Reels designs and manufactures bespoke cord and hose management systems built for your specific industrial footprint.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-12"
            >
              <div className="flex flex-col">
                <span className="font-bold text-4xl text-brand-yellow mb-1 tracking-tight">150+</span>
                <span className="font-bold text-xs text-brand-text-muted uppercase tracking-widest">Custom Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-4xl text-brand-yellow mb-1 tracking-tight">24h</span>
                <span className="font-bold text-xs text-brand-text-muted uppercase tracking-widest">Response Time</span>
              </div>
            </motion.div>
          </div>

          {/* Lead Capture Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-surface rounded-lg backdrop-blur-xl p-10 rounded-lg shadow-brand-shadow relative border border-brand-border"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow rounded-l-lg"></div>
            <h3 className="font-bold text-3xl text-brand-text mb-2 tracking-tight">Initialize Solution</h3>
            <p className="text-brand-text-muted mb-8">Speak with an industrial systems engineer today.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-[10px] text-brand-text-muted uppercase tracking-widest">Full Name</label>
                  <input className="w-full bg-brand-surface border border-brand-border text-brand-text rounded-lg p-3 focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] outline-none transition-all placeholder:text-brand-text-muted text-sm" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-[10px] text-brand-text-muted uppercase tracking-widest">Company Email</label>
                  <input className="w-full bg-brand-surface border border-brand-border text-brand-text rounded-lg p-3 focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] outline-none transition-all placeholder:text-brand-text-muted text-sm" placeholder="name@industry.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-bold text-[10px] text-brand-text-muted uppercase tracking-widest">Industry Type</label>
                <select className="w-full bg-brand-surface border border-brand-border text-brand-text rounded-lg p-3 focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] outline-none transition-all text-sm appearance-none">
                  <option className="bg-brand-surface text-brand-text">Aerospace & Defense</option>
                  <option className="bg-brand-surface text-brand-text">Automotive Manufacturing</option>
                  <option className="bg-brand-surface text-brand-text">Energy & Utilities</option>
                  <option className="bg-brand-surface text-brand-text">Medical Facilities</option>
                  <option className="bg-brand-surface text-brand-text">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-bold text-[10px] text-brand-text-muted uppercase tracking-widest">Project Details</label>
                <textarea className="w-full bg-brand-surface border border-brand-border text-brand-text rounded-lg p-3 focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] outline-none transition-all placeholder:text-brand-text-muted text-sm resize-none" placeholder="Describe your specific requirements..." rows={4}></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-yellow text-black font-bold tracking-widest uppercase rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-brand-shadow shadow-brand-yellow/10 text-xs cursor-pointer"
              >
                Request Technical Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process Section */}
      <section className="py-24 bg-brand-surface rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 uppercase tracking-tight">Precision Deployment Process</h2>
            <p className="text-lg text-brand-text-muted max-w-2xl mx-auto leading-relaxed">From initial blueprinting to final onsite integration, our industrial design process ensures peak reliability.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Progress Line */}
            <div className="absolute left-[23.5px] top-0 bottom-0 w-0.5 bg-white/10">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '50%' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full bg-brand-yellow shadow-brand-shadow"
              ></motion.div>
            </div>

            <div className="space-y-16">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-brand-surface rounded-lg border-4 border-brand-yellow flex items-center justify-center z-10 shadow-brand-shadow group-hover:scale-110 transition-transform">
                  <span className="font-black text-brand-yellow text-sm">01</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-bold text-2xl text-brand-text mb-3 tracking-tight">Diagnostic Consultation</h3>
                    <p className="text-brand-text-muted leading-relaxed text-sm">Our engineers conduct a comprehensive audit of your operational environment, identifying power access points, safety hazards, and spatial constraints.</p>
                  </div>
                  <div className="bg-brand-surface rounded-lg backdrop-blur-xl p-5 rounded-lg  border-l-4 border-brand-yellow group-hover:bg-brand-surface transition-colors">
                    <span className="font-bold text-[10px] text-brand-yellow block mb-2 uppercase tracking-widest">Deliverable</span>
                    <p className="font-semibold text-brand-text text-sm">Site Efficiency Report & Safety Mapping</p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-brand-surface rounded-lg border-4 border-brand-yellow flex items-center justify-center z-10 shadow-brand-shadow group-hover:scale-110 transition-transform">
                  <span className="font-black text-brand-yellow text-sm">02</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-bold text-2xl text-brand-text mb-3 tracking-tight">Custom CAD Prototyping</h3>
                    <p className="text-brand-text-muted leading-relaxed text-sm">We develop high-fidelity 3D models and technical schematics tailored to your specific voltage, hose diameter, and mounting requirements.</p>
                  </div>
                  <div className="rounded-lg  overflow-hidden border border-brand-border h-40 relative group-hover:border-brand-yellow/30 transition-colors">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Technical CAD model preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA6ecvCUzsuJoutKNN-a19PubNik0pKAnO1RNUDs-CKaeZZAmB8rWBuEd8InRDtw75_6H3oAm6rH3fqkTgjNPlzAvAqigGyN9lh-oc8JSITN9tAthiZxOJ78kd-Y6ABVpOLfwiwhtu84XPSzulhmNVmvLjshemUcKdvjKybuyQ_7UHEwrM5D3NNyfyz52pAIhyC8fE7NHJ8InaV-PCuqjtZrGlPb1BvyT-TxpLJo2dm0uACBehSRcTem1wWQ_AX5a9mCGVDCLZisg"/>
                    <div className="absolute inset-0 bg-brand-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-brand-surface rounded-lg border-4 border-brand-border flex items-center justify-center z-10 group-hover:border-brand-border transition-colors">
                  <span className="font-black text-brand-text-muted text-sm group-hover:text-brand-text-muted transition-colors">03</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-bold text-2xl text-brand-text mb-3 tracking-tight">Industrial Fabrication</h3>
                    <p className="text-brand-text-muted leading-relaxed text-sm">Every unit is hand-assembled in our domestic facility using heavy-gauge steel and aircraft-grade components to ensure a lifetime of service.</p>
                  </div>
                  <div className="bg-brand-surface rounded-lg backdrop-blur-xl p-5 rounded-lg  border border-brand-border group-hover:border-brand-border transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                      <span className="font-bold text-[10px] text-brand-text uppercase tracking-widest">Mil-Spec Certified</span>
                    </div>
                    <p className="font-medium text-brand-text-muted text-xs">Components tested to exceed ASTM durability standards.</p>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.6 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-brand-surface rounded-lg border-4 border-brand-border flex items-center justify-center z-10 group-hover:border-brand-border transition-colors">
                  <span className="font-black text-brand-text-muted text-sm group-hover:text-brand-text-muted transition-colors">04</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-bold text-2xl text-brand-text mb-3 tracking-tight">On-Site Integration</h3>
                    <p className="text-brand-text-muted leading-relaxed text-sm">Our field technicians manage the complete installation and perform rigorous load-testing before final certification and hand-off.</p>
                  </div>
                  <div className="w-full mt-4">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '0%' }} 
                        className="h-full bg-brand-yellow/30"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Reel / Asymmetric Showcase */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-4 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 uppercase tracking-tight">Built for the Extremes</h2>
              <p className="text-lg text-brand-text-muted mb-10 leading-relaxed">Whether it's offshore drilling or sub-zero logistics, our custom reels maintain mechanical integrity where others fail.</p>
              <a className="flex items-center gap-2 text-brand-yellow font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all group w-fit cursor-pointer" href="#">
                View Case Studies 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="bg-brand-surface rounded-lg backdrop-blur-xl p-8 rounded-lg relative overflow-hidden group border border-brand-border hover:border-brand-border transition-colors cursor-pointer"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow"></div>
                <span className="font-bold text-[10px] text-brand-yellow uppercase tracking-widest block mb-4">Extreme Heat</span>
                <h4 className="font-bold text-3xl text-brand-text mb-4 tracking-tight">Steel Foundries</h4>
                <p className="text-brand-text-muted leading-relaxed text-sm">Thermal-resistant coatings and specialized internal lubrication for 500°F+ environments.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4 }}
                className="bg-brand-surface rounded-lg backdrop-blur-xl p-8 rounded-lg relative overflow-hidden group sm:translate-y-12 border border-brand-border hover:border-brand-border transition-colors cursor-pointer"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-surface rounded-lg"></div>
                <span className="font-bold text-[10px] text-[#FF8C00] uppercase tracking-widest block mb-4">Chemical Grade</span>
                <h4 className="font-bold text-3xl text-brand-text mb-4 tracking-tight">Refinery Solutions</h4>
                <p className="text-brand-text-muted leading-relaxed text-sm">316 Stainless Steel construction with anti-corrosive seals for hazardous fluid transfer.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
