import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
// ۱. ایمپورت کردن کامپوننت هدر
import Header from "@/components/Header";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "کیا دِو | امپراتوری نرم‌افزار و تکنولوژی",
  description: "تیم توسعه‌دهنده نخبه در زمینه وب، اپلیکیشن، بلاکچین و هوش مصنوعی.",
  // نکته: نیازی به تعریف آیکون در اینجا نیست، چون فایل icon.png در پوشه app وجود دارد.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} bg-black text-white antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white`}>
        
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