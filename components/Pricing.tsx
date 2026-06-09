"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ProjectModal from "./ProjectModal";

const plans = [
  {
    name: "پکیج اقتصادی",
    price: "۱۶,۰۰۰,۰۰۰",
    period: "شروع قیمت از",
    description: "شروعی قدرتمند با امکانات کامل و مدیریت آسان",
    features: [
      "طراحی وب‌سایت فروشگاهی / شرکتی",
      "اپلیکیشن موبایل برای مدیریت سایت",
      "ثبت دامنه ملی (.ir) به نام مشتری",
      "میزبانی ابری بین‌المللی رایگان",
      "اتصال به درگاه پرداخت اینترنتی"
    ],
    color: "bg-gray-800",
    buttonColor: "bg-white text-black hover:bg-gray-200",
    popular: false,
    categoryKey: "shop" 
  },
  {
    name: "پکیج استاندارد",
    price: "۲۰,۰۰۰,۰۰۰",
    period: "شروع قیمت از",
    description: "پیشنهاد ویژه برای سرعت، امنیت و سئوی بهتر",
    features: [
      "تمام امکانات پکیج اقتصادی +",
      "راه‌اندازی روی سرورهای پرسرعت ایرانی",
      "اتصال به شبکه توزیع محتوا (CDN) کلادفلر",
      "سئوی پایه و تنظیمات متاتگ‌ها برای گوگل",
      "دیتابیس ابری سریع و ایمن"
    ],
    color: "bg-blue-900/40 border-blue-500/50",
    buttonColor: "bg-blue-600 text-white hover:bg-blue-700",
    popular: true,
    categoryKey: "shop" 
  },
  {
    name: "پکیج ویژه",
    price: "۲۶,۰۰۰,۰۰۰",
    period: "شروع قیمت از",
    description: "حداکثر قدرت و سئو برای تسخیر بازار هدف",
    features: [
      "تمام امکانات پکیج استاندارد +",
      "پیاده‌سازی کدهای ساختاریافته (JSON-LD)",
      "اتصال به پنل پیامکی برای اطلاع‌رسانی",
      "طراحی رابط کاربری اختصاصی‌تر"
    ],
    color: "bg-indigo-900/40 border-indigo-500/40",
    buttonColor: "bg-indigo-500 text-white hover:bg-indigo-600",
    popular: false,
    categoryKey: "shop" 
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
    categoryKey: "pwa" 
  }
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOrderClick = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-black py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">
              پکیج‌های <span className="text-blue-500">سرمایه‌گذاری دیجیتال</span>
            </h2>
            <p className="text-gray-400">
              کیفیت جهانی با قیمت‌های کاملاً منطقی. بهترین گزینه را برای رشد کسب‌وکار خود انتخاب کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col rounded-3xl border p-6 lg:p-8 ${
                  plan.popular 
                    ? "border-blue-500 shadow-2xl shadow-blue-900/20 scale-105 z-10" 
                    : "border-white/10 bg-white/5"
                } ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-xs font-bold text-white whitespace-nowrap">
                    پیشنهاد استاندارد
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-300">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-2xl lg:text-3xl font-black text-white">{plan.price}</span>
                        {plan.price !== "توافقی" && <span className="text-sm text-gray-500">تومان</span>}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{plan.period}</p>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed min-h-[40px]">{plan.description}</p>
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 mt-0.5">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span>{feature}</span>
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

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultCategory={selectedCategory} 
      />
    </>
  );
}