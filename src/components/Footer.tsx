import React from 'react';
import { Globe, Share2, Network, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="w-full bg-brand-bg rounded-lg border-t-4 border-brand-yellow relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-8 py-20 max-w-7xl mx-auto font-sans text-brand-text">
        
        {/* Column 1: Logo & About */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <img 
              src={theme === 'dark' ? "https://lh3.googleusercontent.com/d/1xPAOFQpidON8RzbWmfRBbO92E6eLKtHJ" : "https://lh3.googleusercontent.com/d/1WGNuDVmxDFXHMaZYZZR0dxQUM3nLFf2r"} 
              alt="Alert Reels Logo - Enterprise Industrial Solutions" 
              className="h-10 w-auto object-contain cursor-pointer hover:opacity-80 active:scale-95 transition-all" 
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-brand-text-muted text-base leading-relaxed pt-2">
            Pioneering industrial cord management since 1984. Our solutions are built for the professionals who build the world.
          </p>
          <nav className="flex gap-4 mt-2" aria-label="Social Media">
            <a href="#" className="text-brand-text-muted hover:text-brand-yellow hover:-translate-y-1 active:scale-95 transition-all" aria-label="Alert Reels on Global Network"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-brand-text-muted hover:text-brand-yellow hover:-translate-y-1 active:scale-95 transition-all" aria-label="Alert Reels Corporate Network"><Network className="w-5 h-5" /></a>
            <a href="#" className="text-brand-text-muted hover:text-brand-yellow hover:-translate-y-1 active:scale-95 transition-all" aria-label="Share Alert Reels Solutions"><Share2 className="w-5 h-5" /></a>
          </nav>
        </div>

        {/* Column 2: Quick Links */}
        <nav className="flex flex-col gap-3" aria-label="Footer Quick Links">
          <h5 className="text-brand-text font-bold uppercase tracking-widest text-xs mb-3 border-b border-brand-border pb-2">Quick Links</h5>
          <Link to="/products" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Products</Link>
          <Link to="/solutions" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Solutions</Link>
          <Link to="/brands" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Brands</Link>
          <a href="#" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">About</a>
        </nav>

        {/* Column 3: Support */}
        <nav className="flex flex-col gap-3" aria-label="Footer Support Links">
          <h5 className="text-brand-text font-bold uppercase tracking-widest text-xs mb-3 border-b border-brand-border pb-2">Support</h5>
          <Link to="/distributors" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Distributors</Link>
          <Link to="/resources" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Resources</Link>
          <Link to="/contact" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Contact Us</Link>
          <a href="#" className="text-brand-text-muted text-sm hover:text-brand-yellow hover:translate-x-1 active:scale-95 transition-all py-1 inline-block transform origin-left">Privacy Policy</a>
        </nav>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <h5 className="text-brand-text font-bold uppercase tracking-widest text-xs mb-3 border-b border-brand-border pb-2">Stay Informed</h5>
          <form className="relative group flex" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email Address for Newsletter</label>
            <input 
              id="footer-email"
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-brand-surface rounded-lg border border-brand-border px-4 py-3 text-brand-text text-sm focus:border-brand-yellow focus:outline-none transition-all placeholder:text-brand-text-muted/50"
              required
            />
            <button 
              type="submit"
              className="bg-brand-yellow text-black px-6 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center shrink-0"
              aria-label="Subscribe to newsletter"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="text-xs text-brand-text-muted mt-4">© 2024 Alert Reels Industrial. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
