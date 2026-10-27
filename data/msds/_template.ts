/**
 * 새 MSDS 작성용 템플릿 (앱에서 import 하지 않음)
 *
 * 1. 이 파일을 data/msds/<id>.ts 로 복사 (예: data/msds/hydrochloric.ts)
 * 2. ko 를 먼저 채운 뒤, vn / mm / kh / uz 에 각각 복사해서 번역
 * 3. data/msds/index.ts 의 chemicals 배열에 메타 정보와 함께 등록
 *    - ghs: 그림문자 (explosive, flammable, oxidizer, gas, corrosive, toxic, harmful, health, environment)
 *    - unClasses: UN 운송 등급 ("3", "6.1", "8" ...)
 *    - signal: "danger" | "warning" | "none"
 */
import type { MSDSContent, MSDSTranslations } from "./types";

const ko: MSDSContent = {
  header: {
    productName: "",
    productNameEn: "",
    msdsNo: "",
    revision: "",
    signalWord: "위험 (DANGER)",
    source: "고용노동부고시 제 2023-9 호에 따름",
  },
  sections: {
    ghs: "GHS 그림문자",
    section1: "1. 화학제품과 회사 정보",
    section2: "2. 유해성·위험성",
    section3: "3. 구성성분의 명칭 및 함유량",
    section4: "4. 응급조치 요령",
    section5: "5. 폭발·화재시 대처방법",
    section6: "6. 누출 사고시 대처방법",
    section7: "7. 취급 및 저장방법",
    section8: "8. 노출방지 및 개인보호구",
    section9: "9. 물리화학적 특성",
    section10: "10. 안정성 및 반응성",
    section11: "11. 독성에 관한 정보",
    section12: "12. 환경에 미치는 영향",
    section13: "13. 폐기시 주의사항",
    section14: "14. 운송에 필요한 정보",
    section15: "15. 법적 규제현황",
    section16: "16. 그 밖의 참고사항",
  },
  content: {
    hazards: [],
    precautionary: [
      { title: "예방", items: [] },
      { title: "대응", items: [] },
      { title: "저장", items: [] },
      { title: "폐기", items: [] },
    ],
    ppe: [],
    firstAid: { eye: "", skin: "", inhalation: "", ingestion: "" },
    section1Items: [],
    section3Items: [{ name: "", cas: "", id: "", percent: "" }],
    section4Items: [],
    section5Items: [],
    section6Items: [],
    section7Items: [],
    section8Items: [],
    section9Items: [],
    section10Items: [],
    section11Items: [],
    section12Items: [],
    section13Items: [],
    // 14번은 첫 두 항목(UN 번호, 적정선적명)이 운송 표지 옆에 크게 표시됩니다
    section14Items: [
      { label: "유엔 번호", value: "" },
      { label: "유엔 적정 선적명", value: "" },
    ],
    section15Items: [],
    section16Items: [],
  },
};

const template: MSDSTranslations = { ko, vn: ko, mm: ko, kh: ko, uz: ko };

export default template;
