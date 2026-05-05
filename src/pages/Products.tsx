import React, { useState } from 'react';
import { Shield, Zap, Sun, Settings2, Network, ArrowRight, ChevronLeft, ChevronRight, Search, Check, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCart } from '../components/CartContext';

export const PRODUCTS = [
// ... (omitted for brevity, will target specific location)
  {
    id: 1,
    tag: 'CORD REELS',
    icon: Shield,
    name: 'Titan 500-X',
    description: 'Ultra-durable retractable cord reel with reinforced steel construction.',
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
    description: 'Explosion-proof hazardous location cord reel with static grounding.',
    price: '$1,245.00',
    image: 'https://lh3.googleusercontent.com/d/1SehTmojrGPFblOrC0UKkcNkmn10rF86F',
    category: 'High-Visibility Hazards',
    brand: 'Alert Reels Pro'
  },
  {
    id: 3,
    tag: 'LIGHTING',
    icon: Sun,
    name: 'Lumina Pro 360',
    description: 'High-output 15,000 lumen LED work light with integrated 50ft cable.',
    price: '$689.00',
    image: 'https://lh3.googleusercontent.com/d/1oLclm1VLqXRnkDQFnvcCcCSdGQk7Sn2n',
    category: 'Emergency Lighting',
    brand: 'Alert Reels Pro'
  },
  {
    id: 4,
    tag: 'ENTERPRISE',
    icon: Settings2,
    name: 'Slimline-R',
    description: 'Space-saving low profile reel for cleanroom and laboratory environments.',
    price: '$340.00',
    image: 'https://lh3.googleusercontent.com/d/1q0MNnqUQByV5jLYDaYmF4xzeyJbkn_LL',
    category: 'Industrial Cord Reels',
    brand: 'Alert Reels Pro'
  },
  {
    id: 5,
    tag: 'POWER BLOCKS',
    icon: Zap,
    name: 'QuadForce X',
    description: '4-way GFCI power distribution hub with 12-gauge premium wiring.',
    price: '$215.00',
    image: 'https://lh3.googleusercontent.com/d/1PELIyXujbJOjiX-KSsXQxrnioGf4JzWU',
    category: 'Cable Management',
    brand: 'Alert Reels Pro'
  },
  {
    id: 6,
    tag: 'DIGITAL FIELD',
    icon: Network,
    name: 'DataLink Pro',
    description: 'Ruggedized Cat6 Ethernet deployment reel with military-grade shielding.',
    price: '$795.00',
    image: 'https://lh3.googleusercontent.com/d/11WnnjpBa7cc2bwjn0rwKPnS9FfVV-Biy',
    category: 'Cable Management',
    brand: 'Titan Series'
  }
];

export function Products() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const { addToCart } = useCart();

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-brand-border gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl text-brand-text font-medium tracking-wide mb-2 uppercase">Industrial Products</h1>
          <p className="text-brand-text-muted text-lg">Precision-engineered hardware for high-stakes environments.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <button className="flex items-center gap-2 bg-transparent border border-brand-border text-brand-text px-4 py-2 text-sm hover:border-brand-border transition-colors active:scale-95">
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
              <h3 className="text-brand-text text-base font-medium tracking-widest uppercase">Filters</h3>
              <button onClick={clearAll} className="text-brand-yellow font-bold text-xs hover:underline hover:brightness-110 active:scale-95 transition-all">clear all</button>
            </div>
            
            {/* Category */}
            <div className="mb-8">
              <h4 className="text-brand-text-muted text-sm mb-4 font-bold uppercase tracking-widest">Category</h4>
              <div className="flex flex-col gap-3">
                {CATEGORIES.map(category => {
                  const isSelected = selectedCategories.includes(category);
                  const id = `category-${category.toLowerCase().replace(/ /g, '-')}`;
                  return (
                    <div key={category} className="flex items-center gap-3 group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox"
                          id={id}
                          checked={isSelected}
                          onChange={() => toggleCategory(category)}
                          className="sr-only"
                        />
                        <label 
                          htmlFor={id}
                          className={cn(
                            "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-brand-blue", 
                            isSelected ? "bg-brand-yellow border-brand-yellow" : "border-brand-border group-hover:border-brand-border shadow-sm"
                          )}
                        >
                          {isSelected && (
                            <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                          )}
                        </label>
                      </div>
                      <label 
                        htmlFor={id}
                        className={cn("text-sm transition-colors cursor-pointer font-sans", isSelected ? "text-brand-yellow font-medium group-hover:text-brand-yellow/80" : "text-brand-text-muted group-hover:text-brand-text")}
                      >
                        {category}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="text-brand-text-muted text-sm mb-4 font-bold uppercase tracking-widest">Price Range</h4>
              <div className="px-2">
                <div className="h-[2px] bg-white/20 w-full relative mb-6">
                  <motion.div layout className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-yellow"></motion.div>
                  <button 
                    aria-label="Adjust price range"
                    className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-yellow rounded-full shadow-brand-shadow cursor-grab active:cursor-grabbing focus:ring-2 focus:ring-brand-blue"
                  ></button>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="bg-brand-surface px-3 py-2 text-brand-text text-sm border border-brand-border w-full text-center hover:bg-white/10 transition-colors cursor-pointer font-medium">$100</div>
                <div className="bg-brand-surface px-3 py-2 text-brand-text text-sm border border-brand-border w-full text-center hover:bg-white/10 transition-colors cursor-pointer font-medium">$5,000+</div>
              </div>
            </div>

            {/* Brand */}
            <div>
              <h4 className="text-brand-text-muted text-sm mb-4 font-bold uppercase tracking-widest">Brand</h4>
              <div className="flex flex-col gap-3">
                {BRANDS.map(brand => {
                  const isSelected = selectedBrands.includes(brand);
                  const id = `brand-${brand.toLowerCase().replace(/ /g, '-')}`;
                  return (
                    <div key={brand} className="flex items-center gap-3 group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox"
                          id={id}
                          checked={isSelected}
                          onChange={() => toggleBrand(brand)}
                          className="sr-only"
                        />
                        <label 
                          htmlFor={id}
                          className={cn(
                            "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-brand-blue", 
                            isSelected ? "bg-brand-yellow border-brand-yellow" : "border-brand-border group-hover:border-brand-border shadow-sm"
                          )}
                        >
                          {isSelected && (
                            <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                          )}
                        </label>
                      </div>
                      <label 
                        htmlFor={id}
                        className={cn("text-sm transition-colors cursor-pointer font-sans", isSelected ? "text-brand-yellow font-medium group-hover:text-brand-yellow/80" : "text-brand-text-muted group-hover:text-brand-text")}
                      >
                        {brand}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-4 p-6 bg-white/5 border border-brand-border rounded-lg relative overflow-hidden group hover:border-brand-border transition-all cursor-pointer">
            <div className="absolute right-0 top-0 opacity-[0.03] transform translate-x-4 -translate-y-4 group-hover:opacity-[0.05] transition-all group-hover:rotate-12 duration-500">
               <Settings2 style={{ width: '120px', height: '120px' }} />
            </div>
            <h4 className="text-xl text-brand-text font-medium tracking-tight mb-3">Support</h4>
            <p className="text-brand-text-muted text-sm mb-6 leading-relaxed">
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
                     className="bg-brand-bg group overflow-hidden border border-brand-border hover:border-transparent transition-all relative flex flex-col"
                   >
                     <Link to={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`} className="absolute inset-0 z-20"></Link>
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                     
                     <div className="aspect-[4/3] bg-brand-surface rounded-lg relative overflow-hidden">
                       <img 
                          src={product.image} 
                          alt={product.name} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                        />
                     </div>
                     
                     <div className="p-6 flex flex-col flex-1 relative bg-brand-surface rounded-lg">
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-widest">{product.tag}</span>
                         <Icon className="w-4 h-4 text-brand-blue group-hover:text-brand-yellow transition-colors" />
                       </div>
                       <h4 className="text-xl text-brand-text font-bold tracking-tight mb-3 group-hover:text-brand-yellow transition-colors">{product.name}</h4>
                       <p className="text-brand-text-muted text-sm mb-6 leading-relaxed flex-1">{product.description}</p>
                       
                       <div className="flex items-center justify-between mt-auto">
                         <span className="text-2xl text-brand-blue font-bold">{product.price}</span>
                         <button onClick={(e) => { e.preventDefault(); addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }); }} className="bg-brand-yellow text-black font-black uppercase tracking-widest text-[9px] px-4 py-3 hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center relative z-30 shadow-lg shadow-brand-yellow/10">
                            ADD TO<br/>CART
                          </button>
                       </div>
                     </div>
                   </motion.div>
                 )
              })
            ) : (
              <div className="col-span-full py-20 text-center text-brand-text-muted space-y-4">
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
