import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, Sun, Moon, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { useCart } from './CartContext';
import { useAuth } from '../lib/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setIsCartOpen, cartCount } = useCart();
  const { user } = useAuth();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Distributors', path: '/distributors' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Brands', path: '/brands' },
    { name: 'Resources', path: '/resources' }
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border h-20 transition-all duration-300">
      <div className="flex justify-between items-center h-full px-4 sm:px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="active:scale-95 hover:opacity-80 transition-all inline-block transform origin-left"
            aria-label="Alert Reels Home"
          >
            <img 
              src={theme === 'dark' ? "https://lh3.googleusercontent.com/d/1xPAOFQpidON8RzbWmfRBbO92E6eLKtHJ" : "https://lh3.googleusercontent.com/d/1WGNuDVmxDFXHMaZYZZR0dxQUM3nLFf2r"} 
              alt="Alert Reels Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary Navigation">
          {navItems.map((item) => {
             const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
             return (
               <Link 
                 key={item.name}
                 to={item.path} 
                 className={`${isActive ? 'text-brand-yellow border-b-2 border-brand-yellow pb-1' : 'text-brand-text-muted hover:text-brand-yellow pb-1 border-b-2 border-transparent'} font-medium transition-all duration-200 uppercase tracking-widest text-[11px] active:scale-95`}
               >
                 {item.name}
               </Link>
             )
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center text-brand-text-muted hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all p-2 rounded-full hover:bg-brand-text/5"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center text-brand-text-muted hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all"
            aria-label={`View shopping cart, ${cartCount} items`}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
          
          <Link 
            to={user ? "/profile" : "/login"}
            className={`hidden md:flex items-center hover:scale-110 active:scale-95 transition-all ${
              user ? "text-brand-yellow" : "text-brand-text-muted hover:text-brand-yellow"
            }`}
            aria-label={user ? "View your profile" : "Login to your account"}
          >
            <User className="w-5 h-5" />
          </Link>
          
          <Link 
            to="/contact" 
            className="hidden sm:inline-flex bg-brand-yellow text-black px-5 py-2.5 font-bold uppercase tracking-wider text-[11px] hover:brightness-110 shadow-brand-shadow active:scale-95 transition-all cursor-pointer"
          >
            Get Quote
          </Link>
          
          <button 
            className="lg:hidden text-brand-text-muted hover:text-brand-yellow active:scale-95 transition-all cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-bg/95 z-40 backdrop-blur-sm lg:hidden h-screen"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-brand-surface border-l border-brand-border z-50 lg:hidden flex flex-col p-8 pt-24"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all group ${
                        isActive ? 'bg-brand-yellow text-black' : 'text-brand-text hover:bg-white/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-sans font-black uppercase text-sm tracking-widest">{item.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-black' : 'text-brand-text-muted group-hover:translate-x-1 transition-transform'}`} />
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-auto space-y-4 pt-8 border-t border-brand-border">
                <Link 
                  to={user ? "/profile" : "/login"}
                  className="flex items-center gap-3 p-4 text-brand-text hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5 text-brand-blue" />
                  <span className="font-sans font-black uppercase text-xs tracking-widest">{user ? 'My Profile' : 'Login / Register'}</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full bg-brand-yellow text-black py-4 rounded-lg font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-yellow/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Quote
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

