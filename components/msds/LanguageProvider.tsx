"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { supportedLanguages, type LangCode } from "@/data/msds/types";

const STORAGE_KEY = "msds-lang";

// 마지막으로 선택한 언어를 localStorage에 기억 (페이지 이동/새로고침 후에도 유지)
const listeners = new Set<() => void>();
let memoryLang: LangCode = "ko"; // localStorage를 쓸 수 없는 환경 대비

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readLang(): LangCode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && supportedLanguages.some((l) => l.code === saved)) {
      return saved as LangCode;
    }
  } catch {}
  return memoryLang;
}

function writeLang(lang: LangCode) {
  memoryLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  listeners.forEach((l) => l());
}

const LanguageContext = createContext<{
  lang: LangCode;
  setLang: (lang: LangCode) => void;
}>({ lang: "ko", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "ko" as const);

  return (
    <LanguageContext.Provider value={{ lang, setLang: writeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function fontClass(lang: LangCode) {
  return supportedLanguages.find((l) => l.code === lang)?.font ?? "font-kr";
}

/** 화면 고정 문구 (MSDS 본문은 데이터 파일의 번역을 사용) */
const uiText = {
  ko: {
    title: "물질안전보건자료",
    subtitle: "우리 작업장에서 쓰는 화학물질의\n위험성과 응급조치 방법이에요.",
    search: "물질명, 화학식, CAS 번호",
    all: "전체",
    count: (n: number) => `물질 ${n}개`,
    empty: "검색 결과가 없습니다.",
    back: "목록",
    details: "MSDS 16개 항목",
    hazards: "유해·위험 문구",
    firstAid: "응급조치",
    ppe: "개인보호구",
    limits: "노출기준",
    eye: "눈",
    skin: "피부",
    inhalation: "흡입",
    ingestion: "섭취",
    danger: "위험",
    warning: "경고",
  },
  en: {
    title: "Material Safety Data Sheets",
    subtitle: "Check hazards and first aid for chemicals used at this workplace.",
    search: "Search by name, formula or CAS No.",
    all: "All",
    count: (n: number) => `${n} chemicals`,
    empty: "No results found.",
    back: "List",
    details: "MSDS 16 sections",
    hazards: "Hazard Statements",
    firstAid: "First Aid",
    ppe: "PPE",
    limits: "Exposure Limits",
    eye: "Eye",
    skin: "Skin",
    inhalation: "Inhalation",
    ingestion: "Ingestion",
    danger: "Danger",
    warning: "Warning",
  },
};

export function useUiText() {
  const { lang } = useLanguage();
  return lang === "ko" ? uiText.ko : uiText.en;
}
