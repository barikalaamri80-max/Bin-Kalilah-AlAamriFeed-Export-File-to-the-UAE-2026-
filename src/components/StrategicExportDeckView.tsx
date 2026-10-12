import React, { useState, useEffect } from 'react';
import { SLIDES_12_DATA, SlideItem } from '../data/slides12Data';
import { DOSSIER_META } from '../data/dossierData';
import { 
  ChevronRight, 
  ChevronLeft, 
  Printer, 
  Languages, 
  Shield, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Maximize2, 
  Minimize2,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TemplateStyle } from './Header';

interface StrategicExportDeckViewProps {
  isEnglish: boolean;
  setIsEnglish: (val: boolean) => void;
  onPrint: () => void;
  templateStyle?: TemplateStyle;
}

export const StrategicExportDeckView: React.FC<StrategicExportDeckViewProps> = ({
  isEnglish,
  setIsEnglish,
  onPrint,
  templateStyle = 'royal',
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [deckViewMode, setDeckViewMode] = useState<'slide' | 'all'>('slide');
  const totalSlides = SLIDES_12_DATA.length;
  const currentSlide = SLIDES_12_DATA[currentSlideIndex];

  // Keyboard navigation for presentation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (deckViewMode !== 'slide') return;
      if (e.key === 'ArrowRight') {
        if (isEnglish) {
          setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
        } else {
          setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
        }
      } else if (e.key === 'ArrowLeft') {
        if (isEnglish) {
          setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
        } else {
          setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deckViewMode, isEnglish, totalSlides]);

  const goToNext = () => {
    setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const renderSingleSlideContent = (slide: SlideItem) => {
    // Template Style Variants (All bright, appetizing, uplifting, White + Red + Gold)
    const cardBgClass = 
      templateStyle === 'crystal'
        ? "bg-white/75 backdrop-blur-2xl border-2 border-amber-300 shadow-2xl"
        : templateStyle === 'diplomatic'
        ? "bg-white/95 border-2 border-slate-300 shadow-xl"
        : "bg-white/85 sm:bg-white/90 backdrop-blur-xl border-2 border-amber-400/60 shadow-[0_20px_50px_rgba(180,83,9,0.12)]";

    return (
      <div className={`${cardBgClass} p-6 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[580px] transition-all`}>
        {/* Glow ambient effects in Royal Crimson and Imperial Gold */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        
        {/* Top Gold & Crimson Ornamental Header Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-700 via-amber-400 to-red-800" />

        <div>
          {/* Slide Header & Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-amber-100 font-black tracking-wider text-xs uppercase bg-gradient-to-r from-red-800 to-red-900 px-3.5 py-1 rounded-full border border-amber-300 shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>{isEnglish ? slide.tagEn : slide.tagAr}</span>
              </span>
            </div>
            
            <div className="text-xs font-mono text-red-900 font-extrabold bg-amber-50 px-3 py-1 rounded-full border border-amber-300 shadow-sm">
              {isEnglish ? `Slide ${slide.slideNumber} of 12` : `الشريحة ${slide.slideNumber} من 12`}
            </div>
          </div>

          {/* Main Title & Subtitle (High-Contrast Crimson Red, Slate & Warm Gold) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-red-950 leading-tight mb-3 tracking-tight">
            {isEnglish ? slide.titleEn : slide.titleAr}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed mb-6">
            {isEnglish ? slide.subtitleEn : slide.subtitleAr}
          </p>

          {/* Metrics Grid if available */}
          {slide.metrics && slide.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {slide.metrics.map((m, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-b from-white to-amber-50/80 p-4 sm:p-5 rounded-2xl border-2 border-amber-300/70 shadow-md backdrop-blur-sm hover:border-red-400 transition-all hover:scale-[1.02]"
                >
                  <div className="text-2xl sm:text-3xl font-black text-red-700 font-mono mb-1 drop-shadow-sm">
                    {m.value}
                  </div>
                  <div className="text-xs text-amber-950 font-black uppercase tracking-wide">
                    {isEnglish ? m.labelEn : m.labelAr}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Regulatory Compliance Matrix Table (Specialized for MOCCAE vs Export Dept Outputs) */}
          {slide.complianceMatrix && slide.complianceMatrix.length > 0 && (
            <div className="mb-6 overflow-hidden rounded-2xl border-2 border-amber-300/80 shadow-lg bg-white/95 backdrop-blur-md">
              <div className="bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="font-black text-xs sm:text-sm">
                    {isEnglish ? "MOCCAE Regulatory Compliance Matrix (Statutory Mapping)" : "مصفوفة الامتثال الرقابي والتنظيمي (مطابقة اشتراطات MOCCAE السيادية)"}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-200 bg-black/25 px-2.5 py-0.5 rounded border border-amber-400/30">
                  {isEnglish ? "Export Department Output Audit" : "تدقيق مخرجات قسم التصدير"}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-right rtl:text-right ltr:text-left border-collapse">
                  <thead>
                    <tr className="bg-amber-50/90 text-red-950 font-black border-b border-amber-200 text-[11px] uppercase tracking-wide">
                      <th className="p-3 border-r border-amber-200/60 w-1/5">{isEnglish ? "Regulatory Scope" : "المجال الرقابي"}</th>
                      <th className="p-3 border-r border-amber-200/60 w-1/4">{isEnglish ? "MOCCAE Mandate (UAE)" : "اشتراطات وزارة التغير المناخي والبيئة (MOCCAE)"}</th>
                      <th className="p-3 border-r border-amber-200/60 w-1/4">{isEnglish ? "Export Dept Actual Output" : "مخرجات قسم التصدير الفعلية"}</th>
                      <th className="p-3 border-r border-amber-200/60 w-1/6 text-center">{isEnglish ? "Compliance Status" : "حالة الامتثال"}</th>
                      <th className="p-3">{isEnglish ? "Statutory & Border Impact" : "الأثر الرقابي والقانوني"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100 font-medium">
                    {slide.complianceMatrix.map((row, rIdx) => (
                      <tr 
                        key={rIdx} 
                        className={`transition hover:bg-red-50/60 ${
                          rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                        }`}
                      >
                        <td className="p-3 font-black text-red-950 border-r border-slate-200/80 align-top">
                          <div className="flex items-start gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-600 mt-1 shrink-0" />
                            <span>{isEnglish ? row.regulatoryScopeEn : row.regulatoryScopeAr}</span>
                          </div>
                        </td>
                        <td className="p-3 text-slate-800 border-r border-slate-200/80 leading-relaxed align-top">
                          <span className="font-semibold text-amber-900 block mb-0.5 text-[10px] uppercase tracking-wider">
                            {isEnglish ? "Mandatory UAE Standard:" : "المعيار السيادي الإماراتي:"}
                          </span>
                          {isEnglish ? row.moccaeRequirementEn : row.moccaeRequirementAr}
                        </td>
                        <td className="p-3 text-slate-900 border-r border-slate-200/80 leading-relaxed align-top bg-rose-50/50">
                          <span className="font-semibold text-red-900 block mb-0.5 text-[10px] uppercase tracking-wider">
                            {isEnglish ? "Export Department Record:" : "المستند المسلّم من التصدير:"}
                          </span>
                          {isEnglish ? row.exportDeptOutputEn : row.exportDeptOutputAr}
                        </td>
                        <td className="p-3 border-r border-slate-200/80 text-center align-top whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black bg-red-100 text-red-900 border border-red-300 shadow-xs">
                            <AlertTriangle className="w-3 h-3 text-red-600 shrink-0" />
                            <span>{isEnglish ? row.complianceStatusEn : row.complianceStatusAr}</span>
                          </span>
                        </td>
                        <td className="p-3 text-slate-700 leading-relaxed align-top text-[11px]">
                          <span className="text-red-950 font-bold block mb-0.5">
                            {isEnglish ? row.statutoryImpactEn : row.statutoryImpactAr}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {(isEnglish ? slide.pointsEn : slide.pointsAr).map((p, pIdx) => (
              <div 
                key={pIdx} 
                className="bg-white/90 p-4 rounded-2xl border border-amber-200/80 hover:border-red-400 hover:bg-white transition-all shadow-sm backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <strong className="text-red-950 text-xs sm:text-sm font-black block">{p.title}</strong>
                    {p.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-50 text-red-800 border border-red-200 font-bold shrink-0">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Highlights & Footer */}
        <div>
          {/* Highlight Box */}
          {(isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr) && (
            <div className={`p-4 sm:p-5 rounded-2xl text-xs sm:text-sm mb-6 border-2 shadow-md backdrop-blur-sm ${
              (isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr)?.type === 'danger'
                ? 'bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border-red-300 text-red-950'
                : (isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr)?.type === 'warning'
                ? 'bg-gradient-to-r from-amber-50 via-stone-50 to-amber-100/60 border-amber-300 text-amber-950'
                : (isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr)?.type === 'info'
                ? 'bg-gradient-to-r from-blue-50 to-slate-50 border-blue-200 text-slate-900'
                : 'bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white border-amber-400 shadow-xl'
            }`}>
              <strong className={`font-black block mb-1.5 ${
                (isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr)?.type === 'success' 
                  ? 'text-amber-300' 
                  : 'text-red-900'
              }`}>
                {(isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr)?.title}
              </strong>
              <span className={`font-medium ${
                (isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr)?.type === 'success' 
                  ? 'text-slate-100' 
                  : 'text-slate-800'
              }`}>
                {(isEnglish ? slide.highlightBoxEn : slide.highlightBoxAr)?.desc}
              </span>
            </div>
          )}

          {/* Slide Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div>
              <span className="text-slate-700 font-bold">{isEnglish ? "Prepared by: " : "الجهة المعتمدة: "}</span>
              <span className="text-red-900 font-black">{isEnglish ? DOSSIER_META.authorEntityEn : DOSSIER_META.authorEntityAr}</span>
            </div>
            <div className="text-amber-800 font-black">
              {isEnglish 
                ? "Addressed to Salalah Mills Board of Directors" 
                : "موجه لمجلس إدارة شركة مطاحن صلالة (ش.م.ع.ع)"}
            </div>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      
      {/* Top Deck Action Bar (Luminous White & Gold) */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white/90 backdrop-blur-xl p-3.5 rounded-2xl border-2 border-amber-300/70 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-red-900 font-black bg-red-50 px-3 py-1 rounded-lg border border-red-200">
            {isEnglish ? `Slide ${currentSlide.slideNumber} of ${totalSlides}` : `الشريحة ${currentSlide.slideNumber} من ${totalSlides}`}
          </span>
          <span className="text-xs text-slate-800 font-black hidden sm:inline">
            {isEnglish ? currentSlide.titleEn : currentSlide.titleAr}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Deck View Mode Switcher: Single Slide vs Full Deck */}
          <div className="flex items-center bg-slate-100 border border-slate-300 rounded-lg p-0.5 text-xs shadow-inner">
            <button
              onClick={() => setDeckViewMode('slide')}
              className={`px-3 py-1 rounded-md font-bold transition ${
                deckViewMode === 'slide' 
                  ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-sm' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {isEnglish ? "Single Slide" : "عرض شريحة"}
            </button>
            <button
              onClick={() => setDeckViewMode('all')}
              className={`px-3 py-1 rounded-md font-bold transition ${
                deckViewMode === 'all' 
                  ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-sm' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {isEnglish ? "All 12 Slides" : "كافة الشرائح (12)"}
            </button>
          </div>

          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black bg-gradient-to-r from-[#C5A059] via-[#DFBA73] to-[#B89243] hover:from-[#B89243] hover:to-[#C5A059] text-slate-950 rounded-lg transition active:scale-95 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isEnglish ? "Print Deck" : "طباعة العرض"}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Rendering */}
      {deckViewMode === 'slide' ? (
        <div>
          {renderSingleSlideContent(currentSlide)}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mt-6">
            <button
              onClick={goToPrev}
              disabled={currentSlideIndex === 0}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all ${
                currentSlideIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border border-slate-200'
                  : 'bg-white hover:bg-red-50 text-red-900 border-2 border-red-200 hover:border-red-400 active:scale-95 shadow-md'
              }`}
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
              <span>{isEnglish ? "Previous Slide" : "الشريحة السابقة"}</span>
            </button>

            {/* Slide Quick Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[280px] sm:max-w-md py-1">
              {SLIDES_12_DATA.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentSlideIndex 
                      ? 'bg-red-700 w-6 shadow-md shadow-red-700/40' 
                      : 'bg-slate-300 hover:bg-slate-400 border border-slate-400'
                  }`}
                  title={isEnglish ? `Go to Slide ${s.slideNumber}` : `الانتقال إلى الشريحة ${s.slideNumber}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all ${
                currentSlideIndex === totalSlides - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border border-slate-200'
                  : 'bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-900/30 active:scale-95'
              }`}
            >
              <span>{isEnglish ? "Next Slide" : "الشريحة التالية"}</span>
              <ChevronLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
            </button>
          </div>
        </div>
      ) : (
        /* All 12 Slides Continuous View */
        <div className="space-y-12">
          {SLIDES_12_DATA.map((slide) => (
            <div key={slide.id} className="slide-page">
              {renderSingleSlideContent(slide)}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
