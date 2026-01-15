import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "낭만적 인본주의자 | Romantic Humanist Portfolio",
  description: "우리는 어차피 죽는데 왜 살아야 할까요? 심연에서 광장으로, 낭만적 인본주의자의 사고 체계와 실행력을 탐험하는 서사적 포트폴리오.",
  keywords: ["낭만적 인본주의자", "포트폴리오", "개인 브랜딩", "철학", "인본주의", "블로그"],
  authors: [{ name: "낭만적 인본주의자" }],
  openGraph: {
    title: "낭만적 인본주의자 | Romantic Humanist Portfolio",
    description: "우리는 어차피 죽는데 왜 살아야 할까요?",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "낭만적 인본주의자",
    description: "우리는 어차피 죽는데 왜 살아야 할까요?",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
