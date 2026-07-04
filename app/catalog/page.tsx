// app/catalog/page.tsx
import React from "react";
import QRCode from "react-qr-code";
import { CheckCircle2, Zap, Rocket, Crown, ScanLine } from "lucide-react";

export const metadata = {
  title: "کاتالوگ خدمات و پکیج‌ها | کیادِو",
  description: "پکیج‌های طراحی سایت و اپلیکیشن - بالاترین کیفیت و سرعت",
  // تگ robots برای جلوگیری از ایندکس شدن این صفحه در گوگل (مخصوص نمایندگان)
  robots: {
    index: false,
    follow: false,
  }
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-12 md:py-20 px-4 sm:px-6 lg:px-8 selection:bg-blue-500 selection:text-white" dir="rtl">
      
      {/* بک‌گراند تزئینی ملایم */}
      <div className="absolute top-0 left-0 w-full h-[30rem] bg-gradient-to-b from-blue-100/60 via-blue-50/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm tracking-widest mb-8 shadow-xl shadow-slate-900/20 ring-1 ring-slate-800">
            <Crown className="w-5 h-5 text-yellow-400" />
            کاتالوگ رسمی خدمات نرم‌افزاری کیادِو
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.3] md:leading-[1.2]">
            سرمایه‌گذاری روی <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">آینده دیجیتال کسب‌وکار شما</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium text-slate-500 max-w-3xl mx-auto leading-relaxed">
            بهترین کیفیت، بالاترین سرعت. با تکنولوژی‌های لبه دانش، فاصله خود را با رقبا دست‌نیافتنی کنید.
          </p>
        </div>

        {/* ================= WHY US? ================= */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 mb-20 md:mb-28 relative overflow-hidden group hover:shadow-blue-100/50 transition-all duration-500">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-100 transition-colors duration-500" />
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="p-5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shrink-0 shadow-lg shadow-blue-500/30">
              <Zap className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-5">چرا رویکرد ما متفاوت است؟</h2>
              <p className="text-slate-600 leading-[2.2] text-lg md:text-xl text-justify">
                ما به جای استفاده از قالب‌های آماده و سیستم‌های کُند گذشته، وب‌سایت و اپلیکیشن شما را از صفر با <strong className="text-slate-900 bg-blue-50 px-2 py-1 rounded">جدیدترین تکنولوژی‌های برنامه‌نویسی دنیا</strong> (مشابه تکنولوژی سایت‌های مطرح جهانی) معماری می‌کنیم. نتیجه‌ی این مهندسی دقیق، سرعتی خیره‌کننده، سئوی قدرتمند برای تسخیر صفحه اول گوگل و یک اپلیکیشن موبایل اختصاصی برای مدیریت راحتِ فروشگاه شما در هر لحظه و هر مکان است.
              </p>
            </div>
          </div>
        </div>

        {/* ================= PRICING CARDS ================= */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">پکیج‌های مهندسی پلتفرم</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            
            {/* پکیج ۱: اقتصادی */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-slate-500 mb-2">اقتصادی</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-slate-400 line-through">۸۱.۵ میلیون تومان</span>
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">٪۷۰ تخفیف</span>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-slate-900">۲۴.۵</span>
                <span className="text-lg font-bold text-slate-500">میلیون تومان</span>
              </div>
              <div className="h-px w-full bg-slate-100 mb-8" />
              <ul className="space-y-5">
                {[
                  'طراحی وب‌سایت فروشگاهی / شرکتی', 
                  'اپلیکیشن موبایل برای مدیریت سایت', 
                  'ثبت دامنه ملی (.ir) به نام مشتری', 
                  'میزبانی ابری بین‌المللی رایگان', 
                  'اتصال به درگاه پرداخت اینترنتی'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-medium text-lg leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* پکیج ۲: استاندارد (ویژه/برجسته) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-slate-900/40 border border-slate-700 relative transform lg:-translate-y-6 lg:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                پیشنهاد استاندارد
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">استاندارد</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-slate-400 line-through">۱۱۵ میلیون تومان</span>
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">٪۷۰ تخفیف</span>
              </div>
              <div className="flex items-baseline gap-2 mb-8 text-white">
                <span className="text-5xl font-black">۳۴.۵</span>
                <span className="text-lg font-bold text-slate-400">میلیون تومان</span>
              </div>
              <div className="h-px w-full bg-slate-700 mb-8" />
              <div className="bg-slate-800/80 rounded-xl p-4 mb-6 text-sm md:text-base font-bold text-blue-300 flex items-center gap-2 border border-slate-700 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 shrink-0" /> تمام امکانات پکیج اقتصادی، به‌علاوه:
              </div>
              <ul className="space-y-5">
                {[
                  'راه‌اندازی روی سرورهای پرسرعت ایرانی (هزینه سرور با مشتری)', 
                  'اتصال به شبکه توزیع محتوا (CDN) کلادفلر', 
                  'سئوی پایه و تنظیمات متاتگ‌ها برای گوگل', 
                  'دیتابیس ابری سریع و ایمن'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium text-lg leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* پکیج ۳: ویژه */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-slate-500 mb-2">ویژه</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-slate-400 line-through">۱۴۸.۵ میلیون تومان</span>
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">٪۷۰ تخفیف</span>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-slate-900">۴۴.۵</span>
                <span className="text-lg font-bold text-slate-500">میلیون تومان</span>
              </div>
              <div className="h-px w-full bg-slate-100 mb-8" />
              <div className="bg-blue-50 rounded-xl p-4 mb-6 text-sm md:text-base font-bold text-blue-700 flex items-center gap-2 border border-blue-100 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 shrink-0" /> تمام امکانات پکیج استاندارد، به‌علاوه:
              </div>
              <ul className="space-y-5">
                {[
                  'پیاده‌سازی کدهای ساختاریافته (JSON-LD)', 
                  'اتصال به پنل پیامکی برای اطلاع‌رسانی سفارشات', 
                  'طراحی رابط کاربری اختصاصی‌تر'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-medium text-lg leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ================= REP CONTACT (اصلاح مشکل فاصله‌ها) ================= */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-8 md:p-14 text-center shadow-2xl shadow-blue-600/30 mb-20 md:mb-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          <h3 className="text-3xl md:text-4xl font-black text-white mb-8 relative z-10">نحوه ثبت سفارش و شروع پروژه</h3>
          <p className="text-blue-50 text-lg md:text-2xl leading-[2] md:leading-[2] max-w-4xl mx-auto relative z-10 font-medium">
            برای دریافت مشاوره تکمیلی، بررسی نیازهای دقیق کسب‌وکار شما و عقد قرارداد، لطفاً منحصراً با{" "}
            <span className="inline-block bg-white text-blue-700 px-4 py-1.5 rounded-xl mx-1 font-black shadow-md align-middle transform hover:scale-105 transition-transform">
              نماینده رسمی
            </span>{" "}
            که این کاتالوگ را به شما ارائه داده است، در ارتباط باشید.
          </p>
        </div>

        {/* ================= QR CODES & LIVE DEMO ================= */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 flex items-center justify-center gap-3">
              <ScanLine className="w-8 h-8 text-blue-600" />
              تست زنده تکنولوژی (Live Demo)
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
            
            {/* باکس QR ها */}
            <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto justify-center">
              {/* QR سایت */}
              <div className="bg-slate-50 p-6 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-2xl mb-5 shadow-sm">
                  <QRCode value="https://www.kiyadev.ir/demo-app" size={160} level="M" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl">وب‌سایت نمونه</h4>
                <p className="text-base text-slate-500 mt-2 font-medium">اسکن برای مشاهده زنده</p>
              </div>

              {/* QR اپلیکیشن */}
              <div className="bg-slate-50 p-6 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="bg-white p-4 rounded-2xl mb-5 shadow-sm">
                  <QRCode value="https://github.com/bahadorbahador11111-cmd/Kiyadev-App/releases/download/v1.0.0/Kiyadev.App.v1.apk" size={160} level="M" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl">اپلیکیشن مدیریت</h4>
                <p className="text-base text-slate-500 mt-2 font-medium">اسکن برای دانلود و تست</p>
              </div>
            </div>

            {/* توضیحات دمو */}
            <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 p-8 md:p-10 rounded-[2.5rem] max-w-xl text-center lg:text-right">
              <div className="inline-flex items-center justify-center lg:justify-start gap-3 text-indigo-700 font-black text-2xl mb-6 w-full">
                <Rocket className="w-8 h-8 animate-pulse" />
                همین الان قدرت سیستم را لمس کنید!
              </div>
              <p className="text-slate-700 leading-[2.2] text-lg md:text-xl font-medium text-justify">
                با اسکن کیوآر کدِ اپلیکیشن و نصب آن روی گوشی اندرویدی خود، مدیریت وب‌سایت نمونه ما را به دست بگیرید. 
                <strong className="text-indigo-700 bg-indigo-100/50 px-2 py-1 rounded mx-1">قیمت‌ها را تغییر دهید، روی محصولات تخفیف بگذارید یا وضعیت فروشگاه را تغییر دهید</strong> 
                و در همان لحظه (زیر ۱ ثانیه) نتایج را روی وب‌سایت مشاهده کنید. این دقیقاً همان سادگی و قدرتی است که در دستان شما خواهد بود!
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
