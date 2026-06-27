import React from 'react';

// توابع فرمت‌بندی
const toPersianDigits = (num: string | number) => {
  if (!num) return '';
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
      
      {/* ماده ۱: بروزرسانی شده با اطلاعات کامل هویتی */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۱: مشخصات طرفین قرارداد</h4>
        <div className="space-y-2">
          <p>
            <span className="font-bold text-slate-900">مجری (پیمانکار):</span> جناب آقای بهادر جدیدالاسلام (به نمایندگی از تیم توسعه نرم‌افزار کیا دِو KiyaDev)
            <br />
            <span className="text-slate-600 font-bold text-sm">کد ملی:</span> ۱۷۴۱۳۹۳۲۸۰ &nbsp;|&nbsp; 
            <span className="text-slate-600 font-bold text-sm">شماره تماس:</span> ۰۹۱۶۸۰۳۸۰۱۷ &nbsp;|&nbsp; 
            <span className="text-slate-600 font-bold text-sm">آدرس:</span> تهران، میدان فاطمی، پایین‌تر از میدان جهاد، خیابان غفاری، پلاک ۳۲
          </p>
          <p className="pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-900">کارفرما:</span> جناب آقای {clientName || '......................................'}
            <br />
            <span className="text-slate-600 font-bold text-sm">کد ملی / شناسه ملی:</span> {data?.clientNationalId ? toPersianDigits(data.clientNationalId) : '..................'} &nbsp;|&nbsp; 
            <span className="text-slate-600 font-bold text-sm">شماره تماس:</span> {data?.clientPhone ? toPersianDigits(data.clientPhone) : '..................'}
            <br />
            <span className="text-slate-600 font-bold text-sm">آدرس:</span> {data?.clientAddress || '......................................................'}
            {data?.clientPostalCode && <span> &nbsp;|&nbsp; <span className="text-slate-600 font-bold text-sm">کد پستی:</span> {toPersianDigits(data.clientPostalCode)}</span>}
          </p>
        </div>
      </section>

      {/* ماده ۲: اضافه شدن بند تغییرات جزئی */}
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
          <li><span className="font-bold text-blue-700">چارچوب تغییرات جزئی:</span> انجام تغییرات جزئی صرفاً شامل اصلاحات ظاهری (UI) نظیر تغییر رنگ‌ها، جابه‌جایی المان‌های موجود و اصلاح متون، پیش از تایید نهایی فاز دوم می‌باشد. هرگونه تغییر در منطق برنامه‌نویسی، افزودن امکانات جدید، صفحات جدید یا تغییر در جریان داده‌ها (Data Flow) مشمول برآورد زمان و هزینه مجزا خواهد بود.</li>
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
          مبلغ کل این قرارداد معادل <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md border border-yellow-400/50 mx-1">{formatCurrency(data?.totalAmount) || '۰'} تومان</span> می‌باشد که طی ۳ مرحله پرداخت می‌گردد:
        </p>
        <ul className="list-disc list-outside pr-5 mt-4 space-y-3">
          <li><span className="font-bold text-slate-900">پیش‌پرداخت (فاز ۱):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase1Amount) || '۰'} تومان</span> همزمان با عقد قرارداد.</li>
          <li><span className="font-bold text-slate-900">تحویل اولیه (فاز ۲):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase2Amount) || '۰'} تومان</span> پس از اتمام کدنویسی و رویت سامانه.</li>
          <li><span className="font-bold text-slate-900">تسویه نهایی (فاز ۳):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase3Amount) || '۰'} تومان</span> پس از انجام اصلاحات نهایی.</li>
        </ul>
      </section>

      {/* ماده ۵: اضافه شدن بند جریمه تاخیر و دسترسی سرور */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۵: زمان‌بندی تحویل، تعهدات زیرساختی و جرایم</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>مدت زمان اجرای پروژه <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md mx-1">{toPersianDigits(data?.deliveryDays) || '۰'} روز کاری</span> پس از واریز پیش‌پرداخت می‌باشد.</li>
          <li>
            <span className="font-bold">جریمه تأخیر:</span> در صورت تأخیر در تحویل نهایی پروژه، پیمانکار موظف است به ازای هر روز تأخیر، معادل ۱٪ از مبلغ کل قرارداد را به عنوان جریمه دیرکرد پرداخت نماید. 
            <span className="font-bold text-red-600"> تبصره مهم:</span> این جریمه تنها در صورتی اعمال می‌گردد که تأخیر مستقیماً ناشی از کم‌کاری پیمانکار باشد. هرگونه تاخیر ناشی از عدم تحویل به موقع اطلاعات، سرور، درگاه بانکی، پنل پیامک و یا طولانی شدن پروسه بررسی و تایید از سوی کارفرما، به مدت زمان تحویل پروژه افزوده شده و مشمول جریمه نخواهد بود.
          </li>
          <li>
            <span className="font-bold">زیرساخت و سرور:</span> تامین هزینه‌ها و مالکیت حقوقی دامنه، سرور (VPS)، پنل پیامک و درگاه بانکی کاملاً بر عهده کارفرماست. جهت تسریع توسعه، پروژه موقتاً روی سرور تستی مجری بالا می‌آید اما برای تجاری‌سازی، تهیه سرور اصلی الزامی است. پیمانکار موظف است دسترسی کامل مدیریتی به سرور اصلی که توسط کارفرما خریداری شده است را به وی تحویل دهد.
            <span className="font-bold text-red-600"> تبصره:</span> سرور تستیِ استفاده شده در زمان توسعه، متعلق به زیرساخت پیمانکار بوده و صرفاً جهت رویت پیشرفت کار در اختیار کارفرما قرار می‌گیرد و تحویل دسترسی مدیریتی آن موضوعیت ندارد.
          </li>
        </ul>
      </section>
      
      {/* ماده ۶: اضافه شدن مستندات و اصلاح شدید بند مالکیت کد */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۶: پشتیبانی، سورس‌کد و مستندات فنی</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>
            <span className="font-bold">پشتیبانی و رفع باگ:</span> مجری عملکرد کدهای نوشته شده را به مدت <span className="font-black">{toPersianDigits(data?.supportMonths) || '۱۲'} ماه شمسی</span> گارانتی و پشتیبانی رایگان (صرفاً رفع باگ‌های احتمالی، مشکلات امنیتی و ایرادات عملکردی) می‌نماید. افزودن فیچرهای جدید نیازمند قرارداد مجزا است.
          </li>
          <li>
            <span className="font-bold">مالکیت و سورس‌کد:</span> مالکیت مادی و معنوی پروژه پس از تسویه حساب نهایی متعلق به کارفرما می‌باشد. پیمانکار موظف است <span className="font-black text-red-600 bg-red-50 px-1 rounded">منحصراً پس از پرداخت مرحله سوم (تسویه نهایی)</span>، سورس‌کد کامل پروژه را در مخزن اختصاصی کارفرما بارگذاری کرده و در اختیار وی قرار دهد.
          </li>
          <li>
            <span className="font-bold">مستندات:</span> پیمانکار موظف است در پایان پروژه، راهنمای کاربری و نحوه استفاده از پنل مدیریت (به صورت فایل متنی یا ویدیوی آموزشی) را جهت مدیریت سیستم در اختیار کارفرما قرار دهد.
          </li>
        </ul>
      </section>

      {/* ماده ۷: تعهدات امنیتی و محرمانگی (بند جدید) */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۷: تعهدات امنیتی و محرمانگی اطلاعات (NDA)</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>
            <span className="font-bold">امنیت سایبری:</span> پیمانکار موظف است استانداردهای امنیتی متداول در توسعه وب را رعایت نموده و اقدامات لازم برای جلوگیری از حملات رایج مانند SQL Injection، XSS و سایر آسیب‌پذیری‌های امنیتی را در سیستم پیاده‌سازی نماید تا سیستم در برابر نفوذهای ناشی از ضعف کدنویسی ایمن باشد.
          </li>
          <li>
            <span className="font-bold">حفظ محرمانگی:</span> پیمانکار متعهد می‌گردد تمامی اطلاعات مربوط به پروژه از جمله دامنه، وب‌سایت، سورس‌کد، اطلاعات کاربران، اطلاعات فنی و تجاری پروژه را محرمانه تلقی کرده و بدون اجازه کتبی کارفرما در اختیار شخص یا مجموعه دیگری قرار ندهد.
          </li>
        </ul>
      </section>

    </div>
  );
}