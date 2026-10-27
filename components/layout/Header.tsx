import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import LanguageSelect from "@/components/msds/LanguageSelect";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="flex items-center justify-between h-14 gap-3 px-5 mx-auto max-w-[480px]">
        <Link href="/" className="flex items-center min-w-0 gap-2">
          <Image
            src={logo}
            alt="(주)씨에스이노베이션 로고"
            className="w-7 h-7 shrink-0"
            priority
          />
          <span className="text-[15px] font-bold truncate text-ink">
            씨에스이노베이션
          </span>
        </Link>

        <LanguageSelect />
      </div>
    </header>
  );
}
