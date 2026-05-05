import React from 'react';
import { Search, Globe, ShieldCheck, Wrench, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function Distributors() {
  return (
    <div className="pt-20 font-sans">
      {/* Hero Section */}
      <section className="relative h-[480px] lg:h-[560px] flex items-center overflow-hidden border-b border-brand-border">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            alt="Industrial warehouse at night" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0BpHvK62OuaGkcCADJrnvo5FxsAbT0FPBrKzd4nU5cbUL9D2yyx7Wgv8IZzjaZJzvebFAZ3CzLIudzTZohiQRz8Grrzlp2dZNVvnkMvcmhrawzIOKcLw2v2JTj1ZYLA_UjXHuziQLO3vAV7PfOWISl8NWtFIMSZF6r1FQTbzXn7rORlTtfMJLh6Hh6LvJSK09v3CUhR866puE3WnnypSoI2b8vr2HQlmnEw1gaH5O472NVjhSSj-yrGTWoBCtdm9WEQN-mJFQK0U"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/40 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block bg-brand-yellow text-black font-bold text-[11px] px-3 py-1 mb-6 uppercase tracking-widest"
            >
              Global Network
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-brand-text mb-6 uppercase"
            >
              Authorized Distributors
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-brand-text-muted max-w-xl leading-relaxed"
            >
              Locate our certified industrial partners providing premium Alert Reels equipment and localized technical support across the globe.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-8 h-[600px] lg:h-[700px] bg-brand-surface rounded-lg backdrop-blur-xl border border-brand-border rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-brand-surface rounded-lg">
              <img 
                className="w-full h-full object-cover opacity-40 contrast-125" 
                alt="Dark global map with circuitry lines" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_xws7yvMSbXdn7vRs7LxzRAxFippw2bHnxI13CDeNDTEN0ScUYTt7eqdS8oV3hI_jCBLB_IlyGiDfP2lrulMN3-Qcw9EcSZiu37FPXjeben24lYr7gK4K_XtOpyEao64yte9fdhGgqbPkqliwRCSpCX_-DI_DhoQd_FQBcxqFmO_1bvIsL_kr1f-ISC_yUst0p9czw1b3ewtvC2tm7T38NHYDi_HonQ5qCn7LSL8CCnfLUa6o3gJb9Y0x_PCL4Sb5VCZDiP9TkjI"
              />
              {/* Interactive Electric Blue Pins */}
              <div className="absolute top-[35%] left-[22%] cursor-pointer group/pin">
                <div className="h-6 w-6 bg-brand-blue/30 rounded-full animate-ping absolute -inset-1 opacity-75"></div>
                <div className="h-4 w-4 bg-brand-blue rounded-full relative shadow-brand-shadow border-2 border-brand-border transition-transform duration-300 group-hover/pin:scale-125"></div>
              </div>
              <div className="absolute top-[45%] left-[50%] cursor-pointer group/pin">
                <div className="h-6 w-6 bg-brand-blue/30 rounded-full animate-ping absolute -inset-1 opacity-75"></div>
                <div className="h-4 w-4 bg-brand-blue rounded-full relative shadow-brand-shadow border-2 border-brand-border transition-transform duration-300 group-hover/pin:scale-125"></div>
              </div>
              <div className="absolute top-[60%] left-[80%] cursor-pointer group/pin">
                <div className="h-6 w-6 bg-brand-blue/30 rounded-full animate-ping absolute -inset-1 opacity-75"></div>
                <div className="h-4 w-4 bg-brand-blue rounded-full relative shadow-brand-shadow border-2 border-brand-border transition-transform duration-300 group-hover/pin:scale-125"></div>
              </div>
              <div className="absolute top-[42%] left-[45%] cursor-pointer group/pin">
                <div className="h-6 w-6 bg-brand-yellow/30 rounded-full animate-ping absolute -inset-1 opacity-75"></div>
                <div className="h-4 w-4 bg-brand-yellow rounded-full relative shadow-[0_0_15px_#fce300] border-2 border-brand-border transition-transform duration-300 group-hover/pin:scale-125"></div>
              </div>
            </div>
            
            {/* Search Overlay */}
            <div className="absolute top-8 left-8 right-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative shadow-brand-shadow">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-brand-blue" />
                <input 
                  className="w-full bg-white backdrop-blur-md border border-[#333333] text-[#333333] py-4 pl-12 pr-4 focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00] outline-none text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-300" 
                  placeholder="SEARCH BY CITY, COUNTRY OR POSTAL CODE" 
                  type="text"
                />
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="bg-brand-yellow text-[#333333] px-8 py-4 font-bold uppercase tracking-tight hover:brightness-110 rounded-lg shadow-brand-shadow transition-all text-xs text-center"
              >
                Filter
              </motion.button>
            </div>
            
            {/* Map Legend */}
            <div className="absolute bottom-8 left-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-brand-border">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-blue shadow-brand-shadow"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">Certified Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-brand-border">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-yellow shadow-[0_0_8px_#fce300]"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">Service Center</span>
              </div>
            </div>
          </div>
          
          {/* Distributor List Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto max-h-[600px] lg:max-h-[700px] pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
            
            {/* Distributor Card 1 */}
            <motion.div 
              whileHover={{ x: -4 }}
              className="bg-brand-surface rounded-lg backdrop-blur-xl p-6 border-l-4 border-brand-blue border-y border-r border-brand-border hover:bg-brand-surface rounded-lg transition-colors duration-300 cursor-pointer group rounded-r-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-brand-text uppercase group-hover:text-brand-blue transition-colors">Industrial Pro-Flow</h3>
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="space-y-3 text-brand-text-muted text-xs tracking-wide">
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><MapPin className="w-4 h-4 shrink-0" /> 1200 Commerce Way, Chicago, IL</div>
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><Phone className="w-4 h-4 shrink-0" /> +1 (312) 555-0198</div>
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><Mail className="w-4 h-4 shrink-0" /> sales@industrialproflow.com</div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 border border-brand-border text-brand-text text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-lg  active:scale-95">Details</button>
                <button className="flex-1 py-3 bg-brand-blue text-brand-text text-[11px] font-bold uppercase tracking-widest hover:brightness-110 shadow-brand-shadow shadow-brand-blue/20 transition-all rounded-lg  active:scale-95">Directions</button>
              </div>
            </motion.div>

            {/* Distributor Card 2 */}
            <motion.div 
              whileHover={{ x: -4 }}
              className="bg-brand-surface rounded-lg backdrop-blur-xl p-6 border-l-4 border-brand-yellow border-y border-r border-brand-border hover:bg-brand-surface rounded-lg transition-colors duration-300 cursor-pointer group rounded-r-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-brand-text uppercase group-hover:text-brand-yellow transition-colors">Tech-Core Solutions</h3>
                <Wrench className="w-5 h-5 text-brand-yellow" />
              </div>
              <div className="space-y-3 text-brand-text-muted text-xs tracking-wide">
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><MapPin className="w-4 h-4 shrink-0" /> 88 Industrial Blvd, Munich, DE</div>
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><Phone className="w-4 h-4 shrink-0" /> +49 89 555 990</div>
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><Mail className="w-4 h-4 shrink-0" /> support@techcore.de</div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 border border-brand-border text-brand-text text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-lg  active:scale-95">Details</button>
                <button className="flex-1 py-3 bg-brand-yellow text-black text-[11px] font-bold uppercase tracking-widest hover:brightness-110 shadow-brand-shadow shadow-brand-yellow/20 transition-all rounded-lg  active:scale-95">Directions</button>
              </div>
            </motion.div>

            {/* Distributor Card 3 */}
            <motion.div 
              whileHover={{ x: -4 }}
              className="bg-brand-surface rounded-lg backdrop-blur-xl p-6 border-l-4 border-brand-blue border-y border-r border-brand-border hover:bg-brand-surface rounded-lg transition-colors duration-300 cursor-pointer group rounded-r-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-brand-text uppercase group-hover:text-brand-blue transition-colors">Apex Heavy Supply</h3>
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="space-y-3 text-brand-text-muted text-xs tracking-wide">
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><MapPin className="w-4 h-4 shrink-0" /> 5th Ave, Dubai Industrial City, UAE</div>
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><Phone className="w-4 h-4 shrink-0" /> +971 4 555 0122</div>
                <div className="flex items-center gap-2 hover:text-brand-text transition-colors"><Mail className="w-4 h-4 shrink-0" /> contact@apexsupply.ae</div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 border border-brand-border text-brand-text text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-lg  active:scale-95">Details</button>
                <button className="flex-1 py-3 bg-brand-blue text-brand-text text-[11px] font-bold uppercase tracking-widest hover:brightness-110 shadow-brand-shadow shadow-brand-blue/20 transition-all rounded-lg  active:scale-95">Directions</button>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Bento Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-brand-surface rounded-lg backdrop-blur-xl border border-brand-border p-10 flex flex-col justify-between group rounded-xl hover:border-brand-border transition-colors"
          >
            <div>
              <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Global Reach</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight uppercase font-sans">45 COUNTRIES. <br/>1 GLOBAL STANDARD.</h2>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl md:text-7xl font-black text-brand-text">580+</span>
              <span className="text-brand-text-muted font-bold text-sm uppercase tracking-wider">Active Partnerships</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-surface rounded-lg backdrop-blur-xl border border-brand-border p-10 flex flex-col justify-center items-center text-center rounded-xl hover:border-brand-border transition-colors"
          >
            <Globe className="text-brand-blue w-12 h-12 mb-4" />
            <h4 className="font-bold text-3xl uppercase text-brand-text tracking-tight">99.8%</h4>
            <p className="text-brand-text-muted font-bold text-xs mt-2 uppercase tracking-tight">Global Uptime</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-surface rounded-lg backdrop-blur-xl border border-brand-yellow/30 p-10 flex flex-col justify-center items-center text-center rounded-xl hover:border-brand-yellow/50 transition-colors"
          >
            <ShieldCheck className="text-brand-yellow w-12 h-12 mb-4" />
            <h4 className="font-bold text-2xl uppercase text-brand-text tracking-tight">Certified</h4>
            <p className="text-brand-text-muted font-bold text-xs mt-2 uppercase tracking-tight">Support Network</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Become a Distributor CTA */}
      <section className="bg-brand-yellow py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-bold uppercase mb-4 text-black tracking-tight">Partner with Alert Reels</h2>
            <p className="text-lg text-black/80 font-medium">Join our network of elite industrial distributors and deliver world-class safety solutions to your territory.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-brand-text px-10 py-5 font-bold uppercase tracking-widest transition-all rounded-lg  shadow-brand-shadow shrink-0"
          >
            Apply for Dealership
          </motion.button>
        </div>
      </section>
    </div>
  );
}
