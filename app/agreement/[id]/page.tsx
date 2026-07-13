"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import SignatureCanvas from "react-signature-canvas";
import { CheckCircle2, Eraser, Loader2, PenTool, Printer } from "lucide-react";

// ایمپورت کردن فایل تمپلیت جامع قرارداد که ساختیم
import ContractContent from "@/components/ContractContent";

export default function AgreementPage() {
  const params = useParams();
  const id = params?.id as string;

  const [contract, setContract] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sigCanvas = useRef<any>(null);

  // دریافت اطلاعات قرارداد از دیتابیس
  useEffect(() => {
    if (!id) return;

    const fetchContract = async () => {
      try {
        const { data, error } = await supabase
          .from("official_contracts")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setContract(data);
      } catch (error) {
        console.error("قرارداد یافت نشد:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContract();
  }, [id]);

  // ثبت امضای کارفرما
  const handleClientSign = async () => {
    if (sigCanvas.current?.isEmpty()) {
      alert("لطفاً در کادر مشخص شده امضا کنید.");
      return;
    }

    setIsSubmitting(true);
    // استخراج تصویر امضا با حجم بسیار پایین (base64)
    const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    try {
      const { error } = await supabase
        .from("official_contracts")
        .update({ 
          client_signature: signatureImage,
          status: "completed" 
        })
        .eq("id", id);

      if (error) throw error;

      // بروزرسانی استیت برای نمایش آنی به کاربر
      setContract({ ...contract, client_signature: signatureImage, status: "completed" });
    } catch (error) {
      console.error("خطا در ثبت امضا:", error);
      alert("مشکلی در ثبت امضا پیش آمد. لطفاً اتصال اینترنت را بررسی کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSignature = () => {
    sigCanvas.current?.clear();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-blue-600 w-12 h-12" />
        <p className="text-slate-500 font-bold" style={{ fontFamily: '"Vazirmatn", sans-serif' }}>در حال بارگذاری سند...</p>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center text-slate-800 px-4 text-center" style={{ fontFamily: '"Vazirmatn", sans-serif' }}>
        <h1 className="text-2xl sm:text-3xl font-black mb-2 text-red-600">قرارداد یافت نشد!</h1>
        <p className="font-bold text-slate-500">لینک نامعتبر است یا قرارداد از سیستم حذف شده است.</p>
      </div>
    );
  }

  // تبدیل تاریخ میلادی دیتابیس به شمسی
  const contractDate = new Date(contract.created_at).toLocaleDateString("fa-IR");

  // بررسی دیتا
  const contractData = contract.contract_data || {
    totalAmount: contract.contract_amount,
    phase1Amount: "۰",
    phase2Amount: "۰",
    phase3Amount: "۰",
    deliveryDays: "۰",
    supportMonths: "۱۲"
  };

  return (
    <div className="min-h-screen bg-slate-200 py-4 sm:py-8 px-2 sm:px-4 print:p-0 print:bg-white text-slate-900 selection:bg-blue-200" dir="rtl" style={{ fontFamily: '"Vazirmatn", "IRANSans", "Tahoma", sans-serif' }}>
      
      {/* استایل‌های اختصاصی چاپ */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { size: A4; margin: 10mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; }
          .print-hide { display: none !important; }
          .print-shadow-none { box-shadow: none !important; border: none !important; }
        }
      `}} />

      {/* برگه اصلی A4 - بهینه‌شده برای موبایل */}
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white p-5 sm:p-8 md:p-14 shadow-2xl print-shadow-none rounded-2xl sm:rounded-[2rem] print:rounded-none w-full relative overflow-hidden border border-slate-100">
        
        {/* هدر رسمی */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b-4 border-slate-800 pb-6 mb-8 md:mb-10">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-950 rounded-2xl flex items-center justify-center p-2.5 sm:p-3 shadow-md shrink-0">
              <img src="/icon.png" alt="لوگو کیادِو" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-1 sm:mb-2">قرارداد توسعه نرم‌افزار</h1>
              <p className="text-slate-600 font-bold text-xs sm:text-sm md:text-base tracking-wide">تیم مهندسی نرم‌افزار کیادِو | KiyaDev</p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 sm:bg-slate-100 border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl min-w-[160px]">
            <div className="flex justify-between gap-4 mb-2 sm:mb-3 border-b border-slate-200 pb-2">
              <span>تاریخ:</span> 
              <span className="font-bold text-slate-900">{contractDate}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>شماره:</span> 
              <span className="font-mono text-slate-900 font-bold">{contract.id.split('-')[0].toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* محتوای قرارداد */}
        <div className="mb-12 md:mb-16">
          <ContractContent 
            clientName={contract.client_name} 
            projectName={contract.project_name} 
            data={contractData} 
          />
        </div>

        {/* بخش امضاها */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t-2 border-dashed border-slate-300 print:break-inside-avoid">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 px-1 sm:px-2">
            
            {/* امضای شما (کیا دِو) */}
            <div className="w-full md:w-1/2 text-center bg-slate-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200">
              <p className="font-black text-base sm:text-lg text-slate-800 mb-4 sm:mb-6">امضای مجری (نماینده کیا دِو)</p>
              <div className="h-40 sm:h-48 flex justify-center items-center">
                {contract.contractor_signature ? (
                  <img src={contract.contractor_signature} alt="امضای پیمانکار" className="max-h-full mix-blend-multiply drop-shadow-md" />
                ) : (
                  <span className="text-slate-400 text-sm">امضا یافت نشد</span>
                )}
              </div>
              <p className="text-xs sm:text-sm font-bold text-emerald-600 mt-4 flex justify-center items-center gap-1">
                <CheckCircle2 size={16} /> تایید شده سیستم
              </p>
            </div>

            {/* امضای کارفرما */}
            <div className="w-full md:w-1/2 text-center bg-slate-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200">
              <p className="font-black text-base sm:text-lg text-slate-800 mb-4 sm:mb-6">امضای کارفرما</p>
              
              {contract.status === "completed" ? (
                // حالت تایید شده - نمایش امضا و دکمه پرینت
                <div className="flex flex-col items-center w-full">
                  <div className="h-40 sm:h-48 w-full flex justify-center items-center bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm mb-4">
                    <img src={contract.client_signature} alt="امضای کارفرما" className="max-h-full mix-blend-multiply drop-shadow-md" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-emerald-600 mb-6 flex items-center gap-1">
                    <CheckCircle2 size={16} /> ثبت دیجیتال و نهایی شده
                  </p>
                  
                  {/* دکمه پرینت دقیقاً در اینجا و زیر امضای کارفرما */}
                  <button 
                    onClick={() => window.print()}
                    className="print-hide w-full flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg transition-all active:scale-95 text-sm sm:text-base"
                  >
                    <Printer className="w-5 h-5" />
                    دانلود PDF / چاپ قرارداد
                  </button>
                </div>
              ) : (
                // حالت نیاز به امضا
                <div className="print-hide">
                  <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 border-dashed border-blue-400 relative shadow-inner focus-within:border-blue-600 transition-colors">
                    {/* کادر امضا - ارتفاع مناسب برای موبایل */}
                    <SignatureCanvas 
                      ref={sigCanvas}
                      penColor="#0f172a"
                      canvasProps={{ className: "w-full h-96 sm:h-[27rem] md:h-[30rem] cursor-crosshair touch-none" }}
                    />
                    <div className="absolute top-3 right-3 text-xs sm:text-sm font-bold text-slate-300 pointer-events-none">لطفاً اینجا امضا کنید...</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6">
                    <button 
                      onClick={clearSignature} 
                      className="px-4 py-3 text-sm font-bold text-red-500 bg-red-100 hover:bg-red-200 rounded-xl transition-colors w-full sm:w-auto flex justify-center items-center"
                    >
                      <Eraser className="w-5 h-5 inline mr-1" /> پاک کردن
                    </button>
                    <button 
                      onClick={handleClientSign}
                      disabled={isSubmitting}
                      className="px-4 py-3 text-sm sm:text-base font-black text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/30 w-full flex justify-center items-center flex-1 active:scale-95"
                    >
                      {isSubmitting ? <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" /> : <PenTool className="w-5 h-5 sm:w-6 sm:h-6 inline mr-2" />}
                      تایید و ثبت نهایی قرارداد
                    </button>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-4 text-justify leading-relaxed">
                    توجه: با فشردن دکمه ثبت نهایی، شما مفاد این قرارداد را به صورت الکترونیکی تایید می‌کنید. پس از ثبت، این سند به عنوان یک نسخه معتبر در سیستم ذخیره می‌شود.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* بخش جدید: مدارک هویتی پیوست شده */}
        {(contract.contractor_id_card || contract.client_id_card) && (
          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t-2 border-dashed border-slate-300 print:break-inside-avoid">
            <h3 className="text-lg font-black text-slate-800 mb-6 text-center">مدارک هویتی پیوست شده</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
              {contract.contractor_id_card && (
                <div className="w-full sm:w-1/2 text-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <p className="font-bold text-sm text-slate-700 mb-3">کارت ملی مجری (کیا دِو)</p>
                  <img src={contract.contractor_id_card} alt="کارت ملی پیمانکار" className="max-w-full h-auto rounded-xl mx-auto shadow-sm" style={{ maxHeight: "250px" }} />
                </div>
              )}
              {contract.client_id_card && (
                <div className="w-full sm:w-1/2 text-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <p className="font-bold text-sm text-slate-700 mb-3">کارت ملی کارفرما</p>
                  <img src={contract.client_id_card} alt="کارت ملی کارفرما" className="max-w-full h-auto rounded-xl mx-auto shadow-sm" style={{ maxHeight: "250px" }} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* پانویس */}
        <div className="text-center text-[10px] sm:text-xs font-bold text-slate-400 mt-12 md:mt-20 print:mt-auto pt-6 border-t border-slate-100">
          این قرارداد در بستر ابری امن کیادِو ایجاد و کدگذاری شده است.
          <span className="block mt-2 font-mono bg-slate-100 inline-block px-2 sm:px-3 py-1 rounded-md">ID: {contract.id}</span>
        </div>

      </div>
    </div>
  );
}