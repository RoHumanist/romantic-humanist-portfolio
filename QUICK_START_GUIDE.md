# 🚀 빠른 시작 가이드

## 1. 현재 상태

개발 서버가 이미 실행 중입니다!
- **로컬**: http://localhost:3000
- **네트워크**: http://192.168.10.100:3000

브라우저에서 위 주소로 접속하여 포트폴리오를 확인하세요.

## 2. 콘텐츠 수정하기

### 가장 먼저 할 일

1. **lib/content.ts** 파일을 열어 다음 내용을 본인 것으로 변경하세요:

#### 연락처 정보
```typescript
// 파일 맨 아래에 있습니다
export const contactEmail = 'your-email@example.com';
```

#### 외부 링크
```typescript
export const externalLinks: ExternalLink[] = [
  { name: '네이버 블로그', url: '#' },  // '#'을 실제 URL로 변경
  { name: '브런치', url: '#' },
  { name: '미디움', url: '#' },
  // ...
];
```

#### 대표 글 추가하기
```typescript
export const featuredArticles: FeaturedArticle[] = [
  {
    title: '여기에 대표 글 제목을 넣으세요',
    description: '글에 대한 간단한 설명',
    url: 'https://your-blog.com/article-link',
    platform: 'naver',  // 'naver', 'brunch', 'medium', 'substack' 중 선택
    thumbnail: '/images/article-1.jpg',
  },
  // 글을 더 추가하려면 위 객체를 복사해서 추가하세요
];
```

### 썸네일 이미지 추가하기

1. 대표 글의 썸네일 이미지를 준비합니다
2. `public/images/` 폴더를 만듭니다 (없으면)
3. 이미지를 해당 폴더에 넣습니다 (예: `article-1.jpg`)
4. `content.ts`에서 경로 지정: `thumbnail: '/images/article-1.jpg'`

## 3. 개발 서버 재시작하기

콘텐츠를 수정한 후에는 자동으로 반영됩니다. 만약 서버를 재시작해야 한다면:

```bash
# 현재 터미널에서 Ctrl+C로 중지
cd romantic-humanist-portfolio
npm run dev
```

## 4. 배포하기

### Vercel로 배포 (가장 쉬움, 추천!)

1. [Vercel](https://vercel.com)에 가입하고 GitHub 계정 연결
2. GitHub에 프로젝트 푸시:
   ```bash
   cd romantic-humanist-portfolio
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. Vercel에서 "New Project" → GitHub 저장소 선택 → Deploy
4. 완료! 자동으로 도메인이 생성됩니다

### 프로덕션 빌드 테스트

배포 전에 로컬에서 테스트하려면:

```bash
npm run build
npm start
```

## 5. 주요 수정 포인트

### 카드 내용 수정
`lib/content.ts`의 `bentoCards` 배열에서 각 카드의 내용을 수정할 수 있습니다.

### 카드 색상 변경
`app/globals.css`에서 각 카드의 배경색을 변경:
```css
.card-music {
  background-color: #E2E2F0;  /* 원하는 색상으로 변경 */
  color: #4A4A6A;
}
```

### 메타데이터 (SEO) 수정
`app/layout.tsx`에서 페이지 제목, 설명 등을 수정:
```typescript
export const metadata: Metadata = {
  title: "당신의 이름 | 포트폴리오",
  description: "당신만의 설명...",
  // ...
};
```

## 6. 문제 해결

### 모듈을 찾을 수 없다는 오류
```bash
npm install
```

### 포트가 이미 사용 중이라는 오류
다른 포트로 실행:
```bash
PORT=3001 npm run dev
```

### 변경사항이 반영되지 않을 때
1. 브라우저 새로고침 (Ctrl+R 또는 Cmd+R)
2. 하드 리프레시 (Ctrl+Shift+R 또는 Cmd+Shift+R)
3. 서버 재시작

## 7. 다음 단계

- [ ] `lib/content.ts`에서 모든 `#` 링크를 실제 URL로 변경
- [ ] `contactEmail` 업데이트
- [ ] 대표 글 추가 및 썸네일 업로드
- [ ] 프로덕션 빌드 테스트
- [ ] Vercel에 배포
- [ ] 커스텀 도메인 연결 (선택사항)

---

문제가 생기면 `README.md` 파일을 참고하세요!
