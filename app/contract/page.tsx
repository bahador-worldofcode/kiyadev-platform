// app/contract/page.tsx
"use client";

import React from "react";
import { Printer, FileText, CheckSquare, PenTool, CircleDollarSign, CheckCircle2, Download } from "lucide-react";

export default function ContractPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 font-sans print:p-0 print:bg-white text-slate-900" dir="rtl">
      
      {/* دکمه پرینت / ذخیره پی‌دی‌اف - فقط در صفحه نمایش دیده می‌شود */}
      <div className="max-w-[210mm] mx-auto mb-6 flex justify-end print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg transition-colors"
        >
          <Download className="w-5 h-5" />
          پرینت / دانلود به عنوان PDF
        </button>
      </div>

      {/* برگه اصلی A4 */}
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white p-8 md:p-12 shadow-2xl print:shadow-none print:p-4 rounded-xl print:rounded-none border border-slate-200 print:border-none">
        
        {/* هدر قرارداد */}
        <div className="flex justify-between items-start border-b-2 border-slate-800 pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 mb-2">فرم سفارش و قرارداد طراحی پلتفرم</h1>
            <p className="text-slate-500 font-bold">تیم توسعه و مهندسی نرم‌افزار کیادِو</p>
          </div>
          <div className="text-sm font-medium text-slate-600 space-y-2 border border-slate-200 p-3 rounded-lg">
            <div className="flex gap-2"><span className="w-16">تاریخ:</span> <span>....../....../۱۴۰</span></div>
            <div className="flex gap-2"><span className="w-16">شماره:</span> <span>........................</span></div>
            <div className="flex gap-2"><span className="w-16">پیوست:</span> <span>ندارد</span></div>
          </div>
        </div>

        {/* ماده ۱: مشخصات طرفین */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4 bg-slate-100 p-2 rounded-lg">
            <FileText className="w-5 h-5 text-blue-600" /> ماده ۱: مشخصات طرفین قرارداد
          </h2>
          <div className="space-y-4 px-2">
            <p className="leading-loose">
              <span className="font-bold">پیمانکار:</span> تیم نرم‌افزاری کیادِو به نمایندگی آقای / خانم ........................................................ که از این پس در این قرارداد «پیمانکار» نامیده می‌شود.
            </p>
            <p className="leading-loose">
              <span className="font-bold">کارفرما:</span> فروشگاه / مجموعه ........................................................ به نمایندگی آقای / خانم ........................................................ با کد ملی ........................................................ شماره تماس ثابت ........................................................ و شماره موبایل ........................................................ به آدرس فیزیکی ............................................................................................................................................................................................................ که از این پس «کارفرما» نامیده می‌شود.
            </p>
          </div>
        </div>

        {/* ماده ۲: مشخصات فنی و ظاهری پروژه */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4 bg-slate-100 p-2 rounded-lg">
            <PenTool className="w-5 h-5 text-blue-600" /> ماده ۲: مشخصات فنی و درخواست‌های کارفرما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <span className="font-bold">پکیج انتخابی:</span>
                <div className="flex gap-4 text-sm mt-1">
                  <label className="flex items-center gap-1"><div className="w-4 h-4 border border-slate-400 rounded-sm"></div> اقتصادی (۱۶م)</label>
                  <label className="flex items-center gap-1"><div className="w-4 h-4 border border-slate-400 rounded-sm"></div> استاندارد (۲۰م)</label>
                  <label className="flex items-center gap-1"><div className="w-4 h-4 border border-slate-400 rounded-sm"></div> ویژه (۲۶م)</label>
                </div>
              </div>
              <div>
                <span className="font-bold">حوزه فعالیت / نوع محصولات:</span>
                <div className="border-b border-dotted border-slate-400 h-6 mt-1"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="font-bold">نام دامنه پیشنهادی (پسوند ir.):</span>
                <div className="border-b border-dotted border-slate-400 h-6 mt-1 flex items-end font-mono text-left" dir="ltr">www. ........................................ .ir</div>
              </div>
              <div>
                <span className="font-bold">رنگ‌های سازمانی یا تم دلخواه (۲ تا ۳ رنگ):</span>
                <div className="border-b border-dotted border-slate-400 h-6 mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ماده ۳: تعهدات مالی و زمان‌بندی */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4 bg-slate-100 p-2 rounded-lg">
            <CircleDollarSign className="w-5 h-5 text-blue-600" /> ماده ۳: مبلغ قرارداد و شرایط پرداخت
          </h2>
          <div className="px-2 space-y-4 leading-loose">
            <p>
              مبلغ کل این قرارداد با توجه به پکیج انتخابی، برابر با <span className="inline-block w-48 border-b border-dotted border-slate-400 text-center"></span> تومان تعیین می‌گردد.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <span className="font-bold">پیش‌پرداخت (بیعانه):</span> پرداخت مبلغ <span className="inline-block w-40 border-b border-dotted border-slate-400 text-center"></span> تومان همزمان با امضای این قرارداد جهت رسمیت یافتن، لازم‌الاجرا شدن و استارت پروژه الزامی می‌باشد.
              </li>
              <li>
                <span className="font-bold">تسویه حساب:</span> مابقی مبلغ قرارداد همزمان با تحویل نهایی وب‌سایت، اپلیکیشن مدیریت و آموزش پنل، توسط کارفرما تسویه می‌گردد.
              </li>
              <li>
                <span className="font-bold">زمان‌بندی تحویل:</span> پروژه نهایتاً طی <span className="font-black text-lg"> ۷ </span> روز کاری پس از واریز پیش‌پرداخت و ارسال اطلاعات اولیه توسط کارفرما، آماده تحویل خواهد بود.
              </li>
            </ul>
          </div>
        </div>

        {/* ماده ۴: تعهدات طرفین */}
        <div className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-4 bg-slate-100 p-2 rounded-lg">
            <CheckSquare className="w-5 h-5 text-blue-600" /> ماده ۴: تعهدات کلی
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 text-sm text-justify leading-relaxed">
            <div>
              <p className="font-bold mb-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-600" /> تعهدات کیادِو (پیمانکار)</p>
              <p className="text-slate-600">اجرای دقیق پروژه مطابق با امکانات پکیج انتخابی در کاتالوگ رسمی. تضمین سرعت و کیفیت کدهای استفاده شده. ثبت دامنه ملی منحصراً به نام کارفرما و ارائه پشتیبانی فنی از طریق پیام‌رسان «بله» پس از تحویل پروژه.</p>
            </div>
            <div>
              <p className="font-bold mb-2 flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-orange-500" /> تعهدات کارفرما</p>
              <p className="text-slate-600">ارائه به موقع اطلاعات اولیه شامل (لوگو، متن‌های دلخواه، شماره‌های تماس برای سایت و تصاویر چند محصول برای تست اولیه). تسویه حساب کامل بلافاصله پس از رویت و تایید نسخه نهایی.</p>
            </div>
          </div>
        </div>

        {/* محل امضا */}
        <div className="mt-auto pt-8 border-t border-slate-200">
          <div className="flex justify-between items-end px-10">
            <div className="text-center space-y-12">
              <p className="font-bold text-slate-800">مهر و امضای کارفرما</p>
              <div className="w-32 border-b border-dashed border-slate-400"></div>
            </div>
            <div className="text-center space-y-12">
              <p className="font-bold text-slate-800">امضای نماینده رسمی کیادِو</p>
              <div className="w-40 border-b border-dashed border-slate-400"></div>
            </div>
          </div>
        </div>

        {/* پانویس */}
        <div className="text-center text-xs text-slate-400 mt-12 print:mt-16">
          این قرارداد در دو نسخه تنظیم گردیده که هر دو حکم واحد را دارند. وب‌سایت رسمی: www.kiyadev.ir
        </div>

      </div>
    </div>
  );
}