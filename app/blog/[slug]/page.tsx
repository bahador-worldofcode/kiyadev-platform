import { getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, Share2, Bookmark, Hash } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const post = getPostData(slug);

    return (
      <article className="min-h-screen bg-[#020202] text-white pb-32 relative overflow-x-hidden selection:bg-blue-500/30">
        
        {/* Background Layers */}
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-900/10 to-transparent opacity-60" />

        <div className="container mx-auto max-w-5xl px-4 relative z-10 pt-16">
            
            {/* Navigation Bar */}
            <div className="flex justify-between items-center mb-12">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group border border-white/5 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full">
                    <ArrowRight className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    بازگشت به مرکز کنترل
                </Link>
                <div className="flex gap-3">
                    <button className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 transition-all">
                        <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 transition-all">
                        <Bookmark className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* The Main Canvas - بوم اصلی محتوا */}
            <div className="bg-[#080808] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-white/5">
                
                {/* Header Section */}
                <header className="relative p-10 md:p-16 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                        <Hash className="w-3 h-3" />
                        {post.tag}
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.3] mb-10 tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span>۱۰ دقیقه مطالعه</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <User className="w-4 h-4 text-green-500" />
                            <span>تیم فنی کیا دِو</span>
                        </div>
                    </div>
                </header>

                {/* Content Section - مهندسی شده‌ترین حالت ممکن */}
                <div dir="rtl" className="px-8 py-12 md:px-20 md:py-16 bg-[#0a0a0a]">
                    
                    <ReactMarkdown
                        components={{
                            // استایل اختصاصی برای پاراگراف‌ها
                            p: ({node, ...props}) => (
                                <p className="text-gray-300 text-lg leading-[2.2] text-justify mb-8 font-light" {...props} />
                            ),
                            // استایل اختصاصی برای تیتر H1 (که معمولا استفاده نمیشه چون در هدر هست)
                            h1: ({node, ...props}) => (
                                <h1 className="hidden" {...props} />
                            ),
                            // استایل اختصاصی برای تیتر H2 - جداسازی کامل
                            h2: ({node, ...props}) => (
                                <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 mb-6 pb-4 border-b border-white/10 flex items-center gap-3" {...props}>
                                    <span className="w-2 h-8 bg-blue-600 rounded-full inline-block"></span>
                                    {props.children}
                                </h2>
                            ),
                            // استایل اختصاصی برای تیتر H3
                            h3: ({node, ...props}) => (
                                <h3 className="text-xl font-bold text-blue-200 mt-10 mb-4" {...props} />
                            ),
                            // استایل اختصاصی برای لیست‌های نقطه‌ای
                            ul: ({node, ...props}) => (
                                <ul className="list-disc list-outside space-y-3 mb-10 mr-5 text-gray-300 marker:text-blue-500" {...props} />
                            ),
                            // استایل اختصاصی برای لیست‌های عددی
                            ol: ({node, ...props}) => (
                                <ol className="list-decimal list-outside space-y-4 mb-10 mr-5 text-gray-300 marker:text-blue-500 marker:font-bold" {...props} />
                            ),
                            // استایل اختصاصی برای آیتم‌های لیست
                            li: ({node, ...props}) => (
                                <li className="pl-2 leading-8" {...props} />
                            ),
                            // استایل اختصاصی برای نقل‌قول‌ها
                            blockquote: ({node, ...props}) => (
                                <blockquote className="border-r-4 border-blue-600 bg-blue-900/10 p-6 my-10 rounded-l-2xl text-gray-200 italic" {...props} />
                            ),
                            // استایل اختصاصی برای لینک‌ها
                            a: ({node, ...props}) => (
                                <a className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors font-medium" {...props} />
                            ),
                            // استایل اختصاصی برای متون بولد
                            strong: ({node, ...props}) => (
                                <strong className="text-white font-bold bg-white/10 px-1 rounded mx-0.5" {...props} />
                            )
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>

                    {/* Footer CTA */}
                    <div className="mt-20 pt-10 border-t border-white/5">
                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">آیا این مسیر برای شما جذاب بود؟</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                ما در کیا دِو دقیقاً همین استاندارد و نظم را در پروژه‌های مشتریان پیاده می‌کنیم.
                            </p>
                            <a href="tel:09168038017" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                                شروع پروژه اختصاصی
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    notFound();
  }
}