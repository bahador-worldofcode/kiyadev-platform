"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <--- این خط طلایی اضافه شد
import { projects } from "@/lib/data";

export default function Portfolio() {
  // نمایش تنها ۳ پروژه اول در صفحه اصلی
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="bg-black py-24 px-6 relative overflow-hidden">
      {/* پترن پس‌زمینه */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* هدر بخش */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              آثاری که <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">افتخار ماست</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
              هر خط کد در این پروژه‌ها با وسواس و دقت نوشته شده. ما فقط نرم‌افزار نمی‌سازیم، اثر هنری خلق می‌کنیم.
            </p>
          </div>
          
          {/* دکمه مشاهده آرشیو کامل */}
          <Link href="/portfolio" className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all hover:gap-4 cursor-pointer">
            مشاهده آرشیو کامل
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* شبکه پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* بخش تصویر یا گرادینت */}
              <div className={`h-48 w-full relative overflow-hidden flex items-end p-4 ${project.image ? 'bg-black' : `bg-gradient-to-br ${project.gradient}`}`}>
                
                {/* حالت ۱: اگر پروژه عکس داشت */}
                {project.image && (
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                )}

                {/* حالت ۲: اگر پروژه عکس نداشت (نمایش افکت‌های نوری قبلی) */}
                {!project.image && (
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
                )}
                
                {/* لایه تاریک روی عکس برای خوانایی متن روی آن */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* دسته‌بندی روی تصویر */}
                <div className="relative z-10 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono border border-white/10 text-white font-bold">
                    {project.category}
                </div>
              </div>

              {/* محتوای کارت */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="mb-6 text-sm leading-relaxed text-gray-400 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* تگ‌ها */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-3 py-1 text-[10px] font-mono text-gray-300 bg-white/5 rounded-full border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* دکمه */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    مشاهده دمو
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}