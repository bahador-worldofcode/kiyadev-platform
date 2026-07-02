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
      
      {/* ماده ۱: مشخصات طرفین */}
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
            <span className="font-bold text-slate-900">کارفرما:</span> جناب آقای {clientName || 'صفا رشیدی (پیمانکاری رشیدی)'}
            <br />
            <span className="text-slate-600 font-bold text-sm">کد ملی / شناسه ملی:</span> {data?.clientNationalId ? toPersianDigits(data.clientNationalId) : '۳۵۸۰۹۷۶۸۴۲'} &nbsp;|&nbsp; 
            <span className="text-slate-600 font-bold text-sm">شماره تماس:</span> {data?.clientPhone ? toPersianDigits(data.clientPhone) : '..................'}
            <br />
            <span className="text-slate-600 font-bold text-sm">آدرس:</span> {data?.clientAddress || '......................................................'}
            {data?.clientPostalCode && <span> &nbsp;|&nbsp; <span className="text-slate-600 font-bold text-sm">کد پستی:</span> {toPersianDigits(data.clientPostalCode)}</span>}
          </p>
        </div>
      </section>

      {/* ماده ۲: موضوع قرارداد و امکانات */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۲: موضوع قرارداد و شرح امکانات (Scope of Work)</h4>
        <p className="mb-2">
          موضوع این قرارداد، طراحی و پیاده‌سازی صفر تا صد «سیستم یکپارچه مدیریت پروژه‌های ساختمانی و کارگاهی» تحت وب با رویکرد Mobile-First می‌باشد. سیستم به گونه‌ای طراحی می‌گردد که استفاده از آن برای کارگران و کمک‌مدیران در محیط کارگاه بسیار ساده و سریع باشد. امکانات کلیدی به شرح زیر است:
        </p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold">مدیریت سطوح دسترسی:</span> تعریف دو «مدیر اصلی» با دسترسی کامل به تمامی بخش‌ها (از طریق لپ‌تاپ و موبایل) و «کمک‌مدیر/سرکارگر» با دسترسی محدود جهت ثبت حضور و غیاب و اطلاعات روزمره در کارگاه.</li>
          <li><span className="font-bold">ماژول تخصصی محاسبات پیمانکاری:</span> امکان تعریف متراژ و قیمت ثابت برای آیتم‌های کاری (مرمر، سرامیک، موزاییک، قرنیز، پله). محاسبه خودکار دستمزد استادکاران صرفاً با وارد کردن «شماره ساختمان».</li>
          <li><span className="font-bold">حسابداری و کسورات هوشمند:</span> اعمال کسر خودکار ۱۰٪ از کل کارکرد استادکار + کسر دستی مبالغ مساعده (خرجی) پرداختی در طول ماه، جهت محاسبه دقیق و نهایی مبلغ قابل پرداخت.</li>
          <li><span className="font-bold">سیستم جلوگیری از تداخل (Validation):</span> تعبیه سیستم اخطار هوشمند؛ بدین نحو که در صورت تلاش برای ثبت یک آیتم (مثلاً مرمرکاری ساختمان ۲۴۵) که پیش‌تر برای استادکار دیگری ثبت و محاسبه شده، سیستم مانع ثبت تکراری گردد.</li>
          <li><span className="font-bold">گزارش‌دهی و جستجوی پیشرفته:</span> امکان جستجو بر اساس شماره ساختمان جهت مشاهده تفکیکی پیمانکاران آن واحد (مرمر، قرنیز و غیره) و همچنین تولید خودکار لیست صورت‌حساب‌های ماهانه برای هر استادکار.</li>
          <li><span className="font-bold">مدیریت هزینه‌های جاری:</span> ثبت سریع فاکتورهای خرید مصالح، تنخواه کارگاه و هزینه‌های روزمره جهت جلوگیری از مفقود شدن اسناد مالی.</li>
          <li><span className="font-bold">رابط کاربری کارگاهی (UI/UX):</span> طراحی به‌شدت ساده، خلوت و سریع با دکمه‌های بزرگ، سازگار با موبایل جهت استفاده آسان افراد فاقد دانش تخصصی کامپیوتر.</li>
          <li><span className="font-bold text-blue-700">چارچوب تغییرات جزئی:</span> انجام تغییرات جزئی صرفاً شامل اصلاحات ظاهری (UI) نظیر تغییر رنگ‌ها، جابه‌جایی المان‌های موجود و اصلاح متون، پیش از تایید نهایی فاز دوم می‌باشد. هرگونه تغییر در منطق برنامه‌نویسی یا افزودن امکانات جدید مشمول برآورد مجزا خواهد بود.</li>
        </ul>
      </section>

      {/* ماده ۳ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۳: وابستگی‌ها و محدودیت‌های سرویس‌دهنده</h4>
        <p className="mb-2">با توجه به ماهیت تحت وب بودن سیستم، کارفرما موارد زیر را می‌پذیرد:</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold text-red-600">پنل پیامک (SMS API):</span> در صورت نیاز به ورود یکپارچه با رمز یکبار مصرف (OTP)، تهیه و شارژ پنل پیامکی بر عهده کارفرما می‌باشد.</li>
          <li><span className="font-bold text-red-600">زیرساخت ابری:</span> پلتفرم موقتاً و بدون هزینه مازاد بر روی سرورهای ابری بین‌المللی مجری پیاده‌سازی می‌گردد. در آینده در صورت نیاز به سرور اختصاصی، هزینه‌های زیرساخت بر عهده کارفرما خواهد بود.</li>
        </ul>
      </section>

      {/* ماده ۴ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۴: مبلغ قرارداد و نحوه پرداخت</h4>
        <p>
          مبلغ کل این قرارداد معادل <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md border border-yellow-400/50 mx-1">{formatCurrency(data?.totalAmount) || '۳۰,۰۰۰,۰۰۰'} تومان</span> می‌باشد که طی ۳ مرحله پرداخت می‌گردد:
        </p>
        <ul className="list-disc list-outside pr-5 mt-4 space-y-3">
          <li><span className="font-bold text-slate-900">پیش‌پرداخت (فاز ۱):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase1Amount) || '۰'} تومان</span> همزمان با عقد قرارداد و شروع کار.</li>
          <li><span className="font-bold text-slate-900">تحویل اولیه (فاز ۲):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase2Amount) || '۰'} تومان</span> پس از اتمام کدنویسی و رویت و تایید اولیه سامانه.</li>
          <li><span className="font-bold text-slate-900">تسویه نهایی (فاز ۳):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase3Amount) || '۰'} تومان</span> پس از انجام اصلاحات نهایی، تحویل کامل و شروع کار با سیستم.</li>
        </ul>

        <div className="mt-5 p-4 bg-slate-50 border-2 border-slate-200 rounded-xl">
          <p className="font-bold text-slate-800 mb-3">اطلاعات حساب جهت واریز مبالغ قرارداد (به نام مجری):</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
            <div className="flex gap-2">
              <span className="text-slate-500 font-medium">به نام:</span> 
              <span className="font-bold text-slate-900">بهادر جدیدالاسلام</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-500 font-medium">شماره کارت:</span> 
              <span className="font-mono font-bold text-slate-900 tracking-widest" dir="ltr">6104-3376-7080-6973</span>
            </div>
            <div className="flex gap-2">
              <span className="text-slate-500 font-medium">شماره شبا:</span> 
              <span className="font-mono font-bold text-slate-900" dir="ltr">IR62-0120-0100-0000-4067-9246-81</span>
            </div>
          </div>
        </div>
      </section>

      {/* ماده ۵ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۵: زمان‌بندی تحویل، تعهدات زیرساختی و جرایم</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>مدت زمان اجرای پروژه <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md mx-1">{toPersianDigits(data?.deliveryDays) || '۱۴'} روز کاری</span> پس از واریز پیش‌پرداخت می‌باشد.</li>
          <li>
            <span className="font-bold">جریمه تأخیر:</span> در صورت تأخیر در تحویل نهایی پروژه، پیمانکار موظف است به ازای هر روز تأخیر، معادل ۱٪ از مبلغ کل قرارداد را به عنوان جریمه دیرکرد پرداخت نماید. 
            <span className="font-bold text-red-600"> تبصره مهم:</span> هرگونه تاخیر ناشی از عدم تحویل به موقع اطلاعات، و یا طولانی شدن پروسه بررسی و تایید از سوی کارفرما، به مدت زمان تحویل پروژه افزوده شده و مشمول جریمه نخواهد بود.
          </li>
        </ul>
      </section>
      
      {/* ماده ۶ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۶: پشتیبانی، سورس‌کد و مستندات فنی</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>
            <span className="font-bold">پشتیبانی و رفع باگ:</span> مجری عملکرد کدهای نوشته شده را به مدت <span className="font-black">{toPersianDigits(data?.supportMonths) || '۱۲'} ماه شمسی</span> گارانتی و پشتیبانی رایگان (صرفاً رفع باگ‌های احتمالی و ایرادات عملکردی) می‌نماید. افزودن امکانات جدید نیازمند قرارداد مجزا است.
          </li>
          <li>
            <span className="font-bold">مالکیت و سورس‌کد:</span> مالکیت مادی و معنوی پروژه پس از تسویه حساب نهایی متعلق به کارفرما می‌باشد. پیمانکار موظف است <span className="font-black text-red-600 bg-red-50 px-1 rounded">منحصراً پس از پرداخت مرحله سوم (تسویه نهایی)</span>، سورس‌کد کامل پروژه را در اختیار وی قرار دهد.
          </li>
        </ul>
      </section>

      {/* ماده ۷ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۷: تعهدات امنیتی و محرمانگی اطلاعات (NDA)</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>
            <span className="font-bold">امنیت سایبری:</span> پیمانکار موظف است استانداردهای امنیتی متداول در توسعه وب را رعایت نموده تا سیستم در برابر نفوذهای ناشی از ضعف کدنویسی ایمن باشد.
          </li>
          <li>
            <span className="font-bold">حفظ محرمانگی:</span> پیمانکار متعهد می‌گردد تمامی اطلاعات مربوط به پروژه‌های ساختمانی، لیست حساب و کتاب کارگران، اطلاعات مالی و فنی کارفرما را محرمانه تلقی کرده و در اختیار هیچ شخص ثالثی قرار ندهد.
          </li>
        </ul>
      </section>

    </div>
  );
}