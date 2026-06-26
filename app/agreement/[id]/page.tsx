"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import SignatureCanvas from "react-signature-canvas";
import { CheckCircle2, Eraser, Loader2, PenTool, FileText, Printer, ShieldCheck } from "lucide-react";

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
        <p className="text-slate-500 font-bold" style={{ fontFamily: '"Vazirmatn", sans-serif' }}>در حال بارگذاری قرارداد امن...</p>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center text-slate-800" style={{ fontFamily: '"Vazirmatn", sans-serif' }}>
        <h1 className="text-3xl font-black mb-2 text-red-600">قرارداد یافت نشد!</h1>
        <p className="font-bold text-slate-500">لینک نامعتبر است یا قرارداد از سیستم حذف شده است.</p>
      </div>
    );
  }

  // تبدیل تاریخ میلادی دیتابیس به شمسی
  const contractDate = new Date(contract.created_at).toLocaleDateString("fa-IR");

  // چک کردن اینکه آیا از دیتای JSON جدید استفاده شده یا ساختار قدیمی
  const contractData = contract.contract_data || {
    totalAmount: contract.contract_amount,
    phase1Amount: "۰",
    phase2Amount: "۰",
    phase3Amount: "۰",
    deliveryDays: "۰",
    supportMonths: "۱۲"
  };

  return (
    <div className="min-h-screen bg-slate-200 py-8 px-4 print:p-0 print:bg-white text-slate-900 selection:bg-blue-200" dir="rtl" style={{ fontFamily: '"Vazirmatn", "IRANSans", "Tahoma", sans-serif' }}>
      
      {/* استایل‌های اختصاصی برای حذف حاشیه پرینتر و بهینه‌سازی چاپ */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { size: A4; margin: 10mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; }
          .print-hide { display: none !important; }
          .print-shadow-none { box-shadow: none !important; border: none !important; }
        }
      `}} />

      {/* نوار وضعیت بالای صفحه */}
      {contract.status === "completed" && (
        <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print-hide w-full bg-emerald-100 text-emerald-800 p-5 rounded-2xl border-2 border-emerald-300 shadow-lg">
          <div className="flex items-center gap-3 font-black text-lg">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            این قرارداد رسماً امضا و در سیستم حقوقی ثبت نهایی شده است.
          </div>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all active:scale-95"
          >
            <Printer className="w-5 h-5" />
            پرینت / ذخیره PDF
          </button>
        </div>
      )}

      {/* برگه اصلی A4 */}
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white p-6 md:p-14 shadow-2xl print-shadow-none rounded-[2rem] print:rounded-none w-full relative overflow-hidden border border-slate-100">
        
        {/* هدر رسمی */}
        <div className="flex justify-between items-start border-b-4 border-slate-800 pb-6 mb-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center p-3 shadow-md shrink-0">
              <img src="/icon.png" alt="لوگو کیادِو" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">قرارداد رسمی توسعه نرم‌افزار</h1>
              <p className="text-slate-600 font-bold text-base tracking-wide">تیم توسعه و مهندسی نرم‌افزار کیادِو | KiyaDev</p>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-700 bg-slate-100 border-2 border-slate-200 p-4 rounded-2xl hidden sm:block min-w-[180px]">
            <div className="flex justify-between gap-4 mb-3 border-b border-slate-200 pb-2"><span>تاریخ:</span> <span className="font-bold text-slate-900">{contractDate}</span></div>
            <div className="flex justify-between gap-4"><span>شماره:</span> <span className="font-mono text-slate-900 font-bold">{contract.id.split('-')[0].toUpperCase()}</span></div>
          </div>
        </div>

        {/* محتوای قرارداد که از تمپلیت خونده میشه */}
        <div className="mb-16">
          <ContractContent 
            clientName={contract.client_name} 
            projectName={contract.project_name} 
            data={contractData} 
          />
        </div>

        {/* بخش امضاها */}
        <div className="mt-20 pt-10 border-t-2 border-dashed border-slate-300 print:break-inside-avoid">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 px-2">
            
            {/* امضای شما (کیا دِو) */}
            <div className="w-full md:w-1/2 text-center bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <p className="font-black text-lg text-slate-800 mb-6">امضای مجری (نماینده کیا دِو)</p>
              <div className="h-48 flex justify-center items-center">
                {contract.contractor_signature ? (
                  <img src={contract.contractor_signature} alt="امضای پیمانکار" className="max-h-full mix-blend-multiply drop-shadow-md" />
                ) : (
                  <span className="text-slate-400">امضا یافت نشد</span>
                )}
              </div>
              <p className="text-sm font-bold text-emerald-600 mt-4 flex justify-center items-center gap-1">
                <CheckCircle2 size={16} /> تایید شده سیستم
              </p>
            </div>

            {/* امضای کارفرما */}
            <div className="w-full md:w-1/2 text-center bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <p className="font-black text-lg text-slate-800 mb-6">امضای کارفرما</p>
              
              {contract.status === "completed" ? (
                // حالت تایید شده
                <div>
                  <div className="h-48 flex justify-center items-center">
                    <img src={contract.client_signature} alt="امضای کارفرما" className="max-h-full mix-blend-multiply drop-shadow-md" />
                  </div>
                  <p className="text-sm font-bold text-emerald-600 mt-4 flex justify-center items-center gap-1">
                    <CheckCircle2 size={16} /> ثبت دیجیتال و نهایی شده
                  </p>
                </div>
              ) : (
                // حالت نیاز به امضا
                <div className="print-hide">
                  <div className="bg-white rounded-2xl overflow-hidden border-2 border-dashed border-blue-400 relative shadow-inner focus-within:border-blue-600 transition-colors">
                    {/* کادر امضای بلند و قفل شده برای جلوگیری از اسکرول گوشی */}
                    <SignatureCanvas 
                      ref={sigCanvas}
                      penColor="#0f172a"
                      canvasProps={{ className: "w-full h-72 md:h-80 cursor-crosshair touch-none" }}
                    />
                    <div className="absolute top-3 right-3 text-sm font-bold text-slate-300 pointer-events-none">لطفاً اینجا امضا کنید...</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button 
                      onClick={clearSignature} 
                      className="px-5 py-3 text-sm font-bold text-red-500 bg-red-100 hover:bg-red-200 rounded-xl transition-colors w-full sm:w-auto flex justify-center items-center"
                    >
                      <Eraser className="w-5 h-5 inline mr-1" /> پاک کردن
                    </button>
                    <button 
                      onClick={handleClientSign}
                      disabled={isSubmitting}
                      className="px-5 py-3 text-base font-black text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/30 w-full flex justify-center items-center flex-1 active:scale-95"
                    >
                      {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <PenTool className="w-6 h-6 inline mr-2" />}
                      تایید و ثبت نهایی قرارداد
                    </button>
                  </div>
                  <p className="text-[11px] font-bold text-slate-500 mt-4 text-justify leading-relaxed">
                    توجه: با فشردن دکمه ثبت نهایی، شما مفاد این قرارداد را به صورت الکترونیکی تایید می‌کنید. پس از ثبت، این سند به عنوان یک نسخه معتبر در سیستم ذخیره شده و قابل استناد می‌باشد.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* پانویس */}
        <div className="text-center text-xs font-bold text-slate-400 mt-20 print:mt-auto pt-6 border-t border-slate-100">
          این قرارداد در بستر ابری امن کیادِو ایجاد و کدگذاری شده است.
          <span className="block mt-2 font-mono bg-slate-100 inline-block px-3 py-1 rounded-md">ID: {contract.id}</span>
        </div>

      </div>
    </div>
  );
}