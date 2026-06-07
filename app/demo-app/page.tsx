"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Store, AlertTriangle, BellRing, Watch, Headphones, Keyboard, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DemoAppPage() {
  const [storeData, setStoreData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ۱. دریافت اطلاعات اولیه هنگام باز شدن صفحه
    const fetchInitialData = async () => {
      const { data, error } = await supabase
        .from("demo_store")
        .select("*")
        .eq("id", 1)
        .single();
        
      if (data) setStoreData(data);
      setLoading(false);
    };

    fetchInitialData();

    // ۲. اتصال زنده (Real-time) به دیتابیس
    const channel = supabase
      .channel("realtime-demo")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "demo_store" },
        (payload) => {
          console.log("تغییرات جدید دریافت شد:", payload.new);
          setStoreData(payload.new);
        }
      )
      .subscribe();

    // پاکسازی اتصال هنگام خروج از صفحه
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono">در حال اتصال به هسته مرکزی...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden font-sans">
      
      {/* بک‌گراند */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* هدر صفحه */}
        <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors text-sm">
              <ArrowRight className="w-4 h-4" />
              بازگشت
            </Link>
            <h1 className="text-3xl md:text-5xl font-black flex items-center gap-3 text-white">
              <Store className="text-blue-500 w-10 h-10" />
              فروشگاه زنده <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">KiyaDev</span>
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl text-sm font-bold">
            <ShieldCheck className="w-4 h-4" />
            اتصال Real-time فعال است
          </div>
        </div>

        {/* ================================================= */}
        {/* بخش اول: هشدار بسته بودن فروشگاه (تغییر با اپلیکیشن) */}
        {/* ================================================= */}
        <AnimatePresence>
          {!storeData?.is_store_open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="mb-8"
            >
              <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-3xl flex items-center gap-4 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                <div className="bg-red-500/20 p-3 rounded-full text-red-500 animate-pulse">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-red-500 mb-1">فروشگاه موقتاً بسته است!</h2>
                  <p className="text-red-200/70 text-sm">مدیریت سایت در حال حاضر فروشگاه را غیرفعال کرده است. امکان خرید وجود ندارد.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================================================= */}
        {/* بخش دوم: پاپ‌آپ / اطلاعیه زنده (ویژگی جذاب سوم) */}
        {/* ================================================= */}
        <AnimatePresence>
          {storeData?.announcement && storeData.announcement.trim() !== "" && (
            <motion.div
              key={storeData.announcement} // با تغییر متن، انیمیشن دوباره اجرا می‌شود
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-10"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-1 relative overflow-hidden shadow-2xl shadow-indigo-500/20">
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 relative z-10">
                  <BellRing className="text-yellow-400 w-6 h-6 animate-bounce" />
                  <p className="text-white font-bold text-sm md:text-base tracking-wide">
                    {storeData.announcement}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================================================= */}
        {/* بخش سوم: محصولات با قیمت‌های زنده */}
        {/* ================================================= */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-opacity duration-500 ${!storeData?.is_store_open ? 'opacity-50 grayscale pointer-events-none' : 'opacity-100'}`}>
          
          {/* محصول ۱ */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Watch className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ساعت هوشمند اولترا</h3>
            <p className="text-slate-400 text-sm mb-6">سنسور ضربان قلب، ضد آب، باتری ۷ روزه</p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
              <span className="text-xs text-slate-500">قیمت زنده:</span>
              <motion.span 
                key={storeData?.price_1}
                initial={{ color: "#10b981", scale: 1.2 }}
                animate={{ color: "#ffffff", scale: 1 }}
                className="text-2xl font-bold"
              >
                {storeData?.price_1?.toLocaleString()} <span className="text-xs text-slate-400 font-normal">تومان</span>
              </motion.span>
            </div>
          </div>

          {/* محصول ۲ */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
              <Headphones className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">هدفون نویز کنسلینگ</h3>
            <p className="text-slate-400 text-sm mb-6">بیس فوق‌العاده، بلوتوث ۵.۳، صدای ۳۶۰ درجه</p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
              <span className="text-xs text-slate-500">قیمت زنده:</span>
              <motion.span 
                key={storeData?.price_2}
                initial={{ color: "#10b981", scale: 1.2 }}
                animate={{ color: "#ffffff", scale: 1 }}
                className="text-2xl font-bold"
              >
                {storeData?.price_2?.toLocaleString()} <span className="text-xs text-slate-400 font-normal">تومان</span>
              </motion.span>
            </div>
          </div>

          {/* محصول ۳ */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-6">
              <Keyboard className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">کیبورد مکانیکال RGB</h3>
            <p className="text-slate-400 text-sm mb-6">سوئیچ‌های آبی، بدنه آلومینیوم، مخصوص گیمرها</p>
            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
              <span className="text-xs text-slate-500">قیمت زنده:</span>
              <motion.span 
                key={storeData?.price_3}
                initial={{ color: "#10b981", scale: 1.2 }}
                animate={{ color: "#ffffff", scale: 1 }}
                className="text-2xl font-bold"
              >
                {storeData?.price_3?.toLocaleString()} <span className="text-xs text-slate-400 font-normal">تومان</span>
              </motion.span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}