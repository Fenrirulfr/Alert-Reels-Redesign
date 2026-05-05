import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const SOLUTIONS = [
  {
    id: 1,
    tag: 'Heavy Duty',
    title: 'S-Series Pro Reel',
    description: 'Triple-insulated cabling with self-retracting spring drive.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN3OyglEynSDNWmeSMCj8vYWZGNA8J5SrpuniDfRehA_bP2YREkaBhyBfpnOMOKOLlRvAiSdtI0l5tBx-gyhl6LgnrJ884J5p6fcn8Tuhc2LzwBCchAQCz2UkhK9xIiu5VK4JI2aUlA5KkGGtSVu5Sf4YZPCI3FN31h1DvkhfOPkTGcgORAvU7I476pb_ImT8uPMcbG904UYQ_xlRnqxJCA1sdr3RWHxFgXNefcI0qVFecyQ9W50mwtwpkCSjIZ5N7lJCW1ly4aTA'
  },
  {
    id: 2,
    tag: 'Technical',
    title: 'Digital Interface',
    description: 'Monitored tension systems with real-time feedback loop.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1WMqwplGU_XZbhQc8Vrj0D4MiGypBeyGwl-3nbcX-WILkpgxomUW9fDc-5jBmF1l2ZG1nauoPmVdMK07ABx_NX_OILD5Pjaw6-EeFVbeKKLzQZKb3I90JG_R0-MyJMWMa5qpdI1TuhTxxkkdBjnuJkdmjX4xRh-VxQ1HN6-FzVE4_AKrJFijHL_CrXAR3Whxa4YKcK6E1DSQpYpW5rhLYwY5McefGEVSqqkh1tqYQvvxTP6UCUOW96q_hHwJDmntgJBDgBg-HeW8'
  },
  {
    id: 3,
    tag: 'Distribution',
    title: 'Rapid Logic Core',
    description: 'Streamlined ordering for enterprise-level inventory management.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW3DfgoiJJFCqmjXU3u-E8gOTayN_RGKo-M1WLStWNY3UAxN3EsDXPcuAPlZuphTxYjCSaAf1GTrEwPUTIanSRBEDp5EHKwPp6pPm-hokMqbzS7Idiq0dHU65DlGV7vgt2GJ8Yvs0PVYunyrDnZVUEIhnE-6VFcM4AlTjUvsN0hTNNpe7OLtkId1GYwZWsn3_-TzAwiPA9TXutKvcTAkqsUpRIuwn-BDhXxsB7nQTDJKa0vJOKr3KC1GIRNUe2kGPCkN2NcLAmBT4'
  },
  {
    id: 4,
    tag: 'Power Blocks',
    title: 'QuadForce X',
    description: '4-way GFCI power distribution hub with premium 12-gauge wiring.',
    image: 'https://lh3.googleusercontent.com/d/1PELIyXujbJOjiX-KSsXQxrnioGf4JzWU'
  },
  {
    id: 5,
    tag: 'Lighting',
    title: 'Lumina Pro 360',
    description: 'High-output 15,000 lumen LED work light with integrated 50ft cable.',
    image: 'https://lh3.googleusercontent.com/d/1oLclm1VLqXRnkDQFnvcCcCSdGQk7Sn2n'
  },
  {
    id: 6,
    tag: 'Hazard Series',
    title: 'Sentinel V3',
    description: 'Explosion-proof hazardous location cord reel with static grounding.',
    image: 'https://lh3.googleusercontent.com/d/1SehTmojrGPFblOrC0UKkcNkmn10rF86F'
  }
];

export function ProductSolutions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('div')?.clientWidth || 400;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('div')?.clientWidth || 400;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-brand-bg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-8 mb-10 flex justify-between items-end gap-6"
      >
        <div>
          <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest block mb-2">Active Monitoring</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">Product Solutions</h2>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={scrollLeft} 
            className="p-2 border border-brand-border text-brand-text hover:bg-white/10 hover:border-brand-yellow transition-all active:scale-95 rounded-lg"
            aria-label="Scroll products left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollRight} 
            className="p-2 border border-brand-border text-brand-text hover:bg-white/10 hover:border-brand-yellow transition-all active:scale-95 rounded-lg"
            aria-label="Scroll products right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
      
      {/* Scrollable Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-4 sm:px-8 pb-10 max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden scroll-smooth scrollbar-hide"
      >
        {SOLUTIONS.map(solution => (
          <motion.div 
            whileHover={{ y: -4 }}
            key={solution.id} 
            className="w-[300px] sm:w-[400px] min-w-[300px] sm:min-w-[400px] bg-brand-surface rounded-lg p-4 border border-brand-border group hover:border-brand-yellow/50 transition-colors shrink-0 relative"
          >
            <Link 
              to={`/product/${solution.title.toLowerCase().replace(/ /g, '-')}`} 
              className="absolute inset-0 z-20"
              aria-label={`View details for ${solution.title}`}
            ></Link>
            <div className="aspect-[16/9] w-full overflow-hidden mb-4 relative rounded-md">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={solution.title} 
                src={solution.image} 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-2 pb-2">
              <span className="text-[10px] font-bold text-brand-yellow uppercase mb-2 block tracking-widest">{solution.tag}</span>
              <h4 className="text-xl sm:text-2xl font-bold mb-2 text-brand-text tracking-tight">{solution.title}</h4>
              <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

