import React from 'react';
import { ShoppingCart, User, Menu, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { useCart } from './CartContext';
import { useAuth } from '../lib/AuthContext';

export function Header() {
  const location = useLocation();
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

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B0C10]/80 dark:bg-[#0B0C10]/80 light:bg-white/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-black/5 h-20 transition-all duration-300">
      <div className="flex justify-between items-center h-full px-4 sm:px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="active:scale-95 hover:opacity-80 transition-all inline-block transform origin-left">
            <img 
              src="https://alertreels.com/wp-content/uploads/Alert_logo.png" 
              alt="Alert Logo" 
              className="h-10 w-auto object-contain dark:invert-0 light:brightness-0" 
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
             const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
             return (
               <Link 
                 key={item.name}
                 to={item.path} 
                 className={`${isActive ? 'text-brand-yellow border-b-2 border-brand-yellow pb-1' : 'text-white/60 dark:text-white/60 light:text-[#333333]/60 hover:text-brand-yellow pb-1 border-b-2 border-transparent'} font-medium transition-all duration-200 uppercase tracking-widest text-[11px] active:scale-95`}
               >
                 {item.name}
               </Link>
             )
          })}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center text-white/60 dark:text-white/60 light:text-[#333333]/60 hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-[#333333]" />}
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center text-white/60 dark:text-white/60 light:text-[#333333]/60 hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all"
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
            className={`hidden lg:flex items-center hover:scale-110 active:scale-95 transition-all ${
              user ? "text-brand-yellow" : "text-white/60 hover:text-brand-yellow dark:text-white/60 light:text-[#333333]/60"
            }`}
          >
            <User className="w-5 h-5" />
          </Link>
          <Link to="/contact" className="bg-brand-yellow text-black px-5 py-2.5 font-bold uppercase tracking-wider text-[11px] hover:brightness-110 shadow-brand-shadow active:scale-95 transition-all hidden sm:block cursor-pointer">
            Request Quote
          </Link>
          
          <button className="md:hidden text-white/60 dark:text-white/60 light:text-[#333333]/60 hover:text-brand-yellow active:scale-95 transition-all cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
