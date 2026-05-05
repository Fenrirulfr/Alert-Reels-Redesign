import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Zap, 
  Shield, 
  Settings, 
  Download, 
  CheckCircle2, 
  ShoppingCart,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { PRODUCTS as products } from './Products';

import { useCart } from '../components/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const [selectedLength, setSelectedLength] = useState('50 Feet (Standard)');
  const [selectedMounting, setSelectedMounting] = useState('Wall / Ceiling');
  const { addToCart, setIsCartOpen } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find product by ID or name slug correctly
  const product = products.find(p => p.name.toLowerCase().replace(/ /g, '-') === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg pt-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-4">Product Not Found</h2>
          <Link to="/products" className="text-brand-yellow hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Placeholder gallery images
  const gallery = [
    product.image,
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-12">
          <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-brand-yellow transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-yellow">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-square bg-brand-surface rounded-xl overflow-hidden border border-brand-border relative group"
            >
              <img 
                src={gallery[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6">
                <span className="bg-brand-yellow text-black text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-tighter shadow-xl">
                  {product.tag}
                </span>
              </div>
            </motion.div>

            <div className="flex gap-4">
              {gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-brand-yellow shadow-lg shadow-brand-yellow/10' : 'border-brand-border opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-green-500 font-bold text-[10px] uppercase tracking-widest mb-4">
                <CheckCircle2 className="w-3 h-3" />
                In Stock & Ready to Ship
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-brand-text-muted text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-baseline gap-4 mb-10 pb-8 border-b border-brand-border">
              <span className="text-4xl font-bold text-brand-blue">{product.price}</span>
              <span className="text-brand-text-muted line-through text-sm">$1,499.00</span>
              <span className="ml-auto bg-green-500/10 text-green-500 text-[10px] font-black px-2 py-1 rounded">SAVE 15%</span>
            </div>

            <div className="space-y-4 mb-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="cord-length" className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted px-1">Cord Length</label>
                  <select 
                    id="cord-length"
                    value={selectedLength}
                    onChange={(e) => setSelectedLength(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border text-brand-text rounded-lg px-4 py-3 text-xs font-bold focus:outline-none focus:border-brand-yellow cursor-pointer appearance-none"
                  >
                    <option>50 Feet (Standard)</option>
                    <option>100 Feet (+ $250.00)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="mounting-type" className="text-[10px] font-black uppercase tracking-widest text-brand-text-muted px-1">Mounting</label>
                  <select 
                    id="mounting-type"
                    value={selectedMounting}
                    onChange={(e) => setSelectedMounting(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border text-brand-text rounded-lg px-4 py-3 text-xs font-bold focus:outline-none focus:border-brand-yellow cursor-pointer appearance-none"
                  >
                    <option>Wall / Ceiling</option>
                    <option>I-Beam Clamp</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                    selectedLength,
                    selectedMounting
                  })}
                  className="w-full bg-brand-yellow text-black font-black uppercase tracking-widest text-xs py-5 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-yellow/10"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Order
                </button>
                <button 
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                      selectedLength,
                      selectedMounting
                    });
                    setIsCartOpen(true);
                  }}
                  className="w-full bg-brand-surface border border-brand-border text-brand-text font-black uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-brand-bg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  aria-label={`Buy ${product.name} now`}
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Technical Specs Accordion-style */}
            <div className="border border-brand-border rounded-xl overflow-hidden bg-brand-surface">
              <button 
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                aria-expanded={isSpecsOpen}
                aria-controls="tech-specs-panel"
                className="w-full flex items-center justify-between p-5 text-left hover:bg-brand-bg/50 transition-colors"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-text">Technical Specifications</span>
                <ChevronDown className={`w-4 h-4 text-brand-text-muted transition-transform duration-300 ${isSpecsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isSpecsOpen && (
                  <motion.div 
                    id="tech-specs-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 space-y-4 text-xs">
                      <div className="flex justify-between border-b border-brand-border/50 pb-3">
                        <span className="text-brand-text-muted">Housing Material</span>
                        <span className="text-brand-text font-bold uppercase tracking-tight">Reinforced Alloy Steel</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-border/50 pb-3">
                        <span className="text-brand-text-muted">Voltage Rating</span>
                        <span className="text-brand-text font-bold uppercase tracking-tight">125V / 250V AC</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-border/50 pb-3">
                        <span className="text-brand-text-muted">Max Amperage</span>
                        <span className="text-brand-text font-bold uppercase tracking-tight">20 Amps</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-text-muted">Enclosure Class</span>
                        <span className="text-brand-text font-bold uppercase tracking-tight">IP65 Industrial Grade</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
