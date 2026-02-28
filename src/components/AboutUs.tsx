'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';

export const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white text-black overflow-hidden relative">
      {/* Visual Elements: Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter">
            {t('about_us.title')}
          </h2>
          <p className="text-lg md:text-2xl font-bold text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            {t('about_us.desc')}
          </p>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              {[
                { label: t('stats.project'), value: '50+' },
                { label: t('stats.earned'), value: '500 000$+' },
                { label: t('stats.campaigns'), value: '500+' },
              ].map((stat, i) => (

              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 border-2 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]"
              >
                <div className="text-3xl md:text-4xl font-black text-red-600 mb-2">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-black">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
