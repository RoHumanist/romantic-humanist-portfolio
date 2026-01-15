'use client';

import { bentoCards, plazaHeader } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BentoGridProps {
  onCardClick: (cardId: string) => void;
}

export default function BentoGrid({ onCardClick }: BentoGridProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div id="plaza" className="py-32 px-6 light-theme" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.header
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
            {plazaHeader.main} <br />
            and <span className="text-blue-600">{plazaHeader.highlight}</span>
          </h3>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
          {bentoCards.map((card, index) => {
            const isFullWidth = card.id === 'tmi';
            const isPrinciples = card.id === 'principles';

            return (
              <motion.div
                key={card.id}
                className={`bento-card ${card.colorClass} p-8 md:p-12 rounded-[3.5rem] cursor-pointer ${
                  isFullWidth ? 'md:col-span-2' : ''
                } ${card.id === 'tmi' ? 'border border-slate-200' : ''}`}
                onClick={() => onCardClick(card.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
                }}
              >
                {isFullWidth ? (
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                      <h4 className="text-4xl font-black tracking-tighter leading-none mb-4">
                        {card.title}
                      </h4>
                      <p className="text-slate-500 font-bold italic">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-100 px-4 py-2 rounded-full text-xs font-black text-slate-500">
                        #아스날우승필수
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-full text-xs font-black text-slate-500">
                        #페퍼톤스
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-full text-xs font-black text-slate-500">
                        #VibeCoding
                      </span>
                    </div>
                  </div>
                ) : isPrinciples ? (
                  <>
                    <h4 className="text-xl font-black uppercase tracking-[0.4em] opacity-40 mb-6 leading-none">
                      {card.subtitle}
                    </h4>
                    <p className="text-3xl font-black italic">{card.title}</p>
                    <p className="opacity-70 mt-4 font-bold text-sm italic">
                      제 안의 문장들
                    </p>
                  </>
                ) : (
                  <>
                    {card.emoji && <span className="text-5xl">{card.emoji}</span>}
                    <h4 className="text-2xl font-black mt-10 leading-tight whitespace-pre-line">
                      {card.title}
                    </h4>
                    <p className="opacity-70 mt-4 font-bold text-sm italic">
                      {card.subtitle}
                    </p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
