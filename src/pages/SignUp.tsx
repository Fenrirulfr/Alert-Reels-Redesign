import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Building2, BadgeCheck, Shield, AlertCircle, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

import { useAuth } from '../lib/AuthContext';

export function SignUp() {
  const { loginAsPlaceholder } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder delay
    setTimeout(() => {
      loginAsPlaceholder();
      navigate('/profile');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-[#131313] selection:bg-brand-yellow selection:text-black">
      {/* Left Side: Visual Anchor */}
      <section className="hidden md:flex md:w-1/2 relative bg-black overflow-hidden pt-20 pb-12 px-12">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Alert Reels Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/d/1NoJ8-y2OZvJlF-za1kQ127YG71gnXX4g"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#131313]"></div>
        </div>
        
        <div className="relative z-10 p-12 flex flex-col justify-between h-full w-full">
          <div></div>

          <div className="max-w-md">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter"
            >
              BUILT FOR THE EXTREME.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              Access the next generation of industrial alert management. Designed for distributors and professionals who demand unyielding reliability.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 border-l-2 border-brand-yellow pl-6 py-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-yellow">Industrial Precision</span>
            <div className="w-1 h-1 rounded-full bg-white/20"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Verified Standard 2024</span>
          </motion.div>
        </div>
      </section>

      {/* Right Side: Registration Form */}
      <section className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white dark:bg-[#131313] pt-28">
        <div className="w-full max-w-md space-y-10">
          <header className="space-y-2">
            <h2 className="text-4xl font-black text-[#333333] dark:text-white tracking-tight">Create Account</h2>
            <p className="text-[#333333]/40 dark:text-white/40 text-sm font-medium">Enter your professional details to get started.</p>
          </header>

          <form className="space-y-6" onSubmit={handleSignUp}>
            <div className="grid grid-cols-1 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase text-[#333333]/40 dark:text-white/40 block font-black tracking-widest ml-1" htmlFor="full-name">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#333333]/20 dark:text-white/20 group-focus-within:text-brand-orange transition-colors w-5 h-5" />
                  <input 
                    type="text" 
                    id="full-name" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#333333]/[0.03] dark:bg-white/[0.03] border border-[#333333]/10 dark:border-white/10 rounded-lg py-4 pl-12 pr-4 text-[#333333] dark:text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase text-[#333333]/40 dark:text-white/40 block font-black tracking-widest ml-1" htmlFor="email">Work Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#333333]/20 dark:text-white/20 group-focus-within:text-brand-orange transition-colors w-5 h-5" />
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-[#333333]/[0.03] dark:bg-white/[0.03] border border-[#333333]/10 dark:border-white/10 rounded-lg py-4 pl-12 pr-4 text-[#333333] dark:text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase text-[#333333]/40 dark:text-white/40 block font-black tracking-widest ml-1" htmlFor="company">Company Name</label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#333333]/20 dark:text-white/20 group-focus-within:text-brand-orange transition-colors w-5 h-5" />
                  <input 
                    type="text" 
                    id="company" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Industrial Solutions Inc."
                    required
                    className="w-full bg-[#333333]/[0.03] dark:bg-white/[0.03] border border-[#333333]/10 dark:border-white/10 rounded-lg py-4 pl-12 pr-4 text-[#333333] dark:text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase text-[#333333]/40 dark:text-white/40 block font-black tracking-widest ml-1" htmlFor="password">Create Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#333333]/20 dark:text-white/20 group-focus-within:text-brand-orange transition-colors w-5 h-5" />
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="w-full bg-[#333333]/[0.03] dark:bg-white/[0.03] border border-[#333333]/10 dark:border-white/10 rounded-lg py-4 pl-12 pr-4 text-[#333333] dark:text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none"
                  />
                </div>
              </div>

              {error && (
                <div role="alert" className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <div className="pt-4 space-y-4">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-brand-yellow text-black font-black uppercase tracking-widest text-sm py-5 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(252,227,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    Creating Account <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-[#333333]/10 dark:border-white/10"></div>
                <span className="flex-shrink mx-4 text-[#333333]/20 dark:text-white/20 font-black tracking-widest text-[10px]">OR</span>
                <div className="flex-grow border-t border-[#333333]/10 dark:border-white/10"></div>
              </div>

              <button 
                type="button"
                className="w-full border-2 border-brand-blue text-brand-blue font-black uppercase tracking-widest text-[10px] py-4 rounded-lg hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <BadgeCheck className="w-5 h-5" />
                Register as Distributor
              </button>
            </div>
          </form>

          <footer className="text-center pt-8">
            <p className="text-sm text-[#333333]/40 dark:text-white/40 font-medium">
              Already have an account? 
              <Link to="/login" className="text-brand-yellow hover:underline font-black uppercase tracking-widest ml-1.5 transition-all">Log In</Link>
            </p>
          </footer>
        </div>
      </section>

      {/* Floating Footer Credit */}
      <div className="fixed bottom-6 right-6 hidden md:block">
        <p className="text-[10px] text-white/10 font-black uppercase tracking-[0.2em]">© 2024 Alert Reels Industrial. All rights reserved.</p>
      </div>
    </div>
  );
}
