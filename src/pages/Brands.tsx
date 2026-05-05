import React from 'react';
import { ArrowRight, Filter, Grid2X2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Brands() {
  const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOZ40LgdYjiIqCJ_fL_9x0PwOAWVbx3YX8ERJUbPkGhKAVH-uEGBA9FflO_qUxISKSM7fwJV4qw1IHdFwwjdgvxAmae_kaZSKDuGj2yb-9eZ_8Gd6eoKOfR87r_JztWQkPi6AAGKGIi0pNlxD3_GNUTlMSAF2ESxGSS2w_ZNB7s9N_BbZi3Jw6kdcgLgSchLdAN8OuAHvrrO47wXTb1NrlCwhGxrPWBBOKULUsVqRc484wWuz1vPmyhXNsCJbMq4GSqIZh18suCNQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDiRn5jP3Ah5V6v5KtuvBeFHc_6ODxYLHlENE8UMpGsHqqbzBNBJDqqhU7mCn4yenlBC9AiuGeOFz2QPsSh1WzqXKbQCweoDnPz7aiwT138f-RMWtPdVzIiCeCwuGhlmQpj5BUqEVXXnK4JwvRn7Xd0EPrj0gxCrYgCQx8Q8v5L7VYPWorz-ZJYrhTUfA9YC9XjBnujuzkuicUKSHWQfJxAtsuAp8BHLTKySfD9CYMcbpLvqX-kAh1CI8_aKxc9ELl-Yp5S8KNTcI0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD_EOeR1pVO95pUQYlJ9QxVf7hcRqBg7imhrsB70PDFgPjCzKtsZo-XJVuFlLqsTVrScckYWBqvjHylrGJYO0aZJV7hmttbhH1n_b10QvcnhT88MDYLT0OVbYcfSkVEp0WpdPqQglItS6EtLXMbw5sPBZ9XWdEpyVgVHSeSOmip0Z5GulRkd46R2Bj_KcZIgpslmnvZLZAkR5hJIXM4L_omAR7zzzbgbxA5v1kzHl-wykklIoyGvL5UrKYM0PC2o1-ilJRZDoqx-FU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1UruOexW-le7pJjr808DL7rwHGuFDQo_LNR0S7s-HBvsNG0mF05Slnn5CFR3wzUpf3QVxY8JNJTb1FzNUMhizZo0vneD7N7Zz_QWum1Vqe1JNf2PV_u4MXvO5RNvsT4QOpPNTnXpyHWLB1MWFGnwC7THB6pZj70CQHE8vxk-xmzoSaBZJBAYtBlXty8VtlCB0UytRv4u80G8NcvbbpF6QHz8dR0SqqCqSMvHaqzWbC6mOfKxkqDTU2cnrvyenxUIMtAh-VPL3Itc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFXrmPiwZN-cBvGrcQ3y8FhqGWYv7OLp2XO2-cMfbg0EbnrP8mAIs1yoXbs9AVa7QTfOcfZ43H4RLZ8NkW2_mT3fXTU2lH2sKmIp37ELxyPOpCm5arWHuGo6wgFfl37EzyNHoHDG5bxtb99nYRWFMosHOa1PMJT78cgEkbxe2obkq3tu7mavVTsPaAFOdZU7pNAlnFS_IsXGyHdxkE0ucT9OU6Ag2jIi4GY__4FNo5uykOOti-cYCVsXKjerNn9h2iHGi7aXA6tCI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1yGrsO3wg137YWV_IbC_VjvFwXBYl9pjgmGTtFo0RMz2_mC1ZRITXJvjZjL1uvaYSTXz6NK312YufAzpJAEwW-b4zWnzONlG0AIlEiyQkyCzAThfPg5ZIFv9xoCDTEQrnTqZdWeu_vDwfXneNKnWvMxRgl_F6ieFqCMDtRYctLv16UJhBIKgqI_RyiqEROZCYZgUMndYdK_CyjfIW31J1q4X9xXOak2vetpEOi_GBj1g5Z0C33wTwYJcefRFolq_Td0cNAZ3vBiM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8yuo-N5uTNjsADznoIJS4tu6TGTuZG4XO_cTvK-D5J6K5AupRa3DWnhTClNO5OP8UUZdkarkubHI1apc4Tgl9fEUePO_CB9Rtfow5RmlbRhUPl1tUkr3yPCEAWzPLFQ4ZdZgOklkyIPo5YpiYXhTCRO5JiUcMCXbyFU3C4g8t3xU4VNr8XPLKxpBrSZGlB6b4t_Nl0GyYYLIQDkdEENNWyqyYppRZpGz3lijsqDT5O7uOfw3nnDKi047Tkpmn_4dunMkqr51RMH4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4zcT6J7FEK2btLINYXwkPOXPwUIN7Wlk64va1oFUGedRsZlmQcRV1Pg7sJbQFgvhHdUDFStTxb8oWo9quaxe1gEf1QH1AR-Ki0ZguV6lu7iBUWXx0DI7K1rEo02W4q21x3zIm2nicz91hisDEM566nJH_9QL2YRfSx6WfMSrrq7t5T_v-jgsjHnRVhMHoJVan9_lhys0TT0pUir5BSFFc_fPtxRPynz9-i5z_t4M8za6OQO8b3y2aKLNIEX1k-iOCXFSmAdSBvTM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBfh6Ila--h_PGgmPoYrv8mA797wShuxcDWTOuZTAPGEPjDZQgAz5VptVzf2VTUKZPkirGH9H6f33588fJ9cCDK0tpQ5pqnYuav3eVVjcT-EN6c2EPH6rrAY3ixprVNPQyNSueKuLGuUZ_HZSKusY6QHjbrIZJOgEAi_jU4UWh9UIjBqvPEZeiiZkhoPp66ovw4lGgesNCmHoEjYXEsFppA9i-T2bvgke499lkvevaTuKwD7Op3eCmnXC3Uwlg8jN7_nds636HUd-Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzpXhjOdFOkhZg9sXmJZYMINHBGf62S7EEbf9PdM597fTa_8ZcsSic7m5dQG2g0J4iyets5uUCqocL_ZN-6gzUDHJMJXPhyMrqUUTv0EgwilM18d3bLXtoFTUsq8uGzxW9I08Hvzh7Ul14tkTpufdv-aPMdl8M2EWlf0JsqxmaJzdDDEIk5EroZq9f0F1t6ULMBRRVNAmqx2ZMwLS2W3f5Yy--QnHs-70B_xrHWz2ED0Nd2BX8H81J9xYqJl0xGkcnyoBKrICVRzQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYr60KkjVxn-nam51VwjCuAOfR3VXQJ4hHPq8_su1UX4MDPdPsLk3Ckz3fHZ1JHTq-RdocfueeLAbi_7KRts7gIgRmSxr3cSQ9G1OOy5iooIt1XndU7s_QPqCVi3bGTIWBUF29lNvhSWXBbXlAqCz3cd0joDJrU9w7G-paqWdNmlL43gFinEVYhlPdzqyQYmNl2SvEVI_MQSfiRJImPSuILX8CVCGu5ufQ-WifPga_4DKHWDFHkrql-Hws64-09PSKLsgmSJuiwVI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCzs4eHzp4KsJIO1RUmG1zmeHS8J5SJxjLr_Ct3yBZvnwZ9gU6ZXbbPipoGCjmUFNxc9ZTwGgfLebrL1LwypNMvi4ON6Mr50Tq9F5NiFgFVMcbXcb8P6-1JEkDH2K2pJrhkjMHFGXGxPAppf2Zi4DMp__ge7tDxUyuM0fHnV0RdlC5SOhgr6SCRfVx4HykFgwReLstcdIEMTrNBAmuGMMsyhSNv13SqL9LwgpEWvz1JMckqkE5ohRt1XBO66epYff8xaxdry0wKrAQ"
  ];

  return (
    <div className="pt-20 font-sans bg-[#131313] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 opacity-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131313]"></div>
          <img 
            className="w-full h-full object-cover" 
            alt="A high-contrast industrial interior showcasing heavy steel beams and yellow safety equipment in a precision engineering workshop." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBA3WVKiKtVunr2F20Y_JBvey-xP9X_75rMfJ9oXzWcznf8ugZab50MiEchwZrFofhFlHILJINR44cMxPGe2XAwtA929MwVC7vsJRz9X2pyE6k61_rRXma4-qHOQZdjNjWaPsXOq16WWzcXdrS40NXG3TSuV023l_B1DmcQstw32OzwrQ8t0M8bsTuJ7gZ_Tk-GdctUIRXLiWt30zEA4kBxquNj2tWeXfZpPiKWZD5mylMIOUjG-M27waF7NLNX3Kzim3kfymVeaI"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 mb-6"
            >
              <span className="w-2 h-2 bg-brand-yellow animate-pulse"></span>
              <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">Industry Partnerships</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight uppercase"
            >
              Built by the Best, <br/><span className="text-brand-yellow">Trusted by Leaders.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/70 max-w-2xl mb-8 leading-relaxed"
            >
              Alert Reels collaborates with global industrial pioneers to deliver safety-critical power solutions. Our partner ecosystem represents the gold standard in construction, manufacturing, and heavy engineering.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-brand-blue text-white px-8 py-3 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-brand-yellow hover:text-black active:scale-95 transition-all shadow-xl hover:shadow-brand-yellow/20 group cursor-pointer">
                Become a Partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Wall Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase">Our Brand Ecosystem</h2>
            <p className="text-white/60 leading-relaxed">Strategic alliances that power the world's most demanding worksites. Each partner is selected for their commitment to industrial excellence.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-colors cursor-pointer text-white/60">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 border border-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-colors cursor-pointer text-white/60">
              <Grid2X2 className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 border-t border-l border-white/5"
        >
          {logos.map((logo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square border-r border-b border-white/5 group relative overflow-hidden flex items-center justify-center bg-[#1a1a1a]/30 hover:bg-[#1a1a1a] transition-all duration-300 p-12 cursor-pointer"
            >
              {idx === 0 && (
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">Tier 1 Partner</span>
                </div>
              )}
              <img 
                className="max-h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                alt="Partner logo" 
                src={logo}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bento Grid Featured Case Study */}
      <section className="py-24 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl font-bold mb-12 text-center uppercase tracking-tight"
          >
            Partnership in Action
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-8 relative overflow-hidden border border-white/5 group cursor-pointer"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Featured collaboration - The Hyperion Project" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCswhp6V8jtSAS9j3rIGMCvjRiyULWxonjiQVC9C9VTdSQe5HJper6Oczv56wiREIwsOXOMlzxOjaVZaPsrVfFSQGiOYqtpiJM_Qz1_zCbSTPGmbB_moKp5HY9bXqupd5NcWx3HNquyw6-4Uv1SIX7KETnRk8xgJ2W38ZkFShZzLPSkCnO7snl0LbBQAGi_X8KcHxoB3_Iay8uKXndRP7YPoMgQBqgV8PSZLVZ8BWBBrfUbs1_E3_B_XkQfL2CGKnnYrLZTtSHZXjI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
                <span className="text-brand-yellow font-bold text-[10px] uppercase tracking-widest mb-2">Featured Collaboration</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Hyperion Project</h3>
                <p className="text-white/70 max-w-xl leading-relaxed">Supplying 500+ industrial reels for the world's largest automated logistics center. A testament to reliability under 24/7 operational stress.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-4 grid grid-rows-2 gap-6"
            >
              <div className="bg-[#131313] p-8 border border-white/5 flex flex-col justify-center group hover:border-brand-yellow/50 transition-colors cursor-pointer">
                <div className="text-5xl md:text-6xl font-bold text-brand-yellow mb-2 tracking-tight">12M+</div>
                <div className="font-bold text-[10px] uppercase tracking-widest text-white/50">Hours Operational</div>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">Zero failure rate across our entire distributor network in 2023.</p>
              </div>
              
              <div className="bg-brand-yellow p-8 border border-brand-yellow flex flex-col justify-center group hover:bg-white transition-colors cursor-pointer">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2 tracking-tight">50+</div>
                <div className="font-bold text-[10px] uppercase tracking-widest text-black/60">Global Brands</div>
                <p className="mt-4 text-sm text-black/70 leading-relaxed">Co-developing next-generation smart reels with industry leaders.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#1a1a1a]/80 backdrop-blur-xl p-12 md:p-16 border border-brand-yellow/20 max-w-4xl mx-auto shadow-[0_0_50px_rgba(252,227,0,0.05)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight text-white">Scale Your Solutions</h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join the Alert Reels ecosystem and leverage our global distribution network and premium industrial hardware.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-brand-yellow text-black px-10 py-5 font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg hover:shadow-brand-yellow/20 text-sm cursor-pointer">
              Become a Distributor
            </button>
            <button className="border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest hover:border-brand-yellow hover:text-brand-yellow active:scale-95 transition-all text-sm cursor-pointer">
              Partner Portal
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
