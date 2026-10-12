import React from 'react';
import { SHIPMENT_RECORDS, ESCALATION_STEPS, DOSSIER_META, ShipmentRecord } from '../data/dossierData';
import { CheckCircle2, ShieldCheck, Scale, CreditCard, ChevronRight, History } from 'lucide-react';

interface SectionFinancialProps {
  isEnglish: boolean;
  onSelectShipment: (shipment: ShipmentRecord) => void;
}

export const SectionFinancial: React.FC<SectionFinancialProps> = ({ 
  isEnglish, 
  onSelectShipment 
}) => {
  return (
    <section className="py-8 px-4 sm:px-6 border-b-2 border-amber-300/60 bg-white/80 sm:bg-white/85 backdrop-blur-xl dossier-card">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-700 to-amber-500 flex items-center justify-center text-white font-black text-sm shadow-md">
              ٤
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-red-950">
                {isEnglish 
                  ? "Fourth: Financial Integrity Audit & Documented Escalation Trail" 
                  : "رابعاً: براءة الذمة المالية ومسار التصعيد الإداري والقانوني"}
              </h2>
            </div>
          </div>

          <div className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-black tracking-wider shadow-sm">
            100% Cash Settled
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          
          {/* Left Column: 3 Shipments Status & Financial Summary */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="text-xs font-black text-red-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-red-700" />
              <span>{isEnglish ? "Consignment Settlement Vouchers" : "سجلات الشحنات وبراءة الذمة المالية"}</span>
            </div>

            {SHIPMENT_RECORDS.map((ship) => (
              <div
                key={ship.id}
                onClick={() => onSelectShipment(ship)}
                className="p-4 rounded-2xl bg-white/95 border-2 border-amber-300/70 hover:border-red-400 transition-all cursor-pointer flex items-center justify-between shadow-sm group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black text-red-950 group-hover:text-red-700 transition-colors">
                      {isEnglish ? ship.titleEn : ship.title}
                    </span>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-300 font-bold">
                      ({ship.refNumber})
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-semibold">
                    <span>{isEnglish ? "Quantity: " : "الكمية: "}</span>
                    <span className="font-bold text-slate-900">{isEnglish ? ship.quantityEn : ship.quantity}</span>
                    <span className="mx-2 text-slate-300">|</span>
                    <span>{isEnglish ? "Value: " : "القيمة: "}</span>
                    <span className="font-bold text-red-700 font-mono">{isEnglish ? ship.amountEn : ship.amount}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-2.5 py-1 rounded-xl text-[11px] font-black bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isEnglish ? ship.paymentStatusEn : ship.paymentStatus}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-700 transition-colors rtl:rotate-180" />
                </div>
              </div>
            ))}

            {/* Financial Certificate Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border-2 border-emerald-300 text-emerald-950 flex items-start gap-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-black text-emerald-950">
                  {isEnglish ? "Official Zero-Credit Settlement Balance" : "براءة ذمة مالية تامة وسداد 100% نقداً مقدماً"}
                </h4>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed font-semibold">
                  {isEnglish 
                    ? "Bin Kalilah Al Amri holds a flawless zero-credit balance, having paid in full prior to goods dispatch. No outstanding debts exist against any Barakat feed consignments."
                    : "تؤكد سجلات الحسابات المصرفية والمحاسبية خلو طرف شركة بن كليلة العامري من أي التزام مالي وسداد كافة الشحنات نقداً بالكامل قبل انطلاق الشاحنات."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Escalation Trail */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="text-xs font-black text-red-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <History className="w-4 h-4 text-red-700" />
              <span>{isEnglish ? "Documented Administrative Escalation Steps" : "مسار التصعيد الإداري والتحكيمي الموثق"}</span>
            </div>

            <div className="p-5 rounded-2xl bg-white/95 border-2 border-amber-300/70 shadow-sm backdrop-blur-md space-y-4">
              {ESCALATION_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 relative pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                  <div className="w-6 h-6 rounded-full bg-red-100 border border-red-300 text-red-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-black text-red-950 flex items-center gap-2">
                      <span className="font-mono text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {isEnglish ? step.dateEn : step.date}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                      {isEnglish ? step.textEn : step.textAr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
