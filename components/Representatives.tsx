"use client";

import { motion } from "framer-motion";
import { Users, MapPin, TrendingUp, ArrowLeft, Handshake } from "lucide-react";
import Link from "next/link";

export default function Representatives() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 border-t border-white/5">
      {/* افکت‌های نوری پس‌زمینه */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ستون متن و توضیحات */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">
              <Handshake className="w-4 h-4" />
              همکاری گسترده در سراسر کشور
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              شبکه قدرتمند <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">نمایندگان کیا دِو</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
              خدمات حرفه‌ای مرز نمی‌شناسد. ما با افتخار شبکه‌ای از ده‌ها نماینده و بازاریاب فعال در سراسر شهرهای ایران تشکیل داده‌ایم. این تیم متخصص، پل ارتباطی مستقیم ما با کسب‌وکارهای محلی هستند تا تکنولوژی‌های روز دنیا را با سریع‌ترین و مطمئن‌ترین حالت ممکن به دست شما برسانند.
            </p>

            <Link href="/partnership" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              شما هم شریک تجاری ما شوید
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* ستون آمار و کارت‌ها */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 hover:bg-white/[0.02] transition-all"
            >
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-black text-white mb-2">+۳۰</h3>
              <p className="text-gray-400 font-medium">شهر تحت پوشش</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 hover:bg-white/[0.02] transition-all sm:translate-y-8"
            >
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-black text-white mb-2">+۵۰</h3>
              <p className="text-gray-400 font-medium">نماینده فروش فعال</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 hover:bg-white/[0.02] transition-all sm:col-span-2 sm:-mt-2"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-2xl flex flex-shrink-0 items-center justify-center">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">تضمین بالاترین نرخ کمیسیون</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">نمایندگان ما ۵۰٪ از سود خالص هر پروژه را دریافت می‌کنند. یک تجارت پرسود و پایدار.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}