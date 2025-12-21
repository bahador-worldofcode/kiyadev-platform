import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kiyadev.ir'; // آدرس دامنه نهایی

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // اگر بعدا پنل ادمین داشتیم
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}