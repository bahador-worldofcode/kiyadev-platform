"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ProjectModal from "./ProjectModal"; // ایمپورت مودال

const plans = [
  {
    name: "لندینگ پیج (شروع)",
    price: "۱,۰۰۰,۰۰۰",
    period: "شروع قیمت از",
    description: "مناسب برای معرفی شخصی یا محصول خاص",
    features: [
      "طراحی تک صفحه مدرن",
      "دامنه .ir رایگان",
      "سرعت لود فوق‌العاده",
      "بهینه شده برای موبایل",
      "۳ ماه پشتیبانی فنی"
    ],
    color: "bg-gray-800",
    buttonColor: "bg-white text-black hover:bg-gray-200",
    popular: false,
    categoryKey: "other" // کلید برای مودال
  },
  {
    name: "سایت شرکتی / فروشگاهی",
    price: "۵,۰۰۰,۰۰۰",
    period: "شروع قیمت از",
    description: "پکیج کامل برای ورود قدرتمند به بازار",
    features: [
      "طراحی چند صفحه اختصاصی",
      "پنل مدیریت فارسی",
      "درگاه پرداخت آنلاین",
      "سئو مقدماتی (رایگان)",
      "اتصال به اینستاگرام",
      "۶ ماه پشتیبانی رایگان"
    ],
    color: "bg-blue-900/40 border-blue-500/50",
    buttonColor: "bg-blue-600 text-white hover:bg-blue-700",
    popular: true,
    categoryKey: "shop" // کلید برای مودال
  },
  {
    name: "پلتفرم اختصاصی (App)",
    price: "توافقی",
    period: "تماس بگیرید",
    description: "برای ایده‌های بزرگ و استارتاپ‌ها",
    features: [
      "توسعه با React & Next.js",
      "اپلیکیشن موبایل (PWA)",
      "داشبورد مدیریت پیشرفته",
      "قرارداد رسمی محرمانگی",
      "سرور اختصاصی",
      "پشتیبانی ۱۲ ماهه VIP"
    ],
    color: "bg-gray-900",
    buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90",
    popular: false,
    categoryKey: "pwa" // کلید برای مودال
  }
];

export default function Pricing() {
  // تعریف استیت‌ها داخل خود کامپوننت (برای تمیز ماندن page.tsx)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOrderClick = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-black py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">
              تعرفه‌های <span className="text-blue-500">شفاف و دانشجویی</span>
            </h2>
            <p className="text-gray-400">
              کیفیت "سیلیکون ولی" با قیمت "ریالی". ما هوای کسب‌وکارهای نوپا را داریم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  plan.popular 
                    ? "border-blue-500 shadow-2xl shadow-blue-900/20 scale-105 z-10" 
                    : "border-white/10 bg-white/5"
                } ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-xs font-bold text-white">
                    پیشنهاد ویژه
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-300">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-sm text-gray-500">تومان</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{plan.period}</p>
                  <p className="mt-4 text-sm text-gray-400">{plan.description}</p>
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleOrderClick(plan.categoryKey)}
                  className={`w-full rounded-xl py-4 font-bold transition-all active:scale-95 ${plan.buttonColor}`}
                >
                  سفارش دهید
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* مودال به صورت داخلی فراخوانی شده تا کار راحت شود */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultCategory={selectedCategory} 
      />
    </>
  );
}