"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";
import type { ChemicalCategory, ChemicalSummary } from "@/data/msds/types";
import { GhsDiamond } from "./Pictograms";
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
    <div className={`px-4 pt-8 pb-16 mx-auto max-w-7xl md:px-8 ${fontClass(lang)}`}>
      <section className="mb-8">
        <p className="mb-2 text-xs font-bold tracking-widest text-red-600 uppercase">
          MSDS · {ui.count(items.length)}
        </p>
        <h1 className="text-3xl font-black tracking-tight md:text-4xl text-slate-900">
          {ui.title}
        </h1>
        <p className="mt-2 text-slate-600">{ui.subtitle}</p>
      </section>

      {/* 검색 + 분류 필터 */}
      <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-slate-400"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={ui.search}
            className="w-full h-12 pl-11 pr-10 bg-white border shadow-sm outline-none rounded-xl border-slate-200 placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-900/5"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="clear"
              className="absolute p-1 -translate-y-1/2 rounded-full right-3 top-1/2 text-slate-400 hover:bg-slate-100"
            >
              <X size={16} />
            </button>
          )}
        </div>
        {categories.length > 1 && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {(["all", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`h-10 px-4 rounded-full text-sm font-bold whitespace-nowrap border transition-colors ${
                  category === c
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {c === "all"
                  ? ui.all
                  : categoryLabels[c][lang === "ko" ? "ko" : "en"]}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center bg-white border border-dashed rounded-2xl border-slate-300 text-slate-500">
          {ui.empty}
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.id}>
              <ChemicalCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ChemicalCard({ item }: { item: ChemicalSummary }) {
  const { lang } = useLanguage();

  return (
    <Link
      href={`/msds/${item.id}`}
      className="relative flex flex-col h-full p-5 overflow-hidden transition bg-white border shadow-sm group rounded-2xl border-slate-200 hover:shadow-lg hover:-translate-y-0.5 hover:border-slate-300"
    >
      <span
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: item.accent }}
      />

      <div className="flex items-start justify-between gap-3">
        <div
          className="flex items-center justify-center px-3 h-14 min-w-14 rounded-xl text-lg font-black tracking-tight"
          style={{ background: `${item.accent}14`, color: item.accent }}
        >
          {item.formula}
        </div>
        <SignalBadge level={item.signal} />
      </div>

      <h2 className="mt-4 text-xl font-black leading-snug text-slate-900">
        {item.names[lang]}
      </h2>
      <p className="text-sm font-medium text-slate-500">{item.nameEn}</p>

      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 mt-3 text-xs text-slate-500">
        <dt className="font-bold">CAS</dt>
        <dd className="font-mono">{item.cas}</dd>
        <dt className="font-bold">MSDS</dt>
        <dd className="font-mono truncate">{item.msdsNo}</dd>
      </dl>

      <div className="flex items-end justify-between pt-4 mt-auto">
        <div className="flex -ml-1">
          {item.ghs.map((g) => (
            <GhsDiamond key={g} type={g} size={40} />
          ))}
        </div>
        <ChevronRight
          className="transition text-slate-300 group-hover:text-slate-700 group-hover:translate-x-0.5"
          size={22}
        />
      </div>
    </Link>
  );
}
