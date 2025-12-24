"use client";

import { ExternalLink, Globe, Code2, ShoppingBag, Truck, Gem, Briefcase, Network, Bitcoin } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// لیست پروژه‌ها
const partners = [
  {
    id: 1,
    title: "صرافی تیوان اکس",
    description: "تیوان اکس، پیشرو در ارائه خدمات نوین بلاک‌چین در ایران. ما با بهره‌گیری از تکنولوژی‌های امنیتی روز دنیا و ذخیره‌سازی سرد، دارایی شما را تضمین می‌کنیم.",
    features: ["بلاکچین و Web3", "امنیت بانکی", "تراکنش آنی"],
    url: "https://alpha-system-eight.vercel.app", 
    icon: Bitcoin,
    color: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    id: 2,
    title: "فروشگاه آنلاین کوکونات",
    description: "بازار آنلاین میوه و پروتئین شهر پرند. خرید آنلاین تازه‌ترین محصولات با تحویل فوری درب منزل. تجربه‌ای راحت و سریع.",
    features: ["مارکت‌پلیس محلی", "لجستیک هوشمند", "تحویل فوری"],
    url: "https://cocodelivery.ir", 
    icon: Truck,
    color: "text-green-400",
    borderColor: "group-hover:border-green-500/50",
    glow: "group-hover:shadow-green-500/20"
  },
  {
    id: 3,
    title: "گالری جواهرات اَلِف جِم",
    description: "طراحی و ساخت جواهرات دست‌ساز با طلای ۱۸ عیار و سنگ‌های قیمتی اصل. ترکیب هنر مینیمال و مدرن برای خلق آثار ماندگار.",
    features: ["لوکس و فشن", "سنگ‌های قیمتی", "طراحی اختصاصی"],
    url: "https://alefgem.com", 
    icon: Gem,
    color: "text-purple-400",
    borderColor: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    id: 4,
    title: "سوغات شاپ اینترنشنال",
    description: "اولین پلتفرم ارسال هدیه به ایران با پرداخت ارزی و کریپتو. پل ارتباطی ایرانیان خارج از کشور با عزیزانشان.",
    features: ["پرداخت کریپتو", "فین‌تک فرامرزی", "E-Commerce"],
    url: "https://soughat.shop", 
    icon: ShoppingBag,
    color: "text-rose-400",
    borderColor: "group-hover:border-rose-500/50",
    glow: "group-hover:shadow-rose-500/20"
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-10 px-4 sm:px-8 relative overflow-hidden">
      
      {/* بک‌گراند نوری */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl">
        
        {/* هدر صفحه */}
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                بازگشت به خانه
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                <Network className="text-emerald-500" />
                شبکه همکاران تجاری
            </h1>
            <p className="text-slate-400 max-w-2xl leading-8 text-lg">
                کیادو بخشی از یک اکوسیستم بزرگتر است. در این بخش، مجموعه‌ای از پروژه‌های منتخب و کسب‌وکارهای معتبری که از زیرساخت‌های فنی یا مالی مشترک استفاده می‌کنند را معرفی می‌کنیم.
            </p>
        </div>

        {/* گرید کارت‌ها */}
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="dofollow" 
              className={`group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${partner.borderColor} ${partner.glow}`}
            >
              <div>
                {/* هدر کارت */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`rounded-2xl p-3 bg-slate-950 border border-slate-800 ${partner.color}`}>
                    <partner.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="rounded-full bg-slate-950 border border-slate-800 px-3 py-1 flex items-center gap-1">
                     <Briefcase size={12} className="text-slate-500" />
                    <span className="text-[10px] text-slate-500 font-mono uppercase">Partner</span>
                  </div>
                </div>

                <h2 className="mb-3 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {partner.title}
                </h2>
                
                <p className="text-sm leading-7 text-slate-400 mb-6 text-justify opacity-80 group-hover:opacity-100 transition-opacity">
                  {partner.description}
                </p>

                {/* تگ‌ها */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {partner.features.map((feature, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-950/80 text-slate-500 border border-slate-800 px-2.5 py-1 rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* فوتر کارت */}
              <div className="mt-auto border-t border-slate-800 pt-4 flex items-center justify-between">
                <span className={`text-xs font-bold transition-colors ${partner.color}`}>
                  بازدید از وب‌سایت
                </span>
                <div className="flex items-center gap-1 text-slate-600 group-hover:text-white transition-colors">
                  <span className="text-xs font-mono hidden sm:inline-block">{partner.url.replace('https://', '')}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}