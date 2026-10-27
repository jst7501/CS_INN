"use client";

import { ChevronDown, Globe } from "lucide-react";
import { supportedLanguages, type LangCode } from "@/data/msds/types";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSelect() {
  const { lang, setLang } = useLanguage();

  return (
    <label className="relative flex items-center h-9 gap-1.5 pl-3 pr-2.5 rounded-full bg-fill">
      <Globe size={15} className="text-sub shrink-0" />
      <span className="sr-only">Language</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        className="h-full pr-4 text-sm font-semibold bg-transparent outline-none appearance-none cursor-pointer text-sub font-kr"
      >
        {supportedLanguages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute pointer-events-none right-2.5 text-mute"
      />
    </label>
  );
}
