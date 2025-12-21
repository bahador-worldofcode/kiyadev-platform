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
// وارد کردن تابع خواندن مقالات
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  // خواندن مقالات در سمت سرور
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Hero />
      <TechStack />
      <SEOSection />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      
      {/* پاس دادن مقالات به بخش بلاگ */}
      <BlogSection posts={posts} />
      
      <FAQ />
      <Footer />
    </main>
  );
}