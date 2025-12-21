"use client";

import { motion } from "framer-motion";
import { 
  MonitorSmartphone, 
  ShoppingCart, 
  Bot, 
  Blocks, 
  BrainCircuit, 
  MessageSquare, 
  Wrench 
} from "lucide-react";

const services = [
  {
    title: "توسعه SaaS و داشبورد",
    description: "ساخت پنل‌های مدیریتی پیچیده و نرم‌افزارهای تحت وب سازمانی با بالاترین استاندارد امنیتی.",
    icon: MonitorSmartphone,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "فروشگاه‌های اختصاصی",
    description: "طراحی فروشگاه‌های اینترنتی نسل جدید (بدون وردپرس) با سرعت لود زیر ۱ ثانیه و انبارداری هوشمند.",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "وب‌اپلیکیشن (PWA)",
    description: "تبدیل وبسایت شما به اپلیکیشن موبایل قابل نصب روی اندروید و iOS بدون نیاز به اپ‌استور.",
    icon: Bot, // موقت، آیکون مرتبط
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "بلاکچین و Web3",
    description: "توسعه قراردادهای هوشمند (Smart Contracts)، توکن‌سازی دارایی‌ها و پلتفرم‌های NFT.",
    icon: Blocks,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "هوش مصنوعی و اتوماسیون",
    description: "اتصال کسب‌وکار به ChatGPT، تحلیل داده‌ها و ساخت دستیارهای هوشمند اختصاصی.",
    icon: BrainCircuit,
    color: "from-red-500 to-rose-400",
  },
  {
    title: "ربات‌های تلگرام",
    description: "طراحی ربات‌های پیشرفته برای فروش خودکار، مدیریت کانال و تعامل با مشتری.",
    icon: MessageSquare,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "دیباگ و نجات نرم‌افزاری",
    description: "بررسی کدهای قدیمی، رفع باگ‌های امنیتی و بازنویسی سیستم‌های شکست‌خورده.",
    icon: Wrench,
    color: "from-gray-200 to-gray-400",
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-24 px-6 bg-black">
      {/* تیتر بخش */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            خدمات امپراتوری کیا دِو
          </span>
        </h2>
        <p className="mt-4 text-gray-400">راهکارهای مهندسی برای چالش‌های مدرن</p>
      </div>

      {/* گرید کارت‌ها */}
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/10 ${
              index === 6 ? "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto" : ""
            }`}
          >
            {/* گرادینت پس‌زمینه موقع هاور */}
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-[50px] transition-opacity group-hover:opacity-20`} />

            <div className="relative z-10 flex flex-col items-start gap-4">
              <div className={`rounded-xl bg-gradient-to-br ${service.color} p-3 text-white shadow-lg`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}