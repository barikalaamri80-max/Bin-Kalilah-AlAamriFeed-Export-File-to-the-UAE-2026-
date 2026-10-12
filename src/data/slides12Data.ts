export interface ComplianceMatrixRow {
  regulatoryScopeAr: string;
  regulatoryScopeEn: string;
  moccaeRequirementAr: string;
  moccaeRequirementEn: string;
  exportDeptOutputAr: string;
  exportDeptOutputEn: string;
  complianceStatus: 'NON_COMPLIANT' | 'CRITICAL_MISMATCH';
  complianceStatusAr: string;
  complianceStatusEn: string;
  statutoryImpactAr: string;
  statutoryImpactEn: string;
}

export interface SlideItem {
  id: number;
  slideNumber: number;
  tagAr: string;
  tagEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  summaryAr: string;
  summaryEn: string;
  metrics?: {
    value: string;
    labelAr: string;
    labelEn: string;
    color: string;
  }[];
  pointsAr: { title: string; desc: string; tag?: string }[];
  pointsEn: { title: string; desc: string; tag?: string }[];
  highlightBoxAr?: { title: string; desc: string; type: 'success' | 'warning' | 'danger' | 'info' };
  highlightBoxEn?: { title: string; desc: string; type: 'success' | 'warning' | 'danger' | 'info' };
  complianceMatrix?: ComplianceMatrixRow[];
}

export const SLIDES_12_DATA: SlideItem[] = [
  {
    id: 1,
    slideNumber: 1,
    tagAr: "الملف الاستراتيجي التنفيذي • تحكيم مجلس الإدارة",
    tagEn: "Executive Dossier • Board of Directors Arbitration",
    titleAr: "الملف الاستراتيجي لاعتماد وتأمين انسياب استيراد أعلاف «بركات»",
    titleEn: "Strategic File for Accreditation and Securing Baraka Feed Import",
    subtitleAr: "مذكرة استراتيجية تنفيذية مرفوعة حصرياً إلى أصحاب السعادة والفاضل المحترمين / أعضاء مجلس إدارة شركة مطاحن صلالة (ش.م.ع.ع)",
    subtitleEn: "Executive Strategic Dossier Exclusively Addressed to the Respected Members of the Board of Directors of Salalah Mills Company (SAOG)",
    summaryAr: "شراكة استراتيجية لتأمين سلاسل الإمداد الغذائي للثروة الداجنة لمزارع سويحان في إمارة أبوظبي وفق أرقى المعايير البيطرية والصحية الخليجية.",
    summaryEn: "Strategic partnership securing poultry feed lifelines for Sweihan farms in Abu Dhabi under highest GCC veterinary and food safety standards.",
    pointsAr: [
      { title: "الجهة المعدة والمستثمر الوطني", desc: "شركة بن كليلة العامري للتجارة والاستثمار ش.م.م (س.ت: 1111041 — صلالة)" },
      { title: "الجهة المستوردة والمستفيدة", desc: "العميل النهائي (دولة الإمارات — رخصة: CN-1993845)" },
      { title: "الجهة المصنعة الوطنية", desc: "شركة مطاحن صلالة / المطاحن العمانية ش.م.ع.ع" },
    ],
    pointsEn: [
      { title: "Prepared By & Authorized Agent", desc: "Bin Kalilah Al Amri Trading & Investment Co. LLC (CR: 1111041 — Salalah)" },
      { title: "UAE Beneficiary & Importer", desc: "The Final Client (UAE — License: CN-1993845)" },
      { title: "National Manufacturer", desc: "Salalah Mills / Oman Flour Mills Co. (SAOG)" },
    ],
    highlightBoxAr: {
      title: "الهدف المحوري:",
      desc: "حماية خط الإمداد الاستراتيجي من التعطيل الإداري وتثبيت فترة السحب النظامية (7 أيام) لاعتماد الشحنات لدى وزارة البيئة الإماراتية.",
      type: "success"
    },
    highlightBoxEn: {
      title: "Core Objective:",
      desc: "Protecting a sustainable food lifeline from administrative obstruction and confirming the 7-day withdrawal period for UAE MOCCAE accreditation.",
      type: "success"
    }
  },
  {
    id: 2,
    slideNumber: 2,
    tagAr: "الأمن الغذائي • القيمة الاستراتيجية",
    tagEn: "Food Security • Strategic Value",
    titleAr: "شراكة استراتيجية لدعم منظومة الأمن الغذائي بدولة الإمارات",
    titleEn: "Strategic Partnership to Support UAE Food Security",
    subtitleAr: "شريان إمداد حيوي يربط الإنتاج الوطني العماني باحتياجات مزارع الدواجن بأبوظبي بكفاءة تشغيلية وملاءة مالية تامة",
    subtitleEn: "A vital supply line connecting Omani production with poultry farm needs in Abu Dhabi, built on operational efficiency and full financial commitment.",
    summaryAr: "توفير متطلبات تربية 160,000 طائر لاحم في حظائر سويحان وفق نظام دفع نقدي مسبق 100% دون أي مخاطر ائتمانية للمصنع.",
    summaryEn: "Securing feed requirements for 160,000 broiler birds in Sweihan poultry houses with 100% advance wire payments and zero credit exposure.",
    metrics: [
      { value: "1.87M - 2.46M ر.ع", labelAr: "القيمة السنوية المستهدفة (200,000 كيس)", labelEn: "Target Annual Value (200,000 bags)", color: "text-emerald-400" },
      { value: "160,000 طائر", labelAr: "ثروة داجنة مهددة بوقف الإمداد", labelEn: "Poultry stock threatened by supply halt", color: "text-amber-400" },
      { value: "100% نقداً مسبقاً", labelAr: "سداد مسبق كامل (Credit Zero)", labelEn: "Prepaid to Credit Zero (High Liquidity)", color: "text-sky-400" },
    ],
    pointsAr: [
      { title: "حجم التوريد المخطط", desc: "يبدأ من 9,000 كيس ويستهدف 24,000 كيس شهرياً من أعلاف البادي والناهي." },
      { title: "التوسعات الميدانية", desc: "إنشاء مخازن جديدة في 3 مزارع إضافية تستوعب ثلاثة أضعاف الكميات الحالية." },
      { title: "الملاءة والالتزام", desc: "تحويل المبالغ نقداً مقدماً بحساب بنك مسقط قبل خروج أي شاحنة من رصيف المصنع." }
    ],
    pointsEn: [
      { title: "Planned Supply Volume", desc: "Starting at 9,000 bags, targeting 24,000 bags monthly of Starter and Finisher feed." },
      { title: "Farm Expansion", desc: "Newly constructed silos across 3 adjacent farms ready to handle triple the current volume." },
      { title: "Financial Integrity", desc: "100% wire advance prepaid into corporate accounts prior to truck dispatch from loading bays." }
    ],
    highlightBoxAr: {
      title: "الغاية الأساسية:",
      desc: "حماية خط الإمداد المستدام من التدخلات الخارجية التي تزعزع استقرار الأمن الغذائي الوطني للمزارع الإماراتية.",
      type: "success"
    },
    highlightBoxEn: {
      title: "Core Objective:",
      desc: "Protecting a sustainable food lifeline from external interventions that undermine food security stability.",
      type: "success"
    }
  },
  {
    id: 3,
    slideNumber: 3,
    tagAr: "العميل السيادي • التراخيص الرسمية",
    tagEn: "Sovereign Client • Official Accreditations",
    titleAr: "الجهة المستفيدة بالإمارات: العميل النهائي (دولة الإمارات)",
    titleEn: "UAE Beneficiary: The Final Client (United Arab Emirates)",
    subtitleAr: "كيان وطني ملتزم بأعلى معايير السلامة الغذائية ويمتلك ترخيصاً زراعياً وحيوانياً نافذاً",
    subtitleEn: "A national entity complying with the highest food safety standards, with active agricultural & livestock licensing.",
    summaryAr: "منشأة متكاملة لإنتاج الدواجن معفية من قيود إعادة البيع التجاري لخدمة الإنتاج المباشر، وتتطلب التيسير الإجرائي لا التعطيل.",
    summaryEn: "An integrated broiler production facility exempt from commercial resale requirements, requiring procedural facilitation.",
    metrics: [
      { value: "CN-1993845", labelAr: "رخصة اقتصادية (أبوظبي) نشطة", labelEn: "Economic License (Abu Dhabi)", color: "text-white" },
      { value: "100258623600003", labelAr: "الرقم الضريبي (TRN) معتمد بالاتحادية للضرائب", labelEn: "Tax Registration Number (TRN)", color: "text-emerald-400" },
      { value: "CA-6502023", labelAr: "شهادة ADAFSA لا ممانعة سارية حتى 2027", labelEn: "ADAFSA NOC Certificate (Valid 2027)", color: "text-sky-400" },
    ],
    pointsAr: [
      { title: "النشاط الميداني", desc: "تربية وإنتاج الدواجن اللاحمة بطاقة استيعابية تبلغ 160,000 طائر لاحم." },
      { title: "الصفة القانونية للاستيراد", desc: "استيراد مباشر لمنشأة إنتاج حيواني خاصة دون إعادة بيع أو تداول بالأسواق." },
      { title: "التمسك بالشراكة الوطنية", desc: "رفض العميل النهائي التعامل مع الوسطاء الوافدين والإصرار على الشراكة الحصرية مع المستثمر العماني." }
    ],
    pointsEn: [
      { title: "Operational Scope", desc: "Commercial broiler poultry husbandry supporting 160,000 birds." },
      { title: "Regulatory Exemption", desc: "Direct import serving an animal production facility, exempt from resale restrictions." },
      { title: "Client Stance", desc: "Firm refusal of intermediary brokers and strict insistence on direct Omani supplier partnership." }
    ],
    highlightBoxAr: {
      title: "ملاحظة تنظيمية حاسمة:",
      desc: "العميل النهائي معفى من اشتراطات إعادة البيع التجاري لكون الاستيراد مخصصاً لمنشأة إنتاج حيواني مباشرة، مما يستوجب التسهيل النظامي لا العرقلة.",
      type: "info"
    },
    highlightBoxEn: {
      title: "Regulatory Note:",
      desc: "The farm is exempt from commercial resale requirements since import serves a direct internal animal production facility, requiring facilitation rather than obstruction.",
      type: "info"
    }
  },
  {
    id: 4,
    slideNumber: 4,
    tagAr: "عنق الزجاجة • الحصار الميداني",
    tagEn: "Operational Bottleneck • The 57-Day Blockade",
    titleAr: "عنق الزجاجة التشغيلي: حصار الـ 57 يوماً وتعطيل الشحنات",
    titleEn: "Operational Bottleneck: The 57-Day Blockade",
    subtitleAr: "رغم الجاهزية التامة للعميل والمستثمر، تم تجميد خط الإمداد من داخل المصنع لأسباب إجرائية مصطنعة وتدخلات دخيلة",
    subtitleEn: "Despite full client and investor readiness, the supply line was frozen internally due to manufactured administrative reasons and illicit interference.",
    summaryAr: "تعطيل الشحنات بالرغم من سداد 18,640 ريال عماني نقداً مقدماً بالكامل وتوافر أسطول النقل اللوجستي المجهز.",
    summaryEn: "Consignments held despite 18,640 OMR paid 100% upfront in advance cash and standby transport fleet.",
    metrics: [
      { value: "100% مسددة نقداً", labelAr: "الحالة المالية: 18,640 ر.ع محولة بالكامل", labelEn: "Financial Status: 100% Paid (18,640 OMR)", color: "text-emerald-400" },
      { value: "100% جاهزة", labelAr: "الجاهزية اللوجستية: الأسطول بانتظار التحميل", labelEn: "Logistical Fleet: 100% Standby", color: "text-sky-400" },
      { value: "محظورة إجرائياً", labelAr: "المنافذ والجمارك: شحنات معلقة بسبب تناقض الأوراق", labelEn: "Clearance & Ports: Blocked by Spec Mismatch", color: "text-rose-400" },
    ],
    pointsAr: [
      { title: "جذور الأزمة (1)", desc: "إهمال فني وتناقض مستندي متعمد بين بطاقة الكيس وشهادة التحليل المخبري وورقة المواصفات." },
      { title: "جذور الأزمة (2)", desc: "تدخل وسيط تجاري وافد غير مرخص حاول الاستيلاء على خط الشحن وابتزاز العميل النهائي." },
      { title: "الأثر المباشر", desc: "تجميد تصدير 50 طناً (1,000 كيس) وتعريض 160,000 طائر لمخاطر النفوق الغذائي." }
    ],
    pointsEn: [
      { title: "Root Cause (1)", desc: "Technical negligence and document contradictions across labels, COA certificates, and datasheets." },
      { title: "Root Cause (2)", desc: "Interference by an unauthorized expat intermediary attempting to hijack the logistics route and extort the client." },
      { title: "Direct Impact", desc: "Freezing 50 metric tons (1,000 bags) and exposing 160,000 broiler birds to starvation mortality risks." }
    ],
    highlightBoxAr: {
      title: "أسباب الأزمة الموثقة:",
      desc: "(1) إهمال فني وتناقض مستندي في أوراق التصدير. (2) تمكين وسيط وافد غير مرخص من محاولة الاستيلاء على خط النقل وابتزاز العميل.",
      type: "danger"
    },
    highlightBoxEn: {
      title: "Roots of the Crisis:",
      desc: "(1) Deliberate technical negligence and contradictions in export documentation. (2) Interference by an unauthorized foreign intermediary attempting to hijack the transport route and extort the client.",
      type: "danger"
    }
  },
  {
    id: 5,
    slideNumber: 5,
    tagAr: "مصفوفة الامتثال الرقابي • MOCCAE vs قسم التصدير",
    tagEn: "Regulatory Compliance Matrix • MOCCAE vs Export Dept",
    titleAr: "مصفوفة الامتثال التنظيمي والرقابي (Regulatory Compliance Matrix)",
    titleEn: "Regulatory Compliance Matrix: MOCCAE Requirements vs. Export Dept Outputs",
    subtitleAr: "مطابقة فنية دقيقة لاشتراطات وزارة التغير المناخي والبيئة بدولة الإمارات مقابل مخرجات قسم التصدير وتوثيق مواضع عدم الامتثال (Non-Compliance)",
    subtitleEn: "Systematic mapping of UAE MOCCAE sovereign statutory mandates against actual documents provided by the Export Department, highlighting critical Non-Compliance.",
    summaryAr: "جدول المواءمة الرقابية يثبت أن تعطيل الإفراج الجمركي ناجم عن تسليم مستندات غير ممتثلة من قسم التصدير (مثل إقرار علف البياض لشحنات اللاحم وتضارب شهادات التحليل وفترة السحب).",
    summaryEn: "Statutory compliance audit proving border clearance disruption stems directly from non-compliant document outputs by the Export Department (such as layer feed declaration for broiler cargo and COA omissions).",
    complianceMatrix: [
      {
        regulatoryScopeAr: "إقرار سلامة الأعلاف وفصيلة الطيور",
        regulatoryScopeEn: "Feed Safety Declaration & Target Species",
        moccaeRequirementAr: "إلزامية تقديم إقرار سلامة أعلاف رسمي معتمد مطابق 100% للنوع المشحون فعلياً (علف دجاج لاحم Broiler Starter 23% / Finisher) وفصيلته الحيوية المحددة بالترخيص.",
        moccaeRequirementEn: "Mandatory official Feed Safety Declaration matching 100% the physical poultry type imported (Broiler Starter 23% / Finisher) and registered species.",
        exportDeptOutputAr: "قام قسم التصدير بتسليم إقرار سلامة أعلاف مؤرخ في 22 مايو 2025 مخصص لعلف البياض (Layer Feed 16%) بدلاً من علف اللاحم (Broiler Feed) المشحون فعلياً!",
        exportDeptOutputEn: "Export Department delivered a Feed Safety Declaration dated 22 May 2025 designated for Layer Feed (16%) instead of Broiler Feed contracted and physically loaded!",
        complianceStatus: "CRITICAL_MISMATCH",
        complianceStatusAr: "❌ عدم امتثال جسيم (تضارب في تصنيف المنتج)",
        complianceStatusEn: "❌ Critical Non-Compliance (Species/Product Mismatch)",
        statutoryImpactAr: "يُصنف كإقرار مضلل لدى مفتشي MOCCAE بالمنافذ، ويوجب نظاماً الرفض الفوري للإفراج الجمركي ومصادرة الشحنة والمساءلة القانونية.",
        statutoryImpactEn: "Classified as false/erroneous declaration under UAE customs & MOCCAE rules, triggering immediate border rejection and consignment impoundment."
      },
      {
        regulatoryScopeAr: "الإفصاح عن مضادات الكوكسيديا والإضافات",
        regulatoryScopeEn: "Coccidiostats & Therapeutic Additives",
        moccaeRequirementAr: "إفصاح كمي وكيميائي موحد للمادة العلاجية الفعالة (Salinomycin 60g/t) ومضادات الأكسدة عبر كافة الوثائق: بطاقة الشكارة، ورقة المواصفة، وشهادة التحليل (COA).",
        moccaeRequirementEn: "Unified quantitative and chemical declaration of therapeutic active agent (Salinomycin 60g/t) across all files: Bag Label, Technical Spec Sheet, and COA.",
        exportDeptOutputAr: "بطاقة الشكارة تذكر برنامجاً تبادلياً، ورقة مواصفات غير مختومة تذكر 60 غم/طن، بينما شهادة التحليل المخبري (COA) الصادرة 23/06/2026 تغفل تماماً أي ذكر لمضاد الكوكسيديا!",
        exportDeptOutputEn: "Bag label cites Rotation Program, unstamped spec sheet states 60g/t, while Certificate of Analysis (COA) of 23/06/2026 completely omits any mention of coccidiostats!",
        complianceStatus: "NON_COMPLIANT",
        complianceStatusAr: "❌ عدم امتثال فني (تناقض مخبري ومستندي)",
        complianceStatusEn: "❌ Technical Non-Compliance (Laboratory Contradiction)",
        statutoryImpactAr: "رفض تقرير المختبر لدى أطباء الحجر البيطري الإماراتي؛ لا يُقبل فحص مخبري يخلو من قياس المادة المصرح بوجودها على العبوة الخارجية.",
        statutoryImpactEn: "Immediate rejection by port veterinary quarantine; lab reports omitting active ingredients declared on external packaging cannot be cleared."
      },
      {
        regulatoryScopeAr: "فترة سحب العلاج قبل الاستهلاك (Withdrawal Period)",
        regulatoryScopeEn: "Mandatory Withdrawal Period Before Slaughter",
        moccaeRequirementAr: "إلزامية النص الصريح على فترة سحب بيطرية لا تقل عن 7 أيام على بطاقة العلف والملف الفني للدواجن المعدة للاستهلاك الآدمي لضمان خلو اللحوم من الترسبات.",
        moccaeRequirementEn: "Mandatory statutory withdrawal period of at least 7 days explicitly declared on feed bag and technical dossier for human-consumption broilers.",
        exportDeptOutputAr: "تسليم ورقة مواصفات تنص على أن فترة السحب «صفر يوم (0 Days)» رغم احتواء العلف على Salinomycin، مع الامتناع الإداري عن إصدار إفادة السحب النظامية (7 أيام).",
        exportDeptOutputEn: "Export Department provided a datasheet stating 'Withdrawal: 0 Days' despite containing active Salinomycin, while refusing to issue the 7-day confirmation.",
        complianceStatus: "CRITICAL_MISMATCH",
        complianceStatusAr: "❌ عدم امتثال بيطري (مخالفة معايير سلامة الغذاء)",
        complianceStatusEn: "❌ Critical Non-Compliance (Food Safety Standard Breach)",
        statutoryImpactAr: "مخالفة صريحة لاشتراطات الهيئة العامة ووزارة البيئة؛ فترة سحب (0 يوم) لعلف يحتوي على مضاد حيوي/كوكسيديا غير مقبولة علمياً ورقابياً.",
        statutoryImpactEn: "Direct breach of GCC & UAE veterinary health standards; a 0-day withdrawal period for medicated poultry feed is medically and legally inadmissible."
      },
      {
        regulatoryScopeAr: "تطابق أرقام التشغيلات والتتبع الدفعي",
        regulatoryScopeEn: "Batch Numbers & Consignment Traceability",
        moccaeRequirementAr: "مواءمة رقم التشغيلة (Batch Number)، وتاريخ الإنتاج، والصلاحية بين الفاتورة التجارية، والشهادة الصحية، وبطاقة التعبئة الفعلية.",
        moccaeRequirementEn: "Complete synchronization of Batch Number, Production Date, and Shelf Life between commercial invoice, health cert, and bag stamps.",
        exportDeptOutputAr: "تضارب أرقام التشغيلات المسجلة في إفادات الإفراج الإداري مع الأختام المطبوعة على أكياس الشحنة، وصعوبة استخراج شهادة رقمية موحدة.",
        exportDeptOutputEn: "Discrepancy between batch codes on administrative release memos and physical stamps on sacks, impeding unified digital cross-referencing.",
        complianceStatus: "NON_COMPLIANT",
        complianceStatusAr: "❌ عدم امتثال إجرائي (قصور في التتبع الرقمي)",
        complianceStatusEn: "❌ Procedural Non-Compliance (Traceability Mismatch)",
        statutoryImpactAr: "تعطيل الربط الإلكتروني الجمركي بنظام لومن (Lumen) بالمنافذ الحدودية وتأخير المطابقة الآلية للشحنات.",
        statutoryImpactEn: "Failure of electronic barcode matching in UAE customs Lumen system, halting automated clearance at border checkpoints."
      },
      {
        regulatoryScopeAr: "هوية المستورد الفعلي والتفويض الجمركي",
        regulatoryScopeEn: "Registered Importer Identity & VAT Quota",
        moccaeRequirementAr: "إصدار البيانات الجمركية والمستندات باسم الكيان المرخص والمستورد الفعلي (العميل النهائي — رخصة CN-1993845) لتطبيق الإعفاء واسترداد ضريبة القيمة المضافة 5%.",
        moccaeRequirementEn: "Customs and release declarations must be issued directly to the licensed entity (The Final Client — License CN-1993845) for quota and 5% VAT recovery.",
        exportDeptOutputAr: "إصدار وثائق الشحن دون مطابقة اسم المستورد النظامي أو التنسيق مع وسيط وافد، مما حرم العميل النهائي من تقييد الشحنة ضمن حصته الاستيرادية.",
        exportDeptOutputEn: "Documents routed through intermediate expat broker without direct synchronization with licensed final client entity records.",
        complianceStatus: "NON_COMPLIANT",
        complianceStatusAr: "❌ عدم اتساق إداري وضريبي (تعطيل استرداد الضريبة)",
        complianceStatusEn: "❌ Administrative Non-Compliance (Tax/Entity Misalignment)",
        statutoryImpactAr: "حرمان العميل النهائي من استرداد ضريبة القيمة المضافة وتعليق تسوية البيان الجمركي رقم 20261501028987 بمنفذ خطم الشكلة.",
        statutoryImpactEn: "Depriving final client of 5% VAT tax refund and blocking final clearance settlement of customs entry 20261501028987."
      }
    ],
    pointsAr: [
      { title: "فخ إقرار علف البياض", desc: "إصدار إقرار لعلف بياض (Layer Feed) لشحنات دجاج لاحم، مما يشكل مخالفة رقابية جسيمة لدى MOCCAE.", tag: "عدم امتثال جسيم" },
      { title: "تناقض شهادة التحليل (COA)", desc: "إغفال مضاد الكوكسيديا المصرح به على الشكارة تماماً من شهادة التحليل المخبري الصادرة من المصنع.", tag: "تضارب مخبري" },
      { title: "معضلة فترة السحب (0 vs 7)", desc: "ادعاء فترة سحب (0 يوم) لعلف يحتوي على Salinomycin بدلاً من الاعتماد النظامي الإماراتي (7 أيام).", tag: "مخالفة بيطرية" }
    ],
    pointsEn: [
      { title: "The Layer Feed Trap", desc: "Issuing Layer Feed declaration for Broiler feed shipments, constituting severe non-compliance under MOCCAE.", tag: "Critical Mismatch" },
      { title: "COA Laboratory Conflict", desc: "Total omission of active Coccidiostats from the official mill COA despite being stated on physical bag packaging.", tag: "Lab Omission" },
      { title: "Withdrawal Mandate (0 vs 7 Days)", desc: "Asserting '0-day' withdrawal for Salinomycin-medicated feed instead of the mandatory UAE 7-day standard.", tag: "Veterinary Breach" }
    ],
    highlightBoxAr: {
      title: "خلاصة المواءمة التنظيمية:",
      desc: "كافة أسباب تأخير الإفراج الجمركي ناتجة حصرياً عن تسليم قسم التصدير مستندات غير ممتثلة لاشتراطات MOCCAE، والمطلوب فوراً إعادة إصدارها بالصيغة النظامية المطابقة.",
      type: "danger"
    },
    highlightBoxEn: {
      title: "Regulatory Compliance Audit Conclusion:",
      desc: "All customs and clearance delays stem exclusively from non-compliant documentation supplied by the Export Department violating MOCCAE mandates. Immediate reissuance is required.",
      type: "danger"
    }
  },
  {
    id: 6,
    slideNumber: 6,
    tagAr: "المفارقة الرقابية • «شهادة الفخ»",
    tagEn: "Regulatory Anomaly • «The Trap Certificate»",
    titleAr: "المفارقة الرقابية: إرسال مستندات لمنتج لم يُستورد إطلاقاً",
    titleEn: "Regulatory Anomaly: Sending Documents for Non-Imported Products",
    subtitleAr: "دليل إضافي على التخبط الإداري وتوريط المستثمر: تزويده بإقرار سلامة لعلف بياض بدلاً من أعلاف اللاحم المشحونة",
    subtitleEn: "Further evidence of administrative mismanagement: safety certificates provided bore no relevance to actual loaded broiler truckloads.",
    summaryAr: "إرسال إقرار سلامة LAYER 16% مرتين متتاليتين لشحنات لاحم تزيد عن 100,000 كغ؛ تقديمه للوزارة يعتبر إقراراً كاذباً يوجب مصادرة الشحنات!",
    summaryEn: "Dispatching safety declarations for LAYER 16% twice for broiler shipments exceeding 100,000 kg; filing this in UAE would trigger border seizure for fraud!",
    pointsAr: [
      { title: "المنتج المطلوب والمشحون فعلياً", desc: "أعلاف دواجن لاحم بادي وناهي (Broiler Starter 23% & Broiler Finisher 19-20%)." },
      { title: "المستند المرسل من التصدير", desc: "إقرار سلامة علف لمنتج بياض تجاري (LAYER 16% AUTUMN SEASON) — «شهادة الفخ»." },
      { title: "الخطر القانوني الحتمي", desc: "تقديم هذا المستند يحصر الاستيراد قانونياً في البيض، ويصادر شحنات اللاحم عند المنفذ ويلغي الترخيص نهائياً." }
    ],
    pointsEn: [
      { title: "Required & Dispatched Product", desc: "Broiler Starter 23% & Broiler Finisher 19-20% meat poultry feed." },
      { title: "Dispatched Export Document", desc: "Feed Safety Declaration for Layer Product (LAYER 16% AUTUMN SEASON) — «The Trap Certificate»." },
      { title: "Inevitable Legal Peril", desc: "Filing this certificate legally restricts import to layer feed, triggering immediate border confiscation of broiler loads." }
    ],
    highlightBoxAr: {
      title: "المطلب الإجرائي العاجل:",
      desc: "نطالب بمطابقة الشهادات البيطرية مع بطاقات المنتج وشهادات التحليل الخاصة بالبادي والناهي، وإلغاء وشطب إقرار الـ Layer نهائياً.",
      type: "warning"
    },
    highlightBoxEn: {
      title: "Procedural Demand:",
      desc: "We request harmonization and matching of veterinary certificates with product labels and COA for Starter & Finisher, permanently striking out the Layer form.",
      type: "warning"
    }
  },
  {
    id: 7,
    slideNumber: 7,
    tagAr: "خريطة التدخل غير المشروع • الكيان الدخيل",
    tagEn: "Illicit Intervention Map • Intruding Entity",
    titleAr: "خريطة التدخل غير المشروع: كيان دخيل يهدد استقرار الإمداد",
    titleEn: "Illicit Intervention Map: Intruding Entity Threatening Supply Stability",
    subtitleAr: "السماح لوسيط تجاري وافد باحتكار النقل ومحاولة ابتزاز العميل خارج الأطر القانونية المعتمدة",
    subtitleEn: "Allowing an expat intermediary to monopolize transport and extort the client outside approved legal frameworks.",
    summaryAr: "ممارسة أنشطة نقل بري داخلي داخل سلطنة عمان دون تراخيص وزارة النقل العمانية، واستغلال أوراق المصنع لابتزاز العميل النهائي بأبوظبي.",
    summaryEn: "Engaging in domestic Omani land transport without Ministry of Transport permits, using factory documents to extort the final client in Abu Dhabi.",
    pointsAr: [
      { title: "المستثمر والوكيل الوطني المعتمد", desc: "شركة بن كليلة العامري للتجارة والاستثمار ش.م.م: الممول الحصري، ومؤسس سوق أعلاف «بركات» بدولة الإمارات." },
      { title: "الوسيط التجاري الوافد: نوفل (شركة أثياف جلوبال FZC)", desc: "شركة أثياف جلوبال FZC (رخصة منطقة عجمان الحرة 39245، مساهمون أجانب 100%)، يديرها الوسيط نوفل ويمارس النقل الداخلي بالسلطنة بمخالفة قوانين النقل والتستر التجاري." },
      { title: "موقف العميل السيادي (العميل النهائي)", desc: "رفض العميل النهائي التعامل مع الوسيط نوفل قطيعاً والإصرار على الشراكة الحصرية مع المستثمر العماني المعتمد." }
    ],
    pointsEn: [
      { title: "Official Investor & Agent", desc: "Bin Kalilah Al Amri Co.: Official agent, deal financier, and founder of the «Baraka» feed market in the UAE." },
      { title: "Expat Broker Nawfal (Athyaf Global FZC)", desc: "Athyaf Global FZC (Ajman Free Zone License 39245, 100% foreign shareholders), managed by broker Nawfal, engaging in illegal domestic transport inside Oman." },
      { title: "Sovereign Client Stance", desc: "The Final Client firmly refused dealings with broker Nawfal, insisting on exclusive partnership with the Omani investor." }
    ],
    highlightBoxAr: {
      title: "مخالفة سيادية وتجارية:",
      desc: "ممارسة أنشطة النقل البري والخدمات اللوجستية داخل سلطنة عمان دون سجل تجاري عماني أو ترخيص نقل من وزارة النقل والاتصالات وتقنية المعلومات.",
      type: "danger"
    },
    highlightBoxEn: {
      title: "Sovereign Violation:",
      desc: "Performing land transport logistics inside Oman without valid commercial registration or transport license from the Ministry of Transport.",
      type: "danger"
    }
  },
  {
    id: 8,
    slideNumber: 8,
    tagAr: "اختطاف البيانات الجمركية • استغلال الأسعار",
    tagEn: "Customs Hijacking • Price Extortion",
    titleAr: "اختطاف المستندات الجمركية والمطالبات المالية غير المبررة",
    titleEn: "Custom Document Hijacking and Unjustified Financial Claims",
    subtitleAr: "استغلال وثائق المصنع من قبل الوسيط نوفل لتتبع عميل المستثمر وفرض هوامش ومطالبات غير مبررة تُلحق الضرر بتنافسية المنتج العماني",
    subtitleEn: "Broker Nawfal exploits factory documents to track the UAE client and impose artificial profit margins and unjustified claims.",
    summaryAr: "استخدام البيان الجمركي 20261501028987 لرفع أجور النولون من 172/280 ر.ع إلى 700 ر.ع، ومطالبة الوسيط نوفل غير المبررة بمبلغ 1,800 ر.ع، وغرامات تأخير 50 ر.ع يومياً، رغم سداد 700 ر.ع مقدماً وفواتير وهمية 1,650 درهم.",
    summaryEn: "Exploiting Customs Dec 20261501028987 to inflate freight rates from 172/280 to 700 OMR, broker Nawfal's unjustified 1,800 OMR claim, 50 OMR/day delay fines, despite 700 OMR advance paid and 1,650 AED phantom tax invoices.",
    pointsAr: [
      { title: "البيان الجمركي 20261501028987 (منفذ خطم الشكلة)", desc: "إصدار وثائق بأسماء لا تمثل المستورد الفعلي، مما يحرم العميل النهائي من حقه الدستوري في استرداد ضريبة القيمة المضافة 5%." },
      { title: "مطالبات الوسيط نوفل المالية غير المبررة", desc: "مطالبة غير مبررة بـ 1,800 ر.ع، وفرض غرامات تأخير 50 ر.ع يومياً، ورفع النولون إلى 700 ر.ع لكل شحنة مستغلاً تعطيل الأوراق، رغم استلام 700 ر.ع مقدماً." },
      { title: "الإضرار بسمعة المنتج الوطني", desc: "فرض هوامش مصطنعة تزيد سعر الكيس بـ 5 دراهم إضافية على المزارع مقارنة بأسعار السوق العماني." }
    ],
    pointsEn: [
      { title: "Customs Declaration 20261501028987 (Khatam Shakla)", desc: "Used to issue documents under names not representing the actual importer, depriving the Final Client of 5% VAT recovery." },
      { title: "Broker Nawfal's Unjustified Financial Claims", desc: "Unjustified 1,800 OMR claim, 50 OMR/day delay fines, and inflating freight to 700 OMR abusing fleet control, despite 700 OMR advance paid." },
      { title: "Brand Reputation Damage", desc: "Imposing arbitrary surcharges of +5 AED per bag, eroding Omani feed competitiveness in the UAE." }
    ],
    highlightBoxAr: {
      title: "الخلاصة الميدانية:",
      desc: "تحول خط الإمداد إلى ساحة احتكار وابتزاز مالي، مما يهدد وجود علامة «بركات» العمانية في أسواق الدواجن الإماراتية.",
      type: "danger"
    },
    highlightBoxEn: {
      title: "Conclusion:",
      desc: "This unlawful monopoly turns a corporate supply chain into an extortion arena, harming the «Baraka» brand reputation in the UAE.",
      type: "danger"
    }
  },
  {
    id: 9,
    slideNumber: 9,
    tagAr: "التسلسل الزمني • إثبات التعطيل الإداري",
    tagEn: "Timeline of Disruption • Administrative Malice",
    titleAr: "التسلسل الزمني للتعطيل: واقعة 7 و 8 مايو 2026",
    titleEn: "Timeline of Disruption: Proving Administrative Malice (May 7-8, 2026)",
    subtitleAr: "إثبات موثق بالتوقيتات للعرقلة التشغيلية الميدانية والتناقض في الإفادات الإدارية بالمصنع",
    subtitleEn: "Chronological proof of operational obstruction and conflicting statements within factory management.",
    summaryAr: "جاهزية الشاحنات وأمر الشراء صباحاً، وتفضيل شاحنات الوسيط ظهراً، ودحض حجة الغياب الطبي بسجلات الأمن الرسمية.",
    summaryEn: "Full funds deposited in the morning, preferential loading granted to broker at 2 PM, and hospital alibi refuted by biometric gate logs.",
    pointsAr: [
      { title: "10:00 صباحاً (جاهزية تامة لسداد الشحنة 3)", desc: "تقديم أمر الشراء وتوفير السيولة النقدية، بينما امتنع قسم التصدير عن إصدار الفواتير طوال الدوام.", tag: "جاهزية تامة" },
      { title: "02:00 ظهراً (تفضيل شاحنات الوسيط الوافد نوفل)", desc: "تحميل شاحنتين للوسيط الوافد نوفل، وتأكيد قسم الأمن بالمصنع تواجد منسوبي قسم التصدير في مكتبهم.", tag: "تجاوز إداري" },
      { title: "06:15 مساءً (ادعاء التواجد بالمستشفى)", desc: "ادعاء قسم التصدير بالغياب بداعي وجودهم بالمستشفى، وهو ما نفته السجلات الأمنية وبصمة البوابة التابعة لقسم الأمن.", tag: "دحض بالشهود" }
    ],
    pointsEn: [
      { title: "10:00 AM (Purchase Order Ready for Lot 3)", desc: "Purchase order submitted & funds deposited; Export Department failed to issue invoices or account details.", tag: "Ready" },
      { title: "02:00 PM (Preferential Loading for Broker Nawfal)", desc: "Broker Nawfal permitted loading for two trucks. Plant Security Department confirmed Export Department staff were present in office.", tag: "Breach" },
      { title: "06:15 PM (Hospital Alibi Refuted)", desc: "Unfounded claim by Export Department of being in 'hospital', disproved by biometric logs at Security Department.", tag: "Disproved" }
    ],
    highlightBoxAr: {
      title: "الأثر المباشر:",
      desc: "تعطيل الشحنة الثالثة، إهدار 5 أيام عمل كاملة، وتأخير استلام الأعلاف مع تعريض الطيور للخطر.",
      type: "danger"
    },
    highlightBoxEn: {
      title: "Immediate Impact:",
      desc: "Loss of 5 full working days, procedural shipment delay, and exposing 160,000 birds to severe risks.",
      type: "danger"
    }
  },
  {
    id: 10,
    slideNumber: 10,
    tagAr: "آلية التصحيح • المسار الضريبي والنظامي",
    tagEn: "Correction Mechanism • Tax & Compliance",
    titleAr: "الآلية الفورية لتصحيح المسار التنظيمي والضريبي",
    titleEn: "Immediate Mechanism to Correct Regulatory and Tax Paths",
    subtitleAr: "توجيه سيادي لتعديل أسماء المستورد في الوثائق الرسمية لتطابق واقع الاستيراد الفعلي وتمكين الإفراج المباشر",
    subtitleEn: "Directives to amend names in official documents to match actual importer realities, unlocking direct clearance.",
    summaryAr: "تعديل اسم المستورد في نظام لومن (Lumen) والبيان الجمركي باسم «العميل النهائي» لاسترداد 5% ضريبة القيمة المضافة وإتمام تسجيل MOCCAE.",
    summaryEn: "Updating importer name in Lumen ERP and customs declarations to «The Final Client» to restore 5% VAT recovery and complete MOCCAE permits.",
    pointsAr: [
      { title: "الوضع غير الصحيح (السابق)", desc: "إصدار فواتير المصنع والبيانات الجمركية بأسماء وسطاء، مما أدى لرفض اعتماد الوزارة وحرمان العميل النهائي من استرداد 5% ضريبة مدخلات (VAT201)." },
      { title: "الوضع النظامي المطلوب (الحل)", desc: "تعديل اسم المستورد في نظام لومن (Lumen) حصرياً إلى: العميل النهائي (الرقم الضريبي: 100258623600003)." },
      { title: "الأثر المالي والقانوني", desc: "تفعيل استرداد الضريبة عبر منصة إمارات تاكس (EmaraTax)، وإصدار إذن الاستيراد التلقائي بوزارة البيئة الإماراتية." }
    ],
    pointsEn: [
      { title: "Current (Incorrect) Status", desc: "Mill invoices & customs declarations issued under intermediary names, causing MOCCAE rejection and loss of 5% VAT recovery." },
      { title: "Required (Compliant) Status", desc: "Modify importer name in invoices (Lumen system) & customs declaration exclusively to: The Final Client (TRN: 100258623600003)." },
      { title: "Tax & Legal Outcome", desc: "Alignment with TRN (100258623600003), activation of VAT recovery (VAT201), and immediate MOCCAE import permit completion." }
    ],
    highlightBoxAr: {
      title: "التطابق الإلزامي:",
      desc: "ربط رقم الترخيص الاقتصادي CN-1993845 مع الرقم الضريبي بالبيان الجمركي ينهي العقدة الإجرائية في المنافذ الحدودية فوراً.",
      type: "success"
    },
    highlightBoxEn: {
      title: "Mandatory Alignment:",
      desc: "Linking Economic License CN-1993845 and TRN with customs declarations resolves border friction instantaneously.",
      type: "success"
    }
  },
  {
    id: 11,
    slideNumber: 11,
    tagAr: "المطالب الإجرائية والفنية • مهلة الحسم",
    tagEn: "Procedural Demands • Sovereign Authorization",
    titleAr: "المطالب الفنية والإجرائية لحسم الملف (مهلة 5 أيام عمل)",
    titleEn: "Technical and Procedural Demands (Sovereign Authorization)",
    subtitleAr: "نلتمس من السادة أعضاء مجلس الإدارة المحترمين التوجيه العاجل لإصدار هذه الوثائق لتأمين انسياب التصدير",
    subtitleEn: "We petition the Respected Members of the Board of Directors for directives ensuring direct shipment clearance.",
    summaryAr: "إصدار خطاب فترة السحب 7 أيام، إقرارات سلامة للبادي والناهي، شطب إقرار البياض، وحظر التدخلات غير المرخصة.",
    summaryEn: "Issuing 7-day withdrawal letter, Starter & Finisher safety declarations, voiding Layer declaration, and barring unauthorized brokers.",
    pointsAr: [
      { title: "1. الإفراج المباشر والاعتماد الرسمي", desc: "إصدار خطاب رسمي مختوم يحدد مادة مضاد الكوكسيديا ويثبت فترة سحب لا تقل عن 7 أيام صراحة وفق اشتراط الوزارة." },
      { title: "2. مطابقة الوثائق المخبرية (COA)", desc: "إصدار شهادات فحص مخبري حديثة خاصة بالتشغيلات المشحونة ومطابقة لبيانات بطاقة الشكارة." },
      { title: "3. حماية الشراكة المباشرة للمستثمر الوطني", desc: "اعتماد شركة بن كليلة العامري وكيلاً نظامياً حصرياً، ووقف التبعية للوسطاء العابرين للحدود." },
      { title: "4. إزالة العوائق اللوجستية وتعديل الفواتير", desc: "استبعاد الكيانات غير المرخصة من التدخل في خطوط التوريد، وتعديل الفواتير بنظام لومن باسم العميل النهائي." }
    ],
    pointsEn: [
      { title: "1. Direct Clearance & Official Accreditation", desc: "Issue official stamped letter specifying anticoccidials and confirming mandatory ≥7-day withdrawal period." },
      { title: "2. Document Harmonization (COA)", desc: "Oblige QA to align COAs with product labeling, matching batch numbers and active therapeutic ingredients." },
      { title: "3. Direct Partnership Protection", desc: "Formalize Bin Kalilah Al Amri Co. as exclusive supplier, terminating subordinate reliance on border-crossing middlemen." },
      { title: "4. Removal of Logistical Barriers", desc: "Exclude unlicensed entities from interfering in supply chains, and adjust Lumen ERP invoices under the Final Client." }
    ],
    highlightBoxAr: {
      title: "مهلة الحسم الإجرائي:",
      desc: "مهلة خمسة (5) أيام عمل لحسم هذه المستندات الرسمية وتوقيعها وختمها على ورق الشركة الرسمي لإرفاقها ببوابة MOCCAE.",
      type: "info"
    },
    highlightBoxEn: {
      title: "Resolution Deadline:",
      desc: "Five (5) business days deadline to issue, sign, and stamp these official documents on corporate letterhead for MOCCAE submission.",
      type: "info"
    }
  },
  {
    id: 12,
    slideNumber: 12,
    tagAr: "الخاتمة والالتزام السيادي • التوقيع الرسمي",
    tagEn: "Final Conclusion • Sovereign Commitment",
    titleAr: "الخاتمة: التزام راسخ بالأمن الغذائي والتكامل الاقتصادي",
    titleEn: "Final Conclusion: Firm Commitment to UAE Food Security",
    subtitleAr: "شراكتنا تتجاوز المعاملات التجارية؛ إنها التزام استراتيجي بتأمين مزارع سويحان بأعلى معايير الجودة والامتثال السيادي",
    subtitleEn: "Our partnership is more than a commercial exchange; it is a strategic commitment to securing Sweihan farms with highest quality standards.",
    summaryAr: "ثقة تامة في عدالة وإنصاف السادة أعضاء مجلس إدارة مطاحن صلالة لإنهاء هذه التجاوزات وتثبيت مسار مؤسسي يخدم البلدين الشقيقين.",
    summaryEn: "Full confidence in the wisdom of the Respected Members of the Board of Directors of Salalah Mills to end transgressions and serve brotherly nations.",
    pointsAr: [
      { title: "الجهة المرفوع منها الملف", desc: "شركة بن كليلة العامري للتجارة والاستثمار ش.م.م (المستثمر والوكيل التجاري المعتمد — صلالة)" },
      { title: "بيانات التواصل المباشر", desc: "هاتف: 99088000 968+ • بريد: bs@binkalilahalaamri.com" },
      { title: "التحفظ القانوني الكامل", desc: "مع حفظ كافة الحقوق والتعويضات عن الأضرار المادية وفوات الكسب." }
    ],
    pointsEn: [
      { title: "Submitted by Authorized Entity", desc: "Bin Kalilah Al Amri Trading & Investment Co. LLC (Authorized Commercial Agent & Investor — Salalah)" },
      { title: "Direct Contact Information", desc: "Phone: +96899088000 • Email: bs@binkalilahalaamri.com" },
      { title: "Full Legal Reservation", desc: "All legal rights and indemnity claims reserved under commercial laws." }
    ],
    highlightBoxAr: {
      title: "رسالة شكر وتقدير:",
      desc: "نشكر السادة أعضاء مجلس الإدارة المحترمين على اهتمامهم وحرصهم على سمعة الصناعة الوطنية العمانية، وكافة الشركاء الداعمين لمنظومة الأمن الغذائي.",
      type: "success"
    },
    highlightBoxEn: {
      title: "Appreciation & Commitment:",
      desc: "We thank the Respected Members of the Board of Directors for their institutional governance, and all partners committed to regional food security.",
      type: "success"
    }
  }
];
