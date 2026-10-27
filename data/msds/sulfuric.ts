import type { MSDSTranslations } from "./types";

const sulfuric: MSDSTranslations = {
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

export default sulfuric;
