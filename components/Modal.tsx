'use client';

import { bentoCards } from '@/lib/content';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  cardId: string | null;
  onClose: () => void;
}

export default function Modal({ isOpen, cardId, onClose }: ModalProps) {
  const card = bentoCards.find((c) => c.id === cardId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!card) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/96 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white text-slate-900 max-w-[850px] w-full rounded-[3rem] p-8 md:p-16 relative max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-8 md:top-12 right-8 md:right-12 text-5xl font-light text-slate-300 hover:text-slate-900 transition-colors"
              onClick={onClose}
            >
              ×
            </button>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-10 leading-tight text-slate-900 tracking-tighter">
                {card.fullContent.title}
              </h2>
              {card.fullContent.subtitle && (
                <p className="text-xl font-black mb-8 italic text-blue-600">
                  {card.fullContent.subtitle}
                </p>
              )}
              <div
                className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: card.fullContent.content }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
