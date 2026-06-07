// app/catalog/page.tsx
import React from "react";
import QRCode from "react-qr-code";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "کاتالوگ خدمات و پکیج‌ها | KiyaDev",
  description: "پکیج‌های طراحی سایت و اپلیکیشن کیادِو - بهترین کیفیت، بالاترین سرعت",
};

export default function CatalogPage() {
  return (
    // لایه اصلی با رنگ‌بندی روشن (محافظت در برابر تم تاریک سایت)
    <div className="min-h-screen bg-[#f4f4f9] text-[#333] py-12 px-4 sm:px-8 font-sans" dir="rtl">
      
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-200">
        
        {/* دکمه بازگشت به سایت */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-bold">
            <ArrowRight className="w-4 h-4" />
            بازگشت به سایت اصلی
          </Link>
        </div>

        {/* هدر کاتالوگ */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">پکیج‌های طراحی سایت و اپلیکیشن کیادِو</h1>
          <p className="text-lg font-medium text-gray-600">بهترین کیفیت، بالاترین سرعت</p>
        </div>

        {/* بخش چرا کیادو */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 inline-block mb-4">چرا کیادِو؟</h2>
          <p className="text-gray-700 leading-loose text-justify">
            ما در کیادِو به جای استفاده از قالب‌های آماده و کند، وب‌سایت و اپلیکیشن شما را از صفر با جدیدترین تکنولوژی‌های برنامه‌نویسی دنیا (تکنولوژی‌های استفاده شده در سایت‌های مطرح) می‌سازیم. نتیجه؟ سرعتی خیره‌کننده، سئوی قدرتمند برای تسخیر صفحه اول گوگل و یک اپلیکیشن موبایل اختصاصی برای مدیریت راحتِ فروشگاه شما.
          </p>
        </div>

        {/* جدول قیمت‌ها */}
        <div className="mb-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">پکیج‌های سرمایه‌گذاری دیجیتال</h2>
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden min-w-[800px]">
            <thead>
              <tr className="bg-blue-600 text-white text-right">
                <th className="p-4 border border-gray-200 w-1/3 font-bold text-lg">اقتصادی (۱۶ میلیون تومان)</th>
                <th className="p-4 border border-gray-200 w-1/3 font-bold text-lg">استاندارد (۲۰ میلیون تومان)</th>
                <th className="p-4 border border-gray-200 w-1/3 font-bold text-lg">ویژه (۲۶ میلیون تومان)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-5 border border-gray-200 align-top">
                  <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                    <li>طراحی وب‌سایت فروشگاهی / شرکتی</li>
                    <li>اپلیکیشن موبایل برای مدیریت سایت</li>
                    <li>ثبت دامنه ملی (.ir) به نام مشتری</li>
                    <li>میزبانی ابری بین‌المللی رایگان</li>
                    <li>اتصال به درگاه پرداخت اینترنتی</li>
                  </ul>
                </td>
                <td className="p-5 border border-gray-200 align-top bg-gray-50">
                  <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                    <li className="font-bold text-blue-700 list-none">تمام امکانات پکیج اقتصادی +</li>
                    <li>راه‌اندازی روی سرورهای پرسرعت ایرانی (هزینه ماهانه سرور با مشتری)</li>
                    <li>اتصال به شبکه توزیع محتوا (CDN) کلادفلر جهت امنیت و لود سریع</li>
                    <li>سئوی پایه و تنظیمات متاتگ‌ها برای گوگل</li>
                    <li>دیتابیس ابری سریع و ایمن</li>
                  </ul>
                </td>
                <td className="p-5 border border-gray-200 align-top">
                  <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                    <li className="font-bold text-blue-700 list-none">تمام امکانات پکیج استاندارد +</li>
                    <li>پیاده‌سازی کدهای ساختاریافته (JSON-LD) برای رتبه برتر سئو</li>
                    <li>اتصال به پنل پیامکی برای اطلاع‌رسانی سفارشات</li>
                    <li>طراحی رابط کاربری اختصاصی‌تر</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* تماس با ما */}
        <div className="text-center bg-gray-100 p-6 rounded-xl mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-3">ثبت سفارش و شروع پروژه</h3>
          <p className="text-gray-700">
            برای دریافت مشاوره تکمیلی و عقد قرارداد، لطفاً با <strong className="text-blue-600">نماینده رسمی کیادِو</strong> که این کاتالوگ را به شما ارائه داده است، در ارتباط باشید.
          </p>
        </div>

        {/* بخش کیوآر کدها */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 pt-10 border-t-2 border-gray-200">
          
          {/* کیوآر کد سایت */}
          <div className="flex flex-col items-center bg-white border border-gray-200 p-6 rounded-xl shadow-sm w-64 text-center hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-1">وب‌سایت نمونه کیادِو</h3>
            <p className="text-sm text-gray-500 mb-6">اسکن برای مشاهده زنده وب‌سایت</p>
            <div className="bg-white p-2 border rounded-lg">
              <QRCode 
                value="https://www.kiyadev.ir/demo-app" 
                size={160} 
                level="M"
              />
            </div>
          </div>
          
          {/* کیوآر کد اپلیکیشن */}
          <div className="flex flex-col items-center bg-white border border-gray-200 p-6 rounded-xl shadow-sm w-64 text-center hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-1">اپلیکیشن مدیریت</h3>
            <p className="text-sm text-gray-500 mb-6">اسکن برای دانلود و تست</p>
            <div className="bg-white p-2 border rounded-lg">
              <QRCode 
                value="https://github.com/bahadorbahador11111-cmd/Kiyadev-App/releases/download/v1.0.0/Kiyadev.App.v1.apk" 
                size={160} 
                level="M"
              />
            </div>
          </div>

        </div>

        {/* بخش دموی زنده */}
        <div className="mt-12 bg-blue-50 border-2 border-dashed border-blue-400 p-6 sm:p-8 rounded-xl text-center">
          <p className="text-blue-900 leading-loose text-[15px]">
            <strong className="text-blue-700 text-lg block mb-2">همین الان امتحان کنید!</strong> 
            با اسکن کیوآر کدِ اپلیکیشن و نصب آن، مدیریت وب‌سایت نمونه ما را به دست بگیرید. 
            قیمت‌ها را تغییر دهید، روی محصولات تخفیف بگذارید یا وضعیت فروشگاه را تغییر دهید و در همان لحظه نتایج را روی وب‌سایت مشاهده کنید. 
            <strong className="block mt-2">این دقیقاً همان سادگی و قدرتی است که برای مدیریت کسب‌وکار اختصاصی خود در دستانتان خواهید داشت!</strong>
          </p>
        </div>

      </div>
    </div>
  );
}