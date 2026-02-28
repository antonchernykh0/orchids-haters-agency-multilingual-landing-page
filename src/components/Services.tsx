'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Megaphone, Zap, Palette, Rocket, Target, TrendingUp } from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: 'services.smm.title',
      desc: 'services.smm.desc',
      icon: <Target className="w-12 h-12 text-white" />,
      color: 'bg-red-600',
    },
    {
      title: 'services.ads.title',
      desc: 'services.ads.desc',
      icon: <Zap className="w-12 h-12 text-white" />,
      color: 'bg-black',
    },
    {
      title: 'services.marketing.title',
      desc: 'services.marketing.desc',
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      color: 'bg-red-600',
    }
  ];

return (
<section id="services" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-red-600/5 -skew-y-6 transform translate-y-1/2"></div>

<div className="container mx-auto px-4 relative z-10">
<div className="max-w-7xl mx-auto mb-16 text-center">
<h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
{t('services.title')}
</h2>
<p className="text-gray-400 text-xl font-bold uppercase tracking-widest max-w-2xl mx-auto">
We don't offer generic solutions. We build weaponized marketing strategies.
</p>
</div>

<div className="max-w-7xl mx-auto border-y-4 border-white/10">
{services.map((service, index) => (
<motion.div
key={index}
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.2 }}
className="flex flex-col md:flex-row items-center gap-12 p-12 hover:bg-white/5 transition-all group border-b last:border-0 border-white/10"
>
<div className={`${service.color} w-24 h-24 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl flex-shrink-0`}>
{service.icon}
</div>

<div className="flex-grow">
<h3 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
{t(service.title)}
</h3>
<p className="text-gray-400 text-xl font-medium leading-relaxed max-w-3xl">
{t(service.desc)}
</p>
</div>

<div className="flex items-center gap-4 flex-shrink-0">
<div className="h-[2px] w-12 bg-red-600"></div>
<span className="text-sm font-black uppercase tracking-widest text-red-600">Dominance</span>
</div>
</motion.div>
))}
</div>
</div>
</section>
);
};
