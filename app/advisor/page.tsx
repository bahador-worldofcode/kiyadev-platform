// app/advisor/page.tsx
import React from "react";
import { Metadata } from "next";
import QRCode from "react-qr-code"; // <--- این خط اصلاح شد (کتابخانه سازگار با سرور)
import { 
  Phone, Smartphone, ShieldCheck, CheckCircle2, ArrowLeft, 
  MessageCircle, Zap, Globe, Code2, ExternalLink, Headset, 
  ScanLine
} from "lucide-react";

// جلوگیری از ایندکس شدن صفحه در گوگل (مخصوص لینک‌دهی اختصاصی)
export const metadata: Metadata = {
  title: "ارتباط مستقیم با مدیر پروژه | کیا دِو",
  description: "کسب‌وکار خود را با پلتفرم‌های اختصاصی، سریع و امن متحول کنید.",
  robots: {
    index: false,
    follow: false,
  }
};

// لیست اختصاصی نمونه‌کارها برای صفحه مدیر پروژه
const miniPortfolio = [
  { id: 1, title: "Tivan Ex (صرافی)", category: "Web3 & Crypto", link: "https://tivan-ex.vercel.app/" },
  { id: 2, title: "Luxe Shop (فروشگاه لوکس)", category: "E-Commerce", link: "https://luxe-shop-ten.vercel.app/" },
  { id: 3, title: "Alef Gem (گالری جواهرات)", category: "Luxury E-Commerce", link: "https://alefgem.com" },
  { id: 4, title: "MindOrbit AI (دستیار هوش مصنوعی)", category: "AI Platform", link: "https://mind-orbit-lyart.vercel.app/" },
  { id: 5, title: "Coconut (هایپرمارکت آنلاین)", category: "StartUp", link: "https://www.cocodelivery.ir/" },
  { id: 6, title: "Soughat Shop (سوغات شاپ)", category: "Fintech", link: "https://soughat.shop/" }
];

export default function AdvisorPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30 overflow-x-hidden scroll-smooth" dir="rtl">
      
      {/* ================= هدر اختصاصی مدیر پروژه ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-white">
              Kiya<span className="text-pink-500">Dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1">PROJECT MANAGER</span>
          </div>
          
          <a
            href="tel:09924230576"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-pink-600/20 border border-pink-500/30"
          >
            <Headset size={16} className="animate-pulse" />
            <span className="hidden sm:inline">تماس با مدیر پروژه:</span>
            <span dir="ltr">0992 423 0576</span>
          </a>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-4 min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* گرادیانت‌های پس‌زمینه آبی و صورتی */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pink-600/15 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs md:text-sm mb-8 font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            ارتباط مستقیم و پیگیری صفر تا صد توسط مدیر پروژه
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.3] md:leading-[1.2] tracking-tight">
            خروج از سایه‌ی اینستاگرام؛ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-pink-500">امپراتوری دیجیتال خود را بسازید</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            ما با کدنویسی صفر تا صد، سایت و اپلیکیشنی برای شما می‌سازیم که <strong className="text-white">مانند یک فروشنده ۲۴ ساعته</strong>، بدون خستگی برای شما درآمدزایی کند.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="bg-white text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              مشاهده قیمت‌ها
            </a>
            <a href="https://wa.me/989924230576" target="_blank" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} className="text-green-400" />
              ارسال پیام در واتساپ
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY WEBSITE? ================= */}
      <section className="py-20 bg-[#0a0a0a] border-y border-white/5 relative">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">چرا داشتن سایت از نان شب واجب‌تر است؟</h2>
            <p className="text-slate-400">مزایای قطعی داشتن یک پلتفرم اختصاصی</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 hover:border-pink-500/30 transition-colors">
              <Globe className="w-8 h-8 text-pink-400 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">فروش اتوماتیک (حتی در خواب)</h3>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">دیگر نیازی به ارسال شماره کارت در دایرکت نیست. مشتری وارد سایت می‌شود، آنلاین پرداخت می‌کند و شما فقط پیامک واریزی را می‌بینید.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 hover:border-blue-500/30 transition-colors">
              <ShieldCheck className="w-8 h-8 text-blue-400 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">اعتمادسازی قطعی و کلاس کاری</h3>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">مشتری به سایتی که درگاه پرداخت مستقیم و دامنه رسمی دارد، ۱۰۰ برابر بیشتر از یک پیج اینستاگرامی اعتماد می‌کند.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 hover:border-pink-500/30 transition-colors">
              <Code2 className="w-8 h-8 text-pink-400 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">مالکیت ۱۰۰٪ و بدون پورسانت</h3>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">در پلتفرم‌های واسطه (مثل اسنپ‌فود یا دیجی‌کالا) باید پورسانت بدهید، اما در سایت خودتان، تمام سود مستقیماً به جیب شما می‌رود.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 hover:border-blue-500/30 transition-colors">
              <Zap className="w-8 h-8 text-blue-400 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">جذب مشتری دست‌به‌نقد از گوگل</h3>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">با اتصال سایت به گوگل، هرکسی کالا یا خدمات شما را سرچ کند، مستقیماً وارد سایت شما می‌شود؛ یعنی دسترسی به میلیون‌ها مشتری جدید.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH & DIFFERENTIATION ================= */}
      <section className="py-20 relative">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-gradient-to-r from-blue-900/30 to-pink-900/30 border border-pink-500/20 rounded-3xl p-8 md:p-12 text-center md:text-right flex flex-col md:flex-row items-center gap-8 shadow-[0_0_40px_rgba(236,72,153,0.1)]">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">ما سایت‌ساز آماده و وردپرس کار نمی‌کنیم!</h2>
              <p className="text-slate-300 leading-relaxed font-medium text-justify">
                تیم مهندسی <strong className="text-white">کیا دِو</strong>، پروژه‌ی شما را از خط اول با تکنولوژی‌های لبه دانش (Next.js) کُدنویسی می‌کند. نتیجه‌ی این کار، <strong className="text-pink-300">سرعت لود زیر ۱ ثانیه</strong>، امنیت بانکی و دریافت یک <strong className="text-blue-300">اپلیکیشن موبایل مدیریت سایت</strong> است تا کل کسب‌وکارتان را از داخل گوشی کنترل کنید.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
               <Smartphone className="w-32 h-32 text-pink-400 opacity-80" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MINI PORTFOLIO ================= */}
      <section className="pt-12 pb-20 bg-[#050505]">
        <div className="container mx-auto max-w-6xl px-4">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-white/5 pb-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl md:text-3xl font-black text-white">منتخب نمونه‌کارها</h2>
                <span className="text-xs text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">Real Projects</span>
              </div>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                موارد زیر تنها <strong className="text-pink-400">بخش کوچکی از ده‌ها پروژه عظیم و موفق</strong> تیم مهندسی کیا دِو است. ما برای هر ایده و کسب‌وکاری، یک راهکار بی‌نقص و در سطح جهانی داریم.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {miniPortfolio.map((project) => (
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-500/50 transition-all active:scale-95"
              >
                <div className="flex flex-col w-full truncate pr-2">
                  <span className="text-base font-bold text-white truncate group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </span>
                  <span className="text-xs text-slate-500 font-mono mt-1">
                    {project.category}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors shrink-0">
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-pink-400" />
                </div>
              </a>
            ))}
          </div>
          
          <p className="text-center text-xs text-slate-500 mt-8">
            با کلیک روی هر آیتم، می‌توانید کیفیت، سرعت و طراحی پروژه‌ها را به صورت زنده تست کنید.
          </p>
        </div>
      </section>

      {/* ================= LIVE DEMO (تست زنده تکنولوژی) ================= */}
      <section className="py-20 relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-pink-600/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <div className="bg-white/5 border-2 border-dashed border-pink-500/30 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
            
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              
              <div className="lg:w-1/2 text-center lg:text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 text-pink-400 font-bold mb-6 border border-pink-500/20 shadow-inner">
                  <ScanLine size={18} className="animate-pulse" />
                  تست زنده تکنولوژی (Live Demo)
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                  حرف زدن کافیست؛ <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">خودتان سرعت را لمس کنید!</span>
                </h2>
                <p className="text-slate-300 leading-relaxed font-medium text-justify mb-6">
                  ما به جای وعده‌های توخالی، قدرت سیستم را در دستان شما قرار می‌دهیم. با اسکن کیوآر کدهای زیر، <strong className="text-white">اپلیکیشن تستی</strong> را روی گوشی اندرویدی خود نصب کنید و <strong className="text-white">وب‌سایت دمو</strong> را باز کنید.
                </p>
                <div className="bg-black/40 border border-white/10 p-5 rounded-2xl text-sm text-slate-300 text-justify leading-relaxed shadow-inner">
                  <strong className="text-pink-400 text-base block mb-2">🎯 ماموریت شما:</strong> 
                  در اپلیکیشن موبایل، قیمت یک محصول را تغییر دهید یا وضعیت فروشگاه را ببندید. حالا سایت دمو را نگاه کنید؛ در کمتر از ۱ ثانیه (بدون نیاز به رفرش) همه‌چیز آپدیت می‌شود! این دقیقاً همان جادویی است که برای کسب‌وکار شما می‌سازیم.
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 w-full justify-center">
                
                {/* <--- اینجا QRCode جایگزین QRCodeCanvas شد ---> */}
                <div className="bg-black/60 border border-white/10 p-6 rounded-3xl flex flex-col items-center text-center flex-1 hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all">
                  <div className="bg-white p-3 rounded-2xl mb-5 shadow-lg border-4 border-white/10">
                    <QRCode value="https://github.com/bahadorbahador11111-cmd/Kiyadev-App/releases/download/v1.0.0/Kiyadev.App.v1.apk" size={140} level="M" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-1">اپلیکیشن مدیریت</h4>
                  <p className="text-xs text-slate-400 font-medium bg-white/5 px-3 py-1 rounded-full mt-2">اسکن برای نصب (اندروید)</p>
                </div>

                <div className="bg-black/60 border border-white/10 p-6 rounded-3xl flex flex-col items-center text-center flex-1 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">
                  <div className="bg-white p-3 rounded-2xl mb-5 shadow-lg border-4 border-white/10">
                    <QRCode value="https://www.kiyadev.ir/demo-app" size={140} level="M" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-1">وب‌سایت دمو</h4>
                  <p className="text-xs text-slate-400 font-medium bg-white/5 px-3 py-1 rounded-full mt-2">اسکن برای مشاهده زنده</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">تعرفه‌های طراحی و کدنویسی اختصاصی</h2>
            <p className="text-slate-400">بدون هزینه‌های پنهان؛ یک‌بار سرمایه‌گذاری برای یک عمر درآمدزایی</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* پکیج ۱ */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-bold text-slate-300 mb-2">پکیج اقتصادی</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">۱۶</span>
                <span className="text-sm text-slate-500 font-bold">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['کدنویسی اختصاصی سایت', 'اپلیکیشن موبایل مدیریت', 'دامنه ir. به نام شما', 'هاست ابری رایگان', 'اتصال به درگاه بانکی'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> {f}</li>
                ))}
              </ul>
            </div>

            {/* پکیج ۲ */}
            <div className="bg-pink-900/10 border-2 border-pink-500/50 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-xl shadow-pink-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg shadow-pink-500/30">پیشنهاد استاندارد</div>
              <h3 className="text-xl font-bold text-pink-400 mb-2">پکیج استاندارد</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">۲۰</span>
                <span className="text-sm text-pink-300/80 font-bold">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['تمام امکانات پکیج اقتصادی', 'راه‌اندازی روی سرور پرسرعت', 'سئوی پایه گوگل', 'ورود ۳۰ محصول اولیه', 'دیتابیس ابری سریع'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white"><CheckCircle2 size={18} className="text-blue-400 shrink-0" /> {f}</li>
                ))}
              </ul>
            </div>

            {/* پکیج ۳ */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-pink-500/30 transition-all">
              <h3 className="text-xl font-bold text-slate-300 mb-2">پکیج پادشاهی</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">۲۶</span>
                <span className="text-sm text-slate-500 font-bold">میلیون تومان</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['تمام امکانات پکیج استاندارد', 'کدهای ساختاریافته سئو', 'ربات اعلام سفارش بله', 'اتصال به پنل پیامکی', 'طراحی فوق اختصاصی'].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 size={18} className="text-pink-400 shrink-0" /> {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA & FOOTER ================= */}
      <footer className="py-16 px-4 bg-[#0a0a0a] border-t border-white/5 text-center">
        <div className="container mx-auto max-w-2xl">
          <div className="w-20 h-20 bg-pink-500/10 text-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">آماده‌ی استارت پروژه هستید؟</h2>
          <p className="text-slate-400 mb-8 text-sm md:text-base leading-relaxed">
            برای دریافت مشاوره تخصصی، بررسی دقیق ایده شما و عقد قرارداد، همین الان با مدیر پروژه تماس بگیرید.
          </p>
          
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <a href="tel:09924230576" className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-pink-600 text-white px-6 py-4 rounded-xl font-black text-lg hover:from-blue-500 hover:to-pink-500 transition-all active:scale-95 shadow-lg shadow-pink-600/20">
              <span dir="ltr" className="tracking-widest">0992 423 0576</span>
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a href="https://wa.me/989924230576" target="_blank" className="flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-6 py-3.5 rounded-xl font-bold hover:bg-[#25D366]/20 transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" />
              پیام مستقیم در واتساپ
            </a>
          </div>

          <div className="mt-16 text-slate-600 text-xs font-mono">
            © 2026 KiyaDev Engineering. All rights reserved. <br/>
            Project Manager Reference Link.
          </div>
        </div>
      </footer>

    </div>
  );
}