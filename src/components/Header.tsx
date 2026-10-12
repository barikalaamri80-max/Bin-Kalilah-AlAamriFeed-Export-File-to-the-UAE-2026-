import React from 'react';
import { 
  Languages, 
  FileText, 
  Search, 
  Printer, 
  Layers, 
  FileCheck2,
  Sparkles,
  Flag,
  Camera,
  Image as ImageIcon,
  Palette
} from 'lucide-react';
import { DOSSIER_META } from '../data/dossierData';

export type TemplateStyle = 'royal' | 'crystal' | 'diplomatic';

interface HeaderProps {
  isEnglish: boolean;
  setIsEnglish: (val: boolean) => void;
  viewMode: 'deck12' | 'full' | 'report';
  setViewMode: (mode: 'deck12' | 'full' | 'report') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onPrint: () => void;
  bgOpacity: number;
  setBgOpacity: React.Dispatch<React.SetStateAction<number>>;
  templateStyle: TemplateStyle;
  setTemplateStyle: (style: TemplateStyle) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isEnglish,
  setIsEnglish,
  viewMode,
  setViewMode,
  searchQuery,
  setSearchQuery,
  onPrint,
  bgOpacity,
  setBgOpacity,
  templateStyle,
  setTemplateStyle,
}) => {
  return (
    <>
      {/* Accessible Jump Link for Screen Readers & Keyboard Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-slate-950 focus:font-extrabold focus:rounded-lg focus:shadow-2xl focus:ring-2 focus:ring-white transition"
      >
        {isEnglish ? "Skip to main content" : "الانتقال إلى المحتوى الرئيسي"}
      </a>

      {/* Top Remix & Sovereign Arbitration Action Bar (Luminous White, Royal Red & Imperial Gold) */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-amber-900 border-b-2 border-amber-400 text-white py-2 px-3 sm:px-6 text-xs flex flex-wrap items-center justify-between gap-2.5 no-print z-50 relative shadow-md">
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Main Remix Title */}
          <span className="font-black text-amber-200 flex items-center gap-1.5 drop-shadow">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>
              {isEnglish 
                ? "Remixed: Bin Kalilah Forensic Legal Dossier — Salalah Mills Board Arbitration" 
                : "ريميكس بن كليلة الملف القانوني الشرعي — تحكيم مجلس إدارة مطاحن صلالة"}
            </span>
          </span>

          <div className="flex items-center gap-1.5">
            {/* Spark & Twin Badges */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 text-amber-200 border border-amber-300/50 text-[10px] font-bold shadow-sm backdrop-blur-sm">
              <span className="font-mono">spark</span>
              <span className="text-amber-300">•</span>
              <span>تَوأَم</span>
            </span>

            {/* Checkpoint Badge */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-white border border-amber-300/40 text-[10px] font-mono shadow-sm">
              <Flag className="w-2.5 h-2.5 text-amber-300" />
              <span>Checkpoint • نقطة تفتيش</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-[11px]">
          {/* Template Style Selector */}
          <div className="hidden lg:flex items-center bg-black/25 rounded-lg p-0.5 border border-amber-300/40">
            <button
              onClick={() => setTemplateStyle('royal')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition flex items-center gap-1 ${
                templateStyle === 'royal' 
                  ? 'bg-amber-400 text-slate-950 shadow' 
                  : 'text-amber-100 hover:text-white'
              }`}
              title="القالب الرئاسي الملكي: أبيض وأحمر وذهبي"
            >
              <Palette className="w-2.5 h-2.5" />
              <span>{isEnglish ? "Royal Template" : "القالب الملكي"}</span>
            </button>
            <button
              onClick={() => setTemplateStyle('crystal')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition flex items-center gap-1 ${
                templateStyle === 'crystal' 
                  ? 'bg-amber-400 text-slate-950 shadow' 
                  : 'text-amber-100 hover:text-white'
              }`}
              title="قالب الزجاج الشفاف المعكوس"
            >
              <span>{isEnglish ? "Crystal Mirror" : "زجاجي معكوس"}</span>
            </button>
            <button
              onClick={() => setTemplateStyle('diplomatic')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition flex items-center gap-1 ${
                templateStyle === 'diplomatic' 
                  ? 'bg-amber-400 text-slate-950 shadow' 
                  : 'text-amber-100 hover:text-white'
              }`}
              title="قالب الوثيقة الدبلوماسية"
            >
              <span>{isEnglish ? "Diplomatic" : "دبلوماسي"}</span>
            </button>
          </div>

          {/* Quick Background Transparency Toggle */}
          <button
            onClick={() => setBgOpacity((prev) => (prev <= 0.25 ? 0.7 : prev <= 0.5 ? 0.2 : 0.45))}
            className="inline-flex items-center gap-1 bg-white/15 hover:bg-white/25 text-white px-2 py-0.5 rounded text-[11px] border border-white/30 transition shadow-sm"
            title={isEnglish ? "Adjust Background Photo Opacity" : "تعديل شفافية خلفية الصور المعكوسة"}
          >
            <ImageIcon className="w-3 h-3 text-amber-300" />
            <span className="font-semibold">
              {isEnglish 
                ? `Glass Reflection: ${Math.round((1 - bgOpacity) * 100)}%` 
                : `انعكاس الزجاج: ${Math.round((1 - bgOpacity) * 100)}%`}
            </span>
          </button>

          <span className="hidden sm:inline font-mono text-amber-200 bg-black/20 px-2 py-0.5 rounded border border-amber-400/30 font-bold">
            REF: BKA/UAE-EXPORT/2026/10
          </span>

          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#C5A059] via-[#DFBA73] to-[#B89243] hover:from-[#B89243] hover:to-[#C5A059] text-slate-950 font-black px-3.5 py-1 rounded-md text-xs transition shadow-md active:scale-95"
          >
            <Printer className="w-3.5 h-3.5 text-slate-950" />
            <span>{isEnglish ? "Print / Save PDF" : "طباعة / حفظ PDF"}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation & View Selector Header (Luminous White Glass with Gold Trim) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-amber-300/60 px-3 sm:px-6 py-2.5 transition-all shadow-md no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Right Zone: Board Destination & Reference */}
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="flex items-center gap-2.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono tracking-wider text-red-900 font-extrabold bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    REF: {DOSSIER_META.ref}
                  </span>
                  <span className="text-[11px] text-slate-600 hidden sm:inline font-medium">
                    {isEnglish ? `CR: ${DOSSIER_META.commercialReg}` : `س.ت: ${DOSSIER_META.commercialReg}`}
                  </span>
                </div>
                {/* Formal Address directly to Board of Directors */}
                <div className="text-xs sm:text-sm font-black text-red-950 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <span className="truncate max-w-[280px] sm:max-w-md">
                    {isEnglish ? DOSSIER_META.directedToEn : DOSSIER_META.directedToAr}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile language button */}
            <button
              onClick={() => setIsEnglish(!isEnglish)}
              className="md:hidden p-1.5 rounded-lg bg-red-50 border border-red-200 text-red-900 hover:bg-red-100 text-xs font-bold"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
            </button>
          </div>

          {/* Center & Left Zone: Mode Switcher, Search, Language */}
          <div className="flex items-center justify-between md:justify-end gap-2 sm:gap-3 flex-wrap">
            
            {/* View Mode Selector Tabs (White, Red & Gold) */}
            <div className="flex items-center bg-slate-100/90 border border-slate-300 rounded-xl p-1 text-xs shadow-inner">
              <button
                onClick={() => setViewMode('deck12')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                  viewMode === 'deck12'
                    ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-md'
                    : 'text-slate-700 hover:text-red-900 hover:bg-white/60'
                }`}
                title={isEnglish ? "12-Slide Strategic Presentation Deck" : "عرض الشرائح التنفيذية الـ 12 المعتمدة"}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isEnglish ? "12 Slides Deck" : "العرض التنفيذي (12)"}</span>
              </button>

              <button
                onClick={() => setViewMode('full')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                  viewMode === 'full'
                    ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-md'
                    : 'text-slate-700 hover:text-red-900 hover:bg-white/60'
                }`}
                title={isEnglish ? "Comprehensive Evidentiary Audit Dossier" : "الملف التوثيقي التحليلي الشامل"}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isEnglish ? "Full Dossier" : "الملف الشامل"}</span>
              </button>

              <button
                onClick={() => setViewMode('report')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                  viewMode === 'report'
                    ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-md'
                    : 'text-slate-700 hover:text-red-900 hover:bg-white/60'
                }`}
                title={isEnglish ? "Official Certified Legal Report & WhatsApp Memo" : "المحضر والمراسلة المعتمدة"}
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>{isEnglish ? "Legal Report" : "المحضر المعتمد"}</span>
              </button>
            </div>

            {/* Quick Keyword Search Filter */}
            <div className="relative flex-1 sm:w-44 md:w-48">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEnglish ? "Filter dossier..." : "بحث في الملف..."}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute ltr:right-2.5 rtl:left-2.5 top-2 pointer-events-none" />
            </div>

            {/* Desktop Language Switcher */}
            <button
              onClick={() => setIsEnglish(!isEnglish)}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 font-bold text-xs transition shadow-sm"
              title={isEnglish ? "التبديل إلى اللغة العربية" : "Switch to English"}
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span>{isEnglish ? "العربية" : "English"}</span>
            </button>

          </div>

        </div>
      </header>
    </>
  );
};
