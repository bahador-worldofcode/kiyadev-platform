"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Phone, Send, MessageCircle, CheckCircle, ArrowLeft, 
  Code, Database, Bot, Globe, Smartphone, Cpu, 
  User, FileText, Smartphone as MobileIcon 
} from "lucide-react";

// ----------------------------------------------------------------------
// Types & Interfaces
// ----------------------------------------------------------------------

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string; 
}

interface ServiceCategory {
  id: string;
  label: string;
  icon: any;
}

// ----------------------------------------------------------------------
// Constants & Data
// ----------------------------------------------------------------------

const serviceCategories: ServiceCategory[] = [
  { id: "saas", label: "پلتفرم SaaS و CRM", icon: Database },
  { id: "shop", label: "فروشگاه اختصاصی", icon: Globe },
  { id: "pwa", label: "وب‌اپلیکیشن (PWA)", icon: Smartphone },
  { id: "blockchain", label: "بلاکچین و Web3", icon: Code },
  { id: "ai", label: "هوش مصنوعی (AI)", icon: Cpu },
  { id: "telegram", label: "ربات تلگرام", icon: Bot },
  { id: "consult", label: "مشاوره و دیباگ", icon: MessageCircle },
  { id: "other", label: "ایده خاص / سایر", icon: Send },
];

const defaultMessages: Record<string, string> = {
  "other": "سلام تیم کیا دِو،\nمن قصد سفارش پکیج «لندینگ پیج / استارت» را دارم.\nلطفاً راهنمایی کنید.",
  "shop": "سلام تیم کیا دِو،\nمن قصد سفارش پکیج «سایت شرکتی / فروشگاهی» را دارم.\nلطفاً راهنمایی کنید.",
  "pwa": "سلام تیم کیا دِو،\nمن قصد سفارش پکیج «پلتفرم اختصاصی (App)» را دارم.\nلطفاً در مورد هزینه‌ها و زمان‌بندی راهنمایی کنید.",
};

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------

export default function ProjectModal({ isOpen, onClose, defaultCategory }: ProjectModalProps) {
  const [formStep, setFormStep] = useState<"start" | "success">("start");
  
  const [selectedService, setSelectedService] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (defaultCategory) {
        setSelectedService(defaultCategory);
        if (defaultMessages[defaultCategory]) {
          setDescription(defaultMessages[defaultCategory]);
        }
      } else {
        resetForm();
      }
    }
  }, [isOpen, defaultCategory]);

  const resetForm = () => {
    setSelectedService("");
    setFullName("");
    setContactNumber("");
    setDescription("");
    setFormStep("start");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-colors"
        >
          {/* FIX: 
             1. max-h-[90vh]: ارتفاع حداکثر 90 درصد صفحه
             2. overflow-hidden: جلوگیری از بیرون زدن محتوا از گردی‌ها
             3. flex flex-col md:flex-row: ساختار منعطف
          */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#0f172a] border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden ${
              formStep === "success" ? "md:max-w-lg" : ""
            }`}
          >
            {/* دکمه بستن */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 z-50 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5"
            >
              <X size={20} />
            </button>

            {/* سایدبار (در موبایل مخفی) */}
            {formStep === "start" && (
              <div className="hidden md:flex w-1/3 bg-blue-600 p-8 text-white flex-col justify-between relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-3xl font-black mb-3 tracking-tight">مسیر سریع ⚡</h3>
                    <p className="text-blue-100 text-sm leading-relaxed opacity-90 font-medium">
                      حوصله پر کردن فرم را ندارید؟ <br/>
                      همین الان مستقیم با مدیر فنی صحبت کنید.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a href="tel:09168038017" className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 shadow-lg cursor-pointer">
                      <div className="p-2.5 bg-white text-blue-600 rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                        <Phone size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-blue-100 uppercase tracking-wider font-bold">تماس تلفنی</span>
                        <span className="font-mono font-black text-lg tracking-wide" dir="ltr">0916 803 8017</span>
                      </div>
                    </a>

                    <a href="https://t.me/Kioto_Osano" target="_blank" className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 shadow-lg cursor-pointer">
                      <div className="p-2.5 bg-white text-blue-500 rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                        <Send size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-blue-100 uppercase tracking-wider font-bold">تلگرام</span>
                        <span className="font-bold text-sm">ارسال پیام مستقیم</span>
                      </div>
                    </a>

                    <a href="https://wa.me/989168038017" target="_blank" className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 shadow-lg cursor-pointer">
                      <div className="p-2.5 bg-white text-green-500 rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                        <MessageCircle size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-blue-100 uppercase tracking-wider font-bold">واتساپ</span>
                        <span className="font-bold text-sm">چت آنلاین</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-3 text-xs font-bold text-blue-100 bg-black/20 p-3 rounded-xl backdrop-blur-sm border border-white/10 mt-auto">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  پاسخگویی میانگین: زیر ۳۰ دقیقه
                </div>
              </div>
            )}

            {/* FIX: 
               overflow-y-auto: اسکرول فقط برای این بخش فعال شده
               h-full: ارتفاع کامل را می‌گیرد تا اسکرول کار کند
            */}
            <div className={`w-full bg-[#0f172a] overflow-y-auto custom-scrollbar ${formStep === "start" ? "md:w-2/3 p-6 md:p-10" : "w-full p-10"}`}>
              {formStep === "start" ? (
                <div className="space-y-8">
                  <div className="text-right border-b border-white/5 pb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Code className="text-blue-500" />
                      پیکربندی پروژه
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      لطفاً نوع خدمت مورد نظر را انتخاب کنید. اگر از بخش تعرفه‌ها آمده‌اید، پکیج شما به صورت خودکار انتخاب شده است.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="text-xs font-bold text-gray-500 mb-3 block px-1">نوع سرویس درخواستی:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {serviceCategories.map((cat) => (
                          <label key={cat.id} className="cursor-pointer group relative">
                            <input 
                              type="radio" 
                              name="category" 
                              value={cat.id} 
                              checked={selectedService === cat.id}
                              className="peer sr-only" 
                              onChange={(e) => setSelectedService(e.target.value)}
                            />
                            <div className="h-full flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-200 
                              peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                              hover:bg-white/10 hover:border-white/20">
                              <cat.icon className={`w-6 h-6 transition-colors duration-200 ${selectedService === cat.id ? "text-blue-400" : "text-gray-400 group-hover:text-white"}`} />
                              <span className={`text-[11px] font-bold transition-colors duration-200 ${selectedService === cat.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                                {cat.label}
                              </span>
                            </div>
                            {selectedService === cat.id && (
                              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-0.5 shadow-lg animate-in zoom-in">
                                <CheckCircle size={14} />
                              </div>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400 mr-1 flex items-center gap-1">
                          <User size={14} /> نام و نام خانوادگی
                        </label>
                        <input 
                          type="text" 
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="مثال: علی محمدی"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-black/60 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400 mr-1 flex items-center gap-1">
                          <MobileIcon size={14} /> شماره تماس (واتساپ)
                        </label>
                        <input 
                          type="tel" 
                          dir="ltr"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                          placeholder="0912..." 
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-right placeholder-gray-600 focus:border-blue-500 focus:bg-black/60 focus:ring-1 focus:ring-blue-500 transition-all outline-none font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 mr-1 flex items-center gap-1">
                        <FileText size={14} /> توضیحات تکمیلی پروژه
                      </label>
                      <textarea 
                        rows={4}
                        placeholder="کمی درباره ایده، فیچرها یا نمونه‌های مشابه بنویسید..." 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-black/60 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none leading-relaxed"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={!selectedService}
                      className="group w-full bg-white text-black font-black text-lg py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                      ثبت درخواست نهایی
                      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                    <div className="relative w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-full flex items-center justify-center mb-8 shadow-2xl border-4 border-[#0f172a]">
                      <CheckCircle size={56} className="drop-shadow-md" />
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tight">درخواست شما ثبت شد!</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mb-6"></div>
                  
                  <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md mx-auto">
                    اطلاعات پروژه شما با موفقیت به دپارتمان فنی کیا دِو ارسال شد. <br/>
                    <span className="text-green-400 font-bold block mt-2">منتظر تماس ما در کمتر از ۳۰ دقیقه باشید.</span>
                  </p>
                  
                  <button 
                    onClick={handleClose}
                    className="px-12 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/30 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
                  >
                    بازگشت به سایت
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}