export type LangCode = 'ko' | 'vn' | 'mm' | 'kh' | 'uz';

export const supportedLanguages = [
    { code: 'ko', label: '한국어 (Korean)', font: 'font-kr' },
    { code: 'vn', label: 'Tiếng Việt (Vietnamese)', font: 'font-vn' },
    { code: 'mm', label: 'မြန်မာ (Myanmar)', font: 'font-mm' },
    { code: 'kh', label: 'ខ្មែរ (Khmer)', font: 'font-kh' },
    { code: 'uz', label: "O'zbek (Uzbek)", font: 'font-uz' },
] as const;

interface SectionItem { label: string; value: string; }
interface MSDSContent {
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

export const msdsTranslations: Record<LangCode, MSDSContent> = {
    // ----------------------------------------------------------------------
    // 🇰🇷 한국어 (Korean)
    // ----------------------------------------------------------------------
    ko: {
        header: {
            productName: "🧪 희질산 (65~70%)",
            productNameEn: "Dilute Nitric Acid",
            msdsNo: "AA01123-0000000002",
            revision: "2025-08-27 (최종 개정, v23.1)",
            signalWord: "⛔ 위험 (DANGER)",
            source: "고용노동부고시 제 2023-9 호에 따름"
        },
        sections: {
            ghs: "⚠️ GHS 그림문자",
            section1: "1. 🏢 화학제품과 회사 정보",
            section2: "2. ☢️ 유해성·위험성",
            section3: "3. 🧪 구성성분의 명칭 및 함유량",
            section4: "4. 🚑 응급조치 요령",
            section5: "5. 🔥 폭발·화재시 대처방법",
            section6: "6. 🧹 누출 사고 시 대처방법",
            section7: "7. 🤲 취급 및 저장방법",
            section8: "8. 😷 노출방지 및 개인보호구",
            section9: "9. 🌡️ 물리화학적 특성",
            section10: "10. 💥 안정성 및 반응성",
            section11: "11. ☠️ 독성에 관한 정보",
            section12: "12. 🐟 환경에 미치는 영향",
            section13: "13. 🗑️ 폐기시 주의사항",
            section14: "14. 🚚 운송에 필요한 정보",
            section15: "15. ⚖️ 법적 규제현황",
            section16: "16. 📝 그 밖의 참고사항",
        },
        content: {
            hazards: [
                "🔥 H271 - 화재 또는 폭발을 일으킬 수 있음: 강산화제",
                "🏗️ H290 - 금속을 부식시킬 수 있음",
                "🧴 H314 - 피부에 심한 화상과 눈에 손상을 일으킴",
                "👁️ H318 - 눈에 심한 손상을 일으킴",
                "☠️ H331 - 흡입하면 유독함 (증기)",
                "🐟 H412 - 장기적인 영향에 의해 수생생물에게 유해함"
            ],
            precautionary: [
                {
                    title: "🛡️ 예방",
                    items: [
                        "P210 - 열, 고온, 스파크, 화염으로부터 멀리하시오. 금연.",
                        "P220 - 의류 및 가연성 물질로부터 멀리하시오.",
                        "P260 - 분진, 가스, 증기, 스프레이를 흡입하지 마시오.",
                        "P280 - 보호장갑, 보호의, 보안경, 안면보호구를 착용하시오."
                    ]
                },
                {
                    title: "🚨 대응",
                    items: [
                        "👁️ P305+P351+P338 - 눈에 묻으면: 몇 분간 물로 조심해서 씻으시오. 콘택트렌즈 제거.",
                        "🧴 P303+P361+P353 - 피부에 묻으면: 오염된 의류를 즉시 벗고, 피부를 물로 씻으시오.",
                        "🌬️ P304+P340 - 흡입하면: 신선한 공기가 있는 곳으로 옮기고 안정을 취하시오.",
                        "🏥 P310 - 즉시 의료기관, 의사의 진찰을 받으시오."
                    ]
                },
                {
                    title: "🔒 저장",
                    items: [
                        "P405 - 잠금장치를 하여 저장하시오.",
                        "P406 - 금속부식성 물질이므로 내부식성 용기에 보관하시오."
                    ]
                },
                {
                    title: "🗑️ 폐기",
                    items: [
                        "P501 - 폐기물 관련 법령에 따라 내용물 또는 용기를 폐기하시오."
                    ]
                }
            ],
            ppe: ["😷 호흡기 보호구", "🥽 보안경", "🧤 안전 장갑", "🦺 방화복/방염복"],
            firstAid: {
                eye: "👁️ 즉시 흐르는 물로 15분 이상 씻으시오. 콘택트렌즈 제거 후 계속 세척. 즉시 의사 진찰.",
                skin: "🧴 오염된 의복을 즉시 벗으시오. 다량의 물로 피부를 씻어내시오. 즉시 의사 진찰.",
                inhalation: "🌬️ 신선한 공기가 있는 곳으로 이동. 호흡 곤란 시 산소 공급. 즉시 의사 진찰.",
                ingestion: "👄 입을 씻어내시오. 억지로 토하게 하지 마시오. 즉시 의사 진찰."
            },
            section1Items: [
                { label: "제품 형태", value: "혼합물" },
                { label: "권고 용도", value: "원료, 금속 표면 처리제, 산화제, pH 조절제, 세정제" },
                { label: "공급자", value: "티케이지휴켐스(주) 여수공장" },
                { label: "긴급전화", value: "📞 +82-61-680-4617" }
            ],
            section3Items: [
                { name: "질산 (Nitric acid)", cas: "7697-37-2", id: "KE-25911", percent: "65 ~ 70 %" },
                { name: "물 (Water)", cas: "7732-18-5", id: "KE-35400", percent: "30 ~ 35 %" }
            ],
            section4Items: [
                { label: "의사 주의사항", value: "구조대는 개인 보호구를 착용할 것. 증상에 따라 치료." }
            ],
            section5Items: [
                { label: "적절한 소화제", value: "물 분무, 건조 분말, 포말, 이산화탄소" },
                { label: "부적절 소화제", value: "🚫 강한 물살(직사 주수) 금지" },
                { label: "특정 유해성", value: "강산화제: 화재/폭발 조장 가능" }
            ],
            section6Items: [
                { label: "인체 보호", value: "보호구 착용. 환기. 증기 흡입 금지." },
                { label: "환경 보호", value: "하수구 유입 방지." },
                { label: "제거 방법", value: "모래/토양으로 흡수. 중화 처리 후 폐기." }
            ],
            section7Items: [
                { label: "취급 요령", value: "열/스파크 차단. 환기 잘 되는 곳에서 취급." },
                { label: "저장 방법", value: "내부식성 용기, 잠금장치, 환기, 격리 보관." }
            ],
            section8Items: [
                { name: "질산", agency: "ISHA (한국)", val: "TWA 2 ppm, STEL 4 ppm" },
                { name: "질산", agency: "ACGIH (미국)", val: "TWA 2 ppm, STEL 4 ppm" }
            ],
            section9Items: [
                { label: "성상/색상", value: "액체 / 무색" },
                { label: "냄새", value: "자극성 (톡 쏘는 냄새)" },
                { label: "pH", value: "< 1 (강산성)" },
                { label: "비중", value: "1.39 ~ 1.41" }
            ],
            section10Items: [
                { label: "안정성", value: "정상 조건에서 안정. 강산화제(화재 위험)." },
                { label: "피해야 할 물질", value: "가연성 물질, 금속, 환원제" }
            ],
            section11Items: [
                { label: "노출 경로", value: "피부 부식, 증기 흡입 시 유독" },
                { label: "독성 (흡입)", value: "LC50 > 2.65 mg/l (Rat, 4h)" }
            ],
            section12Items: [
                { label: "생태독성 (어류)", value: "LC50 1559 mg/l" },
                { label: "분해성", value: "물에서 분해되지 않음" }
            ],
            section13Items: [
                { label: "폐기 방법", value: "폐기물관리법에 따라 지정폐기물로 처리." },
                { label: "주의사항", value: "빈 용기 재사용 금지." }
            ],
            section14Items: [
                { label: "UN 번호", value: "2031" },
                { label: "선적명", value: "NITRIC ACID" },
                { label: "위험 등급", value: "8 (부식성), 5.1 (산화성)" }
            ],
            section15Items: [
                { label: "산업안전보건법", value: "작업환경측정, 특수건강진단, 관리대상물질" },
                { label: "화학물질관리법", value: "유독물질, 사고대비물질 (46번)" }
            ],
            section16Items: [
                { label: "작성일/개정", value: "2013-06-25 / 2025-08-27 (v23.1)" },
                { label: "출처", value: "KOSHA, NCIS, ECHA" }
            ]
        }
    },

    vn: {
        header: {
            productName: "🧪 Axit Nitric Loãng (65~70%)",
            productNameEn: "Dilute Nitric Acid",
            msdsNo: "AA01123-0000000002",
            revision: "27-08-2025 (Bản sửa đổi cuối, v23.1)",
            signalWord: "⛔ NGUY HIỂM (DANGER)",
            source: "Tuân theo Thông báo số 2023-9 của MOEL"
        },
        sections: {
            ghs: "⚠️ Hình đồ cảnh báo GHS",
            section1: "1. 🏢 Thông tin sản phẩm & Công ty",
            section2: "2. ☢️ Nhận dạng đặc tính nguy hiểm",
            section3: "3. 🧪 Thành phần và hàm lượng",
            section4: "4. 🚑 Biện pháp sơ cứu",
            section5: "5. 🔥 Biện pháp chữa cháy",
            section6: "6. 🧹 Biện pháp xử lý khi rò rỉ",
            section7: "7. 🤲 Thao tác và bảo quản",
            section8: "8. 😷 Kiểm soát phơi nhiễm & Bảo hộ",
            section9: "9. 🌡️ Đặc tính lý hóa",
            section10: "10. 💥 Tính ổn định & Phản ứng",
            section11: "11. ☠️ Thông tin về độc tính",
            section12: "12. 🐟 Ảnh hưởng đến môi trường",
            section13: "13. 🗑️ Lưu ý khi thải bỏ",
            section14: "14. 🚚 Thông tin vận chuyển",
            section15: "15. ⚖️ Thông tin pháp luật",
            section16: "16. 📝 Thông tin khác",
        },
        content: {
            hazards: [
                "🔥 H271 - Có thể gây cháy hoặc nổ; chất oxy hóa mạnh",
                "🏗️ H290 - Có thể ăn mòn kim loại",
                "🧴 H314 - Gây bỏng da nặng và tổn thương mắt",
                "👁️ H318 - Gây tổn thương mắt nghiêm trọng",
                "☠️ H331 - Độc nếu hít phải (Dạng hơi)",
                "🐟 H412 - Có hại cho sinh vật thủy sinh với ảnh hưởng kéo dài"
            ],
            precautionary: [
                {
                    title: "🛡️ Phòng ngừa",
                    items: [
                        "P210 - Tránh xa nguồn nhiệt, bề mặt nóng, tia lửa. Không hút thuốc.",
                        "P220 - Để xa quần áo và vật liệu dễ cháy.",
                        "P260 - Không hít phải bụi/hơi/khí phun.",
                        "P280 - Mặc găng tay/quần áo bảo hộ/kính bảo vệ mắt/mặt."
                    ]
                },
                {
                    title: "🚨 Ứng phó",
                    items: [
                        "👁️ P305+P351+P338 - NẾU DÍNH MẮT: Rửa cẩn thận bằng nước trong vài phút. Tháo kính áp tròng.",
                        "🧴 P303+P361+P353 - NẾU DÍNH DA: Cởi bỏ ngay quần áo nhiễm bẩn. Rửa da bằng nước/tắm.",
                        "🌬️ P304+P340 - NẾU HÍT PHẢI: Chuyển nạn nhân ra nơi thoáng khí, giữ tư thế dễ thở.",
                        "🏥 P310 - Gọi ngay Trung tâm Chống độc hoặc bác sĩ."
                    ]
                },
                {
                    title: "🔒 Lưu trữ",
                    items: [
                        "P405 - Cất giữ nơi có khóa.",
                        "P406 - Bảo quản trong thùng chứa chống ăn mòn."
                    ]
                },
                {
                    title: "🗑️ Thải bỏ",
                    items: [
                        "P501 - Vứt bỏ nội dung/thùng chứa theo quy định địa phương."
                    ]
                }
            ],
            ppe: ["😷 Mặt nạ phòng độc", "🥽 Kính bảo hộ", "🧤 Găng tay an toàn", "🦺 Quần áo chống cháy"],
            firstAid: {
                eye: "👁️ Rửa cẩn thận bằng nước ít nhất 15 phút. Tháo kính áp tròng. Gọi bác sĩ ngay.",
                skin: "🧴 Cởi bỏ quần áo nhiễm bẩn. Rửa sạch da bằng nước lượng lớn. Gọi bác sĩ ngay.",
                inhalation: "🌬️ Di chuyển ra nơi thoáng khí. Nghỉ ngơi. Gọi bác sĩ.",
                ingestion: "👄 Súc miệng. KHÔNG gây nôn. Gọi bác sĩ ngay lập tức."
            },
            section1Items: [
                { label: "Dạng sản phẩm", value: "Hỗn hợp" },
                { label: "Sử dụng", value: "Nguyên liệu thô, Xử lý bề mặt kim loại, Chất oxy hóa, Điều chỉnh pH" },
                { label: "Nhà cung cấp", value: "TKG Huchems (Nhà máy Yeosu)" },
                { label: "Khẩn cấp", value: "📞 +82-61-680-4617" }
            ],
            section3Items: [
                { name: "Axit Nitric (Nitric acid)", cas: "7697-37-2", id: "KE-25911", percent: "65 ~ 70 %" },
                { name: "Nước (Water)", cas: "7732-18-5", id: "KE-35400", percent: "30 ~ 35 %" }
            ],
            section4Items: [
                { label: "Lưu ý bác sĩ", value: "Nhân viên sơ cứu phải đeo bảo hộ. Điều trị theo triệu chứng." }
            ],
            section5Items: [
                { label: "Chất chữa cháy", value: "Phun nước, bột khô, bọt, CO2" },
                { label: "Cấm kỵ", value: "🚫 Không dùng tia nước áp lực cao" },
                { label: "Đặc tính nguy hiểm", value: "Chất oxy hóa mạnh (Có thể gây cháy nổ)" }
            ],
            section6Items: [
                { label: "Bảo vệ con người", value: "Đeo PPE, thông gió. Tránh hít hơi." },
                { label: "Môi trường", value: "Không xả thải ra cống rãnh." },
                { label: "Cách xử lý", value: "Hấp thụ bằng cát/đất. Trung hòa và thải bỏ." }
            ],
            section7Items: [
                { label: "Thao tác", value: "Tránh nguồn nhiệt/lửa. Chỉ dùng nơi thoáng khí." },
                { label: "Bảo quản", value: "Thùng chống ăn mòn, khóa an toàn, tránh xa vật liệu cháy." }
            ],
            section8Items: [
                { name: "Axit Nitric", agency: "ISHA (Hàn Quốc)", val: "TWA 2 ppm, STEL 4 ppm" },
                { name: "Axit Nitric", agency: "ACGIH (Mỹ)", val: "TWA 2 ppm, STEL 4 ppm" }
            ],
            section9Items: [
                { label: "Ngoại quan", value: "Chất lỏng (Không màu)" },
                { label: "Mùi", value: "Mùi hắc (Kích ứng)" },
                { label: "pH", value: "< 1 (Axit mạnh)" },
                { label: "Tỷ trọng", value: "1.39 ~ 1.41" }
            ],
            section10Items: [
                { label: "Tính ổn định", value: "Ổn định thường. Nguy cơ cháy (Oxy hóa mạnh)." },
                { label: "Vật liệu tránh", value: "Chất dễ cháy, Kim loại, Chất khử." }
            ],
            section11Items: [
                { label: "Đường phơi nhiễm", value: "Ăn mòn da, Độc khi hít phải (hơi)" },
                { label: "Độc tính (Hít)", value: "LC50 >2.65 mg/l (Chuột, 4h)" }
            ],
            section12Items: [
                { label: "Độc tính cá", value: "LC50: 1559 mg/l" },
                { label: "Phân hủy", value: "Không phân hủy nhanh trong nước" }
            ],
            section13Items: [
                { label: "Thải bỏ", value: "Tuân thủ quy định về chất thải nguy hại." },
                { label: "Lưu ý", value: "Không tái sử dụng thùng chứa rỗng." }
            ],
            section14Items: [
                { label: "Số UN", value: "2031" },
                { label: "Tên vận chuyển", value: "NITRIC ACID" },
                { label: "Cấp độ nguy hiểm", value: "8 (Ăn mòn), 5.1 (Oxy hóa)" }
            ],
            section15Items: [
                { label: "Luật ATVSLĐ", value: "Chất thiết lập giới hạn phơi nhiễm, Quản lý đặc biệt" },
                { label: "Luật Hóa chất", value: "Chất độc, Chất chuẩn bị tai nạn (Số 46)" }
            ],
            section16Items: [
                { label: "Ngày sửa đổi", value: "27-08-2025 (v23.1)" },
                { label: "Nguồn dữ liệu", value: "KOSHA, NCIS, ECHA" }
            ]
        }
    },

    // 🇲🇲 미얀마어 (Myanmar) - 한국어 데이터 복사 (번역 대기)
    mm: {
        header: {
            productName: "နိုက်ထရစ်အက်ဆစ် အပျော့စား (65~70%)",
            productNameEn: "Dilute Nitric Acid",
            msdsNo: "AA01123-0000000002",
            revision: "2025-08-27 (နောက်ဆုံးပြင်ဆင်ချက်, v23.1)",
            signalWord: "အန္တရာယ်", // Danger
            source: "MOEL အမိန့်ကြော်ငြာစာ No. 2023-9 နှင့်အညီ"
        },
        sections: {
            ghs: "GHS သင်္ကေတများ",
            section1: "1. ထုတ်ကုန်နှင့် ကုမ္ပဏီ အချက်အလက်",
            section2: "2. အန္တရာယ်ရှိမှု ဖော်ပြချက်",
            section3: "3. ပါဝင်ပစ္စည်းများ",
            section4: "4. ရှေးဦးပြုစုခြင်း",
            section5: "5. မီးငြှိမ်းသတ်ခြင်း",
            section6: "6. မတော်တဆ ဖိတ်စင်မှု ဆိုင်ရာ အစီအမံများ",
            section7: "7. ကိုင်တွယ်ခြင်းနှင့် သိုလှောင်ခြင်း",
            section8: "8. ထိတွေ့မှု ထိန်းချုပ်ခြင်းနှင့် ကာကွယ်ရေး",
            section9: "9. ရုပ်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများ",
            section10: "10. တည်ငြိမ်မှုနှင့် ဓာတ်ပြုမှု",
            section11: "11. အဆိပ်သင့်မှု အချက်အလက်",
            section12: "12. သဘာဝပတ်ဝန်းကျင်ဆိုင်ရာ အချက်အလက်",
            section13: "13. စွန့်ပစ်ခြင်း ဆိုင်ရာ အချက်အလက်",
            section14: "14. သယ်ယူပို့ဆောင်ရေး အချက်အလက်",
            section15: "15. ဥပဒေစည်းမျဉ်းဆိုင်ရာ အချက်အလက်",
            section16: "16. အခြားအချက်အလက်များ",
        },
        content: {
            hazards: [
                "H271 - မီးလောင်မှု (သို့) ပေါက်ကွဲမှု ဖြစ်စေနိုင်သည် (ပြင်းထန် ဓာတ်တိုးပစ္စည်း)",
                "H290 - သတ္တုများကို တိုက်စားစေနိုင်သည်",
                "H314 - ပြင်းထန်သော အရေပြားလောင်ကျွမ်းမှုနှင့် မျက်လုံးထိခိုက်မှု ဖြစ်စေသည်",
                "H318 - ပြင်းထန်သော မျက်လုံးထိခိုက်မှု ဖြစ်စေသည်",
                "H331 - ရှူရှိုက်မိပါက အဆိပ်ဖြစ်စေသည် (အငွေ့)"
            ],
            precautionary: [
                {
                    title: "ကာကွယ်ခြင်း",
                    items: [
                        "P210 - အပူ၊ မီးပွား၊ မီးတောက်တို့နှင့် ဝေးရာတွင်ထားပါ။ ဆေးလိပ်မသောက်ရ။",
                        "P220 - မီးလောင်လွယ်သော ပစ္စည်းများနှင့် ဝေးရာတွင်ထားပါ။",
                        "P260 - အခိုးအငွေ့များကို မရှူရှိုက်ပါနှင့်။",
                        "P280 - ကာကွယ်ရေး ဝတ်စုံ/လက်အိတ်/မျက်မှန် ဝတ်ဆင်ပါ။"
                    ]
                },
                {
                    title: "တုံ့ပြန်ခြင်း",
                    items: [
                        "P305+P351+P338 - မျက်လုံးထဲဝင်လျှင် ရေဖြင့် ချက်ချင်းဆေးကြောပါ။",
                        "P303+P361+P353 - အရေပြားနှင့် ထိတွေ့လျှင် ညစ်ညမ်းနေသော အဝတ်များကို ချွတ်ပြီး ရေဖြင့်ဆေးပါ။",
                        "P310 - ဆရာဝန်နှင့် ချက်ချင်းပြသပါ။"
                    ]
                },
                {
                    title: "သိုလှောင်ခြင်း",
                    items: [
                        "P405 - သော့ခတ်၍ သိမ်းဆည်းပါ။",
                        "P406 - သတ္တုတိုက်စားမှု ခံနိုင်သော ဘူးတွင် သိမ်းပါ။"
                    ]
                },
                {
                    title: "စွန့်ပစ်ခြင်း",
                    items: [
                        "P501 - စည်မျဉ်းများနှင့်အညီ စွန့်ပစ်ပါ။"
                    ]
                }
            ],
            ppe: ["အသက်ရှူလမ်းကြောင်း ကာကွယ်ရေးကိရိယာ", "ဘေးကင်းရေး မျက်မှန်", "ဓာတုဗေဒ လက်အိတ်", "မီးဘေးကာကွယ်ရေး ဝတ်စုံ"],
            firstAid: {
                eye: "ရေဖြင့် မိနစ်အနည်းငယ်ကြာ ဂရုတစိုက် ဆေးကြောပါ။ မျက်ကပ်မှန်ပါက ဖယ်ရှားပါ။ ဆရာဝန် ခေါ်ပါ။",
                skin: "ညစ်ညမ်းသော အဝတ်အစားများကို ချက်ချင်းချွတ်ပါ။ အရေပြားကို ရေများများဖြင့် ဆေးကြောပါ။",
                inhalation: "လေကောင်းလေသန့် ရရှိသောနေရာသို့ ရွှေ့ပြီး အနားယူပါ။",
                ingestion: "ပါးစပ်ကို ဆေးကြောပါ။ အန်အောင် မလုပ်ပါနှင့်။ ဆရာဝန်နှင့် ချက်ချင်းပြသပါ။"
            },
            section1Items: [
                { label: "အသုံးပြုမှု", value: "ကုန်ကြမ်း၊ သတ္တုမျက်နှာပြင်သန့်စင်ဆေး၊ ဓာတ်တိုးပစ္စည်း၊ pH ထိန်းညှိဆေး" },
                { label: "ကန့်သတ်ချက်", value: "အကြံပြုထားသော အသုံးပြုမှုမှလွဲ၍ အခြားကိစ္စများတွင် အသုံးမပြုရ။" },
                { label: "ထုတ်လုပ်သူ", value: "TKG Huchems (Yeosu စက်ရုံ)" },
                { label: "အရေးပေါ်ဖုန်း", value: "+82-61-680-4617" }
            ],
            section3Items: [
                { name: "နိုက်ထရစ်အက်ဆစ် (Nitric acid)", cas: "7697-37-2", id: "KE-25911", percent: "65 ~ 70 %" },
                { name: "ရေ (Water)", cas: "7732-18-5", id: "KE-35400", percent: "30 ~ 35 %" }
            ],
            section4Items: [
                { label: "ဆရာဝန်အတွက် မှတ်ချက်", value: "ရှေးဦးပြုစုသူများသည် ကာကွယ်ရေးဝတ်စုံ ဝတ်ဆင်ရမည်။ လက္ခဏာအလိုက် ကုသပါ။" }
            ],
            section5Items: [
                { label: "သင့်လျော်သော မီးငြှိမ်းသတ်ဆေး", value: "ရေမှုန်၊ အမှုန့်ခြောက်၊ အမြှုပ်၊ CO2" },
                { label: "မသင့်လျော်သော အရာ", value: "ရေဖိအားပြင်းပြင်း မသုံးရ။" },
                { label: "အန္တရာယ်များ", value: "ပြင်းထန် ဓာတ်တိုးပစ္စည်း (မီးလောင်ပေါက်ကွဲမှု ဖြစ်စေနိုင်)" }
            ],
            section6Items: [
                { label: "လူကို ကာကွယ်ခြင်း", value: "PPE ဝတ်ဆင်ပါ။ လေဝင်လေထွက်ကောင်းအောင် လုပ်ပါ။ အငွေ့မရှူရ။" },
                { label: "ပတ်ဝန်းကျင် ကာကွယ်ခြင်း", value: "ရေဆိုးမြောင်းများထဲသို့ မဝင်စေရ။" },
                { label: "ရှင်းလင်းနည်း", value: "သဲ (သို့) မြေကြီးဖြင့် စုပ်ယူပါ။ ဓာတ်ပျယ်အောင်ပြုလုပ်ပါ။" }
            ],
            section7Items: [
                { label: "ကိုင်တွယ်ခြင်း", value: "မီးပွား၊ အပူချိန် မြင့်မားမှုတို့နှင့် ဝေးရာတွင်ထားပါ။ လေဝင်လေထွက်ကောင်းသော နေရာတွင်သာ သုံးပါ။" },
                { label: "သိုလှောင်ခြင်း", value: "သတ္တုတိုက်စားမှု ခံနိုင်သော ဘူး၊ သော့ခတ်ထားရှိမှု၊ လေဝင်လေထွက်ကောင်းသော နေရာ။" }
            ],
            section8Items: [
                { name: "Nitric acid", agency: "ISHA/ACGIH", val: "TWA 2 ppm, STEL 4 ppm" }
            ],
            section9Items: [
                { label: "ပုံသဏ္ဍာန်", value: "အရည် (အရောင်မဲ့)" },
                { label: "အနံ့", value: "စူးရှသော အနံ့" },
                { label: "pH", value: "< 1 (အက်ဆစ်ပြင်း)" },
                { label: "သိပ်သည်းဆ", value: "1.39 ~ 1.41" }
            ],
            section10Items: [
                { label: "တည်ငြိမ်မှု", value: "ပုံမှန်အခြေအနေတွင် တည်ငြိမ်သည်။" },
                { label: "ရှောင်ရှားရမည့် အရာ", value: "အပူ၊ မီးတောက်၊ မီးလောင်လွယ်သော ပစ္စည်းများ၊ သတ္တုများ။" }
            ],
            section11Items: [
                { label: "ထိတွေ့မှု", value: "အရေပြား လောင်ကျွမ်းခြင်း၊ ရှူရှိုက်မိပါက အဆိပ်သင့်ခြင်း" },
                { label: "အဆိပ်သင့်မှု (LC50)", value: ">2.65 mg/l (Rat, 4h)" }
            ],
            section12Items: [
                { label: "ဂေဟစနစ် အဆိပ်သင့်မှု", value: "LC50 (Fish): 1559 mg/l" },
                { label: "ဆွေးမြေ့ပျက်စီးခြင်း", value: "လျင်မြန်စွာ မပျက်စီးပါ။" }
            ],
            section13Items: [
                { label: "စွန့်ပစ်နည်း", value: "ဥပဒေလုပ်ထုံးလုပ်နည်းများနှင့်အညီ စွန့်ပစ်ပါ။" },
                { label: "သတိပေးချက်", value: "ဘူးခွံကို ပြန်လည်အသုံးမပြုရ။" }
            ],
            section14Items: [
                { label: "UN No.", value: "2031" },
                { label: "Shipping Name", value: "NITRIC ACID" },
                { label: "Class", value: "8 (Corrosive), 5.1 (Oxidizing)" },
                { label: "Packing Group", value: "II" }
            ],
            section15Items: [
                { label: "MOEL စည်းမျဉ်း", value: "မတော်တဆမှု ကြိုတင်ပြင်ဆင်ရမည့် ပစ္စည်း (Accident Precaution Chemical)" }
            ],
            section16Items: [
                { label: "အရင်းအမြစ်", value: "KOSHA, NCIS" },
                { label: "ရက်စွဲ", value: "2025-08-27 (v23.1)" }
            ]
        }
    },

    // 🇰🇭 캄보디아어 (Khmer) - 한국어 데이터 복사 (번역 대기)
    kh: {
        header: {
            productName: "អាស៊ីតនីទ្រិក (65~70%)",
            productNameEn: "Dilute Nitric Acid",
            msdsNo: "AA01123-0000000002",
            revision: "2025-08-27 (កំណែចុងក្រោយ v23.1)",
            signalWord: "គ្រោះថ្នាក់", // Danger
            source: "អនុលោមតាមសេចក្តីជូនដំណឹង MOEL លេខ 2023-9"
        },
        sections: {
            ghs: "និមិត្តសញ្ញា GHS",
            section1: "1. ព័ត៌មានអំពីផលិតផល និងក្រុមហ៊ុន",
            section2: "2. ការកំណត់អត្តសញ្ញាណគ្រោះថ្នាក់",
            section3: "3. គ្រឿងផ្សំ",
            section4: "4. វិធានការសង្គ្រោះបឋម",
            section5: "5. វិធានការពន្លត់អគ្គីភ័យ",
            section6: "6. វិធានការដោះស្រាយការកំពប់",
            section7: "7. ការកាន់ និងរក្សាទុក",
            section8: "8. ការត្រួតពិនិត្យការប៉ះពាល់ និងការការពារផ្ទាល់ខ្លួន",
            section9: "9. លក្ខណៈរូបវន្ត និងគីមី",
            section10: "10. ស្ថេរភាព និងប្រតិកម្ម",
            section11: "11. ព័ត៌មានអំពីជាតិពុល",
            section12: "12. ព័ត៌មានបរិស្ថាន",
            section13: "13. ការចោលសំណល់",
            section14: "14. ព័ត៌មានដឹកជញ្ជូន",
            section15: "15. ព័ត៌មានបទប្បញ្ញត្តិ",
            section16: "16. ព័ត៌មានផ្សេងៗ",
        },
        content: {
            hazards: [
                "H271 - អាចបង្កឱ្យមានអគ្គីភ័យ ឬការផ្ទុះ (សារធាតុអុកស៊ីតកម្មខ្លាំង)",
                "H290 - អាចច្រេះលោហៈ",
                "H314 - បណ្តាលឱ្យរលាកស្បែកធ្ងន់ធ្ងរ និងខូចភ្នែក",
                "H318 - បណ្តាលឱ្យខូចភ្នែកធ្ងន់ធ្ងរ",
                "H331 - ពុលប្រសិនបើស្រូបចូល (ចំហាយ)"
            ],
            precautionary: [
                {
                    title: "ការបង្ការ",
                    items: [
                        "P210 - រក្សាឱ្យឆ្ងាយពីកំដៅ ផ្កាភ្លើង និងអណ្តាតភ្លើង។ ហាមជក់បារី។",
                        "P220 - រក្សាឱ្យឆ្ងាយពីវត្ថុធាតុងាយឆេះ។",
                        "P260 - កុំស្រូបចំហាយ/ឧស្ម័ន។",
                        "P280 - ស្លៀកពាក់ឧបករណ៍ការពារ (PPE)។"
                    ]
                },
                {
                    title: "ការឆ្លើយតប",
                    items: [
                        "P305+P351+P338 - ប្រសិនបើចូលភ្នែក៖ លាងទឹកឱ្យបានច្រើននាទី។",
                        "P303+P361+P353 - ប្រសិនបើប៉ះស្បែក៖ ដោះសម្លៀកបំពាក់កខ្វក់ចេញជាបន្ទាន់។ លាងសម្អាតជាមួយទឹក។",
                        "P310 - ហៅទូរស័ព្ទទៅវេជ្ជបណ្ឌិតជាបន្ទាន់។"
                    ]
                },
                {
                    title: "ការផ្ទុក",
                    items: [
                        "P405 - រក្សាទុកនៅកន្លែងដែលមានសោ។",
                        "P406 - រក្សាទុកក្នុងធុងដែលធន់នឹងការច្រេះ។"
                    ]
                },
                {
                    title: "ការចោល",
                    items: [
                        "P501 - ចោលសំណល់តាមច្បាប់កំណត់។"
                    ]
                }
            ],
            ppe: ["របាំងការពារផ្លូវដង្ហើម", "វ៉ែនតាសុវត្ថិភាព", "ស្រោមដៃគីមី", "សម្លៀកបំពាក់ការពារភ្លើង"],
            firstAid: {
                eye: "លាងសម្អាតដោយប្រុងប្រយ័ត្នជាមួយទឹក។ ដោះលែនភ្នែកចេញ។ ទៅជួបគ្រូពេទ្យភ្លាមៗ។",
                skin: "ដោះសម្លៀកបំពាក់ដែលប្រឡាក់ចេញ។ លាងសម្អាតស្បែកដោយទឹកច្រើន។",
                inhalation: "ផ្លាស់ទីទៅកន្លែងដែលមានខ្យល់បរិសុទ្ធ។",
                ingestion: "លាងមាត់។ ហាមធ្វើឱ្យក្អួត។ ទៅជួបគ្រូពេទ្យភ្លាមៗ។"
            },
            section1Items: [
                { label: "ការប្រើប្រាស់", value: "វត្ថុធាតុដើម, ភ្នាក់ងារព្យាបាលផ្ទៃលោហៈ, ភ្នាក់ងារអុកស៊ីតកម្ម, ការកែតម្រូវ pH" },
                { label: "ការរឹតបន្តឹង", value: "ហាមប្រើក្រៅពីគោលបំណងដែលបានណែនាំ។" },
                { label: "អ្នកផ្គត់ផ្គង់", value: "TKG Huchems (Yeosu)" },
                { label: "លេខសង្គ្រោះបន្ទាន់", value: "+82-61-680-4617" }
            ],
            section3Items: [
                { name: "អាស៊ីតនីទ្រិក (Nitric acid)", cas: "7697-37-2", id: "KE-25911", percent: "65 ~ 70 %" },
                { name: "ទឹក (Water)", cas: "7732-18-5", id: "KE-35400", percent: "30 ~ 35 %" }
            ],
            section4Items: [
                { label: "ចំណាំសម្រាប់គ្រូពេទ្យ", value: "អ្នកសង្គ្រោះត្រូវពាក់ PPE ។ ព្យាបាលតាមរោគសញ្ញា។" }
            ],
            section5Items: [
                { label: "ភ្នាក់ងារពន្លត់សមស្រប", value: "បាញ់ទឹក ម្សៅស្ងួត ពពុះ CO2" },
                { label: "មិនសមស្រប", value: "ហាមប្រើទឹកសម្ពាធខ្ពស់។" },
                { label: "គ្រោះថ្នាក់", value: "អុកស៊ីតកម្មខ្លាំង (អាចបង្កើនអគ្គីភ័យ)" }
            ],
            section6Items: [
                { label: "ការការពារមនុស្ស", value: "ពាក់ PPE ខ្យល់ចេញចូល ហាមភ្លើង។" },
                { label: "បរិស្ថាន", value: "ហាមបង្ហូរចូលលូ។" },
                { label: "ការសម្អាត", value: "ស្រូបយកដោយខ្សាច់/ដី។" }
            ],
            section7Items: [
                { label: "ការកាន់", value: "នៅឱ្យឆ្ងាយពីកំដៅ។ ប្រើតែនៅកន្លែងដែលមានខ្យល់ចេញចូលល្អ។" },
                { label: "ការផ្ទុក", value: "ធុងធន់នឹងការច្រេះ ចាក់សោ កន្លែងត្រជាក់។" }
            ],
            section8Items: [
                { name: "Nitric acid", agency: "ISHA/ACGIH", val: "TWA 2 ppm, STEL 4 ppm" }
            ],
            section9Items: [
                { label: "រូបរាង", value: "រាវ (គ្មានពណ៌)" },
                { label: "ក្លិន", value: "ក្លិនឆួល" },
                { label: "pH", value: "< 1 (អាស៊ីតខ្លាំង)" },
                { label: "ទំនាញជាក់លាក់", value: "1.39 ~ 1.41" }
            ],
            section10Items: [
                { label: "ស្ថេរភាព", value: "មានស្ថេរភាពនៅលក្ខខណ្ឌធម្មតា។" },
                { label: "វត្ថុដែលត្រូវជៀសវាង", value: "កំដៅ អណ្តាតភ្លើង សារធាតុងាយឆេះ លោហធាតុ។" }
            ],
            section11Items: [
                { label: "ផ្លូវនៃការប៉ះពាល់", value: "រលាកស្បែក/ភ្នែក, ស្រូបចូល (ពុល)" },
                { label: "ការពុលស្រួចស្រាវ", value: "LC50 (Rat): >2.65 mg/l (4h)" }
            ],
            section12Items: [
                { label: "ការពុលអេកូឡូស៊ី", value: "LC50 (Fish): 1559 mg/l" },
                { label: "ការបំបែកធាតុ", value: "មិនបំបែកលឿនទេ។" }
            ],
            section13Items: [
                { label: "វិធីសាស្រ្តចោល", value: "អនុលោមតាមច្បាប់សំណល់គ្រោះថ្នាក់។" },
                { label: "ការប្រុងប្រយ័ត្ន", value: "ហាមប្រើធុងឡើងវិញ។" }
            ],
            section14Items: [
                { label: "លេខ UN", value: "2031" },
                { label: "ឈ្មោះដឹកជញ្ជូន", value: "NITRIC ACID" },
                { label: "ថ្នាក់គ្រោះថ្នាក់", value: "8 (Corrosive), 5.1 (Oxidizing)" },
                { label: "ក្រុមវេចខ្ចប់", value: "II" }
            ],
            section15Items: [
                { label: "ច្បាប់ MOEL", value: "សារធាតុគីមីដែលត្រូវការការប្រុងប្រយ័ត្នចំពោះគ្រោះថ្នាក់" }
            ],
            section16Items: [
                { label: "ប្រភព", value: "KOSHA, NCIS" },
                { label: "កាលបរិច្ឆេទ", value: "2025-08-27 (v23.1)" }
            ]
        }
    },

    // 🇺🇿 우즈베키스탄어 (Uzbek) - 한국어 데이터 복사 (번역 대기)
    uz: {
        header: {
            productName: "Suyultirilgan Nitrat Kislota (65~70%)",
            productNameEn: "Dilute Nitric Acid",
            msdsNo: "AA01123-0000000002",
            revision: "2025-08-27 (Oxirgi tahrir, v23.1)",
            signalWord: "XAVFLI",
            source: "MOEL № 2023-9 ko'rsatmasiga muvofiq"
        },
        sections: {
            ghs: "GHS Piktogrammalari",
            section1: "1. Mahsulot va kompaniya haqida ma'lumot",
            section2: "2. Xavflarni aniqlash",
            section3: "3. Tarkibi",
            section4: "4. Birinchi yordam choralari",
            section5: "5. Yong'inga qarshi choralar",
            section6: "6. To'kilganda ko'riladigan choralar",
            section7: "7. Ishlatish va saqlash",
            section8: "8. Ta'sirni nazorat qilish va Shaxsiy himoya",
            section9: "9. Fizik va kimyoviy xususiyatlar",
            section10: "10. Barqarorlik va reaktivlik",
            section11: "11. Toksikologik ma'lumotlar",
            section12: "12. Ekologik ma'lumotlar",
            section13: "13. Chiqindilarni yo'q qilish",
            section14: "14. Tashish bo'yicha ma'lumot",
            section15: "15. Normativ ma'lumotlar",
            section16: "16. Boshqa ma'lumotlar",
        },
        content: {
            hazards: [
                "H271 - Yong'in yoki portlashga olib kelishi mumkin (Kuchli oksidlovchi)",
                "H290 - Metallarni korroziyaga uchratishi mumkin",
                "H314 - Terining qattiq kuyishi va ko'zning shikastlanishiga olib keladi",
                "H318 - Ko'zning jiddiy shikastlanishiga olib keladi",
                "H331 - Nafas olganda zaharli (Bug')"
            ],
            precautionary: [
                {
                    title: "Oldini olish",
                    items: [
                        "P210 - Issiqlik, uchqun va olovdan uzoqroq tuting. Chekmang.",
                        "P220 - Yonuvchan materiallardan uzoqroq tuting.",
                        "P260 - Bug'/gazni nafas qilmang.",
                        "P280 - Himoya kiyimi/qo'lqop/ko'zoynak taqing."
                    ]
                },
                {
                    title: "Javob choralari",
                    items: [
                        "P305+P351+P338 - KO'ZGA TUSHGANDA: Bir necha daqiqa suv bilan yuving.",
                        "P303+P361+P353 - TERIGA TEKKANDA: Ifloslangan kiyimlarni yeching, suv bilan yuving.",
                        "P310 - Darhol shifokorga murojaat qiling."
                    ]
                },
                {
                    title: "Saqlash",
                    items: [
                        "P405 - Qulf ostida saqlang.",
                        "P406 - Korroziyaga chidamli idishda saqlang."
                    ]
                },
                {
                    title: "Yo'q qilish",
                    items: [
                        "P501 - Qonunchilikka muvofiq yo'q qiling."
                    ]
                }
            ],
            ppe: ["Respirator", "Himoya ko'zoynagi", "Kimyoviy qo'lqoplar", "Yong'inga chidamli kiyim"],
            firstAid: {
                eye: "Suv bilan ehtiyotkorlik bilan yuving. Kontakt linzalarini olib tashlang. Darhol shifokorni chaqiring.",
                skin: "Ifloslangan kiyimlarni yeching. Terini ko'p miqdorda suv bilan yuving.",
                inhalation: "Toza havoga olib chiqing va dam oling.",
                ingestion: "Og'izni yuving. Qusishni keltirib chiqarmang. Darhol shifokorni chaqiring."
            },
            section1Items: [
                { label: "Foydalanish", value: "Xom ashyo, Metall sirtini tozalash, Oksidlovchi, pH rostlagich" },
                { label: "Cheklovlar", value: "Tavsiya etilganidan boshqa maqsadlarda ishlatmang." },
                { label: "Yetkazib beruvchi", value: "TKG Huchems (Yeosu zavodi)" },
                { label: "Favqulodda aloqa", value: "+82-61-680-4617" }
            ],
            section3Items: [
                { name: "Nitrat kislota (Nitric acid)", cas: "7697-37-2", id: "KE-25911", percent: "65 ~ 70 %" },
                { name: "Suv (Water)", cas: "7732-18-5", id: "KE-35400", percent: "30 ~ 35 %" }
            ],
            section4Items: [
                { label: "Shifokorga eslatma", value: "Qutqaruvchilar shaxsiy himoya vositalarini taqishlari kerak. Semptomatik davolash." }
            ],
            section5Items: [
                { label: "Mos o'chirish vositalari", value: "Suv purkagich, quruq kukun, ko'pik, CO2" },
                { label: "Nomos vositalar", value: "Yuqori bosimli suv oqimidan foydalanmang." },
                { label: "Xavflar", value: "Kuchli oksidlovchi (Yong'inni kuchaytirishi mumkin)" }
            ],
            section6Items: [
                { label: "Shaxsiy himoya", value: "PPE taqing, shamollating. Bug'lardan saqlaning." },
                { label: "Atrof-muhit", value: "Kanalizatsiyaga oqizib yubormang." },
                { label: "Tozalash", value: "Qum yoki tuproq bilan shimdirib oling." }
            ],
            section7Items: [
                { label: "Ishlatish", value: "Issiqlik manbalaridan uzoqroq tuting. Faqat yaxshi shamollatiladigan joyda ishlating." },
                { label: "Saqlash", value: "Korroziyaga chidamli idish, qulf, salqin joy." }
            ],
            section8Items: [
                { name: "Nitric acid", agency: "ISHA/ACGIH", val: "TWA 2 ppm, STEL 4 ppm" }
            ],
            section9Items: [
                { label: "Ko'rinishi", value: "Suyuqlik (Rangsiz)" },
                { label: "Hidi", value: "O'tkir hid" },
                { label: "pH", value: "< 1 (Kuchli kislota)" },
                { label: "Zichlik", value: "1.39 ~ 1.41" }
            ],
            section10Items: [
                { label: "Barqarorlik", value: "Oddiy sharoitlarda barqaror." },
                { label: "Saqlanishi kerak", value: "Issiqlik, olov, yonuvchan moddalar, metallar." }
            ],
            section11Items: [
                { label: "Ta'sir yo'llari", value: "Teri/Ko'z kuyishi, Nafas olish (Zaharli)" },
                { label: "O'tkir toksiklik", value: "LC50 (Rat): >2.65 mg/l (4h)" }
            ],
            section12Items: [
                { label: "Ekotoksiklik", value: "LC50 (Baliq): 1559 mg/l" },
                { label: "Parchalanish", value: "Tez parchalanmaydi." }
            ],
            section13Items: [
                { label: "Yo'q qilish usuli", value: "Xavfli chiqindilar to'g'risidagi qonunlarga rioya qiling." },
                { label: "Ehtiyot choralari", value: "Bo'sh idishlarni qayta ishlatmang." }
            ],
            section14Items: [
                { label: "UN Raqami", value: "2031" },
                { label: "Tashish nomi", value: "NITRIC ACID" },
                { label: "Xavf sinfi", value: "8 (Corrosive), 5.1 (Oxidizing)" },
                { label: "Qadoqlash guruhi", value: "II" }
            ],
            section15Items: [
                { label: "MOEL Qoidalari", value: "Baxtsiz hodisalarga qarshi ehtiyot choralarini talab qiluvchi modda" }
            ],
            section16Items: [
                { label: "Manba", value: "KOSHA, NCIS" },
                { label: "Sana", value: "2025-08-27 (v23.1)" }
            ]
        }
    }
};




export const phosphoricTranslations: Record<LangCode, MSDSContent> = {
    // ----------------------------------------------------------------------
    // 🇰🇷 한국어 (Korean) - OCI 인산 85% MSDS Full Data
    // ----------------------------------------------------------------------
    ko: {
        header: {
            productName: "🧪 인산 (H3PO4, 85%)",
            productNameEn: "Phosphoric Acid",
            msdsNo: "AA00725-0000006002",
            revision: "2024-02-07 (개정 33차)",
            signalWord: "⛔ 위험 (DANGER)",
            source: "OCI(주) 군산공장 MSDS"
        },
        sections: {
            ghs: "⚠️ GHS 그림문자",
            section1: "1. 🏢 화학제품과 회사 정보",
            section2: "2. ☢️ 유해성·위험성",
            section3: "3. 🧪 구성성분의 명칭 및 함유량",
            section4: "4. 🚑 응급조치 요령",
            section5: "5. 🔥 폭발·화재시 대처방법",
            section6: "6. 🧹 누출 사고 시 대처방법",
            section7: "7. 🤲 취급 및 저장방법",
            section8: "8. 😷 노출방지 및 개인보호구",
            section9: "9. 🌡️ 물리화학적 특성",
            section10: "10. 💥 안정성 및 반응성",
            section11: "11. ☠️ 독성에 관한 정보",
            section12: "12. 🐟 환경에 미치는 영향",
            section13: "13. 🗑️ 폐기시 주의사항",
            section14: "14. 🚚 운송에 필요한 정보",
            section15: "15. ⚖️ 법적 규제현황",
            section16: "16. 📝 그 밖의 참고사항",
        },
        content: {
            hazards: [
                "🧴 H314 - 피부에 심한 화상 또는 눈에 손상을 일으킴",
                "👁️ H318 - 눈에 심한 손상을 일으킴",
                "☠️ H331 - 흡입하면 유독함 (미스트)",
                "🌬️ H335 - 호흡기 자극을 일으킬 수 있음"
            ],
            precautionary: [
                {
                    title: "🛡️ 예방",
                    items: [
                        "P260 - 분진/흄/가스/미스트/증기/스프레이를 흡입하지 마시오.",
                        "P264 - 취급 후에는 취급 부위를 철저히 씻으시오.",
                        "P280 - 보호장갑/보호의/보안경/안면보호구를 착용하시오."
                    ]
                },
                {
                    title: "🚨 대응",
                    items: [
                        "👄 P301+P330+P331 - 삼켰다면 입을 씻어내시오. 토하게 하지 마시오.",
                        "🧴 P303+P361+P353 - 피부에 묻으면 오염된 의복을 벗고 물로 씻으시오/샤워하시오.",
                        "👁️ P305+P351+P338 - 눈에 묻으면 몇 분간 물로 조심해서 씻으시오. 콘택트렌즈 제거.",
                        "🏥 P310 - 즉시 의료기관(의사)의 진찰을 받으시오."
                    ]
                },
                {
                    title: "🔒 저장",
                    items: [
                        "P403+P233 - 환기가 잘 되는 곳에 밀폐하여 보관하시오.",
                        "P405 - 잠금장치가 있는 저장장소에 저장하시오."
                    ]
                },
                {
                    title: "🗑️ 폐기",
                    items: [
                        "P501 - 폐기물 관련 법령에 따라 내용물/용기를 폐기하시오."
                    ]
                }
            ],
            ppe: ["😷 방독마스크 (인증품)", "🥽 보안경/보안면", "🧤 화학물질용 안전 장갑", "🦺 보호복/안전화"],
            firstAid: {
                eye: "👁️ 즉시 15분 이상 다량의 물로 씻어내시오. 콘택트렌즈 제거. 즉시 의사 진찰.",
                skin: "🧴 즉시 15분 이상 다량의 물로 씻어내시오. 오염된 의복 제거. 즉시 의사 진찰.",
                inhalation: "🌬️ 신선한 공기가 있는 곳으로 이동. 호흡 곤란 시 의료 조치.",
                ingestion: "👄 입을 씻어내시오. 토하게 하지 마시오. 즉시 의사 진찰."
            },
            section1Items: [
                { label: "권고 용도", value: "금속표면 처리(반도체), 식품첨가제, 의약원료, 폐수처리" },
                { label: "공급자", value: "OCI(주) 군산공장" },
                { label: "긴급전화", value: "📞 063-460-6322 (품질), 063-460-6211 (생산)" }
            ],
            section3Items: [
                { name: "인산 (PHOSPHORIC ACID)", cas: "7664-38-2", id: "-", percent: "85.0 %" },
                { name: "물 (DIHYDROGEN OXIDE)", cas: "7732-18-5", id: "-", percent: "15.0 %" }
            ],
            section4Items: [
                { label: "의사 주의사항", value: "화학물질 접촉 시 즉시 전문의 치료 요망." }
            ],
            section5Items: [
                { label: "적절한 소화제", value: "이산화탄소, 알코올 포말, 물분무" },
                { label: "특정 유해성", value: "열분해 시 유독한 가스(인산화물) 발생 가능" }
            ],
            section6Items: [
                { label: "인체 보호", value: "미스트 흡입 회피. 보호구 착용." },
                { label: "제거 방법", value: "모래/흙으로 흡수하여 폐기. 다량의 물로 세척." }
            ],
            section7Items: [
                { label: "취급 요령", value: "환기 잘 되는 곳 취급. 피부 접촉 방지. 겨울철 동결 주의." },
                { label: "저장 방법", value: "밀폐 보관. 음식/음료수와 격리." }
            ],
            section8Items: [
                { name: "인산 (한국)", agency: "고용노동부", val: "TWA 1 mg/m³" },
                { name: "인산 (ACGIH)", agency: "ACGIH", val: "TWA 1 mg/m³" }
            ],
            section9Items: [
                { label: "성상/색상", value: "액체 / 무색 (점성 있음)" },
                { label: "pH", value: "1.5 (0.1N 용액)" },
                { label: "어는점", value: "약 21℃ (겨울철 결정화 주의)" },
                { label: "비중", value: "1.685 (25℃)" }
            ],
            section10Items: [
                { label: "반응성", value: "고온에서 분해되어 유독 가스 발생." },
                { label: "안정성", value: "일반 상온 압력에서 안정." }
            ],
            section11Items: [
                { label: "노출 경로", value: "흡입(유해), 섭취(유해), 피부(부식), 눈(화상)" },
                { label: "급성독성(경구)", value: "LD50 3,500 mg/kg (Rat)" }
            ],
            section12Items: [
                { label: "생태독성", value: "수생생물에 유해할 수 있음 (산성도 변화)" }
            ],
            section13Items: [
                { label: "폐기 방법", value: "지정폐기물로 처리 (알칼리 중화 후 처리 권장)." }
            ],
            section14Items: [
                { label: "UN 번호", value: "1805" },
                { label: "선적명", value: "PHOSPHORIC ACID SOLUTION" },
                { label: "위험 등급", value: "8 (부식성)" }
            ],
            section15Items: [
                { label: "산업안전보건법", value: "관리대상유해물질, 노출기준설정물질" },
                { label: "폐기물관리법", value: "지정폐기물" }
            ],
            section16Items: [
                { label: "개정일", value: "2024-02-07 (33회 개정)" },
                { label: "출처", value: "OCI, KOSHA, ACGIH" }
            ]
        }
    },

    // (다른 언어는 한국어 데이터 복사 후 번역 대기)
    vn: {
        header: {
            productName: "🧪 Axit Photphoric (H3PO4, 85%)",
            productNameEn: "Phosphoric Acid",
            msdsNo: "AA00725-0000006002",
            revision: "07-02-2024 (Lần sửa đổi thứ 33)",
            signalWord: "⛔ NGUY HIỂM (DANGER)",
            source: "MSDS Nhà máy OCI Gunsan"
        },
        sections: {
            ghs: "⚠️ Hình đồ cảnh báo GHS",
            section1: "1. 🏢 Thông tin sản phẩm & Công ty",
            section2: "2. ☢️ Nhận dạng đặc tính nguy hiểm",
            section3: "3. 🧪 Thành phần và hàm lượng",
            section4: "4. 🚑 Biện pháp sơ cứu",
            section5: "5. 🔥 Biện pháp chữa cháy",
            section6: "6. 🧹 Biện pháp xử lý khi rò rỉ",
            section7: "7. 🤲 Thao tác và bảo quản",
            section8: "8. 😷 Kiểm soát phơi nhiễm & Bảo hộ",
            section9: "9. 🌡️ Đặc tính lý hóa",
            section10: "10. 💥 Tính ổn định & Phản ứng",
            section11: "11. ☠️ Thông tin về độc tính",
            section12: "12. 🐟 Ảnh hưởng đến môi trường",
            section13: "13. 🗑️ Lưu ý khi thải bỏ",
            section14: "14. 🚚 Thông tin vận chuyển",
            section15: "15. ⚖️ Thông tin pháp luật",
            section16: "16. 📝 Thông tin khác",
        },
        content: {
            hazards: [
                "🧴 H314 - Gây bỏng da nặng và tổn thương mắt",
                "👁️ H318 - Gây tổn thương mắt nghiêm trọng",
                "☠️ H331 - Độc nếu hít phải (Dạng sương mù)",
                "🌬️ H335 - Có thể gây kích ứng đường hô hấp"
            ],
            precautionary: [
                {
                    title: "🛡️ Phòng ngừa",
                    items: [
                        "P260 - Không hít phải bụi/khói/khí/sương/hơi/phun.",
                        "P264 - Rửa kỹ các bộ phận tiếp xúc sau khi xử lý.",
                        "P280 - Mặc găng tay/quần áo bảo hộ/kính bảo vệ mắt/mặt."
                    ]
                },
                {
                    title: "🚨 Ứng phó",
                    items: [
                        "👄 P301+P330+P331 - NẾU NUỐT: Súc miệng. KHÔNG gây nôn.",
                        "🧴 P303+P361+P353 - NẾU DÍNH DA: Cởi bỏ ngay quần áo nhiễm bẩn. Rửa da bằng nước/tắm.",
                        "👁️ P305+P351+P338 - NẾU DÍNH MẮT: Rửa cẩn thận bằng nước trong vài phút. Tháo kính áp tròng.",
                        "🏥 P310 - Gọi ngay Trung tâm Chống độc hoặc bác sĩ."
                    ]
                },
                {
                    title: "🔒 Lưu trữ",
                    items: [
                        "P403+P233 - Bảo quản nơi thoáng mát. Giữ thùng chứa đóng chặt.",
                        "P405 - Cất giữ nơi có khóa."
                    ]
                },
                {
                    title: "🗑️ Thải bỏ",
                    items: [
                        "P501 - Vứt bỏ nội dung/thùng chứa theo quy định pháp luật."
                    ]
                }
            ],
            ppe: ["😷 Mặt nạ phòng độc", "🥽 Kính bảo hộ", "🧤 Găng tay chống hóa chất", "🦺 Quần áo bảo hộ"],
            firstAid: {
                eye: "👁️ Rửa ngay bằng nhiều nước ít nhất 15 phút. Tháo kính áp tròng. Gọi bác sĩ ngay.",
                skin: "🧴 Rửa ngay bằng nhiều nước ít nhất 15 phút. Cởi bỏ quần áo nhiễm bẩn. Gọi bác sĩ ngay.",
                inhalation: "🌬️ Di chuyển ra nơi thoáng khí. Nếu khó thở, cần chăm sóc y tế.",
                ingestion: "👄 Súc miệng. KHÔNG gây nôn. Gọi bác sĩ ngay lập tức."
            },
            section1Items: [
                { label: "Sử dụng", value: "Xử lý bề mặt kim loại (Bán dẫn), Phụ gia thực phẩm, Xử lý nước thải" },
                { label: "Nhà cung cấp", value: "OCI (Nhà máy Gunsan)" },
                { label: "Khẩn cấp", value: "📞 063-460-6322 (Chất lượng)" }
            ],
            section3Items: [
                { name: "Axit Photphoric (H3PO4)", cas: "7664-38-2", id: "-", percent: "85.0 %" },
                { name: "Nước (H2O)", cas: "7732-18-5", id: "-", percent: "15.0 %" }
            ],
            section4Items: [
                { label: "Lưu ý bác sĩ", value: "Cần điều trị y tế ngay lập tức khi tiếp xúc hóa chất." }
            ],
            section5Items: [
                { label: "Chất chữa cháy", value: "CO2, Bọt cồn, Phun nước" },
                { label: "Đặc tính nguy hiểm", value: "Sinh ra khí độc (Oxit phốt pho) khi bị nhiệt phân." }
            ],
            section6Items: [
                { label: "Bảo vệ con người", value: "Tránh hít sương mù. Đeo PPE." },
                { label: "Xử lý", value: "Hấp thụ bằng cát/đất. Rửa sạch khu vực bằng nước." }
            ],
            section7Items: [
                { label: "Thao tác", value: "Dùng nơi thoáng khí. Tránh đông đặc vào mùa đông." },
                { label: "Bảo quản", value: "Kín. Cách ly thực phẩm/đồ uống." }
            ],
            section8Items: [
                { name: "Axit Photphoric (Hàn Quốc)", agency: "MOEL", val: "TWA 1 mg/m³" },
                { name: "Axit Photphoric (Mỹ)", agency: "ACGIH", val: "TWA 1 mg/m³" }
            ],
            section9Items: [
                { label: "Ngoại quan", value: "Chất lỏng / Không màu (Nhớt)" },
                { label: "pH", value: "1.5 (Dung dịch 0.1N)" },
                { label: "Điểm đông đặc", value: "Khoảng 21℃ (Chú ý kết tinh mùa đông)" },
                { label: "Tỷ trọng", value: "1.685 (25℃)" }
            ],
            section10Items: [
                { label: "Phản ứng", value: "Phân hủy ở nhiệt độ cao sinh khí độc." },
                { label: "Độ ổn định", value: "Ổn định ở điều kiện thường." }
            ],
            section11Items: [
                { label: "Đường phơi nhiễm", value: "Hít phải (Hại), Nuốt (Hại), Da (Ăn mòn), Mắt (Bỏng)" },
                { label: "Độc tính (Miệng)", value: "LD50 3,500 mg/kg (Chuột)" }
            ],
            section12Items: [
                { label: "Độc tính sinh thái", value: "Có thể hại cho sinh vật thủy sinh (do độ axit)." }
            ],
            section13Items: [
                { label: "Thải bỏ", value: "Chất thải chỉ định (Khuyến nghị trung hòa kiềm)." }
            ],
            section14Items: [
                { label: "Số UN", value: "1805" },
                { label: "Tên vận chuyển", value: "PHOSPHORIC ACID SOLUTION" },
                { label: "Cấp độ nguy hiểm", value: "8 (Chất ăn mòn)" }
            ],
            section15Items: [
                { label: "Luật ATVSLĐ", value: "Chất quản lý, Thiết lập giới hạn phơi nhiễm" },
                { label: "Luật Chất thải", value: "Chất thải chỉ định" }
            ],
            section16Items: [
                { label: "Sửa đổi cuối", value: "07-02-2024 (Lần 33)" },
                { label: "Nguồn dữ liệu", value: "OCI, KOSHA, ACGIH" }
            ]
        }
    },
    mm: {
        header: {
            productName: "ဖော့ស្វောရစ် အက်ဆစ် (H3PO4)",
            productNameEn: "Phosphoric Acid",
            msdsNo: "AA00725-0000006002",
            revision: "07-02-2024 (၃၃ ကြိမ်မြောက် ပြင်ဆင်ချက်)",
            signalWord: "အန္တရာယ်", // 위험
            source: "OCI Gunsan စက်ရုံ MSDS"
        },
        sections: {
            ghs: "GHS သင်္ကေတများ",
            section1: "1. ထုတ်ကုန်နှင့် ကုမ္ပဏီ အချက်အလက်",
            section2: "2. အန္တရာယ်ရှိမှု ဖော်ပြချက်",
            section3: "3. ပါဝင်ပစ္စည်းများ",
            section4: "4. ရှေးဦးပြုစုခြင်း",
            section5: "5. မီးငြှိမ်းသတ်ခြင်း",
            section6: "6. မတော်တဆ ဖိတ်စင်မှု ဆိုင်ရာ အစီအမံများ",
            section7: "7. ကိုင်တွယ်ခြင်းနှင့် သိုလှောင်ခြင်း",
            section8: "8. ထိတွေ့မှု ထိန်းချုပ်ခြင်းနှင့် ကာကွယ်ရေး",
            section9: "9. ရုပ်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများ",
            section10: "10. တည်ငြိမ်မှုနှင့် ဓာတ်ပြုမှု",
            section11: "11. အဆိပ်သင့်မှု အချက်အလက်",
            section12: "12. သဘာဝပတ်ဝန်းကျင်ဆိုင်ရာ အချက်အလက်",
            section13: "13. စွန့်ပစ်ခြင်း ဆိုင်ရာ အချက်အလက်",
            section14: "14. သယ်ယူပို့ဆောင်ရေး အချက်အလက်",
            section15: "15. ဥပဒေစည်းမျဉ်းဆိုင်ရာ အချက်အလက်",
            section16: "16. အခြားအချက်အလက်များ",
        },
        content: {
            hazards: [
                "H314 - ပြင်းထန်သော အရေပြားလောင်ကျွမ်းမှုနှင့် မျက်လုံးထိခိုက်မှု ဖြစ်စေသည် [cite: 1102-1103]",
                "H318 - ပြင်းထန်သော မျက်လုံးထိခိုက်မှု ဖြစ်စေသည် [cite: 1104-1105]",
                "H331 - ရှူရှိုက်မိပါက အဆိပ်ဖြစ်စေသည် (ဖုန်မှုန့်/အငွေ့ အဆင့် ၃) [cite: 1092, 1106-1107]",
                "H335 - အသက်ရှူလမ်းကြောင်း ယားယံစေနိုင်သည် [cite: 1108-1109]"
            ],
            precautionary: [
                {
                    title: "ကာကွယ်ခြင်း",
                    items: [
                        "P260 - ဖုန်မှုန့်/အငွေ့/ဓာတ်ငွေ့/အခိုးအငွေ့များကို မရှူရှိုက်ပါနှင့်။ [cite: 1112-1113]",
                        "P264 - ကိုင်တွယ်ပြီးနောက် ထိတွေ့သော နေရာများကို သေချာစွာ ဆေးကြောပါ။ [cite: 1116-1117]",
                        "P271 - လေဝင်လေထွက်ကောင်းသော နေရာတွင်သာ အသုံးပြုပါ။ [cite: 1118-1119]",
                        "P280 - ကာကွယ်ရေး လက်အိတ်/ဝတ်စုံ/မျက်မှန်/မျက်နှာဖုံး ဝတ်ဆင်ပါ။ [cite: 1120-1121]"
                    ]
                },
                {
                    title: "တုံ့ပြန်ခြင်း",
                    items: [
                        "P301+P330+P331 - မျိုချမိပါက ပါးစပ်ကိုဆေးပါ။ အန်အောင် မလုပ်ပါနှင့်။",
                        "P303+P361+P353 - အရေပြား (သို့) ဆံပင်နှင့် ထိတွေ့လျှင် ညစ်ညမ်းနေသော အဝတ်အစားများကို ချက်ချင်းချွတ်ပါ။ရေဖြင့်ဆေးပါ။ [cite: 1126-1127]",
                        "P304+P340 - ရှူရှိုက်မိပါက လေကောင်းလေသန့်ရရှိရာသို့ ရွှေ့ပြီး အသက်ရှူရလွယ်ကူသော အနေအထားဖြင့် နေပါ။ [cite: 1128-1130]",
                        "P305+P351+P338 - မျက်လုံးထဲဝင်လျှင် ရေဖြင့် မိနစ်အနည်းငယ်ကြာ ဂရုတစိုက် ဆေးကြောပါ။မျက်ကပ်မှန်ပါက ဖယ်ရှားပါ။ [cite: 1131-1132]",
                        "P310 - ဆရာဝန် (သို့) ဆေးဘက်ဆိုင်ရာ အဖွဲ့အစည်းနှင့် ချက်ချင်း ဆက်သွယ်ပါ။ [cite: 1133-1134]"
                    ]
                },
                {
                    title: "သိုလှောင်ခြင်း",
                    items: [
                        "P403+P233 - လေဝင်လေထွက်ကောင်းသော နေရာတွင်ထားပါ။ဘူးကို လုံအောင်ပိတ်ထားပါ။ [cite: 1144-1145]",
                        "P405 - သော့ခတ်၍ သိမ်းဆည်းပါ။ [cite: 1146-1147]"
                    ]
                },
                {
                    title: "စွန့်ပစ်ခြင်း",
                    items: [
                        "P501 - ပါဝင်ပစ္စည်းများနှင့် ဘူးခွံများကို ဥပဒေစည်းမျဉ်းများနှင့်အညီ စွန့်ပစ်ပါ။ [cite: 1151-1152]"
                    ]
                }
            ],
            ppe: ["အသက်ရှူလမ်းကြောင်း ကာကွယ်ရေးကိရိယာ (အသိအမှတ်ပြု)", "ဘေးကင်းရေး မျက်မှန်/မျက်နှာဖုံး", "ဓာတုဗေဒ လက်အိတ်", "ကာကွယ်ရေး ဝတ်စုံနှင့် ဖိနပ်"],
            firstAid: {
                eye: "ရေများများဖြင့် ၁၅ မိနစ်ခန့် ချက်ချင်း ဆေးကြောပါ။ မျက်ကပ်မှန်ပါက ဖယ်ရှားပါ။ဆရာဝန်နှင့် ချက်ချင်းပြသပါ။ [cite: 1161-1163]",
                skin: "ရေများများဖြင့် ၁၅ မိနစ်ခန့် ချက်ချင်း ဆေးကြောပါ။ ညစ်ညမ်းအဝတ်များ ဖယ်ရှားပါ။ပူသောပစ္စည်းဖြစ်ပါက ရေအေးဖြင့် အပူချပါ။ [cite: 1165-1171]",
                inhalation: "ညစ်ညမ်းမှုကို ရှောင်ခွာပြီး လေကောင်းလေသန့်ရရာသို့ ရွှေ့ပါ။ချောင်းဆိုးခြင်း စသည့် လက္ခဏာရှိပါက ဆေးကုသမှုခံယူပါ။ [cite: 1173-1176]",
                ingestion: "ပါးစပ်ကို ဆေးကြောပါ။ အန်အောင် မလုပ်ပါနှင့်။ဆရာဝန်နှင့် ချက်ချင်းပြသပါ။ [cite: 1178-1179]"
            },
            section1Items: [
                { label: "အသုံးပြုမှု", value: "သတ္တုမျက်နှာပြင် ပြုပြင်ခြင်း (Semiconductor), အစားအသောက် ဖြည့်စွက်ပစ္စည်း, ဆေးဝါးကုန်ကြမ်း [cite: 1081-1082]" },
                { label: "ထုတ်လုပ်သူ", value: "OCI Gunsan စက်ရုံ (Jeollabuk-do) [cite: 1085-1086]" },
                { label: "အရေးပေါ်ဖုန်း", value: "063-460-6322 (အရည်အသွေး), 063-460-6211 (ထုတ်လုပ်မှု) [cite: 1087-1088]" }
            ],
            section3Items: [
                { name: "ဖော့ស្វောရစ် အက်ဆစ် (Phosphoric Acid)", cas: "7664-38-2", id: "-", percent: "85.0 %" },
                { name: "ရေ (Water)", cas: "7732-18-5", id: "-", percent: "15.0 %" }
            ],
            section4Items: [
                { label: "ဆရာဝန်မှတ်ချက်", value: "အချက်အလက်မရှိပါ (ဓာတုပစ္စည်း ထိတွေ့ပါက အထူးကုနှင့် ချက်ချင်းပြသရန် လိုအပ်သည်)" }
            ],
            section5Items: [
                { label: "ငြှိမ်းသတ်ဆေး", value: "CO2, အရက်ပြန်ခံနိုင်သော အမြှုပ်, ရေမှုန်, သဲခြောက်/မြေကြီး [cite: 1186-1187]" },
                { label: "အန္တရာယ်များ", value: "အပူကြောင့် ပြိုကွဲသောအခါ အဆိပ်သင့်စေသော ဓာတ်ငွေ့များ ထွက်နိုင်သည်" },
                { label: "နည်းလမ်း", value: "ဓာတုပစ္စည်းပေါ် ရေတိုက်ရိုက်မပက်ရ။ ဘူးကို အအေးခံပါ။လေညာဘက်မှ ငြှိမ်းသတ်ပါ။ [cite: 1195-1198]" }
            ],
            section6Items: [
                { label: "လူကိုကာကွယ်ခြင်း", value: "ဖုန်မှုန့်/အငွေ့ မရှူရ။ဖိတ်စင်သည်များကို ချက်ချင်း သုတ်ပစ်ပါ။ [cite: 1201-1202]" },
                { label: "ရှင်းလင်းခြင်း", value: "သဲ/မြေကြီးကဲ့သို့သော ပစ္စည်းဖြင့် စုပ်ယူပြီး ဓာတုစွန့်ပစ်ပုံးတွင် ထည့်ပါ။ရေဖြင့် ဆေးကြောပါ။ [cite: 1206-1208]" }
            ],
            section7Items: [
                { label: "ကိုင်တွယ်ခြင်း", value: "အဖုံးဖွင့်ရာတွင် သတိထားပါ။လေဝင်လေထွက်ကောင်းသော နေရာတွင်သာ သုံးပါ။ [cite: 1211-1218]" },
                { label: "သိုလှောင်ခြင်း", value: "လေလုံအောင်ပိတ်ပါ။ သော့ခတ်ထားပါ။အစားအသောက်များနှင့် ဝေးရာတွင်ထားပါ။ [cite: 1224-1227]" }
            ],
            section8Items: [
                { name: "Phosphoric Acid (Korea)", agency: "MOEL", val: "TWA 1 mg/m³, STEL 3 mg/m³ [cite: 1230-1232]" },
                { name: "Phosphoric Acid (US)", agency: "ACGIH", val: "TWA 1 mg/m³, STEL 3 mg/m³ [cite: 1233-1235]" }
            ],
            section9Items: [
                { label: "ပုံသဏ္ဍာန်", value: "အရည် / အရောင်မဲ့ [cite: 1261-1263]" },
                { label: "အနံ့ / pH", value: "အနံ့မရှိ / 1.5 (0.1N solution)" },
                { label: "အရည်ပျော်/ဆူမှတ်", value: "21℃ / 158℃ [cite: 1271-1273]" },
                { label: "အငွေ့ဖိအား", value: "0.03 mmHg (20°C တွင်)" },
                { label: "သိပ်သည်းဆ", value: "1.685 (25°C တွင်)" },
                { label: "ပျစ်ခဲမှု", value: "47 Cps (20°C တွင်)" }
            ],
            section10Items: [
                { label: "ဓာတ်ပြုမှု", value: "မီးလောင်စဉ် အပူကြောင့် အဆိပ်သင့်ဓာတ်ငွေ့များ ထွက်နိုင်သည်" },
                { label: "တည်ငြိမ်မှု", value: "NFPA Reactivity 0 (တည်ငြိမ်)" }
            ],
            section11Items: [
                { label: "ထိတွေ့မှု", value: "ရှူရှိုက်ခြင်း(အန္တရာယ်ရှိ), မျိုချခြင်း, အရေပြား(စုပ်ယူလျှင်အန္တရာယ်ရှိ), မျက်လုံး(လောင်ကျွမ်း) [cite: 1311-1316]" },
                { label: "အဆိပ်သင့် (ပါးစပ်)", value: "LD50 3,500 mg/kg (ကြွက်)" },
                { label: "အဆိပ်သင့် (အရေပြား)", value: "LD50 2,740 mg/kg (ယုန်)" },
                { label: "အဆိပ်သင့် (ရှူရှိုက်)", value: "LC50 3,846 mg/m³ 1 နာရီ (ယုန်)" },
                { label: "တိုက်စားမှု", value: "အရေပြား တိုက်စားမှု (ယုန်), ပြင်းထန် မျက်လုံးထိခိုက်မှု [cite: 1325-1327]" }
            ],
            section12Items: [
                { label: "ဂေဟစနစ် (Crustaceans)", value: "EC50 4.6 mg/ℓ 12 နာရီ" },
                { label: "အခြား", value: "ငါး၊ ရေညှိ အချက်အလက်မရှိပါ" }
            ],
            section13Items: [
                { label: "စွန့်ပစ်ခြင်း", value: "သတ်မှတ်ထားသော စွန့်ပစ်ပစ္စည်းဖြစ်သဖြင့် ဥပဒေနှင့်အညီ စွန့်ပစ်ပါ။" }
            ],
            section14Items: [
                { label: "UN No.", value: "1805" },
                { label: "Shipping Name", value: "PHOSPHORIC ACID SOLUTION" },
                { label: "Class", value: "8 (Corrosive substance)" },
                { label: "Packing Group", value: "II" },
                { label: "အရေးပေါ်", value: "Fire: F-A, Spill: S-B " }
            ],
            section15Items: [
                { label: "ဘေးကင်းရေးဥပဒေ", value: "လုပ်ငန်းခွင်တိုင်းတာမှု(၆လ), စီမံခန့်ခွဲရမည့်ပစ္စည်း, အဆိပ်သင့်ပစ္စည်း [cite: 1378-1381]" },
                { label: "ဓာတုဥပဒေ", value: "သက်ဆိုင်ခြင်းမရှိ" },
                { label: "စွန့်ပစ်ပစ္စည်းဥပဒေ", value: "သတ်မှတ်ထားသော စွန့်ပစ်ပစ္စည်း" },
                { label: "CERCLA (US)", value: "5000 lb (2267.995 kg)" }
            ],
            section16Items: [
                { label: "စတင်ရက်စွဲ", value: "2004-11-30" },
                { label: "နောက်ဆုံးပြင်ဆင်", value: "2024-02-07 (၃၃ ကြိမ်မြောက်)" },
                { label: "အရင်းအမြစ်", value: "OCI Gunsan စက်ရုံ, ICSC, HSDB, KOSHA [cite: 1400-1413]" }
            ]
        }
    },
    kh: {
        header: {
            productName: "អាស៊ីតផូស្វ័រ (H3PO4)",
            productNameEn: "Phosphoric Acid",
            msdsNo: "AA00725-0000006002",
            revision: "07-02-2024 (កំណែទី 33)",
            signalWord: "គ្រោះថ្នាក់", // 위험
            source: "MSDS រោងចក្រ OCI Gunsan"
        },
        sections: {
            ghs: "និមិត្តសញ្ញា GHS",
            section1: "1. ព័ត៌មានអំពីផលិតផល និងក្រុមហ៊ុន",
            section2: "2. ការកំណត់អត្តសញ្ញាណគ្រោះថ្នាក់",
            section3: "3. គ្រឿងផ្សំ",
            section4: "4. វិធានការសង្គ្រោះបឋម",
            section5: "5. វិធានការពន្លត់អគ្គីភ័យ",
            section6: "6. វិធានការដោះស្រាយការកំពប់",
            section7: "7. ការកាន់ និងរក្សាទុក",
            section8: "8. ការការពារផ្ទាល់ខ្លួន",
            section9: "9. លក្ខណៈរូបវន្ត",
            section10: "10. ស្ថេរភាព និងប្រតិកម្ម",
            section11: "11. ព័ត៌មានអំពីជាតិពុល",
            section12: "12. ព័ត៌មានបរិស្ថាន",
            section13: "13. ការចោលសំណល់",
            section14: "14. ព័ត៌មានដឹកជញ្ជូន",
            section15: "15. ព័ត៌មានបទប្បញ្ញត្តិ",
            section16: "16. ព័ត៌មានផ្សេងៗ",
        },
        content: {
            hazards: [
                "H314 - បណ្តាលឱ្យរលាកស្បែកធ្ងន់ធ្ងរ និងខូចភ្នែក [cite: 1102-1103]",
                "H318 - បណ្តាលឱ្យខូចភ្នែកធ្ងន់ធ្ងរ [cite: 1104-1105]",
                "H331 - ពុលប្រសិនបើស្រូបចូល (ធូលី/អ័ព្ទ កម្រិត 3) [cite: 1092, 1106-1107]",
                "H335 - អាចបណ្តាលឱ្យរលាកផ្លូវដង្ហើម [cite: 1108-1109]"
            ],
            precautionary: [
                {
                    title: "ការបង្ការ",
                    items: [
                        "P260 - កុំស្រូបធូលី/ផ្សែង/ឧស្ម័ន/អ័ព្ទ/ចំហាយ។ [cite: 1112-1113]",
                        "P264 - លាងសម្អាតកន្លែងប៉ះពាល់ឱ្យបានស្អាតបន្ទាប់ពីកាន់។ [cite: 1116-1117]",
                        "P271 - ប្រើតែនៅខាងក្រៅ ឬកន្លែងដែលមានខ្យល់ចេញចូលល្អ។ [cite: 1118-1119]",
                        "P280 - ស្លៀកពាក់ស្រោមដៃ/សម្លៀកបំពាក់ការពារ/វ៉ែនតាការពារ។ [cite: 1120-1121]"
                    ]
                },
                {
                    title: "ការឆ្លើយតប",
                    items: [
                        "P301+P330+P331 - ប្រសិនបើលេប៖ លាងមាត់។ ហាមធ្វើឱ្យក្អួត។",
                        "P303+P361+P353 - ប្រសិនបើប៉ះស្បែក (ឬសក់)៖ ដោះសម្លៀកបំពាក់កខ្វក់ចេញជាបន្ទាន់។លាងសម្អាតស្បែកដោយទឹក/ងូតទឹក។ [cite: 1126-1127]",
                        "P304+P340 - ប្រសិនបើស្រូបចូល៖ ផ្លាស់ទីជនរងគ្រោះទៅកន្លែងដែលមានខ្យល់បរិសុទ្ធ និងរក្សាភាពងាយស្រួលក្នុងការដកដង្ហើម។ [cite: 1128-1130]",
                        "P305+P351+P338 - ប្រសិនបើចូលភ្នែក៖ លាងសម្អាតដោយប្រុងប្រយ័ត្នជាមួយទឹកជាច្រើននាទី។ ដោះលែនភ្នែកចេញប្រសិនបើអាច។បន្តលាងសម្អាត។ [cite: 1131-1132]",
                        "P310 - ហៅទូរស័ព្ទទៅវេជ្ជបណ្ឌិត ឬមន្ទីរពេទ្យជាបន្ទាន់។ [cite: 1133-1134]"
                    ]
                },
                {
                    title: "ការរក្សាទុក",
                    items: [
                        "P403+P233 - រក្សាទុកក្នុងកន្លែងដែលមានខ្យល់ចេញចូលល្អ។បិទធុងឱ្យជិត។ [cite: 1144-1145]",
                        "P405 - រក្សាទុកនៅកន្លែងដែលមានសោ។ [cite: 1146-1147]"
                    ]
                },
                {
                    title: "ការចោល",
                    items: [
                        "P501 - ចោលមាតិកា/ធុងតាមច្បាប់កំណត់។ [cite: 1151-1152]"
                    ]
                }
            ],
            ppe: ["របាំងការពារផ្លូវដង្ហើម (មានវិញ្ញាបនបត្រ)", "វ៉ែនតាសុវត្ថិភាព", "ស្រោមដៃគីមី", "សម្លៀកបំពាក់ការពារ/ស្បែកជើងសុវត្ថិភាព"],
            firstAid: {
                eye: "លាងទឹកឱ្យបានច្រើនភ្លាមៗយ៉ាងហោចណាស់ 15 នាទី។ ដោះលែនភ្នែកចេញ។ជួបគ្រូពេទ្យជាបន្ទាន់។ [cite: 1161-1163]",
                skin: "លាងទឹកឱ្យបានច្រើនភ្លាមៗយ៉ាងហោចណាស់ 15 នាទី។ ដោះសម្លៀកបំពាក់កខ្វក់ចេញ។ជួបគ្រូពេទ្យជាបន្ទាន់។ [cite: 1165-1171]",
                inhalation: "ផ្លាស់ទីទៅកន្លែងដែលមានខ្យល់បរិសុទ្ធ។ ប្រសិនបើមានរោគសញ្ញា ត្រូវស្វែងរកជំនួយពីគ្រូពេទ្យ។ជួបគ្រូពេទ្យជាបន្ទាន់។ [cite: 1173-1176]",
                ingestion: "លាងមាត់។ ហាមធ្វើឱ្យក្អួត។ជួបគ្រូពេទ្យជាបន្ទាន់។ [cite: 1178-1179]"
            },
            section1Items: [
                { label: "ការប្រើប្រាស់", value: "ការព្យាបាលផ្ទៃលោហៈ (Semiconductor), អាហារបន្ថែម, វត្ថុធាតុដើមថ្នាំ, ព្យាបាលទឹកសំណល់ [cite: 1081-1082]" },
                { label: "អ្នកផ្គត់ផ្គង់", value: "រោងចក្រ OCI Gunsan (Jeollabuk-do) [cite: 1085-1086]" },
                { label: "លេខបន្ទាន់", value: "063-460-6322 (គុណភាព), 063-460-6211 (ផលិតកម្ម) [cite: 1087-1088]" }
            ],
            section3Items: [
                { name: "អាស៊ីតផូស្វ័រ (Phosphoric Acid)", cas: "7664-38-2", id: "-", percent: "85.0 %" },
                { name: "ទឹក (Water)", cas: "7732-18-5", id: "-", percent: "15.0 %" }
            ],
            section4Items: [
                { label: "កំណត់សម្គាល់", value: "គ្មានទិន្នន័យ (ត្រូវការការព្យាបាលពីអ្នកជំនាញភ្លាមៗនៅពេលប៉ះពាល់សារធាតុគីមី)" }
            ],
            section5Items: [
                { label: "ភ្នាក់ងារពន្លត់", value: "CO2, ពពុះអាល់កុល, បាញ់ទឹក, ខ្សាច់ស្ងួត/ដី [cite: 1186-1187]" },
                { label: "គ្រោះថ្នាក់", value: "អាចបង្កើតឧស្ម័នពុលខ្លាំងនៅពេលមានកំដៅ/ឆេះ" },
                { label: "វិធីសាស្ត្រ", value: "ហាមបាញ់ទឹកផ្ទាល់លើសារធាតុ។ ធ្វើឱ្យធុងត្រជាក់។ឈរនៅពីលើខ្យល់។ [cite: 1195-1198]" }
            ],
            section6Items: [
                { label: "ការការពារ", value: "ជៀសវាងការស្រូបធូលី/អ័ព្ទ។ជូតសម្អាតការកំពប់ភ្លាមៗ។ [cite: 1201-1202]" },
                { label: "ការសម្អាត", value: "ស្រូបយកដោយខ្សាច់/ដី។លាងសម្អាតដោយទឹកបន្ទាប់ពីស្រូបយក។ [cite: 1206-1208]" }
            ],
            section7Items: [
                { label: "សុវត្ថិភាព", value: "ប្រយ័ត្នពេលបើកគម្រប។ ប្រើនៅកន្លែងដែលមានខ្យល់ចេញចូល។ជៀសវាងការប៉ះស្បែកយូរ។ [cite: 1211-1218]" },
                { label: "ការរក្សាទុក", value: "បិទធុងឱ្យជិតនៅកន្លែងដែលមានខ្យល់ចេញចូល។ ចាក់សោ។ដាក់ឱ្យឆ្ងាយពីអាហារ។ [cite: 1224-1227]" }
            ],
            section8Items: [
                { name: "Phosphoric Acid (កូរ៉េ)", agency: "MOEL", val: "TWA 1 mg/m³, STEL 3 mg/m³ [cite: 1230-1232]" },
                { name: "Phosphoric Acid (អាមេរិក)", agency: "ACGIH", val: "TWA 1 mg/m³, STEL 3 mg/m³ [cite: 1233-1235]" }
            ],
            section9Items: [
                { label: "រូបរាង/ពណ៌", value: "រាវ / គ្មានពណ៌ [cite: 1261-1263]" },
                { label: "ក្លិន / pH", value: "គ្មានក្លិន / 1.5 (សូលុយស្យុង 0.1N)" },
                { label: "ចំណុចរលាយ/ពុះ", value: "21℃ / 158℃ [cite: 1271-1273]" },
                { label: "សម្ពាធចំហាយ", value: "0.03 mmHg នៅ 20°C" },
                { label: "ដង់ស៊ីតេ", value: "1.685 នៅ 25°C" },
                { label: "ភាពស្អិត", value: "47 Cps នៅ 20°C" }
            ],
            section10Items: [
                { label: "ប្រតិកម្ម", value: "អាចបង្កើតឧស្ម័នពុលនៅពេលមានកំដៅ" },
                { label: "ស្ថេរភាព", value: "NFPA ប្រតិកម្ម 0 (មានស្ថេរភាព)" }
            ],
            section11Items: [
                { label: "ផ្លូវប៉ះពាល់", value: "ស្រូបចូល (គ្រោះថ្នាក់), លេប (គ្រោះថ្នាក់), ស្បែក/ភ្នែក (រលាក) [cite: 1311-1316]" },
                { label: "ពុលស្រួចស្រាវ (មាត់)", value: "LD50 3,500 mg/kg (កណ្តុរ)" },
                { label: "ពុលស្រួចស្រាវ (ស្បែក)", value: "LD50 2,740 mg/kg (ទន្សាយ)" },
                { label: "ពុលស្រួចស្រាវ (ស្រូប)", value: "LC50 3,846 mg/m³ 1ម៉ោង (ទន្សាយ)" },
                { label: "ច្រេះ/រលាក", value: "រលាកស្បែក (ទន្សាយ), ខូចភ្នែកធ្ងន់ធ្ងរ [cite: 1325-1327]" }
            ],
            section12Items: [
                { label: "ពុលអេកូឡូស៊ី", value: "EC50 4.6 mg/ℓ 12ម៉ោង (Crustaceans)" },
                { label: "ផ្សេងៗ", value: "គ្មានទិន្នន័យត្រី/សារាយ" }
            ],
            section13Items: [
                { label: "ការចោល", value: "ជាសំណល់ដែលបានកំណត់។ ចោលតាមច្បាប់។" }
            ],
            section14Items: [
                { label: "លេខ UN", value: "1805" },
                { label: "ឈ្មោះដឹកជញ្ជូន", value: "PHOSPHORIC ACID SOLUTION" },
                { label: "ថ្នាក់គ្រោះថ្នាក់", value: "8 (សារធាតុច្រេះ)" },
                { label: "ក្រុមវេចខ្ចប់", value: "III" },
                { label: "វិធានការបន្ទាន់", value: "អគ្គីភ័យ: F-A, ការកំពប់: S-B " }
            ],
            section15Items: [
                { label: "ច្បាប់សុវត្ថិភាព", value: "វាស់ស្ទង់បរិស្ថាន (6ខែ), សារធាតុគ្រប់គ្រង, កំណត់កម្រិតពុល [cite: 1378-1381]" },
                { label: "ច្បាប់គីមី/សំណល់", value: "សំណល់ដែលបានកំណត់" },
                { label: "CERCLA (អាមេរិក)", value: "5000 lb (2267.995 kg)" }
            ],
            section16Items: [
                { label: "បង្កើតនៅ", value: "30-11-2004" },
                { label: "កែប្រែចុងក្រោយ", value: "07-02-2024 (លើកទី 33)" },
                { label: "ប្រភព", value: "រោងចក្រ OCI Gunsan, ICSC, HSDB, KOSHA [cite: 1400-1413]" }
            ]
        }
    },
    uz: {
        header: {
            productName: "Fosfor kislotasi (H3PO4)",
            productNameEn: "Phosphoric Acid",
            msdsNo: "AA00725-0000006002",
            revision: "07-02-2024 (33-tahrir)",
            signalWord: "XAVFLI", // 위험
            source: "OCI Gunsan zavodi MSDS"
        },
        sections: {
            ghs: "GHS Piktogrammalari",
            section1: "1. Mahsulot va kompaniya haqida ma'lumot",
            section2: "2. Xavflarni aniqlash",
            section3: "3. Tarkibi",
            section4: "4. Birinchi yordam choralari",
            section5: "5. Yong'inga qarshi choralar",
            section6: "6. To'kilganda ko'riladigan choralar",
            section7: "7. Ishlatish va saqlash",
            section8: "8. Ta'sirni nazorat qilish va Shaxsiy himoya",
            section9: "9. Fizik va kimyoviy xususiyatlar",
            section10: "10. Barqarorlik va reaktivlik",
            section11: "11. Toksikologik ma'lumotlar",
            section12: "12. Ekologik ma'lumotlar",
            section13: "13. Chiqindilarni yo'q qilish",
            section14: "14. Tashish bo'yicha ma'lumot",
            section15: "15. Normativ ma'lumotlar",
            section16: "16. Boshqa ma'lumotlar",
        },
        content: {
            hazards: [
                "H314 - Terining qattiq kuyishi va ko'zning shikastlanishiga olib keladi [cite: 1102-1103]",
                "H318 - Ko'zning jiddiy shikastlanishiga olib keladi [cite: 1104-1105]",
                "H331 - Nafas olganda zaharli (3-toifa) [cite: 1092, 1106-1107]",
                "H335 - Nafas yo'llarini tirnash xususiyati keltirib chiqarishi mumkin [cite: 1108-1109]"
            ],
            precautionary: [
                {
                    title: "Oldini olish",
                    items: [
                        "P260 - Chang/tutun/gaz/tuman/bug'/spreyi nafas qilmang. [cite: 1112-1113]",
                        "P264 - Ishlatgandan so'ng tegishli joylarni yaxshilab yuving. [cite: 1116-1117]",
                        "P271 - Faqat ochiq havoda yoki yaxshi shamollatiladigan joyda ishlating. [cite: 1118-1119]",
                        "P280 - Himoya qo'lqopi/kiyimi/ko'zoynagi/niqobini taqing. [cite: 1120-1121]"
                    ]
                },
                {
                    title: "Javob choralari",
                    items: [
                        "P301+P330+P331 - YUTIB YUBORGANDA: Og'izni yuving. Qusishni keltirib chiqarmang.",
                        "P303+P361+P353 - TERIGA (yoki sochga) TEKKANDA: Ifloslangan kiyimni darhol yeching.Terini suv bilan yuving/dush qabul qiling. [cite: 1126-1127]",
                        "P304+P340 - NAFAS OLGANDA: Jabrlanuvchini toza havoga olib chiqing va nafas olishi qulay holatda saqlang. [cite: 1128-1130]",
                        "P305+P351+P338 - KO'ZGA TUSHGANDA: Bir necha daqiqa davomida suv bilan ehtiyotkorlik bilan yuving.Kontakt linzalarini olib tashlang. [cite: 1131-1132]",
                        "P310 - Darhol shifokorga yoki tibbiy muassasaga murojaat qiling. [cite: 1133-1134]"
                    ]
                },
                {
                    title: "Saqlash",
                    items: [
                        "P403+P233 - Yaxshi shamollatiladigan joyda saqlang.Idishni mahkam yopiq holda saqlang. [cite: 1144-1145]",
                        "P405 - Qulf ostida saqlang. [cite: 1146-1147]"
                    ]
                },
                {
                    title: "Yo'q qilish",
                    items: [
                        "P501 - Tarkibni/idishni chiqindilar to'g'risidagi qonunchilikka muvofiq yo'q qiling. [cite: 1151-1152]"
                    ]
                }
            ],
            ppe: ["Respirator (Sertifikatlangan)", "Himoya ko'zoynagi/yuz qalqoni", "Kimyoviy qo'lqoplar", "Himoya kiyimi/poyabzali"],
            firstAid: {
                eye: "Darhol kamida 15 daqiqa davomida ko'p miqdorda suv bilan yuving. Kontakt linzalarini olib tashlang.Darhol shifokorga murojaat qiling. [cite: 1161-1163]",
                skin: "Darhol kamida 15 daqiqa davomida ko'p miqdorda suv bilan yuving. Ifloslangan kiyimni yeching.Darhol shifokorga murojaat qiling. [cite: 1165-1171]",
                inhalation: "Ifloslanish manbasidan uzoqlashing va toza havoga chiqing.Yo'tal yoki boshqa alomatlar bo'lsa, tibbiy yordam oling. [cite: 1173-1176]",
                ingestion: "Og'izni yuving. Qusishni keltirib chiqarmang.Darhol shifokorga murojaat qiling va davolaning. [cite: 1178-1179]"
            },
            section1Items: [
                { label: "Foydalanish", value: "Metall sirtini tozalash (yarimo'tkazgich), Oziq-ovqat qo'shimchasi, Dori vositasi xom ashyosi [cite: 1081-1082]" },
                { label: "Yetkazib beruvchi", value: "OCI Gunsan zavodi (Jeollabuk-do) [cite: 1085-1086]" },
                { label: "Favqulodda aloqa", value: "063-460-6322 (Sifat), 063-460-6211 (Ishlab chiqarish) [cite: 1087-1088]" }
            ],
            section3Items: [
                { name: "Fosfor kislotasi (Phosphoric Acid)", cas: "7664-38-2", id: "-", percent: "85.0 %" },
                { name: "Suv (Water)", cas: "7732-18-5", id: "-", percent: "15.0 %" }
            ],
            section4Items: [
                { label: "Shifokorga eslatma", value: "Ma'lumot yo'q (Kimyoviy modda bilan aloqa qilganda darhol mutaxassis ko'rigi talab etiladi)" }
            ],
            section5Items: [
                { label: "Mos o'chirish vositalari", value: "CO2, alkogolga chidamli ko'pik, suv purkagich, quruq qum/tuproq [cite: 1186-1187]" },
                { label: "Xavflar", value: "Termik parchalanishda tirnash xususiyati beruvchi va juda zaharli gazlar chiqishi mumkin" },
                { label: "O'chirish usuli", value: "Moddaga to'g'ridan-to'g'ri suv purkamang. Idishni sovuting.Shamolga qarshi turing. [cite: 1195-1198]" }
            ],
            section6Items: [
                { label: "Shaxsiy himoya", value: "Chang/tuman nafas olishdan saqlaning.To'kilgan joyni darhol tozalang. [cite: 1201-1202]" },
                { label: "Tozalash", value: "Inert material (qum/tuproq) bilan shimdirib oling.Suyuqlik olingach, suv bilan yuving. [cite: 1206-1208]" }
            ],
            section7Items: [
                { label: "Xavfsiz ishlash", value: "Qopqoqni ochishda ehtiyot bo'ling.Faqat ochiq havoda/yaxshi shamollatiladigan joyda ishlating. [cite: 1211-1218]" },
                { label: "Saqlash", value: "Mahkam yopiq holda, yaxshi shamollatiladigan joyda. Qulf ostida.Oziq-ovqatdan uzoqda. [cite: 1224-1227]" }
            ],
            section8Items: [
                { name: "Fosfor kislotasi (Koreya)", agency: "MOEL", val: "TWA 1 mg/m³, STEL 3 mg/m³ [cite: 1230-1232]" },
                { name: "Fosfor kislotasi (AQSH)", agency: "ACGIH", val: "TWA 1 mg/m³, STEL 3 mg/m³ [cite: 1233-1235]" }
            ],
            section9Items: [
                { label: "Ko'rinishi", value: "Suyuqlik / Rangsiz [cite: 1261-1263]" },
                { label: "Hidi / pH", value: "Hidsiz / 1.5 (0.1N eritma)" },
                { label: "Erish/Qaynash nuqtasi", value: "21℃ / 158℃ [cite: 1271-1273]" },
                { label: "Bug' bosimi", value: "0.03 mmHg (20°C da)" },
                { label: "Zichlik", value: "1.685 (25°C da)" },
                { label: "Qovushoqlik", value: "47 Cps (20°C da)" }
            ],
            section10Items: [
                { label: "Reaktivlik", value: "Yong'in paytida termik parchalanish tufayli zaharli gazlar chiqishi mumkin" },
                { label: "Barqarorlik", value: "NFPA Reaktivlik 0 (Barqaror)" }
            ],
            section11Items: [
                { label: "Ta'sir yo'llari", value: "Nafas olish (Zaharli), Yutish, Teri (So'rilganda zaharli), Ko'z (Kuyish) [cite: 1311-1316]" },
                { label: "O'tkir toksiklik (Og'iz)", value: "LD50 3,500 mg/kg (Kalamush)" },
                { label: "O'tkir toksiklik (Teri)", value: "LD50 2,740 mg/kg (Quyon)" },
                { label: "O'tkir toksiklik (Nafas)", value: "LC50 3,846 mg/m³ 1 soat (Quyon)" },
                { label: "Korroziya", value: "Terini kuydiradi (1-toifa), Ko'zni jiddiy shikastlaydi [cite: 1325-1327]" }
            ],
            section12Items: [
                { label: "Ekotoksiklik (Qisqichbaqasimon)", value: "EC50 4.6 mg/ℓ 12 soat" },
                { label: "Boshqalar", value: "Baliq, suv o'tlari bo'yicha ma'lumot yo'q" }
            ],
            section13Items: [
                { label: "Yo'q qilish", value: "Belgilangan chiqindi sifatida tegishli qonunlarga muvofiq yo'q qiling." }
            ],
            section14Items: [
                { label: "UN Raqami", value: "1805" },
                { label: "Tashish nomi", value: "PHOSPHORIC ACID SOLUTION" },
                { label: "Xavf sinfi", value: "8 (Korroziy modda)" },
                { label: "Qadoqlash guruhi", value: "III" },
                { label: "Favqulodda chora", value: "Yong'in: F-A, To'kilish: S-B " }
            ],
            section15Items: [
                { label: "Sanoat xavfsizligi", value: "Ish muhitini o'lchash (6 oy), Boshqariladigan modda, O'tkir zaharli modda [cite: 1378-1381]" },
                { label: "Kimyoviy moddalar qonuni", value: "Mavjud emas" },
                { label: "Chiqindi qonuni", value: "Belgilangan chiqindi" },
                { label: "CERCLA (AQSH)", value: "5000 lb (2267.995 kg)" }
            ],
            section16Items: [
                { label: "Yaratilgan sana", value: "30-11-2004" },
                { label: "Oxirgi tahrir", value: "07-02-2024 (33-tahrir)" },
                { label: "Manba", value: "OCI Gunsan zavodi, ICSC, HSDB, KOSHA [cite: 1400-1413]" }
            ]
        }
    },
};

// sulfuricData.ts


export const sulfuricTranslations: Record<LangCode, MSDSContent> = {
    // ----------------------------------------------------------------------
    // 🇰🇷 한국어 (Korean)
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // 🇰🇷 한국어 (Korean) - 황산
    // ----------------------------------------------------------------------
    ko: {
        header: {
            productName: "🧪 황산 (96~99%)",
            productNameEn: "Sulfuric Acid",
            msdsNo: "AA00930-0000000001",
            revision: "2024-11-01 (개정 9회)",
            signalWord: "⛔ 위험 (DANGER)",
            source: "남해화학(주) MSDS"
        },
        sections: {
            ghs: "⚠️ GHS 그림문자",
            section1: "1. 🏢 화학제품과 회사 정보",
            section2: "2. ☢️ 유해성·위험성",
            section3: "3. 🧪 구성성분의 명칭 및 함유량",
            section4: "4. 🚑 응급조치 요령",
            section5: "5. 🔥 폭발·화재시 대처방법",
            section6: "6. 🧹 누출 사고 시 대처방법",
            section7: "7. 🤲 취급 및 저장방법",
            section8: "8. 😷 노출방지 및 개인보호구",
            section9: "9. 🌡️ 물리화학적 특성",
            section10: "10. 💥 안정성 및 반응성",
            section11: "11. ☠️ 독성에 관한 정보",
            section12: "12. 🐟 환경에 미치는 영향",
            section13: "13. 🗑️ 폐기시 주의사항",
            section14: "14. 🚚 운송에 필요한 정보",
            section15: "15. ⚖️ 법적 규제현황",
            section16: "16. 📝 그 밖의 참고사항",
        },
        content: {
            hazards: [
                "🏗️ H290 - 금속을 부식시킬 수 있음",
                "🧴 H314 - 피부에 심한 화상과 눈에 손상을 일으킴",
                "👁️ H318 - 눈에 심한 손상을 일으킴",
                "☠️ H330 - 흡입하면 치명적임 (급성독성 구분 2)",
                "☣️ H350 - 암을 일으킬 수 있음 (강산 미스트)",
                "🐟 H412 - 장기적인 영향에 의해 수생생물에게 유해함"
            ],
            precautionary: [
                {
                    title: "🛡️ 예방",
                    items: [
                        "P260 - 가스/미스트/증기/스프레이를 흡입하지 마시오.",
                        "P280 - 보호장갑/보호의/보안경/안면보호구를 착용하시오.",
                        "P234 - 원래의 용기에만 보관하시오.",
                        "P273 - 환경으로 배출하지 마시오."
                    ]
                },
                {
                    title: "🚨 대응",
                    items: [
                        "👄 P301+P330+P331 - 삼켰다면 입을 씻어내시오. 토하게 하지 마시오.",
                        "🧴 P303+P361+P353 - 피부에 묻으면 오염된 의류를 벗고, 물로 씻으시오.",
                        "🌬️ P304+P340 - 흡입하면 신선한 공기가 있는 곳으로 옮기고 안정을 취하시오.",
                        "🏥 P310 - 즉시 의료기관(의사)의 진찰을 받으시오."
                    ]
                },
                {
                    title: "🔒 저장",
                    items: [
                        "P403+P233 - 환기가 잘 되는 곳에 밀폐 보관하시오.",
                        "P405 - 잠금장치를 하여 저장하시오.",
                        "P406 - 내부식성 용기에 보관하시오."
                    ]
                },
                {
                    title: "🗑️ 폐기",
                    items: [
                        "P501 - 폐기물 관련 법령에 따라 내용물/용기를 폐기하시오."
                    ]
                }
            ],
            ppe: ["😷 방독마스크 (아황산용)", "🥽 보안경/안면보호구", "🧤 내산성 안전장갑", "🦺 내산성 보호복"],
            firstAid: {
                eye: "👁️ 눈을 문지르지 말고 15분 이상 다량의 물로 세척. 즉시 의사 치료.",
                skin: "🧴 오염된 의복 벗고 15분 이상 세척. 심한 화상 위험. 즉시 의사 치료.",
                inhalation: "🌬️ 맑은 공기로 이동. 호흡 정지 시 인공호흡. 즉시 의사 치료.",
                ingestion: "👄 물로 입을 씻어내시오. 구토 유발 금지(의사 조언 따름). 즉시 의사 치료."
            },
            section1Items: [
                { label: "권고 용도", value: "비료, 금속, 농약, 폐수처리, 화약제조 등" },
                { label: "공급자", value: "남해화학(주) 여수공장" },
                { label: "긴급전화", value: "📞 061-688-5442" }
            ],
            section3Items: [
                { name: "황산 (SULFURIC ACID)", cas: "7664-93-9", id: "KE-32570", percent: "96 ~ 99 %" },
                { name: "물 (WATER)", cas: "7732-18-5", id: "KE-35400", percent: "1 ~ 4 %" }
            ],
            section4Items: [
                { label: "의사 주의사항", value: "강산성 물질. 2차 오염 주의. 즉시 전문의 치료." }
            ],
            section5Items: [
                { label: "적절한 소화제", value: "이산화탄소, 분말소화약제" },
                { label: "부적절 소화제", value: "🚫 직사 주수 금지 (물과 격렬 반응)" },
                { label: "특정 유해성", value: "물과 반응 시 발열/폭발 위험. 황화수소/황산화물 발생." }
            ],
            section6Items: [
                { label: "인체 보호", value: "바람 등지고 작업. 물 접촉 금지." },
                { label: "환경 보호", value: "하수 시설 유입 차단." },
                { label: "제거 방법", value: "건조한 모래/흙으로 제방 축조. 중화 처리." }
            ],
            section7Items: [
                { label: "안전 취급", value: "물 첨가 시 폭발적 비산 주의 (반드시 물에 산을 조금씩 부을 것)." },
                { label: "안전 보관", value: "내부식성 용기. 습기 차단. 가연물과 격리." }
            ],
            section8Items: [
                { name: "황산 (한국)", agency: "고용노동부", val: "TWA 0.2 mg/m³" },
                { name: "황산 (ACGIH)", agency: "ACGIH", val: "TWA 0.2 mg/m³" }
            ],
            section9Items: [
                { label: "성상/색상", value: "오일형 액체 / 무색~갈색" },
                { label: "pH", value: "0.3 (1N 용액, 강산성)" },
                { label: "녹는점/끓는점", value: "-1~3℃ / 310~335℃" },
                { label: "비중", value: "1.84 (물보다 무거움)" }
            ],
            section10Items: [
                { label: "반응성", value: "물과 접촉 시 격렬한 발열 반응. 금속 부식 시 수소 가스(폭발성) 발생." },
                { label: "피해야 할 물질", value: "물, 금속, 유기물, 알코올, 염소산염" }
            ],
            section11Items: [
                { label: "노출 경로", value: "흡입(치명적), 피부(3도 화상), 눈(실명 위험)" },
                { label: "발암성", value: "1A등급 (강산 미스트 노출 시)" }
            ],
            section12Items: [
                { label: "생태독성", value: "물고기/갑각류에 유해 (pH 저하)" }
            ],
            section13Items: [
                { label: "폐기 방법", value: "지정폐기물 (폐산). 중화 처리 후 폐기." }
            ],
            section14Items: [
                { label: "UN 번호", value: "1830" },
                { label: "선적명", value: "SULFURIC ACID (>51%)" },
                { label: "위험 등급", value: "8 (부식성)" }
            ],
            section15Items: [
                { label: "화관법/산안법", value: "유독물질, 사고대비물질, PSM 대상, 특수건강검진" }
            ],
            section16Items: [
                { label: "개정일", value: "2024-11-01 (9회 개정)" },
                { label: "출처", value: "남해화학, KOSHA" }
            ]
        }
    },

    vn: {
        header: {
            productName: "🧪 Axit Sulfuric (96~99%)",
            productNameEn: "Sulfuric Acid",
            msdsNo: "AA00930-0000000001",
            revision: "01-11-2024 (Lần sửa đổi thứ 9)",
            signalWord: "⛔ NGUY HIỂM (DANGER)",
            source: "MSDS Namhae Chemical"
        },
        sections: {
            ghs: "⚠️ Hình đồ cảnh báo GHS",
            section1: "1. 🏢 Thông tin sản phẩm & Công ty",
            section2: "2. ☢️ Nhận dạng đặc tính nguy hiểm",
            section3: "3. 🧪 Thành phần và hàm lượng",
            section4: "4. 🚑 Biện pháp sơ cứu",
            section5: "5. 🔥 Biện pháp chữa cháy",
            section6: "6. 🧹 Biện pháp xử lý khi rò rỉ",
            section7: "7. 🤲 Thao tác và bảo quản",
            section8: "8. 😷 Kiểm soát phơi nhiễm & Bảo hộ",
            section9: "9. 🌡️ Đặc tính lý hóa",
            section10: "10. 💥 Tính ổn định & Phản ứng",
            section11: "11. ☠️ Thông tin về độc tính",
            section12: "12. 🐟 Ảnh hưởng đến môi trường",
            section13: "13. 🗑️ Lưu ý khi thải bỏ",
            section14: "14. 🚚 Thông tin vận chuyển",
            section15: "15. ⚖️ Thông tin pháp luật",
            section16: "16. 📝 Thông tin khác",
        },
        content: {
            hazards: [
                "🏗️ H290 - Có thể ăn mòn kim loại",
                "🧴 H314 - Gây bỏng da nặng và tổn thương mắt",
                "👁️ H318 - Gây tổn thương mắt nghiêm trọng",
                "☠️ H330 - Chết người nếu hít phải (Độc cấp tính Cấp 2)",
                "☣️ H350 - Có thể gây ung thư (Sương mù axit)",
                "🐟 H412 - Có hại cho sinh vật thủy sinh với ảnh hưởng kéo dài"
            ],
            precautionary: [
                {
                    title: "🛡️ Phòng ngừa",
                    items: [
                        "P260 - Không hít phải khí/sương/hơi/phun.",
                        "P280 - Mặc găng tay/quần áo bảo hộ/kính bảo vệ mắt.",
                        "P234 - Chỉ bảo quản trong thùng chứa gốc.",
                        "P273 - Tránh xả thải ra môi trường."
                    ]
                },
                {
                    title: "🚨 Ứng phó",
                    items: [
                        "👄 P301+P330+P331 - NẾU NUỐT: Súc miệng. KHÔNG gây nôn.",
                        "🧴 P303+P361+P353 - NẾU DÍNH DA: Cởi bỏ ngay quần áo nhiễm bẩn. Rửa da bằng nước.",
                        "🌬️ P304+P340 - NẾU HÍT PHẢI: Chuyển ra nơi thoáng khí, nghỉ ngơi.",
                        "🏥 P310 - Gọi ngay Trung tâm Chống độc/Bác sĩ."
                    ]
                },
                {
                    title: "🔒 Lưu trữ",
                    items: [
                        "P403+P233 - Bảo quản nơi thoáng mát. Kín.",
                        "P405 - Cất giữ nơi có khóa.",
                        "P406 - Bảo quản trong thùng chứa chống ăn mòn."
                    ]
                },
                {
                    title: "🗑️ Thải bỏ",
                    items: [
                        "P501 - Vứt bỏ nội dung/thùng chứa theo quy định pháp luật."
                    ]
                }
            ],
            ppe: ["😷 Mặt nạ phòng độc (Khí SO2)", "🥽 Kính bảo hộ/Mặt nạ", "🧤 Găng tay chống axit", "🦺 Quần áo chống axit"],
            firstAid: {
                eye: "👁️ Không dụi mắt. Rửa ngay bằng nhiều nước >15 phút. Gọi bác sĩ ngay.",
                skin: "🧴 Cởi quần áo nhiễm bẩn. Rửa nước >15 phút. Nguy cơ bỏng nặng. Gọi bác sĩ ngay.",
                inhalation: "🌬️ Di chuyển ra nơi thoáng khí. Hô hấp nhân tạo nếu ngừng thở. Gọi bác sĩ ngay.",
                ingestion: "👄 Súc miệng. KHÔNG gây nôn (trừ khi bác sĩ chỉ định). Gọi bác sĩ ngay."
            },
            section1Items: [
                { label: "Sử dụng", value: "Phân bón, Luyện kim, Thuốc trừ sâu, Xử lý nước thải, Thuốc nổ" },
                { label: "Nhà cung cấp", value: "Namhae Chemical (Yeosu)" },
                { label: "Khẩn cấp", value: "📞 061-688-5442" }
            ],
            section3Items: [
                { name: "Axit Sulfuric (H2SO4)", cas: "7664-93-9", id: "KE-32570", percent: "96 ~ 99 %" },
                { name: "Nước (H2O)", cas: "7732-18-5", id: "KE-35400", percent: "1 ~ 4 %" }
            ],
            section4Items: [
                { label: "Lưu ý bác sĩ", value: "Chất axit mạnh. Nguy cơ ô nhiễm thứ cấp. Điều trị chuyên khoa ngay." }
            ],
            section5Items: [
                { label: "Chất chữa cháy", value: "CO2, Bột khô" },
                { label: "Cấm kỵ", value: "🚫 Không phun nước trực tiếp (Phản ứng dữ dội)" },
                { label: "Đặc tính nguy hiểm", value: "Phản ứng với nước sinh nhiệt/nổ. Sinh khí SO2, H2S." }
            ],
            section6Items: [
                { label: "Bảo vệ con người", value: "Đứng đầu gió. Không tiếp xúc nước." },
                { label: "Môi trường", value: "Ngăn chảy vào cống rãnh." },
                { label: "Xử lý", value: "Đắp đê bằng đất/cát khô. Trung hòa." }
            ],
            section7Items: [
                { label: "Thao tác", value: "Cẩn thận khi thêm nước (Đổ axit vào nước từ từ). Chống tĩnh điện." },
                { label: "Bảo quản", value: "Thùng chống ăn mòn. Tránh ẩm. Cách ly vật liệu cháy." }
            ],
            section8Items: [
                { name: "Axit Sulfuric (Hàn Quốc)", agency: "MOEL", val: "TWA 0.2 mg/m³" },
                { name: "Axit Sulfuric (Mỹ)", agency: "ACGIH", val: "TWA 0.2 mg/m³" }
            ],
            section9Items: [
                { label: "Ngoại quan", value: "Chất lỏng dầu / Không màu ~ Nâu" },
                { label: "pH", value: "0.3 (Dung dịch 1N, Axit mạnh)" },
                { label: "Nóng chảy/Sôi", value: "-1~3℃ / 310~335℃" },
                { label: "Tỷ trọng", value: "1.84 (Nặng hơn nước)" }
            ],
            section10Items: [
                { label: "Phản ứng", value: "Phản ứng nhiệt dữ dội với nước. Ăn mòn kim loại sinh khí Hydro (Nổ)." },
                { label: "Vật liệu tránh", value: "Nước, Kim loại, Chất hữu cơ, Cồn, Clorat." }
            ],
            section11Items: [
                { label: "Đường phơi nhiễm", value: "Hít phải (Chết người), Da (Bỏng độ 3), Mắt (Mù)" },
                { label: "Ung thư", value: "Cấp 1A (Khi tiếp xúc sương mù axit mạnh)" }
            ],
            section12Items: [
                { label: "Độc tính sinh thái", value: "Có hại cho cá/giáp xác (do giảm pH nước)" }
            ],
            section13Items: [
                { label: "Thải bỏ", value: "Chất thải chỉ định (Axit thải). Trung hòa trước khi thải." }
            ],
            section14Items: [
                { label: "Số UN", value: "1830" },
                { label: "Tên vận chuyển", value: "SULFURIC ACID (>51%)" },
                { label: "Cấp nguy hiểm", value: "8 (Ăn mòn)" }
            ],
            section15Items: [
                { label: "Luật Hóa chất", value: "Chất độc, Chất chuẩn bị tai nạn, PSM, Khám sức khỏe đặc biệt" }
            ],
            section16Items: [
                { label: "Sửa đổi", value: "01-11-2024 (Lần 9)" },
                { label: "Nguồn", value: "Namhae Chemical, KOSHA" }
            ]
        }
    },

    // ----------------------------------------------------------------------
    // 🇲🇲 미얀마어 (Myanmar)
    // ----------------------------------------------------------------------
    mm: {
        header: {
            productName: "ဆာလ်ဖျူရစ် အက်ဆစ် (H2SO4)",
            productNameEn: "Sulfuric Acid",
            msdsNo: "AA00930-0000000001",
            revision: "01-11-2024 (၉ ကြိမ်မြောက် ပြင်ဆင်ချက်)",
            signalWord: "အန္တရာယ်",
            source: "Namhae Chemical MSDS"
        },
        sections: {
            ghs: "GHS သင်္ကေတများ",
            section1: "1. ထုတ်ကုန်နှင့် ကုမ္ပဏီ အချက်အလက်",
            section2: "2. အန္တရာယ်ရှိမှု ဖော်ပြချက်",
            section3: "3. ပါဝင်ပစ္စည်းများ",
            section4: "4. ရှေးဦးပြုစုခြင်း",
            section5: "5. မီးငြှိမ်းသတ်ခြင်း",
            section6: "6. မတော်တဆ ဖိတ်စင်မှု ဆိုင်ရာ အစီအမံများ",
            section7: "7. ကိုင်တွယ်ခြင်းနှင့် သိုလှောင်ခြင်း",
            section8: "8. ထိတွေ့မှု ထိန်းချုပ်ခြင်းနှင့် ကာကွယ်ရေး",
            section9: "9. ရုပ်ပိုင်းဆိုင်ရာ ဂုဏ်သတ္တိများ",
            section10: "10. တည်ငြိမ်မှုနှင့် ဓာတ်ပြုမှု",
            section11: "11. အဆိပ်သင့်မှု အချက်အလက်",
            section12: "12. သဘာဝပတ်ဝန်းကျင်ဆိုင်ရာ အချက်အလက်",
            section13: "13. စွန့်ပစ်ခြင်း ဆိုင်ရာ အချက်အလက်",
            section14: "14. သယ်ယူပို့ဆောင်ရေး အချက်အလက်",
            section15: "15. ဥပဒေစည်းမျဉ်းဆိုင်ရာ အချက်အလက်",
            section16: "16. အခြားအချက်အလက်များ",
        },
        content: {
            hazards: [
                "H290 - သတ္တုများကို တိုက်စားစေနိုင်သည်",
                "H314 - ပြင်းထန်သော အရေပြားလောင်ကျွမ်းမှုနှင့် မျက်လုံးထိခိုက်မှု ဖြစ်စေသည်",
                "H318 - ပြင်းထန်သော မျက်လုံးထိခိုက်မှု ဖြစ်စေသည်",
                "H330 - ရှူရှိုက်မိပါက အသက်အန္တရာယ်ရှိသည် (အဆိပ်သင့်မှု အဆင့် ၂)",
                "H350 - ကင်ဆာဖြစ်စေနိုင်သည် (အဆင့် 1A)",
                "H412 - ရေနေသတ္တဝါများကို ရေရှည် အန္တရာယ်ဖြစ်စေသည်"
            ],
            precautionary: [
                {
                    title: "ကာကွယ်ခြင်း",
                    items: [
                        "P201 - အသုံးမပြုမီ ညွှန်ကြားချက်များကို ရယူပါ။",
                        "P260 - ဓာတ်ငွေ့/အခိုးအငွေ့/ဖုန်မှုန့်များကို မရှူရှိုက်ပါနှင့်။",
                        "P280 - ကာကွယ်ရေး ဝတ်စုံ/လက်အိတ်/မျက်မှန် ဝတ်ဆင်ပါ။",
                        "P284 - လေဝင်လေထွက် မကောင်းပါက အသက်ရှူကိရိယာ ဝတ်ဆင်ပါ။"
                    ]
                },
                {
                    title: "တုံ့ပြန်ခြင်း",
                    items: [
                        "P301+P330+P331 - မျိုချမိပါက ပါးစပ်ဆေးပါ။ အန်အောင် မလုပ်ပါနှင့်။",
                        "P303+P361+P353 - အရေပြားထိလျှင် ညစ်ညမ်းအဝတ်များချွတ်ပြီး ရေချိုးပါ။",
                        "P304+P340 - ရှူရှိုက်မိပါက လေကောင်းလေသန့်ရရာသို့ ရွှေ့ပါ။",
                        "P305+P351+P338 - မျက်လုံးထဲဝင်လျှင် ရေဖြင့် သေချာဆေးကြောပါ။ မျက်ကပ်မှန်ဖယ်ပါ။",
                        "P310 - ဆရာဝန်နှင့် ချက်ချင်းပြသပါ။",
                        "P320 - အရေးပေါ် ကုသမှု လိုအပ်ပါသည်။"
                    ]
                },
                {
                    title: "သိုလှောင်ခြင်း",
                    items: [
                        "P403+P233 - လေဝင်လေထွက်ကောင်းပြီး လုံခြုံသောနေရာတွင် သိမ်းပါ။",
                        "P405 - သော့ခတ်၍ သိမ်းဆည်းပါ။",
                        "P406 - သတ္တုတိုက်စားမှု ခံနိုင်သော ဘူးတွင် သိမ်းပါ။"
                    ]
                },
                {
                    title: "စွန့်ပစ်ခြင်း",
                    items: [
                        "P501 - စည်းမျဉ်းများနှင့်အညီ စွန့်ပစ်ပါ။"
                    ]
                }
            ],
            ppe: [
                "အသက်ရှူကိရိယာ (အက်ဆစ်ငွေ့ကာကွယ်)",
                "ဘေးကင်းရေး မျက်မှန်/မျက်နှာဖုံး",
                "အက်ဆစ်ခံ လက်အိတ်",
                "အက်ဆစ်ခံ ဝတ်စုံ"
            ],
            firstAid: {
                eye: "မျက်လုံးမပွတ်ရ။ ရေများများဖြင့် ၁၅ မိနစ်ခန့် ဆေးပါ။ မျက်ကပ်မှန်ဖယ်ပါ။ ဆရာဝန်ခေါ်ပါ။",
                skin: "ညစ်ညမ်းအဝတ်များ ဖယ်ရှားပါ။ ဆပ်ပြာနှင့်ရေဖြင့် ၁၅ မိနစ်ခန့် ဆေးပါ။ ဆရာဝန်ခေါ်ပါ။",
                inhalation: "လေသန့်ရရာ ရွှေ့ပါ။ အသက်မရှူပါက အသက်ရှူကူပေးပါ။ ဆရာဝန်ခေါ်ပါ။",
                ingestion: "ပါးစပ်ဆေးပါ။ အန်အောင် မလုပ်ပါနှင့်။ ဆရာဝန်အကြံဉာဏ်ယူပါ။"
            },
            section1Items: [
                { label: "အသုံးပြုမှု", value: "မြေဩဇာ, သတ္တုလုပ်ငန်း, ပိုးသတ်ဆေး, စက္ကူ, ပေါက်ကွဲစေတတ်သော ပစ္စည်း" },
                { label: "ထုတ်လုပ်သူ", value: "Namhae Chemical (Yeosu)" },
                { label: "အရေးပေါ်", value: "061-688-5442" }
            ],
            section3Items: [
                { name: "Sulfuric Acid", cas: "7664-93-9", id: "KE-32570", percent: "96 ~ 99 %" },
                { name: "Water", cas: "7732-18-5", id: "KE-35400", percent: "1 ~ 4 %" }
            ],
            section4Items: [
                { label: "မှတ်ချက်", value: "ညစ်ညမ်းမှုအခြေအနေကို ဆေးဘက်ဆိုင်ရာဝန်ထမ်းများအား အသိပေးပါ။ ထိတွေ့ပါက ဆေးကုသမှုခံယူပါ။" }
            ],
            section5Items: [
                { label: "ငြှိမ်းသတ်ဆေး", value: "CO2, အမှုန့်ခြောက်" },
                { label: "မသုံးရ", value: "ရေ တိုက်ရိုက် မပက်ရ (ပြင်းထန်စွာ ဓာတ်ပြုနိုင်သည်)" },
                { label: "အန္တရာယ်", value: "အပူပေးပါက ပေါက်ကွဲနိုင်။ ရေနှင့်ထိပါက အဆိပ်သင့်ဓာတ်ငွေ့များ (SO2, H2S) ထွက်နိုင်။" },
                { label: "နည်းလမ်း", value: "ဘူးကို အအေးခံပါ။ ၀.၈ ကီလိုမီတာ အကွာသို့ ရှောင်ပါ။" }
            ],
            section6Items: [
                { label: "ကာကွယ်", value: "လေညာတွင်နေပါ။ လုံခြုံသောနေရာတွင် လေဝင်လေထွက်ပြုလုပ်ပါ။ ရေမပက်ရ။" },
                { label: "ပတ်ဝန်းကျင်", value: "ရေဆိုးမြောင်းများထဲသို့ မဝင်စေရ။ ပမာဏများပါက အာဏာပိုင်ထံ သတင်းပို့ပါ။" },
                { label: "ရှင်းလင်း", value: "မီးလောင်လွယ်သော ပစ္စည်းဖြင့် မစုပ်ယူရ။ ဓာတ်ပျယ်အောင်ပြုလုပ်ပါ။" }
            ],
            section7Items: [
                { label: "ကိုင်တွယ်", value: "ရေထည့်ပါက သတိပြုပါ။ လေဝင်လေထွက်ကောင်းသော နေရာတွင်သာ သုံးပါ။" },
                { label: "သိုလှောင်", value: "သတ္တုတိုက်စားမှု ခံနိုင်သော ဘူး။ ကင်ဆာဖြစ်စေနိုင်သော ပစ္စည်းသိုလှောင်ရာ နေရာခွဲထားပါ။" }
            ],
            section8Items: [
                { name: "Sulfuric Acid (Korea)", agency: "MOEL", val: "TWA 0.2 mg/m³, STEL 0.6 mg/m³" },
                { name: "Sulfuric Acid (US)", agency: "ACGIH", val: "TWA 0.2 mg/m³" }
            ],
            section9Items: [
                { label: "ပုံသဏ္ဍာန်", value: "ဆီကဲ့သို့ အရည် / အရောင်မဲ့ သို့မဟုတ် အညိုရောင်" },
                { label: "အနံ့ / pH", value: "အနံ့မရှိ / 0.3" },
                { label: "အရည်ပျော်/ဆူမှတ်", value: "-1.11~3.0℃ / 310~335℃" },
                { label: "သိပ်သည်းဆ", value: "1.836 ~ 1.841" }
            ],
            section10Items: [
                { label: "ဓာတ်ပြုမှု", value: "ရေနှင့်ထိပါက အပူထွက်ပြီး ပြင်းထန်စွာ ဓာတ်ပြု။ သတ္တုကို တိုက်စား။" },
                { label: "ရှောင်ရန်", value: "သတ္တု, အော်ဂဲနစ်ပစ္စည်း, ရေ, အရက်ပြန်" }
            ],
            section11Items: [
                { label: "ထိတွေ့မှု", value: "ရှူရှိုက်(သေစေနိုင်), မျက်လုံး(ပျက်စီး), အရေပြား(လောင်ကျွမ်း)" },
                { label: "အဆိပ်သင့်(ရှူရှိုက်)", value: "LC50 0.375 mg/L/4h (Rat) - အဆင့် ၂" },
                { label: "ကင်ဆာ", value: "အဆင့် 1A (အက်ဆစ်ငွေ့)" }
            ],
            section12Items: [
                { label: "ငါး", value: "LC50 16-28 mg/L 96h" },
                { label: "အခွံမာရေသတ္တဝါ", value: "EC50 >100 mg/L 48h" }
            ],
            section13Items: [
                { label: "စွန့်ပစ်", value: "ဓာတ်ပျယ်အောင်ပြုလုပ်ပြီးမှ စွန့်ပစ်ပါ။ အန္တရာယ်ရှိ စွန့်ပစ်ပစ္စည်း။" }
            ],
            section14Items: [
                { label: "UN No.", value: "1830" },
                { label: "Name", value: "SULFURIC ACID (>51%)" },
                { label: "Class", value: "8 (Corrosive)" },
                { label: "Pack", value: "II" }
            ],
            section15Items: [
                { label: "ဘေးကင်းရေး", value: "PSM ပစ္စည်း, စီမံခန့်ခွဲရမည့်ပစ္စည်း, ကျန်းမာရေးစစ်ဆေးရန်ပစ္စည်း" },
                { label: "ဓာတုဥပဒေ", value: "အဆိပ်သင့်ပစ္စည်း, မတော်တဆမှု ကြိုတင်ကာကွယ်ရေးပစ္စည်း" }
            ],
            section16Items: [
                { label: "ရက်စွဲ", value: "01-04-2008" },
                { label: "ပြင်ဆင်", value: "01-11-2024 (၉ ကြိမ်)" },
                { label: "အရင်းအမြစ်", value: "Namhae Chemical" }
            ]
        }
    },

    // ----------------------------------------------------------------------
    // 🇰🇭 캄보디아어 (Khmer)
    // ----------------------------------------------------------------------
    kh: {
        header: {
            productName: "អាស៊ីតស៊ុលហ្វួរិក (H2SO4)",
            productNameEn: "Sulfuric Acid",
            msdsNo: "AA00930-0000000001",
            revision: "01-11-2024 (កែប្រែលើកទី 9)",
            signalWord: "គ្រោះថ្នាក់",
            source: "MSDS ក្រុមហ៊ុន Namhae Chemical"
        },
        sections: {
            ghs: "និមិត្តសញ្ញា GHS",
            section1: "1. ព័ត៌មានផលិតផល",
            section2: "2. គ្រោះថ្នាក់",
            section3: "3. គ្រឿងផ្សំ",
            section4: "4. សង្គ្រោះបឋម",
            section5: "5. ពន្លត់អគ្គីភ័យ",
            section6: "6. ការកំពប់",
            section7: "7. កាន់/រក្សាទុក",
            section8: "8. ការការពារ",
            section9: "9. លក្ខណៈរូបវន្ត",
            section10: "10. ស្ថេរភាព",
            section11: "11. ជាតិពុល",
            section12: "12. បរិស្ថាន",
            section13: "13. ចោលសំណល់",
            section14: "14. ដឹកជញ្ជូន",
            section15: "15. បទប្បញ្ញត្តិ",
            section16: "16. ផ្សេងៗ",
        },
        content: {
            hazards: [
                "H290 - អាចច្រេះលោហៈ",
                "H314 - រលាកស្បែកធ្ងន់ធ្ងរ និងខូចភ្នែក",
                "H318 - ខូចភ្នែកធ្ងន់ធ្ងរ",
                "H330 - ស្លាប់ប្រសិនបើស្រូបចូល (ពុលស្រួចស្រាវ កម្រិត 2)",
                "H350 - អាចបង្កជំងឺមហារីក (កម្រិត 1A)",
                "H412 - គ្រោះថ្នាក់ដល់ជីវិតក្នុងទឹកយូរអង្វែង"
            ],
            precautionary: [
                {
                    title: "បង្ការ",
                    items: [
                        "P201 - ទទួលបានការណែនាំមុនប្រើប្រាស់។",
                        "P260 - កុំស្រូបឧស្ម័ន/ផ្សែង/ចំហាយ។",
                        "P280 - ពាក់សម្លៀកបំពាក់/វ៉ែនតាការពារ។",
                        "P284 - ពាក់ឧបករណ៍ការពារផ្លូវដង្ហើម (បើខ្យល់មិនល្អ)។"
                    ]
                },
                {
                    title: "ឆ្លើយតប",
                    items: [
                        "P301+P330+P331 - លេប៖ លាងមាត់។ ហាមធ្វើឱ្យក្អួត។",
                        "P303+P361+P353 - ប៉ះស្បែក៖ ដោះសម្លៀកបំពាក់ចេញ។ លាងទឹក/ងូតទឹក។",
                        "P304+P340 - ស្រូបចូល៖ ទៅកន្លែងខ្យល់ល្អ។",
                        "P305+P351+P338 - ចូលភ្នែក៖ លាងទឹកជាច្រើននាទី។ ដោះលែនចេញ។",
                        "P310 - ហៅពេទ្យបន្ទាន់។",
                        "P320 - ត្រូវការការព្យាបាលបន្ទាន់។"
                    ]
                },
                {
                    title: "រក្សាទុក",
                    items: [
                        "P403+P233 - កន្លែងខ្យល់ចេញចូលល្អ។ បិទជិត។",
                        "P405 - ចាក់សោ។",
                        "P406 - ធុងធន់នឹងការច្រេះ។"
                    ]
                },
                {
                    title: "ចោល",
                    items: [
                        "P501 - ចោលតាមច្បាប់។"
                    ]
                }
            ],
            ppe: [
                "របាំងការពារ (អាស៊ីត)",
                "វ៉ែនតា/របាំងមុខ",
                "ស្រោមដៃអាស៊ីត",
                "សម្លៀកបំពាក់អាស៊ីត"
            ],
            firstAid: {
                eye: "ហាមត្រដុសភ្នែក។ លាងទឹក 15 នាទី។ ដោះលែន។ ជួបគ្រូពេទ្យ។",
                skin: "ដោះខោអាវកខ្វក់។ លាងសាប៊ូនិងទឹក 15 នាទី។ ជួបគ្រូពេទ្យ។",
                inhalation: "ទៅកន្លែងខ្យល់ល្អ។ ផ្តល់អុកស៊ីសែនបើពិបាកដកដង្ហើម។ ជួបគ្រូពេទ្យ។",
                ingestion: "លាងមាត់។ សុំយោបល់ពេទ្យរឿងធ្វើឱ្យក្អួត។ ជួបគ្រូពេទ្យ។"
            },
            section1Items: [
                { label: "ប្រើប្រាស់", value: "ជី, លោហធាតុ, ថ្នាំសម្លាប់សត្វល្អិត, ក្រដាស, គ្រឿងផ្ទុះ" },
                { label: "ផ្គត់ផ្គង់", value: "Namhae Chemical (Yeosu)" },
                { label: "លេខបន្ទាន់", value: "061-688-5442" }
            ],
            section3Items: [
                { name: "Sulfuric Acid", cas: "7664-93-9", id: "KE-32570", percent: "96 ~ 99 %" },
                { name: "Water", cas: "7732-18-5", id: "KE-35400", percent: "1 ~ 4 %" }
            ],
            section4Items: [
                { label: "ចំណាំ", value: "ជូនដំណឹងដល់បុគ្គលិកពេទ្យអំពីការចម្លងរោគ។" }
            ],
            section5Items: [
                { label: "ពន្លត់", value: "CO2, ម្សៅ" },
                { label: "ហាម", value: "ហាមបាញ់ទឹកផ្ទាល់ (ប្រតិកម្មខ្លាំង)" },
                { label: "គ្រោះថ្នាក់", value: "ផ្ទុះពេលកំដៅ។ ប្រតិកម្មជាមួយទឹកបង្កើតកំដៅ/ឧស្ម័នពុល។" },
                { label: "វិធី", value: "ធ្វើឱ្យធុងត្រជាក់។ ជម្លៀស 0.8km។" }
            ],
            section6Items: [
                { label: "ការពារ", value: "នៅពីលើខ្យល់។ ហាមបាញ់ទឹកលើកន្លែងលេចធ្លាយ។" },
                { label: "បរិស្ថាន", value: "ទប់ស្កាត់ការចូលលូ/ប្រភពទឹក។" },
                { label: "សម្អាត", value: "ស្រូបដោយដី/ខ្សាច់។ ធ្វើឱ្យកម្រិតអាស៊ីតចុះ។" }
            ],
            section7Items: [
                { label: "សុវត្ថិភាព", value: "ប្រយ័ត្នពេលថែមទឹក(ប្រតិកម្មខ្លាំង)។ ការពារអគ្គិសនីស្ថិត។" },
                { label: "រក្សាទុក", value: "ធុងធន់ច្រេះ។ ឆ្ងាយពីកំដៅ។ ដាក់ដាច់ដោយឡែក (សារធាតុបង្កមហារីក)។" }
            ],
            section8Items: [
                { name: "Sulfuric Acid (កូរ៉េ)", agency: "MOEL", val: "TWA 0.2 mg/m³, STEL 0.6 mg/m³" },
                { name: "Sulfuric Acid (អាមេរិក)", agency: "ACGIH", val: "TWA 0.2 mg/m³" }
            ],
            section9Items: [
                { label: "រូបរាង", value: "រាវដូចប្រេង / គ្មានពណ៌ ដល់ ពណ៌ត្នោត" },
                { label: "ក្លិន / pH", value: "គ្មានក្លិន / 0.3" },
                { label: "រលាយ/ពុះ", value: "-1.11~3.0℃ / 310~335℃" },
                { label: "ដង់ស៊ីតេ", value: "1.836 ~ 1.841" }
            ],
            section10Items: [
                { label: "ប្រតិកម្ម", value: "ប្រតិកម្មខ្លាំងជាមួយទឹក (កំដៅ)។ ច្រេះលោហៈ (អ៊ីដ្រូសែន)។" },
                { label: "ជៀសវាង", value: "លោហៈ, សារធាតុសរីរាង្គ, ទឹក, អាល់កុល" }
            ],
            section11Items: [
                { label: "ប៉ះពាល់", value: "ស្រូប (ស្លាប់), ភ្នែក (ខូច), ស្បែក (រលាក)" },
                { label: "ពុល (ស្រូប)", value: "LC50 0.375 mg/L/4h (កម្រិត 2)" },
                { label: "មហារីក", value: "កម្រិត 1A (អ័ព្ទអាស៊ីត)" }
            ],
            section12Items: [
                { label: "ត្រី", value: "LC50 16-28 mg/L 96h" },
                { label: "Crustaceans", value: "EC50 >100 mg/L 48h" }
            ],
            section13Items: [
                { label: "ចោល", value: "ធ្វើឱ្យកម្រិតអាស៊ីតចុះ/ដុត ឬកប់។ សំណល់គ្រោះថ្នាក់។" }
            ],
            section14Items: [
                { label: "UN", value: "1830" },
                { label: "ឈ្មោះ", value: "SULFURIC ACID (>51%)" },
                { label: "ថ្នាក់", value: "8 (Corrosive)" },
                { label: "ក្រុម", value: "II" }
            ],
            section15Items: [
                { label: "ច្បាប់", value: "សារធាតុ PSM, គ្រប់គ្រង, ពុល, គ្រោះថ្នាក់" }
            ],
            section16Items: [
                { label: "កាលបរិច្ឆេទ", value: "01-11-2024" },
                { label: "ប្រភព", value: "Namhae Chemical" }
            ]
        }
    },

    // ----------------------------------------------------------------------
    // 🇺🇿 우즈베키스탄어 (Uzbek)
    // ----------------------------------------------------------------------
    uz: {
        header: {
            productName: "Sulfat kislotasi (H2SO4)",
            productNameEn: "Sulfuric Acid",
            msdsNo: "AA00930-0000000001",
            revision: "01-11-2024 (9-tahrir)",
            signalWord: "XAVFLI",
            source: "Namhae Chemical MSDS"
        },
        sections: {
            ghs: "GHS Piktogrammalari",
            section1: "1. Mahsulot va Kompaniya",
            section2: "2. Xavflarni aniqlash",
            section3: "3. Tarkibi",
            section4: "4. Birinchi yordam",
            section5: "5. Yong'in",
            section6: "6. To'kilish",
            section7: "7. Ishlatish/Saqlash",
            section8: "8. Himoya",
            section9: "9. Fizik xususiyatlar",
            section10: "10. Barqarorlik",
            section11: "11. Toksikologiya",
            section12: "12. Ekologiya",
            section13: "13. Chiqindi",
            section14: "14. Tashish",
            section15: "15. Qoidalar",
            section16: "16. Boshqa",
        },
        content: {
            hazards: [
                "H290 - Metallarni korroziyaga uchratishi mumkin",
                "H314 - Terining qattiq kuyishi va ko'zning shikastlanishiga olib keladi",
                "H318 - Ko'zning jiddiy shikastlanishiga olib keladi",
                "H330 - Nafas olganda o'limga olib keladi (O'tkir toksiklik 2-toifa)",
                "H350 - Saraton kasalligini keltirib chiqarishi mumkin (1A-toifa)",
                "H412 - Suv organizmlari uchun uzoq muddatli xavfli"
            ],
            precautionary: [
                {
                    title: "Oldini olish",
                    items: [
                        "P201 - Ishlatishdan oldin maxsus ko'rsatmalarni oling.",
                        "P260 - Gaz/tuman/bug'/spreyi nafas qilmang.",
                        "P280 - Himoya kiyimi/qo'lqop/ko'zoynak taqing.",
                        "P284 - Nafas olish organlarini himoya qilish vositalarini taqing."
                    ]
                },
                {
                    title: "Javob",
                    items: [
                        "P301+P330+P331 - YUTIB YUBORGANDA: Og'izni yuving. Qusmang.",
                        "P303+P361+P353 - TERIGA TEKKANDA: Kiyimni yeching. Suv bilan yuving.",
                        "P304+P340 - NAFAS OLGANDA: Toza havoga chiqing.",
                        "P305+P351+P338 - KO'ZGA TUSHGANDA: Suv bilan yuving. Linzarni oling.",
                        "P310 - Darhol shifokorga murojaat qiling.",
                        "P320 - Shoshilinch davolash zarur."
                    ]
                },
                {
                    title: "Saqlash",
                    items: [
                        "P403+P233 - Yaxshi shamollatiladigan joyda saqlang. Zich yoping.",
                        "P405 - Qulf ostida saqlang.",
                        "P406 - Korroziyaga chidamli idishda saqlang."
                    ]
                },
                {
                    title: "Yo'q qilish",
                    items: [
                        "P501 - Qonunchilikka muvofiq yo'q qiling."
                    ]
                }
            ],
            ppe: [
                "Respirator (Kislota uchun)",
                "Himoya ko'zoynagi/qalqon",
                "Kislotaga chidamli qo'lqop",
                "Kislotaga chidamli kiyim"
            ],
            firstAid: {
                eye: "Ishqalamang. 15 daqiqa suv bilan yuving. Linzarni oling. Shifokor.",
                skin: "Kiyimni yeching. Sovun va suv bilan 15 daqiqa yuving. Shifokor.",
                inhalation: "Toza havo. Nafas to'xtasa, sun'iy nafas bering. Shifokor.",
                ingestion: "Og'izni yuving. Qusmang. Shifokor maslahatini oling."
            },
            section1Items: [
                { label: "Foydalanish", value: "O'g'it, Metallurgiya, Pestitsid, To'qimachilik, Qog'oz, Portlovchi moddalar" },
                { label: "Yetkazib beruvchi", value: "Namhae Chemical (Yeosu)" },
                { label: "Favqulodda", value: "061-688-5442" }
            ],
            section3Items: [
                { name: "Sulfat kislotasi", cas: "7664-93-9", id: "KE-32570", percent: "96 ~ 99 %" },
                { name: "Suv", cas: "7732-18-5", id: "KE-35400", percent: "1 ~ 4 %" }
            ],
            section4Items: [
                { label: "Eslatma", value: "Tibbiyot xodimlarini xabardor qiling. Himoya choralarini ko'ring." }
            ],
            section5Items: [
                { label: "O'chirish", value: "CO2, Kukun" },
                { label: "Taqiq", value: "Suvni to'g'ridan-to'g'ri sepmang (Kuchli reaksiya)" },
                { label: "Xavf", value: "Isitilganda portlashi mumkin. Suv bilan zaharli gazlar (SO2) chiqaradi." },
                { label: "Usul", value: "Idishni sovuting. 0.8 km masofaga evakuatsiya qiling." }
            ],
            section6Items: [
                { label: "Himoya", value: "Shamolga qarshi turing. Oqish joyiga suv sepmang." },
                { label: "Atrof-muhit", value: "Kanalizatsiyaga tushishini oldini oling." },
                { label: "Tozalash", value: "Yonmaydigan material bilan shimdirib oling. Neytrallang." }
            ],
            section7Items: [
                { label: "Xavfsizlik", value: "Suv qo'shganda ehtiyot bo'ling. Statik elektrdan saqlaning." },
                { label: "Saqlash", value: "Korroziyaga chidamli idish. Zich. Issiqlikdan uzoq. Kanserogen zona." }
            ],
            section8Items: [
                { name: "Sulfat kislotasi (Koreya)", agency: "MOEL", val: "TWA 0.2 mg/m³, STEL 0.6 mg/m³" },
                { name: "Sulfat kislotasi (AQSH)", agency: "ACGIH", val: "TWA 0.2 mg/m³" }
            ],
            section9Items: [
                { label: "Ko'rinish", value: "Yogli suyuqlik / Rangsiz yoki to'q jigarrang" },
                { label: "Hid / pH", value: "Hidsiz / 0.3" },
                { label: "Erish/Qaynash", value: "-1.11~3.0℃ / 310~335℃" },
                { label: "Zichlik", value: "1.836 ~ 1.841" }
            ],
            section10Items: [
                { label: "Reaksiya", value: "Suv bilan kuchli (issiqlik). Metallni korroziyalaydi (vodorod)." },
                { label: "Saqlanish", value: "Metall, Organik moddalar, Suv, Spirt" }
            ],
            section11Items: [
                { label: "Ta'sir", value: "Nafas (O'lim), Ko'z (Jiddiy), Teri (Kuyish)" },
                { label: "Toksiklik (Nafas)", value: "LC50 0.375 mg/L/4h (Tuman) - 2-toifa" },
                { label: "Saraton", value: "1A-toifa (Kislota tumani)" }
            ],
            section12Items: [
                { label: "Baliq", value: "LC50 16-28 mg/L 96h" },
                { label: "Qisqichbaqa", value: "EC50 >100 mg/L 48h" }
            ],
            section13Items: [
                { label: "Yo'q qilish", value: "Neytrallash/Yoqish/Ko'mish. Xavfli chiqindi." }
            ],
            section14Items: [
                { label: "UN", value: "1830" },
                { label: "Nom", value: "SULFURIC ACID (>51%)" },
                { label: "Sinf", value: "8 (Korroziy)" },
                { label: "Guruh", value: "II" }
            ],
            section15Items: [
                { label: "Qoida", value: "PSM, Boshqariladigan, Zaharli, Baxtsiz hodisa moddasi" }
            ],
            section16Items: [
                { label: "Sana", value: "01-11-2024" },
                { label: "Manba", value: "Namhae Chemical" }
            ]
        }
    }
};