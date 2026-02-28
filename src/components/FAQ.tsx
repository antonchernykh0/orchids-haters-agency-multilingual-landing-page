'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const questions = [
{ q: 'faq.q1', a: 'faq.a1' },
{ q: 'faq.q2', a: 'faq.a2' },
{ q: 'faq.q3', a: 'faq.a3' },
{ q: 'faq.q4', a: 'faq.a4' },
{ q: 'faq.q5', a: 'faq.a5' },
{ 
q: language === 'en' ? 'What guarantees do you provide?' : 'Какие гарантии вы предоставляете?', 
a: language === 'en' ? 'We guarantee transparent reporting and data-driven optimizations. Marketing is about testing, and we ensure every dollar is used to find the winning formula for your scaling.' : 'Мы гарантируем прозрачную отчетность и оптимизацию на основе данных. Маркетинг — это тестирование, и мы гарантируем, что каждый доллар будет использован для поиска выигрышной формулы для вашего масштабирования.' 
},
{ 
q: language === 'en' ? 'Who will work on my project?' : 'Кто будет работать над моим проектом?', 
a: language === 'en' ? 'A dedicated team consisting of a lead strategist, a media buyer, and a creative designer. We don\'t outsource; everything is done in-house.' : 'Команда, состоящая из ведущего стратега, медиабайера и креативного дизайнера. Мы не используем аутсорс; всё делается внутри агентства.' 
},
];


  return (
    <section id="faq" className="py-24 bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter leading-none"
            >
              {t('faq.title')}
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
              Everything you need to know about starting your project with Haters.
            </p>
            
            <div className="bg-zinc-950 p-10 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                   <HelpCircle className="w-24 h-24 text-red-600" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Still have questions?</h3>
                <p className="text-gray-400 text-sm mb-8">Can't find what you're looking for? Reach out to our lead strategist.</p>
                <a href="#contact" className="bg-red-600 text-white font-black px-8 py-4 rounded-xl inline-flex items-center gap-4 hover:bg-white hover:text-red-600 transition-all uppercase tracking-widest text-xs">
                   Contact Us
                </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-4">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-4 rounded-[2rem] overflow-hidden transition-all duration-300 ${
                   openIndex === index ? 'bg-zinc-950 text-white border-zinc-950' : 'bg-white border-gray-100 hover:border-red-600'
                }`}
              >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-8 flex justify-between items-center text-left"
                  >
                    <span className="text-xl md:text-2xl font-black uppercase tracking-tighter pr-8 leading-tight">
                      {item.q.includes('faq.') ? t(item.q) : item.q}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                       openIndex === index ? 'bg-red-600 border-red-600 text-white' : 'border-gray-200 text-gray-400'
                    }`}>
                      {openIndex === index ? <Minus className="w-5 h-5 stroke-[4px]" /> : <Plus className="w-5 h-5 stroke-[4px]" />}
                    </div>
                  </button>

<AnimatePresence>
{openIndex === index && (
<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3 }}
className="overflow-hidden"
>
<div className="px-8 pb-8 pt-0 text-lg font-medium text-gray-400 leading-relaxed border-t border-white/10 mt-4">
<div className="pt-6">
{item.a.includes('faq.') ? t(item.a) : item.a}
</div>
</div>
</motion.div>
)}
</AnimatePresence>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
