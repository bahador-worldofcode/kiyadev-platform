// app/catalog/page.tsx
import React from "react";
import QRCode from "react-qr-code";
import { CheckCircle2, Zap, Rocket, Crown, MonitorSmartphone, ScanLine } from "lucide-react";

export const metadata = {
  title: "کاتالوگ خدمات و پکیج‌ها | سیستم‌های یکپارچه",
  description: "پکیج‌های طراحی سایت و اپلیکیشن - بالاترین کیفیت و سرعت",
  // تگ robots برای جلوگیری از ایندکس شدن این صفحه در گوگل (مخصوص نمایندگان)
  robots: {
    index: false,
    follow: false,
  }
};

export default function CatalogPage() {
  return (
    // حذف font-sans برای اعمال فونت وزیرمتن از فایل layout
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-16 px-4 sm:px-6 lg:px-8 selection:bg-blue-500 selection:text-white" dir="rtl">
      
      {/* بک‌گراند تزئینی */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-xs tracking-widest mb-6 shadow-lg shadow-slate-900/20">
            <Crown className="w-4 h-4 text-yellow-400" />
            کاتالوگ رسمی خدمات نرم‌افزاری
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            سرمایه‌گذاری روی <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">آینده دیجیتال کسب‌وکار شما</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
            بهترین کیفیت، بالاترین سرعت. با تکنولوژی‌های لبه دانش، فاصله خود را با رقبا دست‌نیافتنی کنید.
          </p>
        </div>

        {/* ================= WHY US? ================= */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shrink-0 shadow-lg shadow-blue-500/30">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">چرا رویکرد ما متفاوت است؟</h2>
              <p className="text-slate-600 leading-loose text-lg text-justify">
                ما به جای استفاده از قالب‌های آماده و سیستم‌های کُند گذشته، وب‌سایت و اپلیکیشن شما را از صفر با <strong>جدیدترین تکنولوژی‌های برنامه‌نویسی دنیا</strong> (مشابه تکنولوژی سایت‌های مطرح جهانی) معماری می‌کنیم. نتیجه‌ی این مهندسی دقیق، سرعتی خیره‌کننده، سئوی قدرتمند برای تسخیر صفحه اول گوگل و یک اپلیکیشن موبایل اختصاصی برای مدیریت راحتِ فروشگاه شما در هر لحظه و هر مکان است.
              </p>
            </div>
          </div>
        </div>

        {/* ================= PRICING CARDS ================= */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">پکیج‌های مهندسی پلتفرم</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* پکیج ۱: اقتصادی */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-slate-500 mb-2">اقتصادی</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-slate-900">۱۶</span>
                <span className="text-lg font-bold text-slate-500">میلیون تومان</span>
              </div>
              <div className="h-px w-full bg-slate-100 mb-6" />
              <ul className="space-y-4">
                {['طراحی وب‌سایت فروشگاهی / شرکتی', 'اپلیکیشن موبایل برای مدیریت سایت', 'ثبت دامنه ملی (.ir) به نام مشتری', 'میزبانی ابری بین‌المللی رایگان', 'اتصال به درگاه پرداخت اینترنتی'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* پکیج ۲: استاندارد (ویژه/برجسته) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2rem] p-8 shadow-2xl shadow-slate-900/40 border border-slate-700 relative transform md:-translate-y-4 md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                پیشنهاد استاندارد
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">استاندارد</h3>
              <div className="flex items-baseline gap-2 mb-6 text-white">
                <span className="text-4xl font-black">۲۰</span>
                <span className="text-lg font-bold text-slate-400">میلیون تومان</span>
              </div>
              <div className="h-px w-full bg-slate-700 mb-6" />
              <div className="bg-slate-800/50 rounded-xl p-3 mb-4 text-sm font-bold text-blue-300 flex items-center gap-2 border border-slate-700">
                <CheckCircle2 className="w-4 h-4" /> تمام امکانات پکیج اقتصادی، به‌علاوه:
              </div>
              <ul className="space-y-4">
                {['راه‌اندازی روی سرورهای پرسرعت ایرانی (هزینه ماهانه سرور با مشتری)', 'اتصال به شبکه توزیع محتوا (CDN) کلادفلر جهت امنیت و لود سریع', 'سئوی پایه و تنظیمات متاتگ‌ها برای گوگل', 'دیتابیس ابری سریع و ایمن'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* پکیج ۳: ویژه */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-slate-500 mb-2">ویژه</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-slate-900">۲۶</span>
                <span className="text-lg font-bold text-slate-500">میلیون تومان</span>
              </div>
              <div className="h-px w-full bg-slate-100 mb-6" />
              <div className="bg-blue-50 rounded-xl p-3 mb-4 text-sm font-bold text-blue-700 flex items-center gap-2 border border-blue-100">
                <CheckCircle2 className="w-4 h-4" /> تمام امکانات پکیج استاندارد، به‌علاوه:
              </div>
              <ul className="space-y-4">
                {['پیاده‌سازی کدهای ساختاریافته (JSON-LD) برای رتبه برتر سئو', 'اتصال به پنل پیامکی برای اطلاع‌رسانی سفارشات', 'طراحی رابط کاربری اختصاصی‌تر'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ================= REP CONTACT ================= */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-8 md:p-12 text-center shadow-xl shadow-blue-600/20 mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6 relative z-10">نحوه ثبت سفارش و شروع پروژه</h3>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto relative z-10">
            برای دریافت مشاوره تکمیلی، بررسی نیازهای دقیق کسب‌وکار شما و عقد قرارداد، لطفاً منحصراً با 
            <span className="bg-white text-blue-700 px-3 py-1 rounded-lg mx-2 font-black shadow-sm">نماینده رسمی</span> 
            که این کاتالوگ را به شما ارائه داده است، در ارتباط باشید.
          </p>
        </div>

        {/* ================= QR CODES & LIVE DEMO ================= */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 flex items-center justify-center gap-2">
              <ScanLine className="w-6 h-6 text-blue-600" />
              تست زنده تکنولوژی (Live Demo)
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            
            {/* باکس QR ها */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* QR سایت */}
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center flex flex-col items-center">
                <div className="bg-slate-50 p-4 rounded-2xl mb-4 border border-slate-100">
                  <QRCode value="https://www.kiyadev.ir/demo-app" size={140} level="M" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">وب‌سایت نمونه</h4>
                <p className="text-sm text-slate-500 mt-1 font-medium">اسکن برای مشاهده زنده</p>
              </div>

              {/* QR اپلیکیشن */}
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 text-center flex flex-col items-center">
                <div className="bg-slate-50 p-4 rounded-2xl mb-4 border border-slate-100">
                  <QRCode value="https://github.com/bahadorbahador11111-cmd/Kiyadev-App/releases/download/v1.0.0/Kiyadev.App.v1.apk" size={140} level="M" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">اپلیکیشن مدیریت</h4>
                <p className="text-sm text-slate-500 mt-1 font-medium">اسکن برای دانلود و تست</p>
              </div>
            </div>

            {/* توضیحات دمو */}
            <div className="bg-indigo-50 border-2 border-dashed border-indigo-200 p-8 rounded-[2rem] max-w-xl text-center lg:text-right">
              <div className="inline-flex items-center gap-2 text-indigo-700 font-black text-xl mb-4">
                <Rocket className="w-6 h-6" />
                همین الان قدرت سیستم را لمس کنید!
              </div>
              <p className="text-slate-700 leading-loose text-lg font-medium text-justify">
                با اسکن کیوآر کدِ اپلیکیشن و نصب آن روی گوشی اندرویدی خود، مدیریت وب‌سایت نمونه ما را به دست بگیرید. 
                <span className="text-indigo-600 font-bold mx-1">قیمت‌ها را تغییر دهید، روی محصولات تخفیف بگذارید یا وضعیت فروشگاه را تغییر دهید</span> 
                و در همان لحظه (زیر ۱ ثانیه) نتایج را روی وب‌سایت مشاهده کنید. این دقیقاً همان سادگی و قدرتی است که در دستان شما خواهد بود!
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}