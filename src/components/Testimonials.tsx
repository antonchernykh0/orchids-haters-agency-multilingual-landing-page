'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const { t, language } = useLanguage();

  const reviews = language === 'en' ? [
    { name: 'Alex M.', role: 'CEO TechStart', text: 'They doubled our growth in 3 months. My competitors literally hate me now.' },
    { name: 'Sarah J.', role: 'Founder FashionBrand', text: 'Brutal, honest, and effective. The branding they created is insane.' },
    { name: 'Victor K.', role: 'Marketing Lead', text: 'Finally an agency that doesn\'t play nice and actually gets results.' }
  ] : [
    { name: 'Алекс М.', role: 'CEO TechStart', text: 'Они удвоили наш рост за 3 месяца. Конкуренты теперь меня просто ненавидят.' },
    { name: 'Сара Д.', role: 'Основатель FashionBrand', text: 'Брутально, честно и эффективно. Брендинг, который они создали, безумен.' },
    { name: 'Виктор К.', role: 'Маркетинг лид', text: 'Наконец-то агентство, которое не пытается быть вежливым и дает результат.' }
  ];

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
<div className="max-w-4xl mx-auto text-center mb-16">
<motion.h2 
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-6xl md:text-9xl font-black uppercase mb-8 tracking-tighter"
>
FAQ
</motion.h2>
<p className="text-lg md:text-xl font-bold uppercase tracking-widest text-gray-500 leading-relaxed">
Real feedback from partners who decided to dominate their niche.
</p>
</div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
  {reviews.map((review, index) => (
  <motion.div
  key={index}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  className="bg-white/5 p-6 md:p-8 rounded-[1.5rem] relative border border-white/10 hover:border-red-600 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
  >
  <div className="absolute top-0 left-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
  <Quote className="w-8 h-8 text-red-600 rotate-180" />
  </div>
  
  <div className="relative z-10">
  <p className="text-sm md:text-base font-bold italic text-white mb-6 leading-relaxed tracking-tight">“{review.text}”</p>
  <div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-lg shadow-xl">
{review.name[0]}
</div>
<div>
<p className="font-black text-white uppercase tracking-tighter text-sm">{review.name}</p>
<p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{review.role}</p>
</div>
</div>
</div>
</motion.div>
))}
</div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.05]">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};
