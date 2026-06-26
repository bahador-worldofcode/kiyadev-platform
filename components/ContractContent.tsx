import React from 'react';

// توابع فرمت‌بندی
const toPersianDigits = (num: string | number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
};

const formatCurrency = (num: string) => {
  if (!num) return '';
  const unformatted = num.toString().replace(/,/g, '').replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
  const formatted = unformatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return toPersianDigits(formatted);
};

export default function ContractContent({ clientName, projectName, data }: any) {
  return (
    <div className="space-y-8 leading-[2.2] text-[15px] text-justify text-slate-800">
      
      {/* ماده ۱ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۱: مشخصات طرفین قرارداد</h4>
        <p><span className="font-bold text-slate-900">مجری (پیمانکار):</span> جناب آقای بهادر جدیدالاسلام (به نمایندگی از تیم توسعه نرم‌افزار کیا دِو KiyaDev) - کد ملی: ۱۷۴۱۳۹۳۲۸۰ - شماره تماس: ۰۹۱۶۸۰۳۸۰۱۷</p>
        <p><span className="font-bold text-slate-900">کارفرما:</span> جناب آقای {clientName || '......................................'}</p>
      </section>

      {/* ماده ۲ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۲: موضوع قرارداد و شرح امکانات (Scope of Work)</h4>
        <p className="mb-2">
          موضوع این قرارداد، طراحی و پیاده‌سازی صفر تا صد پلتفرم تحت وب با نام تجاری «{projectName || 'نام پروژه'}» با رویکرد Mobile-First، ظاهری مدرن و اتصال به API های لازم می‌باشد. امکانات کلیدی به شرح زیر است:
        </p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold">رابط کاربری (UI/UX):</span> طراحی اختصاصی شامل بنر، جستجوی پیشرفته، دسته‌بندی‌ها و اسکرول بی‌نهایت.</li>
          <li><span className="font-bold">احراز هویت:</span> سیستم ثبت‌نام و ورود یکپارچه با شماره موبایل و رمز یکبار مصرف (OTP).</li>
          <li><span className="font-bold">کیف پول و پروفایل:</span> پیاده‌سازی کیف پول کاربری (با قابلیت شارژ بانکی) و داشبورد کاربری کامل.</li>
          <li><span className="font-bold">فرآیند رزرو و خدمات:</span> پیاده‌سازی چرخه کامل ثبت درخواست، تایید/لغو، پرداخت نهایی و ارسال پیامک‌های اطلاع‌رسانی.</li>
          <li><span className="font-bold">پنل مدیریت (Admin Panel):</span> مانیتورینگ کاربران، مدیریت محتوای استاتیک (CMS) جهت حفظ SEO، سیستم تیکتینگ و مدیریت تراکنش‌ها.</li>
        </ul>
      </section>

      {/* ماده ۳ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۳: وابستگی‌ها و محدودیت‌های سرویس‌دهنده (Third-Party APIs)</h4>
        <p className="mb-2">با توجه به استفاده از API سرویس‌های شخص ثالث (نظیر اتاقک، درگاه بانکی و پنل پیامک)، کارفرما موارد زیر را می‌پذیرد:</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold text-red-600">موجودی کیف پول واسط:</span> تایید نهایی رزروها در صورت اتصال به API اتاقک، منوط به داشتن شارژ کافی در کیف پول سازمانی کارفرما در پلتفرم مبدا می‌باشد. مجری مسئولیتی در قبال خطای رزرو ناشی از عدم موجودی ندارد.</li>
          <li><span className="font-bold text-red-600">به‌روزرسانی وضعیت‌ها:</span> به دلیل محدودیت‌های Webhook در برخی API ها، بروزرسانی وضعیت‌ها (مثل تایید میزبان) وابسته به استعلام‌های دوره‌ای سرور (Cron Job) بوده و با تاخیر چند دقیقه‌ای طبیعی است.</li>
          <li><span className="font-bold text-red-600">قطعی سرویس‌دهنده:</span> هرگونه قطعی، تغییر قوانین یا پولی شدن API های متصل، از حیطه مسئولیت مجری خارج است.</li>
        </ul>
      </section>

      {/* ماده ۴ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۴: مبلغ قرارداد و نحوه پرداخت</h4>
        <p>
          مبلغ کل این قرارداد معادل <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md border border-yellow-400/50 mx-1">{formatCurrency(data.totalAmount) || '۰'} تومان</span> می‌باشد که طی ۳ مرحله پرداخت می‌گردد:
        </p>
        <ul className="list-disc list-outside pr-5 mt-4 space-y-3">
          <li><span className="font-bold text-slate-900">پیش‌پرداخت (فاز ۱):</span> <span className="font-bold text-blue-700">{formatCurrency(data.phase1Amount) || '۰'} تومان</span> همزمان با عقد قرارداد.</li>
          <li><span className="font-bold text-slate-900">تحویل اولیه (فاز ۲):</span> <span className="font-bold text-blue-700">{formatCurrency(data.phase2Amount) || '۰'} تومان</span> پس از اتمام کدنویسی و رویت سامانه.</li>
          <li><span className="font-bold text-slate-900">تسویه نهایی (فاز ۳):</span> <span className="font-bold text-blue-700">{formatCurrency(data.phase3Amount) || '۰'} تومان</span> پس از انجام اصلاحات نهایی.</li>
        </ul>
      </section>

      {/* ماده ۵ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۵: زمان‌بندی تحویل و تعهدات زیرساختی</h4>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li>مدت زمان اجرای پروژه <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md mx-1">{toPersianDigits(data.deliveryDays) || '۰'} روز کاری</span> پس از واریز پیش‌پرداخت می‌باشد.</li>
          <li>تامین هزینه‌ها و مالکیت حقوقی دامنه، سرور (VPS)، پنل پیامک و درگاه بانکی کاملاً بر عهده کارفرماست. جهت تسریع توسعه، پروژه موقتاً روی سرور تستی مجری بالا می‌آید اما برای تجاری‌سازی، تهیه سرور اصلی الزامی است.</li>
        </ul>
      </section>
      
      {/* ماده ۶ و ۷ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۶: پشتیبانی و سورس‌کد</h4>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li>مجری عملکرد کدهای نوشته شده را به مدت <span className="font-black">{toPersianDigits(data.supportMonths) || '۱۲'} ماه شمسی</span> گارانتی و پشتیبانی رایگان (صرفاً رفع باگ) می‌نماید. افزودن فیچرهای جدید نیازمند قرارداد مجزا است.</li>
          <li>پس از تسویه حساب نهایی (مرحله ۳)، سورس‌کد کامل (Source Code) در مخزن اختصاصی کارفرما بارگذاری شده و مالکیت مادی آن واگذار می‌گردد.</li>
        </ul>
      </section>

    </div>
  );
}