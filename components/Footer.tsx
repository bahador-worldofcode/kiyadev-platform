"use client";

import { motion } from "framer-motion";
import { Phone, Send, MessageCircle, Code2, Heart, Library } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-10 overflow-hidden">
      {/* پس‌زمینه مشبک مهندسی (Grid Background) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* بخش بالا: فراخوان تماس (CTA) */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight"
          >
            ایده‌ای در سر دارید؟
          </motion.h2>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-3xl font-bold md:text-5xl lg:text-6xl tracking-tight"
          >
            همین الان شروع کنیم
          </motion.h2>
          
          {/* دکمه‌های عملیاتی */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col w-full max-w-lg gap-4 sm:flex-row justify-center"
          >
            <a 
              href="tel:09168038017" 
              className="group flex flex-1 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <Phone className="h-5 w-5 fill-black" />
              <span dir="ltr" className="tracking-widest">0916 803 8017</span>
            </a>

            <div className="flex flex-1 gap-3">
              <a 
                href="https://t.me/Kioto_Osano" 
                target="_blank"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-4 text-base font-bold text-blue-400 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <Send className="h-5 w-5" />
                تلگرام
              </a>

              <a 
                href="https://wa.me/989168038017" 
                target="_blank"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-4 text-base font-bold text-green-400 transition-all hover:bg-green-600 hover:text-white hover:border-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                واتساپ
              </a>
            </div>
          </motion.div>
        </div>

        {/* خط جداکننده مهندسی */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bg-black px-4 border border-white/5 rounded-full p-2">
            <Code2 className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* بخش پایین: اطلاعات و کپی‌رایت */}
        <div className="grid gap-8 md:grid-cols-2 items-end">
          
          {/* توضیحات برند */}
          <div className="text-center md:text-right space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <h3 className="text-2xl font-bold text-white tracking-wider">
                Kiya<span className="text-blue-500">Dev</span>
              </h3>
              
              {/* لینک پارتنرها */}
              <Link 
                href="/partners" 
                title="Partners & Projects"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all opacity-70 hover:opacity-100"
              >
                <Library className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-sm leading-7 text-gray-400 max-w-md mx-auto md:mx-0">
              ما یک تیم دانشجویی پیشرو هستیم که با استفاده از تکنولوژی‌های لبه دانش (Next.js, AI, Blockchain) کسب‌وکار شما را متحول می‌کنیم. هدف ما ارائه کیفیت جهانی با قیمت منطقی است.
            </p>
          </div>

          {/* کپی‌رایت انگلیسی + لینک بلاگ */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-xs text-gray-500 font-mono" dir="ltr">
              © 2025 KiyaDev. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-600 font-mono" dir="ltr">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> & Next.js 15
              
              {/* === دکمه مخفی بلاگ === */}
              <span className="mx-1 text-gray-800">|</span>
              <Link href="/blog" className="hover:text-blue-500 transition-colors cursor-pointer">
                Blog
              </Link>
              {/* ======================= */}

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}