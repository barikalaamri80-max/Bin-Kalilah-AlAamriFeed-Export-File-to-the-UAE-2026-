import React, { useState } from 'react';
import { DOSSIER_META, WHATSAPP_MEMO_BOARD, WHATSAPP_MEMO_BOARD_EN, SHIPMENT_RECORDS } from '../data/dossierData';
import { 
  FileText, 
  Copy, 
  Check, 
  Send, 
  ShieldCheck, 
  AlertCircle, 
  Scale, 
  Calendar, 
  CreditCard, 
  Building2, 
  Printer, 
  ExternalLink,
  Phone,
  Mail,
  Award
} from 'lucide-react';

interface OfficialLegalReportViewProps {
  isEnglish: boolean;
  onPrint: () => void;
}

export const OfficialLegalReportView: React.FC<OfficialLegalReportViewProps> = ({
  isEnglish,
  onPrint,
}) => {
  const [copied, setCopied] = useState(false);
  const memoText = isEnglish ? WHATSAPP_MEMO_BOARD_EN : WHATSAPP_MEMO_BOARD;

  const handleCopy = () => {
    navigator.clipboard.writeText(memoText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(memoText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8">
      
      {/* Official Dossier Letterhead (Luminous White, Red & Gold) */}
      <div className="bg-white/95 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-700 via-amber-400 to-red-800" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 pb-6 mb-6">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-red-900 font-mono text-xs font-black bg-red-50 px-2.5 py-1 rounded-lg border border-red-200">
                {DOSSIER_META.ref}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-red-950 mt-2 leading-tight">
                {isEnglish 
                  ? "Official Evidentiary Audit Report — Baraka Feed Export Case to UAE" 
                  : "تقرير رسمي موثق ومحدث — قضية تصدير أعلاف «بركات» إلى دولة الإمارات العربية المتحدة"}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                {isEnglish 
                  ? "Formal Forensic & Technical Submission Addressed Exclusively to the Board of Directors of Salalah Mills SAOG" 
                  : "مذكرة توثيقية فنية وقانونية مرفوعة حصرياً إلى السادة أعضاء مجلس إدارة شركة مطاحن صلالة (ش.م.ع.ع) المحترمين"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBA73] to-[#B89243] hover:from-[#B89243] hover:to-[#C5A059] text-slate-950 font-black text-xs shadow-md transition active:scale-95"
            >
              <Printer className="w-4 h-4 text-slate-950" />
              <span>{isEnglish ? "Print PDF" : "طباعة المحضر"}</span>
            </button>
          </div>
        </div>

        {/* Legal Entities Header Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              {isEnglish ? "Issuing Authority:" : "الجهة المحررة للملف:"}
            </div>
            <div className="text-sm font-black text-red-950 mt-1">
              {isEnglish ? DOSSIER_META.authorEntityEn : DOSSIER_META.authorEntityAr}
            </div>
            <div className="text-xs text-amber-800 font-bold mt-1">
              {isEnglish ? `CR: ${DOSSIER_META.commercialReg}` : `سجل تجاري: ${DOSSIER_META.commercialReg}`}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
            <div className="text-[11px] font-bold text-red-800 uppercase tracking-wide">
              {isEnglish ? "Addressed Exclusively To:" : "الموجه إليه حصرياً:"}
            </div>
            <div className="text-sm font-black text-red-950 mt-1">
              {isEnglish ? DOSSIER_META.directedToEn : DOSSIER_META.directedToAr}
            </div>
            <div className="text-xs text-slate-600 font-bold mt-1">
              {isEnglish ? "Salalah Mills SAOG - Board Audit" : "شركة مطاحن صلالة (ش.م.ع.ع)"}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300">
            <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wide">
              {isEnglish ? "Arbitration Date & Scope:" : "تاريخ التوثيق والنطاق:"}
            </div>
            <div className="text-sm font-black text-slate-900 mt-1">
              {DOSSIER_META.dateArabic}
            </div>
            <div className="text-xs text-slate-600 font-mono mt-1">
              {DOSSIER_META.dateEnglish}
            </div>
          </div>
        </div>

        {/* Executive Summary Statement */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border-2 border-red-300 text-slate-800 text-xs sm:text-sm leading-relaxed space-y-3 shadow-sm">
          <p className="font-semibold">
            {isEnglish 
              ? "This dossier sets forth the full evidential record regarding the unwarranted disruption of Baraka Poultry Feed exports to the United Arab Emirates. Bin Kalilah Al Amri Company LLC confirms that all consignments were settled 100% in advance with zero credit debt (total 18,640 OMR wire prepaid). The dossier proves procedural disruptions by the factory Export Department, conflicting documentation, and unauthorized intrusions by external broker Nawfal (Athyaf Global FZC)."
              : "تضع شركة بن كليلة العامري للتجارة والاستثمار ش.م.م بين أيدي أصحاب السعادة والفاضل أعضاء مجلس إدارة شركة مطاحن صلالة المحترمين هذا التقرير التوثيقي المتكامل، الذي يبين براءة الذمة المالية الكاملة للشركة وسداد كافة الشحنات نقداً مقدماً بنسبة 100% (بإجمالي 18,640 ر.ع دون أي ذمم أو مبالغ محتجزة إطلاقاً)، ويوثق التعطيلات الإجرائية الصريحة من قسم التصدير بالمصنع في إصدار شهادات غير مطابقة، مع إفساح المجال للوسيط الخارجي نوفل (شركة أثياف جلوبال FZC) لممارسة ضغوط ومطالبات غير مبررة."}
          </p>
          <p className="font-semibold text-red-950">
            {isEnglish 
              ? "Core demand: Issuance of the officially stamped manufacturer letter certifying product safety and a 7-day withdrawal period for Broiler feed to satisfy UAE MOCCAE import regulations."
              : "المطلب الإجرائي الحاسم: إصدار الخطاب الرسمي المعتمد والمختوم من المصنع الذي يثبت سلامة أعلاف البادي والناهي اللاحم وتحديد فترة سحب 7 أيام مطابقة لاشتراطات وزارة التغير المناخي والبيئة بدولة الإمارات."}
          </p>
        </div>

        {/* Official Closing & Certified Stamp Section */}
        <div className="mt-6 pt-6 border-t-2 border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-right">
            <div className="text-xs text-slate-500 font-bold">
              {isEnglish ? "Official Submission & Certification:" : "الاعتماد والتوقيع الرسمي:"}
            </div>
            <div className="text-sm font-black text-red-950">
              {isEnglish 
                ? "Bin Kalilah Al Amri Trade & Investment LLC" 
                : "شركة بن كليلة العامري للتجارة والاستثمار ش.م.م"}
            </div>
            <div className="text-xs font-bold text-amber-800">
              {isEnglish ? "Accredited National Strategic Partner & Exporter" : "المستثمر والعميل الوطني والشريك التصديري المعتمد"}
            </div>
            <div className="text-[11px] text-slate-600 font-mono">
              {isEnglish ? "CR: 1111041 | Salalah, Sultanate of Oman" : "سجل تجاري: 1111041 | صلالة - سلطنة عُمان"}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-300 text-center">
            <span className="text-xs font-black text-red-950">
              {isEnglish ? "Certified Official Submission" : "مذكرة رسمية معتمدة وموثقة"}
            </span>
            <span className="text-[10px] font-mono font-bold text-amber-900 mt-0.5">
              REF: {DOSSIER_META.ref} • CR: {DOSSIER_META.commercialReg}
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp Official Message Broadcast Card (Luminous White, Red & Gold) */}
      <div className="bg-white/95 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center font-bold">
              <Send className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-red-950">
                {isEnglish ? "Official Certified WhatsApp Message Text" : "نص الرسالة المعتمدة للإرسال الفوري لمجلس الإدارة"}
              </h2>
              <p className="text-xs text-slate-600">
                {isEnglish ? "Ready formatted text ready to copy or send directly" : "نص مهيأ وجاهز للإرسال المباشر أو النسخ"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 shadow-sm transition active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
              <span>{copied ? (isEnglish ? "Copied!" : "تم النسخ!") : (isEnglish ? "Copy Text" : "نسخ النص")}</span>
            </button>

            <button
              onClick={handleOpenWhatsApp}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs shadow-md transition active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isEnglish ? "Open in WhatsApp" : "فتح في تطبيق واتساب"}</span>
            </button>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border-2 border-amber-300 text-xs text-slate-900 font-mono leading-relaxed whitespace-pre-line shadow-inner max-h-96 overflow-y-auto">
          {memoText}
        </div>
      </div>

    </div>
  );
};
