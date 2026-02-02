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
      className="section-center max-w-4xl mx-auto items-start text-left dark-theme px-6 md:px-8"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2
        className={`text-2xl md:text-3xl font-black mb-8 md:mb-12 leading-tight ${
          index === 0 ? 'text-blue-500 italic' : 'text-blue-500'
        }`}
      >
        {index === 0 ? `"${section.title}"` : section.title}
      </h2>
      <div className="text-lg md:text-xl text-slate-300 leading-relaxed space-y-6 md:space-y-8">
        {section.paragraphs.map((paragraph, idx) => {
          // 특별한 스타일링이 필요한 문단 처리
          const isBoldAnswer = paragraph.includes('"아무도 알 수가 없다"');
          const isHighlight = paragraph.includes('"사람"에');

          return (
            <p
              key={idx}
              className={`
                ${
                  isBoldAnswer
                    ? 'text-white font-black text-2xl md:text-3xl py-6 md:py-8 tracking-tight'
                    : ''
                }
                ${
                  isHighlight
                    ? 'text-white font-black text-xl md:text-2xl pt-6 md:pt-8 tracking-tight'
                    : ''
                }
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
