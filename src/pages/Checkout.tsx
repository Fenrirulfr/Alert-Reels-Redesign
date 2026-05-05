import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  CreditCard, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Shield, 
  Lock, 
  AlertCircle,
  ChevronRight,
  Package,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../components/CartContext';

type Step = 'shipping' | 'payment' | 'review';

export function Checkout() {
  const [step, setStep] = useState<Step>('shipping');
  const { cart, cartTotal: total } = useCart();
  const parsePrice = (price: string) => parseFloat(price.replace('$', '').replace(',', ''));

  const steps = [
    { id: 'shipping', label: 'Shipping', icon: Truck },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'review', label: 'Review', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-[#131313] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Checkout Journey */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Industrial Stepper */}
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 mb-8 relative overflow-hidden">
              <div className="flex items-center justify-between relative px-4 sm:px-12 z-10">
                {/* Connecting Line Backdrop */}
                <div className="absolute top-5 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
                
                {/* Dynamic Progress Line */}
                <motion.div 
                  className="absolute top-5 left-0 h-[1px] bg-brand-yellow -translate-y-1/2 z-0"
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: step === 'shipping' ? '0%' : step === 'payment' ? '50%' : '100%' 
                  }}
                />

                {steps.map((s, idx) => {
                  const Icon = s.icon;
                  const isActive = s.id === step;
                  const isCompleted = steps.findIndex(x => x.id === step) > idx;

                  return (
                    <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-[#131313] shadow-lg transition-all duration-500 ${
                          isActive || isCompleted 
                            ? 'bg-brand-yellow text-black scale-110 shadow-brand-yellow/20' 
                            : 'bg-white/5 text-white/40'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${
                        isActive || isCompleted ? 'text-brand-yellow' : 'text-white/40'
                      }`}>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Section */}
            <AnimatePresence mode="wait">
              {step === 'shipping' && (
                <motion.section 
                  key="shipping-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                >
                  <div className="bg-white/[0.05] px-8 py-5 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-brand-yellow" />
                      <h2 className="text-xl font-black text-white uppercase tracking-tight">Step 1: Shipping & Delivery</h2>
                    </div>
                    <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">Required Fieldset</span>
                  </div>

                  <div className="p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="site-name" className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Site Name / Facility ID</label>
                        <input 
                          id="site-name"
                          className="w-full bg-black/40 border border-white/10 text-white rounded-lg px-4 py-4 focus:ring-1 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-white/10" 
                          placeholder="e.g. North Basin Facility-04" 
                          type="text"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="address" className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Full Street Address</label>
                        <input 
                          id="address"
                          className="w-full bg-black/40 border border-white/10 text-white rounded-lg px-4 py-4 focus:ring-1 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-white/10" 
                          placeholder="422 Industrial Way, Port of Houston" 
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="gate-code" className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Gate Code / Loading Dock</label>
                        <input 
                          id="gate-code"
                          className="w-full bg-black/40 border border-white/10 text-white rounded-lg px-4 py-4 focus:ring-1 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-white/10" 
                          placeholder="Dock 7-B" 
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="zip" className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Zip / Postal Code</label>
                        <input 
                          id="zip"
                          className="w-full bg-black/40 border border-white/10 text-white rounded-lg px-4 py-4 focus:ring-1 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-white/10" 
                          placeholder="77001" 
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 space-y-6">
                      <h3 className="text-xs font-black text-brand-blue uppercase flex items-center gap-2 tracking-widest">
                        <Phone className="w-4 h-4" />
                        Logistics Contact
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="manager" className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">On-Site Manager Name</label>
                          <input 
                            id="manager"
                            className="w-full bg-black/40 border border-white/10 text-white rounded-lg px-4 py-4 focus:ring-1 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-white/10" 
                            placeholder="Sarah Jenkins" 
                            type="text"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">24/7 Logistics Phone</label>
                          <input 
                            id="phone"
                            className="w-full bg-black/40 border border-white/10 text-white rounded-lg px-4 py-4 focus:ring-1 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-white/10" 
                            placeholder="+1 (555) 000-0000" 
                            type="tel"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="relative flex items-center p-5 bg-brand-yellow/5 border border-brand-yellow/20 rounded-xl cursor-pointer group hover:bg-brand-yellow/10 transition-all">
                        <input name="delivery" type="radio" className="w-4 h-4 text-brand-yellow focus:ring-brand-yellow border-white/20 bg-transparent" defaultChecked />
                        <div className="ml-4">
                          <div className="font-black text-white uppercase text-xs tracking-widest">Standard Freight</div>
                          <div className="text-[10px] text-white/40 uppercase font-bold mt-0.5">3-5 Business Days</div>
                        </div>
                        <div className="ml-auto text-brand-yellow font-black text-sm">$125.00</div>
                      </label>
                      <label className="relative flex items-center p-5 bg-white/[0.02] border border-white/10 rounded-xl cursor-pointer group hover:bg-white/5 transition-all">
                        <input name="delivery" type="radio" className="w-4 h-4 text-brand-yellow focus:ring-brand-yellow border-white/20 bg-transparent" />
                        <div className="ml-4">
                          <div className="font-black text-white/60 uppercase text-xs tracking-widest">Express Site-Drop</div>
                          <div className="text-[10px] text-white/40 uppercase font-bold mt-0.5">Next Business Day</div>
                        </div>
                        <div className="ml-auto text-white/60 font-black text-sm">$340.00</div>
                      </label>
                    </div>
                  </div>

                  <div className="px-8 py-5 bg-white/[0.02] border-t border-white/10 flex justify-end">
                    <button 
                      onClick={() => setStep('payment')}
                      className="bg-brand-blue text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all group"
                    >
                      Proceed to Payment
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Collapsed Steps */}
            {step !== 'payment' && (
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 flex items-center justify-between opacity-40">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-white/60" />
                  <h2 className="text-xl font-black text-white/60 uppercase tracking-tight">Step 2: Payment Method</h2>
                </div>
                <Lock className="w-4 h-4 text-white/20" />
              </div>
            )}
            {step !== 'review' && (
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 flex items-center justify-between opacity-40">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/60" />
                  <h2 className="text-xl font-black text-white/60 uppercase tracking-tight">Step 3: Order Review</h2>
                </div>
                <Lock className="w-4 h-4 text-white/20" />
              </div>
            )}
          </div>

          {/* Right Column: Order Summary Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden sticky top-24 shadow-2xl">
              <div className="bg-white/[0.05] px-6 py-5 border-b border-white/10">
                <h2 className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center justify-between">
                  Order Summary
                  <span className="bg-brand-yellow text-black px-2 py-0.5 rounded text-[8px]">{cart.reduce((acc, item) => acc + item.quantity, 0)} ITEMS</span>
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-start gap-4 p-3 bg-white/[0.02] rounded-lg border border-white/5">
                      <div className="w-16 h-16 bg-black/40 rounded-lg flex-shrink-0 flex items-center justify-center border border-white/5 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-black text-xs truncate text-white uppercase tracking-tight">{item.name}</h4>
                        <p className="text-[9px] text-white/40 uppercase font-bold mt-0.5 tracking-widest">{item.category}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] text-white/60 font-medium">Qty: {item.quantity}</span>
                          <span className="text-xs font-black text-white">${(parsePrice(item.price) * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {cart.length === 0 && (
                    <div className="text-center py-8">
                       <Package className="w-8 h-8 text-white/10 mx-auto mb-2" />
                       <p className="text-[10px] font-black uppercase text-white/20 tracking-widest">Your cart is empty</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-lg">
                  <Shield className="w-4 h-4 text-brand-blue" />
                  <span className="text-[9px] text-brand-blue uppercase font-black tracking-widest">Industrial Grade Components Certified</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex justify-between text-xs font-bold text-white/40 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span className="text-white">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-white/40 uppercase tracking-widest">
                    <span>Shipping</span>
                    <span className="text-white">$125.00</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-white/40 uppercase tracking-widest">
                    <span>Tax (8.25%)</span>
                    <span className="text-white">${(total * 0.0825).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-white/10">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-brand-yellow uppercase tracking-[0.2em]">Total Amount</span>
                      <span className="text-[8px] text-white/20 uppercase font-black mt-1">USD / NET-30 Eligible</span>
                    </div>
                    <span className="text-3xl font-black text-white tracking-tighter">${(total + 125 + (total * 0.0825)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <button className="w-full bg-brand-yellow text-black py-5 rounded-lg font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-yellow/10 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                  Place Secure Order
                  <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Lock, label: '256-Bit SSL' },
                { icon: Shield, label: 'PCI DSS' },
                { icon: Phone, label: '24/7 Support' }
              ].map((badge) => (
                <div key={badge.label} className="bg-white/[0.02] p-4 rounded-xl flex flex-col items-center justify-center text-center border border-white/5 group hover:border-white/10 transition-colors">
                  <badge.icon className="w-5 h-5 text-white/20 mb-2 group-hover:text-white/40 transition-colors" />
                  <span className="text-[8px] font-black uppercase text-white/30 tracking-widest">{badge.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
