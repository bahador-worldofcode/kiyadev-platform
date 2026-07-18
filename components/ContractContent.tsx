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
            <span className="font-bold text-slate-900">کارفرما:</span> جناب آقای / سرکار خانم {clientName || 'ذکر خواهد شد'}
            {data?.businessName && <span> (مدیریت {data.businessName})</span>}
            <br />
            <span className="text-slate-600 font-bold text-sm">کد ملی / شناسه ملی:</span> {data?.clientNationalId ? toPersianDigits(data.clientNationalId) : 'ذکر خواهد شد'} &nbsp;|&nbsp;
            <span className="text-slate-600 font-bold text-sm">شماره تماس:</span> {data?.clientPhone ? toPersianDigits(data.clientPhone) : 'ذکر خواهد شد'}
            <br />
            <span className="text-slate-600 font-bold text-sm">آدرس:</span> {data?.clientAddress || 'ذکر خواهد شد'}
            &nbsp;|&nbsp; <span className="text-slate-600 font-bold text-sm">کد پستی:</span> {data?.clientPostalCode ? toPersianDigits(data.clientPostalCode) : 'ذکر خواهد شد'}
          </p>
        </div>
      </section>

      {/* ماده ۲: موضوع قرارداد و امکانات */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۲: موضوع قرارداد و شرح امکانات (Scope of Work)</h4>
        <p className="mb-2">
          موضوع این قرارداد، طراحی، پیاده‌سازی و راه‌اندازی یک «پلتفرم تخصصی خرید و فروش خودرو و موتورسیکلت» با نام تجاری «{projectName || 'سوئیچ'}» می‌باشد؛ شامل یک وب‌سایت تک‌صفحه‌ای (لندینگ پیج)، یک اپلیکیشن موبایل حرفه‌ای ویژه کاربران (نسخه اندروید) و یک پنل مدیریت (ادمین) قدرتمند که در سه بخش به شرح ذیل به کارفرما تحویل داده می‌شود:
        </p>

        <p className="font-bold text-slate-900 mt-4 mb-1">۱) وب‌سایت تک‌صفحه‌ای (Landing Page)</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li>طراحی یک وب‌سایت تک‌صفحه‌ای شیک با تم تیره (مشکی) و طلایی به‌عنوان ویترین معرفی کسب‌وکار کارفرما.</li>
          <li>معرفی مزایای کلیدی اپلیکیشن شامل امنیت بالا، ثبت سریع آگهی و ارتباط مستقیم خریدار و فروشنده.</li>
          <li>طراحی بخش‌های هدر (درباره ما، تماس با ما)، بنر اصلی، معرفی ویژگی‌های کلیدی، بخش دانلود مستقیم اپلیکیشن و فوتر شامل راه‌های ارتباطی و شبکه‌های اجتماعی کارفرما.</li>
          <li>طراحی کاملاً واکنش‌گرا (Responsive) و سازگار با نمایش صحیح در گوشی موبایل، تبلت و دسکتاپ.</li>
        </ul>

        <p className="font-bold text-slate-900 mt-4 mb-1">۲) اپلیکیشن موبایل کاربران (نسخه اندروید)</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold">ورود و ثبت‌نام سریع:</span> امکان ثبت‌نام و ورود کاربران در چند ثانیه با شماره موبایل.</li>
          <li><span className="font-bold">صفحه اصلی و دسته‌بندی‌ها:</span> نمایش دسته‌بندی‌های خودرو، موتور، کامیونت و قطعات، اسلایدر بهترین پیشنهادها، آگهی‌های ویژه و جدیدترین آگهی‌ها.</li>
          <li><span className="font-bold">جستجو و فیلتر پیشرفته:</span> امکان فیلتر دقیق آگهی‌ها بر اساس برند، مدل، محدوده قیمت، سال ساخت، میزان کارکرد، وضعیت رنگ و بدنه، نوع گیربکس، نوع سوخت، تعداد مالک و نوع سند.</li>
          <li><span className="font-bold">ثبت آگهی رایگان:</span> فرایندی مرحله‌به‌مرحله و روان جهت آپلود تصاویر و ثبت مشخصات کامل وسیله نقلیه در کمتر از یک دقیقه.</li>
          <li><span className="font-bold">جزئیات کامل آگهی:</span> نمایش گالری تصاویر، مشخصات دقیق، قیمت، تاریخ بروزرسانی و امکان نشان کردن (Bookmark) هر آگهی.</li>
          <li><span className="font-bold">ارتباط مستقیم خریدار و فروشنده:</span> امکان تماس تلفنی مستقیم و همچنین گفتگو از طریق سیستم چت درون‌برنامه‌ای.</li>
          <li><span className="font-bold">حساب کاربری من:</span> پروفایل اختصاصی هر کاربر جهت مدیریت آگهی‌های ثبت‌شده و مشاهده آگهی‌های مورد علاقه.</li>
        </ul>
        <p className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm">
          <span className="font-bold text-amber-700">تبصره نسخه iOS:</span> با توجه به محدودیت‌های شرکت اپل برای اپلیکیشن‌های ایرانی، نسخه نصب‌شونده اصلی این پروژه صرفاً برای سیستم‌عامل اندروید طراحی و ارائه می‌شود و فایل نصب آن مستقیماً از طریق وب‌سایت در دسترس کاربران قرار می‌گیرد. دسترسی کاربران آیفون (iOS) در برآورد و مبلغ حاضر لحاظ نشده و در صورت تمایل کارفرما، طراحی و اجرای یک وب‌اپلیکیشن (PWA) جهت دسترسی کاربران iOS، به‌عنوان یک فاز و برآورد هزینه و زمان جداگانه قابل بررسی و اجرا خواهد بود.
        </p>

        <p className="font-bold text-slate-900 mt-4 mb-1">۳) پنل مدیریت (ادمین)</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold">نظارت بر آگهی‌ها:</span> هیچ آگهی بدون تایید کارفرما منتشر نمی‌شود؛ امکان بررسی، تایید، رد یا حذف هر آگهی از طریق پنل وجود دارد.</li>
          <li><span className="font-bold">مدیریت کاربران:</span> مشاهده لیست کاربران، بررسی فعالیت‌ها و در صورت نیاز مسدودسازی کاربران متخلف.</li>
          <li><span className="font-bold">داشبورد آماری:</span> نمایش کلی تعداد آگهی‌های ثبت‌شده، کاربران فعال و پیام‌های سیستم جهت مدیریت بهتر کسب‌وکار.</li>
          <li><span className="font-bold">مدیریت دسته‌بندی‌ها:</span> امکان افزودن برندها یا مدل‌های جدید به سیستم و فیلترهای جستجو.</li>
          <li><span className="font-bold text-blue-700">چارچوب تغییرات جزئی:</span> انجام تغییرات جزئی صرفاً شامل اصلاحات ظاهری (UI) پیش از تایید نهایی پروژه می‌باشد. هرگونه تغییر در منطق برنامه‌نویسی یا افزودن امکانات و ماژول جدید، مشمول عقد قرارداد مکمل و برآورد هزینه و زمان مجزا خواهد بود.</li>
        </ul>
      </section>

      {/* ماده ۳ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۳: مالکیت زیرساخت و تعهدات کارفرما</h4>
        <p className="mb-2">طرفین موارد زیر را به‌صراحت می‌پذیرند:</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold text-red-600">مالکیت کامل دامنه، سرور و هاست:</span> ثبت دامنه، تهیه سرور و سرویس هاستینگ مورد نیاز جهت میزبانی وب‌سایت، اپلیکیشن و پنل مدیریت، با هزینه و به نام شخصی یا شرکتی کارفرما تهیه می‌گردد تا مالکیت کامل زیرساخت و داده‌ها از همان ابتدا در اختیار ایشان باشد.</li>
          <li><span className="font-bold text-red-600">پنل پیامکی (در صورت نیاز):</span> در صورتی که اپلیکیشن برای ارسال کد تایید (OTP) یا اطلاع‌رسانی نیازمند اتصال به پنل پیامکی باشد، تهیه و تامین هزینه این سرویس بر عهده کارفرماست؛ پیاده‌سازی و اتصال فنی آن به سامانه توسط پیمانکار انجام خواهد شد.</li>
        </ul>
      </section>

      {/* ماده ۴ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۴: مبلغ قرارداد و نحوه پرداخت</h4>
        <p>
          مبلغ کل این قرارداد معادل <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md border border-yellow-400/50 mx-1">{formatCurrency(data?.totalAmount) || '۲۰۰,۰۰۰,۰۰۰'} تومان</span> می‌باشد که طی ۳ مرحله پرداخت می‌گردد:
        </p>
        <ul className="list-disc list-outside pr-5 mt-4 space-y-3">
          <li><span className="font-bold text-slate-900">پیش‌پرداخت (فاز ۱):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase1Amount) || '۴۵,۰۰۰,۰۰۰'} تومان</span> همزمان با عقد قرارداد و شروع کار.</li>
          <li><span className="font-bold text-slate-900">تحویل اولیه (فاز ۲):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase2Amount) || '۷۵,۰۰۰,۰۰۰'} تومان</span> پس از اتمام کدنویسی و رویت و تایید اولیه سامانه.</li>
          <li><span className="font-bold text-slate-900">تسویه نهایی (فاز ۳):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase3Amount) || '۸۰,۰۰۰,۰۰۰'} تومان</span> پس از انجام اصلاحات نهایی، تحویل کامل و شروع کار با سیستم.</li>
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
          <li>مدت زمان اجرای پروژه <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md mx-1">{toPersianDigits(data?.deliveryDays) || '۲۰'} روز کاری</span> پس از واریز پیش‌پرداخت می‌باشد.</li>
          <li>
            <span className="font-bold">جریمه تأخیر:</span> در صورت تأخیر در تحویل نهایی پروژه، پیمانکار موظف است به ازای هر روز تأخیر، معادل ۱٪ از مبلغ کل قرارداد را به عنوان جریمه دیرکرد پرداخت نماید.
            <span className="font-bold text-red-600"> تبصره مهم:</span> هرگونه تاخیر ناشی از عدم تحویل به موقع اطلاعات، دسترسی‌های لازم، و یا طولانی شدن پروسه بررسی و تایید از سوی کارفرما، به مدت زمان تحویل پروژه افزوده شده و مشمول جریمه نخواهد بود.
          </li>
        </ul>
      </section>

      {/* ماده ۶ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۶: پشتیبانی، مالکیت و تحویل کامل پروژه</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>
            <span className="font-bold">پشتیبانی و رفع باگ:</span> مجری عملکرد کدهای نوشته شده را به مدت <span className="font-black">{toPersianDigits(data?.supportMonths) || '۱۲'} ماه شمسی</span> گارانتی و پشتیبانی رایگان (صرفاً رفع باگ‌های احتمالی و ایرادات عملکردی) می‌نماید. افزودن امکانات جدید نیازمند قرارداد مجزا است.
          </li>
          <li>
            <span className="font-bold">مالکیت مادی و معنوی:</span> تمامی حقوق مادی و معنوی کدهای تولید شده، سورس‌کد، پایگاه‌داده و مستندات فنی پروژه، پس از تسویه‌حساب نهایی، منحصراً متعلق به کارفرما می‌باشد.
          </li>
          <li>
            <span className="font-bold">تحویل کامل موارد زیر:</span> پیمانکار موظف است <span className="font-black text-red-600 bg-red-50 px-1 rounded">منحصراً پس از پرداخت مرحله سوم (تسویه نهایی)</span>، موارد ذیل را به‌طور کامل به کارفرما تحویل دهد: سورس‌کد کامل پروژه (وب‌سایت، اپلیکیشن و پنل مدیریت)، دیتابیس، فایل‌های کامل پروژه، مستندات نصب و راه‌اندازی، و اطلاعات ورود به سرور و کلیه پنل‌های مدیریتی.
          </li>
          <li>
            <span className="font-bold">خاتمه دسترسی‌های پیمانکار:</span> پس از تحویل پروژه و تسویه‌حساب نهایی، پیمانکار موظف است بلافاصله کلیه‌ی دسترسی‌های خود به سرور، دیتابیس، پنل مدیریت، مخازن کد (مانند Git) و سایر سرویس‌های مرتبط را حذف نموده و از هرگونه دسترسی یا استفاده مجدد از آن‌ها خودداری نماید.
          </li>
        </ul>
      </section>

      {/* ماده ۷ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۷: تعهدات امنیتی و محرمانگی اطلاعات (NDA)</h4>
        <ul className="list-disc list-outside pr-5 space-y-3">
          <li>
            <span className="font-bold">امنیت سایبری:</span> پیمانکار موظف است بالاترین استانداردهای امنیتی متداول در توسعه سامانه‌های نرم‌افزاری کاربرمحور را رعایت نموده تا سیستم در برابر نفوذهای ناشی از ضعف کدنویسی ایمن باشد.
          </li>
          <li>
            <span className="font-bold">حفظ محرمانگی:</span> پیمانکار متعهد می‌گردد تمامی اطلاعات کاربران، آگهی‌ها، اطلاعات هویتی کارفرما و سایر داده‌های نرم‌افزاری و فنی پروژه را کاملاً محرمانه تلقی نموده، حق انتشار یا استفاده مجدد از آن‌ها را نداشته و در اختیار هیچ شخص ثالثی قرار ندهد.
          </li>
        </ul>
      </section>

    </div>
  );
}