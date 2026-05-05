import React from 'react';
import { Globe, Share2, Network, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-[#131313] border-t-4 border-brand-yellow relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-8 py-20 max-w-7xl mx-auto font-sans">
        
        {/* Column 1: Logo & About */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <img 
              src="https://alertreels.com/wp-content/uploads/Alert_logo.png" 
              alt="Alert Logo" 
              className="h-10 w-auto object-contain cursor-pointer hover:opacity-80 active:scale-95 transition-all" 
            />
          </div>
          <p className="text-white/60 text-base leading-relaxed pt-2">
            Pioneering industrial cord management since 1984. Our solutions are built for the professionals who build the world.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-white/60 hover:text-brand-yellow hover:-translate-y-1 active:scale-95 transition-all"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-white/60 hover:text-brand-yellow hover:-translate-y-1 active:scale-95 transition-all"><Network className="w-5 h-5" /></a>
            <a href="#" className="text-white/60 hover:text-brand-yellow hover:-translate-y-1 active:scale-95 transition-all"><Share2 className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-3 border-b border-white/10 pb-2">Quick Links</h5>
          <Link to="/products" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Products</Link>
          <Link to="/solutions" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Solutions</Link>
          <Link to="/brands" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Brands</Link>
          <a href="#" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">About</a>
        </div>

        {/* Column 3: Support */}
        <div className="flex flex-col gap-3">
          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-3 border-b border-white/10 pb-2">Support</h5>
          <Link to="/distributors" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Distributors</Link>
          <Link to="/resources" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Resources</Link>
          <Link to="/contact" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Contact Us</Link>
          <a href="#" className="text-white/60 text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Privacy Policy</a>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-3 border-b border-white/10 pb-2">Stay Informed</h5>
          <div className="relative group flex">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#1a1a1a] border border-white/20 px-4 py-3 text-white text-sm focus:border-brand-yellow focus:outline-none transition-all placeholder:text-white/30"
            />
            <button className="bg-brand-yellow text-black px-6 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center shrink-0">
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-white/40 mt-4">© 2024 Alert Reels Industrial. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
