import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  LogOut,
  X,
  Send,
  Loader2,
  Check,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeProvider';

export function Profile() {
  const { user, userProfile, signOut, updateUserProfile } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Form State
  const [formData, setFormData] = useState({
    fullName: userProfile?.fullName || '',
    phoneNumber: userProfile?.phoneNumber || '',
    organization: userProfile?.organization || '',
    role: userProfile?.role || 'Fleet Manager'
  });

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateUserProfile(formData);
      setIsEditing(false);
      triggerNotification('Profile updated successfully');
    } catch (err) {
      console.error(err);
      triggerNotification('Error updating profile');
    } finally {
      setIsSaving(false);
    }
  };

  const triggerNotification = (msg: string) => {
    setShowNotification(msg);
    setTimeout(() => setShowNotification(null), 3000);
  };

  const simulateAction = (action: string) => {
    triggerNotification(`${action} simulation started...`);
    setTimeout(() => triggerNotification(`${action} successful`), 1500);
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Profile Identity Card */}
      <section className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="h-32 bg-gradient-to-r from-[#0B0C10] via-[#1F2833] to-brand-blue/20 relative" />
        
        <div className="px-8 pb-8 -mt-12 flex flex-col md:flex-row items-end gap-6 relative z-10">
          <div className="w-32 h-32 rounded-2xl border-4 border-brand-bg overflow-hidden shadow-2xl bg-black/40">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
              alt={userProfile?.fullName || 'User'} 
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
              <span className="flex items-center gap-2 text-brand-text-muted text-[9px] font-black uppercase bg-white/5 dark:bg-white/5 light:bg-black/5 px-3 py-1.5 rounded-full border border-brand-border">
                <Building className="w-3 h-3" /> {userProfile?.organization || 'Individual'}
              </span>
            </div>
          </div>

          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="mb-2 bg-brand-yellow text-black px-6 py-3 font-sans font-black uppercase text-[10px] tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-brand-yellow/20"
              aria-label="Edit Profile Information"
            >
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
          )}
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Quick Statistics">
        {[
          { icon: Truck, label: 'Active Orders', value: '12', color: 'text-brand-yellow', bg: 'bg-brand-yellow', progress: 75 },
          { icon: Box, label: 'Total Assets Managed', value: '458', color: 'text-brand-blue', bg: 'bg-brand-blue' },
          { icon: Headphones, label: 'Technical Tickets', value: '03', color: 'text-red-500', bg: 'bg-red-500' }
        ].map((stat) => (
          <motion.div 
            key={stat.label}
            whileHover={{ y: -5 }}
            className="bg-brand-surface border border-brand-border p-6 rounded-2xl relative overflow-hidden group shadow-xl"
          >
            <div className={`absolute left-0 top-0 w-1 h-full ${stat.bg}`} />
            <div className="flex justify-between items-start mb-6">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <div className="text-[10px] text-brand-text-muted/40 font-black uppercase tracking-tighter">Live Status</div>
            </div>
            <div className="text-4xl font-black text-brand-text mb-2">{stat.value}</div>
            <div className="text-[10px] text-brand-text-muted font-black uppercase tracking-widest">{stat.label}</div>
            {stat.progress && (
              <div className="mt-6 h-1 w-full bg-brand-bg rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  className={`h-full ${stat.bg}`} 
                />
              </div>
            )}
          </motion.div>
        ))}
      </section>

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.section 
            key="edit-profile"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-brand-surface border border-brand-yellow/30 p-8 rounded-2xl shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4">
              <div className="flex items-center gap-3">
                <Edit3 className="w-5 h-5 text-brand-yellow" />
                <h3 className="text-xl font-black text-brand-text uppercase tracking-tight">Edit Professional Identity</h3>
              </div>
              <button onClick={() => setIsEditing(false)} className="text-brand-text-muted hover:text-red-500 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleUpdateProfile} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all"
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Role / Designation</label>
                <input 
                  id="role"
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all"
                  placeholder="Fleet Manager"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Phone Number</label>
                <input 
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="organization" className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Organization Unit</label>
                <input 
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all"
                  placeholder="Company Name"
                />
              </div>
              <div className="md:col-span-2 pt-4 flex gap-4">
                <button 
                  type="submit"
                  disabled={isSaving}
                  className="bg-brand-yellow text-black px-10 py-4 font-sans font-black uppercase text-xs tracking-widest rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-yellow/10 flex items-center gap-3 disabled:opacity-50"
                >
                  {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Check className="w-5 h-5" />}
                  Save Changes
                </button>
                <button 
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-brand-bg border border-brand-border text-brand-text px-10 py-4 font-sans font-black uppercase text-xs tracking-widest rounded-lg hover:bg-brand-surface active:scale-95 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.section>
        ) : (
          <motion.div 
            key="display-profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 bg-brand-surface border border-brand-border p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-8 border-b border-brand-border pb-4">
                <User className="w-5 h-5 text-brand-yellow" />
                <h3 className="text-xl font-black text-brand-text uppercase tracking-tight">Account Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Full Name</div>
                  <div className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.fullName || 'Not Set'}</div>
                </div>
                <div className="space-y-2">
                  <div className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Email Address</div>
                  <div className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.email || user?.email}</div>
                </div>
                <div className="space-y-2">
                  <div className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Phone Number</div>
                  <div className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.phoneNumber || 'No verified phone'}</div>
                </div>
                <div className="space-y-2">
                  <div className="block text-[10px] font-black text-brand-text-muted uppercase tracking-widest ml-1">Organization Unit</div>
                  <div className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-4 text-brand-text font-bold">{userProfile?.organization || 'None'}</div>
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
                    <button 
                      onClick={() => simulateAction(cert.active ? 'Download' : 'Renewal')}
                      className="text-brand-text-muted/20 hover:text-brand-yellow transition-colors"
                      title={cert.active ? "Download Certificate" : "Renew Certificate"}
                    >
                      {cert.active ? <Download className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderEquipment = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-brand-text uppercase tracking-tight">Managed Equipment</h2>
          <p className="text-brand-text-muted text-[10px] font-black uppercase tracking-widest mt-1">Real-time asset tracking and maintenance log</p>
        </div>
        <button className="bg-brand-blue text-white px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
          Register New Asset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { id: 'AL-9005', name: 'Cord Reel Pro 5000', status: 'Operational', maintenance: 'Oct 2026', health: 98, type: 'Electric', icon: Factory },
          { id: 'AL-4421', name: 'Marine Grade Hub', status: 'Maintenance Required', maintenance: 'Immediate', health: 45, type: 'Static', icon: Box },
          { id: 'AL-7732', name: 'GFCI Safety Reel', status: 'Operational', maintenance: 'Jan 2027', health: 92, type: 'Safety', icon: Shield },
          { id: 'AL-1102', name: 'Industrial Task Light', status: 'Offline', maintenance: 'Service Scheduled', health: 0, type: 'Lighting', icon: Headphones }
        ].map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-surface border border-brand-border p-6 rounded-2xl shadow-xl hover:border-brand-yellow/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl bg-brand-surface border border-brand-border group-hover:bg-brand-yellow/10 transition-colors`}>
                <item.icon className="w-6 h-6 text-brand-yellow" />
              </div>
              <div className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${
                item.status === 'Operational' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                item.status === 'Offline' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                'bg-brand-orange/10 text-brand-orange border-brand-orange/20'
              }`}>
                {item.status}
              </div>
            </div>
            <h3 className="text-lg font-black text-brand-text mb-1 tracking-tight">{item.name}</h3>
            <div className="text-[10px] text-brand-text-muted font-black uppercase tracking-widest mb-6">ID: {item.id} • {item.type}</div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[9px] font-black uppercase mb-1.5">
                  <span className="text-brand-text-muted">Unit Health</span>
                  <span className={item.health > 80 ? 'text-green-500' : 'text-brand-orange'}>{item.health}%</span>
                </div>
                <div className="h-1.5 w-full bg-brand-bg rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.health}%` }}
                    className={`h-full ${item.health > 80 ? 'bg-green-500' : 'bg-brand-orange'}`}
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-brand-border flex justify-between items-center">
                <span className="text-[9px] text-brand-text-muted font-black uppercase">Next Service: {item.maintenance}</span>
                <button className="text-brand-yellow hover:underline text-[9px] font-black uppercase tracking-widest">Logs</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-brand-text uppercase tracking-tight">Procurement Log</h2>
          <p className="text-brand-text-muted text-[10px] font-black uppercase tracking-widest mt-1">Transaction history and supply chain tracking</p>
        </div>
      </div>

      <div className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" aria-label="Order History Table">
            <thead>
              <tr className="bg-brand-bg/50 border-b border-brand-border">
                <th className="p-6 text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Order Ref</th>
                <th className="p-6 text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Description</th>
                <th className="p-6 text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Amount</th>
                <th className="p-6 text-[10px] font-black text-brand-text-muted uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {[
                { id: 'PO-982182', date: '2024-05-01', items: 'Elite Fleet Package (24 Units)', status: 'In Transit', amount: '$12,450.00' },
                { id: 'PO-982145', date: '2024-04-15', items: 'Custom Static Dissipative Reels', status: 'Delivered', amount: '$3,200.00' },
                { id: 'PO-982110', date: '2024-03-22', items: 'GFCI Replacement Modules', status: 'Delivered', amount: '$850.00' },
                { id: 'PO-982055', date: '2024-02-12', items: 'Initial Warehouse Deployment', status: 'Delivered', amount: '$45,800.00' }
              ].map((order) => (
                <tr key={order.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6">
                    <div className="text-sm font-black text-brand-text uppercase tracking-tight">{order.id}</div>
                    <div className="text-[10px] text-brand-text-muted uppercase font-bold mt-1">{order.date}</div>
                  </td>
                  <td className="p-6">
                    <div className="text-sm font-bold text-brand-text-muted">{order.items}</div>
                  </td>
                  <td className="p-6">
                    <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${
                      order.status === 'Delivered' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-brand-blue/10 text-brand-blue border-brand-blue/20'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="text-sm font-black text-brand-text">{order.amount}</div>
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-brand-yellow hover:text-white transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEnterprise = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-brand-text uppercase tracking-tight">Enterprise Solutions</h2>
        <p className="text-brand-text-muted text-[10px] font-black uppercase tracking-widest mt-1">Managed custom projects and engineering integrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          { 
            title: 'Automotive Bay Expansion', 
            client: 'Chicago Logistics Hub',
            progress: 85, 
            status: 'In Development',
            manager: 'Mark Jensen',
            budget: '$150k',
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          },
          { 
            title: 'Hangar Safety Overhaul', 
            client: 'Global Aero Services',
            progress: 35, 
            status: 'Design Phase',
            manager: 'Sarah Chen',
            budget: '$240k',
            image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80"
          }
        ].map((project) => (
          <motion.div 
            key={project.title}
            whileHover={{ y: -5 }}
            className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <div className="md:w-48 h-48 md:h-auto overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-bg/40 backdrop-blur-[2px]" />
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex justify-between mb-4">
                <span className="text-[9px] font-black text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
                  {project.status}
                </span>
                <span className="text-xs font-black text-brand-text mb-2 tracking-tight">{project.budget}</span>
              </div>
              <h3 className="text-xl font-black text-brand-text uppercase tracking-tight mb-1">{project.title}</h3>
              <div className="text-[10px] text-brand-text-muted font-bold uppercase tracking-widest mb-6">Client: {project.client}</div>
              
              <div className="mt-auto space-y-4">
                <div>
                  <div className="flex justify-between text-[9px] font-black uppercase mb-1.5">
                    <span className="text-brand-text-muted">Project Completion</span>
                    <span className="text-brand-yellow">{project.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-brand-bg rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      className="h-full bg-brand-yellow shadow-[0_0_10px_#fce300]"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-brand-text-muted text-[10px] font-black uppercase">
                  <User className="w-3 h-3 text-brand-blue" />
                  Lead: {project.manager}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-brand-text uppercase tracking-tight">Technical Support</h2>
        <p className="text-brand-text-muted text-[10px] font-black uppercase tracking-widest mt-1">Documentation, ticketing, and engineering consultation</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-xl">
            <h3 className="text-lg font-black text-brand-text uppercase tracking-tight mb-6 flex items-center gap-3">
              <Headphones className="w-5 h-5 text-brand-yellow" />
              Active Incident Tickets
            </h3>
            <div className="space-y-4">
              {[
                { id: 'TIC-1092', subject: 'Voltage irregularites AL-9005', status: 'Awaiting Response', date: '2 hrs ago', priority: 'High' },
                { id: 'TIC-1088', subject: 'Installation clarification - Chicago', status: 'Resolved', date: '2 days ago', priority: 'Medium' }
              ].map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-5 bg-brand-bg/40 rounded-xl border border-brand-border group hover:border-brand-yellow/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${ticket.priority === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-brand-blue/10 text-brand-blue'}`}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-brand-text tracking-tight uppercase">{ticket.subject}</div>
                      <div className="text-[10px] text-brand-text-muted font-bold uppercase mt-1">Ref: {ticket.id} • {ticket.date}</div>
                    </div>
                  </div>
                  <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${
                    ticket.status === 'Resolved' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-brand-orange/10 text-brand-orange border-brand-orange/20'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setIsSupportOpen(true)}
              className="w-full mt-8 py-4 bg-brand-bg border border-brand-border hover:bg-brand-yellow hover:text-black transition-all rounded-xl font-black uppercase text-xs tracking-widest"
            >
              Open New Ticket
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-xl">
            <h3 className="text-lg font-black text-brand-text uppercase tracking-tight mb-6">Support Channels</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-brand-bg/40 rounded-xl border border-brand-border hover:border-brand-yellow/50 transition-all group">
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-brand-blue" />
                  <span className="text-[10px] font-black text-brand-text uppercase tracking-widest">Product Manuals</span>
                </div>
                <ChevronRight className="w-4 h-4 text-brand-text-muted group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-brand-bg/40 rounded-xl border border-brand-border hover:border-brand-yellow/50 transition-all group">
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-brand-blue" />
                  <span className="text-[10px] font-black text-brand-text uppercase tracking-widest">Return Requests</span>
                </div>
                <ChevronRight className="w-4 h-4 text-brand-text-muted group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="p-6 bg-brand-yellow/5 border border-brand-yellow/20 rounded-xl mt-6">
                <p className="text-[11px] text-brand-text font-bold mb-4 leading-relaxed">Direct Engineering Hotline available for Enterprise partners 24/7.</p>
                <div className="text-brand-yellow text-sm font-black">+1 (800) 555-REEL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-brand-text uppercase tracking-tight">System Settings</h2>
        <p className="text-brand-text-muted text-[10px] font-black uppercase tracking-widest mt-1">Configure your workspace preferences and security protocols</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Security Section */}
        <section className="bg-brand-surface border border-brand-border p-8 rounded-2xl shadow-xl">
          <h3 className="text-lg font-black text-brand-text uppercase tracking-tight mb-6 flex items-center gap-3">
            <Shield className="w-5 h-5 text-brand-yellow" />
            Security Protocol
          </h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-brand-bg/40 rounded-xl border border-brand-border">
              <div>
                <div className="text-xs font-black text-brand-text uppercase tracking-widest">Two-Factor Auth</div>
                <div className="text-[10px] text-brand-text-muted font-bold uppercase mt-1">Multi-layer protection</div>
              </div>
              <button 
                onClick={() => simulateAction('2FA Toggle')}
                className="w-12 h-6 bg-brand-bg border border-brand-border rounded-full relative p-1 transition-all"
              >
                <div className="w-4 h-4 bg-brand-text-muted rounded-full" />
              </button>
            </div>
            <button 
              onClick={() => simulateAction('Password Reset Request')}
              className="w-full py-4 bg-brand-bg border border-brand-border hover:bg-white hover:text-black transition-all rounded-xl font-black uppercase text-xs tracking-widest"
            >
              Update Password
            </button>
          </div>
        </section>

        {/* Workspace Section */}
        <section className="bg-brand-surface border border-brand-border p-8 rounded-2xl shadow-xl">
          <h3 className="text-lg font-black text-brand-text uppercase tracking-tight mb-6 flex items-center gap-3">
            <Settings className="w-5 h-5 text-brand-yellow" />
            Workspace Prefs
          </h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-brand-bg/40 rounded-xl border border-brand-border">
              <div>
                <div className="text-xs font-black text-brand-text uppercase tracking-widest">Dark Mode</div>
                <div className="text-[10px] text-brand-text-muted font-bold uppercase mt-1">High contrast interface</div>
              </div>
              <button 
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  triggerNotification(`Switched to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
                }}
                className={`w-12 h-6 border border-brand-border rounded-full relative p-1 transition-all ${theme === 'dark' ? 'bg-brand-yellow' : 'bg-brand-bg'}`}
              >
                <motion.div 
                  layout
                  className={`w-4 h-4 rounded-full ${theme === 'dark' ? 'bg-black ml-auto' : 'bg-brand-text-muted'}`} 
                />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-brand-bg/40 rounded-xl border border-brand-border">
              <div>
                <div className="text-xs font-black text-brand-text uppercase tracking-widest">Email Alerts</div>
                <div className="text-[10px] text-brand-text-muted font-bold uppercase mt-1">Maintenance notifications</div>
              </div>
              <button 
                onClick={() => simulateAction('Notifications Toggle')}
                className="w-12 h-6 bg-brand-yellow border border-brand-border rounded-full relative p-1 transition-all shadow-sm"
              >
                <div className="w-4 h-4 bg-black ml-auto rounded-full" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'Dashboard': return renderDashboard();
      case 'Equipment': return renderEquipment();
      case 'Orders': return renderOrders();
      case 'Enterprise': return renderEnterprise();
      case 'Support': return renderSupport();
      case 'Settings': return renderSettings();
      default: return renderDashboard();
    }
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
            className="bg-brand-yellow text-black font-black uppercase tracking-widest text-xs px-8 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-yellow/20"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg flex pt-20 transition-colors duration-300">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <aside className="hidden lg:flex w-64 bg-brand-surface/90 backdrop-blur-xl border-r border-brand-border flex-col py-6 fixed left-0 top-16 bottom-0 z-40">
        <div className="px-6 mb-8">
          <div className="text-brand-yellow font-black font-sans uppercase text-[10px] tracking-[0.2em] mb-1">Industrial Hub</div>
          <div className="text-brand-text-muted text-[9px] uppercase font-bold tracking-tighter">Global Fleet Management</div>
        </div>

        <nav className="flex-1 px-4 space-y-1" aria-label="Dashboard Sidebar Navigation">
          {[
            { icon: BarChart3, label: 'Dashboard' },
            { icon: Factory, label: 'Equipment' },
            { icon: FileText, label: 'Orders' },
            { icon: Building2, label: 'Enterprise' },
            { icon: Wrench, label: 'Support' }
          ].map((item) => (
            <button 
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              aria-current={activeTab === item.label ? 'page' : undefined}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer group ${
                activeTab === item.label 
                  ? 'bg-brand-yellow text-black shadow-xl shadow-brand-yellow/10' 
                  : 'text-brand-text-muted hover:bg-brand-blue/10 hover:text-brand-blue'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="font-sans text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto px-4 border-t border-brand-border pt-4 space-y-1">
          <button 
            onClick={() => setActiveTab('Settings')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer group ${
              activeTab === 'Settings' 
                ? 'bg-brand-yellow text-black shadow-xl shadow-brand-yellow/10' 
                : 'text-brand-text-muted hover:bg-brand-blue/10 hover:text-brand-blue'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span className="font-sans text-[10px] font-black uppercase tracking-widest">Settings</span>
          </button>
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 text-brand-text-muted p-3 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-all cursor-pointer group"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-sans text-[10px] font-black uppercase tracking-widest">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 sm:p-8 overflow-hidden" id="dashboard-content">
        <div className="max-w-6xl mx-auto">
          
          {/* Mobile Tab Scroller */}
          <div className="lg:hidden mb-8">
            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide" aria-label="Mobile Dashboard Navigation">
              {[
                { icon: BarChart3, label: 'Dashboard' },
                { icon: Factory, label: 'Equipment' },
                { icon: FileText, label: 'Orders' },
                { icon: Building2, label: 'Enterprise' },
                { icon: Wrench, label: 'Support' },
                { icon: Settings, label: 'Settings' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  aria-current={activeTab === item.label ? 'page' : undefined}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
                    activeTab === item.label 
                      ? 'bg-brand-yellow text-black border-brand-yellow' 
                      : 'bg-brand-surface text-brand-text-muted border-brand-border'
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div 
            role="tabpanel" 
            aria-labelledby={`tab-${activeTab}`} 
            className="outline-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderActiveTabContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>


      {/* FAB - Global Help */}
      <button 
        onClick={() => setIsSupportOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-brand-yellow text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 shadow-brand-yellow/20"
      >
        <LifeBuoy className="w-6 h-6" />
      </button>

      {/* Support Modal Simulation */}
      <AnimatePresence>
        {isSupportOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSupportOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-24 right-8 w-96 bg-brand-surface border border-brand-border rounded-2xl shadow-2xl z-[70] overflow-hidden"
            >
              <div className="bg-brand-yellow p-4 text-black flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  <span className="font-black uppercase text-xs tracking-widest">Rapid Support Terminal</span>
                </div>
                <button onClick={() => setIsSupportOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Issue Class</label>
                  <select className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-3 text-brand-text text-sm outline-none">
                    <option>Technical Equipment Failure</option>
                    <option>Logistics Delay</option>
                    <option>Account Permisions</option>
                    <option>Other / Consulting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-text-muted uppercase tracking-widest">Description</label>
                  <textarea 
                    className="w-full bg-brand-bg/40 border border-brand-border rounded-lg p-3 text-brand-text text-sm outline-none h-32 resize-none"
                    placeholder="Provide incident details..."
                  ></textarea>
                </div>
                <button 
                  onClick={() => {
                    simulateAction('Ticket Submission');
                    setIsSupportOpen(false);
                  }}
                  className="w-full bg-brand-blue text-white py-4 rounded-lg font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" /> Initialize Support Flow
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-8 bg-brand-yellow text-black px-6 py-4 rounded-lg shadow-2xl z-[100] flex items-center gap-3 border border-black/10"
          >
            <div className="bg-black/10 p-1.5 rounded-full">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-black uppercase text-[10px] tracking-widest">{showNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
