'use client';

import { useContent } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { heroData } = useContent();

  return (
    <section className="section-center text-center dark-theme">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-[36px] md:text-[65px] font-black mb-8 md:mb-10 tracking-tighter leading-tight px-4">
          {heroData.title}
        </h1>
        <p className="text-[20px] md:text-[35px] font-bold text-slate-400 leading-snug md:leading-tight tracking-tight max-w-5xl mx-auto whitespace-pre-line px-4">
          {heroData.subtitle}
        </p>
        <motion.div
          className="mt-16 md:mt-24 text-slate-700 font-black tracking-[0.3em] text-xs md:text-sm uppercase"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          Keep Scrolling
        </motion.div>
      </motion.div>
    </section>
  );
}
