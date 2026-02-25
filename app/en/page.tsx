'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Narrative from '@/components/Narrative';
import Transition from '@/components/Transition';
import BentoGrid from '@/components/BentoGrid';
import FeaturedArticles from '@/components/FeaturedArticles';
import Modal from '@/components/Modal';
import Outro from '@/components/Outro';
import LanguageToggle from '@/components/LanguageToggle';
import { LanguageProvider } from '@/lib/LanguageContext';
import { enContent } from '@/lib/content.en';

export default function EnglishHome() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const plaza = document.getElementById('plaza');
      const trigger = document.getElementById('plaza-trigger');
      const outro = document.getElementById('outro');

      if (!plaza || !trigger || !outro) return;

      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (scrollPos > trigger.offsetTop && scrollPos < outro.offsetTop) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (cardId: string) => {
    setSelectedCard(cardId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedCard(null), 300);
  };

  return (
    <LanguageProvider content={enContent}>
      <LanguageToggle />
      <main className="dark-theme">
        <Hero />
        <Narrative />
        <Transition />
        <BentoGrid onCardClick={handleCardClick} />
        <FeaturedArticles />
        <Outro />
        <Modal
          isOpen={modalOpen}
          cardId={selectedCard}
          onClose={handleCloseModal}
        />
      </main>
    </LanguageProvider>
  );
}
