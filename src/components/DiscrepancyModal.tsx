import React from 'react';
import { DiscrepancyItem } from '../data/dossierData';
import { X, AlertTriangle, ShieldCheck, FileCheck, Scale, ArrowRight } from 'lucide-react';

interface DiscrepancyModalProps {
  item: DiscrepancyItem | null;
  onClose: () => void;
  isEnglish: boolean;
}

export const DiscrepancyModal: React.FC<DiscrepancyModalProps> = ({
  item,
  onClose,
  isEnglish,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white border-2 border-amber-300 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (White & Red) */}
        <div className="p-5 border-b border-amber-200 bg-gradient-to-r from-red-50 via-amber-50 to-red-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-100 border border-red-300 text-red-700">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-red-900 font-bold uppercase tracking-wider">
                {isEnglish ? "Technical Dossier Inspection" : "فحص التناقض المستندي الفني"}
              </div>
              <h3 className="text-base font-black text-red-950">
                {isEnglish ? item.documentEn : item.document}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-800">
          
          {/* Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-[11px] font-bold text-slate-600 mb-1">
                {isEnglish ? "Issued Content (Oman Flour Mills):" : "المحتوى الصادر من المطاحن العمانية:"}
              </div>
              <div className="font-mono text-red-900 font-bold text-xs sm:text-sm bg-white p-3 rounded-xl border border-red-200">
                {isEnglish ? item.contentFromOmanFlourMillsEn : item.contentFromOmanFlourMills}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <div className="text-[11px] font-bold text-amber-900 mb-1">
                {isEnglish ? "UAE MOCCAE Statutory Condition:" : "شرط وزارة البيئة والتغير المناخي (الإمارات):"}
              </div>
              <div className="font-medium text-slate-900 font-bold text-xs sm:text-sm bg-white p-3 rounded-xl border border-amber-300">
                {isEnglish ? item.uaeMoccaeConditionEn : item.uaeMoccaeCondition}
              </div>
            </div>
          </div>

          {/* Technical Analysis */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-black text-red-900 mb-1.5">
              <Scale className="w-4 h-4 text-red-700" />
              <span>{isEnglish ? "Chemical & Veterinary Analysis:" : "التحليل الفني والمخبري للبيانات:"}</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 font-medium">
              {isEnglish ? item.detailedAnalysisEn : item.detailedAnalysis}
            </p>
          </div>

          {/* Legal Risk & Recommendation */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border-2 border-red-300 text-slate-900">
            <strong className="text-red-950 block mb-1 font-black text-xs sm:text-sm">
              {isEnglish ? "Regulatory Risk & Broker Disruption:" : "المخاطر التنظيمية والتعطيلات الإجرائية:"}
            </strong>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold mb-3">
              {isEnglish ? item.legalRiskEn : item.legalRisk}
            </p>

            <div className="pt-2.5 border-t border-red-200 flex items-center justify-between text-xs">
              <span className="font-bold text-red-900">{isEnglish ? "Accredited Directive:" : "المطلب العلاجي المباشر:"}</span>
              <span className="text-slate-900 font-black">{isEnglish ? item.recommendationEn : item.recommendation}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white transition active:scale-95 shadow-md"
          >
            {isEnglish ? "Close Window" : "إغلاق النافذة"}
          </button>
        </div>

      </div>
    </div>
  );
};
