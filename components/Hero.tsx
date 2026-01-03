"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Terminal } from "lucide-react";
import Link from "next/link"; 
import ProjectModal from "./ProjectModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20 lg:py-0">
        
        {/* اصلاح شد: اضافه کردن pointer-events-none برای اینکه این لایه‌ها مانع کلیک نشوند */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* اصلاح شد: اضافه کردن relative و z-10 برای اطمینان از کلیک‌خور بودن دکمه‌ها در موبایل */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-start space-y-6 text-right"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              پذیرش پروژه فعال است
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              ما <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">رویاهای شما</span> را کدنویسی می‌کنیم
            </h1>
            
            <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
              تیم توسعه‌دهنده KiyaDev با ترکیب دانش مهندسی نرم‌افزار و هوش مصنوعی، کسب‌وکار شما را به سطح جهانی می‌رساند. ما فقط سایت نمی‌سازیم، آینده را خلق می‌کنیم.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* دکمه اصلی: باز کردن مودال */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
              >
                سفارش پروژه
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              {/* دکمه دوم: لینک به صفحه نمونه‌کارها */}
              <Link 
                href="/portfolio"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
              >
                دیدن نمونه‌کارها
              </Link>
            </div>
          </motion.div>

          {/* بخش تصویر/گرافیک (سمت چپ) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center z-0"
          >
            {/* کارت شیشه‌ای متحرک */}
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl shadow-2xl">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-auto text-xs text-gray-500 font-mono">KiyaDev_Engine.tsx</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-purple-400">const</span>
                  <span className="text-yellow-400">Future</span>
                  <span className="text-white">=</span>
                  <span className="text-blue-400">await</span>
                  <span className="text-green-400">buildEmpire</span>
                  <span className="text-gray-400">();</span>
                </div>
                <div className="pl-4 text-gray-500">// We create limits just to break them.</div>
                <div className="flex gap-2">
                  <span className="text-purple-400">if</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-red-400">idea</span>
                  <span className="text-gray-400">)</span>
                  <span className="text-gray-400">{`{`}</span>
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-400">return</span>
                  <span className="text-green-400">"Success"</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div className="text-gray-400">{'}'}</div>
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/40"
              >
                <Code2 className="h-8 w-8 text-white" />
              </motion.div>
               <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 shadow-lg shadow-purple-600/40"
              >
                <Terminal className="h-7 w-7 text-white" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* فراخوانی مودال */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}