import React, { useState } from 'react';
import { Shield, Zap, Sun, Settings2, Network, ArrowRight, ChevronLeft, ChevronRight, Search, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const PRODUCTS = [
  {
    id: 1,
    tag: 'CORD REELS',
    icon: Shield,
    name: 'Titan 500-X',
    description: 'Ultra-durable retractable cord reel with reinforced steel...',
    price: '$499.00',
    image: 'https://lh3.googleusercontent.com/d/1-xIL-VmJ0grJtwW4kbN7NI1bUAkcAlJR',
    category: 'Industrial Cord Reels',
    brand: 'Titan Series'
  },
  {
    id: 2,
    tag: 'HAZARD SERIES',
    icon: Zap,
    name: 'Sentinel V3',
    description: 'Explosion-proof hazardous location cord reel with static...',
    price: '$1,245.00',
    image: 'https://images.unsplash.com/photo-1563294813-fdf8a0c6480c?auto=format&fit=crop&q=80&w=600',
    category: 'High-Visibility Hazards',
    brand: 'Alert Reels Pro'
  },
  {
    id: 3,
    tag: 'LIGHTING',
    icon: Sun,
    name: 'Lumina Pro 360',
    description: 'High-output 15,000 lumen LED work light with integrated 50ft...',
    price: '$689.00',
    image: 'https://images.unsplash.com/photo-1549488344-c189b8823d70?auto=format&fit=crop&q=80&w=600',
    category: 'Emergency Lighting',
    brand: 'Alert Reels Pro'
  },
  {
    id: 4,
    tag: 'ENTERPRISE',
    icon: Settings2,
    name: 'Slimline-R',
    description: 'Space-saving low profile reel for cleanroom and laboratory...',
    price: '$340.00',
    image: 'https://images.unsplash.com/photo-1623912187654-e653da9aa53a?auto=format&fit=crop&q=80&w=600',
    category: 'Industrial Cord Reels',
    brand: 'Alert Reels Pro'
  },
  {
    id: 5,
    tag: 'POWER BLOCKS',
    icon: Zap,
    name: 'QuadForce X',
    description: '4-way GFCI power distribution hub with 12-gauge premium...',
    price: '$215.00',
    image: 'https://lh3.googleusercontent.com/d/1hcU2xy1iVm6H_2X33QODlfjv-Th16ksS',
    category: 'Cable Management',
    brand: 'Alert Reels Pro'
  },
  {
    id: 6,
    tag: 'DIGITAL FIELD',
    icon: Network,
    name: 'DataLink Pro',
    description: 'Ruggedized Cat6 Ethernet deployment reel with military-...',
    price: '$795.00',
    image: 'https://images.unsplash.com/photo-1616422285149-ad7bd3d76b7f?auto=format&fit=crop&q=80&w=600',
    category: 'Cable Management',
    brand: 'Titan Series'
  }
];

export function Products() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = PRODUCTS.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return categoryMatch && brandMatch;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  const CATEGORIES = [
    'Industrial Cord Reels',
    'High-Visibility Hazards',
    'Emergency Lighting',
    'Cable Management'
  ];

  const BRANDS = [
    'Alert Reels Pro',
    'Titan Series'
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-8 font-sans">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-white/10 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl text-white font-medium tracking-wide mb-2 uppercase">Industrial Products</h1>
          <p className="text-white/70 text-lg">Precision-engineered hardware for high-stakes environments.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <button className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-4 py-2 text-sm hover:border-white/40 transition-colors active:scale-95">
            SORT BY: POPULARITY
            <ChevronRight className="w-4 h-4 ml-2" style={{ transform: 'rotate(90deg)' }} />
          </button>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 shrink-0 flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-base font-medium tracking-widest uppercase">Filters</h3>
              <button onClick={clearAll} className="text-brand-yellow font-bold text-xs hover:underline hover:brightness-110 active:scale-95 transition-all">clear all</button>
            </div>
            
            {/* Category */}
            <div className="mb-8">
              <h4 className="text-white/60 text-sm mb-4">CATEGORY</h4>
              <div className="flex flex-col gap-3">
                {CATEGORIES.map(category => {
                  const isSelected = selectedCategories.includes(category);
                  return (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleCategory(category); }}>
                      <div className={cn("w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors", isSelected ? "bg-brand-yellow border-brand-yellow" : "border-white/20 group-hover:border-white/50")}>
                        {isSelected && (
                          <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                        )}
                      </div>
                      <span className={cn("text-sm transition-colors", isSelected ? "text-brand-yellow font-medium group-hover:text-brand-yellow/80" : "text-white/80 group-hover:text-white")}>{category}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="text-white/60 text-sm mb-4">PRICE RANGE</h4>
              <div className="px-2">
                <div className="h-[2px] bg-white/20 w-full relative mb-6">
                  <motion.div layout className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-yellow"></motion.div>
                  <motion.div layout className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-yellow rounded-full shadow-[0_0_10px_rgba(252,227,0,0.5)] cursor-grab active:cursor-grabbing"></motion.div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="bg-white/5 px-3 py-2 text-white text-sm border border-white/10 w-full text-center hover:bg-white/10 transition-colors cursor-pointer">$100</div>
                <div className="bg-white/5 px-3 py-2 text-white text-sm border border-white/10 w-full text-center hover:bg-white/10 transition-colors cursor-pointer">$5,000+</div>
              </div>
            </div>

            {/* Brand */}
            <div>
              <h4 className="text-white/60 text-sm mb-4">BRAND</h4>
              <div className="flex flex-col gap-3">
                {BRANDS.map(brand => {
                  const isSelected = selectedBrands.includes(brand);
                  return (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleBrand(brand); }}>
                      <div className={cn("w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors", isSelected ? "bg-brand-yellow border-brand-yellow" : "border-white/20 group-hover:border-white/50")}>
                        {isSelected && (
                          <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                        )}
                      </div>
                      <span className={cn("text-sm transition-colors", isSelected ? "text-brand-yellow font-medium group-hover:text-brand-yellow/80" : "text-white/80 group-hover:text-white")}>{brand}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-4 p-6 bg-white/5 border border-white/10 rounded-sm relative overflow-hidden group hover:border-white/20 transition-all cursor-pointer">
            <div className="absolute right-0 top-0 opacity-[0.03] transform translate-x-4 -translate-y-4 group-hover:opacity-[0.05] transition-all group-hover:rotate-12 duration-500">
               <Settings2 style={{ width: '120px', height: '120px' }} />
            </div>
            <h4 className="text-xl text-white font-medium tracking-tight mb-3">Support</h4>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Need help configuring a custom industrial reel solution?
            </p>
            <button className="text-brand-yellow font-bold text-xs uppercase tracking-widest flex items-center group-hover:brightness-110 active:scale-95 transition-all">
              SPEAK WITH AN EXPERT <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => {
                 const Icon = product.icon;
                 return (
                   <motion.div 
                     key={product.id} 
                     layout
                     variants={{
                       hidden: { opacity: 0, y: 20 },
                       visible: { opacity: 1, y: 0 }
                     }}
                     whileHover={{ y: -4 }}
                     className="bg-[#111111] group overflow-hidden border border-white/5 hover:border-transparent transition-all relative flex flex-col cursor-pointer"
                   >
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                     
                     <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                       <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                     </div>
                     
                     <div className="p-6 flex flex-col flex-1 relative bg-gradient-to-t from-[#111111] to-[#111111]/90">
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-widest">{product.tag}</span>
                         <Icon className="w-4 h-4 text-white/40 group-hover:text-brand-yellow transition-colors" />
                       </div>
                       <h4 className="text-xl text-white font-bold tracking-tight mb-3 group-hover:text-brand-yellow transition-colors">{product.name}</h4>
                       <p className="text-white/60 text-sm mb-6 leading-relaxed flex-1">{product.description}</p>
                       
                       <div className="flex items-center justify-between mt-auto">
                         <span className="text-2xl text-white font-medium">{product.price}</span>
                         <button className="bg-brand-yellow text-black font-bold uppercase tracking-widest text-xs px-4 py-3 hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center">
                           ADD TO<br/>QUOTE
                         </button>
                       </div>
                     </div>
                   </motion.div>
                 )
              })
            ) : (
              <div className="col-span-full py-20 text-center text-white/50 space-y-4">
                <p>No products found matching your filters.</p>
                <button 
                  onClick={clearAll} 
                  className="text-brand-yellow font-bold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
