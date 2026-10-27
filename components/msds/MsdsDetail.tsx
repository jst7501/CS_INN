"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  ChevronDown,
  ChevronsDownUp,
  ChevronsUpDown,
  Eye,
  Hand,
  HeartPulse,
  Printer,
  Scale,
  Shield,
  ShieldCheck,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { ChemicalEntry, MSDSContent, SectionItem } from "@/data/msds/types";
import { GhsDiamond, UnPlacard } from "./Pictograms";
import { SignalBadge } from "./SignalBadge";
import { fontClass, useLanguage, useUiText } from "./LanguageProvider";

const SECTION_NUMBERS = Array.from({ length: 16 }, (_, i) => i + 1);
const DEFAULT_OPEN = [2, 4];

/** "1. 🏢 화학제품과 회사 정보" → "화학제품과 회사 정보" */
function sectionTitle(t: MSDSContent, n: number) {
  const raw = t.sections[`section${n}` as keyof MSDSContent["sections"]];
  return raw
    .replace(/^\s*\d+\.\s*/, "")
    .replace(/^[^\p{L}\p{N}(]+/u, "")
    .trim();
}

function stripDecoration(text: string) {
  return text.replace(/^[^\p{L}\p{N}(]+/u, "").trim();
}

export default function MsdsDetail({ chemical }: { chemical: ChemicalEntry }) {
  const { lang } = useLanguage();
  const ui = useUiText();
  const t = chemical.data[lang];

  const [open, setOpen] = useState<Set<number>>(() => new Set(DEFAULT_OPEN));
  const [active, setActive] = useState(1);

  const toggle = (n: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });

  const jumpTo = (n: number) => {
    setOpen((prev) => new Set(prev).add(n));
    // 펼쳐진 뒤 위치로 이동
    requestAnimationFrame(() =>
      document.getElementById(`section-${n}`)?.scrollIntoView(),
    );
  };

  // 현재 화면에 보이는 섹션을 목차에 표시
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(Number((visible[0].target as HTMLElement).dataset.section));
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    document
      .querySelectorAll("[data-section]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const allOpen = open.size === SECTION_NUMBERS.length;

  return (
    <div className={`px-4 pt-6 pb-16 mx-auto max-w-7xl md:px-8 ${fontClass(lang)}`}>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 mb-4 text-sm font-bold no-print text-slate-500 hover:text-slate-900"
      >
        <ArrowLeft size={16} /> {ui.back}
      </Link>

      <Hero chemical={chemical} t={t} />
      <QuickSummary t={t} />

      {/* 모바일: 섹션 바로가기 바 */}
      <nav className="sticky z-30 -mx-4 px-4 py-2 mb-4 border-b no-print top-16 lg:hidden bg-slate-100/95 backdrop-blur border-slate-200">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {SECTION_NUMBERS.map((n) => (
            <button
              key={n}
              onClick={() => jumpTo(n)}
              className={`shrink-0 w-9 h-9 rounded-full text-sm font-bold transition-colors ${
                active === n
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </nav>

      <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-8">
        {/* 데스크톱: 목차 */}
        <aside className="hidden lg:block no-print">
          <div className="sticky flex flex-col top-20 max-h-[calc(100vh-6rem)]">
            <p className="px-3 mb-2 text-xs font-bold tracking-widest uppercase text-slate-400">
              {ui.contents}
            </p>
            <ol className="flex-1 pr-1 space-y-0.5 overflow-y-auto">
              {SECTION_NUMBERS.map((n) => (
                <li key={n}>
                  <button
                    onClick={() => jumpTo(n)}
                    className={`flex w-full items-start gap-2.5 px-3 py-2 rounded-lg text-left text-sm transition-colors ${
                      active === n
                        ? "bg-white text-slate-900 font-bold shadow-sm"
                        : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`w-6 shrink-0 text-right font-mono text-xs leading-5 ${
                        active === n ? "text-red-600" : "text-slate-400"
                      }`}
                    >
                      {String(n).padStart(2, "0")}
                    </span>
                    <span className="leading-5">{sectionTitle(t, n)}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="flex justify-end gap-2 mb-3 no-print">
            <ToolbarButton
              icon={allOpen ? ChevronsDownUp : ChevronsUpDown}
              label={allOpen ? ui.collapseAll : ui.expandAll}
              onClick={() =>
                setOpen(allOpen ? new Set() : new Set(SECTION_NUMBERS))
              }
            />
            <ToolbarButton
              icon={Printer}
              label={ui.print}
              onClick={() => window.print()}
            />
          </div>

          <div className="space-y-3">
            {SECTION_NUMBERS.map((n) => (
              <SectionCard
                key={n}
                n={n}
                title={sectionTitle(t, n)}
                open={open.has(n)}
                onToggle={() => toggle(n)}
              >
                <SectionBody n={n} t={t} chemical={chemical} />
              </SectionCard>
            ))}
          </div>

          <footer className="pt-8 mt-10 text-xs text-center border-t text-slate-400 border-slate-200">
            <p>Translated for Foreign Workers Safety Support</p>
            <p className="mt-1">Data Source: {t.header.source}</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 상단 영역
// ----------------------------------------------------------------------
function Hero({ chemical, t }: { chemical: ChemicalEntry; t: MSDSContent }) {
  return (
    <header className="relative p-6 mb-4 overflow-hidden bg-white border shadow-sm md:p-8 rounded-3xl border-slate-200">
      <span
        className="absolute inset-y-0 left-0 w-2"
        style={{ background: chemical.accent }}
      />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <SignalBadge
              level={chemical.signal}
              text={stripDecoration(t.header.signalWord)}
              large
            />
            <span
              className="px-2 py-1 text-sm font-black rounded-md"
              style={{
                background: `${chemical.accent}14`,
                color: chemical.accent,
              }}
            >
              {chemical.formula}
            </span>
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl text-slate-900">
            {stripDecoration(t.header.productName)}
          </h1>
          <p className="mt-1 text-lg font-medium text-slate-500">
            {t.header.productNameEn}
          </p>
          <dl className="flex flex-wrap mt-4 text-xs gap-x-6 gap-y-1 text-slate-500">
            <div className="flex gap-2">
              <dt className="font-bold">MSDS No.</dt>
              <dd className="font-mono">{t.header.msdsNo}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold">Rev.</dt>
              <dd>{t.header.revision}</dd>
            </div>
          </dl>
        </div>

        <div className="shrink-0">
          <p className="mb-2 text-xs font-bold tracking-widest text-red-600 uppercase md:text-center">
            {stripDecoration(t.sections.ghs)}
          </p>
          <div className="flex flex-wrap gap-3">
            {chemical.ghs.map((g) => (
              <GhsDiamond key={g} type={g} size={76} showLabel />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickSummary({ t }: { t: MSDSContent }) {
  const ui = useUiText();
  const firstAid: { icon: LucideIcon; label: string; text: string }[] = [
    { icon: Eye, label: ui.eye, text: t.content.firstAid.eye },
    { icon: Hand, label: ui.skin, text: t.content.firstAid.skin },
    { icon: Wind, label: ui.inhalation, text: t.content.firstAid.inhalation },
    { icon: Ban, label: ui.ingestion, text: t.content.firstAid.ingestion },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-3">
      <div className="p-5 border border-red-200 bg-red-50 rounded-2xl">
        <h2 className="flex items-center gap-2 mb-3 font-black text-red-700">
          <AlertTriangle size={18} /> {ui.hazards}
        </h2>
        <ul className="space-y-1.5 text-sm font-semibold text-red-950">
          {t.content.hazards.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 border border-emerald-200 bg-emerald-50 rounded-2xl">
        <h2 className="flex items-center gap-2 mb-3 font-black text-emerald-700">
          <HeartPulse size={18} /> {ui.firstAid}
        </h2>
        <ul className="space-y-3 text-sm">
          {firstAid.map(({ icon: Icon, label, text }) => (
            <li key={label} className="flex gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full shrink-0 text-emerald-600">
                <Icon size={16} />
              </span>
              <div>
                <p className="font-bold text-emerald-900">{label}</p>
                <p className="text-emerald-950/80">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 border border-sky-200 bg-sky-50 rounded-2xl">
        <h2 className="flex items-center gap-2 mb-3 font-black text-sky-700">
          <ShieldCheck size={18} /> {ui.ppe}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {t.content.ppe.map((p, i) => (
            <li
              key={i}
              className="px-3 py-2 text-sm font-bold bg-white border rounded-lg text-sky-900 border-sky-100"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 16개 섹션
// ----------------------------------------------------------------------
function SectionCard({
  n,
  title,
  open,
  onToggle,
  children,
}: {
  n: number;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section
      id={`section-${n}`}
      data-section={n}
      className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-200"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex items-center w-full gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center justify-center text-sm font-black text-white rounded-lg w-9 h-9 shrink-0 bg-slate-900">
          {n}
        </span>
        <span className="flex-1 font-bold md:text-lg text-slate-900">
          {title}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-slate-400 transition-transform no-print ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div data-body hidden={!open} className="px-5 pt-1 pb-5 md:pl-[4.25rem]">
        {children}
      </div>
    </section>
  );
}

function KeyValueList({
  items,
  columns = 1,
}: {
  items: SectionItem[];
  columns?: 1 | 2;
}) {
  return (
    <dl
      className={`grid grid-cols-1 gap-x-8 ${columns === 2 ? "md:grid-cols-2" : ""}`}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-1 gap-1 py-3 border-b sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-4 border-slate-100"
        >
          <dt className="text-sm font-bold text-slate-500">{item.label}</dt>
          <dd className="text-slate-800 whitespace-pre-line">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function SubHeading({
  icon: Icon,
  children,
  className = "text-slate-700",
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`flex items-center gap-2 mb-3 font-bold ${className}`}>
      <Icon size={18} /> {children}
    </h3>
  );
}

function SectionBody({
  n,
  t,
  chemical,
}: {
  n: number;
  t: MSDSContent;
  chemical: ChemicalEntry;
}) {
  const ui = useUiText();
  const c = t.content;

  switch (n) {
    case 2:
      return (
        <div className="space-y-6">
          <div>
            <SubHeading icon={AlertTriangle} className="text-red-700">
              {ui.hazards}
            </SubHeading>
            <ul className="space-y-2">
              {c.hazards.map((h, i) => (
                <li
                  key={i}
                  className="px-4 py-3 font-semibold text-red-900 rounded-lg bg-red-50"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubHeading icon={Shield}>{ui.precautions}</SubHeading>
            <div className="grid gap-3 md:grid-cols-2">
              {c.precautionary.map((group, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50">
                  <p className="mb-2 font-bold text-slate-800">{group.title}</p>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {group.items.map((p, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="w-1 h-1 mt-2 rounded-full bg-slate-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="overflow-x-auto border rounded-xl border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-bold">{ui.name}</th>
                <th className="px-4 py-3 font-bold">CAS No.</th>
                <th className="px-4 py-3 font-bold">ID</th>
                <th className="px-4 py-3 font-bold text-right">%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {c.section3Items.map((row, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 font-bold text-slate-800">{row.name}</td>
                  <td className="px-4 py-3 font-mono">{row.cas}</td>
                  <td className="px-4 py-3 font-mono">{row.id}</td>
                  <td className="px-4 py-3 font-mono font-bold text-right text-blue-700">
                    {row.percent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 4:
      return (
        <>
          <div className="grid gap-3 mb-2 sm:grid-cols-2">
            {(
              [
                [Eye, ui.eye, c.firstAid.eye],
                [Hand, ui.skin, c.firstAid.skin],
                [Wind, ui.inhalation, c.firstAid.inhalation],
                [Ban, ui.ingestion, c.firstAid.ingestion],
              ] as const
            ).map(([Icon, label, text]) => (
              <div key={label} className="p-4 rounded-xl bg-emerald-50">
                <p className="flex items-center gap-2 mb-1 font-bold text-emerald-800">
                  <Icon size={16} /> {label}
                </p>
                <p className="text-sm text-emerald-950/80">{text}</p>
              </div>
            ))}
          </div>
          <KeyValueList items={c.section4Items} />
        </>
      );

    case 8:
      return (
        <div className="space-y-6">
          <div>
            <SubHeading icon={ShieldCheck} className="text-sky-700">
              {ui.ppe}
            </SubHeading>
            <ul className="flex flex-wrap gap-2">
              {c.ppe.map((p, i) => (
                <li
                  key={i}
                  className="px-3 py-2 text-sm font-bold rounded-lg bg-sky-50 text-sky-900"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubHeading icon={Scale}>{ui.limits}</SubHeading>
            <ul className="border divide-y rounded-xl border-slate-200 divide-slate-100">
              {c.section8Items.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-bold text-slate-700">{item.agency}</span>
                  <span className="font-mono font-bold text-blue-700">{item.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 9:
      return <KeyValueList items={c.section9Items} columns={2} />;

    case 14:
      return (
        <>
          {chemical.unClasses.length > 0 && (
            <div className="flex flex-wrap items-center gap-6 p-5 mb-2 rounded-xl bg-slate-50">
              <div className="flex gap-2">
                {chemical.unClasses.map((cls) => (
                  <UnPlacard key={cls} cls={cls} />
                ))}
              </div>
              <div>
                <p className="text-lg font-black text-slate-800">
                  {c.section14Items[0]?.value}
                </p>
                <p className="text-sm text-slate-600">{c.section14Items[1]?.value}</p>
              </div>
            </div>
          )}
          <KeyValueList items={c.section14Items} />
        </>
      );

    default: {
      const key = `section${n}Items` as keyof MSDSContent["content"];
      return <KeyValueList items={c[key] as SectionItem[]} />;
    }
  }
}

function ToolbarButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 h-9 px-3 text-sm font-bold bg-white border rounded-lg text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
    >
      <Icon size={16} /> {label}
    </button>
  );
}
