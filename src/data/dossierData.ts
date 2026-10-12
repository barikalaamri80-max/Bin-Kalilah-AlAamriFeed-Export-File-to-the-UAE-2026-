export interface DossierParty {
  role: string;
  roleEn: string;
  name: string;
  nameEn: string;
  cr: string;
  crEn?: string;
  location: string;
  locationEn: string;
  authorizedPerson: string;
  authorizedPersonEn: string;
  paymentTerms: string;
  paymentTermsEn: string;
  additionalDetails?: string[];
  additionalDetailsEn?: string[];
}

export interface DiscrepancyItem {
  id: string;
  document: string;
  documentEn: string;
  contentFromOmanFlourMills: string;
  contentFromOmanFlourMillsEn: string;
  uaeMoccaeCondition: string;
  uaeMoccaeConditionEn: string;
  technicalImpact: string;
  technicalImpactEn: string;
  severity: 'high' | 'critical' | 'severe';
  detailedAnalysis: string;
  detailedAnalysisEn: string;
  legalRisk: string;
  legalRiskEn: string;
  recommendation: string;
  recommendationEn: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  dateEn: string;
  time?: string;
  timeEn?: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  badge: string;
  badgeEn: string;
  badgeType: 'success' | 'warning' | 'danger' | 'critical';
  evidenceType: string;
  evidenceTypeEn: string;
  evidenceDetails: string;
  evidenceDetailsEn: string;
}

export interface ShipmentRecord {
  id: string;
  refNumber: string;
  title: string;
  titleEn: string;
  amount: string;
  amountEn: string;
  quantity: string;
  quantityEn: string;
  paymentStatus: string;
  paymentStatusEn: string;
  settlementDate: string;
  settlementDateEn: string;
  customsStatus: string;
  customsStatusEn: string;
  notes: string;
  notesEn: string;
}

export interface ExecutiveDemand {
  id: number;
  numberArabic: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  department: string;
  departmentEn: string;
}

export interface PresentationSlide {
  id: number;
  number: string;
  tagAr: string;
  tagEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  contentAr: React.ReactNode | string;
  contentEn: React.ReactNode | string;
  keyTakeawayAr: string;
  keyTakeawayEn: string;
}

export const DOSSIER_META = {
  ref: "BKA/UAE-EXPORT/2026/10",
  commercialReg: "1111041",
  dateArabic: "5 أكتوبر 2026م",
  dateEnglish: "October 5, 2026",
  companyNameAr: "شركة بن كليلة العامري للتجارة والاستثمار ش.م.م",
  companyNameEn: "Bin Kalilah Al Amri Trading & Investment Co. LLC",
  projectAr: "ملف الشراكة الاستراتيجية لتصدير أعلاف «بركات» (أبوظبي)",
  projectEn: "Strategic Export Partnership Dossier - Baraka Feed (Abu Dhabi)",
  dossierBadgeAr: "ملف رسمي موثق ومرفوع • لتحكيم مجلس الإدارة",
  dossierBadgeEn: "EXECUTIVE SOVEREIGN DOSSIER • BOARD OF DIRECTORS ARBITRATION",
  classificationAr: "أمن الإمداد الغذائي للثروة الحيوانية والداجنة",
  classificationEn: "Food Supply Security for Livestock & Poultry",
  titleAr: "الملف الاستراتيجي التنفيذي لاعتماد وتأمين انسياب استيراد أعلاف «بركات»",
  titleEn: "Strategic File for Accreditation and Securing Baraka Feed Import Flow",
  subtitleAr: "مذكرة وقائع ومطالب إجرائية وفنية موجهة حصرياً إلى أصحاب السعادة والفاضل المحترمين / أعضاء مجلس إدارة شركة مطاحن صلالة (ش.م.ع.ع)، لحسم التناقض المستندي لمنتجي البادي والناهي Broiler Starter & Finisher وتثبيت فترة السحب النظامية (7 أيام) المعتمدة لدى وزارة التغير المناخي والبيئة بدولة الإمارات لصالح العميل النهائي، أبوظبي.",
  subtitleEn: "Official evidentiary brief and procedural demands addressed exclusively to the Respected Members of the Board of Directors of Salalah Mills Company (SAOG), resolving document discrepancies for Broiler Starter & Finisher and confirming the statutory 7-day withdrawal period required by UAE MOCCAE for the Final Client in Abu Dhabi.",
  directedToAr: "أصحاب السعادة والفاضل المحترمين / أعضاء مجلس إدارة شركة مطاحن صلالة (ش.م.ع.ع)",
  directedToEn: "The Respected Members of the Board of Directors of Salalah Mills Company (SAOG)",
  directedSecondaryAr: "مذكرة استراتيجية وتحكيم فني وإجرائي مباشر أمام مجلس الإدارة الموقر",
  directedSecondaryEn: "Direct Strategic & Technical Arbitration before the Respected Board of Directors",
  authorAr: "شركة بن كليلة العامري للتجارة والاستثمار ش.م.م",
  authorEn: "Bin Kalilah Al Amri Trading & Investment Co. LLC",
  authorEntityAr: "المستثمر والوكيل التجاري المعتمد — صلالة، سلطنة عمان",
  authorEntityEn: "Authorized Commercial Agent & National Investor — Salalah, Sultanate of Oman",
  phone: "+96899088000",
  email: "bs@binkalilahalaamri.com",
  iban: "OM800270423011125310018",
  moccaeReqNo: "APH-12062026-3382929",
  totalPaidAmount: "18,640 ريال عماني",
  totalPaidAmountEn: "18,640 OMR (100% Prepaid Cash)",
};

export const KPI_CARDS = [
  {
    id: "annual_value",
    labelAr: "القيمة السنوية المستهدفة",
    labelEn: "Target Annual Value",
    valueAr: "1.87M - 2.46M",
    valueEn: "1.87M - 2.46M",
    unitAr: "ريال عماني (نقد مسبق 100%)",
    unitEn: "OMR (100% Advance Cash)",
    highlight: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  {
    id: "target_capacity",
    labelAr: "الثروة الداجنة المهددة",
    labelEn: "Poultry Stock at Risk",
    valueAr: "160,000",
    valueEn: "160,000",
    unitAr: "طائر لحم (مزارع سويحان)",
    unitEn: "Broiler Birds (Sweihan Farms)",
    highlight: "text-amber-400",
    border: "border-amber-500/30",
  },
  {
    id: "planned_volume",
    labelAr: "حجم التوريد المخطط",
    labelEn: "Planned Supply Volume",
    valueAr: "9,000 - 24,000",
    valueEn: "9,000 - 24,000",
    unitAr: "كيس شهرياً (حتى 500+ طن)",
    unitEn: "Bags / Month (up to 500+ MT)",
    highlight: "text-sky-400",
    border: "border-sky-500/30",
  },
  {
    id: "disruption_duration",
    labelAr: "مدة الحصار والتعطيل",
    labelEn: "Supply Blockade Duration",
    valueAr: "+5 أشهر (57 يوماً)",
    valueEn: "+5 Months (57-Day Freeze)",
    unitAr: "منذ واقعة 7 مايو 2026",
    unitEn: "Since May 7, 2026 Incident",
    highlight: "text-rose-400",
    border: "border-rose-500/30",
  },
];

export const DOSSIER_PARTIES: DossierParty[] = [
  {
    role: "الطرف الأول (المشتري / المصدّر الوطني المعتمد)",
    roleEn: "First Party (Accredited National Buyer & Exporter)",
    name: "شركة بن كليلة العامري للتجارة والاستثمار ش.م.م",
    nameEn: "Bin Kalilah Al Amri Trading & Investment Co. LLC",
    cr: "سجل تجاري: 1111041 • صلالة / سلطنة عُمان",
    crEn: "Commercial Registration: 1111041 • Salalah / Sultanate of Oman",
    location: "صلالة، محافظة ظفار، سلطنة عُمان",
    locationEn: "Salalah, Dhofar Governorate, Sultanate of Oman",
    authorizedPerson: "المفوض القانوني: الإدارة العامة للشركة (المستثمر والوكيل المعتمد)",
    authorizedPersonEn: "Authorized Signatory: General Directorate (Authorized Agent & Investor)",
    paymentTerms: "طبيعة السداد: سداد نقدي مسبق 100% (Zero Credit Exposure) عبر بنك مسقط",
    paymentTermsEn: "Payment Terms: 100% Upfront Wire Advance (Zero Credit Exposure)",
    additionalDetails: [
      "مؤسس ومطوّر سوق أعلاف «بركات» بمزارع سويحان والعين في دولة الإمارات",
      "تحمل كامل لمخاطر النقل والشحن واللوجستيات والتخليص الجمركي المباشر",
      "سداد كامل ومسبق لكافة الشحنات بإيصالات بنكية رسمية دون أي ذمم أو تسهيلات ائتمانية"
    ],
    additionalDetailsEn: [
      "Founder and market developer of «Baraka» feed across Sweihan & Al Ain farms in UAE",
      "Direct responsibility for logistics, border clearance, and fleet operations",
      "100% prepaid advance cash via verified bank receipts with zero credit exposure"
    ]
  },
  {
    role: "الطرف الثاني (الشركة المصنّعة)",
    roleEn: "Second Party (Manufacturing Company)",
    name: "شركة مطاحن صلالة / المطاحن العمانية (ش.م.ع.ع)",
    nameEn: "Salalah Mills / Oman Flour Mills Co. (SAOG)",
    cr: "سجل تجاري: 10/5841/0 • روي / مسقط وصلالة",
    crEn: "Commercial Registration: 10/5841/0 • Ruwi / Muscat & Salalah",
    location: "مسقط وصلالة، سلطنة عُمان",
    locationEn: "Muscat & Salalah, Sultanate of Oman",
    authorizedPerson: "إشراف: السادة أعضاء مجلس الإدارة المحترمون",
    authorizedPersonEn: "Supervised by: The Respected Members of the Board of Directors",
    paymentTerms: "مكتب الإدارة التنفيذية وإدارة المبيعات والتصدير وضبط الجودة",
    paymentTermsEn: "Executive Office, Export & Sales Administration, and QC Directorate",
    additionalDetails: [
      "المصنّع الوطني لمنتجات أعلاف الدواجن والماشية (Broiler Starter & Finisher)",
      "الجهة المسؤولة عن إصدار شهادات التحليل (COA) وإقرارات سلامة المنتج والبطاقة التعريفية",
      "الالتزام المؤسسي بمطابقة مواصفات التصدير لاشتراطات وزارة البيئة الإماراتية (MOCCAE)"
    ],
    additionalDetailsEn: [
      "National manufacturer of poultry feeds (Broiler Starter 23% & Broiler Finisher 19-20%)",
      "Entity responsible for accurate COA certificates, product datasheets, and batch safety declarations",
      "Institutional obligation to align export documentation with UAE MOCCAE sovereign regulations"
    ]
  },
  {
    role: "العميل النهائي والمستورد (الإمارات)",
    roleEn: "Final Client & Importer (UAE)",
    name: "العميل النهائي (دولة الإمارات)",
    nameEn: "The Final Client (United Arab Emirates)",
    cr: "أبوظبي، دولة الإمارات العربية المتحدة",
    crEn: "Abu Dhabi, United Arab Emirates",
    location: "إمارة أبوظبي، دولة الإمارات",
    locationEn: "Abu Dhabi, United Arab Emirates",
    authorizedPerson: "رخصة اقتصادية (أبوظبي): CN-1993845 • الرقم الضريبي (TRN): 100258623600003",
    authorizedPersonEn: "Economic License: CN-1993845 • Tax TRN: 100258623600003 (FTA Active)",
    paymentTerms: "شهادة لا ممانعة هيئة أبوظبي للزراعة والسلامة الغذائية ADAFSA: CA-6502023 (سارية حتى 09/10/2027)",
    paymentTermsEn: "ADAFSA NOC Certificate: CA-6502023 (Active through 09/10/2027)",
    additionalDetails: [
      "طاقة استيعابية تبلغ 160,000 طائر لاحم في حظائر العميل النهائي",
      "منشأة وطنية لإنتاج الدواجن معفية من إعادة البيع التجاري لخدمة الإنتاج المباشر",
      "تمسّك كامل بالشراكة المباشرة مع المستثمر العماني ورفض التدخلات الخارجية غير المرخصة"
    ],
    additionalDetailsEn: [
      "Operational capacity of 160,000 broiler birds in the final client poultry houses",
      "Direct domestic animal production facility exempt from commercial resale requirements",
      "Firm commitment to direct partnership with Omani investor and rejection of unauthorized brokers"
    ]
  },
  {
    role: "الطرف الرابع (الوسيط الخارجي الدخيل)",
    roleEn: "Fourth Party (External Intermediary Entity)",
    name: "الوسيط نوفل — شركة أثياف جلوبال (Athyaf Global FZC)",
    nameEn: "Broker Nawfal — Athyaf Global FZC",
    cr: "رخصة منطقة عجمان الحرة: 39245 • مساهمون أجانب 100%",
    crEn: "Ajman Free Zone License: 39245 • 100% Foreign Shareholders",
    location: "عجمان، دولة الإمارات العربية المتحدة (تنشط دون ترخيص داخل عُمان)",
    locationEn: "Ajman, UAE (Operating without domestic transport permit inside Oman)",
    authorizedPerson: "الوسيط التجاري الوافد: نوفل (مفوض إدارة شركة أثياف جلوبال)",
    authorizedPersonEn: "Expat Commercial Intermediary: Nawfal (Managing Director, Athyaf Global FZC)",
    paymentTerms: "مطالبات مالية غير مبررة: مطالبة 1,800 ر.ع، غرامات تأخير 50 ر.ع/يومياً، 700 ر.ع مدفوع مقدماً",
    paymentTermsEn: "Unjustified Demands: 1,800 OMR claim, 50 OMR/day delay fines, 700 OMR advance paid",
    additionalDetails: [
      "وسيط خارجي غير موظف بالشركة المصنعة ولا يتبع أي جهة حكومية",
      "ممارسة أنشطة نقل بري داخلي داخل سلطنة عُمان دون ترخيص من وزارة النقل والاتصالات وتقنية المعلومات",
      "محاولة فرض عمولات ومضاعفة أسعار النولون دون أي أساس تعاقدي أو سداد مالي من طرفه"
    ],
    additionalDetailsEn: [
      "External third-party broker, strictly not an employee of the milling company or any government entity",
      "Engaging in domestic road transport within Oman without licensing from the Ministry of Transport",
      "Attempting to impose inflated freight markups and unsubstantiated claims with zero financing on his part"
    ]
  }
];

export const DISCREPANCIES: DiscrepancyItem[] = [
  {
    id: "label_salinomycin",
    document: "بطاقة البيان الجديدة (ورقة المواصفات غير المختومة)",
    documentEn: "New Product Specification Sheet (Unstamped)",
    contentFromOmanFlourMills: "Salinomycin sodium 60g/ton + Withdrawal: zero days",
    contentFromOmanFlourMillsEn: "Salinomycin sodium 60g/ton + Withdrawal: zero days",
    uaeMoccaeCondition: "تحديد فترة سحب لا تقل عن 7 أيام صراحة على البطاقة للمنتج العلاجي",
    uaeMoccaeConditionEn: "Explicit mandatory withdrawal period of not less than 7 days on product labeling",
    technicalImpact: "مرفوضة رقابياً؛ ادعاء سحب صفري يناقض القانون البيطري الإماراتي والخليجي",
    technicalImpactEn: "Border rejection; zero-day claim directly contradicts UAE veterinary regulations",
    severity: "critical",
    detailedAnalysis: "مادة Salinomycin sodium هي مضاد كوكسيديا أيوني ومحفز نمو ذو اشتراطات بيطرية معروفة. تنص اشتراطات وزارة التغير المناخي والبيئة بدولة الإمارات على اشتراطات دقيقة للمنتجات العلاجية. إدراج عبارة 'zero days' في ورقة غير مختومة ومجهولة المصدر صادرة من جهة الوسيط يتعارض مع بطاقة الكيس التي تذكر 'Rotation Program'، مما يتسبب في تعسفات وتعطيلات إجرائية ومخاطر رفض تنظيمي واضحة وتضايقات غير مبررة للناقل المعتمد.",
    detailedAnalysisEn: "Salinomycin sodium has clear veterinary protocols. An unstamped conflicting sheet stating 'zero days' creates procedural confusion against physical packaging, causing unjustified logistical disruption by the foreign broker.",
    legalRisk: "تعطيلات إجرائية متعمدة بالمنافذ، إرباك بيانات الإفصاح الصحي، وافتعال تضايقات للشريك الوطني المعتمد.",
    legalRiskEn: "Procedural border delays, documentation confusion, and unjustified harassment against the accredited national partner.",
    recommendation: "إصدار خطاب رسمي معتمد ومختوم من المصنع يحدد المادة وفترة السحب (7 أيام فما فوق) أو شهادة بخلو الدفعة.",
    recommendationEn: "Issue an official stamped letter certifying the active ingredient and statutory withdrawal period (≥7 days)."
  },
  {
    id: "starter_coa",
    document: "شهادة تحليل البادي (COA) رقم 09/23062026",
    documentEn: "Starter Certificate of Analysis (COA) No. 09/23062026",
    contentFromOmanFlourMills: "خلو تام من ذكر مضادات الكوكسيديا (البروتين 22.49%)",
    contentFromOmanFlourMillsEn: "Total omission of anticoccidials (Crude Protein 22.49%)",
    uaeMoccaeCondition: "المطابقة الحرفية بين التحليل المخبري وبطاقة الشكارة والمواصفة المصرح بها",
    uaeMoccaeConditionEn: "Literal matching between laboratory COA analysis and bag labeling parameters",
    technicalImpact: "تناقض مستندي أدى لتجميد الشحنات 57 يوماً لعدم المطابقة",
    technicalImpactEn: "Document contradiction triggering a 57-day border hold due to spec mismatch",
    severity: "high",
    detailedAnalysis: "بطاقة الكيس تنص على احتواء العلف على إضافات ومضادات كوكسيديا وقائية، بينما شهادة التحليل المخبري الصادرة أغفلت تماماً الإشارة إلى المادة أو نسبتها. عند التدقيق المخبري الجمركي، يُعتبر هذا التباين دليلاً على عدم تطابق البيانات أو وجود غش تجاري، مما يتطلب سحب عينات وإجراء فحوصات مطولة تُتلف الأعلاف بفعل حرارة الصيف.",
    detailedAnalysisEn: "Physical packaging declares preventative anticoccidials, yet the lab certificate completely omits them. Customs inspectors treat this discrepancy as non-compliance or adulteration, causing extended holds.",
    legalRisk: "غرامات أرضيات ونقل إضافية وتلف المادة العلفية في المنافذ الحدودية.",
    legalRiskEn: "Demurrage charges, feed deterioration, and severe operational losses.",
    recommendation: "تضمين فحص مضاد الكوكسيديا وفترة السحب في شهادة COA الصادرة عن مختبر ضبط الجودة.",
    recommendationEn: "Harmonize COA lab parameters with product labels, explicitly specifying anticoccidials and withdrawal."
  },
  {
    id: "finisher_coa_outdated",
    document: "شهادة تحليل الناهي (COA) رقم 02/17042025",
    documentEn: "Finisher Certificate of Analysis (COA) No. 02/17042025",
    contentFromOmanFlourMills: "صادرة بتاريخ 16/04/2025 (تاريخ الإنتاج 16/08/2025) تسبق الشحنة بـ 13 شهراً",
    contentFromOmanFlourMillsEn: "Issued 16/04/2025 (Prod Date 16/08/2025) preceding dispatched batch by 13 months",
    uaeMoccaeCondition: "شهادة صادرة لتاريخ الدفعة والتشغيلة الفعلية المشحونة",
    uaeMoccaeConditionEn: "Certificate issued strictly for the exact dispatched production batch date",
    technicalImpact: "مستند قديم منتهي الصلاحية ولا يعبر عن التشغيلة الحالية المصدرة",
    technicalImpactEn: "Expired historical document failing to represent the active export batch",
    severity: "high",
    detailedAnalysis: "تقديم شهادة فحص تعود لعام سابق لتشغيلة تم إنتاجها وتصديرها في 2026. المنظومة الإلكترونية للوزارة والمنافذ الحدودية ترفض الوثائق المخبرية التي لا تتطابق مع تاريخ إنتاج الدفعة الفعلية المصحوبة بالشهادة البيطرية.",
    detailedAnalysisEn: "Submitting a 2025 lab certificate for a 2026 export run. Border electronic systems reject documents whose batch timestamps do not align with export veterinary certificates.",
    legalRisk: "بطلان الإقرار الجمركي واعتبار الشهادة غير صالحة قانونياً للشحنة.",
    legalRiskEn: "Invalidation of customs declaration and prolonged border clearance delay.",
    recommendation: "إصدار شهادة COA حديثة خاصة بالتشغيلة المشحونة فعلياً ومطابقة لرقم الدفعة.",
    recommendationEn: "Issue batch-specific COA matching the active production date and physical lot number."
  },
  {
    id: "layer_trap",
    document: "إقرار سلامة علف البياض (LAYER 16% AUTUMN SEASON) — «شهادة الفخ»",
    documentEn: "Layer 16% Safety Declaration — «The Trap Certificate»",
    contentFromOmanFlourMills: "إقرار سلامة منتج علف بياض LAYER 16% (مرسل مرتين: قبل 3 أشهر وفي 23 سبتمبر)",
    contentFromOmanFlourMillsEn: "Feed Safety Declaration for LAYER 16% (dispatched twice: 3 months prior & Sept 23)",
    uaeMoccaeCondition: "طلب اعتماد وحظر Broiler Starter & Finisher (أعلاف دجاج لاحم فقط)",
    uaeMoccaeConditionEn: "Application strictly covers Broiler Starter & Finisher (Broiler Meat Poultry)",
    technicalImpact: "«فخ مستندي صريح» لتوريط المستثمر في اعتماد صنف لم يستورده إطلاقاً!",
    technicalImpactEn: "«Explicit documentation trap» implicating the importer in an unpurchased SKU!",
    severity: "severe",
    detailedAnalysis: "قامت إدارة التصدير بالمصنع بإرسال إقرار سلامة لمنتج LAYER 16% مرتين متتاليتين. المستثمر الوطني لم يستورد كيلو جراماً واحداً من علف البياض طوال تعاملاته (مشترياته أكثر من 100,000 كغ كلها لاحم بادي وناهي). تقديم هذا المستند لوزارة التغير المناخي والبيئة الإماراتية يعتبر إقراراً قانونياً كاذباً بحصر الاستيراد على البياض، مما يؤدي تلقائياً لمصادرة شحنات اللاحم عند المنفذ وإلغاء الاعتماد نهائياً وشطب الملف!",
    detailedAnalysisEn: "The factory export office sent safety declarations for LAYER 16% twice. The investor never purchased a single kilo of layer feed (all 100,000+ kg orders are Broiler Starter & Finisher). Submitting this to UAE MOCCAE would constitute a false declaration, triggering immediate border confiscation of broiler consignments and revoking import licenses permanently!",
    legalRisk: "مصادرة فورية لشحنات اللاحم، إلغاء ملف الاستيراد برخصة العميل النهائي، ومساءلة نظامية جسيمة.",
    legalRiskEn: "Immediate border seizure, revocation of UAE import permits, and substantial damages.",
    recommendation: "شطب وإلغاء إقرار علف البياض رسمياً، وإصدار إقرارات سلامة حصرية للبادي والناهي Broiler Starter & Finisher.",
    recommendationEn: "Formally revoke the Layer declaration and replace it with Broiler Starter & Finisher declarations."
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "event_1",
    date: "7 مايو 2026",
    dateEn: "May 7, 2026",
    time: "10:00 صباحاً",
    timeEn: "10:00 AM",
    title: "إيداع أمر الشراء وتوفير الجاهزية النقدية الكاملة لسداد الشحنة الثالثة",
    titleEn: "Purchase Order Submission & Full Cash Ready for Shipment 3",
    description: "حضور المستثمر وجاهزية الشاحنات لتحميل الشحنة الثالثة، مع امتناع قسم التصدير بالمصنع عن إصدار الفاتورة أو تزويد المستثمر بالحساب البنكي، وتجاهل الاتصالات والرسائل طوال ساعات الدوام الرسمي.",
    descriptionEn: "Investor on-site with fleet positioned for Shipment 3. The Export Department failed to issue invoices or account details, stonewalling communications throughout official working hours.",
    badge: "جاهزية تامة ومماطلة",
    badgeEn: "100% Ready / Stonewalled",
    badgeType: "warning",
    evidenceType: "أمر الشراء BK-PO-230 + إيداعات بنكية",
    evidenceTypeEn: "Purchase Order BK-PO-230 + Bank Deposits",
    evidenceDetails: "جاهزية نقدية كاملة بقيمة الشحنة، وشاحنات مبردة جاهزة أمام رصيف التحميل بانتظار أذونات الصرف.",
    evidenceDetailsEn: "Full funds secured and trucks parked at loading bays awaiting routine dispatch permits."
  },
  {
    id: "event_2",
    date: "7 مايو 2026",
    dateEn: "May 7, 2026",
    time: "2:00 ظهراً",
    timeEn: "2:00 PM",
    title: "إفادة قسم الأمن بالمصنع وكشف حقيقة التواجد الميداني",
    titleEn: "Plant Security Department Confirmation & Physical Presence Verification",
    description: "أكد قسم الأمن وسجلات البوابة الإلكترونية تواجد المعنيين في قسم التصدير بمكتبهم بالمصنع خلال ساعات العمل، بينما تم الادعاء في اتصال 6:15 مساءً بـ 'التواجد في المستشفى' لتبرير الامتناع عن إصدار الفواتير.",
    descriptionEn: "The Security Department and biometric access records confirmed Export Department staff were physically present in their office, refuting the subsequent 6:15 PM claim of being at the 'hospital'.",
    badge: "دحض إداري موثق",
    badgeEn: "Refuted by Gate Records",
    badgeType: "danger",
    evidenceType: "سجلات الدخول الأمنية وإفادة قسم الأمن",
    evidenceTypeEn: "Security Access Logs & Security Department Records",
    evidenceDetails: "سجل الدخول الإلكتروني للبوابة يثبت بصمة وتواجد منسوبي القسم، مما يثبت التعمد الإداري في تجميد وتأخير الشحنة دون مبرر.",
    evidenceDetailsEn: "Biometric security records corroborate presence on site, proving deliberate procedural stoppage."
  },
  {
    id: "event_3",
    date: "7 مايو 2026",
    dateEn: "May 7, 2026",
    time: "في ذات التوقيت",
    timeEn: "Simultaneously",
    title: "التجاوز الأمني من قبل الوسيط نوفل وتصوير المنشأة بفيديو مخالف",
    titleEn: "Security Breach by Broker Nawfal & Unauthorized Filming Inside Plant",
    description: "تمكين الوسيط التجاري الوافد (نوفل / شركة أثياف جلوبال) من تحميل شاحنتين بأولوية غير مبررة والتجول بحرية داخل رصيف الشحن وتصوير مقطع فيديو ترويجي بموسيقى في حرم المصنع متحدياً لافتة 'ممنوع التصوير نهائياً'.",
    descriptionEn: "Broker Nawfal (Athyaf Global FZC) was granted preferential loading for 2 trucks, moving unrestricted across the loading apron and filming promotional footage defying strict 'No Photography' signs.",
    badge: "تجاوز أمني وتفضيل غير مشروع",
    badgeEn: "Breach & Illicit Preference",
    badgeType: "critical",
    evidenceType: "كاميرات المراقبة + مقطع الفيديو المحفوظ",
    evidenceTypeEn: "CCTV Surveillance + Preserved Video Footage",
    evidenceDetails: "توثيق تجول الوسيط نوفل غير المرخص في منطقة الشحن دون تصريح رسمي، واستخدام الوثائق للتواصل المباشر مع عميل المستثمر بأبوظبي.",
    evidenceDetailsEn: "Documented unrestricted presence of broker Nawfal in loading areas and unauthorized access to client supply lines."
  },
  {
    id: "event_4",
    date: "مايو - أكتوبر 2026",
    dateEn: "May - October 2026",
    time: "5 أشهر من التعطيل الممنهج",
    timeEn: "5 Months Blockade",
    title: "محاولة الاستحواذ على خط التوريد ومضاعفة أسعار النولون",
    titleEn: "Attempted Line Hijacking & Artificial Freight Extortion",
    description: "استغلال البيانات الجمركية وتجميد الأوراق الرسمية لإجبار العميل النهائي على الشراء عبر الوسيط الوافد نوفل بأسعار مضاعفة (رفع النولون من 172/280 ر.ع إلى 700 ر.ع ومطالبات غير مبررة بقيمة 1,800 ر.ع بالإضافة إلى فواتير ضريبية وهمية 1,650 درهم وغرامات 50 ر.ع يومياً).",
    descriptionEn: "Exploiting withheld export certificates to compel the UAE final client to buy through broker Nawfal at inflated freight rates (from 172/280 to 700 OMR, an unjustified 1,800 OMR claim, 1,650 AED phantom invoices, and 50 OMR/day delay fines).",
    badge: "احتكار واستحواذ غير مشروع",
    badgeEn: "Unlawful Monopolization",
    badgeType: "critical",
    evidenceType: "بيانات جمركية + إفادات خطية من العميل النهائي",
    evidenceTypeEn: "Customs Declarations + Affidavits from Final Client",
    evidenceDetails: "البيان الجمركي 20261501028987 (خطم الشكلة) واستغلاله لتجاوز المستثمر الوطني ومحاولة فرض عمولات غير قانونية ومطالبات 1,800 ر.ع.",
    evidenceDetailsEn: "Customs Dec 20261501028987 used to bypass accredited Omani investor and inflate logistical margins with an unjustified 1,800 OMR claim."
  }
];

export const SHIPMENT_RECORDS: ShipmentRecord[] = [
  {
    id: "ship_1",
    refNumber: "686568727",
    title: "الشحنة الأولى (500 كيس Broiler Starter)",
    titleEn: "First Consignment (500 Bags Broiler Starter)",
    amount: "4,580 ر.ع",
    amountEn: "4,580 OMR",
    quantity: "500 كيس (25 طن) + 280 ر.ع نقل",
    quantityEn: "500 Bags (25 MT) + 280 OMR Freight",
    paymentStatus: "مسددة 100% نقداً مسبقاً عبر بنك مسقط",
    paymentStatusEn: "100% Fully Settled in Advance (Bank Muscat)",
    settlementDate: "27 أبريل 2026",
    settlementDateEn: "April 27, 2026",
    customsStatus: "بيان جمركي 20261501028987 — تم التسليم",
    customsStatusEn: "Customs Dec 20261501028987 — Delivered",
    notes: "سداد مالي مسبق وتصريح عبور شاحنة 243/2026 (الشاحنة 3512).",
    notesEn: "Advance wire transfer; transit permit 243/2026 (Truck 3512)."
  },
  {
    id: "ship_2",
    refNumber: "689375818",
    title: "الشحنة الثانية (500 كيس Broiler Finisher)",
    titleEn: "Second Consignment (500 Bags Broiler Finisher)",
    amount: "4,760 ر.ع",
    amountEn: "4,760 OMR",
    quantity: "500 كيس ناهي (25 طن)",
    quantityEn: "500 Bags Finisher (25 MT)",
    paymentStatus: "مسددة 100% نقداً مسبقاً عبر بنك مسقط",
    paymentStatusEn: "100% Fully Settled in Advance (Bank Muscat)",
    settlementDate: "5 مايو 2026",
    settlementDateEn: "May 5, 2026",
    customsStatus: "فاتورة مصنع OFM/243/2026 — تم التسليم",
    customsStatusEn: "Factory Invoice OFM/243/2026 — Delivered",
    notes: "سداد نقدي مسبق بالكامل، وتم توريدها إلى العميل النهائي بنجاح.",
    notesEn: "100% upfront cash cleared; successfully received by the final client in UAE."
  },
  {
    id: "ship_3",
    refNumber: "691776712",
    title: "الشحنة الثالثة (1,000 كيس: 500 بادي + 500 ناهي)",
    titleEn: "Third Consignment (1,000 Bags: 500 Starter + 500 Finisher)",
    amount: "9,300 ر.ع",
    amountEn: "9,300 OMR",
    quantity: "1,000 كيس (50 طن متري)",
    quantityEn: "1,000 Bags (50 Metric Tons)",
    paymentStatus: "مسددة 100% نقداً مسبقاً عبر بنك مسقط",
    paymentStatusEn: "100% Fully Settled in Advance (Bank Muscat)",
    settlementDate: "13 مايو 2026",
    settlementDateEn: "May 13, 2026",
    customsStatus: "فواتير OFM/270/2026 و OFM/271/2026 — معلقة إجرائياً بالمصنع",
    customsStatusEn: "Invoices OFM/270/2026 & OFM/271/2026 — Held procedurally",
    notes: "المبلغ مودع نقداً بحساب المطاحن الرسمي (IBAN: OM800270423011125310018)، وتصريح شاحنة 270/2026 (الشاحنة 6635).",
    notesEn: "Funds deposited in corporate account; stalled solely by export documentation defects."
  }
];

export const EXECUTIVE_DEMANDS: ExecutiveDemand[] = [
  {
    id: 1,
    numberArabic: "١",
    title: "خطاب رسمي معتمد ومختوم بتثبيت فترة السحب (7 أيام)",
    titleEn: "Official Authenticated Letter Specifying 7-Day Withdrawal",
    description: "إصدار خطاب رسمي من المطاحن يحدد بوضوح مادة مضاد الكوكسيديا (Salinomycin sodium 60g/ton) وتثبيت فترة السحب النظامية لا تقل عن 7 أيام صراحة وفق اشتراط وزارة التغير المناخي والبيئة الإماراتية، أو إفادة رسمية بخلو المنتج التام إن كان صفراً.",
    descriptionEn: "Issue an official stamped letter specifying the active anticoccidial agent (Salinomycin sodium 60g/ton) and certifying a mandatory statutory withdrawal period of ≥7 days per UAE MOCCAE standards, or official certification of total absence.",
    department: "إدارة التصدير والمختبر المركزي",
    departmentEn: "Export Office & Central Laboratory"
  },
  {
    id: 2,
    numberArabic: "٢",
    title: "إقرار سلامة مطابق للبادي والناهي وشطب إقرار علف البياض نهائياً",
    titleEn: "Compliant Safety Declarations & Revocation of Layer Declaration",
    description: "إصدار إقرار سلامة حديث مؤرخ باسم Broiler Starter وBroiler Finisher، واستبعاد وشطب إقرار 16% LAYER AUTUMN SEASON نهائياً وعدم احتسابه ضمن وثائق الشحنة لإنهاء أي لبس رقابي مفتعل وتعطيل إجرائي.",
    descriptionEn: "Issue batch-matching safety declarations exclusively for Broiler Starter & Broiler Finisher, and permanently void and strike out the irrelevant 16% LAYER declaration to eliminate procedural disruption.",
    department: "فريق سلامة الغذاء وضبط الجودة",
    departmentEn: "Food Safety & QC Department"
  },
  {
    id: 3,
    numberArabic: "٣",
    title: "شهادات تحليل COA حديثة ومطابقة للدفعات المشحونة فعلياً",
    titleEn: "Updated Matching Lab COAs for Dispatched Batches",
    description: "إصدار شهادات فحص مخبري حديثة للتشغيلات المشحونة فعلياً برقم التشغيلة وتاريخ الإنتاج ومطابقة لبيانات بطاقة البيان المطبوعة على الأكياس لضمان انسيابية الإفصاح المباشر للشريك الوطني.",
    descriptionEn: "Furnish batch-specific Certificate of Analysis matching production dates, lot numbers, and physical bag tags to guarantee direct clearance for the accredited national partner.",
    department: "المختبر المركزي وضبط الجودة",
    departmentEn: "Central Laboratory & QA"
  },
  {
    id: 4,
    numberArabic: "٤",
    title: "شهادة بيطرية مستوفية وشهادة GMP المعتمدة حكومياً",
    titleEn: "Complete Veterinary Certificate & Government GMP Accreditation",
    description: "إصدار شهادة بيطرية مستوفية البيانات لكل صنف (تشمل مكان التحميل ورقم الحاوية والختم)، وتوفير شهادة GMP المعتمدة أو إفادة رسمية بأن GMP+ هي الشهادة المتاحة للمصنع لإدراجها في بوابة MOCCAE.",
    descriptionEn: "Issue complete veterinary certificates for Starter & Finisher (with container and seal numbers) and provide GMP documentation required by UAE MOCCAE portal.",
    department: "قسم التوثيق والتصدير والرقابة البيطرية",
    departmentEn: "Export Documentation & Veterinary Inspection"
  },
  {
    id: 5,
    numberArabic: "٥",
    title: "حماية الشراكة الاستراتيجية ووقف التدخلات غير المرخصة",
    titleEn: "Protecting Strategic Partnership & Ceasing Unlicensed Interference",
    description: "اعتماد شركة بن كليلة العامري للتجارة والاستثمار ش.م.م وكيلاً ومورداً معتمداً وحصرياً لمزارع سويحان، وحظر أي وساطات دخيلة غير مرخصة في النقل الداخلي (كالوسيط نوفل / أثياف جلوبال)، وتعديل الفواتير بنظام لومن (Lumen) باسم المستورد المباشر لتمكينه من استرداد ضريبة القيمة المضافة 5%.",
    descriptionEn: "Reaffirm Bin Kalilah Al Amri as the accredited national supplier for Sweihan farms, terminate unlicensed middleman interventions (such as broker Nawfal / Athyaf Global), and align Lumen invoices under direct importer to preserve 5% VAT recovery.",
    department: "مجلس الإدارة والإدارة التنفيذية العليا",
    departmentEn: "Board of Directors & Senior Executive Board"
  }
];

export const WHATSAPP_MEMO_BOARD = `السلام عليكم ورحمة الله وبركاته،
إلى: أصحاب السعادة والفاضل المحترمين / أعضاء مجلس إدارة شركة مطاحن صلالة (ش.م.ع.ع)،
تحية طيبة وبعد،،
أشكركم جزيلاً على الاهتمام وحرصكم المعهود على العدالة المؤسسية وحماية سمعة الصناعة الوطنية العمانية.
أود التأكيد لسعادتكم بأنه لا توجد أي مبالغ مالية متأخرة أو ذمم معلقة على الإطلاق، حيث تم سداد إجمالي 18,640 ريال عماني نقداً مقدماً 100% بحساب الشركة الرسمي قبل التحميل.
القضية إجرائية ومستندية بحتة متوقفة منذ مايو 2026 على التالي:
(1) إصدار خطاب رسمي مختوم يحدد بوضوح مادة مضاد الكوكسيديا وفترة السحب النظامية (لا تقل عن 7 أيام) وفق اشتراط وزارة التغير المناخي والبيئة بدولة الإمارات لمزارع سويحان بأبوظبي.
(2) إقرارات سلامة وشهادات تحليل COA حديثة لمنتجي البادي والناهي (Broiler Starter & Finisher) وإلغاء إقرار علف البياض (Layer 16%) نهائياً لعدم صلته بطلبياتنا.
(3) حماية خط التوريد الوطني والمستثمر العماني من التدخلات غير المرخصة للوسيط الخارجي نوفل (شركة أثياف جلوبال FZC).
أرجو التكرم بالتوجيه الكريم بحسم هذه المتطلبات خلال أيام العمل المعتادة لتأمين انسياب التصدير.
شاكراً لكم دوام العون والإنصاف،
شركة بن كليلة العامري للتجارة والاستثمار ش.م.م (المستثمر والوكيل التجاري المعتمد)
هاتف: 99088000 968+ | bs@binkalilahalaamri.com`;

export const WHATSAPP_MEMO_BOARD_EN = `Peace be upon you and God's mercy and blessings,
To: The Respected Members of the Board of Directors of Salalah Mills Company (SAOG),
Warm greetings and highest respect,
We sincerely thank you for your institutional justice and dedication to protecting Omani national industry.
We affirm that there are zero outstanding debts or financial liabilities; all consignments totaling 18,640 OMR were 100% fully prepaid in advance cash to the corporate bank account.
The matter is purely procedural and documentation-driven, stalled since May 2026 solely awaiting:
(1) Official stamped letter specifying anticoccidials and mandatory statutory withdrawal period (≥7 days) per UAE MOCCAE standards for Sweihan farms.
(2) Batch-matching safety declarations and updated COAs for Broiler Starter & Finisher, with permanent voiding of the irrelevant Layer 16% declaration.
(3) Protecting national investor supply rights against unauthorized middleman intrusions by foreign broker Nawfal (Athyaf Global FZC).
We kindly request your directives to finalize these documents within standard business days.
With highest appreciation and respect,
Bin Kalilah Al Amri Trading & Investment Co. LLC (Authorized Investor & Commercial Agent)
Phone: +96899088000 | bs@binkalilahalaamri.com`;

export const ESCALATION_STEPS = [
  {
    date: "07/09/2026 (3:33 م)",
    dateEn: "07/09/2026 (3:33 PM)",
    textAr: "اجتماع مقدم الطلب مع الإدارة التنفيذية في مسقط، وإحالة الموضوع إلى مكتب الإدارة التنفيذية، والذي بدوره تجاهل اتصالات متكررة ورسائل مفصلة.",
    textEn: "Meeting with Executive Management in Muscat; referred to the Executive Office, which subsequently ignored repeated follow-up calls and detailed briefs."
  },
  {
    date: "28 & 30 سبتمبر 2026",
    dateEn: "28 & 30 September 2026",
    textAr: "تصعيد الملف إلى الشؤون القانونية للشركة، وتجاوبها المشكور بالاتصال السريع بقسم التصدير بالمصنع وبدء إجراءات تدارك الموقف.",
    textEn: "Escalation to Corporate Legal Affairs and their prompt commendable outreach to the factory Export Department to rectify the situation."
  },
  {
    date: "01/10/2026",
    dateEn: "01/10/2026",
    textAr: "إرسال إقرار سلامة Finisher من إدارة ضبط الجودة، مع استمرار التحفظ على إدراج شرط فترة السحب (7 أيام) المعتمدة لدى وزارة البيئة الإماراتية.",
    textEn: "Transmission of Finisher safety declaration from QC Dept, while continuing to withhold the statutory 7-day withdrawal certification required by UAE MOCCAE."
  },
  {
    date: "05/10/2026",
    dateEn: "05/10/2026",
    textAr: "إفادة إدارة المبيعات بالمصنع الوطني للأعلاف بأن متطلبات التصدير إلى قطر ودول الخليج تدار نظامياً خلال يوم واحد فقط!",
    textEn: "Confirmation from National Feed Factory Sales Department that identical export certifications for Qatar & GCC are completed in exactly one business day!"
  }
];
