"use client";

import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, Copy, FileSignature, Loader2, Eraser, Link as LinkIcon, Upload } from "lucide-react";
import Link from "next/link";
import ContractPreview from "@/components/ContractPreview";

// توابع کمکی برای فرمت کردن ورودی‌های لحظه‌ای ادمین
const toPersianDigits = (num: string | number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
};

const formatInputValue = (val: string) => {
  if (!val) return "";
  const raw = val.replace(/,/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString()).replace(/\D/g, '');
  if (!raw) return "";
  const formattedWithCommas = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return toPersianDigits(formattedWithCommas);
};

export default function ContractBuilderPage() {
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("بالکن");
  
  // متغیرهای قرارداد آپدیت شد (اطلاعات هویتی جدید بهش اضافه شد)
  const [contractData, setContractData] = useState({
    totalAmount: "",
    phase1Amount: "",
    phase2Amount: "",
    phase3Amount: "",
    deliveryDays: "۲۰",
    supportMonths: "۱۲",
    clientNationalId: "",
    clientPhone: "",
    clientAddress: "",
    clientPostalCode: ""
  });

  // استیت‌های مربوط به آپلود فایل‌های کارت ملی
  const [contractorIdFile, setContractorIdFile] = useState<File | null>(null);
  const [clientIdFile, setClientIdFile] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const sigCanvas = useRef<any>(null);

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('Amount')) {
      setContractData(prev => ({ ...prev, [field]: formatInputValue(value) }));
    } else if (field === 'deliveryDays' || field === 'supportMonths') {
      const raw = value.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString()).replace(/\D/g, '');
      setContractData(prev => ({ ...prev, [field]: toPersianDigits(raw) }));
    } else {
      // برای فیلدهای متنی جدید (آدرس، کدملی و...) نیازی به فرمت عدد نیست
      setContractData(prev => ({ ...prev, [field]: value }));
    }
  };

  const clearSignature = () => {
    sigCanvas.current?.clear();
  };

  // تابع آپلود فایل در سوپابیس و دریافت لینک
  const uploadFileToStorage = async (file: File, folderName: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folderName}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('contracts_attachments')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('contracts_attachments')
      .getPublicUrl(filePath);

    return data.publicUrl;
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
      // ۱. آپلود فایل‌ها فقط در صورت انتخاب شدن
      const contractorIdUrl = contractorIdFile ? await uploadFileToStorage(contractorIdFile, 'contractor_ids') : null;
      const clientIdUrl = clientIdFile ? await uploadFileToStorage(clientIdFile, 'client_ids') : null;

      // ۲. ثبت اطلاعات در دیتابیس
      const { data, error } = await supabase.from("official_contracts").insert([
        {
          client_name: clientName,
          project_name: projectName,
          contract_amount: contractData.totalAmount, 
          contract_data: contractData, 
          contractor_signature: signatureImage,
          contractor_id_card: contractorIdUrl, // اگر آپلود نشده باشه null میره
          client_id_card: clientIdUrl, // اگر آپلود نشده باشه null میره
          status: "pending"
        }
      ]).select();

      if (error) throw error;
      if (data && data.length > 0) {
        setGeneratedLink(`${window.location.origin}/agreement/${data[0].id}`);
      }
    } catch (error) {
      console.error(error);
      alert("خطا در ایجاد قرارداد یا آپلود فایل‌ها! لطفاً اتصال اینترنت را چک کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("لینک قرارداد کپی شد!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 font-sans" dir="rtl" style={{ fontFamily: '"Vazirmatn", "IRANSans", "Tahoma", sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-400 mb-4 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <FileSignature size={32} />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">پنل صدور قرارداد هوشمند | کیا دِو</h1>
          <Link href="/private/contracts" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
            مشاهده لیست قراردادها و مدیریت وضعیت آن‌ها
          </Link>
        </div>

        {generatedLink ? (
          <div className="max-w-2xl mx-auto bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 text-center animate-in zoom-in">
            <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">لینک اختصاصی ساخته شد!</h2>
            <div className="flex justify-center gap-3 bg-black/50 p-4 rounded-xl border border-white/10 mb-6 text-emerald-400 font-mono text-lg" dir="ltr">
              <LinkIcon size={20} /> {generatedLink}
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={copyToClipboard} className="flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all">
                <Copy size={20} /> کپی لینک
              </button>
              <Link href={generatedLink.replace(window.location.origin, '')} target="_blank" className="flex gap-2 items-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all border border-slate-700">
                مشاهده زنده
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* ستون سمت راست: فرم تنظیمات */}
            <form onSubmit={handleCreateContract} className="space-y-6 bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl h-fit border border-slate-800">
              
              {/* اطلاعات ثابت پیمانکار */}
              <div className="bg-gradient-to-l from-blue-900/30 to-slate-900/30 border border-blue-900/50 p-5 rounded-2xl flex flex-col gap-3 text-sm text-blue-200 mb-8">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <span className="font-bold text-base">پیمانکار: بهادر جدیدالاسلام (کیا دِو)</span>
                  <span className="font-mono bg-black/30 px-3 py-1 rounded-lg border border-white/5">کد ملی: ۱۷۴۱۳۹۳۲۸۰</span>
                  <span className="font-mono bg-black/30 px-3 py-1 rounded-lg border border-white/5" dir="ltr">0916 803 8017</span>
                </div>
                <div className="text-xs text-blue-300 border-t border-blue-900/50 pt-2 mt-1">
                  <span className="font-bold">آدرس پیمانکار:</span> تهران، میدان فاطمی، پایین‌تر از میدان جهاد، خیابان غفاری، پلاک ۳۲
                </div>
              </div>

              {/* اطلاعات پروژه */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-800/80 pb-6">
                <div className="space-y-2.5">
                  <label className="text-sm font-bold text-slate-300">نام پروژه (مثال: بالکن)</label>
                  <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-sm font-bold text-slate-300">مبلغ کل قرارداد (تومان)</label>
                  <input type="text" value={contractData.totalAmount} onChange={(e) => handleInputChange("totalAmount", e.target.value)} required className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3.5 text-emerald-400 focus:border-emerald-500 outline-none font-black text-xl transition-all text-center tracking-wider" dir="ltr" />
                </div>
              </div>

              {/* بخش جدید: اطلاعات هویتی کارفرما */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  اطلاعات هویتی کارفرما
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400">نام شخص / مجموعه</label>
                    <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:border-blue-500 outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400">کد ملی / شناسه ملی</label>
                    <input type="text" value={contractData.clientNationalId} onChange={(e) => handleInputChange("clientNationalId", e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:border-blue-500 outline-none text-sm font-mono text-left" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400">شماره تماس (الزامی)</label>
                    <input type="text" value={contractData.clientPhone} onChange={(e) => handleInputChange("clientPhone", e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:border-blue-500 outline-none text-sm font-mono text-left" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400">کد پستی (اختیاری)</label>
                    <input type="text" value={contractData.clientPostalCode} onChange={(e) => handleInputChange("clientPostalCode", e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:border-blue-500 outline-none text-sm font-mono text-left" dir="ltr" />
                  </div>
                </div>
                <div className="space-y-2 border-b border-slate-800/80 pb-6">
                  <label className="text-xs font-bold text-slate-400">آدرس دقیق کارفرما</label>
                  <textarea value={contractData.clientAddress} onChange={(e) => handleInputChange("clientAddress", e.target.value)} required rows={2} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:border-blue-500 outline-none text-sm resize-none"></textarea>
                </div>
              </div>

              {/* بخش جدید: آپلود کارت ملی (اکنون اختیاری است) */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  مدارک هویتی (آپلود تصویر کارت ملی - اختیاری)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-slate-800/80 pb-6">
                  <div className="bg-slate-950/50 border border-slate-700 border-dashed rounded-xl p-4 text-center hover:border-blue-500 transition-colors cursor-pointer relative">
                    <input type="file" accept="image/*" onChange={(e) => setContractorIdFile(e.target.files?.[0] || null)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Upload className="mx-auto text-slate-500 mb-2 w-6 h-6" />
                    <p className="text-xs font-bold text-slate-300">کارت ملی پیمانکار (شما)</p>
                    <p className="text-[10px] text-emerald-400 mt-1 truncate">{contractorIdFile ? contractorIdFile.name : "انتخاب فایل..."}</p>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-700 border-dashed rounded-xl p-4 text-center hover:border-blue-500 transition-colors cursor-pointer relative">
                    <input type="file" accept="image/*" onChange={(e) => setClientIdFile(e.target.files?.[0] || null)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <Upload className="mx-auto text-slate-500 mb-2 w-6 h-6" />
                    <p className="text-xs font-bold text-slate-300">کارت ملی کارفرما (مشتری)</p>
                    <p className="text-[10px] text-emerald-400 mt-1 truncate">{clientIdFile ? clientIdFile.name : "انتخاب فایل..."}</p>
                  </div>
                </div>
              </div>

              {/* مبالغ فازها و زمان‌بندی */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400">پیش‌پرداخت (فاز ۱)</label>
                  <input type="text" value={contractData.phase1Amount} onChange={(e) => handleInputChange("phase1Amount", e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:border-blue-500 outline-none text-center font-bold tracking-wide" dir="ltr" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400">تحویل اولیه (فاز ۲)</label>
                  <input type="text" value={contractData.phase2Amount} onChange={(e) => handleInputChange("phase2Amount", e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:border-blue-500 outline-none text-center font-bold tracking-wide" dir="ltr" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400">تسویه نهایی (فاز ۳)</label>
                  <input type="text" value={contractData.phase3Amount} onChange={(e) => handleInputChange("phase3Amount", e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:border-blue-500 outline-none text-center font-bold tracking-wide" dir="ltr" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b border-slate-800/80 pb-6">
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400">زمان تحویل (روز کاری)</label>
                  <input type="text" value={contractData.deliveryDays} onChange={(e) => handleInputChange("deliveryDays", e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:border-blue-500 outline-none text-center font-bold text-lg" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-slate-400">مدت پشتیبانی (ماه)</label>
                  <input type="text" value={contractData.supportMonths} onChange={(e) => handleInputChange("supportMonths", e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:border-blue-500 outline-none text-center font-bold text-lg" />
                </div>
              </div>

              {/* بخش امضا - کادر یکسان با صفحه نهایی قرارداد */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-300">امضای رسمی مجری (بهادر جدیدالاسلام)</label>
                  <button type="button" onClick={clearSignature} className="text-xs flex gap-1.5 items-center text-red-400 hover:text-red-300 transition-colors bg-red-500/10 px-3 py-1.5 rounded-lg font-bold"><Eraser size={14} /> پاک کردن امضا</button>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-dashed border-slate-400 focus-within:border-blue-500 transition-colors relative shadow-inner">
                  <SignatureCanvas ref={sigCanvas} penColor="#1e3a8a" canvasProps={{ className: "w-full h-56 sm:h-64 md:h-72 cursor-crosshair touch-none" }} />
                  <div className="absolute top-3 right-4 text-xs sm:text-sm font-bold text-slate-300 pointer-events-none">امضای خود را در این کادر ثبت کنید...</div>
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4.5 rounded-xl font-black text-lg hover:from-blue-700 hover:to-blue-600 transition-all active:scale-[0.98] mt-4 shadow-[0_10px_20px_rgba(37,99,235,0.2)]">
                {isLoading ? <Loader2 className="animate-spin" size={24} /> : <FileSignature size={24} />}
                {isLoading ? "در حال ثبت..." : "ثبت حقوقی قرارداد و دریافت لینک"}
              </button>
            </form>

            {/* ستون سمت چپ: پیش‌نمایش زنده */}
            <div className="relative h-[850px] overflow-y-auto pr-3 custom-scrollbar rounded-2xl">
              <div className="sticky top-0 bg-slate-950/90 backdrop-blur-md z-10 pb-4 mb-4 pt-2 border-b border-slate-800">
                <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  پیش‌نمایش زنده قرارداد کارفرما
                </h3>
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
