"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Ban,
  ChevronDown,
  ChevronLeft,
  Eye,
  Hand,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { ChemicalEntry, MSDSContent, SectionItem } from "@/data/msds/types";
import { GhsDiamond, UnPlacard } from "./Pictograms";
import { SignalBadge } from "./SignalBadge";
import { fontClass, useLanguage, useUiText } from "./LanguageProvider";

const SECTION_NUMBERS = Array.from({ length: 16 }, (_, i) => i + 1);

/** "1. 🏢 화학제품과 회사 정보" → "화학제품과 회사 정보" */
function sectionTitle(t: MSDSContent, n: number) {
  const raw = t.sections[`section${n}` as keyof MSDSContent["sections"]];
  return stripDecoration(raw.replace(/^\s*\d+\.\s*/, ""));
}

/** 앞에 붙은 이모지 등 장식 문자 제거 */
function stripDecoration(text: string) {
  return text.replace(/^[^\p{L}\p{N}(]+/u, "").trim();
}

export default function MsdsDetail({ chemical }: { chemical: ChemicalEntry }) {
  const { lang } = useLanguage();
  const ui = useUiText();
  const t = chemical.data[lang];
  const c = t.content;

  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const [active, setActive] = useState<number | null>(null);

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

  // 현재 화면에 보이는 섹션을 바로가기 바에 표시
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(Number((visible[0].target as HTMLElement).dataset.section));
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    document
      .querySelectorAll("[data-section]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 바로가기 바에서 현재 번호가 보이도록 가로 스크롤
  useEffect(() => {
    if (active === null) return;
    document
      .getElementById(`jump-${active}`)
      ?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active]);

  const firstAid: [LucideIcon, string, string][] = [
    [Eye, ui.eye, c.firstAid.eye],
    [Hand, ui.skin, c.firstAid.skin],
    [Wind, ui.inhalation, c.firstAid.inhalation],
    [Ban, ui.ingestion, c.firstAid.ingestion],
  ];

  return (
    <div className={`mx-auto max-w-[480px] pb-16 ${fontClass(lang)}`}>
      <Link
        href="/"
        className="inline-flex items-center gap-0.5 h-10 pl-3 pr-4 text-[15px] font-medium text-sub"
      >
        <ChevronLeft size={22} /> {ui.back}
      </Link>

      {/* 제목 */}
      <section className="px-5 pt-2 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <SignalBadge
            level={chemical.signal}
            text={stripDecoration(t.header.signalWord)}
          />
          <span className="text-[13px] font-semibold text-mute">
            {chemical.formula}
          </span>
        </div>
        <h1 className="text-[26px] font-bold leading-snug tracking-tight text-ink">
          {stripDecoration(t.header.productName)}
        </h1>
        <p className="mt-0.5 text-[15px] text-mute">{t.header.productNameEn}</p>

        <div className="flex flex-wrap gap-x-2 gap-y-3 mt-6">
          {chemical.ghs.map((g) => (
            <GhsDiamond key={g} type={g} size={64} showLabel />
          ))}
        </div>
      </section>

      <Divider />

      {/* 유해·위험 */}
      <Block title={ui.hazards}>
        <ul className="space-y-3">
          {c.hazards.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-[16px] leading-relaxed text-ink">
              <span className="w-1.5 h-1.5 mt-[0.6em] rounded-full bg-danger shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </Block>

      <Divider />

      {/* 응급조치 */}
      <Block title={ui.firstAid}>
        <ul className="space-y-5">
          {firstAid.map(([Icon, label, text]) => (
            <li key={label} className="flex gap-3.5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-brand/10 text-brand">
                <Icon size={19} />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[16px] font-semibold text-ink">{label}</p>
                <p className="mt-0.5 text-[15px] leading-relaxed text-sub">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Divider />

      {/* 보호구 */}
      <Block title={ui.ppe}>
        <Chips items={c.ppe} />
      </Block>

      <Divider />

      {/* 16개 항목 상세 */}
      <section>
        <h2 className="px-5 pt-7 pb-2 text-[20px] font-bold text-ink">
          {ui.details}
        </h2>

        <nav className="sticky z-30 py-2.5 bg-white top-14">
          <div className="flex gap-1.5 px-5 overflow-x-auto no-scrollbar">
            {SECTION_NUMBERS.map((n) => (
              <button
                key={n}
                id={`jump-${n}`}
                onClick={() => jumpTo(n)}
                className={`shrink-0 w-9 h-9 rounded-full text-[14px] font-semibold transition-colors ${
                  active === n ? "bg-ink text-white" : "bg-fill text-sub"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </nav>

        <ul>
          {SECTION_NUMBERS.map((n) => (
            <SectionRow
              key={n}
              n={n}
              title={sectionTitle(t, n)}
              open={open.has(n)}
              onToggle={() => toggle(n)}
            >
              <SectionBody n={n} t={t} chemical={chemical} />
            </SectionRow>
          ))}
        </ul>
      </section>

      <footer className="px-5 pt-10 text-[12px] leading-relaxed text-mute">
        <p>MSDS No. {t.header.msdsNo}</p>
        <p>Rev. {t.header.revision}</p>
        <p>Data Source: {t.header.source}</p>
        <p className="mt-2">Translated for Foreign Workers Safety Support</p>
      </footer>
    </div>
  );
}

// ----------------------------------------------------------------------
// 공통 UI
// ----------------------------------------------------------------------
function Divider() {
  return <div className="h-3 bg-fill" />;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-7">
      <h2 className="mb-4 text-[20px] font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((p, i) => (
        <li
          key={i}
          className="px-3.5 py-2.5 text-[15px] font-medium rounded-xl bg-fill text-ink"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-[14px] font-semibold text-mute">{children}</p>;
}

function SectionRow({
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
    <li id={`section-${n}`} data-section={n}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex items-center w-full gap-3 px-5 py-4 text-left transition-colors active:bg-fill"
      >
        <span className="w-6 text-[15px] font-bold shrink-0 text-brand">{n}</span>
        <span className="flex-1 text-[16px] font-semibold leading-snug text-ink">
          {title}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-mute transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-6 pl-14">{children}</div>}
      <div className="h-px mx-5 bg-line/70" />
    </li>
  );
}

function KeyValueList({ items }: { items: SectionItem[] }) {
  return (
    <dl className="space-y-4">
      {items.map((item, i) => (
        <div key={i}>
          <dt className="text-[14px] text-mute">{item.label}</dt>
          <dd className="mt-0.5 text-[15px] leading-relaxed text-ink whitespace-pre-line">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
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
            <SubTitle>{ui.hazards}</SubTitle>
            <ul className="space-y-2 text-[15px] leading-relaxed text-ink">
              {c.hazards.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
          {c.precautionary.map((group, i) => (
            <div key={i}>
              <SubTitle>{stripDecoration(group.title)}</SubTitle>
              <ul className="space-y-2 text-[15px] leading-relaxed text-sub">
                {group.items.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case 3:
      return (
        <ul className="space-y-4">
          {c.section3Items.map((row, i) => (
            <li key={i}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[15px] font-semibold text-ink">{row.name}</p>
                <p className="text-[15px] font-semibold shrink-0 text-brand">
                  {row.percent}
                </p>
              </div>
              <p className="text-[14px] text-mute">
                CAS {row.cas}
                {row.id && ` · ${row.id}`}
              </p>
            </li>
          ))}
        </ul>
      );

    case 4:
      return (
        <KeyValueList
          items={[
            { label: ui.eye, value: c.firstAid.eye },
            { label: ui.skin, value: c.firstAid.skin },
            { label: ui.inhalation, value: c.firstAid.inhalation },
            { label: ui.ingestion, value: c.firstAid.ingestion },
            ...c.section4Items,
          ]}
        />
      );

    case 8:
      return (
        <div className="space-y-6">
          <div>
            <SubTitle>{ui.ppe}</SubTitle>
            <Chips items={c.ppe} />
          </div>
          <div>
            <SubTitle>{ui.limits}</SubTitle>
            <ul className="space-y-2.5">
              {c.section8Items.map((item, i) => (
                <li key={i} className="flex justify-between gap-3 text-[15px]">
                  <span className="text-sub">{item.agency}</span>
                  <span className="font-semibold text-right text-ink">{item.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 14:
      return (
        <>
          {chemical.unClasses.length > 0 && (
            <div className="flex gap-1 mb-5 -ml-2">
              {chemical.unClasses.map((cls) => (
                <UnPlacard key={cls} cls={cls} size={76} />
              ))}
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
