import type { ChemicalEntry, ChemicalSummary, LangCode } from "./types";
import { supportedLanguages } from "./types";

import sulfuric from "./sulfuric";
import nitric from "./nitric";
import phosphoric from "./phosphoric";

/**
 * 등록된 MSDS 목록.
 * 새 화학물질 추가 방법:
 *   1. data/msds/_template.ts 를 복사해 data/msds/<id>.ts 로 만들고 내용 작성
 *   2. 아래에 import 후 배열에 항목 추가
 * 배열 순서가 목록 페이지의 표시 순서입니다.
 */
export const chemicals: ChemicalEntry[] = [
  {
    id: "sulfuric",
    formula: "H₂SO₄",
    category: "acid",
    signal: "danger",
    ghs: ["corrosive", "toxic", "health"],
    unClasses: ["8"],
    accent: "#ca8a04",
    data: sulfuric,
  },
  {
    id: "nitric",
    formula: "HNO₃",
    category: "acid",
    signal: "danger",
    ghs: ["oxidizer", "corrosive", "toxic"],
    unClasses: ["8", "5.1"],
    accent: "#ea580c",
    data: nitric,
  },
  {
    id: "phosphoric",
    formula: "H₃PO₄",
    category: "acid",
    signal: "danger",
    ghs: ["corrosive", "toxic"],
    unClasses: ["8"],
    accent: "#2563eb",
    data: phosphoric,
  },
];

export function getChemical(id: string): ChemicalEntry | undefined {
  return chemicals.find((c) => c.id === id);
}

/** 이모지 등 장식 문자를 제거한 제품명 */
export function cleanName(name: string): string {
  return name.replace(/^[^\p{L}\p{N}(]+/u, "").trim();
}

export function getSummaries(): ChemicalSummary[] {
  return chemicals.map(({ data, ...meta }) => {
    const ko = data.ko;
    const names = Object.fromEntries(
      supportedLanguages.map((l) => [
        l.code,
        cleanName(data[l.code].header.productName),
      ]),
    ) as Record<LangCode, string>;
    return {
      ...meta,
      names,
      nameEn: ko.header.productNameEn,
      msdsNo: ko.header.msdsNo,
      cas: ko.content.section3Items.map((r) => r.cas).join(", "),
    };
  });
}

export * from "./types";
