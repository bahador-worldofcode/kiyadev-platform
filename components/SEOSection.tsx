"use client";

import { motion } from "framer-motion";
import { 
  Code2, Smartphone, Terminal, Database, Cpu, Lock, 
  Globe, Server, Wrench, Search, ShoppingCart, Bot 
} from "lucide-react";

// دیتای جامع خدمات برای سئو (SEO Content Strategy)
// تمام کلمات کلیدی و توضیحات دقیقاً مطابق متن درخواستی شماست.
const servicesData = [
  {
    title: "طراحی وب‌سایت‌های اختصاصی و سامانه‌های تحت وب",
    icon: Globe,
    keywords: ["طراحی سایت اختصاصی", "برنامه نویسی Next.js", "طراحی پرتال سازمانی", "سایت بدون وردپرس", "ری‌دیزاین سایت"],
    description: `
      در کیا دِو، ما اعتقادی به قالب‌های آماده و سیستم‌های کند مثل وردپرس نداریم. تخصص ما طراحی وب‌سایت (Web Design) به صورت کاملاً کدنویسی شده (Hard-Coded) با استفاده از جدیدترین تکنولوژی‌های روز دنیا یعنی Next.js 15 و React.js است. 
      خدمات ما در این بخش شامل طراحی لندینگ پیج‌های تبلیغاتی با نرخ تبدیل بالا، ساخت وب‌سایت‌های شرکتی چندزبانه‌، پیاده‌سازی سامانه‌های اتوماسیون اداری تحت وب، و طراحی داشبوردهای مدیریتی (Admin Panels) با رابط کاربری پیشرفته است. 
      ما تضمین می‌کنیم که سایت شما با معماری SSR (Server Side Rendering) پیاده‌سازی شود تا بالاترین امتیاز را در Google Core Web Vitals کسب کند و سرعت لود آن زیر ۱ ثانیه باشد.
    `
  },
  {
    title: "ساخت اپلیکیشن موبایل (Android & iOS) و PWA",
    icon: Smartphone,
    keywords: ["ساخت اپلیکیشن موبایل", "برنامه نویسی Flutter", "طراحی اپلیکیشن فروشگاهی", "وب اپلیکیشن پیش‌رونده", "React Native"],
    description: `
      کسب‌وکار شما نیاز به حضور در جیب مشتریان دارد. ما متخصص ساخت اپلیکیشن موبایل (Mobile App Development) با استانداردهای جهانی هستیم. 
      با استفاده از فریم‌ورک‌های قدرتمند Flutter (فلاتر) و React Native، ما اپلیکیشن‌هایی می‌سازیم که همزمان خروجی اندروید (APK) و iOS پایدار داشته باشند. 
      همچنین تخصص ویژه‌ای در توسعه وب‌اپلیکیشن‌های پیش‌رونده (PWA) داریم؛ تکنولوژی جدیدی که به کاربران اجازه می‌دهد وب‌سایت شما را مثل یک اپلیکیشن روی گوشی نصب کنند، بدون اینکه نیاز به انتشار در اپ‌استورها باشد. این راهکار برای استارتاپ‌های ایرانی که با محدودیت‌های اپل مواجه هستند، حیاتی است.
    `
  },
  {
    title: "عیب‌یابی، دیباگ و رفع خطاهای نرم‌افزاری",
    icon: Wrench,
    keywords: ["رفع باگ سایت", "دیباگ کردن کد", "حل مشکل برنامه نویسی", "استخدام دیباگر", "اصلاح کدهای کثیف"],
    description: `
      آیا پروژه شما به بن‌بست خورده است؟ آیا توسعه‌دهنده قبلی کدها را ناقص رها کرده؟ نگران نباشید. یکی از خدمات کلیدی کیا دِو، دیباگ و رفع خطا (Software Debugging) است. 
      تیم مهندسی ما آمادگی دارد تا پیچیده‌ترین پروژه‌های شکست‌خورده را نجات دهد. ما خدماتی نظیر Refactoring (بازنویسی استاندارد کد)، رفع باگ‌های امنیتی، حل مشکلات لاجیک (Logic Errors)، و بهینه‌سازی کدهای کند (Performance Tuning) را ارائه می‌دهیم. 
      فرقی نمی‌کند پروژه شما با پایتون، جاوا اسکریپت، PHP یا گولنگ نوشته شده باشد؛ ما با مهندسی معکوس، ریشه خطا را پیدا کرده و سیستم را به چرخه حیات بازمی‌گردانیم.
    `
  },
  {
    title: "برنامه‌نویسی بک‌ند و معماری میکروسرویس",
    icon: Terminal,
    keywords: ["برنامه نویسی پایتون", "توسعه دهنده Django", "معماری میکروسرویس", "برنامه نویسی Golang", "طراحی API"],
    description: `
      قلب تپنده هر نرم‌افزاری، بخش بک‌ند (Back-end) آن است. ما در کیا دِو از قدرتمندترین زبان‌های دنیا برای مدیریت منطق سرور استفاده می‌کنیم. 
      تخصص اصلی ما زبان Python (پایتون) و فریم‌ورک جنگو (Django) برای پروژه‌های هوش مصنوعی و داده‌محور است. 
      برای پروژه‌هایی که نیاز به پردازش‌های سنگین و همزمانی بالا دارند (مثل صرافی‌ها یا پیام‌رسان‌ها)، از زبان‌های Go (Golang) و Rust استفاده می‌کنیم. 
      طراحی RESTful API و GraphQL، پیاده‌سازی معماری میکروسرویس (Microservices) و داکرایز کردن (Dockerization) پروژه‌ها تخصص روزمره ماست.
    `
  },
  {
    title: "توسعه بلاکچین، قرارداد هوشمند و Web3",
    icon: Lock,
    keywords: ["برنامه نویسی بلاکچین", "ساخت توکن ارز دیجیتال", "قرارداد هوشمند سالیدیتی", "طراحی سایت NFT", "پروژه Web3"],
    description: `
      ورود به دنیای غیرمتمرکز تخصص ماست. تیم کیا دِو یکی از معدود گروه‌های ایرانی مسلط به برنامه‌نویسی بلاکچین (Blockchain Development) است. 
      ما خدمات کاملی شامل نوشتن قراردادهای هوشمند (Smart Contracts) با زبان Solidity بر روی شبکه‌های اتریوم، بایننس اسمارت چین و ترون ارائه می‌دهیم. 
      اگر قصد راه‌اندازی صرافی غیرمتمرکز (DEX)، ساخت توکن اختصاصی (Tokenomics)، پلتفرم خرید و فروش NFT یا اپلیکیشن‌های غیرمتمرکز (DApps) را دارید، ما دانش فنی و امنیت کدهای شما را تضمین می‌کنیم.
    `
  },
  {
    title: "هوش مصنوعی و یکپارچه‌سازی با AI",
    icon: Cpu,
    keywords: ["هوش مصنوعی در سایت", "اتصال به ChatGPT", "برنامه نویسی AI", "پردازش متن و تصویر", "یادگیری ماشین"],
    description: `
      آینده متعلق به هوش مصنوعی است. ما کسب‌وکار شما را هوشمند می‌کنیم. خدمات ما در این بخش شامل اتصال وب‌سایت و اپلیکیشن شما به مدل‌های زبانی بزرگ مثل GPT-4 و ChatGPT از طریق API است. 
      ما می‌توانیم چت‌بات‌های هوشمند پشتیبانی، سیستم‌های تولید محتوای خودکار، و ابزارهای تحلیل رفتار کاربر مبتنی بر AI را برای شما پیاده‌سازی کنیم. 
      با استفاده از کتابخانه‌های پایتون، داده‌های کسب‌وکار شما را تحلیل کرده و الگوهای پنهان فروش را کشف می‌کنیم.
    `
  },
  {
    title: "طراحی فروشگاه اینترنتی و E-Commerce",
    icon: ShoppingCart,
    keywords: ["طراحی سایت فروشگاهی", "فروشگاه ساز اختصاصی", "اتصال به درگاه پرداخت", "انبارداری آنلاین", "مارکت پلیس"],
    description: `
      ما فروشگاه‌هایی می‌سازیم که می‌فروشند. تخصص ما طراحی پلتفرم‌های E-Commerce کاملاً اختصاصی است که محدودیتی در تعداد محصول یا ترافیک ندارند. 
      برخلاف ووکامرس که در حجم بالا کند می‌شود، فروشگاه‌های ما با تکنولوژی Next.js و دیتابیس‌های قدرتمند، هزاران تراکنش را در ثانیه مدیریت می‌کنند. 
      امکاناتی نظیر سبد خرید پویا، فیلترینگ پیشرفته محصولات (مشابه دیجی‌کالا)، سیستم چندفروشندگی (Marketplace)، کیف پول دیجیتال و اتصال به تمام درگاه‌های بانکی و پستی کشور به صورت پیش‌فرض در پکیج‌های ما وجود دارد.
    `
  },
  {
    title: "مدیریت سرور، امنیت و DevOps",
    icon: Server,
    keywords: ["کانفیگ سرور لینوکس", "خدمات DevOps", "امنیت شبکه", "راه اندازی CI/CD", "تست نفوذ"],
    description: `
      نرم‌افزار خوب نیاز به زیرساخت خوب دارد. ما فقط کد نمی‌نویسیم، بلکه مسئولیت اجرای آن را هم می‌پذیریم. 
      خدمات DevOps و مدیریت سرور ما شامل کانفیگ حرفه‌ای سرورهای لینوکس (Ubuntu/CentOS)، ایمن‌سازی سرور در برابر حملات DDoS، پیکربندی Nginx و Apache، و راه‌اندازی پایگاه‌های داده (PostgreSQL, MongoDB, Redis) است. 
      ما همچنین فرآیندهای استقرار خودکار (CI/CD Pipelines) را با استفاده از GitHub Actions و Docker راه اندازی می‌کنیم تا آپدیت‌های سایت شما بدون قطعی و در لحظه انجام شود.
    `
  },
  {
    title: "ساخت ربات‌های تلگرام و اتوماسیون",
    icon: Bot,
    keywords: ["ساخت ربات تلگرام", "ربات فروشگاهی تلگرام", "اتوماسیون اداری", "اسکریپت نویسی پایتون", "ربات مدیریت گروه"],
    description: `
      تلگرام در ایران یک پلتفرم تجاری قدرتمند است. ما با استفاده از کتابخانه‌های قدرتمند پایتون، ربات‌های تلگرام (Telegram Bots) پیشرفته‌ای طراحی می‌کنیم که می‌توانند فروشگاه کامل، سیستم نوبت‌دهی، مدیریت کانال و گروه، و یا ابزار پشتیبانی مشتریان باشند. 
      علاوه بر این، ما اسکریپت‌های اتوماسیون (Automation Scripts) می‌نویسیم که کارهای تکراری روزانه شما را (مثل جمع‌آوری داده از وب، پر کردن فرم‌ها، ارسال گزارشات) به صورت خودکار انجام دهند.
    `
  },
  {
    title: "بهینه‌سازی دیتابیس و مدیریت داده",
    icon: Database,
    keywords: ["طراحی دیتابیس", "بهینه سازی SQL", "دیتابیس NoSQL", "مهاجرت داده ها", "Supabase"],
    description: `
      داده‌ها دارایی اصلی شما هستند. تیم ما تخصص عمیقی در طراحی و بهینه‌سازی پایگاه‌های داده دارد. 
      ما مسلط به دیتابیس‌های رابطه‌ای (PostgreSQL, MySQL) و دیتابیس‌های NoSQL (MongoDB, Redis) هستیم. 
      اگر کوئری‌های سایت شما کند شده، نیاز به طراحی اسکیما (Schema Design) برای پروژه جدید دارید، یا می‌خواهید داده‌های خود را از یک سیستم قدیمی به سیستم جدید منتقل کنید (Data Migration)، ما این کار را با تضمین عدم از دست رفتن اطلاعات انجام می‌دهیم.
    `
  }
];

export default function SEOSection() {
  return (
    <section className="bg-black py-20 px-6 border-b border-white/5">
      <div className="container mx-auto max-w-6xl">
        
        {/* هدر بخش سئو */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            چرا کیا دِو؟ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">پوشش ۳۶۰ درجه خدمات نرم‌افزاری</span>
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ما یک شرکت تک‌بعدی نیستیم. کیا دِو یک اکوسیستم کامل فنی است که از طراحی رابط کاربری تا پیچیده‌ترین لایه‌های سرور و بلاکچین را پوشش می‌دهد. در لیست زیر، شرح کامل خدمات تخصصی ما را مطالعه کنید.
          </p>
        </div>

        {/* لیست خدمات جامع */}
        <div className="grid grid-cols-1 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* آیکون و عنوان */}
                <div className="flex-shrink-0 md:w-1/4">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* ابر کلمات کلیدی (برای گوگل) */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.keywords.map((kw, i) => (
                      <span key={i} className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                        # {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* توضیحات کامل */}
                <div className="md:w-3/4">
                  <div className="text-gray-400 text-justify leading-loose text-base md:text-lg">
                    {service.description.split('\n').map((line, i) => (
                      <span key={i} className="block mb-2">{line}</span>
                    ))}
                  </div>
                  
                  {/* دکمه دعوت به اقدام اصلاح شده */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-end">
                    <a 
                      href="tel:09168038017"
                      className="text-sm font-bold text-blue-400 group-hover:translate-x-[-5px] transition-all cursor-pointer hover:text-blue-300"
                    >
                      درخواست مشاوره برای این سرویس ←
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* متن پایانی سئو */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 text-center border border-white/5">
          <p className="text-gray-300 leading-relaxed">
            <strong>کیا دِو (KiyaDev)</strong> متعهد است که پیچیده‌ترین چالش‌های فنی شما را حل کند. چه نیاز به طراحی یک <strong>وب‌سایت ساده</strong> داشته باشید و چه قصد پیاده‌سازی یک <strong>صرافی ارز دیجیتال</strong> یا سیستم مبتنی بر <strong>هوش مصنوعی</strong> را داشته باشید، تیم نخبگان ما آماده خدمت‌رسانی است. همین امروز تماس بگیرید و تفاوت همکاری با مهندسین واقعی نرم‌افزار را تجربه کنید.
          </p>
        </div>

      </div>
    </section>
  );
}