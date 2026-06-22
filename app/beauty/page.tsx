// app/beauty/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Phone, Smartphone, ShieldCheck, CheckCircle2, ArrowLeft, 
  Send, MessageCircle, Crown, Search, Users, CalendarCheck, Sparkles, CreditCard
} from "lucide-react";

// تنظیمات سئو اختصاصی برای گوگل (جذب سالن‌های زیبایی و کلینیک‌ها)
export const metadata: Metadata = {
  title: "طراحی وب‌سایت و اپلیکیشن اختصاصی سالن‌های زیبایی | کیا دِو",
  description: "طراحی پلتفرم لوکس نوبت‌دهی و مدیریت سالن زیبایی، کلینیک‌های پوست و مو. دارای اپلیکیشن اختصاصی مدیریت، دریافت بیعانه خودکار و پرونده دیجیتال مشتریان.",
  keywords: ["طراحی سایت سالن زیبایی", "نرم افزار مدیریت سالن زیبایی", "نوبت دهی آرایشگاه", "سایت کلینیک زیبایی", "اپلیکیشن نوبت دهی", "کیا دو"],
  robots: {
    index: true,
    follow: true,
  }
};

// داده‌های ساختاریافته برای گوگل
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "سیستم جامع نوبت‌دهی و مدیریت سالن‌های زیبایی کیا دِو",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "پلتفرم اختصاصی شامل وب‌سایت لوکس نوبت‌دهی و اپلیکیشن موبایل مدیریت مشتریان (CRM) ویژه سالن‌های زیبایی و کلینیک‌ها.",
  "offers": {
    "@type": "Offer",
    "price": "16000000",
    "priceCurrency": "IRT"
  },
  "provider": {
    "@type": "Organization",
    "name": "KiyaDev"
  }
};

const reasons = [
  { icon: Crown, title: "برندینگ و کلاس کاری VIP", desc: "مشتری برای پرداخت هزینه‌های چند میلیونی رنگ و عروس، نیازمند اعتماد است. یک وب‌سایت لوکس با دامنه اختصاصی، پرستیژ سالن شما را نسبت به رقبا بی‌نهایت بالا می‌برد." },
  { icon: CreditCard, title: "دریافت بیعانه و حذف کنسلی‌ها", desc: "خداحافظی با کنسلی‌های لحظه آخری! مشتری برای رزرو تایم، مستقیماً به درگاه بانکی سایت متصل شده و بیعانه پرداخت می‌کند. این یعنی تعهد ۱۰۰٪ مشتری." },
  { icon: Smartphone, title: "مدیریت سالن در جیب شما (Pocket CRM)", desc: "با اپلیکیشن موبایل اختصاصی، در هر مکان نوبت‌ها را چک کنید، تایم پرسنل (ناخن‌کار، رنگ‌کار) را ببندید یا باز کنید و گزارش درآمدهای روزانه را ببینید." },
  { icon: Search, title: "شکار مشتریان جدید از گوگل", desc: "وقتی مشتری در گوگل سرچ می‌کند «بهترین سالن زیبایی در منطقه من»، سایت شما با سئوی قدرتمند نمایش داده می‌شود و مشتریان دست‌به‌نقد و جدید جذب می‌کنید." },
  { icon: Users, title: "پرونده دیجیتال و باشگاه مشتریان", desc: "تاریخ تولد، تعداد مراجعات و خدمات قبلی مشتری در سیستم ذخیره می‌شود. می‌توانید به مشتریان وفادار خدمات ویژه (VIP) یا کدهای تخفیف اختصاصی پیامک کنید." },
  { icon: CalendarCheck, title: "نوبت‌دهی هوشمند ۲۴ ساعته", desc: "دایرکت اینستاگرام جای نوبت‌دهی نیست! در نیمه‌شب که شما خواب هستید، سایت بیدار است، ظرفیت‌ها را نشان می‌دهد، بیعانه را می‌گیرد و نوبت را ثبت می‌کند." }
];

export default function BeautyLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-rose-500/30 overflow-x-hidden">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HEADER اختصاصی سالن زیبایی ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-rose-500/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex flex-col group cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-white">
              Kiya<span className="text-rose-400">Dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1 hidden sm:block">LUXURY BEAUTY PLATFORM</span>
          </Link>
          
          <a
            href="tel:09924230576"
            className="flex items-center gap-2 bg-gradient-to-r from-rose-400 to-amber-500 hover:from-rose-500 hover:to-amber-600 text-slate-950 px-5 py-2.5 rounded-full text-sm font-black transition-all active:scale-95 shadow-lg shadow-rose-500/20"
          >
            <Phone size={16} className="animate-pulse" />
            <span className="hidden sm:inline">مشاوره VIP سالن‌ها:</span>
            <span dir="ltr">0992 423 0576</span>
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/beauty/hero-bg.webp" 
            alt="فضای لوکس سالن زیبایی و کلینیک" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-bold text-sm mb-8 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <Sparkles className="w-4 h-4" />
            ویژه عمارت‌های عروس، کلینیک‌ها و سالن‌های زیبایی
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.3] md:leading-[1.2] tracking-tight">
            دایرکت جای نوبت‌دهی نیست؛ <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-400 to-amber-500">امپراتوری زیبایی خود را بسازید</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            وب‌سایت اختصاصی و لوکس برای رزرو آنلاین و دریافت بیعانه <strong className="text-rose-400">+</strong> اپلیکیشن موبایلِ قدرتمند برای مدیریت سالن و پرسنل در دست شما.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="bg-gradient-to-r from-rose-400 to-amber-500 text-slate-950 px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              مشاهده پلن‌ها و امکانات
            </a>
            <a href="#reasons" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              چرا سالن‌های VIP این سیستم را دارند؟
            </a>
          </div>
        </div>
      </section>

      {/* ================= 6 REASONS SECTION ================= */}
      <section id="reasons" className="py-20 bg-slate-950 border-t border-white/5 relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">۶ مزیت طلایی پلتفرم هوشمند زیبایی</h2>
            <p className="text-slate-400 text-lg">از یک آرایشگاه معمولی به یک برند لوکس ارتقا پیدا کنید.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-rose-400/50 transition-all duration-300 flex flex-col items-start gap-5 relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
                
                <div className="bg-rose-500/10 text-rose-400 p-4 rounded-2xl shrink-0 group-hover:scale-110 group-hover:bg-rose-400 group-hover:text-slate-950 transition-all relative z-10">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">{item.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">قدرت و زیبایی در دستان شما</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-8 text-justify">
                سیستم ما از دو بخش تشکیل شده: <strong className="text-rose-400">یک وب‌سایت فوق‌العاده زیبا و لوکس</strong> برای مشتریان جهت رزرو نوبت، پرداخت بیعانه و مشاهده نمونه‌کارها، و <strong className="text-amber-400">یک اپلیکیشن مدیریتی حرفه‌ای (CRM)</strong> در گوشی شما تا در هر لحظه وضعیت نوبت‌ها، لاین‌های خدماتی، پرسنل و درآمدهای روزانه را مدیریت کنید.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rose-400" /> پیامک یادآوری خودکار به مشتری (جلوگیری از فراموشی نوبت)
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rose-400" /> سرعت لود زیر ۱ ثانیه (حفظ مشتریان کم‌حوصله)
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-rose-400" /> رابط کاربری بر اساس روانشناسی رنگ‌ها و هویت برند شما
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 relative w-full aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(244,63,94,0.1)] border border-white/10">
               <Image 
                  src="/beauty/app-mockup.webp" 
                  alt="اپلیکیشن مدیریت سالن زیبایی و سایت لوکس" 
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
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">سرمایه‌گذاری روی پرستیژ سالن</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              هزینه‌ی پیاده‌سازی این پلتفرم لوکس، <strong className="text-rose-400">کمتر از درآمد یک پکیج کامل عروس</strong> است! یک سرمایه‌گذاری قطعی برای نظم و درآمد مادام‌العمر.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* پکیج ۱: اقتصادی */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">سالن‌های در حال رشد</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-white">۱۶</span>
                <span className="text-sm font-bold text-slate-500">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['طراحی وب‌سایت نوبت‌دهی', 'اپلیکیشن موبایل مدیریت نوبت‌ها', 'قابلیت دریافت بیعانه (درگاه بانکی)', 'ثبت دامنه (.ir) اختصاصی', 'گالری عکس نمونه‌کارها'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09924230576" className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl font-bold transition-all">انتخاب پکیج</a>
            </div>

            {/* پکیج ۲: استاندارد */}
            <div className="bg-slate-900 border-2 border-rose-400 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-rose-500/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-rose-400 to-amber-500 text-slate-950 px-4 py-1 rounded-full text-xs font-black shadow-lg">پیشنهاد VIP</div>
              <h3 className="text-2xl font-bold text-rose-400 mb-2">کلینیک‌ها و سالن‌های معروف</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">۲۰</span>
                <span className="text-sm font-bold text-slate-400">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['تمام امکانات پکیج قبل +', 'تعریف پرسنل و لاین‌های مجزا', 'ارسال پیامک یادآوری به مشتری', 'سئوی پایه برای فتح نتایج گوگل', 'هاست ابری پرسرعت اختصاصی'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-white text-sm">
                    <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09924230576" className="block w-full text-center bg-gradient-to-r from-rose-400 to-amber-500 hover:from-rose-500 hover:to-amber-600 text-slate-950 py-3 rounded-xl font-black transition-all">شروع استارت پروژه</a>
            </div>

            {/* پکیج ۳: ویژه */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">عمارت‌های بزرگ عروس</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-white">۲۶</span>
                <span className="text-sm font-bold text-slate-500">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['تمام امکانات پکیج کلینیک‌ها +', 'فروشگاه محصولات مراقبتی پوست/مو', 'طراحی رابط کاربری فوق‌لوکس (Custom UI)', 'سیستم باشگاه مشتریان (تخفیف هوشمند)', 'کدهای ساختاریافته پیشرفته (سئو)'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09924230576" className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl font-bold transition-all">انتخاب پکیج</a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA & FOOTER ================= */}
      <footer className="py-20 px-4 bg-black border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">آماده‌ی تبدیل شدن به برند اول شهر هستید؟</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">برای دریافت مشاوره رایگان، بررسی وضعیت سالن شما و عقد قرارداد، همین الان با مدیریت پروژه‌ها در تماس باشید.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <a href="tel:09924230576" className="flex items-center justify-center gap-3 bg-gradient-to-r from-rose-400 to-amber-500 text-slate-950 px-8 py-4 rounded-xl font-black hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-rose-500/20">
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
             <span className="font-mono">KiyaDev © 2026 - Engineered for Beauty Industry</span>
             <span className="hidden sm:inline">|</span>
             <Link href="/" className="hover:text-rose-400 transition-colors font-medium">بازگشت به صفحه اصلی شرکت</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}