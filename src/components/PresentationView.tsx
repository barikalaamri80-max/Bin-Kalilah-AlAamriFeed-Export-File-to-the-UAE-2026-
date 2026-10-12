import React, { useState, useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { SectionParties } from './SectionParties';
import { SectionDiscrepancies } from './SectionDiscrepancies';
import { SectionTimeline } from './SectionTimeline';
import { SectionFinancial } from './SectionFinancial';
import { SectionDemands } from './SectionDemands';
import { DiscrepancyItem, TimelineEvent, ShipmentRecord } from '../data/dossierData';
import { ChevronRight, ChevronLeft, Maximize2, Minimize2, Play, Square } from 'lucide-react';

interface PresentationViewProps {
  isEnglish: boolean;
  onSelectDiscrepancy: (item: DiscrepancyItem) => void;
  onSelectEvent: (event: TimelineEvent) => void;
  onSelectShipment: (shipment: ShipmentRecord) => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  isEnglish,
  onSelectDiscrepancy,
  onSelectEvent,
  onSelectShipment,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  const slideTitlesAr = [
    "الغلاف الاستراتيجي والمؤشرات الرئيسية",
    "أطراف النزاع ومحددات الشراكة الحصرية",
    "التناقض الفني وفخ شهادة علف البياض",
    "واقعة 7 مايو 2026 والسطو غير المشروع",
    "براءة الذمة المالية ومسار التصعيد",
    "الطلبات التنفيذية الختامية والرسالة المعتمدة"
  ];

  const slideTitlesEn = [
    "Sovereign Brief & Strategic KPIs",
    "Parties & Contractual Parameters",
    "Technical Contradictions & Layer Trap",
    "May 7, 2026 Incident & Incursion Audit",
    "Financial Clearance & Escalation Log",
    "Final Executive Demands & Official Memo"
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => isEnglish ? Math.min(totalSlides, prev + 1) : Math.max(1, prev - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => isEnglish ? Math.max(1, prev - 1) : Math.min(totalSlides, prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnglish]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(totalSlides, prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#070b14] flex flex-col justify-between">
      
      {/* Slide Navigation Bar */}
      <div className="bg-[#090f1d] border-b border-slate-800 px-4 py-3 sticky top-14 z-40 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
            {isEnglish ? `Slide ${currentSlide} of ${totalSlides}` : `الشريحة ${currentSlide} من ${totalSlides}`}
          </span>
          <h2 className="text-xs sm:text-sm font-bold text-slate-200 hidden sm:block">
            {isEnglish ? slideTitlesEn[currentSlide - 1] : slideTitlesAr[currentSlide - 1]}
          </h2>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i + 1)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === i + 1 
                  ? 'bg-emerald-400 w-6' 
                  : 'bg-slate-700 hover:bg-slate-500'
              }`}
              title={isEnglish ? slideTitlesEn[i] : slideTitlesAr[i]}
            />
          ))}
        </div>

        {/* Next / Prev Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
            title={isEnglish ? "Previous Slide" : "الشريحة السابقة"}
          >
            {isEnglish ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-1.5 rounded-lg bg-emerald-600 text-slate-950 hover:bg-emerald-500 disabled:opacity-30 disabled:pointer-events-none transition-all font-bold"
            title={isEnglish ? "Next Slide" : "الشريحة التالية"}
          >
            {isEnglish ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide Body */}
      <div className="flex-1 max-w-5xl w-full mx-auto p-2 sm:p-4 animate-in fade-in zoom-in-95 duration-200">
        {currentSlide === 1 && <HeroSection isEnglish={isEnglish} />}
        {currentSlide === 2 && <SectionParties isEnglish={isEnglish} />}
        {currentSlide === 3 && (
          <SectionDiscrepancies 
            isEnglish={isEnglish} 
            onSelectDiscrepancy={onSelectDiscrepancy} 
          />
        )}
        {currentSlide === 4 && (
          <SectionTimeline 
            isEnglish={isEnglish} 
            onSelectEvent={onSelectEvent} 
          />
        )}
        {currentSlide === 5 && (
          <SectionFinancial 
            isEnglish={isEnglish} 
            onSelectShipment={onSelectShipment} 
          />
        )}
        {currentSlide === 6 && <SectionDemands isEnglish={isEnglish} />}
      </div>

    </div>
  );
};
