import type { Metadata } from "next";
// 1. 필요한 폰트들을 가져옵니다.
import {
  Noto_Sans_KR,
  Noto_Sans_Khmer,
  Noto_Sans_Myanmar,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

// 2. 한국어 폰트 설정
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-noto-kr", // CSS 변수로 사용할 이름
});

// 3. 캄보디아어(Khmer) 폰트 설정
const notoSansKh = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "700"],
  variable: "--font-noto-kh",
});

// 4. 미얀마어(Myanmar) 폰트 설정
const notoSansMm = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "700"],
  variable: "--font-noto-mm",
});

export const metadata: Metadata = {
  title: "(주) 씨에스이노베이션 안전 대시보드",
  description: "화학물질 안전 보건 자료 (MSDS) 뷰어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* 5. body 태그에 폰트 변수들을 모두 넣어줍니다 */}
      <body
        className={`${notoSansKr.variable} ${notoSansKh.variable} ${notoSansMm.variable} bg-slate-50 min-h-screen font-kr`}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
