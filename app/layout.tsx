import type { Metadata } from "next";
import {
  Noto_Sans,
  Noto_Sans_KR,
  Noto_Sans_Khmer,
  Noto_Sans_Myanmar,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/components/msds/LanguageProvider";

// 한국어
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-kr",
});

// 베트남어·우즈베크어 (라틴 확장 + 베트남어 성조 기호)
const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-latin",
});

// 캄보디아어(Khmer)
const notoSansKh = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "700"],
  variable: "--font-noto-kh",
});

// 미얀마어(Myanmar)
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
      <body
        className={`${notoSansKr.variable} ${notoSans.variable} ${notoSansKh.variable} ${notoSansMm.variable} bg-white text-ink min-h-screen font-kr antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
