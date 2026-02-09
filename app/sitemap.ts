import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kiyadev.ir';

  // ۱. دریافت تمام مقالات از دیتابیس Supabase
  // نکته: تابع getSortedPostsData الان async است و باید await شود
  const posts = await getSortedPostsData();
  
  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.created_at || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ۲. تعریف صفحات ثابت (استاتیک)
  const routes = [
    '',
    '/portfolio',
    '/partners',
    '/blog', // اضافه کردن خود صفحه اصلی بلاگ
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // ۳. ترکیب صفحات ثابت و مقالات بلاگ
  return [...routes, ...blogUrls];
}