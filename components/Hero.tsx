'use client';

import { heroData } from '@/lib/content';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="section-center text-center dark-theme">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-[50px] md:text-[65px] font-black mb-10 tracking-tighter leading-tight">
          {heroData.title}
        </h1>
        <p className="text-[28px] md:text-[35px] font-bold text-slate-400 leading-tight tracking-tight max-w-5xl mx-auto whitespace-pre-line">
          {heroData.subtitle}
        </p>
        <motion.div
          className="mt-24 text-slate-700 font-black tracking-[0.3em] text-sm uppercase"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          Keep Scrolling
        </motion.div>
      </motion.div>
    </section>
  );
}
