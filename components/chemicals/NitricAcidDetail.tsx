"use client"; // 👈 필수!

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Flame,
  Skull,
  Droplets,
  Shield,
  Eye,
  HandMetal,
  Scale,
  TestTube,
  Globe,
  Ban,
  Activity, // 발암성 등 건강 유해성 아이콘
  Beaker, // 화학물질 아이콘
} from "lucide-react";

// 분리한 데이터 파일 임포트 (3가지 데이터 모두 가져옴)
import {
  sulfuricTranslations, // 황산
  msdsTranslations, // 질산 (변수명이 msdsTranslations라면)
  phosphoricTranslations, // 인산
  supportedLanguages,
  type LangCode,
} from "./chemicalData";

// --- 설정: 화학물질별 아이콘 및 스타일 구성 ---
type ChemicalType = "sulfuric" | "nitric" | "phosphoric";

const chemicalConfig: Record<
  ChemicalType,
  {
    color: string;
    ghsIcons: ("oxidizer" | "corrosive" | "toxic" | "health")[];
    unClasses: ("8" | "5.1")[];
  }
> = {
  sulfuric: {
    // 황산
    color: "border-yellow-600",
    ghsIcons: ["corrosive", "toxic", "health"], // 부식성, 급성독성, 건강유해성(암)
    unClasses: ["8"],
  },
  nitric: {
    // 질산
    color: "border-orange-600",
    ghsIcons: ["oxidizer", "corrosive", "toxic"], // 산화성, 부식성, 급성독성
    unClasses: ["8", "5.1"],
  },
  phosphoric: {
    // 인산
    color: "border-blue-600",
    ghsIcons: ["corrosive", "toxic"], // 부식성, 급성독성
    unClasses: ["8"],
  },
};

// GHS 아이콘 매핑 컴포넌트
const icons = {
  oxidizer: Flame,
  corrosive: Droplets,
  toxic: Skull,
  health: Activity,
};

// --- 공통 UI 컴포넌트 ---
const SectionAccordion = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mb-4 overflow-hidden bg-white border rounded-lg shadow-sm border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left transition-colors bg-slate-50 hover:bg-slate-100"
      >
        <span className="text-lg font-bold text-slate-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="text-slate-500" />
        ) : (
          <ChevronDown className="text-slate-500" />
        )}
      </button>
      {isOpen && (
        <div className="p-5 border-t border-slate-100">{children}</div>
      )}
    </div>
  );
};

const KeyValueRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col py-2 border-b border-slate-100 sm:flex-row sm:justify-between last:border-0">
    <span className="flex items-start gap-2 font-semibold text-slate-600 sm:w-1/3">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
      {label}
    </span>
    <span className="font-medium text-slate-800 sm:w-2/3">{value}</span>
  </div>
);

const GHSDiamond = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white border-[5px] md:border-[6px] border-red-600 transform rotate-45 rounded-xl shadow-sm">
      <div className="text-black transform -rotate-45">
        <Icon size={32} fill="black" strokeWidth={0} />
      </div>
    </div>
    <span className="mt-2 text-xs font-bold text-center text-slate-700">
      {label}
    </span>
  </div>
);

// UN 운송 표지 컴포넌트
const TransportPlacard = ({ type }: { type: "8" | "5.1" }) => {
  if (type === "8") {
    // 부식성 (Corrosive)
    return (
      <div className="relative flex flex-col w-20 h-20 m-2 overflow-hidden transform rotate-45 bg-white border-4 border-black shadow-md">
        <div className="flex flex-col justify-between w-full h-full p-1 transform -rotate-45">
          <div className="flex items-end justify-center w-full pb-1 border-b-2 border-black h-1/2">
            <div className="flex gap-1">
              <TestTube size={14} className="rotate-12 fill-black" />
              <HandMetal size={14} className="fill-black" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full bg-black h-1/2">
            <span className="text-lg font-black text-white">8</span>
          </div>
        </div>
      </div>
    );
  }
  if (type === "5.1") {
    // 산화성 (Oxidizer)
    return (
      <div className="relative flex flex-col w-20 h-20 m-2 transform rotate-45 bg-yellow-400 border-4 border-black shadow-md">
        <div className="flex flex-col items-center justify-center w-full h-full pt-2 transform -rotate-45">
          <Flame size={24} fill="black" stroke="black" />
          <div className="w-full pt-1 mt-1 text-lg font-black text-center border-t-2 border-black">
            5.1
          </div>
        </div>
      </div>
    );
  }
  return null;
};

// ----------------------------------------------------------------------
// 메인 컴포넌트
// ----------------------------------------------------------------------
export default function ChemicalDetail() {
  // 상태 관리: 언어 & 선택된 화학물질
  const [lang, setLang] = useState<LangCode>("ko");
  const [activeChem, setActiveChem] = useState<ChemicalType>("sulfuric");

  // 현재 선택된 화학물질의 데이터 매핑
  const dataMap = {
    sulfuric: sulfuricTranslations,
    nitric: msdsTranslations, // 질산 데이터 변수명 확인 필요
    phosphoric: phosphoricTranslations,
  };

  const t = dataMap[activeChem][lang];
  const config = chemicalConfig[activeChem];
  const currentFont =
    supportedLanguages.find((l) => l.code === lang)?.font || "font-kr";

  return (
    <div
      className={`max-w-5xl mx-auto p-4 md:p-8 bg-slate-50 min-h-screen ${currentFont}`}
    >
      {/* 🟢 상단 컨트롤 바 (화학물질 선택 + 언어 선택) */}
      <div className="sticky z-50 flex flex-col items-center justify-between gap-4 mb-6 top-4 md:flex-row">
        {/* 화학물질 탭 버튼 */}
        <div className="flex p-1 bg-white border rounded-full shadow-md border-slate-200">
          {[
            { id: "sulfuric", label: "황산 (H₂SO₄)" },
            { id: "nitric", label: "질산 (HNO₃)" },
            { id: "phosphoric", label: "인산 (H₃PO₄)" },
          ].map((chem) => (
            <button
              key={chem.id}
              onClick={() => setActiveChem(chem.id as ChemicalType)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeChem === chem.id
                  ? "bg-slate-800 text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {chem.label}
            </button>
          ))}
        </div>

        {/* 언어 선택기 */}
        <div className="flex items-center gap-2 p-2 bg-white border border-blue-100 rounded-full shadow-lg">
          <Globe className="ml-2 text-blue-600" size={20} />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as LangCode)}
            className="p-2 pr-4 text-sm font-bold bg-transparent outline-none cursor-pointer text-slate-700"
          >
            {supportedLanguages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 헤더 */}
      <header
        className={`relative p-6 mb-8 overflow-hidden bg-white border-t-8 shadow-md rounded-2xl ${config.color}`}
      >
        <div className="absolute top-0 right-0 p-4 pointer-events-none opacity-10">
          <Beaker size={150} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-sm font-black text-white bg-red-600 rounded animate-pulse">
              {t.header.signalWord}
            </span>
            <span className="font-mono text-sm text-slate-400">
              MSDS No: {t.header.msdsNo}
            </span>
          </div>
          <h1 className="mb-2 text-3xl font-black leading-tight tracking-tight md:text-5xl text-slate-900">
            {t.header.productName}
          </h1>
          <p className="text-sm font-medium text-slate-500">
            {t.header.revision}
          </p>
        </div>
      </header>

      {/* ☢️ GHS 그림문자 섹션 (동적 렌더링) */}
      <div className="flex flex-col items-center justify-center p-6 mb-8 text-center bg-white border border-red-100 shadow-sm rounded-xl">
        <h3 className="mb-4 text-sm font-bold tracking-widest text-red-500 uppercase">
          {t.sections.ghs}
        </h3>
        <div className="flex flex-wrap justify-center gap-8 pb-4 md:gap-16">
          {config.ghsIcons.map((iconKey, idx) => (
            <GHSDiamond
              key={idx}
              icon={icons[iconKey]}
              label={
                iconKey === "toxic"
                  ? "Toxic"
                  : iconKey === "oxidizer"
                  ? "Oxidizer"
                  : iconKey === "corrosive"
                  ? "Corrosive"
                  : "Health"
              }
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {/* 1. 제품 정보 */}
        <SectionAccordion title={t.sections.section1}>
          {t.content.section1Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>

        {/* 2. 유해성/위험성 */}
        <SectionAccordion title={t.sections.section2} defaultOpen={true}>
          <div className="space-y-4">
            <div>
              <h4 className="flex items-center gap-2 mb-2 font-bold text-red-700">
                <AlertTriangle size={18} /> Hazard Statements
              </h4>
              <ul className="space-y-2">
                {t.content.hazards.map((h: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded bg-red-50"
                  >
                    <span className="font-bold text-red-900">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t">
              <h4 className="flex items-center gap-2 mb-2 font-bold text-slate-700">
                <Shield size={18} /> Precautionary Statements
              </h4>
              <div className="p-3 space-y-4 overflow-y-auto text-sm border rounded max-h-60 bg-slate-50 border-slate-200">
                {t.content.precautionary.map((group, idx) => (
                  <div key={idx}>
                    <strong className="block pl-2 mb-1 border-l-4 border-slate-400 text-slate-800">
                      {group.title}
                    </strong>
                    <ul className="pl-2 space-y-1 list-disc list-inside text-slate-600">
                      {group.items.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionAccordion>

        {/* 3. 구성성분 */}
        <SectionAccordion title={t.sections.section3}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">CAS No.</th>
                  <th className="p-3 border">ID</th>
                  <th className="p-3 border">%</th>
                </tr>
              </thead>
              <tbody>
                {t.content.section3Items.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-slate-50">
                    <td className="p-3 font-bold border text-slate-800">
                      {row.name}
                    </td>
                    <td className="p-3 border">{row.cas}</td>
                    <td className="p-3 border">{row.id}</td>
                    <td className="p-3 font-mono text-blue-600 border">
                      {row.percent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionAccordion>

        {/* 4. 응급조치 요령 */}
        <SectionAccordion title={t.sections.section4} defaultOpen={true}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-4 bg-white border rounded shadow-sm">
              <h5 className="flex items-center gap-2 mb-2 font-bold text-blue-600">
                <Eye size={18} /> Eye
              </h5>
              <p className="text-sm">{t.content.firstAid.eye}</p>
            </div>
            <div className="p-4 bg-white border rounded shadow-sm">
              <h5 className="flex items-center gap-2 mb-2 font-bold text-blue-600">
                <HandMetal size={18} /> Skin
              </h5>
              <p className="text-sm">{t.content.firstAid.skin}</p>
            </div>
            <div className="p-4 bg-white border rounded shadow-sm">
              <h5 className="flex items-center gap-2 mb-2 font-bold text-blue-600">
                <Globe size={18} /> Inhalation
              </h5>
              <p className="text-sm">{t.content.firstAid.inhalation}</p>
            </div>
            <div className="p-4 bg-white border rounded shadow-sm">
              <h5 className="flex items-center gap-2 mb-2 font-bold text-blue-600">
                <Ban size={18} /> Ingestion
              </h5>
              <p className="text-sm">{t.content.firstAid.ingestion}</p>
            </div>
          </div>
          <div className="mt-4">
            {t.content.section4Items.map((item, idx) => (
              <KeyValueRow key={idx} label={item.label} value={item.value} />
            ))}
          </div>
        </SectionAccordion>

        {/* 5~7 섹션 */}
        <SectionAccordion title={t.sections.section5}>
          {t.content.section5Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>
        <SectionAccordion title={t.sections.section6}>
          {t.content.section6Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>
        <SectionAccordion title={t.sections.section7}>
          {t.content.section7Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>

        {/* 8. 보호구 */}
        <SectionAccordion title={t.sections.section8}>
          <div className="p-4 mb-4 bg-blue-50 rounded-xl">
            <h4 className="flex items-center gap-2 mb-4 font-bold text-blue-800">
              <Shield size={20} /> PPE
            </h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {t.content.ppe.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-3 text-center bg-white rounded-lg shadow-sm"
                >
                  <div className="p-2 text-blue-600 bg-blue-100 rounded-full">
                    <Shield size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="flex items-center gap-2 mb-2 font-bold text-slate-700">
              <Scale size={18} /> Exposure Limits
            </h4>
            <div className="space-y-2">
              {t.content.section8Items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between p-3 bg-white border rounded shadow-sm"
                >
                  <span className="font-bold text-slate-700">
                    {item.agency}
                  </span>
                  <span className="font-mono font-bold text-blue-600">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionAccordion>

        {/* 9 ~ 13 섹션 매핑 */}
        <SectionAccordion title={t.sections.section9}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
            {t.content.section9Items.map((item, idx) => (
              <KeyValueRow key={idx} label={item.label} value={item.value} />
            ))}
          </div>
        </SectionAccordion>
        <SectionAccordion title={t.sections.section10}>
          {t.content.section10Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>
        <SectionAccordion title={t.sections.section11}>
          {t.content.section11Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>
        <SectionAccordion title={t.sections.section12}>
          {t.content.section12Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>
        <SectionAccordion title={t.sections.section13}>
          {t.content.section13Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>

        {/* 14. 운송 (UN Placard 동적 렌더링) */}
        <SectionAccordion title={t.sections.section14}>
          <div className="flex flex-col items-center gap-8 p-6 mb-6 rounded-xl bg-slate-100 md:flex-row">
            <div className="flex gap-4">
              {config.unClasses.map((cls, idx) => (
                <TransportPlacard key={idx} type={cls} />
              ))}
            </div>
            <div className="flex-1 space-y-2">
              <h4 className="text-lg font-bold text-slate-800">
                {t.content.section14Items[0]?.value} :{" "}
                {t.content.section14Items[1]?.value}
              </h4>
              <p className="text-sm text-slate-600">
                Class:{" "}
                {config.unClasses.map((cls, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 font-bold border rounded mr-2 ${
                      cls === "5.1"
                        ? "bg-yellow-300 border-yellow-500"
                        : "bg-white"
                    }`}
                  >
                    {cls}
                  </span>
                ))}
              </p>
            </div>
          </div>
          {t.content.section14Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>

        <SectionAccordion title={t.sections.section15}>
          {t.content.section15Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>

        <SectionAccordion title={t.sections.section16}>
          {t.content.section16Items.map((item, idx) => (
            <KeyValueRow key={idx} label={item.label} value={item.value} />
          ))}
        </SectionAccordion>
      </div>

      <footer className="pb-8 mt-12 text-xs text-center text-slate-400">
        <p>Translated for Foreign Workers Safety Support</p>
        <p>Data Source: {t.header.source}</p>
      </footer>
    </div>
  );
}
