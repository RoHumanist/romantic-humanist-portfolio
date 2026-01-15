'use client';

import { featuredArticles, type FeaturedArticle } from '@/lib/content';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const platformColors = {
  naver: 'bg-green-500',
  brunch: 'bg-orange-500',
  medium: 'bg-black',
  substack: 'bg-orange-600',
};

function ArticleCard({ article, index }: { article: FeaturedArticle; index: number }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.a
      ref={ref}
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 transition-shadow hover:shadow-2xl">
        {article.thumbnail && (
          <div className="relative aspect-[16/9] bg-slate-100">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`${platformColors[article.platform]} text-white text-xs font-black px-3 py-1 rounded-full uppercase`}
            >
              {article.platform}
            </span>
          </div>
          <h3 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">{article.description}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function FeaturedArticles() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // featuredArticles가 비어있으면 섹션을 렌더링하지 않음
  if (!featuredArticles || featuredArticles.length === 0) {
    return null;
  }

  return (
    <section ref={ref} className="py-32 px-6 light-theme">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Featured <span className="text-blue-600">Articles</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            제가 쓴 대표 글들을 읽어보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
