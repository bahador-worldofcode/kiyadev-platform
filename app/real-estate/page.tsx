// app/real-estate/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Phone, Smartphone, ShieldCheck, CheckCircle2, ArrowLeft, 
  Send, MessageCircle, Crown, MapPin, Search, Star, Key, Building2, Map
} from "lucide-react";

// تنظیمات سئو اختصاصی برای گوگل (جذب لید املاک)
export const metadata: Metadata = {
  title: "طراحی سایت و اپلیکیشن اختصاصی مشاورین املاک | کیا دِو",
  description: "دیوار را فراموش کنید! طراحی پلتفرم اختصاصی املاک شامل وب‌سایت لوکس برای مشتریان و اپلیکیشن CRM مدیریت فایل‌ها در موبایل ویژه مشاورین املاک.",
  keywords: ["طراحی سایت املاک", "نرم افزار فایلینگ املاک", "اپلیکیشن مشاورین املاک", "سایت آژانس مسکن", "کیا دو"],
  robots: {
    index: true,
    follow: true,
  }
};

// داده‌های ساختاریافته برای گوگل
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "سیستم جامع فایلینگ و سایت مشاورین املاک کیا دِو",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "پلتفرم اختصاصی شامل وب‌سایت لوکس برای جستجوی ملک و اپلیکیشن موبایل برای مدیریت فایل‌ها توسط مشاورین املاک.",
  "offers": {
    "@type": "Offer",
    "price": "81500000",
    "priceCurrency": "IRT"
  },
  "provider": {
    "@type": "Organization",
    "name": "KiyaDev"
  }
};

const reasons = [
  { icon: Building2, title: "پرستیژ و کلاس کاری (Branding)", desc: "مشتریانِ ملک‌های چند میلیاردی به پیج اینستاگرام یا یک آگهی ساده در سایت‌های عمومی اعتماد نمی‌کنند. آنها انتظار یک وب‌سایت لوکس با برند اختصاصی شما را دارند." },
  { icon: Smartphone, title: "فایلینگ در جیب شما (Pocket CRM)", desc: "نیازی به دفتر و سررسید نیست! با اپلیکیشن موبایلی که به شما می‌دهیم، فایل‌های جدید، شماره تماس مالکین و وضعیت فروش را در هر لحظه روی گوشی مدیریت کنید." },
  { icon: Map, title: "جستجوی هوشمند و نقشه (Map Search)", desc: "مشتری می‌تواند روی نقشه گوگل محدوده بکشد و آپارتمان‌های آن منطقه را ببیند. فیلترهای پیشرفته (قیمت، متراژ، سال ساخت) سریعاً مشتری را به ملک دلخواهش می‌رساند." },
  { icon: Search, title: "سئوی محلی (جذب لید از گوگل)", desc: "با بالا آمدن در گوگل با جستجوهایی مثل «خرید پنت‌هاوس در سعادت‌آباد» یا «فروش ویلا در کردان»، مستقیماً مشتریان دست‌به‌نقد و ناشناس را شکار کنید." },
  { icon: Star, title: "تور مجازی ۳۶۰ درجه و ویدیو", desc: "تصاویر باکیفیت و تورهای مجازی ۳۶۰ درجه را در سایت آپلود کنید تا مشتری قبل از بازدید حضوری، شیفته‌ی ملک شود و وقت مشاورین برای بازدیدهای بی‌نتیجه تلف نشود." },
  { icon: Key, title: "بانک اطلاعات مشتریان (Lead Generation)", desc: "شماره تمام کسانی که دنبال ملک می‌گردند در سیستم شما ذخیره می‌شود. فایل جدیدی ثبت شد؟ با یک کلیک برای تمام خریداران بالقوه پیامک بفرستید." }
];

export default function RealEstateLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-500/30 overflow-x-hidden">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HEADER اختصاصی املاک ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-amber-500/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex flex-col group cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-white">
              Kiya<span className="text-amber-500">Dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1 hidden sm:block">REAL ESTATE SYSTEM</span>
          </Link>
          
          <a
            href="tel:09168038017"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-5 py-2.5 rounded-full text-sm font-black transition-all active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <Phone size={16} className="animate-pulse" />
            <span className="hidden sm:inline">مشاوره VIP:</span>
            <span dir="ltr">0916 803 8017</span>
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/real-estate/hero-bg.webp" 
            alt="نمای لوکس پنت هاوس و املاک" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm mb-8">
            <Crown className="w-4 h-4" />
            ویژه مدیران، دپارتمان‌ها و مشاورین املاک لوکس
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.3] md:leading-[1.2] tracking-tight">
            دیوار را فراموش کنید؛ <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-600">امپراتوری دیجیتال املاکِ خود را بسازید</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            وب‌سایت اختصاصی و لوکس برای جذب مشتریان + اپلیکیشن موبایلِ قدرتمند برای مدیریت فایل‌ها، مالکین و خریداران در جیب شما.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              مشاهده پلن‌ها و امکانات
            </a>
            <a href="#reasons" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              چرا داشتن این سیستم واجب است؟
            </a>
          </div>
        </div>
      </section>

      {/* ================= 6 REASONS SECTION ================= */}
      <section id="reasons" className="py-20 bg-slate-950 border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">۶ مزیت طلایی سیستم املاک کیا دِو</h2>
            <p className="text-slate-400 text-lg">چرا دپارتمان‌های بزرگ املاک از روش‌های سنتی عبور کرده‌اند؟</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-start gap-5">
                <div className="bg-amber-500/10 text-amber-400 p-4 rounded-2xl shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">قدرت تکنولوژی در دستان شما</h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-8 text-justify">
                ما دو محصول بی‌نظیر را در یک پکیج به شما تحویل می‌دهیم: <strong className="text-amber-400">یک وب‌سایت کاملاً واکنش‌گرا و لوکس</strong> برای جستجوی بی‌نقص کاربران (همراه با فیلترهای پیشرفته املاک) و <strong className="text-amber-400">یک اپلیکیشن مدیریتی (CRM)</strong> برای شما و مشاورینتان تا به راحتی اطلاعات، تصاویر و لوکیشن ملک را در لحظه آپلود و مدیریت کنید.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> امنیت ۱۰۰٪ اطلاعات فایل‌ها و مالکین
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> سرعت لود زیر ۱ ثانیه (تکنولوژی Next.js)
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" /> رابط کاربری (UI) مشابه برترین سایت‌های املاک جهان
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 relative w-full aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.1)] border border-white/10">
               <Image 
                  src="/real-estate/app-mockup.webp" 
                  alt="داشبورد و وبسایت مدیریت املاک" 
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">سرمایه‌گذاری روی شعبه دیجیتال شما</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              هزینه‌ی پیاده‌سازی این پلتفرمِ فوق‌العاده، <strong className="text-amber-400">کمتر از کمیسیونِ فروش فقط یک آپارتمان</strong> است! یک سرمایه‌گذاری قطعی برای چندین سال.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* پکیج ۱: اقتصادی */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">دفاتر کوچک</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-white">۸۱.۵</span>
                <span className="text-sm font-bold text-slate-500">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['طراحی وب‌سایت لوکس املاک', 'اپلیکیشن موبایل مدیریت فایل‌ها', 'فیلترهای جستجوی پایه (متراژ، قیمت)', 'ثبت دامنه (.ir) اختصاصی', 'میزبانی ابری و هاست رایگان'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09168038017" className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl font-bold transition-all">انتخاب پکیج</a>
            </div>

            {/* پکیج ۲: استاندارد */}
            <div className="bg-slate-900 border-2 border-amber-500 rounded-3xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-amber-500/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-950 px-4 py-1 rounded-full text-xs font-black">پیشنهاد طلایی</div>
              <h3 className="text-2xl font-bold text-amber-400 mb-2">آژانس‌های فعال</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">۱۱۵</span>
                <span className="text-sm font-bold text-slate-400">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['تمام امکانات پکیج دفاتر کوچک +', 'جستجوی هوشمند روی نقشه گوگل', 'سئوی پایه برای گوگل (Local SEO)', 'تعریف چند مشاور با دسترسی مجزا', 'سرورهای پرسرعت اختصاصی'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-white text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09168038017" className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-slate-950 py-3 rounded-xl font-black transition-all">شروع استارت پروژه</a>
            </div>

            {/* پکیج ۳: ویژه */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">دپارتمان‌های VIP</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-white">۱۴۸.۵</span>
                <span className="text-sm font-bold text-slate-500">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['تمام امکانات پکیج آژانس‌های فعال +', 'قابلیت نمایش تور مجازی ۳۶۰ درجه', 'اتصال به پنل پیامکی برای مشتریان', 'رابط کاربری فوق‌اختصاصی و شخصی', 'کدهای ساختاریافته پیشرفته (سئو)'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="tel:09168038017" className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl font-bold transition-all">انتخاب پکیج</a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA & FOOTER ================= */}
      <footer className="py-20 px-4 bg-black border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">آماده‌ی متحول کردن کسب‌وکارتان هستید؟</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">برای دریافت مشاوره رایگان، بررسی پتانسیل آژانس شما و عقد قرارداد، همین الان از طریق راه‌های زیر با مدیریت توسعه در ارتباط باشید.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <a href="tel:09168038017" className="flex items-center justify-center gap-3 bg-amber-500 text-slate-950 px-8 py-4 rounded-xl font-black hover:bg-amber-600 transition-all active:scale-95 shadow-lg shadow-amber-500/20">
              <Phone className="w-5 h-5" />
              تماس تلفنی
            </a>
            <a href="https://t.me/Kioto_Osano" target="_blank" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95">
              <Send className="w-5 h-5 text-blue-400" />
              پیام در تلگرام
            </a>
            <a href="https://wa.me/989168038017" target="_blank" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              پیام در واتساپ
            </a>
          </div>

          <div className="mt-16 text-slate-500 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
             <span className="font-mono">KiyaDev © 2026 - Engineered for Real Estate</span>
             <span className="hidden sm:inline">|</span>
             <Link href="/" className="hover:text-amber-400 transition-colors font-medium">بازگشت به صفحه اصلی شرکت</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}