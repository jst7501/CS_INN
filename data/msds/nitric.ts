import type { MSDSTranslations } from "./types";

const nitric: MSDSTranslations = {
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

export default nitric;
