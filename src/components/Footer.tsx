'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { Instagram, Send, Mail, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const year = 2026;

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
            <div className="md:col-span-5">
              <a href="#" className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 block leading-none">
                Haters<span className="text-red-600">.</span>
              </a>
              <p className="text-lg text-gray-400 font-bold uppercase tracking-widest leading-relaxed mb-8 max-w-sm">
                We make brands that trigger emotions. No bullshit. Just growth.
              </p>
            </div>


<div className="md:col-span-3 space-y-6">
<h4 className="text-[10px] font-black uppercase tracking-widest text-red-600">Quick Links</h4>
<div className="flex flex-col space-y-2 text-sm font-black uppercase tracking-tighter">
<a href="#about" className="hover:text-red-500 transition-colors">About Us</a>
<a href="#services" className="hover:text-red-500 transition-colors">Services</a>
<a href="#why" className="hover:text-red-500 transition-colors">Why Haters</a>
<a href="#portfolio" className="hover:text-red-500 transition-colors">Cases</a>
<a href="#pricing" className="hover:text-red-500 transition-colors">Packages</a>
</div>
</div>

<div className="md:col-span-4 space-y-6">
<h4 className="text-[10px] font-black uppercase tracking-widest text-red-600">Follow Us</h4>
<div className="flex gap-4">
<a 
  href="#" 
  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-red-600 hover:bg-red-600 transition-all group shadow-xl"
>
  <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
</a>
<a 
  href="#" 
  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-red-600 hover:bg-red-600 transition-all group shadow-xl"
>
  <Send className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
</a>
</div>
</div>


        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © {year} Haters Agency. {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
             <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 w-full select-none opacity-[0.02] pointer-events-none transform -translate-y-1/2 overflow-hidden whitespace-nowrap">
         <span className="text-[30vw] font-black uppercase leading-none tracking-tighter">
            HATERS HATERS HATERS
         </span>
      </div>
    </footer>
  );
};
