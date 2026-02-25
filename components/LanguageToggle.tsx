'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageToggle() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
      <Link
        href="/"
        className={`text-xs font-black tracking-widest uppercase transition-colors ${
          !isEnglish ? 'text-white' : 'text-white/30 hover:text-white/60'
        }`}
      >
        KO
      </Link>
      <span className="text-white/20 text-xs mx-1">|</span>
      <Link
        href="/en"
        className={`text-xs font-black tracking-widest uppercase transition-colors ${
          isEnglish ? 'text-white' : 'text-white/30 hover:text-white/60'
        }`}
      >
        EN
      </Link>
    </div>
  );
}
