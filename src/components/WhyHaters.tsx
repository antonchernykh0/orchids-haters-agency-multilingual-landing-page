'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const WhyHaters = () => {
  const { t } = useLanguage();

const points = [
{ title: 'why.point1.title', desc: 'why.point1.desc' },
{ title: 'why.point2.title', desc: 'why.point2.desc' },
{ title: 'why.point3.title', desc: 'why.point3.desc' },
{ title: 'why.point4.title', desc: 'why.point4.desc' },
{ title: 'why.point5.title', desc: 'why.point5.desc' },
{ title: 'why.point6.title', desc: 'why.point6.desc' },
];


  return (
    <section id="why" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-6xl md:text-9xl font-black uppercase mb-8 leading-none tracking-tighter">
            {t('why.title')}
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 font-light">
            {t('why.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-red-600 transition-all group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                 <span className="text-5xl font-black text-red-600">0{index + 1}</span>
              </div>
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-600/20 transform group-hover:rotate-12 transition-transform">
                <Check className="text-white w-8 h-8 stroke-[4px]" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">{t(point.title)}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{t(point.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
