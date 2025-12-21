"use client";

import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6">
      {/* عناصر تزئینی پس‌زمینه */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[400px] w-[400px] rounded-full bg-blue-900/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-purple-900/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* ستون متن (سمت راست) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
              <GraduationCap className="h-4 w-4" />
              <span>تیم توسعه‌دهنده نخبه</span>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              تلفیق <span className="text-blue-500">دانش آکادمیک</span> با
              <br />
              تجربه بازار کار
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed text-gray-400">
              ما در کیا دِو (KiyaDev)، گروهی از دانشجویان ممتاز رشته نرم‌افزار هستیم که تصمیم گرفتیم کلیشه‌ها را بشکنیم. ما معتقدیم که "جوانی" به معنای "بی‌تجربگی" نیست، بلکه به معنای <strong className="text-white">جسارت در استفاده از جدیدترین تکنولوژی‌هاست.</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              در حالی که دیگران هنوز از روش‌های ۱۰ سال پیش استفاده می‌کنند، ما با Next.js 15 و هوش مصنوعی زندگی می‌کنیم. هدف ما ساده است: ارائه کیفیت سطح جهانی با هزینه‌ای که برای کسب‌وکارهای ایرانی منطقی باشد.
            </p>
          </motion.div>

          {/* ستون ویژگی‌ها (سمت چپ) */}
          <div className="grid gap-6">
            {/* کارت ۱ */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">سرعت اجرای بالا</h3>
                <p className="text-sm text-gray-400">تحویل پروژه در کوتاه‌ترین زمان ممکن</p>
              </div>
            </motion.div>

            {/* کارت ۲ */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">خلاقیت بدون مرز</h3>
                <p className="text-sm text-gray-400">ارائه راهکارهایی که دیگران نمی‌بینند</p>
              </div>
            </motion.div>

             {/* کارت ۳ */}
             <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">دانش به‌روز</h3>
                <p className="text-sm text-gray-400">مسلط به آخرین متدهای مهندسی نرم‌افزار</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}