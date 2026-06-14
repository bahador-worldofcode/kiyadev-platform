// app/contract/page.tsx
"use client";

import React from "react";
import { FileText, CheckSquare, PenTool, CircleDollarSign, CheckCircle2, Download } from "lucide-react";

export default function ContractPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 print:p-0 print:bg-white text-slate-900 overflow-x-hidden w-full" dir="rtl">
      
      {/* استایل‌های اختصاصی برای حذف حاشیه پرینتر و حفظ رنگ‌های پس‌زمینه */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />

      {/* دکمه پرینت / ذخیره پی‌دی‌اف */}
      <div className="max-w-[210mm] mx-auto mb-6 flex justify-end print:hidden w-full">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg transition-colors active:scale-95"
        >
          <Download className="w-5 h-5" />
          پرینت / دانلود به عنوان PDF
        </button>
      </div>

      {/* برگه اصلی A4 */}
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white p-5 md:p-12 shadow-2xl print:shadow-none print:p-4 rounded-xl print:rounded-none border border-slate-200 print:border-none w-full relative overflow-hidden">
        
        {/* هدر قرارداد */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b-2 border-slate-800 pb-6 mb-8 gap-6">
          <div className="flex items-center gap-4 text-center md:text-right w-full md:w-auto flex-col md:flex-row">
            <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center p-2 shadow-md shrink-0">
              <img src="/icon.png" alt="لوگو کیادِو" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">فرم سفارش و قرارداد طراحی</h1>
              <p className="text-slate-500 font-bold">تیم توسعه و مهندسی نرم‌افزار کیادِو</p>
            </div>
          </div>
          
          <div className="text-sm font-medium text-slate-600 space-y-3 bg-slate-50 border border-slate-200 p-4 rounded-xl w-full md:w-auto min-w-[200px]">
            <div className="flex items-center justify-between gap-4">
              <span className="w-12 text-slate-500">تاریخ:</span> 
              <span className="tracking-widest font-mono text-slate-800" dir="ltr">۱۴۰_ / _ _ / _ _</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="w-12 text-slate-500">شماره:</span> 
              <span className="flex-1 border-b border-dashed border-slate-400 h-4 min-w-[100px]"></span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <span className="w-12 text-slate-500">پیوست:</span> 
              <span className="font-bold text-slate-800">ندارد</span>
            </div>
          </div>
        </div>

        {/* ماده ۱: مشخصات طرفین */}
        <div className="mb-10">
          <h2 className="flex items-center gap-2 text-lg md:text-xl font-bold text-slate-800 mb-5 bg-slate-100 p-3 rounded-lg border border-slate-200">
            <FileText className="w-5 h-5 text-blue-600 shrink-0" /> ماده ۱: مشخصات طرفین قرارداد
          </h2>
          <div className="space-y-6 px-2 text-sm md:text-base">
            <div className="leading-[2.5] text-justify flex flex-wrap items-baseline">
              <span className="font-bold ml-2">پیمانکار:</span> 
              تیم نرم‌افزاری کیادِو به نمایندگی آقای / خانم
              <span className="flex-1 mx-2 border-b-2 border-dotted border-slate-400 min-w-[150px]"></span>
              که از این پس در این قرارداد «پیمانکار» نامیده می‌شود.
            </div>
            
            <div className="leading-[2.5] text-justify flex flex-wrap items-baseline">
              <span className="font-bold ml-2">کارفرما:</span>
              فروشگاه / مجموعه
              <span className="flex-1 mx-2 border-b-2 border-dotted border-slate-400 min-w-[150px]"></span>
              به نمایندگی آقای / خانم
              <span className="flex-1 mx-2 border-b-2 border-dotted border-slate-400 min-w-[150px]"></span>
              با کد ملی
              <span className="flex-1 mx-2 border-b-2 border-dotted border-slate-400 min-w-[120px]"></span>
            </div>

            <div className="leading-[2.5] text-justify flex flex-wrap items-baseline">
              شماره تماس ثابت
              <span className="flex-1 mx-2 border-b-2 border-dotted border-slate-400 min-w-[120px]"></span>
              و شماره موبایل
              <span className="flex-1 mx-2 border-b-2 border-dotted border-slate-400 min-w-[120px]"></span>
            </div>

            <div className="leading-[2.5] text-justify">
              <span className="font-bold">به آدرس فیزیکی:</span>
              <div className="w-full border-b-2 border-dotted border-slate-400 h-6 mt-2"></div>
              <div className="w-full border-b-2 border-dotted border-slate-400 h-10"></div>
            </div>
          </div>
        </div>

        {/* ماده ۲: مشخصات فنی و ظاهری پروژه */}
        <div className="mb-10">
          <h2 className="flex items-center gap-2 text-lg md:text-xl font-bold text-slate-800 mb-5 bg-slate-100 p-3 rounded-lg border border-slate-200">
            <PenTool className="w-5 h-5 text-blue-600 shrink-0" /> ماده ۲: مشخصات فنی و درخواست‌ها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 text-sm md:text-base">
            <div className="space-y-6">
              <div>
                <span className="font-bold block mb-3">پکیج انتخابی:</span>
                <div className="flex flex-wrap gap-4 text-sm bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <label className="flex items-center gap-2 cursor-pointer"><div className="w-4 h-4 border-2 border-slate-400 rounded-sm"></div> اقتصادی</label>
                  <label className="flex items-center gap-2 cursor-pointer"><div className="w-4 h-4 border-2 border-slate-400 rounded-sm"></div> استاندارد</label>
                  <label className="flex items-center gap-2 cursor-pointer"><div className="w-4 h-4 border-2 border-slate-400 rounded-sm"></div> ویژه</label>
                </div>
              </div>
              <div>
                <span className="font-bold block mb-2">حوزه فعالیت / محصولات:</span>
                <div className="w-full border-b-2 border-dotted border-slate-400 h-8"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="font-bold block mb-2">نام دامنه پیشنهادی (پسوند ir.):</span>
                <div className="flex items-end bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-lg" dir="ltr">
                  <span className="text-slate-600">www.</span>
                  <div className="flex-1 border-b-2 border-dashed border-slate-400 mx-2 mb-1"></div>
                  <span className="text-slate-600">.ir</span>
                </div>
              </div>
              <div>
                <span className="font-bold block mb-2">رنگ‌های سازمانی (۲ تا ۳ رنگ):</span>
                <div className="w-full border-b-2 border-dotted border-slate-400 h-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ماده ۳: تعهدات مالی و زمان‌بندی */}
        <div className="mb-10">
          <h2 className="flex items-center gap-2 text-lg md:text-xl font-bold text-slate-800 mb-5 bg-slate-100 p-3 rounded-lg border border-slate-200">
            <CircleDollarSign className="w-5 h-5 text-blue-600 shrink-0" /> ماده ۳: مبلغ قرارداد و شرایط پرداخت
          </h2>
          <div className="px-2 space-y-4 text-sm md:text-base leading-loose">
            <div className="flex flex-wrap items-baseline text-justify">
              مبلغ کل این قرارداد با توجه به پکیج انتخابی، برابر با 
              <span className="w-32 md:w-48 mx-2 border-b-2 border-dashed border-slate-400 inline-block text-center h-4"></span> 
              تومان تعیین می‌گردد.
            </div>
            <ul className="list-none space-y-4 mt-4">
              <li className="flex items-start gap-2 text-justify">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-3 shrink-0"></span>
                <div className="flex flex-wrap items-baseline w-full">
                  <span className="font-bold ml-1">پیش‌پرداخت (بیعانه):</span> پرداخت مبلغ 
                  <span className="w-24 md:w-40 mx-2 border-b-2 border-dotted border-slate-400 inline-block h-4"></span> 
                  تومان همزمان با امضای این قرارداد جهت استارت پروژه الزامی می‌باشد.
                </div>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-3 shrink-0"></span>
                <span>
                  <span className="font-bold ml-1">تسویه حساب:</span> مابقی مبلغ قرارداد همزمان با تحویل نهایی وب‌سایت، اپلیکیشن مدیریت و آموزش پنل، توسط کارفرما تسویه می‌گردد.
                </span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-3 shrink-0"></span>
                <span>
                  <span className="font-bold ml-1">زمان‌بندی تحویل:</span> پروژه نهایتاً طی <span className="font-black text-lg bg-yellow-100 px-2 py-0.5 rounded"> ۷ </span> روز کاری پس از واریز پیش‌پرداخت آماده تحویل خواهد بود.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ماده ۴: تعهدات طرفین */}
        <div className="mb-16">
          <h2 className="flex items-center gap-2 text-lg md:text-xl font-bold text-slate-800 mb-5 bg-slate-100 p-3 rounded-lg border border-slate-200">
            <CheckSquare className="w-5 h-5 text-blue-600 shrink-0" /> ماده ۴: تعهدات کلی
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 text-sm text-justify leading-relaxed">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <p className="font-bold mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> تعهدات کیادِو (پیمانکار)</p>
              <p className="text-slate-600">اجرای دقیق پروژه مطابق با امکانات پکیج انتخابی در کاتالوگ رسمی. تضمین سرعت و کیفیت کدهای استفاده شده. ثبت دامنه ملی منحصراً به نام کارفرما و ارائه پشتیبانی فنی پس از تحویل پروژه.</p>
            </div>
            <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
              <p className="font-bold mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500" /> تعهدات کارفرما</p>
              <p className="text-slate-600">ارائه به موقع اطلاعات اولیه شامل (لوگو، متن‌های دلخواه، شماره‌های تماس برای سایت و تصاویر چند محصول برای تست اولیه). تسویه حساب کامل بلافاصله پس از رویت و تایید نسخه نهایی.</p>
            </div>
          </div>
        </div>

        {/* محل امضا */}
        <div className="mt-auto pt-8 border-t-2 border-slate-200">
          <div className="flex flex-row justify-between items-end px-4 md:px-10">
            <div className="text-center space-y-12 w-1/2">
              <p className="font-bold text-slate-800 text-sm md:text-base">مهر و امضای کارفرما</p>
              <div className="w-24 md:w-40 mx-auto border-b border-dashed border-slate-400"></div>
            </div>
            <div className="text-center space-y-12 w-1/2">
              <p className="font-bold text-slate-800 text-sm md:text-base">امضای نماینده رسمی کیادِو</p>
              <div className="w-24 md:w-40 mx-auto border-b border-dashed border-slate-400"></div>
            </div>
          </div>
        </div>

        {/* پانویس */}
        <div className="text-center text-xs font-bold text-slate-400 mt-16 print:mt-16">
          این قرارداد در دو نسخه تنظیم گردیده که هر دو حکم واحد را دارند.
          <span className="block mt-1">وب‌سایت رسمی: www.kiyadev.ir</span>
        </div>

      </div>
    </div>
  );
}