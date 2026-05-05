import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#131313] selection:bg-brand-yellow selection:text-black">
      {/* Left Side: Visual Anchor */}
      <section className="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Alert Reels Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/d/1NoJ8-y2OZvJlF-za1kQ127YG71gnXX4g"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#131313] via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="relative z-10 p-12 flex flex-col justify-between h-full w-full">
          <div></div>

          <div className="max-w-md">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-black text-white mb-6 leading-tight"
            >
              Precision Monitoring for Extreme Environments.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              Enterprise-grade safety intelligence and real-time industrial analytics secured by end-to-end encryption.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-8"
            >
              <div className="border-l-2 border-brand-yellow pl-4 py-1">
                <span className="text-[10px] uppercase text-white/40 block font-black tracking-widest">System Status</span>
                <span className="text-xl text-white font-black">OPERATIONAL</span>
              </div>
              <div className="border-l-2 border-brand-blue pl-4 py-1">
                <span className="text-[10px] uppercase text-white/40 block font-black tracking-widest">Active Reels</span>
                <span className="text-xl text-white font-black">1,248</span>
              </div>
            </motion.div>
          </div>

          <div className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px]">
            Industrial Technology • Precision Engineering • Safety Verified
          </div>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-12 bg-[#131313]">
        <div className="w-full max-w-[440px] space-y-12">
          <header>
            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Sign In</h2>
            <p className="text-white/40 text-sm">Access your industrial monitoring dashboard.</p>
          </header>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase text-white/40 block font-black tracking-widest ml-1" htmlFor="email">Work Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-yellow transition-colors w-5 h-5" />
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@company.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-end ml-1">
                  <label className="text-[10px] uppercase text-white/40 block font-black tracking-widest" htmlFor="password">Password</label>
                  <a href="#" className="text-[10px] text-brand-blue hover:text-white transition-colors uppercase font-black tracking-widest">Forgot Password?</a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-yellow transition-colors w-5 h-5" />
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="••••••••"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:ring-1 focus:ring-brand-yellow focus:border-brand-yellow transition-all outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 bg-white/5 text-brand-yellow focus:ring-brand-yellow cursor-pointer" />
                <label htmlFor="remember" className="text-xs text-white/60 cursor-pointer hover:text-white transition-colors">Keep me logged in</label>
              </div>
            </div>

            <button className="w-full bg-brand-yellow text-black font-black uppercase tracking-widest text-xs py-5 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-yellow/10">
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <footer className="text-center pt-8 border-t border-white/5">
            <p className="text-sm text-white/40">
              Don't have an account? <Link to="/signup" className="text-brand-yellow hover:underline font-black uppercase tracking-widest ml-1">Sign Up</Link>
            </p>
          </footer>

          <div className="flex justify-center gap-6 mt-12 opacity-30">
            <a href="#" className="text-[10px] text-white font-black uppercase tracking-widest hover:opacity-100 transition-opacity">Support</a>
            <a href="#" className="text-[10px] text-white font-black uppercase tracking-widest hover:opacity-100 transition-opacity">Privacy</a>
            <span className="text-[10px] text-white font-black uppercase tracking-widest">v2.4.0</span>
          </div>
        </div>
      </section>
    </div>
  );
}
