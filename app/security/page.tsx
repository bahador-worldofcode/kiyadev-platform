// app/security/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Phone, Smartphone, ShieldCheck, CheckCircle2, ArrowLeft, 
  Send, MessageCircle, Crown, Eye, Video, Search, ShoppingBag, Fingerprint, MapPin
} from "lucide-react";

// تنظیمات سئو اختصاصی برای گوگل (جذب شرکت‌های حفاظتی)
export const metadata: Metadata = {
  title: "طراحی سایت و اپلیکیشن سیستم‌های امنیتی و دوربین مداربسته | کیا دِو",
  description: "طراحی پلتفرم اختصاصی فروش دوربین مداربسته، دزدگیر و خانه هوشمند. با سایت لوکس و اپلیکیشن مدیریت پروژه‌ها، اعتماد مشتریان را جلب کنید و فروش خود را افزایش دهید.",
  keywords: ["طراحی سایت دوربین مداربسته", "طراحی سایت سیستم های امنیتی", "فروشگاه آنلاین خانه هوشمند", "اپلیکیشن نصاب دوربین", "کیا دو"],
  robots: {
    index: true,
    follow: true,
  }
};

// داده‌های ساختاریافته برای گوگل
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "سیستم جامع فروش و مدیریت پروژه‌های امنیتی کیا دِو",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "پلتفرم اختصاصی شامل فروشگاه لوکس تجهیزات امنیتی و اپلیکیشن موبایل برای مدیریت پروژه‌ها و نصاب‌ها.",
  "offers": {
    "@type": "Offer",
    "price": "24500000",
    "priceCurrency": "IRT"
  },
  "provider": {
    "@type": "Organization",
    "name": "KiyaDev"
  }
};

const reasons = [
  { icon: ShieldCheck, title: "اعتمادسازی برای پروژه‌های میلیاردی", desc: "مشتری برای امنیت خانه یا کارخانه خود هزینه می‌کند. یک سایت لوکس با درگاه بانکی رسمی و نماد اعتماد، هزاران بار بیشتر از یک پیج اینستاگرام به او حس امنیت می‌دهد." },
  { icon: ShoppingBag, title: "فروش اتوماتیک تجهیزات", desc: "دیگر نیازی به ارسال لیست قیمت و کاتالوگ PDF نیست. مشتریان می‌توانند پکیج‌های دوربین، دزدگیر و سنسورها را با مشخصات دقیق در سایت ببینند و آنلاین خرید کنند." },
  { icon: Smartphone, title: "مدیریت پروژه‌ها و نصاب‌ها (CRM)", desc: "با اپلیکیشن موبایلی که به شما می‌دهیم، می‌توانید لوکیشن پروژه‌ها، وضعیت نصب، گارانتی‌ها و قراردادها را در لحظه روی گوشی خود مدیریت کنید." },
  { icon: Search, title: "شکار پروژه‌های بزرگ از گوگل", desc: "با سئوی قدرتمند، وقتی کارفرمایان عبارت «مجری سیستم‌های امنیتی در [نام شهر شما]» را سرچ می‌کنند، مستقیماً وارد سایت شما می‌شوند." },
  { icon: Video, title: "پرزنت حرفه‌ای (ویدیو و دمو)", desc: "قابلیت آپلود ویدیو از کیفیت دوربین‌ها یا نمونه پروژه‌های هوشمندسازی. مشتری قبل از خرید، کیفیت کار شما را با چشمان خود می‌بیند." },
  { icon: Fingerprint, title: "سیستم تیکت و گارانتی", desc: "ارائه خدمات پس از فروش هوشمند! مشتری می‌تواند خرابی‌ها را از طریق سایت تیکت بزند و شما مستقیماً در اپلیکیشن موبایلتان اعلان دریافت کنید." }
];

export default function SecurityLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HEADER اختصاصی امنیت با شماره خانم ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-cyan-500/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex flex-col group cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-white">
              Kiya<span className="text-cyan-500">Dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1 hidden sm:block">SECURITY & SMART HOME</span>
          </Link>
          
          <a
            href="tel:09924230576"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-black transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
          >
            <Phone size={16} className="animate-pulse" />
            <span className="hidden sm:inline">مشاوره VIP پروژه‌ها:</span>
            <span dir="ltr">0992 423 0576</span>
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/security/hero-bg.webp" 
            alt="نمای سیستم های امنیتی و خانه هوشمند" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-sm mb-8 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <ShieldCheck className="w-4 h-4" />
            ویژه شرکت‌های حفاظتی، دوربین مداربسته و خانه هوشمند
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.3] md:leading-[1.2] tracking-tight">
            امنیت و تکنولوژی را <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">هوشمندانه بفروشید</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            وب‌سایت اختصاصی و لوکس برای فروش تجهیزات و پرزنت پروژه‌ها <strong className="text-cyan-400">+</strong> اپلیکیشن موبایل برای مدیریت نصاب‌ها، قراردادها و گارانتی‌ها.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-400/50">
              مشاهده پلن‌ها و امکانات
            </a>
            <a href="#reasons" className="bg-slate-900/50 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
              چرا داشتن این پلتفرم واجب است؟
            </a>
          </div>
        </div>
      </section>

      {/* ================= 6 REASONS SECTION ================= */}
      <section id="reasons" className="py-20 bg-slate-950 border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">۶ مزیت رقابتی امپراتوری دیجیتال شما</h2>
            <p className="text-slate-400 text-lg">فاصله خود را با رقبا دست‌نیافتنی کنید.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="group bg-slate-900/50 border border-white/10 p-8 rounded-3xl hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-start gap-5 relative overflow-hidden">
                {/* افکت نوری داخل کارت */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
                
                <div className="bg-cyan-500/10 text-cyan-400 p-4 rounded-2xl shrink-0 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all relative z-10">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify group-hover:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOCKUP SECTION ================= */}
      <section className="py-20 bg-black relative border-y border-white/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">کنترل کامل در داشبورد امنیتی شما</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-8 text-justify">
                ما دو سیستم قدرتمند به شما ارائه می‌دهیم: <strong className="text-cyan-400">یک فروشگاه آنلاین فوق‌سریع</strong> برای نمایش و فروش پکیج‌های امنیتی، و <strong className="text-cyan-400">یک اپلیکیشن موبایل مدیریتی</strong> برای تعریف محصولات جدید، تغییر قیمت‌ها در لحظه، و مدیریت اطلاعات کارفرمایان و نصاب‌ها در پروژه‌های مختلف.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" /> بالاترین سطح امنیت پایگاه داده
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" /> سرعت لود زیر ۱ ثانیه (جذب مشتریان کم‌حوصله)
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" /> رابط کاربری مدرن با تم تاریک (تکنولوژی محور)
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 relative w-full aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/10">
               <Image 
                  src="/security/app-mockup.webp" 
                  alt="داشبورد مدیریت سیستم های امنیتی" 
                  fill 
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section id="pricing" className="py-24 bg-slate-950 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">سرمایه‌گذاری روی امنیت کسب‌وکارتان</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              با هزینه‌ای کمتر از سود یک پروژه هوشمندسازی متوسط، ویترین دیجیتال خود را برای همیشه بنا کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* پکیج ۱: اقتصادی */}
            <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 hover:bg-slate-800 transition-all">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">فروشگاه‌های کوچک</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-slate-500 line-through">۸۱.۵ میلیون تومان</span>
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">٪۷۰ تخفیف</span>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-white">۲۴.۵</span>
                <span className="text-sm font-bold text-slate-500">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['طراحی فروشگاه تجهیزات امنیتی', 'اپلیکیشن موبایل مدیریت سایت', 'ثبت دامنه (.ir) اختصاصی', 'میزبانی ابری و هاست رایگان', 'اتصال به درگاه پرداخت آنلاین'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09924230576" className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl font-bold transition-all">انتخاب پکیج</a>
            </div>

            {/* پکیج ۲: استاندارد */}
            <div className="bg-slate-900 border-2 border-cyan-500 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-cyan-500/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-black shadow-lg">پیشنهاد متخصصین</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">شرکت‌های مهندسی</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-slate-400 line-through">۱۱۵ میلیون تومان</span>
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">٪۷۰ تخفیف</span>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">۳۴.۵</span>
                <span className="text-sm font-bold text-slate-400">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['تمام امکانات پکیج فروشگاه‌های کوچک +', 'بخش اختصاصی معرفی پروژه‌ها و رزومه', 'سئوی پایه برای فتح نتایج گوگل', 'دیتابیس ابری سریع و ایمن', 'سرورهای پرسرعت اختصاصی'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-white text-sm">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09924230576" className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-slate-950 py-3 rounded-xl font-black transition-all">شروع استارت پروژه</a>
            </div>

            {/* پکیج ۳: ویژه */}
            <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 hover:bg-slate-800 transition-all">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">مجریان پروژه‌های کلان</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-slate-500 line-through">۱۴۸.۵ میلیون تومان</span>
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">٪۷۰ تخفیف</span>
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-white">۴۴.۵</span>
                <span className="text-sm font-bold text-slate-500">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['تمام امکانات پکیج شرکت‌های مهندسی +', 'سیستم ثبت تیکت پشتیبانی و گارانتی', 'اتصال به پنل پیامکی برای مشتریان', 'رابط کاربری فوق‌اختصاصی', 'کدهای ساختاریافته پیشرفته (سئو)'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09924230576" className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl font-bold transition-all">انتخاب پکیج</a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA & FOOTER با شماره خانم ================= */}
      <footer className="py-20 px-4 bg-black border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">پروژه‌های بزرگتر در انتظار شماست</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">برای دریافت مشاوره تخصصی و بررسی استراتژی شرکت شما، همین الان با مدیریت پروژه‌ها تماس بگیرید.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <a href="tel:09924230576" className="flex items-center justify-center gap-3 bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-black hover:bg-cyan-600 transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
              <Phone className="w-5 h-5" />
              تماس تلفنی
            </a>
            <a href="https://t.me/Kioto_Osano" target="_blank" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95">
              <Send className="w-5 h-5 text-blue-400" />
              پیام در تلگرام
            </a>
            <a href="https://wa.me/989924230576" target="_blank" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              پیام در واتساپ
            </a>
          </div>

          <div className="mt-16 text-slate-500 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
             <span className="font-mono">KiyaDev © 2026 - Engineered for Security Systems</span>
             <span className="hidden sm:inline">|</span>
             <Link href="/" className="hover:text-cyan-400 transition-colors font-medium">بازگشت به صفحه اصلی شرکت</Link>
          </div>
        </div>
      </footer>

    </div>
  );
