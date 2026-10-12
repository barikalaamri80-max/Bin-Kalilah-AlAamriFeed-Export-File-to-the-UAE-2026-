import React from 'react';
import { DOSSIER_META, KPI_CARDS } from '../data/dossierData';
import { Shield, AlertCircle, Building2, Award, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  isEnglish: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isEnglish }) => {
  return (
    <section className="relative pt-8 pb-10 border-b-2 border-amber-300/60 bg-white/85 sm:bg-white/90 backdrop-blur-xl overflow-hidden shadow-sm">
      
      {/* Subtle ambient background glow in Royal Crimson and Gold */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header Row: Investor Information & Status Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-200">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-base sm:text-lg font-black text-red-950">
                {isEnglish ? DOSSIER_META.companyNameEn : DOSSIER_META.companyNameAr}
              </div>
              <div className="text-xs text-amber-800 font-bold font-mono">
                {isEnglish ? "Accredited National Commercial Agent — Salalah, Oman" : "الوكيل والمستثمر الوطني المعتمد — صلالة، سلطنة عمان"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-700 font-mono font-bold tracking-wide flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{isEnglish ? DOSSIER_META.dateEnglish : DOSSIER_META.dateArabic}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-800 to-red-900 border border-amber-300 text-amber-200 text-[11px] font-black tracking-wider shadow-md">
              <Shield className="w-3.5 h-3.5 text-amber-300" />
              <span>{isEnglish ? DOSSIER_META.dossierBadgeEn : DOSSIER_META.dossierBadgeAr}</span>
            </div>
          </div>
        </div>

        {/* Classification Banner (Imperial Red & Gold) */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border-2 border-red-300 text-red-950 text-xs sm:text-sm font-black tracking-wide shadow-sm">
            <AlertCircle className="w-4 h-4 text-red-700" />
            <span>{isEnglish ? DOSSIER_META.classificationEn : DOSSIER_META.classificationAr}</span>
          </div>
        </div>

        {/* Main Document Headline (High-Contrast Crimson & Gold) */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-red-950 tracking-tight leading-relaxed sm:leading-snug">
            {isEnglish ? DOSSIER_META.titleEn : DOSSIER_META.titleAr}
          </h1>
          <p className="mt-3.5 text-xs sm:text-sm md:text-[15px] text-slate-700 font-semibold leading-relaxed max-w-3xl mx-auto">
            {isEnglish ? DOSSIER_META.subtitleEn : DOSSIER_META.subtitleAr}
          </p>
        </div>

        {/* 4 Metric Cards Grid (Red, Gold, White Translucent Glass) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
          {KPI_CARDS.map((kpi) => (
            <div
              key={kpi.id}
              className="p-4 rounded-2xl bg-gradient-to-b from-white to-amber-50/70 backdrop-blur-md border-2 border-amber-300/70 text-center flex flex-col justify-between hover:border-red-400 transition-all hover:scale-[1.02] shadow-md"
            >
              <div className="text-[11px] sm:text-xs text-slate-600 font-extrabold mb-1.5">
                {isEnglish ? kpi.labelEn : kpi.labelAr}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-red-700 font-mono tracking-tight my-0.5">
                {isEnglish ? kpi.valueEn : kpi.valueAr}
              </div>
              <div className="text-[10px] sm:text-[11px] text-amber-900 font-black mt-1">
                {isEnglish ? kpi.unitEn : kpi.unitAr}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Sender & Recipient Verification Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-amber-200">
          <div className="p-4 rounded-2xl bg-white/95 border-2 border-amber-300/80 shadow-sm flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-red-50 text-red-800 border border-red-200 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {isEnglish ? "Issuing / Submitting Authority:" : "الجهة المعتمدة المرفوع منها الملف:"}
              </div>
              <div className="text-sm font-black text-red-950 mt-0.5">
                {isEnglish ? DOSSIER_META.authorEntityEn : DOSSIER_META.authorEntityAr}
              </div>
              <div className="text-xs text-amber-800 font-bold mt-1">
                {isEnglish ? "Official Authorized Investor & Commercial Agent — Salalah" : "المستثمر والوكيل التجاري المعتمد رسمياً — صلالة"}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 border-2 border-amber-300/80 shadow-sm flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-300 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {isEnglish ? "Direct Recipient (Exclusive):" : "الجهة الموجه إليها الملف حصرياً:"}
              </div>
              <div className="text-sm font-black text-red-950 mt-0.5">
                {isEnglish ? DOSSIER_META.directedToEn : DOSSIER_META.directedToAr}
              </div>
              <div className="text-xs text-slate-600 font-bold mt-1">
                {isEnglish ? "Direct Executive & Board Governance Audit" : "للنظر والتحكيم المباشر وحسم إجراءات الاعتماد والتصدير"}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
