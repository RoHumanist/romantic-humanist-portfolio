'use client';

import { outroData, externalLinks, contactEmail } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Outro() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section
      id="outro"
      ref={ref}
      className="section-center bg-black py-40 !items-start text-left dark-theme"
    >
      <div className="max-w-5xl w-full mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-black mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {outroData.title.split(outroData.highlightWord).map((part, index) => (
            <span key={index}>
              {part}
              {index === 0 && (
                <span className="text-blue-500">{outroData.highlightWord}</span>
              )}
            </span>
          ))}
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 font-black text-xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {externalLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-slate-800 pt-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-slate-600 font-black mb-6 uppercase tracking-widest text-sm italic">
            Get In Touch
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-3xl md:text-6xl font-black hover:text-blue-500 transition-all tracking-tighter break-all"
          >
            {contactEmail}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
