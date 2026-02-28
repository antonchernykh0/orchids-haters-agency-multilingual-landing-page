'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export const Pricing = () => {
  const { t } = useLanguage();

const packages = [
{
id: 'p1',
name: 'pricing.p1.name',
desc: 'pricing.p1.desc',
price: '$890',
features: 'pricing.p1.features',
recommended: false,
},
{
id: 'p2',
name: 'pricing.p2.name',
desc: 'pricing.p2.desc',
price: '$1490',
features: 'pricing.p2.features',
recommended: true,
},
{
id: 'p3',
name: 'pricing.p3.name',
desc: 'pricing.p3.desc',
price: '$1990',
features: 'pricing.p3.features',
recommended: false,
}
];


  return (
    <section id="pricing" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter"
          >
            {t('pricing.title')}
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            Choose your level of market dominance.
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
{packages.map((pkg, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
className={`p-8 rounded-[2.5rem] relative flex flex-col h-full border-2 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
pkg.recommended 
? 'bg-red-600 border-red-600 z-10' 
: 'bg-white/5 border-white/10 hover:border-red-600'
}`}
>

              {pkg.recommended && (
                <div className="absolute top-6 right-6 bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                  Most Viral
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-3xl font-black uppercase tracking-tighter mb-4 ${pkg.recommended ? 'text-white' : 'text-white'}`}>
                  {t(pkg.name)}
                </h3>
                <p className={`${pkg.recommended ? 'text-red-100' : 'text-gray-400'} text-sm leading-relaxed mb-6`}>
                  {t(pkg.desc)}
                </p>
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black uppercase tracking-tighter">{pkg.price}</span>
                    <span className={`text-sm font-bold uppercase ${pkg.recommended ? 'text-red-100' : 'text-gray-500'}`}>/ m</span>
                  </div>

              </div>

              <div className="flex-grow space-y-6 mb-12">
                <div className="h-[2px] w-full bg-white/10"></div>
                {t(pkg.features).split(', ').map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${pkg.recommended ? 'bg-white border-white' : 'bg-red-600 border-red-600 shadow-lg shadow-red-600/20'}`}>
                      <Check className={`w-3 h-3 stroke-[4px] ${pkg.recommended ? 'text-red-600' : 'text-white'}`} />
                    </div>
                    <span className={`text-sm font-bold tracking-tight ${pkg.recommended ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all text-sm flex items-center justify-center gap-4 ${
                pkg.recommended 
                  ? 'bg-black text-white hover:bg-white hover:text-black shadow-xl shadow-black/20' 
                  : 'bg-red-600 text-white hover:bg-white hover:text-red-600 shadow-xl shadow-red-600/20'
              }`}>
                Dominate Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
