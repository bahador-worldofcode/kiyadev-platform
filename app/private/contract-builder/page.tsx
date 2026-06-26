"use client";

import React, { useState, useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, Copy, FileSignature, Loader2, Eraser, Link as LinkIcon, RefreshCw } from "lucide-react";
import Link from "next/link";
import { getContractTemplate } from "@/lib/contractTemplate";

export default function ContractBuilderPage() {
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [contractAmount, setContractAmount] = useState("");
  const [contractText, setContractText] = useState("");
  const [isManuallyEdited, setIsManuallyEdited] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const sigCanvas = useRef<any>(null);

  // تولید خودکار متن قرارداد بر اساس الگو
  useEffect(() => {
    if (!isManuallyEdited) {
      setContractText(getContractTemplate(clientName, projectName, contractAmount));
    }
  }, [clientName, projectName, contractAmount, isManuallyEdited]);

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
      const { data, error } = await supabase.from("official_contracts").insert([
        {
          client_name: clientName,
          project_name: projectName,
          contract_text: contractText,
          contract_amount: contractAmount,
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-400 mb-4 border border-blue-500/20">
            <FileSignature size={32} />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">پنل صدور قرارداد | کیا دِو</h1>
        </div>

        {generatedLink ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 text-center animate-in zoom-in">
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
          <form onSubmit={handleCreateContract} className="space-y-6 bg-slate-900 p-8 rounded-[2rem] shadow-2xl">
            <div className="bg-blue-900/20 border border-blue-900/50 p-4 rounded-2xl flex flex-wrap gap-4 justify-between items-center text-sm text-blue-200 mb-6">
              <span className="font-bold">پیمانکار: بهادر جدیدالاسلام</span>
              <span className="font-mono">کد ملی: 1741393280</span>
              <span className="font-mono" dir="ltr">0916 803 8017</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="نام کارفرما" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
              <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="نام پروژه (مثال: سایت صرافی)" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
            </div>
            <input type="text" value={contractAmount} onChange={(e) => setContractAmount(e.target.value)} placeholder="مبلغ قرارداد (مثال: ۲۰,۰۰۰,۰۰۰ تومان)" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none font-bold" />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-400">متن قرارداد (تولید خودکار):</label>
                {isManuallyEdited && (
                  <button type="button" onClick={() => setIsManuallyEdited(false)} className="text-xs flex gap-1 text-emerald-400 hover:text-emerald-300">
                    <RefreshCw size={14} /> بازگشت به الگوی اصلی
                  </button>
                )}
              </div>
              <textarea 
                rows={12} 
                value={contractText} 
                onChange={(e) => {
                  setContractText(e.target.value);
                  setIsManuallyEdited(true); // اگر دستی دستکاری کنی، دیگه خودکار آپدیت نمیشه
                }} 
                required 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none leading-relaxed resize-none text-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-400">امضای بهادر جدیدالاسلام:</label>
                <button type="button" onClick={clearSignature} className="text-xs flex gap-1 text-red-400"><Eraser size={14} /> پاک کردن</button>
              </div>
              <div className="bg-white rounded-xl overflow-hidden border-2 border-slate-700">
                <SignatureCanvas ref={sigCanvas} penColor="blue" canvasProps={{ className: "w-full h-40 cursor-crosshair" }} />
              </div>
            </div>

            <button type="submit" disabled={isLoading} className="w-full flex justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all active:scale-95">
              {isLoading ? <Loader2 className="animate-spin" /> : <FileSignature />}
              ایجاد قرارداد و لینک امضا
            </button>
          </form>
        )}
      </div>
    </div>
  );
}