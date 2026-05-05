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
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/70 to-transparent"></div>
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full mt-20">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Power Your Workflow.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg text-white/80 mb-10 leading-relaxed max-w-xl"
          >
            Professional grade cord reels and industrial solutions for the modern workspace. Engineered for endurance, designed for precision.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/products" className="bg-brand-yellow text-black px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2">
              View Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/solutions" className="border border-white/30 text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white/10 active:scale-95 transition-all backdrop-blur-sm cursor-pointer flex items-center justify-center">
              Custom Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
