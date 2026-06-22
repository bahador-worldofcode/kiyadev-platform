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
  // نکته: صفحاتی مثل /advisor یا /catalog به دلیل noindex بودن در این لیست قرار ندارند.
  const routes = [
    '',
    '/portfolio',
    '/partners',
    '/blog', 
    '/hostel',        // صفحه خوابگاه‌ها
    '/real-estate',   // صفحه املاک
    '/security',      // صفحه سیستم‌های امنیتی
    '/beauty',        // <--- صفحه جدید سالن‌های زیبایی
    '/partnership',   // صفحه جذب نماینده
    '/guide',         // صفحه آموزش نمایندگان
    '/demo-app'       // صفحه دموی زنده
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' || route === '/hostel' || route === '/real-estate' || route === '/security' || route === '/beauty' ? 1 : 0.8, 
  }));

  // ۳. ترکیب صفحات ثابت و مقالات بلاگ
  return [...routes, ...blogUrls];
}