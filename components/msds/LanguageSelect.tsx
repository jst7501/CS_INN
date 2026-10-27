"use client";

import { Languages } from "lucide-react";
import { supportedLanguages, type LangCode } from "@/data/msds/types";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSelect() {
  const { lang, setLang } = useLanguage();

  return (
    <label className="relative flex items-center gap-2 h-10 pl-3 pr-2 rounded-full border border-slate-200 bg-white hover:border-slate-300 focus-within:ring-2 focus-within:ring-slate-900/10">
      <Languages size={18} className="text-slate-500 shrink-0" />
      <span className="sr-only">Language</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        className="h-full pr-1 text-sm font-bold bg-transparent outline-none cursor-pointer text-slate-800 font-kr"
      >
        {supportedLanguages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
