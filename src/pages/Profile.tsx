import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Shield, 
  Building, 
  Edit3, 
  Truck, 
  Box, 
  Headphones, 
  CheckCircle, 
  HardHat, 
  Download, 
  RotateCcw,
  LifeBuoy,
  BarChart3,
  Factory,
  FileText,
  Building2,
  Wrench,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const { user, userProfile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6">
        <div className="text-center">
          <Shield className="w-16 h-16 text-brand-yellow mx-auto mb-4" />
          <h2 className="text-2xl font-black text-brand-text uppercase tracking-tight mb-2">Access Restricted</h2>
          <p className="text-brand-text-muted font-bold uppercase text-xs tracking-widest mb-6">Please log in to view your dashboard</p>
          <button 
            onClick={() => navigate('/login')}
            className="bg-brand-yellow text-black font-black uppercase tracking-widest text-xs px-8 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg flex pt-20">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <aside className="hidden lg:flex w-64 bg-brand-surface/90 backdrop-blur-xl border-r border-brand-border flex-col py-6 fixed left-0 top-16 bottom-0 z-40">
        <div className="px-6 mb-8">
          <div className="text-brand-yellow font-black font-sans uppercase text-[10px] tracking-[0.2em] mb-1">Industrial Hub</div>
          <div className="text-brand-text-muted text-[9px] uppercase font-bold tracking-tighter">Global Fleet Management</div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: BarChart3, label: 'Dashboard' },
            { icon: Factory, label: 'Equipment' },
            { icon: FileText, label: 'Orders' },
            { icon: Building2, label: 'Enterprise', active: true },
            { icon: Wrench, label: 'Support' }
          ].map((item) => (
            <div 
              key={item.label}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer group ${
                item.active 
                  ? 'bg-brand-yellow text-black' 
                  : 'text-brand-text-muted hover:bg-brand-blue/10 hover:text-brand-blue'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="font-sans text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="mt-auto px-4 border-t border-brand-border pt-4 space-y-1">
          <div className="flex items-center gap-3 text-brand-text-muted p-3 rounded-lg hover:bg-brand-blue/10 hover:text-brand-blue transition-all cursor-pointer group">
            <Settings className="w-4 h-4" />
            <span className="font-sans text-[10px] font-black uppercase tracking-widest">Settings</span>
          </div>
          <div 
            onClick={handleSignOut}
            className="flex items-center gap-3 text-brand-text-muted p-3 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-all cursor-pointer group"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-sans text-[10px] font-black uppercase tracking-widest">Log Out</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Profile Header */}
          <section className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden relative shadow-2xl">
            <div className="h-32 bg-gradient-to-r from-[#0B0C10] via-[#1F2833] to-brand-blue/20 relative" />
            
            <div className="px-8 pb-8 -mt-12 flex flex-col md:flex-row items-end gap-6 relative z-10">
              <div className="w-32 h-32 rounded-2xl border-4 border-brand-bg overflow-hidden shadow-2xl bg-black/40">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                  alt={userProfile?.fullName} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 mb-2">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-black text-brand-yellow uppercase tracking-tighter mb-1"
                >
                  {userProfile?.fullName || 'Anonymous User'}
                </motion.h1>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 text-brand-blue text-[9px] font-black uppercase bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                    <Shield className="w-3 h-3" /> {userProfile?.role || 'User'}
                  </span>
                  <span className="flex items-center gap-2 text-brand-text-muted text-[9px] font-black uppercase bg-white/5 px-3 py-1.5 rounded-full border border-brand-border">
                    <Building className="w-3 h-3" /> {userProfile?.organization || 'Individual'}
                  </span>
                </div>
              </div>

              <button className="mb-2 bg-brand-yellow text-black px-6 py-3 font-sans font-black uppercase text-[10px] tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-brand-yellow/20">
                <Edit3 className="w-4 h-4" /> Edit Profile
              </button>
            </div>
          </section>

          {/* Stats Dashboard */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Truck, label: 'Active Orders', value: '12', color: 'brand-yellow', progress: 75 },
              { icon: Box, label: 'Total Assets Managed', value: '458', color: 'brand-blue' },
              { icon: Headphones, label: 'Technical Tickets', value: '03', color: 'red-500' }
            ].map((stat) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -5 }}
                className="bg-brand-surface border border-brand-border p-6 rounded-2xl relative overflow-hidden group shadow-xl"
              >
                <div className={`absolute left-0 top-0 w-1 h-full bg-${stat.color}`} />
                <div className="flex justify-between items-start mb-6">
                  <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                  <span className="text-[10px] text-brand-text-muted/40 font-black uppercase tracking-tighter">Live Status</span>
                </div>
                <div className="text-4xl font-black text-brand-text mb-2">{stat.value}</div>
                <div className="text-[10px] text-brand-text-muted font-black uppercase tracking-widest">{stat.label}</div>
                {stat.progress && (
                  <div className="mt-6 h-1 w-full bg-brand-bg rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.progress}%` }}
                      className={`h-full bg-brand-yellow`} 
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </section>

          {/* Details & Certs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-brand-surface border border-brand-border p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-8 border-b border-brand-border pb-4">
                <User className="w-5 h-5 text-brand-yellow" />
                <h3 className="text-xl font-black text-brand-text uppercase tracking-tight">Account Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Full Name</label>
                  <p className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.fullName || 'Not Set'}</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Email Address</label>
                  <p className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.email || user?.email}</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Phone Number</label>
                  <p className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.phoneNumber || 'No verified phone'}</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Organization Unit</label>
                  <p className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.organization || 'None'}</p>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="bg-brand-blue text-white px-8 py-3 font-sans font-black uppercase text-[10px] tracking-widest rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-blue/10">
                    Update Information
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface border border-brand-border p-8 rounded-2xl shadow-xl flex flex-col">
              <div className="flex items-center gap-3 mb-8 border-b border-brand-border pb-4">
                <CheckCircle className="w-5 h-5 text-brand-yellow" />
                <h3 className="text-xl font-black text-brand-text uppercase tracking-tight">Certifications</h3>
              </div>
              
              <div className="space-y-4 flex-1">
                {[
                  { name: 'OSHA-30 Safety', expiry: 'Oct 2025', active: true, icon: HardHat },
                  { name: 'Fleet Optimization', expiry: 'Verified Pro', active: true, icon: BarChart3 },
                  { name: 'Hazard Control', expiry: 'Renewal Pending', active: false, icon: Wrench }
                ].map((cert) => (
                  <div 
                    key={cert.name}
                    className={`flex items-center justify-between p-4 bg-brand-bg/20 rounded-xl border border-brand-border group hover:border-brand-yellow/30 transition-all ${!cert.active && 'opacity-50 grayscale'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${cert.active ? 'bg-brand-yellow/10 text-brand-yellow' : 'bg-brand-surface text-brand-text-muted'}`}>
                        <cert.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase text-brand-text tracking-widest">{cert.name}</div>
                        <div className="text-[9px] text-brand-text-muted uppercase font-bold mt-0.5">{cert.expiry}</div>
                      </div>
                    </div>
                    <button className="text-brand-text-muted/20 hover:text-brand-yellow transition-colors">
                      {cert.active ? <Download className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-4">
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uizNZU7ijYNZXV6eeVVt3tUwM81QjMdagmTFP3Bl_YhnOSuADAs8ijnf-a99tOQR2y6u-GE0Bib3hKc2M2wtgSy2VtvnnloD1_1EbX_TuvsaNgBJcSeVL1iTNF6rhjzb9QzF6xYVBrEmY4FCi0c5a1v-9bmrUqwbfuQKsHogkKXjdQ5UBjmu433XsxAfavlsYlAn178y-Ku0nL10TaURQH6tyuicozv3JxfCQDAlhrAuBfdgUJdILovKc_7jcm8h2TEgEfg4ZJm"
                  alt="Alert Reels Logo"
                  className="h-8 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer invert"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB - Global Help */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-brand-yellow text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 shadow-brand-yellow/20">
        <LifeBuoy className="w-6 h-6" />
      </button>
    </div>
  );
}
