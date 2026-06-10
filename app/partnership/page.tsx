"use client";

import { motion } from "framer-motion";
import { Handshake, Percent, Target, ShieldCheck, Wallet, Phone, Send, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Navigation & Header */}
        <div className="text-center mb-20 border-b border-white/10 pb-12 relative">
          <Link href="/" className="absolute right-0 top-0 hidden md:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <ArrowRight className="w-4 h-4" />
            بازگشت
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-yellow-500/10 text-yellow-500 mb-6 border border-yellow-500/20"
          >
            <Handshake className="w-10 h-10" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            نماینده رسمی <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">کیا دِو</span> شوید
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            بدون نیاز به دانش برنامه‌نویسی، یک تجارت پرسود را آغاز کنید. مشتری را معرفی کنید، قرارداد را ما می‌بندیم و <strong className="text-yellow-400 font-bold">۵۰٪ سود خالص</strong> مستقیم به حساب شما واریز می‌شود.
          </motion.p>
        </div>

        {/* Why Join Us? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-colors text-center">
            <div className="w-14 h-14 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6"><Percent className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold mb-3">بالاترین نرخ پورسانت</h3>
            <p className="text-gray-400 text-sm leading-relaxed">با دریافت نیمی از سود پروژه‌ها (۵۰٪)، درآمدی فراتر از حقوق‌های کارمندی و بازاریابی‌های معمول را تجربه کنید.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors text-center">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold mb-3">کیفیت تضمین‌شده</h3>
            <p className="text-gray-400 text-sm leading-relaxed">شما محصولی را می‌فروشید که به آن افتخار می‌کنید. پلتفرم‌های کیا دِو با جدیدترین تکنولوژی‌های جهانی مهندسی شده‌اند.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors text-center">
            <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"><Wallet className="w-6 h-6" /></div>
            <h3 className="text-xl font-bold mb-3">تسویه حساب آنی</h3>
            <p className="text-gray-400 text-sm leading-relaxed">به محض واریز پیش‌پرداخت توسط مشتری، سهم شما در همان لحظه و بدون هیچ‌گونه تاخیری به حسابتان واریز می‌شود.</p>
          </motion.div>
        </div>

        {/* How it works */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Target className="text-red-500" />
              مسیر درآمدزایی چگونه است؟
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="flex-1 text-center relative">
              <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black border-4 border-black z-10 relative">۱</div>
              <h4 className="text-xl font-bold mb-3 text-white">معرفی مشتری</h4>
              <p className="text-gray-400 text-sm">مشتریان بالقوه (فروشگاه‌ها، شرکت‌ها، پزشکان و...) در شهر خود را پیدا کرده و با استفاده از کاتالوگ ما، خدمات را معرفی می‌کنید.</p>
              <div className="hidden md:block absolute top-8 -left-1/2 w-full h-[2px] bg-gradient-to-l from-gray-800 to-transparent z-0"></div>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black border-4 border-black z-10 relative">۲</div>
              <h4 className="text-xl font-bold mb-3 text-white">جلسه و مشاوره فنی</h4>
              <p className="text-gray-400 text-sm">شما شماره مشتری را به تیم فنی ما ارجاع می‌دهید. ما از طرف شما با مشتری مذاکره کرده و تمام سوالات تخصصی را پاسخ می‌دهیم.</p>
              <div className="hidden md:block absolute top-8 -left-1/2 w-full h-[2px] bg-gradient-to-l from-gray-800 to-transparent z-0"></div>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black border-4 border-black z-10 relative shadow-[0_0_20px_rgba(234,179,8,0.4)]">۳</div>
              <h4 className="text-xl font-bold mb-3 text-yellow-400">عقد قرارداد و دریافت سود</h4>
              <p className="text-gray-400 text-sm">پس از عقد قرارداد رسمی، ۵۰ درصد از سود خالص پروژه در همان روز کاری به عنوان کمیسیون برای شما واریز می‌گردد.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">آماده‌ی شروع همکاری هستید؟</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">برای دریافت راهنمایی‌های کامل، فایل کاتالوگ‌های اختصاصی و ثبت‌نام در لیست نمایندگان رسمی کیا دِو، از طریق راه‌های زیر با مدیریت مجموعه در ارتباط باشید.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:09168038017" className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all active:scale-95">
              <Phone className="w-5 h-5" />
              تماس مستقیم
            </a>
            <a href="https://t.me/Kioto_Osano" target="_blank" className="flex items-center justify-center gap-3 bg-blue-500/10 text-blue-400 border border-blue-500/30 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all active:scale-95">
              <Send className="w-5 h-5" />
              پیام در تلگرام
            </a>
            <a href="https://wa.me/989168038017" target="_blank" className="flex items-center justify-center gap-3 bg-green-500/10 text-green-400 border border-green-500/30 px-8 py-4 rounded-xl font-bold hover:bg-green-600 hover:text-white transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" />
              پیام در واتساپ
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}