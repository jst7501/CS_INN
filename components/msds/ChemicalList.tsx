"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";
import type { ChemicalCategory, ChemicalSummary } from "@/data/msds/types";
import { SignalBadge } from "./SignalBadge";
import { fontClass, useLanguage, useUiText } from "./LanguageProvider";

const categoryLabels: Record<ChemicalCategory, { ko: string; en: string }> = {
  acid: { ko: "산", en: "Acids" },
  base: { ko: "염기", en: "Bases" },
  solvent: { ko: "용제", en: "Solvents" },
  gas: { ko: "가스", en: "Gases" },
  other: { ko: "기타", en: "Others" },
};

export default function ChemicalList({ items }: { items: ChemicalSummary[] }) {
  const { lang } = useLanguage();
  const ui = useUiText();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ChemicalCategory | "all">("all");

  const categories = useMemo(
    () =>
      (Object.keys(categoryLabels) as ChemicalCategory[]).filter((c) =>
        items.some((i) => i.category === c),
      ),
    [items],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!q) return true;
      const haystack = [
        ...Object.values(item.names),
        item.nameEn,
        item.formula,
        item.formula.normalize("NFKD"), // H₂SO₄ → H2SO4 로도 검색 가능
        item.cas,
        item.msdsNo,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [items, query, category]);

  return (
    <div className={`mx-auto max-w-[480px] pb-16 ${fontClass(lang)}`}>
      <section className="px-5 pt-6 pb-5">
        <h1 className="text-[26px] font-bold leading-snug tracking-tight text-ink">
          {ui.title}
        </h1>
        <p className="mt-1.5 text-[15px] leading-relaxed text-sub whitespace-pre-line">
          {ui.subtitle}
        </p>
      </section>

      {/* 검색 */}
      <div className="px-5">
        <div className="relative">
          <Search
            size={18}
            className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-mute"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={ui.search}
            className="w-full h-12 pl-11 pr-10 text-[15px] outline-none rounded-2xl bg-fill text-ink placeholder:text-mute"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="clear"
              className="absolute flex items-center justify-center w-5 h-5 -translate-y-1/2 rounded-full right-4 top-1/2 bg-mute text-white"
            >
              <X size={12} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>

      {/* 분류 */}
      {categories.length > 1 && (
        <div className="flex gap-2 px-5 mt-3 overflow-x-auto no-scrollbar">
          {(["all", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`h-9 px-4 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                category === c ? "bg-ink text-white" : "bg-fill text-sub"
              }`}
            >
              {c === "all" ? ui.all : categoryLabels[c][lang === "ko" ? "ko" : "en"]}
            </button>
          ))}
        </div>
      )}

      <p className="px-5 mt-7 mb-1 text-[13px] font-semibold text-mute">
        {ui.count(filtered.length)}
      </p>

      {filtered.length === 0 ? (
        <p className="px-5 py-16 text-center text-[15px] text-mute">{ui.empty}</p>
      ) : (
        <ul>
          {filtered.map((item) => (
            <li key={item.id}>
              <ChemicalRow item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ChemicalRow({ item }: { item: ChemicalSummary }) {
  const { lang } = useLanguage();

  return (
    <Link
      href={`/msds/${item.id}`}
      className="flex items-center gap-4 px-5 py-3.5 transition-colors active:bg-fill"
    >
      <div
        className="flex items-center justify-center w-12 h-12 text-[13px] font-bold tracking-tight rounded-2xl shrink-0"
        style={{ background: `${item.accent}1a`, color: item.accent }}
      >
        {item.formula}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[17px] font-semibold truncate text-ink">
          {item.names[lang]}
        </p>
        <p className="text-[14px] truncate text-mute">
          {item.nameEn} · CAS {item.cas.split(",")[0]}
        </p>
      </div>

      <SignalBadge level={item.signal} />
      <ChevronRight size={18} className="-ml-1 shrink-0 text-line" />
    </Link>
  );
}
