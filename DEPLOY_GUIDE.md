# 🚀 5분만에 무료로 배포하기

## 준비물
- GitHub 계정 (없으면 https://github.com 에서 무료 가입)
- 이 프로젝트 폴더

---

## 🎯 배포 3단계

### 1단계: GitHub에 코드 올리기 (2분)

1. **GitHub에서 새 저장소 만들기**
   - https://github.com/new 접속
   - Repository name: `romantic-humanist-portfolio` (원하는 이름)
   - Public 선택 (무료)
   - "Create repository" 클릭

2. **VSCode 터미널 열기**
   - VSCode에서 `Ctrl + ~` (백틱)
   - 또는 메뉴: Terminal → New Terminal

3. **명령어 입력**
   ```bash
   cd romantic-humanist-portfolio

   # Git 설정 (처음 한 번만)
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"

   # 코드 커밋
   git add .
   git commit -m "완성된 포트폴리오"

   # GitHub 저장소 연결 (YOUR_GITHUB_URL을 실제 URL로 변경!)
   # 예: git remote add origin https://github.com/yourusername/romantic-humanist-portfolio.git
   git remote add origin YOUR_GITHUB_URL

   # 업로드!
   git push -u origin main
   ```

### 2단계: Vercel 배포 (2분)

1. **Vercel 가입**
   - https://vercel.com 접속
   - "Sign Up with GitHub" 클릭
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "Add New..." → "Project" 클릭
   - GitHub 저장소 목록에서 `romantic-humanist-portfolio` 찾기
   - "Import" 클릭
   - 아무것도 건드리지 말고 "Deploy" 클릭!

3. **완료!**
   - 1-2분 기다리면 배포 완료
   - `https://your-project-name.vercel.app` 형태의 URL 생성됨
   - 이제 전 세계 어디서나 접속 가능! 🎉

### 3단계: 업데이트하기 (1분)

앞으로 내용을 수정하고 배포하려면:

```bash
cd romantic-humanist-portfolio

# 수정 사항 저장
git add .
git commit -m "대표 글 3개 추가"
git push

# 끝! Vercel이 자동으로 재배포해줌
```

---

## ✅ 체크리스트

배포 전에 확인:
- [x] `lib/content.ts`에서 링크 업데이트
- [x] 이메일 주소 변경
- [ ] 로컬에서 테스트 (http://localhost:3000)
- [ ] 오타 확인
- [ ] 모바일에서 테스트 (Chrome DevTools)

---

## 🌐 커스텀 도메인 연결 (선택)

무료 도메인:
- Freenom (무료 .tk, .ml 도메인)
- GitHub Student Pack (무료 .me 도메인)

유료 도메인 구매 후:
1. Vercel 대시보드 → Settings → Domains
2. 도메인 입력
3. DNS 설정 따라하기
4. 완료!

---

## 💡 팁

- **Preview**: PR 만들면 Vercel이 미리보기 URL 자동 생성
- **Analytics**: Vercel Analytics 무료로 방문자 통계 확인
- **속도**: Vercel은 전 세계 CDN으로 빠름
- **SSL**: HTTPS 자동 적용

---

## 🆘 문제 해결

### "git: command not found"
Git 설치 필요: https://git-scm.com/downloads

### "Permission denied"
```bash
git remote set-url origin https://github.com/username/repo.git
```

### "Build failed"
1. 로컬에서 `npm run build` 실행
2. 에러 확인 후 수정
3. 다시 push

### "Cannot read property"
`package.json`의 dependencies 확인:
```bash
npm install
```

---

## 🎊 완료 후

1. URL을 친구들에게 자랑하기
2. 링크드인 프로필에 추가
3. 명함에 QR 코드로 넣기
4. 이력서에 링크 추가

---

**5분이면 전 세계가 내 포트폴리오를 볼 수 있습니다!**

궁금한 점 있으면 MAINTENANCE_GUIDE.md 참고하세요.
