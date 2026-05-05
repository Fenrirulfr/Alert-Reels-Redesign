import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20 font-sans bg-brand-surface text-brand-text overflow-x-hidden relative">
      {/* Success State Popup Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-surface border border-brand-border p-8 sm:p-12 rounded-xl shadow-brand-shadow max-w-md w-full text-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-8 shadow-brand-shadow">
                <Check className="text-black w-10 h-10 sm:w-12 sm:h-12" strokeWidth={3} />
              </div>
              <h2 id="success-title" className="text-2xl sm:text-3xl font-bold text-brand-text mb-4 uppercase tracking-tighter">Transmission Successful</h2>
              <p className="text-brand-text-muted mb-8 text-sm sm:text-base leading-relaxed">Our industrial response team has received your communication. Expect a technical consultation within 4 business hours.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full py-4 bg-brand-surface text-brand-text font-bold uppercase tracking-widest border border-brand-border hover:bg-brand-surface/80 transition-colors cursor-pointer rounded-lg active:scale-95"
              >
                Dismiss Message
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Side: Modern Contact Form */}
        <section className="bg-brand-bg p-6 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow to-[#FF8C00]"></div>
          <div className="max-w-xl mx-auto w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="font-bold text-[10px] text-brand-blue mb-4 block uppercase tracking-[0.2em]">Contact Protocol</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-text uppercase mb-6 leading-none tracking-tight">Engineering Support</h1>
              <p className="text-brand-text-muted text-base sm:text-lg max-w-md leading-relaxed">Connect with our technical specialists for system configurations, custom cable reel solutions, or distribution inquiries.</p>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit} 
              className="space-y-6 sm:space-y-8"
              aria-label="Technical Support Request Form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="relative group">
                  <input 
                    className="w-full bg-brand-surface border border-brand-border px-4 focus:ring-1 focus:ring-brand-orange border-brand-border focus:border-brand-orange text-brand-text py-4 transition-all outline-none peer placeholder-transparent rounded-lg" 
                    id="full_name" 
                    name="full_name"
                    placeholder="Full Name" 
                    required 
                    type="text"
                  />
                  <label 
                    className="absolute left-2 -top-2.5 bg-brand-bg px-2 text-brand-text-muted font-bold text-xs uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-brand-text-muted peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-brand-bg peer-focus:text-brand-orange pointer-events-none origin-left" 
                    htmlFor="full_name"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    className="w-full bg-brand-surface border border-brand-border px-4 focus:ring-1 focus:ring-brand-orange border-brand-border focus:border-brand-orange text-brand-text py-4 transition-all outline-none peer placeholder-transparent rounded-lg" 
                    id="email_address" 
                    name="email_address"
                    placeholder="Work Email" 
                    required 
                    type="email"
                  />
                  <label 
                    className="absolute left-2 -top-2.5 bg-brand-bg px-2 text-brand-text-muted font-bold text-xs uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-brand-text-muted peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-brand-bg peer-focus:text-brand-orange pointer-events-none origin-left" 
                    htmlFor="email_address"
                  >
                    Work Email
                  </label>
                </div>
              </div>
              
              <div className="relative group">
                <select 
                  className="w-full bg-brand-surface border border-brand-border px-4 focus:ring-1 focus:ring-brand-orange border-brand-border focus:border-brand-orange text-brand-text py-4 transition-all outline-none peer appearance-none cursor-pointer rounded-lg bg-no-repeat" 
                  id="subject" 
                  name="subject"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select Inquiry Type</option>
                  <option value="technical">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="distribution">Distributor Relations</option>
                  <option value="custom">Custom Solutions</option>
                </select>
                <label 
                  className="absolute left-2 -top-2.5 bg-brand-bg px-2 text-brand-text-muted font-bold text-xs uppercase transition-all pointer-events-none origin-left" 
                  htmlFor="subject"
                >
                  Inquiry Type
                </label>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-muted w-5 h-5 pointer-events-none" />
              </div>

              <div className="relative group">
                <textarea 
                  className="w-full bg-brand-surface border border-brand-border px-4 focus:ring-1 focus:ring-brand-orange border-brand-border focus:border-brand-orange text-brand-text py-4 transition-all outline-none peer placeholder-transparent resize-none rounded-lg" 
                  id="message" 
                  name="message"
                  placeholder="Transmission Details" 
                  required 
                  rows={4}
                ></textarea>
                <label 
                  className="absolute left-2 -top-2.5 bg-brand-bg px-2 text-brand-text-muted font-bold text-xs uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-brand-text-muted peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-brand-bg peer-focus:text-brand-orange pointer-events-none origin-left" 
                  htmlFor="message"
                >
                  Transmission Details
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden bg-brand-yellow text-black py-5 font-bold uppercase tracking-widest transition-all hover:brightness-110 shadow-brand-shadow cursor-pointer rounded-lg" 
                type="submit"
                aria-label="Send your message to technical support"
              >
                <span className="relative z-10 text-sm">Send Message</span>
              </motion.button>
            </motion.form>
          </div>
        </section>

        {/* Right Side: Embedded Map & Details */}
        <section className="relative min-h-[500px] bg-brand-surface flex flex-col">
          <div className="h-1/3 md:h-2/5 w-full relative overflow-hidden grayscale contrast-125 brightness-75 opacity-60">
            <img 
              alt="Industrial manufacturing district map at dusk" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKIvszE88Sxyet7pnzHU6uW_1Yp3MzFX1vM220UCR4f8koJ-MLWPPUfygTgWv0JmJy-0hLDW5YqC9xFEIVnJ-us_zzWpQQgfMIGGS_ZHXJYrYCYo-rDxiZ0m_QJsJqM4UM2ctet74XdNIy78brynVMwsk7qcWqaUFA_XoVfCbA1sNnCKAekn4DsRHCE8ls36jOkBNNndZDsLo3K_ksGNCgm7guDYrk8c_5lvq08Eo9v2LWKqHa4zxdygeELh3Zs0viyv2wLc0gNU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
          </div>
          
          <div className="flex-1 p-6 sm:p-12 lg:p-16 flex flex-col justify-center -mt-12 sm:-mt-24 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-2xl mx-auto w-full">
              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-brand-surface rounded-xl p-6 sm:p-8 border border-brand-border backdrop-blur-lg group hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <Phone className="text-brand-orange w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[10px] text-brand-text-muted uppercase tracking-widest">Direct Line</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-2 tracking-tight">+1 (800) 555-REEL</h3>
                <p className="font-bold text-[10px] text-brand-blue uppercase tracking-widest">Available 24/7 Support</p>
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-brand-surface rounded-xl p-6 sm:p-8 border border-brand-border backdrop-blur-lg group hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <Mail className="text-brand-orange w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-[10px] text-brand-text-muted uppercase tracking-widest">System Inquiry</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-text mb-2 tracking-tight truncate">support@alertreels.com</h3>
                <p className="font-bold text-[10px] text-brand-blue uppercase tracking-widest">Encrypted Channel</p>
              </motion.div>

              {/* Location */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="sm:col-span-2 bg-brand-surface rounded-xl p-6 sm:p-8 border border-brand-border backdrop-blur-lg group hover:border-brand-orange/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 bg-brand-surface border border-brand-border rounded-lg group-hover:bg-brand-surface rounded-lg transition-colors">
                    <MapPin className="text-brand-yellow w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="font-bold text-[10px] text-brand-text-muted uppercase tracking-widest block mb-2">Global Headquarters</span>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-text tracking-tight">825 Industrial Parkway</h3>
                    <p className="text-brand-text-muted text-xs sm:text-sm mt-1">Chicago, IL 60601, United States</p>
                  </div>
                </div>
                <button className="px-6 sm:px-8 py-3 bg-transparent border border-brand-border text-brand-text font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap rounded-lg active:scale-95">
                  Get Directions
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

