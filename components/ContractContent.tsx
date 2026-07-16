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
            <span className="font-bold text-slate-900">کارفرما:</span> جناب آقای / سرکار خانم {clientName || 'اسرا'}
            {data?.businessName && <span> (مدیریت {data.businessName})</span>}
            <br />
            <span className="text-slate-600 font-bold text-sm">کد ملی / شناسه ملی:</span> {data?.clientNationalId ? toPersianDigits(data.clientNationalId) : '......................'} &nbsp;|&nbsp;
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
          موضوع این قرارداد، طراحی، پیاده‌سازی و راه‌اندازی یک «سامانه اتوماسیون یکپارچه حسابداری و مدیریت تراکنش‌های ارزی» ویژه فعالیت صرافی کارفرما می‌باشد؛ سامانه‌ای مبتنی بر پنل مدیریت تحت‌وب به همراه دستیار هوشمند واتساپ (بات) که با اتصال کامل به یکدیگر، فرآیندهای ثبت سند، مدیریت ارسال حساب، دریافت و تطبیق فیش، و ثبت معاملات ارزی را به‌صورت خودکار انجام می‌دهند و عملاً جایگزین بخشی از فرآیندهای دستی و نیروی انسانی می‌گردند. امکانات کلیدی سامانه به شرح زیر است:
        </p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold">پنل مدیریت و پایگاه‌داده اختصاصی:</span> طراحی یک پنل مدیریتی اختصاصی جهت تعریف اطلاعات پایه سامانه، شامل ثبت مبلغ، نام اشخاص و شماره شبای مورد انتظار، به همراه امکان ثبت دستی هزینه و زمان‌بندی هر پروژه توسط کارفرما.</li>
          <li><span className="font-bold">سیستم حسابداری آنلاین چندکاربره و بلادرنگ (Real-time):</span> معماری سیستم به‌گونه‌ای طراحی می‌شود که هر تغییری توسط یکی از کارمندان، بدون نیاز به رفرش صفحه و در کسری از ثانیه، برای سایر کاربرانِ آنلاین سیستم نمایش داده شود.</li>
          <li><span className="font-bold">سطوح دسترسی تعریف‌پذیر (Role-Based Access):</span> امکان تعریف نقش‌های مختلف کاربری (مدیر، حسابدار، کارمند عادی و...) به‌گونه‌ای که هر کاربر با یوزرنیم و رمز عبور اختصاصی خود وارد سامانه شده و صرفاً به بخش‌ها و وظایف مرتبط با نقش خود دسترسی داشته باشد.</li>
          <li><span className="font-bold">دستیار مجازی واتساپ (بات هوشمند):</span> راه‌اندازی یک ربات متصل به شماره تلفن اختصاصی که توسط کارفرما تأمین و در اختیار پیمانکار قرار می‌گیرد؛ این شماره در گروه‌های واتساپی کارفرما (اعم از گروه‌های مبدا و مقصد) عضو شده و به‌صورت ۲۴ ساعته کلیه پیام‌ها و فیش‌های ارسالی را رصد و پردازش می‌کند.</li>
          <li><span className="font-bold">ثبت خودکار سند (اتوماسیون کامل مرحله ثبت):</span> به محض ارسال پیام با فرمت مشخص‌شده (مبلغ - نام گروه درخواست‌دهنده - نام صاحب حساب و نام بانک - سه رقم آخر شبا - شرح در صورت لزوم) در گروه‌های مبدا، ربات این اطلاعات را استخراج کرده و بدون نیاز به دخالت کارمند، به‌صورت خودکار و با تمام جزئیات در سیستم حسابداری ثبت می‌نماید. با توجه به تعداد بالای گروه‌های مبدا، این فرآیند به‌طور کامل اتوماسیون می‌گردد.</li>
          <li><span className="font-bold">مدیریت ارسال حساب و موجودی (نیمه‌اتوماتیک):</span> ارسال حساب از گروه مبدا به گروه مقصد، طبق درخواست صریح کارفرما، همچنان توسط کارمند و به‌صورت دستی انجام می‌شود؛ اما فرآیند «ثبت» آن (تخصیص مبلغ ارسالی به گروه مقصد) در سیستم به‌صورت اتوماسیون انجام می‌شود و سیستم به‌طور خودکار مبلغ «ارسال‌شده» و مبلغ «باقی‌مانده» هر حساب را محاسبه و نمایش می‌دهد تا هیچ مغایرتی رخ ندهد.</li>
          <li><span className="font-bold">دریافت، تطبیق و ارسال خودکار فیش:</span> ربات فیش‌های واریزی ارسالی در گروه‌های مقصد را دریافت کرده و از آنجا که به سیستم حسابداری متصل است، حساب مبدا مرتبط با هر فیش را تشخیص می‌دهد. در صورت ارسال چند فیش خرد (به‌عنوان نمونه ۱۰ فیش) جهت تسویه یک حساب، ربات مجموع مبالغ را محاسبه، از حساب مربوطه کسر و فیش‌ها را به‌صورت خودکار به گروه مبدا فوروارد می‌کند؛ این فرآیند حتی در حالتی که یک گروه مقصد، فیش‌های مرتبط با چند حساب از چند گروه مبدا مختلف را ارسال کرده باشد، به‌درستی انجام می‌شود.</li>
          <li><span className="font-bold">آنالیز تصویری فیش (OCR) و تایید خودکار:</span> سیستم قادر است تصویر فیش‌های ارسالی را آنالیز کرده و نام صاحب حساب و سه رقم آخر شماره شبا را از روی تصویر استخراج نماید. در صورت تطابق کامل اطلاعات استخراج‌شده با اطلاعات ثبت‌شده در پنل، تایید و ثبت نهایی تراکنش به‌صورت خودکار انجام می‌شود.</li>
          <li><span className="font-bold">ثبت خودکار معاملات ارزی (خرید/فروش):</span> به محض ارسال پیام مدیر در گروه با فرمت مشخص (مانند «فروش ۱۰,۰۰۰ درهم در قیمت ۴۹,۵۰۰ تومان» یا «خرید ۱۰,۰۰۰ درهم در قیمت ۴۹,۵۰۰»)، ربات نوع معامله (خرید یا فروش)، نوع ارز، مقدار ارز و قیمت واحد را تشخیص داده و همان لحظه به‌عنوان یک تراکنش جدید در سیستم حسابداری ثبت می‌نماید.</li>
          <li><span className="font-bold">امنیت و سرعت زیرساخت:</span> با توجه به حساسیت بالای فعالیت مالی کارفرما، سامانه با اولویت نخست بر امنیت و سرعت طراحی می‌شود تا در هیچ شرایطی کندی یا اختلال در عملکرد رخ ندهد.</li>
          <li><span className="font-bold">معماری ماژولار و قابل توسعه:</span> ساختار فنی سامانه به‌گونه‌ای طراحی می‌شود که در آینده، بدون اختلال در عملکرد بخش‌های موجود، امکان افزودن ماژول‌ها و امکانات تکمیلی جدید (که متعاقباً توسط کارفرما اعلام خواهد شد) وجود داشته باشد؛ افزودن این امکانات تکمیلی مشمول برآورد هزینه و زمان مجزا خواهد بود.</li>
          <li><span className="font-bold text-blue-700">چارچوب تغییرات جزئی:</span> انجام تغییرات جزئی صرفاً شامل اصلاحات ظاهری (UI) پنل مدیریت، پیش از تایید نهایی پروژه می‌باشد. هرگونه تغییر در منطق برنامه‌نویسی، فرمت پردازش پیام‌های ربات یا افزودن امکانات و ماژول جدید، مشمول عقد قرارداد مکمل و برآورد هزینه و زمان مجزا خواهد بود.</li>
        </ul>
      </section>

      {/* ماده ۳ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۳: مالکیت زیرساخت، امنیت و شفافیت</h4>
        <p className="mb-2">با توجه به حساسیت فعالیت مالی کارفرما، طرفین موارد زیر را به‌صراحت می‌پذیرند:</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold text-red-600">مالکیت کامل دامنه، سرور و هاست:</span> ثبت دامنه، تهیه سرور و سرویس هاستینگ، منحصراً با نام و اطلاعات شخصی یا شرکتی کارفرما انجام می‌شود تا کلیه‌ی زیرساخت و مالکیت داده‌ها از همان ابتدا و به‌طور کامل در اختیار ایشان باشد.</li>
          <li><span className="font-bold text-red-600">عدم وجود حساب یا دسترسی مخفی:</span> پیمانکار متعهد می‌شود هیچ‌گونه حساب کاربری، دسترسی، بک‌دور (Backdoor) یا کانال ارتباطی پنهان و نامرئی از دید کارفرما، در هیچ بخشی از سامانه، پنل، سرور یا ربات ایجاد ننماید.</li>
          <li><span className="font-bold text-red-600">تامین شماره واتساپ:</span> شماره تلفن اختصاصی جهت فعالیت به‌عنوان ربات واتساپ، توسط کارفرما تهیه و در اختیار پیمانکار قرار داده می‌شود.</li>
          <li><span className="font-bold">انعقاد رسمی قرارداد:</span> این قرارداد پیش از شروع عملیات اجرایی پروژه، به‌صورت حضوری یا آنلاین (بر اساس توافق طرفین) نهایی، امضا و مبادله می‌گردد.</li>
        </ul>
      </section>

      {/* ماده ۴ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۴: مبلغ قرارداد و نحوه پرداخت</h4>
        <p>
          مبلغ کل این قرارداد معادل <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md border border-yellow-400/50 mx-1">{formatCurrency(data?.totalAmount) || '۱۵۰,۰۰۰,۰۰۰'} تومان</span> می‌باشد که طی ۳ مرحله پرداخت می‌گردد:
        </p>
        <ul className="list-disc list-outside pr-5 mt-4 space-y-3">
          <li><span className="font-bold text-slate-900">پیش‌پرداخت (فاز ۱):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase1Amount) || '۴۵,۰۰۰,۰۰۰'} تومان</span> همزمان با عقد قرارداد و شروع کار.</li>
          <li><span className="font-bold text-slate-900">تحویل اولیه (فاز ۲):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase2Amount) || '۴۵,۰۰۰,۰۰۰'} تومان</span> پس از اتمام کدنویسی و رویت و تایید اولیه سامانه.</li>
          <li><span className="font-bold text-slate-900">تسویه نهایی (فاز ۳):</span> <span className="font-bold text-blue-700">{formatCurrency(data?.phase3Amount) || '۶۰,۰۰۰,۰۰۰'} تومان</span> پس از انجام اصلاحات نهایی، تحویل کامل و شروع کار با سیستم.</li>
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
          <li>مدت زمان اجرای پروژه <span className="font-black text-lg bg-yellow-200/60 px-2 py-0.5 rounded-md mx-1">{toPersianDigits(data?.deliveryDays) || '۲۵'} روز کاری</span> پس از واریز پیش‌پرداخت می‌باشد.</li>
          <li>
            <span className="font-bold">جریمه تأخیر:</span> در صورت تأخیر در تحویل نهایی پروژه، پیمانکار موظف است به ازای هر روز تأخیر، معادل ۱٪ از مبلغ کل قرارداد را به عنوان جریمه دیرکرد پرداخت نماید.
            <span className="font-bold text-red-600"> تبصره مهم:</span> هرگونه تاخیر ناشی از عدم تحویل به موقع اطلاعات، شماره واتساپ، دسترسی‌های لازم، و یا طولانی شدن پروسه بررسی و تایید از سوی کارفرما، به مدت زمان تحویل پروژه افزوده شده و مشمول جریمه نخواهد بود.
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
            <span className="font-bold">تحویل کامل موارد زیر:</span> پیمانکار موظف است <span className="font-black text-red-600 bg-red-50 px-1 rounded">منحصراً پس از پرداخت مرحله سوم (تسویه نهایی)</span>، موارد ذیل را به‌طور کامل به کارفرما تحویل دهد: سورس‌کد کامل پروژه، دیتابیس، فایل‌های کامل پروژه، مستندات نصب و راه‌اندازی، و اطلاعات ورود به سرور و کلیه پنل‌های مدیریتی.
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
            <span className="font-bold">امنیت سایبری:</span> پیمانکار موظف است بالاترین استانداردهای امنیتی متداول در توسعه سامانه‌های مالی را رعایت نموده تا سیستم در برابر نفوذهای ناشی از ضعف کدنویسی ایمن باشد.
          </li>
          <li>
            <span className="font-bold">حفظ محرمانگی:</span> پیمانکار متعهد می‌گردد تمامی اطلاعات مالی، اطلاعات مشتریان، حساب‌ها، تراکنش‌ها، فیش‌های واریزی و سایر داده‌های نرم‌افزاری و فنی کارفرما را کاملاً محرمانه تلقی نموده، حق انتشار یا استفاده مجدد از آن‌ها را نداشته و در اختیار هیچ شخص ثالثی قرار ندهد.
          </li>
        </ul>
      </section>

    </div>
  );
}