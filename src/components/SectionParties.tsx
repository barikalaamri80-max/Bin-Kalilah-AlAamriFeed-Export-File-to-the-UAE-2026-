import React from 'react';
import { DOSSIER_PARTIES } from '../data/dossierData';
import { Building2, Factory, Store, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';

interface SectionPartiesProps {
  isEnglish: boolean;
}

export const SectionParties: React.FC<SectionPartiesProps> = ({ isEnglish }) => {
  return (
    <section className="py-8 px-4 sm:px-6 border-b-2 border-amber-300/60 bg-white/80 sm:bg-white/85 backdrop-blur-xl dossier-card">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-700 to-amber-500 flex items-center justify-center text-white font-black text-sm shadow-md">
              ١
            </div>
            <h2 className="text-lg sm:text-xl font-black text-red-950">
              {isEnglish 
                ? "First: Parties to the Dispute & Exclusive Contractual Parameters" 
                : "أولاً: أطراف النزاع ومحددات الشراكة التعاقدية الحصرية"}
            </h2>
          </div>

          <div className="px-3.5 py-1 rounded-full bg-red-50 border border-red-300 text-red-900 text-xs font-mono font-bold tracking-wider">
            Parties & Authority
          </div>
        </div>

        {/* 4 Party Cards Grid (Red, Gold & Crisp White) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: National Buyer / Exporter */}
          <div className="p-5 rounded-2xl bg-white/95 border-2 border-amber-300/80 hover:border-red-400 transition-all flex flex-col justify-between shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-red-700 via-amber-400 to-red-800" />
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-black bg-red-50 text-red-900 border border-red-200">
                  {isEnglish ? DOSSIER_PARTIES[0].roleEn : DOSSIER_PARTIES[0].role}
                </span>
              </div>

              <h3 className="text-base font-black text-red-950 mb-2 leading-snug">
                {isEnglish ? DOSSIER_PARTIES[0].nameEn : DOSSIER_PARTIES[0].name}
              </h3>

              <div className="space-y-2 text-xs text-slate-700 mt-3 pt-3 border-t border-slate-200">
                <p className="font-mono text-amber-800 font-bold">{isEnglish ? (DOSSIER_PARTIES[0].crEn || DOSSIER_PARTIES[0].cr) : DOSSIER_PARTIES[0].cr}</p>
                <p className="font-semibold text-slate-900">
                  {isEnglish ? DOSSIER_PARTIES[0].authorizedPersonEn : DOSSIER_PARTIES[0].authorizedPerson}
                </p>
                <p className="text-amber-950 font-black bg-amber-50 p-2.5 rounded-xl border border-amber-300 text-[11px] mt-2">
                  {isEnglish ? DOSSIER_PARTIES[0].paymentTermsEn : DOSSIER_PARTIES[0].paymentTerms}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isEnglish ? "100% Cash Prepaid Standing" : "سداد فوري مسبق (رصيد ائتماني صفر)"}</span>
            </div>
          </div>

          {/* Card 2: Manufacturer & Supplier */}
          <div className="p-5 rounded-2xl bg-white/95 border-2 border-amber-300/80 hover:border-red-400 transition-all flex flex-col justify-between shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-red-700 via-amber-400 to-red-800" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-black bg-slate-100 text-slate-800 border border-slate-300">
                  {isEnglish ? DOSSIER_PARTIES[1].roleEn : DOSSIER_PARTIES[1].role}
                </span>
                <Factory className="w-5 h-5 text-red-700" />
              </div>

              <h3 className="text-base font-black text-red-950 mb-2 leading-snug">
                {isEnglish ? DOSSIER_PARTIES[1].nameEn : DOSSIER_PARTIES[1].name}
              </h3>

              <div className="space-y-2 text-xs text-slate-700 mt-3 pt-3 border-t border-slate-200">
                <p className="font-mono text-slate-600 font-bold">{isEnglish ? (DOSSIER_PARTIES[1].crEn || DOSSIER_PARTIES[1].cr) : DOSSIER_PARTIES[1].cr}</p>
                <p className="font-bold text-red-900">
                  {isEnglish ? DOSSIER_PARTIES[1].authorizedPersonEn : DOSSIER_PARTIES[1].authorizedPerson}
                </p>
                <p className="text-slate-800 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px] mt-2">
                  {isEnglish ? DOSSIER_PARTIES[1].paymentTermsEn : DOSSIER_PARTIES[1].paymentTerms}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-amber-800 font-bold">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>{isEnglish ? "Public Joint Stock Company (SAOG)" : "شركة مساهمة عامة عمانية رائدة"}</span>
            </div>
          </div>

          {/* Card 3: UAE Beneficiary & Farm */}
          <div className="p-5 rounded-2xl bg-white/95 border-2 border-amber-300/80 hover:border-red-400 transition-all flex flex-col justify-between shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-red-700 via-amber-400 to-red-800" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-black bg-amber-50 text-amber-900 border border-amber-300">
                  {isEnglish ? DOSSIER_PARTIES[2].roleEn : DOSSIER_PARTIES[2].role}
                </span>
                <Store className="w-5 h-5 text-amber-600" />
              </div>

              <h3 className="text-base font-black text-red-950 mb-2 leading-snug">
                {isEnglish ? DOSSIER_PARTIES[2].nameEn : DOSSIER_PARTIES[2].name}
              </h3>

              <div className="space-y-2 text-xs text-slate-700 mt-3 pt-3 border-t border-slate-200">
                <p className="font-mono text-amber-800 font-bold">{isEnglish ? (DOSSIER_PARTIES[2].crEn || DOSSIER_PARTIES[2].cr) : DOSSIER_PARTIES[2].cr}</p>
                <p className="font-semibold text-slate-900">
                  {isEnglish ? DOSSIER_PARTIES[2].authorizedPersonEn : DOSSIER_PARTIES[2].authorizedPerson}
                </p>
                <p className="text-slate-800 font-medium bg-amber-50/60 p-2.5 rounded-xl border border-amber-200 text-[11px] mt-2">
                  {isEnglish ? DOSSIER_PARTIES[2].paymentTermsEn : DOSSIER_PARTIES[2].paymentTerms}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-red-700 font-bold">
              <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
              <span>{isEnglish ? "160,000 Broilers Feed Dependent" : "تعتمد على إمدادات 160,000 طائر لاحم"}</span>
            </div>
          </div>

          {/* Card 4: Broker Nawfal / Athyaf Global FZC */}
          {DOSSIER_PARTIES[3] && (
            <div className="p-5 rounded-2xl bg-white/95 border-2 border-rose-300 hover:border-red-500 transition-all flex flex-col justify-between shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-rose-700 via-red-500 to-amber-700" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-black bg-rose-50 text-rose-900 border border-rose-300">
                    {isEnglish ? DOSSIER_PARTIES[3].roleEn : DOSSIER_PARTIES[3].role}
                  </span>
                  <Building2 className="w-5 h-5 text-rose-700" />
                </div>

                <h3 className="text-base font-black text-rose-950 mb-2 leading-snug">
                  {isEnglish ? DOSSIER_PARTIES[3].nameEn : DOSSIER_PARTIES[3].name}
                </h3>

                <div className="space-y-2 text-xs text-slate-700 mt-3 pt-3 border-t border-slate-200">
                  <p className="font-mono text-rose-800 font-bold">{isEnglish ? (DOSSIER_PARTIES[3].crEn || DOSSIER_PARTIES[3].cr) : DOSSIER_PARTIES[3].cr}</p>
                  <p className="font-bold text-slate-900">
                    {isEnglish ? DOSSIER_PARTIES[3].authorizedPersonEn : DOSSIER_PARTIES[3].authorizedPerson}
                  </p>
                  <p className="text-rose-950 font-bold bg-rose-50/80 p-2.5 rounded-xl border border-rose-300 text-[11px] mt-2">
                    {isEnglish ? DOSSIER_PARTIES[3].paymentTermsEn : DOSSIER_PARTIES[3].paymentTerms}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-rose-700 font-bold">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                <span>{isEnglish ? "External Broker (Not an Employee)" : "وسيط تجاري خارجي (ليس موظفاً)"}</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
