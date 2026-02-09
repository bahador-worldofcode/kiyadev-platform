import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kiyadev.ir';

  // ۱. دریافت تمام مقالات بلاگ از دیتابیس (با await)
  const posts = await getSortedPostsData();
  
  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // اگر تاریخ داشت استفاده کن، اگر نه تاریخ امروز
    lastModified: new Date(post.published_date || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ۲. تعریف صفحات ثابت (استاتیک)
  const routes = [
    '',
    '/portfolio',
    '/partners',
    '/blog', // صفحه اصلی بلاگ هم اضافه شد
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // ۳. ترکیب صفحات ثابت و مقالات بلاگ
  return [...routes, ...blogUrls];
}