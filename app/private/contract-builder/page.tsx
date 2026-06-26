"use client";

import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, Copy, FileSignature, Loader2, Eraser, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
// آدرس کامپوننت پیش‌نمایش رو ایمپورت می‌کنیم
import ContractPreview from "@/components/ContractPreview";

export default function ContractBuilderPage() {
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  
  // متغیرهای قرارداد به صورت یک آبجکت مرتب (همین تو دیتابیس ذخیره میشه)
  const [contractData, setContractData] = useState({
    totalAmount: "",
    phase1Amount: "",
    phase2Amount: "",
    phase3Amount: "",
    deliveryDays: "۱۲",
    supportMonths: "۱۲"
  });

  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const sigCanvas = useRef<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setContractData(prev => ({ ...prev, [field]: value }));
  };

  const clearSignature = () => {
    sigCanvas.current?.clear();
  };

  const handleCreateContract = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sigCanvas.current?.isEmpty()) {
      alert("لطفاً قرارداد را امضا کنید!");
      return;
    }
    setIsLoading(true);
    const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    try {
      // ارسال اطلاعات به فیلد جدید JSONB در سوپابیس
      const { data, error } = await supabase.from("official_contracts").insert([
        {
          client_name: clientName,
          project_name: projectName,
          contract_amount: contractData.totalAmount, // برای جستجوی راحت‌تر در دیتابیس
          contract_data: contractData, // ذخیره کل آبجکت JSON
          contractor_signature: signatureImage,
          status: "pending"
        }
      ]).select();

      if (error) throw error;
      if (data && data.length > 0) {
        setGeneratedLink(`${window.location.origin}/agreement/${data[0].id}`);
      }
    } catch (error) {
      console.error(error);
      alert("خطا در ایجاد قرارداد!");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("لینک قرارداد کپی شد!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-400 mb-4 border border-blue-500/20">
            <FileSignature size={32} />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">پنل صدور قرارداد هوشمند | کیا دِو</h1>
        </div>

        {generatedLink ? (
          <div className="max-w-2xl mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 text-center animate-in zoom-in">
            <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">لینک اختصاصی ساخته شد!</h2>
            <div className="flex justify-center gap-3 bg-black/50 p-4 rounded-xl border border-white/10 mb-6 text-blue-400 font-mono" dir="ltr">
              <LinkIcon size={18} /> {generatedLink}
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={copyToClipboard} className="flex gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold">
                <Copy size={20} /> کپی لینک
              </button>
              <Link href={generatedLink.replace(window.location.origin, '')} target="_blank" className="flex gap-2 bg-slate-800 text-white px-6 py-3 rounded-xl font-bold">
                مشاهده قرارداد
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ستون سمت راست: فرم تنظیمات */}
            <form onSubmit={handleCreateContract} className="space-y-6 bg-slate-900 p-8 rounded-[2rem] shadow-2xl h-fit border border-slate-800">
              <div className="bg-blue-900/20 border border-blue-900/50 p-4 rounded-2xl flex flex-wrap gap-4 justify-between items-center text-sm text-blue-200 mb-6">
                <span className="font-bold">پیمانکار: بهادر جدیدالاسلام</span>
                <span className="font-mono">کد ملی: 1741393280</span>
                <span className="font-mono" dir="ltr">0916 803 8017</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">نام کارفرما</label>
                  <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">نام پروژه (مثال: بالکون)</label>
                  <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-800 pt-6">
                <label className="text-sm font-bold text-slate-400">مبلغ کل قرارداد (تومان)</label>
                <input type="text" value={contractData.totalAmount} onChange={(e) => handleInputChange("totalAmount", e.target.value)} placeholder="مثال: ۳۰,۰۰۰,۰۰۰" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-emerald-400 focus:border-emerald-500 outline-none font-bold text-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400">پیش‌پرداخت (فاز ۱)</label>
                  <input type="text" value={contractData.phase1Amount} onChange={(e) => handleInputChange("phase1Amount", e.target.value)} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:border-blue-500 outline-none text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400">تحویل اولیه (فاز ۲)</label>
                  <input type="text" value={contractData.phase2Amount} onChange={(e) => handleInputChange("phase2Amount", e.target.value)} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:border-blue-500 outline-none text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400">تسویه نهایی (فاز ۳)</label>
                  <input type="text" value={contractData.phase3Amount} onChange={(e) => handleInputChange("phase3Amount", e.target.value)} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:border-blue-500 outline-none text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400">زمان تحویل (روز کاری)</label>
                  <input type="text" value={contractData.deliveryDays} onChange={(e) => handleInputChange("deliveryDays", e.target.value)} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:border-blue-500 outline-none text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400">مدت پشتیبانی (ماه)</label>
                  <input type="text" value={contractData.supportMonths} onChange={(e) => handleInputChange("supportMonths", e.target.value)} required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:border-blue-500 outline-none text-sm" />
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-400">امضای پیمانکار (بهادر جدیدالاسلام)</label>
                  <button type="button" onClick={clearSignature} className="text-xs flex gap-1 text-red-400 hover:text-red-300 transition-colors"><Eraser size={14} /> پاک کردن</button>
                </div>
                <div className="bg-white rounded-xl overflow-hidden border-2 border-slate-700">
                  <SignatureCanvas ref={sigCanvas} penColor="blue" canvasProps={{ className: "w-full h-40 cursor-crosshair" }} />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="w-full flex justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all active:scale-95 mt-4 shadow-lg shadow-blue-600/20">
                {isLoading ? <Loader2 className="animate-spin" /> : <FileSignature />}
                ثبت نهایی و دریافت لینک
              </button>
            </form>

            {/* ستون سمت چپ: پیش‌نمایش زنده */}
            <div className="relative h-[800px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="sticky top-0 bg-slate-950/80 backdrop-blur-md z-10 pb-4 mb-4">
                <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  پیش‌نمایش زنده قرارداد
                </h3>
                <p className="text-xs text-slate-400">این دقیقاً همان چیزی است که کارفرما مشاهده خواهد کرد.</p>
              </div>
              <ContractPreview 
                clientName={clientName} 
                projectName={projectName} 
                data={contractData} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}