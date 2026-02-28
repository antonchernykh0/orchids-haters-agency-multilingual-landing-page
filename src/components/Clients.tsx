'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Marquee from 'react-fast-marquee';

export const Clients = () => {
  const { t } = useLanguage();

  const logos = ['Bohnenkamp', 'TakeTime App', 'WW Agency', 'BrainStack', 'Geekle'];

  return (
    <section className="py-24 bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-2xl font-black uppercase tracking-widest opacity-20 relative inline-block">
          Trusted Partners
          <div className="absolute top-1/2 left-full w-20 h-[2px] bg-red-600 ml-4 hidden md:block"></div>
          <div className="absolute top-1/2 right-full w-20 h-[2px] bg-red-600 mr-4 hidden md:block"></div>
        </h2>
      </div>
      
      <div className="border-y-4 border-black py-12 relative overflow-hidden bg-white">
         <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
         <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
         
         <Marquee speed={80} gradient={false} className="py-4 overflow-hidden">
           {logos.concat(logos).map((logo, index) => (
             <div key={index} className="mx-16 text-6xl md:text-8xl font-black uppercase tracking-tighter hover:text-red-600 transition-colors cursor-default select-none">
               {logo}<span className="text-red-600">.</span>
             </div>
           ))}
         </Marquee>
      </div>
    </section>
  );
};
