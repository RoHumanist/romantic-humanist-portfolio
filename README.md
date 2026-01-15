# 낭만적 인본주의자 | Romantic Humanist Portfolio

> 심연에서 광장으로 - 서사적 게이트웨이 포트폴리오

철학적 질문에서 시작해 개인의 사고 체계와 실행력을 자연스럽게 전달하는 인터랙티브 포트폴리오입니다.

## 🎯 프로젝트 특징

- **서사적 스크롤텔링**: 강렬한 철학적 질문으로 시작해 몰입감 있는 스토리 전개
- **다크/라이트 테마 자동 전환**: 스크롤 위치에 따라 자연스러운 테마 전환
- **벤토 그리드 UI**: 애플 디자인 시스템에서 영감을 받은 카드 레이아웃
- **모달 시스템**: 각 에피소드의 상세 내용을 우아하게 표시
- **완벽한 모바일 반응형**: 모든 디바이스에서 최적화된 경험
- **데이터 기반 관리**: 콘텐츠를 `lib/content.ts`에서 쉽게 관리

## 🚀 빠른 시작

### 1. 개발 서버 실행

\`\`\`bash
npm install
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 2. 프로덕션 빌드

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 콘텐츠 수정 방법

모든 콘텐츠는 \`lib/content.ts\` 파일에서 관리됩니다.

### Hero 섹션 수정

\`\`\`typescript
export const heroData = {
  title: '낭만적 인본주의자',
  subtitle: '우리는 어차피 죽는데,\n왜 살아야 할까요?',
};
\`\`\`

### 대표 글 추가

\`\`\`typescript
export const featuredArticles: FeaturedArticle[] = [
  {
    title: '글 제목',
    description: '글에 대한 간단한 설명',
    url: 'https://your-blog.com/article',
    platform: 'naver', // 'naver' | 'brunch' | 'medium' | 'substack'
    thumbnail: '/images/article-thumbnail.jpg',
  },
];
\`\`\`

### 외부 링크 수정

\`\`\`typescript
export const externalLinks: ExternalLink[] = [
  { name: '네이버 블로그', url: 'https://blog.naver.com/your-id' },
  { name: '브런치', url: 'https://brunch.co.kr/@your-id' },
];
\`\`\`

### 이메일 수정

\`\`\`typescript
export const contactEmail = 'your-email@example.com';
\`\`\`

## 📦 프로젝트 구조

\`\`\`
romantic-humanist-portfolio/
├── app/
│   ├── layout.tsx          # 레이아웃 및 메타데이터
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 글로벌 스타일
├── components/
│   ├── Hero.tsx             # 히어로 섹션
│   ├── Narrative.tsx        # 서사 섹션
│   ├── Transition.tsx       # 전환 섹션
│   ├── BentoGrid.tsx        # 벤토 그리드
│   ├── Modal.tsx            # 모달
│   ├── FeaturedArticles.tsx # 대표 글 섹션
│   └── Outro.tsx            # 아웃트로 섹션
├── lib/
│   └── content.ts           # 모든 콘텐츠 데이터
└── public/
    └── images/              # 이미지 파일
\`\`\`

## 🚢 배포

### Vercel (추천)

1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에서 Import
3. 자동 배포 완료!

## 🛠 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion

---

Made with ❤️ by 낭만적 인본주의자
