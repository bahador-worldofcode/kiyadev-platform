import React from 'react';

// توابع تبدیل اعداد به فارسی و افزودن جداکننده هزارگان
const toPersianDigits = (num: string | number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
};

const formatCurrency = (num: string) => {
  if (!num) return '';
  // اول اعداد فارسی یا انگلیسی رو به عدد خالص انگلیسی تبدیل می‌کنیم
  const unformatted = num.toString().replace(/,/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
  // بعد سه رقم سه رقم کاما می‌ذاریم
  const formatted = unformatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // در نهایت به فارسی تبدیلش می‌کنیم
  return toPersianDigits(formatted);
};

interface ContractData {
  totalAmount: string;
  phase1Amount: string;
  phase2Amount: string;
  phase3Amount: string;
  deliveryDays: string;
  supportMonths: string;
}

interface ContractPreviewProps {
  clientName: string;
  projectName: string;
  data: ContractData;
}

export default function ContractPreview({ clientName, projectName, data }: ContractPreviewProps) {
  return (
    <div 
      className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200" 
      dir="rtl"
      style={{ fontFamily: '"Vazirmatn", "IRANSans", "Shabnam", "Tahoma", sans-serif' }}
    >
      <div className="text-center mb-8 border-b-2 border-slate-800 pb-6">
        <h2 className="text-3xl font-black mb-3">بسمه تعالی</h2>
        <h3 className="text-xl font-bold mt-2 text-slate-800">
          قرارداد طراحی، توسعه و پیاده‌سازی پلتفرم «{projectName || 'نام پروژه'}»
        </h3>
      </div>

      <div className="space-y-8 leading-[2.2] text-[15px] text-justify">
        {/* ماده ۱ */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-3">ماده ۱: مشخصات طرفین قرارداد</h4>
          <p><span className="font-bold text-slate-800">مجری (پیمانکار):</span> بهادر جدیدالاسلام (به نمایندگی از تیم توسعه نرم‌افزار کیا دِو) - کد ملی: ۱۷۴۱۳۹۳۲۸۰</p>
          <p><span className="font-bold text-slate-800">کارفرما:</span> {clientName || '......................................'}</p>
        </section>

        {/* ماده ۲ */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-3">ماده ۲: موضوع قرارداد</h4>
          <p>
            موضوع این قرارداد، طراحی و پیاده‌سازی صفر تا صد وب‌سایت/وب‌اپلیکیشن تجاری با رویکرد Mobile-First، ظاهری مدرن و کاربرپسند، و توسعه کامل زیرساخت‌ها بر اساس نیازمندی‌های مصوب می‌باشد.
          </p>
        </section>

        {/* ماده ۳ */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-3">ماده ۳: مبلغ قرارداد و نحوه پرداخت</h4>
          <p>
            مبلغ کل این قرارداد معادل <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md border border-yellow-400/50 mx-1">{formatCurrency(data.totalAmount) || '۰'} تومان</span> می‌باشد که طی ۳ مرحله به شرح زیر پرداخت می‌گردد:
          </p>
          <ul className="list-disc list-outside pr-5 mt-4 space-y-3">
            <li><span className="font-bold text-slate-800">مرحله اول (پیش‌پرداخت):</span> معادل <span className="font-bold text-blue-700 bg-blue-50 px-1.5 rounded">{formatCurrency(data.phase1Amount) || '۰'} تومان</span> همزمان با عقد قرارداد و شروع پروژه.</li>
            <li><span className="font-bold text-slate-800">مرحله دوم (تحویل اولیه):</span> معادل <span className="font-bold text-blue-700 bg-blue-50 px-1.5 rounded">{formatCurrency(data.phase2Amount) || '۰'} تومان</span> پس از اتمام کدنویسی و تحویل سامانه جهت بررسی.</li>
            <li><span className="font-bold text-slate-800">مرحله سوم (تسویه نهایی):</span> معادل <span className="font-bold text-blue-700 bg-blue-50 px-1.5 rounded">{formatCurrency(data.phase3Amount) || '۰'} تومان</span> پس از انجام اصلاحات نهایی و تایید کامل.</li>
          </ul>
        </section>

        {/* ماده ۴ */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-3">ماده ۴: زمان‌بندی و تحویل</h4>
          <p>
            مدت زمان اجرای پروژه <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md border border-yellow-400/50 mx-1">{toPersianDigits(data.deliveryDays) || '۰'} روز کاری</span> پس از واریز پیش‌پرداخت و تحویل اطلاعات اولیه می‌باشد.
          </p>
        </section>
        
        {/* ماده ۵ */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-3">ماده ۵: پشتیبانی و گارانتی</h4>
          <p>
            مجری عملکرد صحیح کدهای نوشته شده را به مدت <span className="font-black text-slate-800">{toPersianDigits(data.supportMonths) || '۱۲'} ماه شمسی</span> گارانتی و پشتیبانی رایگان (صرفاً جهت رفع باگ و ایرادات فنی کدها) می‌نماید. افزودن امکانات جدید شامل این پشتیبانی نخواهد بود.
          </p>
        </section>
      </div>
    </div>
  );
}