import React from 'react';
import { TimelineEvent } from '../data/dossierData';
import { X, Clock, Video, ShieldAlert } from 'lucide-react';

interface EvidenceModalProps {
  event: TimelineEvent | null;
  onClose: () => void;
  isEnglish: boolean;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({
  event,
  onClose,
  isEnglish,
}) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white border-2 border-amber-300 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-amber-200 bg-gradient-to-r from-red-50 via-amber-50 to-red-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-100 border border-red-300 text-red-700">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-red-900 font-bold uppercase tracking-wider">
                {isEnglish ? "Digital Forensic Evidence Log" : "سجل الأدلة الرقمية والشهادات"}
              </div>
              <h3 className="text-base font-black text-red-950">
                {isEnglish ? event.titleEn : event.title}
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
          
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono text-red-900 font-bold">
              <Clock className="w-4 h-4 text-red-700" />
              <span>{isEnglish ? event.dateEn : event.date}</span>
              {(isEnglish ? event.timeEn : event.time) && (
                <span>• {isEnglish ? event.timeEn : event.time}</span>
              )}
            </div>
            <span className="text-xs font-black text-red-900 px-3 py-1 rounded-full bg-red-50 border border-red-200">
              {isEnglish ? event.badgeEn : event.badge}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 leading-relaxed font-medium text-slate-700">
            <strong className="text-red-950 block mb-1.5 font-black text-sm">
              {isEnglish ? "Event Description & Chronology:" : "وصف الواقعة والتسلسل الإداري:"}
            </strong>
            {isEnglish ? event.descriptionEn : event.description}
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border-2 border-red-300">
            <div className="flex items-center gap-2 text-xs font-black text-red-900 mb-2">
              <ShieldAlert className="w-4 h-4 text-red-700" />
              <span>{isEnglish ? "Corroborating Physical Evidence:" : "الأدلة الثبوتية والبصمات المسجلة:"}</span>
            </div>
            
            <div className="text-xs font-bold text-red-950 mb-1">
              {isEnglish ? event.evidenceTypeEn : event.evidenceType}
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              {isEnglish ? event.evidenceDetailsEn : event.evidenceDetails}
            </p>
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
