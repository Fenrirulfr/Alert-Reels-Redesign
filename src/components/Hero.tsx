import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-[870px] w-full flex items-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          className="w-full h-full object-cover" 
          alt="Industrial manufacturing floor with heavy machinery" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnKwE1xadGBGJtZy0LOecK5k5US9DpL6pI3urkJSY3xnkhlxDCrONXFOxE_FOd9ctNJ8T4lUazlfJvBGvUCQm8nU7dUfP7tcsl8teLjDjWI3PTdpY8EzAInXp5rRoogXdN9n2HzPSKNmGFD_kYx-jhc5C7hp8coeNxd3FsvTLOnOs-H4v81qHpUlog_zrE0IcpDQIsmIhSyPPZZKMBFL8G63KYVz-qTleIa6gfyb54WsleOhkHIMiWuStL7D1ZYJGMWZf5Xaggqdg"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20 dark:from-[#131313] dark:via-[#131313]/70 dark:to-transparent"></div>
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full mt-20">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] dark:text-white mb-6 tracking-tight"
          >
            Power Your Workflow.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg text-[#666666] dark:text-white/70 mb-10 leading-relaxed max-w-xl"
          >
            Professional grade cord reels and industrial solutions for the modern workspace. Engineered for endurance, designed for precision.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/products" className="bg-[#FCE300] text-[#333333] px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] rounded-lg">
              View Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/solutions" className="bg-white border border-[#333333] text-[#333333] px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#F8F9FA] active:scale-95 transition-all backdrop-blur-sm cursor-pointer flex items-center justify-center rounded-lg">
              Custom Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
