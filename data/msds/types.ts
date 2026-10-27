export type LangCode = "ko" | "vn" | "mm" | "kh" | "uz";

export const supportedLanguages = [
  { code: "ko", label: "한국어", labelEn: "Korean", font: "font-kr" },
  { code: "vn", label: "Tiếng Việt", labelEn: "Vietnamese", font: "font-vn" },
  { code: "mm", label: "မြန်မာ", labelEn: "Myanmar", font: "font-mm" },
  { code: "kh", label: "ខ្មែរ", labelEn: "Khmer", font: "font-kh" },
  { code: "uz", label: "O'zbek", labelEn: "Uzbek", font: "font-uz" },
] as const satisfies readonly {
  code: LangCode;
  label: string;
  labelEn: string;
  font: string;
}[];

export interface SectionItem {
  label: string;
  value: string;
}

export interface MSDSContent {
  header: {
    productName: string;
    productNameEn: string;
    msdsNo: string;
    revision: string;
    signalWord: string;
    source: string;
  };
  sections: {
    ghs: string;
    section1: string;
    section2: string;
    section3: string;
    section4: string;
    section5: string;
    section6: string;
    section7: string;
    section8: string;
    section9: string;
    section10: string;
    section11: string;
    section12: string;
    section13: string;
    section14: string;
    section15: string;
    section16: string;
  };
  content: {
    hazards: string[];
    precautionary: { title: string; items: string[] }[];
    ppe: string[];
    firstAid: {
      eye: string;
      skin: string;
      inhalation: string;
      ingestion: string;
    };
    section1Items: SectionItem[];
    section3Items: { name: string; cas: string; id: string; percent: string }[];
    section4Items: SectionItem[];
    section5Items: SectionItem[];
    section6Items: SectionItem[];
    section7Items: SectionItem[];
    section8Items: { name: string; agency: string; val: string }[];
    section9Items: SectionItem[];
    section10Items: SectionItem[];
    section11Items: SectionItem[];
    section12Items: SectionItem[];
    section13Items: SectionItem[];
    section14Items: SectionItem[];
    section15Items: SectionItem[];
    section16Items: SectionItem[];
  };
}

/** 한 화학물질의 언어별 MSDS 데이터 */
export type MSDSTranslations = Record<LangCode, MSDSContent>;

/** GHS 그림문자 (GHS01 ~ GHS09) */
export type GhsPictogram =
  | "explosive" // GHS01 폭발성
  | "flammable" // GHS02 인화성
  | "oxidizer" // GHS03 산화성
  | "gas" // GHS04 고압가스
  | "corrosive" // GHS05 부식성
  | "toxic" // GHS06 급성독성
  | "harmful" // GHS07 경고(자극성 등)
  | "health" // GHS08 호흡기·발암성 등 건강유해성
  | "environment"; // GHS09 수생환경유해성

/** UN 운송 위험물 등급 */
export type UnClass =
  | "2.1"
  | "2.2"
  | "2.3"
  | "3"
  | "4.1"
  | "4.2"
  | "4.3"
  | "5.1"
  | "5.2"
  | "6.1"
  | "8"
  | "9";

export type SignalLevel = "danger" | "warning" | "none";

export type ChemicalCategory = "acid" | "base" | "solvent" | "gas" | "other";

/** 목록·검색·필터에 사용하는 화학물질 메타 정보 */
export interface ChemicalMeta {
  /** URL에 사용되는 id (예: /msds/sulfuric) */
  id: string;
  /** 화학식 (예: H₂SO₄) */
  formula: string;
  category: ChemicalCategory;
  signal: SignalLevel;
  ghs: GhsPictogram[];
  unClasses: UnClass[];
  /** 카드·헤더 강조 색상 (hex) */
  accent: string;
}

export interface ChemicalEntry extends ChemicalMeta {
  data: MSDSTranslations;
}

/** 목록 페이지로 전달되는 가벼운 요약 정보 (본문 데이터 제외) */
export interface ChemicalSummary extends ChemicalMeta {
  names: Record<LangCode, string>;
  nameEn: string;
  msdsNo: string;
  cas: string;
}
