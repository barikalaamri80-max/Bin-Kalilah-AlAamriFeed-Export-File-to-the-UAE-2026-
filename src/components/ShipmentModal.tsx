import React from 'react';
import { ShipmentRecord } from '../data/dossierData';
import { X, CheckCircle2, CreditCard, FileCheck2, ArrowRight } from 'lucide-react';

interface ShipmentModalProps {
  shipment: ShipmentRecord | null;
  onClose: () => void;
  isEnglish: boolean;
}

export const ShipmentModal: React.FC<ShipmentModalProps> = ({
  shipment,
  onClose,
  isEnglish,
}) => {
  if (!shipment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white border-2 border-amber-300 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-amber-200 bg-gradient-to-r from-red-50 via-amber-50 to-red-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-red-900 font-bold uppercase tracking-wider">
                {isEnglish ? "Certified Financial Settlement Voucher" : "سند براءة الذمة والتخليص المالي"}
              </div>
              <h3 className="text-base font-black text-red-950">
                {isEnglish ? shipment.titleEn : shipment.title}
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
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-3.5 text-xs">
            <div>
              <span className="text-slate-500 block text-[11px] font-bold">{isEnglish ? "Official Reference:" : "المرجع الرسمي:"}</span>
              <span className="font-mono text-red-950 font-black text-sm">{shipment.refNumber}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px] font-bold">{isEnglish ? "Settlement Date:" : "تاريخ السداد:"}</span>
              <span className="text-slate-900 font-bold">{isEnglish ? shipment.settlementDateEn : shipment.settlementDate}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px] font-bold">{isEnglish ? "Paid Amount:" : "المبلغ المسدد:"}</span>
              <span className="font-mono font-black text-red-700 text-sm">{isEnglish ? shipment.amountEn : shipment.amount}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px] font-bold">{isEnglish ? "Consignment Weight:" : "الحمولة والكمية:"}</span>
              <span className="text-slate-900 font-bold">{isEnglish ? shipment.quantityEn : shipment.quantity}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-red-900 font-black block text-xs mb-1">
              {isEnglish ? "Customs & Logistics Status:" : "حالة البيان والتصريح الجمركي:"}
            </span>
            <div className="text-xs font-mono text-slate-900 font-bold bg-white p-2.5 rounded-xl border border-slate-300">
              {isEnglish ? shipment.customsStatusEn : shipment.customsStatus}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border-2 border-emerald-300">
            <div className="flex items-center gap-2 text-xs font-black text-emerald-950 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{isEnglish ? "Financial Liquidity & Clearance Attestation:" : "شهادة السداد وبراءة الذمة 100%:"}</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              {isEnglish ? shipment.notesEn : shipment.notes}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white transition active:scale-95 shadow-md"
          >
            {isEnglish ? "Close Voucher" : "إغلاق السند"}
          </button>
        </div>

      </div>
    </div>
  );
};
