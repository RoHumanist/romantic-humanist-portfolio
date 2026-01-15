'use client';

import { narrativeSections } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface NarrativeSectionProps {
  section: typeof narrativeSections[0];
  index: number;
}

function NarrativeSection({ section, index }: NarrativeSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      className="section-center max-w-5xl mx-auto items-start text-left dark-theme"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2
        className={`text-3xl font-black mb-12 leading-tight ${
          index === 0 ? 'text-blue-500 italic' : 'text-blue-500'
        }`}
      >
        {index === 0 ? `"${section.title}"` : section.title}
      </h2>
      <div
        className={`${
          index === 0 ? 'text-xl' : 'text-lg'
        } text-slate-300 leading-relaxed space-y-${index === 0 ? '2' : '6'}`}
      >
        {section.paragraphs.map((paragraph, idx) => {
          // 특별한 스타일링이 필요한 문단 처리
          const isQuote =
            paragraph.includes('죽음이란') || paragraph.includes('세상이란');
          const isHighlight = paragraph.includes('"사람"에');

          return (
            <p
              key={idx}
              className={`
                ${
                  isQuote
                    ? 'text-white font-bold text-lg py-4 tracking-tight'
                    : ''
                }
                ${
                  isQuote && paragraph.includes('세상이란')
                    ? 'text-white font-black text-3xl py-6 tracking-tighter underline decoration-blue-500/50'
                    : ''
                }
                ${isHighlight ? 'text-white font-bold text-xl pt-4' : ''}
              `}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </motion.section>
  );
}

export default function Narrative() {
  return (
    <>
      {narrativeSections.map((section, index) => (
        <NarrativeSection key={section.id} section={section} index={index} />
      ))}
    </>
  );
}
