import React, { useState } from 'react';
import { 
  EXECUTIVE_DEMANDS, 
  WHATSAPP_MEMO_BOARD, 
  WHATSAPP_MEMO_BOARD_EN, 
  DOSSIER_META 
} from '../data/dossierData';
import { 
  FileCheck2, 
  Copy, 
  Check, 
  MessageSquare, 
  Send, 
  ShieldAlert, 
  Calendar, 
  Phone, 
  Mail, 
  Award,
  Sparkles,
  Building2
} from 'lucide-react';

interface SectionDemandsProps {
  isEnglish: boolean;
}

export const SectionDemands: React.FC<SectionDemandsProps> = ({ isEnglish }) => {
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
    <section className="py-8 px-4 sm:px-6 bg-white/80 sm:bg-white/85 backdrop-blur-xl dossier-card border-b-2 border-amber-300/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-700 to-amber-500 flex items-center justify-center text-white font-black text-sm shadow-md">
              ٥
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-red-950">
                {isEnglish 
                  ? "Fifth: Final Executive Demands Addressed to the Board of Directors" 
                  : "خامساً: المطالب التنفيذية الختامية الموجهة للسادة أعضاء مجلس الإدارة المحترمين"}
              </h2>
            </div>
          </div>

          <div className="px-3.5 py-1 rounded-full bg-red-50 border border-red-300 text-red-900 text-xs font-mono font-bold tracking-wider">
            Executive Arbitration Resolution
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 mb-6 font-semibold">
          {isEnglish 
            ? "Constructive solutions and procedural demands to safeguard the strategic Baraka feed export line to the UAE and enforce good governance." 
            : "الحلول الإجرائية العاجلة لإنهاء التعطيل المفتعل وحماية خط الإمداد الاستراتيجي لدولة الإمارات وتكريس الحوكمة الرشيدة."}
        </p>

        {/* Demands Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {EXECUTIVE_DEMANDS.map((demand, idx) => (
            <div
              key={demand.id}
              className="p-4 sm:p-5 rounded-2xl bg-white/95 border-2 border-amber-300/70 hover:border-red-400 transition-all shadow-md group flex items-start gap-3.5"
            >
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-red-700 to-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-sm">
                {idx + 1}
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-black text-red-950 mb-1 leading-snug group-hover:text-red-700 transition-colors">
                  {isEnglish ? demand.titleEn : demand.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {isEnglish ? demand.descriptionEn : demand.description}
                </p>
                <div className="mt-2 text-[11px] font-mono font-bold text-red-800 bg-red-50 inline-block px-2 py-0.5 rounded border border-red-200">
                  {isEnglish ? `Department: ${demand.departmentEn}` : `الجهة الإجرائية: ${demand.department}`}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp & Direct Arbitration Memo Box (Luminous White, Red & Gold) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border-2 border-red-300 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div>
                <span className="text-[11px] font-mono text-red-900 font-bold bg-white px-2 py-0.5 rounded border border-red-200">
                  REF: {DOSSIER_META.ref}
                </span>
                <h3 className="text-base sm:text-lg font-black text-red-950 mt-1">
                  {isEnglish ? "Official Memorandum for the Board of Directors" : "نص المذكرة الرسمية الموجهة لمجلس إدارة مطاحن صلالة"}
                </h3>
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
                <span>{isEnglish ? "Send via WhatsApp" : "إرسال عبر الواتساب"}</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-amber-300 text-xs text-slate-800 font-mono leading-relaxed whitespace-pre-line shadow-inner max-h-64 overflow-y-auto">
            {memoText}
          </div>

          <div className="mt-4 pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <div>
              <span className="font-bold text-slate-700">{isEnglish ? "Official Sender: " : "المحرر الرسمي: "}</span>
              <span className="text-red-950 font-black">{isEnglish ? DOSSIER_META.authorEntityEn : DOSSIER_META.authorEntityAr}</span>
            </div>
            <div className="text-amber-800 font-bold">
              {isEnglish ? DOSSIER_META.directedToEn : DOSSIER_META.directedToAr}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
