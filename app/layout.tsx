import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
// ۱. ایمپورت کردن کامپوننت هدر
import Header from "@/components/Header";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

// تنظیمات متادیتا برای سئو و آیکون‌ها
export const metadata: Metadata = {
  title: "کیا دِو | امپراتوری نرم‌افزار و تکنولوژی",
  description: "تیم توسعه‌دهنده نخبه در زمینه وب، اپلیکیشن، بلاکچین و هوش مصنوعی.",
  // تنظیمات آیکون‌ها برای مرورگر و گوگل
  icons: {
    icon: '/icon.png',      // آیکون اصلی (تب مرورگر و نتایج گوگل)
    shortcut: '/icon.png',  // برای مرورگرهای قدیمی
    apple: '/icon.png',     // آیکون برای آیفون (اپل)
  },
  // فایل مانیفست برای تبدیل شدن به اپلیکیشن (PWA)
  manifest: '/manifest.json',
  // تنظیمات اشتراک‌گذاری در شبکه‌های اجتماعی (تلگرام، توییتر و...)
  openGraph: {
    title: "کیا دِو | امپراتوری نرم‌افزار",
    description: "تیم توسعه‌دهنده نخبه در زمینه وب، اپلیکیشن، بلاکچین و هوش مصنوعی.",
    url: "https://kiyadev.ir",
    siteName: "KiyaDev",
    locale: "fa_IR",
    type: "website",
  },
};

// تعریف داده‌های ساختاریافته (Structured Data) برای گوگل
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization", // نوع کسب‌وکار: سازمان/شرکت
  "name": "KiyaDev",
  "alternateName": "کیا دِو",
  "url": "https://kiyadev.ir",
  "logo": "https://kiyadev.ir/icon.png", // آدرس لوگو برای نمایش در گوگل
  "description": "تیم توسعه‌دهنده نخبه در زمینه وب، اپلیکیشن، بلاکچین و هوش مصنوعی.",
  "email": "info@kiyadev.ir",
  "telephone": "+989168038017",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+989168038017",
    "contactType": "customer service",
    "areaServed": "IR",
    "availableLanguage": "Persian"
  },
  "sameAs": [
    "https://t.me/Kioto_Osano", // لینک تلگرام
    "https://wa.me/989168038017" // لینک واتساپ
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} bg-black text-white antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white`}>
        
        {/* تزریق داده‌های ساختاریافته برای گوگل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ۲. اضافه کردن هدر در بالای صفحه */}
        <Header />
        
        {/* محتوای اصلی سایت */}
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}