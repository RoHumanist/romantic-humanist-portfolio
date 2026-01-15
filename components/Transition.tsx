'use client';

import { transitionText } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Transition() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section
      id="plaza-trigger"
      ref={ref}
      className="section-center text-center dark-theme"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-black leading-tight mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
      >
        {transitionText.question} <br />
        <span className="text-blue-500">{transitionText.highlight}</span>
        {transitionText.continuation}
        <br />
        {transitionText.answer}{' '}
        <span className="italic text-slate-500">{transitionText.action}</span>
      </motion.h2>
    </section>
  );
}
