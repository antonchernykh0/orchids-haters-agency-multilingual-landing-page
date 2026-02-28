'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';

export const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-red-600 py-3">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="hidden md:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.2em] text-black">
        <a href="#about" className="hover:text-red-600 transition-colors whitespace-nowrap">{t('nav.about')}</a>
        <a href="#services" className="hover:text-red-600 transition-colors whitespace-nowrap">{t('nav.services')}</a>
      </div>

      <a href="#" className="text-3xl font-black uppercase tracking-tighter text-black">
        <span className="text-red-600">H</span>aters<span className="text-red-600">.</span>
      </a>

      <div className="hidden md:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.2em] text-black">
        <a href="#why" className="hover:text-red-600 transition-colors whitespace-nowrap">{t('nav.why')}</a>
        <a href="#pricing" className="hover:text-red-600 transition-colors whitespace-nowrap">{t('nav.pricing')}</a>
      </div>

      <div className="flex items-center space-x-4 lg:space-x-6">

    <button 
      onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
      className="text-[10px] font-black px-4 py-2 border-2 border-black rounded-xl hover:bg-red-600 hover:border-red-600 hover:text-white transition-all uppercase tracking-widest text-black"
    >
      {language === 'en' ? 'RU' : 'EN'}
    </button>
    <a 
      href="#contact" 
      className="bg-red-600 text-white text-[10px] font-black px-6 py-3 rounded-xl uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg shadow-red-600/20"
    >
      {t('nav.contact')}
    </a>
  </div>
</div>
</nav>

  );
};
