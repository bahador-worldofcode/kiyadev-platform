// app/hostel/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link"; // <--- اضافه کردن لینکِ داخلی نکست
import { Metadata } from "next";
import { 
  Phone, Percent, Smartphone, TrendingDown, Clock, ShieldCheck, 
  Users, ShoppingBag, MapPin, Globe, Crown, CheckCircle2, ArrowLeft, Send, MessageCircle
} from "lucide-react";

// تنظیمات سئو اختصاصی برای گوگل
export const metadata: Metadata = {
  title: "طراحی وب‌سایت و اپلیکیشن اختصاصی مدیریت اقامتگاه و خوابگاه | کیا دِو",
  description: "سیستم یکپارچه رزرو و مدیریت اقامتگاه، خوابگاه و هاستل. رهایی از پورسانت واسطه‌ها، مدیریت لحظه‌ای تخت‌ها و جذب مسافر با سایت اختصاصی.",
  keywords: ["طراحی سایت خوابگاه", "طراحی سایت اقامتگاه", "نرم افزار مدیریت خوابگاه", "اپلیکیشن رزرو تخت", "سایت هاستل", "کیا دو"],
  robots: {
    index: true,
    follow: true,
  }
};

// داده‌های ساختاریافته برای درک بهتر گوگل از محصول ما
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "سیستم جامع مدیریت اقامتگاه کیا دِو",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Android, iOS",
  "description": "پلتفرم اختصاصی شامل وب‌سایت رزرو برای مسافران و اپلیکیشن مدیریت تخت‌ها برای مدیران خوابگاه و اقامتگاه.",
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
  { icon: Percent, title: "حذف پورسانت سایت‌های واسطه (سود ۱۰۰٪)", desc: "رهایی از پورسانت‌های سنگین پلتفرم‌های واسطه؛ تمام مبلغ رزرو هر تخت، مستقیماً و بدون کسر یک ریال به حساب خودتان واریز می‌شود." },
  { icon: Smartphone, title: "مدیریت لحظه‌ای تخت‌به‌تخت با موبایل", desc: "تخت خالی شد؟ با یک کلیک در اپلیکیشن موبایلتان وضعیت را تغییر دهید تا از رزرو تکراری یک تخت (Overbooking) جلوگیری شود." },
  { icon: TrendingDown, title: "خداحافظی با هزینه‌های نجومی «نردبان»", desc: "با بالا آمدن سایت شما در گوگل روی کلماتی مثل «اقامتگاه در تهران»، مسافران شما را رایگان پیدا می‌کنند و هزینه‌های تبلیغاتی به صفر می‌رسد." },
  { icon: Clock, title: "پذیرشگر ۲۴ ساعته (حتی نیمه‌شب)", desc: "سایت شما عکس‌ها را نشان می‌دهد و پول را می‌گیرد. فردا صبح فقط پیامک واریزی را ببینید؛ بدون نیاز به بیداری و هماهنگی تلفنی نیمه‌شب." },
  { icon: ShieldCheck, title: "جلب اعتماد قطعی خانواده‌ها و مسافران", desc: "یک سایت رسمی با درگاه پرداخت بانکی، هزاران بار بیشتر از یک آگهی ساده با شماره کارت شخصی، به دانشجویان و خانواده‌ها حس امنیت می‌دهد." },
  { icon: Users, title: "پر کردن ظرفیت در فصل‌های خلوت", desc: "شماره تمام مسافران در سیستم ذخیره می‌شود. در ایام امتحانات یا زمستان، با ارسال یک پیامک تخفیف‌دار، تخت‌های خالی را سریعاً پر کنید." },
  { icon: ShoppingBag, title: "فروش خدمات جانبی (Upselling)", desc: "علاوه بر تخت، می‌توانید خدماتی مثل «کمد اختصاصی»، «لباسشویی»، «اینترنت نامحدود» یا «وعده غذایی» را در سایت بفروشید." },
  { icon: MapPin, title: "مسیریابی بی‌دردسر برای مسافر", desc: "اتصال مستقیم سایت به گوگل‌مپ و نشان؛ مسافر بدون اینکه نیاز باشد بارها برای پیدا کردن آدرس تماس بگیرد، مستقیم تا درب خوابگاه می‌آید." },
  { icon: Globe, title: "جذب توریست و مسافر خارجی", desc: "سایت قابلیت دو زبانه شدن دارد؛ می‌توانید مسافران خارجی که به دنبال هاستل ارزان هستند را به راحتی و با کلاس کاری بالا جذب کنید." },
  { icon: Crown, title: "کلاس کاری بالا و سبقت از رقبا", desc: "در حالی که رقبای شما هنوز درگیر پیامک و دفتر کل برای یادداشت رزروها هستند، شما با یک سیستم تمام‌هوشمند، برند اول منطقه می‌شوید." }
];

export default function HostelLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 overflow-x-hidden">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HEADER اختصاصی صفحه لندینگ ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* لینک شدن لوگو به صفحه اصلی */}
          <Link href="/" className="flex flex-col group cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-white">
              Kiya<span className="text-blue-500">Dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1 hidden sm:block">HOSTEL MANAGEMENT SYSTEM</span>
          </Link>
          
          <a
            href="tel:09168038017"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
          >
            <Phone size={16} className="animate-pulse" />
            <span className="hidden sm:inline">تماس مستقیم با مدیریت:</span>
            <span dir="ltr">0916 803 8017</span>
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden min-h-[90vh] flex items-center">
        {/* تصویر پس‌زمینه */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/hostel/hero-bg.webp" 
            alt="نمای اتاق خوابگاه و اپلیکیشن" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-sm mb-8">
            <Crown className="w-4 h-4" />
            ویژه مدیران اقامتگاه‌ها، خوابگاه‌ها و هاستل‌ها
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.3] md:leading-[1.2] tracking-tight">
            رهایی از پورسانت واسطه‌ها؛ <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">سیستم اختصاصی اقامتگاهِ شما</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            وب‌سایت اختصاصی (ویترین ۲۴ ساعته برای رزرو مسافر) <strong className="text-white">+</strong> اپلیکیشن موبایل برای مدیریت لحظه‌ایِ تخت‌های خالی توسط شخص شما.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#reasons" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              چرا داشتن این سیستم واجب است؟
            </a>
            <a href="#pricing" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              مشاهده قیمت و امکانات
            </a>
          </div>
        </div>
      </section>

      {/* ================= 10 REASONS SECTION ================= */}
      <section id="reasons" className="py-20 bg-slate-950 border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">۱۰ دلیل طلایی برای ارتقای خوابگاه</h2>
            <p className="text-slate-400 text-lg">چرا اقامتگاه‌های مدرن در حال عبور از روش‌های سنتی هستند؟</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex items-start gap-5">
                <div className="bg-blue-500/10 text-blue-400 p-4 rounded-2xl shrink-0 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify group-hover:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING & APP MOCKUP ================= */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-slate-950 to-black relative">
        <div className="container mx-auto max-w-6xl px-4">
          
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
             
             <div className="flex flex-col lg:flex-row">
                
                {/* بخش متن و قیمت */}
                <div className="p-8 md:p-14 lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">پکیج اقتصادی و جامع</h3>
                  <p className="text-slate-400 mb-8 font-medium">طراحی شده دقیقاً برای نیازهای مدیران اقامتگاه</p>
                  
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-black text-blue-400">۱۶,۰۰۰,۰۰۰</span>
                    <span className="text-lg text-slate-500 font-bold">تومان (یک‌بار برای همیشه)</span>
                  </div>

                  <ul className="space-y-5 mb-10">
                    {[
                      'طراحی سایت کامل با ظاهر لوکس و کاربرپسند',
                      'اپلیکیشن موبایل اختصاصی برای مدیریت',
                      'سیستم تعریف اتاق‌ها و تخت‌ها (بدون محدودیت تعداد)',
                      'اتصال به درگاه پرداخت مستقیم بانکی',
                      'ثبت دامنه (.ir) به نام خود شما و هاست ابری',
                      'آموزش کامل نحوه کار با سیستم در ۱۵ دقیقه'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="tel:09168038017" className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-gray-200 transition-all active:scale-95 text-center">
                    شروع استارت پروژه 
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* بخش تصویر اپلیکیشن */}
                <div className="lg:w-1/2 bg-slate-800/50 p-8 flex items-center justify-center relative min-h-[400px]">
                   <div className="absolute inset-0 z-0">
                      <Image 
                        src="/hostel/app-mockup.webp" 
                        alt="اپلیکیشن مدیریت خوابگاه" 
                        fill 
                        className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                      />
                   </div>
                   <div className="relative z-10 bg-black/60 backdrop-blur-sm border border-white/10 p-6 rounded-2xl max-w-sm text-center">
                      <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">مدیریت در دستان شماست</h4>
                      <p className="text-slate-300 text-sm">بدون نیاز به لپ‌تاپ یا ادمین متخصص. با گوشی خود تخت‌ها را فعال یا غیرفعال کنید.</p>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA & FOOTER ================= */}
      <footer className="py-20 px-4 bg-black border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">آماده‌ی ارتقای اقامتگاه خود هستید؟</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">برای دریافت مشاوره رایگان، بررسی وضعیت اقامتگاه شما و عقد قرارداد همین الان از طریق راه‌های زیر با ما در ارتباط باشید.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <a href="tel:09168038017" className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
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

          {/* ویرایش مهم: کلاس font-mono فقط به متن انگلیسی اعمال شد تا فونت فارسی خراب نشود */}
          <div className="mt-16 text-slate-500 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
             <span className="font-mono">KiyaDev © 2026 - Engineered for Hostels</span>
             <span className="hidden sm:inline">|</span>
             <Link href="/" className="hover:text-blue-400 transition-colors font-medium">مشاهده صفحه اصلی شرکت</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}