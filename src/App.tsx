/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, TemplateStyle } from './components/Header';
import { StrategicExportDeckView } from './components/StrategicExportDeckView';
import { OfficialLegalReportView } from './components/OfficialLegalReportView';
import { HeroSection } from './components/HeroSection';
import { SectionParties } from './components/SectionParties';
import { SectionDiscrepancies } from './components/SectionDiscrepancies';
import { SectionTimeline } from './components/SectionTimeline';
import { SectionFinancial } from './components/SectionFinancial';
import { SectionDemands } from './components/SectionDemands';
import { DiscrepancyModal } from './components/DiscrepancyModal';
import { EvidenceModal } from './components/EvidenceModal';
import { ShipmentModal } from './components/ShipmentModal';
import { 
  DiscrepancyItem, 
  TimelineEvent, 
  ShipmentRecord, 
  DOSSIER_META 
} from './data/dossierData';
import { Printer, Layers } from 'lucide-react';

export default function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [viewMode, setViewMode] = useState<'deck12' | 'full' | 'report'>('deck12');
  const [searchQuery, setSearchQuery] = useState('');
  const [templateStyle, setTemplateStyle] = useState<TemplateStyle>('royal');
  
  // Default opacity of the translucent white frosted veil
  const [bgOpacity, setBgOpacity] = useState<number>(0.35);

  // Modals state
  const [selectedDiscrepancy, setSelectedDiscrepancy] = useState<DiscrepancyItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [selectedShipment, setSelectedShipment] = useState<ShipmentRecord | null>(null);

  // Sync document language and direction
  useEffect(() => {
    document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
    document.documentElement.lang = isEnglish ? 'en' : 'ar';
  }, [isEnglish]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f2] via-[#f7f2ea] to-[#efe6d8] text-slate-800 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-900 relative overflow-x-hidden">
      
      {/* Dynamic Ambient Background Canvas */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Translucent Luminous Pearl & Warm Ivory Frosted Veil */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#fcfaf7]/75 to-[#f6f0e6]/80 backdrop-blur-[3px] transition-opacity duration-500"
          style={{ opacity: bgOpacity }}
        />
        {/* Subtle Ambient Lighting Flares in Royal Crimson & Imperial Warm Gold */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(185,28,28,0.07),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(217,119,6,0.08),transparent_50%)]" />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col flex-1">
        
        {/* Top Header Bar (Red, White, Gold) */}
        <Header
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish}
          viewMode={viewMode}
          setViewMode={setViewMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onPrint={handlePrint}
          bgOpacity={bgOpacity}
          setBgOpacity={setBgOpacity}
          templateStyle={templateStyle}
          setTemplateStyle={setTemplateStyle}
        />

        {/* Quick Search Findings Banner if searching */}
        {searchQuery.trim().length > 0 && (
          <div className="bg-red-50 border-b border-red-200 px-4 py-2.5 max-w-5xl mx-auto w-full text-xs flex flex-wrap items-center justify-between gap-2 shadow-sm no-print">
            <div className="flex items-center gap-2 text-red-900">
              <span className="font-extrabold">{isEnglish ? "Active Search Query:" : "نتائج البحث الفوري:"}</span>
              <span className="font-mono bg-white px-2 py-0.5 rounded text-red-700 border border-red-200 font-bold">
                "{searchQuery}"
              </span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-red-700 hover:text-red-900 underline font-bold"
            >
              {isEnglish ? "Clear Search Filter" : "مسح نتائج البحث"}
            </button>
          </div>
        )}

        {/* Main Content Area */}
        {viewMode === 'deck12' ? (
          /* 12-Slide Executive Presentation Deck */
          <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
            <StrategicExportDeckView
              isEnglish={isEnglish}
              setIsEnglish={setIsEnglish}
              onPrint={handlePrint}
              templateStyle={templateStyle}
            />
          </main>
        ) : viewMode === 'full' ? (
          /* Comprehensive Evidentiary Audit Dossier View */
          <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
            <HeroSection isEnglish={isEnglish} />
            <SectionParties isEnglish={isEnglish} />
            <SectionDiscrepancies 
              isEnglish={isEnglish} 
              onSelectDiscrepancy={setSelectedDiscrepancy} 
            />
            <SectionTimeline 
              isEnglish={isEnglish} 
              onSelectEvent={setSelectedEvent} 
            />
            <SectionFinancial 
              isEnglish={isEnglish} 
              onSelectShipment={setSelectedShipment} 
            />
            <SectionDemands isEnglish={isEnglish} />
          </main>
        ) : (
          /* Official Certified Report View */
          <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
            <OfficialLegalReportView
              isEnglish={isEnglish}
              onPrint={handlePrint}
            />
          </main>
        )}

        {/* Global Footer (Luminous Pearl White & Imperial Gold) */}
        <footer className="mt-auto border-t border-amber-300/60 bg-white/90 backdrop-blur-md py-6 px-4 text-center text-xs text-slate-600 no-print">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
            <div className="flex items-center gap-2">
              <span className="font-black text-red-950 font-sans">{isEnglish ? DOSSIER_META.authorEntityEn : DOSSIER_META.authorEntityAr}</span>
              <span className="text-amber-500">•</span>
              <span className="text-slate-600">CR: {DOSSIER_META.commercialReg}</span>
            </div>
            <div className="text-red-900 font-bold">
              {isEnglish 
                ? "Addressed to the Board of Directors of Salalah Mills SAOG" 
                : "موجه حصرياً إلى السادة أعضاء مجلس إدارة شركة مطاحن صلالة (ش.م.ع.ع)"}
            </div>
            <div className="text-slate-500 text-[11px]">
              {DOSSIER_META.dateArabic} • {DOSSIER_META.dateEnglish}
            </div>
          </div>
        </footer>

      </div>

      {/* Modals for Drill-Down Inspection */}
      <DiscrepancyModal
        item={selectedDiscrepancy}
        onClose={() => setSelectedDiscrepancy(null)}
        isEnglish={isEnglish}
      />
      <EvidenceModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        isEnglish={isEnglish}
      />
      <ShipmentModal
        shipment={selectedShipment}
        onClose={() => setSelectedShipment(null)}
        isEnglish={isEnglish}
      />

    </div>
  );
}
