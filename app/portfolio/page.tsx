"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // اضافه شده
import { 
  ArrowRight, ExternalLink, Layers, 
  Cpu, Database, Globe, Zap, ShieldCheck, 
  Layout, Search, Rocket 
} from "lucide-react";
import { projects } from "@/lib/data"; 

const categories = ["All", "Web3", "SaaS", "PWA", "AI"];
const methodologyData = [
  {
    title: "مهندسی نرم‌افزار و معماری سیستم (Software Architecture)",
    icon: Database,
    description: `
      در کیا دِو، هیچ پروژه‌ای بدون طراحی معماری دقیق شروع نمی‌شود.
      نمونه‌کارهایی که در اینجا مشاهده می‌کنید، حاصل ساعت‌ها تحلیل نیازمندی‌ها و طراحی UML است.
      ما برای پروژه‌های بزرگ (Scale-Up) از معماری میکروسرویس (Microservices) استفاده می‌کنیم تا اجزای سیستم مستقل عمل کنند.
      برای دیتابیس، اصول نرمال‌سازی (Normalization) تا سطح 3NF رعایت می‌شود تا افزونگی داده به صفر برسد.
      کدهای ما بر اساس اصول SOLID و Clean Architecture نوشته می‌شوند، بنابراین اگر روزی بخواهید فیچر جدیدی اضافه کنید، سیستم دچار فروپاشی نمی‌شود.
    `
  },
  {
    title: "توسعه فرانت‌اند با Next.js و تکنولوژی‌های لبه دانش",
    icon: Globe,
    description: `
      چرا سایت‌های ما متفاوت هستند؟
      چون ما از قالب آماده استفاده نمی‌کنیم. این پروژه‌ها با فریم‌ورک Next.js (نسخه ۱۵ به بالا) و React توسعه داده شده‌اند.
      استفاده از تکنولوژی SSR (Server Side Rendering) باعث می‌شود محتوای سایت شما قبل از رسیدن به مرورگر کاربر، در سرور ساخته شود؛
      این یعنی گوگل عاشق سایت شما خواهد شد.
      ما از Tailwind CSS برای استایل‌دهی استفاده می‌کنیم که حجم فایل‌های CSS را به کمتر از ۱۰ کیلوبایت می‌رساند.
      تمام انیمیشن‌ها با Framer Motion و به صورت سخت‌افزاری (GPU Accelerated) اجرا می‌شوند تا حس نرم بودن (Smoothness) را به کاربر منتقل کنند.
    `
  },
  {
    title: "بهینه‌سازی عملکرد و سرعت لود (Core Web Vitals)",
    icon: Zap,
    description: `
      سرعت، ویژگی رقابتی ماست.
      در توسعه پروژه‌های کیا دِو، ما متریک‌های حیاتی گوگل (LCP, FID, CLS) را بهینه می‌کنیم.
      تصاویر به صورت خودکار به فرمت WebP تبدیل می‌شوند. فونت‌ها به صورت لوکال و با تکنیک pre-load بارگذاری می‌شوند.
      ما از تکنیک‌های Code Splitting و Lazy Loading استفاده می‌کنیم تا کاربر در بازدید اول، فقط کدهای همان صفحه را دانلود کند، نه کل سایت را.
      نتیجه؟ لود شدن سایت در کمتر از ۱ ثانیه حتی با اینترنت موبایل.
    `
  },
  {
    title: "رابط کاربری و تجربه کاربری (UI/UX Design)",
    icon: Layout,
    description: `
      کد خوب بدون ظاهر خوب، دیده نمی‌شود.
      فرآیند طراحی ما در Figma شروع می‌شود.
      ما بر اساس روانشناسی رنگ‌ها و رفتار کاربر (User Behavior)، وایرفریم‌ها و پروتوتایپ‌ها را طراحی می‌کنیم.
      رعایت اصول دسترسی‌پذیری (Accessibility) برای ما یک الزام است تا سایت توسط همه افراد قابل استفاده باشد.
      طراحی‌های ما "موبایل-فرست" (Mobile-First) هستند؛ یعنی سایت شما در گوشی موبایل حتی بهتر از دسکتاپ نمایش داده می‌شود.
    `
  },
  {
    title: "امنیت سایبری و حفاظت از داده‌ها",
    icon: ShieldCheck,
    description: `
      امنیت در کیا دِو یک آپشن نیست، یک ضرورت است.
      تمام درخواست‌های API با توکن‌های JWT و پروتکل OAuth2 ایمن‌سازی می‌شوند.
      ما جلوی حملات رایج مثل SQL Injection، XSS و CSRF را در لایه کد می‌گیریم.
      اطلاعات حساس کاربران (مثل رمز عبور) با الگوریتم‌های هشینگ پیشرفته (Bcrypt/Argon2) رمزنگاری می‌شوند.
      سرورهای ما مجهز به فایروال‌های لایه اپلیکیشن (WAF) هستند تا در برابر حملات DDoS مقاوم باشند.
    `
  },
  {
    title: "سئو تکنیکال و ساختار معنایی (Semantic SEO)",
    icon: Search,
    description: `
      نوشتن کد تمیز کافی نیست، کد باید توسط گوگل فهمیده شود.
      ما از تگ‌های HTML5 معنایی (Semantic Tags) استفاده می‌کنیم (Header, Main, Article, Aside).
      تمام صفحات دارای متاتگ‌های داینامیک و اسکیما مارک‌آپ (Schema Markup) جیسون (JSON-LD) هستند.
      ساختار URLها استاندارد و Human-readable است.
      ما نقشه سایت (Sitemap.xml) و فایل Robots.txt را به صورت خودکار و دقیق تولید می‌کنیم تا خزنده‌های گوگل هیچ صفحه‌ای را از قلم نیندازند.
    `
  },
  {
    title: "تست‌نویسی و تضمین کیفیت (QA & Testing)",
    icon: Cpu,
    description: `
      ما باگ‌ها را قبل از مشتری پیدا می‌کنیم.
      پروژه‌های کیا دِو دارای تست‌های خودکار (Unit Tests & Integration Tests) هستند.
      ما از ابزارهایی مثل Jest و Cypress برای شبیه‌سازی رفتار کاربر استفاده می‌کنیم.
      هیچ کدی بدون پاس کردن تست‌ها وارد نسخه اصلی (Production) نمی‌شود. این یعنی پایداری صد در صدی نرم‌افزار شما.
    `
  },
  {
    title: "استقرار و پشتیبانی (DevOps & Deployment)",
    icon: Rocket,
    description: `
      پایان کدنویسی، شروع تعهد ماست.
      ما پروژه‌ها را روی زیرساخت‌های ابری مدرن (مثل Vercel یا سرورهای لینوکس اختصاصی) مستقر می‌کنیم.
      سیستم‌های مانیتورینگ لحظه‌ای (Real-time Monitoring) راه‌اندازی می‌شوند تا در صورت بروز هرگونه خطا، تیم فنی بلافاصله مطلع شود.
      پایپ‌لاین‌های CI/CD ما باعث می‌شوند که آپدیت‌های جدید سایت شما تنها با یک کلیک و بدون حتی یک لحظه قطعی (Zero Downtime) اعمال شوند.
    `
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* ---------------------------------------------------------- */}
      {/* HEADER SECTION */}
      {/* ---------------------------------------------------------- */}
      <div className="relative py-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center md:text-right">
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/20">
                <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                بازگشت به صفحه اصلی
            </Link>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                منتخب <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">پروژه‌های کیا دِو</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed md:leading-normal">
                مجموعه‌ای از بهترین آثار مهندسی شده توسط تیم <strong>کیا دِو</strong>.
                اینجا جایی است که خطوط کد به اثر هنری تبدیل می‌شوند و ایده‌ها جان می‌گیرند.
            </p>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* FILTER TABS */}
      {/* ---------------------------------------------------------- */}
      <div className="container mx-auto max-w-6xl px-6 mb-12">
        <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold ml-4 hidden md:block text-gray-500">
                فیلتر بر اساس:
            </span>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2 rounded-xl text-sm font-bold transition-all border ${
                        filter === cat 
                        ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105" 
                        : "bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-white"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* PROJECTS GRID */}
      {/* ---------------------------------------------------------- */}
      <div className="container mx-auto max-w-6xl px-6 pb-24 border-b border-white/10 mt-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={project.id}
                        className="group relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col"
                    >
                        {/* بخش تصویر پروژه */}
                        <div className={`h-56 w-full relative p-6 flex items-end overflow-hidden ${project.image ? 'bg-black' : `bg-gradient-to-br ${project.gradient}`}`}>
                             
                             {/* اگر عکس داشت نشان بده */}
                             {project.image && (
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                             )}

                             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                             
                             {/* اگر عکس نداشت، دایره تزئینی را نشان بده */}
                             {!project.image && (
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 blur-2xl rounded-full" />
                             )}
                             
                             <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono border border-white/10 text-white font-bold z-10">
                                {project.category}
                             </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
                                >
                                    <ExternalLink size={16} /> مشاهده دمو
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
            <div className="text-center py-20 opacity-50 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <Layers size={48} className="mx-auto mb-4 text-gray-500" />
                <p className="text-xl font-bold text-gray-400">پروژه‌ای در این دسته‌بندی یافت نشد.</p>
                <p className="text-sm text-gray-600 mt-2">به زودی پروژه‌های جدید اضافه می‌شوند...</p>
            </div>
        )}
      </div>

      {/* ---------------------------------------------------------- */}
      {/* SEO & METHODOLOGY SECTION */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-black py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                   پشت پرده <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">فناوری‌های کیا دِو</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                   ما فقط کد نمی‌نویسیم؛
                   ما راهکارهای دیجیتال را مهندسی می‌کنیم. 
                    در این بخش بخوانید که پروژه‌های بالا چگونه با استانداردهای جهانی ساخته شده‌اند و چرا گوگل و کاربران عاشق آن‌ها هستند.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {methodologyData.map((item, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-colors"
                    >
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 ring-1 ring-blue-500/20">
                                <item.icon size={32} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <div className="text-gray-400 text-justify leading-loose text-lg space-y-2">
                                {item.description.split('\n').filter(line => line.trim() !== '').map((line, i) => (
                                    <p key={i}>{line.trim()}</p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Final CTA */}
            <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                    پروژه بعدی ما، شاهکار کسب‌وکار شماست
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                    اگر به دنبال کیفیتی مشابه نمونه‌کارهای بالا هستید، همین حالا با تیم فنی کیا دِو ارتباط بگیرید. ما آماده‌ایم ایده شما را به واقعیت تبدیل کنیم.
                </p>
                <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                     <a href="tel:09168038017" className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                        شروع همکاری
                     </a>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}