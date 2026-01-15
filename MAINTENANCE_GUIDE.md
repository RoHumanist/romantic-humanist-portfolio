# 🛠 유지보수 가이드

## 📐 디자인 원칙

### 1. 서사적 흐름 (Narrative Flow)
- **Dark → Light → Dark** 구조 유지
  - Intro/Narrative: 다크 테마 (철학적 깊이)
  - Plaza/Featured: 라이트 테마 (밝은 실행력)
  - Outro: 다크 테마 (진지한 연결)

### 2. 벤토 그리드 철학
- **둥근 모서리 (3.5rem)**: 인본주의적 따뜻함
- **차분한 파스텔 톤**: 과하지 않은 색감
- **카드당 고유 색상**: 각 이야기의 개성 표현

### 3. 타이포그래피
- **Pretendard**: 한글 가독성 최우선
- **큰 제목 (65pt Hero)**: 압도적 첫인상
- **계층 구조**: Black → Bold → Regular

---

## ✅ 질문별 답변

### Q1. 카드/글 추가하기 쉬운가?
**✅ 네! 매우 쉽습니다.**

#### 벤토 카드 추가
`lib/content.ts`의 `bentoCards` 배열에 추가만 하면 됩니다:

```typescript
{
  id: 'new-card',
  emoji: '🎨',
  title: '새로운 카드\n제목',
  subtitle: '부제목',
  colorClass: 'card-new',  // CSS에 색상 추가 필요
  fullContent: {
    title: '상세 제목',
    subtitle: '상세 부제목',
    content: `<p>HTML 형식의 내용...</p>`
  }
}
```

그리고 `app/globals.css`에 색상 추가:
```css
.card-new {
  background-color: #F0F0F0;
  color: #444444;
}
```

#### 대표 글 추가
`lib/content.ts`의 `featuredArticles` 배열에 추가:

```typescript
{
  title: '글 제목',
  description: '간단한 설명',
  url: '글 링크',
  platform: 'naver',
  thumbnail: '/images/thumbnail.jpg'
}
```

### Q2. 디자인/콘텐츠 수정 용이한가?
**✅ 네! 데이터 중심 설계입니다.**

- **모든 텍스트**: `lib/content.ts` 한 곳에서 관리
- **색상**: `app/globals.css`에서 카드별로 수정
- **레이아웃**: 컴포넌트별로 분리되어 있음

### Q3. 인터랙티브 디자인 추가 가능한가?
**✅ 네! Framer Motion 사용 중입니다.**

예시:
```typescript
// components/BentoGrid.tsx에서
<motion.div
  whileHover={{ scale: 1.05 }}  // 호버 시 확대
  whileTap={{ scale: 0.95 }}    // 클릭 시 축소
>
```

---

## 🎯 컨텐츠 업데이트 하기

### 1. 외부 링크 업데이트
```typescript
// lib/content.ts
export const externalLinks: ExternalLink[] = [
  { name: '네이버 블로그', url: 'https://blog.naver.com/romantichumanist' },
  { name: '브런치', url: 'https://brunch.co.kr/@skyat23' },
  { name: '미디움', url: 'https://medium.com/@Romantic_Humanist' },
  { name: 'Substack', url: 'https://substack.com/@rohumanist' },
  { name: 'X (Twitter)', url: 'https://x.com/RoHumanist' },
  { name: 'Thread', url: 'https://www.threads.com/@romantic_humanist' },
];
```

### 2. 이메일 업데이트
```typescript
// lib/content.ts
export const contactEmail = 'skyat23@naver.com';
```

---

## 📱 모바일 최적화

**✅ 완벽하게 반응형입니다!**

테스트된 브레이크포인트:
- **768px 이하**: 카드 1열, 작은 패딩
- **768px 이상**: 카드 2열
- **1024px 이상**: 카드 2-3열 (TMI는 풀 너비)

Chrome DevTools로 테스트하기:
1. F12 → 모바일 아이콘 클릭
2. iPhone, iPad 등 테스트

---

## 🚀 배포 (무료!)

### 방법 1: Vercel (추천, 가장 쉬움)

1. **GitHub 계정 만들기** (없으면)

2. **GitHub에 코드 올리기**:
```bash
cd romantic-humanist-portfolio

# Git 초기화 (이미 되어있음)
git add .
git commit -m "완성된 포트폴리오"

# GitHub에 새 저장소 만들고 URL 복사
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

3. **Vercel 배포**:
   - https://vercel.com 접속
   - "Sign Up with GitHub"
   - "New Project" → GitHub 저장소 선택
   - "Deploy" 클릭
   - 끝! 자동으로 URL 생성됨

4. **커스텀 도메인** (선택):
   - Vercel 대시보드에서 도메인 연결 가능
   - 또는 `your-name.vercel.app` 무료 사용

### 방법 2: Netlify (대안)

1. https://netlify.com 접속
2. "Add new site" → "Import from Git"
3. GitHub 연결 → 저장소 선택
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### 방법 3: GitHub Pages

1. `next.config.ts` 수정:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. 빌드 및 배포:
```bash
npm run build
# out 폴더를 GitHub Pages에 배포
```

**추천**: Vercel이 가장 쉽고 Next.js와 찰떡궁합입니다!

---

## 📝 자주 하는 작업

### 새 글 추가 (5분 컷)

1. 썸네일 이미지를 `public/images/article-X.jpg`에 저장
2. `lib/content.ts` 열기
3. `featuredArticles` 배열에 추가:
```typescript
{
  title: '새 글 제목',
  description: '한 줄 설명',
  url: '글 전체 URL',
  platform: 'naver',
  thumbnail: '/images/article-X.jpg'
}
```
4. 저장하면 자동 반영!

### 카드 내용 수정

1. `lib/content.ts` 열기
2. `bentoCards` 배열에서 원하는 카드 찾기
3. `fullContent.content` 부분 수정
4. HTML 태그 사용 가능: `<p>`, `<strong>`, `<ul>`, `<li>` 등

### 색상 테마 변경

`app/globals.css`에서:
```css
.card-music {
  background-color: #원하는색상;
  color: #텍스트색상;
}
```

---

## 🎨 디자인 일관성 규칙

### DO ✅
- 둥근 모서리 유지 (2.5rem ~ 3.5rem)
- 차분한 파스텔 톤 사용
- 큰 타이포그래피 (임팩트!)
- 충분한 여백 (패딩)
- 검은색 배경은 순수 `#000000`

### DON'T ❌
- 네온/형광 색상 피하기
- 너무 작은 글씨 (최소 16px)
- 과도한 애니메이션
- 복잡한 그라데이션
- 3가지 이상 색상 섞기

---

## 🔧 문제 해결

### 변경사항이 안 보일 때
```bash
# 브라우저 하드 리프레시
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

### 서버 재시작
```bash
# 터미널에서 Ctrl + C
cd romantic-humanist-portfolio
npm run dev
```

### 배포 후 업데이트
```bash
git add .
git commit -m "업데이트 내용"
git push
# Vercel이 자동으로 재배포!
```

---

## 📂 파일 구조 요약

```
수정 많이 할 파일:
- lib/content.ts        ← 모든 텍스트/링크 여기!
- public/images/        ← 썸네일 이미지 여기!

가끔 수정할 파일:
- app/globals.css       ← 색상 변경
- components/*.tsx      ← 레이아웃/구조 변경

절대 건드리지 말 것:
- node_modules/
- .next/
- package-lock.json
```

---

## 💡 프로 팁

1. **정기적으로 커밋하기**
   ```bash
   git add .
   git commit -m "대표 글 3개 추가"
   git push
   ```

2. **백업은 GitHub가 해줌**
   - 실수해도 이전 버전으로 되돌리기 가능

3. **Analytics 추가하고 싶다면**
   - Vercel Analytics (무료)
   - Google Analytics 4

4. **성능 최적화**
   - 이미지는 WebP 포맷 사용
   - 썸네일은 1200x630px 권장

---

## 🎯 다음 단계 체크리스트

- [ ] `lib/content.ts`에서 링크/이메일 업데이트
- [ ] 대표 글 추가 (썸네일 포함)
- [ ] GitHub에 푸시
- [ ] Vercel 배포
- [ ] 실제 기기에서 테스트
- [ ] 주변 사람들에게 자랑하기! 🎉

---

막히는 부분 있으면 이 가이드 참고하시고,
그래도 안 되면 README.md 확인하세요!

Made with ❤️ by 낭만적 인본주의자
