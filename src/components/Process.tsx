'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart2, Zap, Target } from 'lucide-react';

export const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      title: 'process.step1.title',
      desc: 'process.step1.desc',
      icon: <Search className="w-10 h-10 text-white" />,
    },
    {
      title: 'process.step2.title',
      desc: 'process.step2.desc',
      icon: <PenTool className="w-10 h-10 text-white" />,
    },
    {
      title: 'process.step3.title',
      desc: 'process.step3.desc',
      icon: <Zap className="w-10 h-10 text-white" />,
    },
    {
      title: 'process.step4.title',
      desc: 'process.step4.desc',
      icon: <Rocket className="w-10 h-10 text-white" />,
    },
    {
      title: 'process.step5.title',
      desc: 'process.step5.desc',
      icon: <BarChart2 className="w-10 h-10 text-white" />,
    }
  ];

  return (
    <section id="process" className="py-24 bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter"
          >
            {t('process.title')}
          </motion.h2>
          <p className="text-xl md:text-3xl font-light text-gray-500 leading-relaxed">
            From initial research to massive market scaling. We leave nothing to chance.
          </p>
        </div>

        <div className="relative">
          {/* Timeline bar (hidden on mobile) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                   <div className="w-12 h-12 bg-red-600 text-white font-black text-xl rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                      {index + 1}
                   </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative z-10 group-hover:border-red-600 transition-all duration-300 group-hover:-translate-y-4">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:bg-red-600 transition-colors shadow-2xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tighter leading-tight group-hover:text-red-600 transition-colors">
                    {t(step.title)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t(step.desc)}
                  </p>
                </div>
                
                {/* Visual Connector (hidden on mobile) */}
                {index < steps.length - 1 && (
                   <div className="absolute top-1/2 -right-4 w-8 h-[2px] bg-red-600/20 z-0 hidden lg:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative text */}
      <div className="absolute bottom-0 left-0 w-full select-none opacity-[0.03] pointer-events-none translate-y-1/2">
        <span className="text-[250px] font-black uppercase leading-none whitespace-nowrap -ml-[20vw]">
          THE PROCESS THE PROCESS THE PROCESS
        </span>
      </div>
    </section>
  );
};
