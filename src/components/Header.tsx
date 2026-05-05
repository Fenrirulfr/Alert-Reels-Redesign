import React from 'react';
import { ShoppingCart, User, Menu, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export function Header() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Distributors', path: '/distributors' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Brands', path: '/brands' },
    { name: 'Resources', path: '/resources' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B0C10] border-b border-white/10 h-20 transition-none">
      <div className="flex justify-between items-center h-full px-4 sm:px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="active:scale-95 hover:opacity-80 transition-all inline-block transform origin-left">
            <img 
              src="https://alertreels.com/wp-content/uploads/Alert_logo.png" 
              alt="Alert Logo" 
              className="h-10 w-auto object-contain" 
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
                 className={`${isActive ? 'text-brand-yellow border-b-2 border-brand-yellow pb-1' : 'text-white/60 hover:text-brand-yellow pb-1 border-b-2 border-transparent'} font-medium transition-all duration-200 uppercase tracking-widest text-[11px] active:scale-95`}
               >
                 {item.name}
               </Link>
             )
          })}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center text-white/60 hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all p-2 rounded-full hover:bg-white/5"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="hidden lg:flex items-center text-white/60 hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="hidden lg:flex items-center text-white/60 hover:text-brand-yellow hover:scale-110 active:scale-95 transition-all">
            <User className="w-5 h-5" />
          </button>
          <Link to="/contact" className="bg-brand-yellow text-black px-5 py-2.5 font-bold uppercase tracking-wider text-[11px] hover:brightness-110 shadow-brand-shadow active:scale-95 transition-all hidden sm:block cursor-pointer">
            Request Quote
          </Link>
          
          <button className="md:hidden text-white/60 hover:text-brand-yellow active:scale-95 transition-all cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
