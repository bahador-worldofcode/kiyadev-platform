import React from 'react';

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
    <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-lg font-sans text-right leading-loose border border-slate-200" dir="rtl">
      <div className="text-center mb-8 border-b-2 border-slate-800 pb-4">
        <h2 className="text-2xl font-black">بسمه تعالی</h2>
        <h3 className="text-xl font-bold mt-2">قرارداد طراحی، توسعه و پیاده‌سازی پلتفرم «{projectName || 'نام پروژه'}»</h3>
      </div>

      <div className="space-y-6">
        {/* ماده 1 */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-2">ماده ۱: مشخصات طرفین قرارداد</h4>
          <p><span className="font-bold">مجری (پیمانکار):</span> بهادر جدیدالاسلام (به نمایندگی از تیم توسعه نرم‌افزار کیا دِو) - کد ملی: ۱۷۴۱۳۹۳۲۸۰</p>
          <p><span className="font-bold">کارفرما:</span> {clientName || '......................................'}</p>
        </section>

        {/* ماده 2 */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-2">ماده ۲: موضوع قرارداد</h4>
          <p>
            موضوع این قرارداد، طراحی و پیاده‌سازی صفر تا صد وب‌سایت/وب‌اپلیکیشن گردشگری با رویکرد Mobile-First، ظاهری مدرن و کاربرپسند، و اتصال کامل به API های لازم جهت دریافت اطلاعات و ثبت درخواست می‌باشد.
          </p>
        </section>

        {/* ماده 3 */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-2">ماده ۳: مبلغ قرارداد و نحوه پرداخت</h4>
          <p>
            مبلغ کل این قرارداد معادل <span className="font-black text-lg bg-yellow-200 px-1">{data.totalAmount || '۰'} تومان</span> می‌باشد که طی ۳ مرحله به شرح زیر پرداخت می‌گردد:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li><span className="font-bold">مرحله اول (پیش‌پرداخت):</span> معادل <span className="font-bold">{data.phase1Amount || '۰'} تومان</span> همزمان با عقد قرارداد.</li>
            <li><span className="font-bold">مرحله دوم (تحویل اولیه):</span> معادل <span className="font-bold">{data.phase2Amount || '۰'} تومان</span> پس از اتمام کدنویسی و تحویل سامانه.</li>
            <li><span className="font-bold">مرحله سوم (تسویه نهایی):</span> معادل <span className="font-bold">{data.phase3Amount || '۰'} تومان</span> پس از انجام اصلاحات نهایی.</li>
          </ul>
        </section>

        {/* ماده 4 */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-2">ماده ۴: زمان‌بندی و تحویل</h4>
          <p>
            مدت زمان اجرای پروژه <span className="font-black text-lg bg-yellow-200 px-1">{data.deliveryDays || '۰'} روز کاری</span> پس از واریز پیش‌پرداخت می‌باشد.
          </p>
        </section>
        
        {/* ماده 5 */}
        <section>
          <h4 className="text-red-600 font-black text-lg mb-2">ماده ۵: پشتیبانی و گارانتی</h4>
          <p>
            مجری عملکرد صحیح کدهای نوشته شده را به مدت <span className="font-black">{data.supportMonths || '۱۲'} ماه شمسی</span> گارانتی و پشتیبانی رایگان (صرفاً جهت رفع باگ) می‌نماید.
          </p>
        </section>
      </div>
    </div>
  );
}