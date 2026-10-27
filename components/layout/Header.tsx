import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import LanguageSelect from "@/components/msds/LanguageSelect";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b no-print bg-white/90 backdrop-blur border-slate-200">
      <div className="flex items-center justify-between h-16 gap-3 px-4 mx-auto max-w-7xl md:px-8">
        <Link href="/" className="flex items-center min-w-0 gap-3">
          <Image
            src={logo}
            alt="(주)씨에스이노베이션 로고"
            className="w-10 h-10 shrink-0"
            priority
          />
          <div className="flex flex-col min-w-0">
            <span className="text-[15px] font-black leading-tight tracking-tight truncate md:text-lg text-slate-900">
              (주) 씨에스이노베이션
            </span>
            <span className="hidden sm:block text-[10px] font-bold tracking-wider text-slate-500 truncate">
              CS INNOVATION · SAFETY MANAGEMENT
            </span>
          </div>
        </Link>

        <LanguageSelect />
      </div>
    </header>
  );
}
