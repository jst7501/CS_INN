import type { MSDSTranslations } from "./types";

const phosphoric: MSDSTranslations = {
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

export default phosphoric;
