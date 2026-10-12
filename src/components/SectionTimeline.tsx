import React from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/dossierData';
import { Clock, ShieldAlert, Video, Eye, CheckCircle2 } from 'lucide-react';

interface SectionTimelineProps {
  isEnglish: boolean;
  onSelectEvent: (event: TimelineEvent) => void;
}

export const SectionTimeline: React.FC<SectionTimelineProps> = ({ 
  isEnglish, 
  onSelectEvent 
}) => {
  const getBadgeStyle = (type: TimelineEvent['badgeType']) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'warning':
        return 'bg-amber-50 text-amber-900 border-amber-300';
      case 'danger':
        return 'bg-red-50 text-red-800 border-red-300';
      case 'critical':
        return 'bg-red-800 text-white border-amber-300 font-black';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 border-b-2 border-amber-300/60 bg-white/80 sm:bg-white/85 backdrop-blur-xl dossier-card">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-700 to-amber-500 flex items-center justify-center text-white font-black text-sm shadow-md">
              ٣
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-red-950">
                {isEnglish 
                  ? "Third: The May 7, 2026 Incident & Unlawful Incursion by Foreign Broker" 
                  : "ثالثاً: واقعة 7 مايو 2026 والسطو غير المشروع للوسيط الوافد"}
              </h2>
            </div>
          </div>

          <div className="px-3.5 py-1 rounded-full bg-red-50 border border-red-300 text-red-900 text-xs font-mono font-bold tracking-wider">
            Chronological Audit
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 mb-6 font-semibold">
          {isEnglish 
            ? "Chronological audit of deliberate disruption of the accredited exporter and facilitating unauthorized incursion into the plant." 
            : "التسلسل الزمني لتعطيل المعتمد وتمكين شركة أثياف جلوبال FZC (عجمان) من اختراق المنشأة"}
        </p>

        {/* Timeline Event Cards (White, Red & Gold) */}
        <div className="space-y-4">
          {TIMELINE_EVENTS.map((event) => (
            <div
              key={event.id}
              className={`p-4 sm:p-5 rounded-2xl border-2 transition-all shadow-sm backdrop-blur-sm ${
                event.badgeType === 'critical'
                  ? 'bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border-red-400 shadow-md ring-1 ring-red-300'
                  : 'bg-white/95 border-amber-300/70 hover:border-red-400'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-black text-red-900 bg-red-50 px-2.5 py-0.5 rounded-lg border border-red-200">
                    {isEnglish ? event.dateEn : event.date}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border ${getBadgeStyle(event.badgeType)}`}>
                    {isEnglish ? event.badgeEn : event.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    <ShieldAlert className="w-3 h-3 text-red-700" />
                    <span>{isEnglish ? event.evidenceTypeEn : event.evidenceType}</span>
                  </span>
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-black text-red-950 mb-1.5 leading-snug">
                {isEnglish ? event.titleEn : event.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-3">
                {isEnglish ? event.descriptionEn : event.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs">
                <div className="text-[11px] text-slate-600 font-mono truncate max-w-md">
                  <span className="font-bold text-slate-700">{isEnglish ? "Evidence: " : "القرينة الثبوتية: "}</span>
                  <span className="font-semibold text-red-900">{isEnglish ? event.evidenceDetailsEn : event.evidenceDetails}</span>
                </div>

                <button
                  onClick={() => onSelectEvent(event)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold text-xs transition active:scale-95 shadow-sm shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isEnglish ? "Review Proof" : "معاينة الإثبات"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
