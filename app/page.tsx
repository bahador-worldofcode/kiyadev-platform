import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import SEOSection from "@/components/SEOSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// وارد کردن تابع جدید (که الان async است)
import { getSortedPostsData } from "@/lib/blog";

// تبدیل کامپوننت به async برای استفاده از await
export default async function Home() {
  // دریافت لیست پست‌ها از Supabase
  // اگر پستی نباشد، آرایه خالی [] برمی‌گردد و سایت کرش نمی‌کند
  const posts = await getSortedPostsData();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Hero />
      <TechStack />
      <SEOSection />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      
      {/* پاس دادن مقالات (یا آرایه خالی) به بخش بلاگ */}
      <BlogSection posts={posts} />
      
      <FAQ />
      <Footer />
    </main>
  );
}