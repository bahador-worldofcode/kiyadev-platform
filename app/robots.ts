import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kiyadev.ir';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // اضافه کردن پوشه قراردادها (agreement) به لیست سیاه گوگل
      disallow: ['/private/', '/agreement/'], 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}