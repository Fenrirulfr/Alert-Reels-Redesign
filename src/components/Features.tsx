import React from 'react';
import { Factory, Cog, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-brand-surface rounded-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Feature 1 */}
          <motion.div variants={item} className="bg-brand-surface rounded-lg p-8 rounded-lg shrink-0 group border border-transparent hover:border-brand-yellow/30 transition-all duration-300 border-l-brand-yellow shadow-sm hover:-translate-y-2 cursor-pointer relative overflow-hidden">
             {/* Yellow strip simulating the HTML approach */}
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow"></div>
             
             <div className="w-12 h-12 mb-6 text-brand-yellow group-hover:scale-110 transition-transform duration-300">
               <Factory className="w-10 h-10 stroke-1" />
             </div>
             <h3 className="text-2xl font-bold text-brand-text mb-3 tracking-tight">Industrial Strength</h3>
             <p className="text-brand-text-muted mb-8 leading-relaxed">Built to withstand the most demanding environments, from heavy manufacturing floors to offshore rigs.</p>
             <div className="flex items-center text-brand-yellow text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
               View Specs <ChevronRight className="w-4 h-4 ml-1" />
             </div>
          </motion.div>
          {/* Feature 2 */}
          <motion.div variants={item} className="bg-brand-surface rounded-lg p-8 rounded-lg shrink-0 group border border-transparent hover:border-brand-yellow/30 transition-all duration-300 border-l-brand-yellow shadow-sm hover:-translate-y-2 cursor-pointer relative overflow-hidden">
             {/* Yellow strip simulating the HTML approach */}
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow"></div>

             <div className="w-12 h-12 mb-6 text-brand-yellow group-hover:scale-110 transition-transform duration-300">
               <Cog className="w-10 h-10 stroke-1" />
             </div>
             <h3 className="text-2xl font-bold text-brand-text mb-3 tracking-tight">Technical Precision</h3>
             <p className="text-brand-text-muted mb-8 leading-relaxed">Engineering excellence ensures smooth operation, constant tension control, and modular reliability.</p>
             <div className="flex items-center text-brand-yellow text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
               View Tech Data <ChevronRight className="w-4 h-4 ml-1" />
             </div>
          </motion.div>
          {/* Feature 3 */}
          <motion.div variants={item} className="bg-brand-surface rounded-lg p-8 rounded-lg shrink-0 group border border-transparent hover:border-brand-yellow/30 transition-all duration-300 border-l-brand-yellow shadow-sm hover:-translate-y-2 cursor-pointer relative overflow-hidden">
             {/* Yellow strip simulating the HTML approach */}
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow"></div>

             <div className="w-12 h-12 mb-6 text-brand-yellow group-hover:scale-110 transition-transform duration-300">
               <Globe className="w-10 h-10 stroke-1" />
             </div>
             <h3 className="text-2xl font-bold text-brand-text mb-3 tracking-tight">Global Distribution</h3>
             <p className="text-brand-text-muted mb-8 leading-relaxed">Widespread logistical network providing rapid fulfillment and localized support across six continents.</p>
             <div className="flex items-center text-brand-yellow text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
               Find Distributor <ChevronRight className="w-4 h-4 ml-1" />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
