import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";

export const metadata = {
  title: "وبلاگ تخصصی کیا دِو | جدیدترین مقالات برنامه نویسی",
  description: "مرجع آموزشی و خبری تیم کیا دِو. مقالات تخصصی درباره Next.js، هوش مصنوعی، بلاکچین و مهندسی نرم‌افزار.",
};

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-4 h-4" />
              بازگشت به خانه
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              مرکز دانش <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">KiyaDev</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              جایی که تجربیات فنی، چالش‌های مهندسی و آینده تکنولوژی را مستند می‌کنیم.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="h-full flex flex-col bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10">
                  
                  {/* Image Placeholder (اگر عکس داشت اینجا هندل می‌شود) */}
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                     {post.image_url ? (
                        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-4xl opacity-20 rotate-12">
                           BLOG
                        </div>
                     )}
                     <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.tag}
                     </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {post.published_date}
                      </span>
                      {post.reading_time && (
                         <span className="flex items-center gap-1.5">
                           <Clock className="w-3 h-3" />
                           {post.reading_time}
                         </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      ادامه مطلب
                      <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State (حالت بدون پست) */
          <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.02]">
            <div className="bg-white/5 p-6 rounded-full mb-6">
               <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">هنوز پستی منتشر نشده است</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              تیم محتوای کیا دِو در حال آماده‌سازی مقالات تخصصی است. به زودی با دست پر برمی‌گردیم.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}