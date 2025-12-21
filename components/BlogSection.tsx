"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock } from "lucide-react";

// تعریف تایپ برای مقالات
interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

export default function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="text-right">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              نقشه‌های راه <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">تکنولوژی</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              جدیدترین مقالات تخصصی و آموزش‌های پروژه محور تیم کیا دِو برای کسانی که می‌خواهند همیشه بروز باشند.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-blue-500 font-mono text-sm border border-blue-500/20 px-4 py-2 rounded-xl bg-blue-500/5">
            <BookOpen size={18} />
            KiyaDev Library v1.0
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.08] hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-lg">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      مطالعه کامل
                      <ArrowLeft size={16} className="group-hover:translate-x-[-5px] transition-transform" />
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-gray-600 font-mono">
                      <Clock size={12} />
                      5 MIN READ
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}