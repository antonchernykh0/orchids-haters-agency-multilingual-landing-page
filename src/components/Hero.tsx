'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-white text-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <div className="text-[20vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap">
            HATERS HATERS HATERS HATERS
          </div>
          <div className="text-[20vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap -ml-[10vw]">
            HATERS HATERS HATERS HATERS
          </div>
          <div className="text-[20vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap">
            HATERS HATERS HATERS HATERS
          </div>
        </div>
      </div>

      <div className="container mx-auto z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left pt-12"
            >
              <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-block mb-10 shadow-xl transform hover:scale-105 transition-transform cursor-default">
                 <span className="text-sm md:text-lg font-black uppercase tracking-widest">
                    {t('hero.agency')}
                 </span>
              </div>
              
                <h1 className={`${language === 'ru' ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'} font-black uppercase tracking-tighter mb-8 leading-[0.9]`}>
                  <span className="block md:whitespace-nowrap mb-2">{t('hero.title').split('.')[0]}.</span>
                  <span className="text-red-600 block">{t('hero.title').split('.')[1]?.trim()}</span>
                </h1>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-sm bg-zinc-950 p-8 rounded-[2.5rem] shadow-2xl relative lg:mt-12"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter leading-tight">{t('hero.form.success')}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-white mb-6">
                    <h3 className="text-2xl font-black uppercase tracking-tighter">Get in touch</h3>
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">We respond in 15 minutes.</p>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                      placeholder={t('hero.form.name')}
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                      placeholder={t('hero.form.phone')}
                    />
                  </div>
                  <div>
                    <textarea 
                      required 
                      rows={2}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                      placeholder={t('hero.form.message')}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-white hover:text-red-600 text-white font-black py-4 rounded-xl uppercase tracking-widest transition-all active:scale-95 text-[10px]"
                  >
                    {t('hero.form.submit')}
                  </button>
                </form>
              )}
            </motion.div>
        </div>
      </div>
    </section>
  );
};
