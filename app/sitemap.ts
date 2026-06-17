// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kiyadev.ir';

  // ۱. دریافت تمام مقالات بلاگ از دیتابیس (با await)
  const posts = await getSortedPostsData();
  
  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.published_date || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ۲. تعریف صفحات ثابت (استاتیک)
  const routes = [
    '',
    '/portfolio',
    '/partners',
    '/blog', 
    '/hostel',      // صفحه خوابگاه‌ها
    '/real-estate'  // <--- صفحه جدید مشاورین املاک اضافه شد
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1, // صفحه اصلی و لندینگ‌های نیچ اولویت بالا دارند
  }));

  // ۳. ترکیب صفحات ثابت و مقالات بلاگ
  return [...routes, ...blogUrls];
}