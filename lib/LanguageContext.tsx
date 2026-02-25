'use client';

import { createContext, useContext } from 'react';
import { koContent, type SiteContent } from './content';

const LanguageContext = createContext<SiteContent>(koContent);

export function useContent(): SiteContent {
  return useContext(LanguageContext);
}

export function LanguageProvider({
  content,
  children,
}: {
  content: SiteContent;
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider value={content}>
      {children}
    </LanguageContext.Provider>
  );
}
