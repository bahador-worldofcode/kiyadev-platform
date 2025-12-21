import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kiyadev.ir';

  // ۱. دریافت تمام مقالات بلاگ برای ساخت لینک‌های داینامیک
  const posts = getSortedPostsData();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ۲. تعریف صفحات ثابت (استاتیک)
  const routes = [
    '',
    '/portfolio',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // ۳. ترکیب صفحات ثابت و مقالات بلاگ
  return [...routes, ...blogUrls];
}