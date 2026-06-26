"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import SignatureCanvas from "react-signature-canvas";
import { CheckCircle2, Download, Eraser, Loader2, PenTool, FileText, Printer } from "lucide-react";
import Image from "next/image";

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
      alert("لطفاً قرارداد را امضا کنید!");
      return;
    }

    setIsSubmitting(true);
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
      alert("قرارداد با موفقیت امضا و نهایی شد.");
    } catch (error) {
      console.error("خطا در ثبت امضا:", error);
      alert("مشکلی در ثبت امضا پیش آمد.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSignature = () => {
    sigCanvas.current?.clear();
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-100 flex items-center justify-center"><Loader2 className="animate-spin text-blue-600 w-12 h-12" /></div>;
  }

  if (!contract) {
    return <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center text-slate-800">
      <h1 className="text-3xl font-black mb-2">قرارداد یافت نشد!</h1>
      <p>لینک نامعتبر است یا حذف شده.</p>
    </div>;
  }

  // تبدیل تاریخ میلادی دیتابیس به شمسی
  const contractDate = new Date(contract.created_at).toLocaleDateString("fa-IR");

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 print:p-0 print:bg-white text-slate-900 font-sans w-full selection:bg-blue-200" dir="rtl">
      
      {/* استایل‌های اختصاصی برای حذف حاشیه پرینتر و بهینه‌سازی چاپ */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { size: A4; margin: 10mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; }
          .print-hide { display: none !important; }
          .print-shadow-none { box-shadow: none !important; border: none !important; }
        }
      `}} />

      {/* دکمه پرینت (فقط وقتی قرارداد تکمیل شده باشه نمایش داده میشه) */}
      {contract.status === "completed" && (
        <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print-hide w-full bg-emerald-100 text-emerald-800 p-4 rounded-xl border border-emerald-200 shadow-sm">
          <div className="flex items-center gap-2 font-bold">
            <CheckCircle2 className="w-5 h-5" />
            این قرارداد رسماً امضا و نهایی شده است.
          </div>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold shadow-md transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            ذخیره PDF / پرینت
          </button>
        </div>
      )}

      {/* برگه اصلی A4 */}
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white p-6 md:p-12 shadow-2xl print-shadow-none rounded-2xl print:rounded-none w-full relative overflow-hidden">
        
        {/* هدر رسمی */}
        <div className="flex justify-between items-start border-b-2 border-slate-800 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center p-2 shadow-sm shrink-0">
              <img src="/icon.png" alt="لوگو کیادِو" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">قرارداد رسمی توسعه نرم‌افزار</h1>
              <p className="text-slate-500 font-bold text-sm">تیم توسعه و مهندسی نرم‌افزار کیادِو | KiyaDev</p>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 p-3 rounded-xl hidden sm:block">
            <div className="flex justify-between gap-4 mb-2"><span>تاریخ:</span> <span className="font-bold text-slate-900">{contractDate}</span></div>
            <div className="flex justify-between gap-4"><span>شماره:</span> <span className="font-mono text-slate-900 text-xs">{contract.id.split('-')[0].toUpperCase()}</span></div>
          </div>
        </div>

        {/* مشخصات طرفین */}
        <div className="mb-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
            <FileText className="w-5 h-5 text-blue-600" /> مشخصات طرفین
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
            <div>
              <p className="font-black text-blue-700 mb-2">پیمانکار (مجری):</p>
              <p><span className="text-slate-500">نام نماینده:</span> <strong>بهادر جدیدالاسلام</strong></p>
              <p><span className="text-slate-500">سمت:</span> <strong>نماینده رسمی کیا دِو</strong></p>
              <p><span className="text-slate-500">کد ملی:</span> <span className="font-mono">1741393280</span></p>
              <p><span className="text-slate-500">شماره تماس:</span> <span className="font-mono" dir="ltr">0916 803 8017</span></p>
            </div>
            <div>
              <p className="font-black text-blue-700 mb-2">کارفرما:</p>
              <p><span className="text-slate-500">نام شخص / مجموعه:</span> <strong>{contract.client_name}</strong></p>
              <p><span className="text-slate-500">عنوان پروژه:</span> <strong>{contract.project_name}</strong></p>
              <p><span className="text-slate-500">مبلغ قرارداد:</span> <strong>{contract.contract_amount}</strong></p>
            </div>
          </div>
        </div>

        {/* متن اصلی قرارداد */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 inline-block">
            متن و شرایط قرارداد
          </h2>
          {/* کلاس whitespace-pre-wrap باعث میشه تمام اینترها و خطوطی که تو پنلت زدی اینجا دقیقاً همونطور نشون داده بشه */}
          <div className="text-slate-700 text-sm md:text-base leading-[2.2] text-justify whitespace-pre-wrap">
            {contract.contract_text}
          </div>
        </div>

        {/* بخش امضاها */}
        <div className="mt-16 pt-8 border-t-2 border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-4">
            
            {/* امضای شما (همیشه هست) */}
            <div className="w-full md:w-1/2 text-center">
              <p className="font-bold text-slate-800 mb-4">امضای پیمانکار (نماینده کیا دِو)</p>
              <div className="h-40 flex justify-center items-center">
                <img src={contract.contractor_signature} alt="امضای پیمانکار" className="max-h-full mix-blend-multiply" />
              </div>
              <p className="text-xs text-slate-500 mt-2">ثبت شده به صورت دیجیتال</p>
            </div>

            {/* امضای کارفرما */}
            <div className="w-full md:w-1/2 text-center">
              <p className="font-bold text-slate-800 mb-4">امضای کارفرما</p>
              
              {contract.status === "completed" ? (
                // اگر امضا کرده بود، عکس امضاش رو نشون بده
                <div>
                  <div className="h-40 flex justify-center items-center">
                    <img src={contract.client_signature} alt="امضای کارفرما" className="max-h-full mix-blend-multiply" />
                  </div>
                  <p className="text-xs text-slate-500 mt-2">ثبت شده به صورت دیجیتال در سیستم</p>
                </div>
              ) : (
                // اگر امضا نکرده بود، باکس امضا براش باز میشه (موقع پرینت این بخش مخفی میشه)
                <div className="print-hide">
                  <div className="bg-slate-50 rounded-xl overflow-hidden border-2 border-dashed border-blue-300 relative">
                    <SignatureCanvas 
                      ref={sigCanvas}
                      penColor="black"
                      canvasProps={{ className: "w-full h-40 cursor-crosshair" }}
                    />
                    <div className="absolute top-2 right-2 text-xs text-slate-400 pointer-events-none">اینجا امضا کنید...</div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={clearSignature} 
                      className="px-4 py-2 text-xs font-bold text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors flex-1"
                    >
                      <Eraser className="w-4 h-4 inline mr-1" /> پاک کردن
                    </button>
                    <button 
                      onClick={handleClientSign}
                      disabled={isSubmitting}
                      className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex-[2] flex justify-center items-center"
                    >
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <PenTool className="w-4 h-4 inline mr-1" />}
                      تایید و امضای نهایی
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-3 text-justify leading-relaxed">
                    توجه: با فشردن دکمه "تایید و امضای نهایی"، شما به صورت الکترونیکی مفاد این قرارداد را تایید می‌کنید. پس از ثبت، این سند قفل شده و امکان ویرایش آن وجود نخواهد داشت و به عنوان یک سند معتبر قابل استناد است.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* پانویس */}
        <div className="text-center text-[10px] font-bold text-slate-400 mt-16 print:mt-auto pt-8">
          این قرارداد در سامانه امن کیا دِو ثبت گردیده و دارای اعتبار می‌باشد.
          <span className="block mt-1">شناسه یکتای سیستم: {contract.id}</span>
        </div>

      </div>
    </div>
  );
}