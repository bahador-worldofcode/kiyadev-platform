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
          موضوع این قرارداد، طراحی و پیاده‌سازی صفر تا صد یک «سوپراپلیکیشن جامع خدمات روزمره» ویژه‌ی کاربران افغانستان می‌باشد؛ سامانه‌ای که با استفاده از فریم‌ورک‌های React و Next.js و با رویکرد Mobile-First پیاده‌سازی می‌گردد تا بسیار ساده، سبک، و مناسب اینترنت ضعیف و گوشی‌های ارزان‌قیمت باشد و استفاده از آن برای عموم کاربران، از جمله افراد با سواد دیجیتالی پایین، به راحتی امکان‌پذیر گردد. امکانات کلیدی سامانه به شرح زیر است:
        </p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold">بخش خرید و فروش کالا:</span> امکان ثبت آگهی توسط هر شخص یا فروشنده، شامل عکس محصول، قیمت، آدرس، شماره تماس و توضیح کوتاه، برای هر نوع کالا نظیر مواد غذایی، مصالح ساختمانی، پوشاک، لوازم منزل، موتورسیکلت، خودرو، دام (گاو، گوسفند و سایر احشام)، محصولات کشاورزی و سایر اقلام. معامله و پرداخت نهایی خارج از برنامه و به‌صورت حضوری میان طرفین انجام می‌شود؛ اپلیکیشن صرفاً نقش برقراری ارتباط اولیه میان خریدار و فروشنده را بر عهده دارد.</li>
          <li><span className="font-bold">ایجاد بازار رقابتی:</span> امکان ثبت آگهی برای کالای مشابه توسط چندین فروشنده به‌صورت هم‌زمان وجود دارد؛ به این ترتیب کاربر می‌تواند بر اساس قیمت، کیفیت و فاصله، بهترین گزینه را از میان آگهی‌های موجود انتخاب کند و بازار قیمت‌گذاری شفاف‌تری شکل می‌گیرد.</li>
          <li><span className="font-bold">بخش حمل‌ونقل:</span> ثبت مشخصات رانندگان وسایل نقلیه شامل تاکسی، زرنج، ریکشا، تراکتور، وانت، کامیون و سایر وسایل حمل‌ونقل. کاربر متقاضی، نزدیک‌ترین راننده‌ی «فعال» را مشاهده کرده و صرفاً با فشردن یک دکمه با وی تماس می‌گیرد.</li>
          <li><span className="font-bold">بخش خدمات و نیروی کار فنی:</span> امکان معرفی افراد دارای مشاغل فنی نظیر بنا، برقکار، لوله‌کش، نجار، نقاش، جوشکار، مکانیک، کارگر روزمزد، خیاط و سایر مشاغل، همراه با ثبت مشخصات، شماره تماس، آدرس و نوع تخصص؛ کاربران متقاضی با جستجو، نزدیک‌ترین متخصص را یافته و مستقیماً با او تماس می‌گیرند.</li>
          <li><span className="font-bold">بخش املاک:</span> امکان ثبت آگهی فروش خانه، اجاره خانه، فروش زمین، باغ، مغازه، سوله و سایر انواع ملک، با برقراری ارتباط مستقیم میان خریدار و فروشنده.</li>
          <li><span className="font-bold">سیستم مکان‌یاب هوشمند (Location-Based):</span> نمایش تمامی آگهی‌ها، رانندگان، متخصصین خدماتی و املاک بر اساس موقعیت مکانی (GPS) کاربر و به ترتیب نزدیک‌ترین به دورترین فاصله.</li>
          <li><span className="font-bold">پنل مدیریت اختصاصی (Admin Panel):</span> ارائه‌ی یک پنل مدیریتی کامل و حرفه‌ای جهت مدیریت کاربران، تایید یا حذف آگهی‌ها، بررسی گزارش‌های ثبت‌شده و مسدودسازی حساب‌های متخلف، در اختیار کارفرما.</li>
          <li><span className="font-bold">احراز هویت با شماره موبایل:</span> ثبت‌نام و ورود کاربران از طریق شماره موبایل و کد یکبار مصرف پیامکی (OTP).</li>
          <li><span className="font-bold">سامانه گزارش تخلف:</span> امکان گزارش هر آگهی یا کاربر متخلف توسط سایر کاربران، جهت رسیدگی از طریق پنل مدیریت.</li>
          <li><span className="font-bold">وضعیت فعال/غیرفعال رانندگان:</span> امکان تغییر وضعیت فعالیت توسط هر راننده؛ صرفاً رانندگان «فعال» برای کاربران نمایش داده شده و بر اساس نزدیک‌ترین فاصله مرتب می‌شوند. مشخصات وسیله نقلیه، شماره تماس و موقعیت مکانی هر راننده در پایگاه‌داده سامانه ذخیره می‌گردد.</li>
          <li><span className="font-bold">پشتیبانی دو زبانه (دری و پشتو):</span> بومی‌سازی کامل منوها، دکمه‌ها و متون راهنمای برنامه به دو زبان دری و پشتو؛ انتخاب زبان توسط کاربر در همان اولین اجرای برنامه صورت می‌گیرد.</li>
          <li><span className="font-bold">دو بستر اجرایی مجزا:</span> ۱) اپلیکیشن اندروید به‌صورت فایل نصبی مستقل و سبک، قابل اشتراک‌گذاری آفلاین از طریق بلوتوث یا نرم‌افزارهایی نظیر SHAREit؛ ۲) نسخه‌ی وب‌اپلیکیشن بدون نیاز به نصب، جهت دسترسی کاربران آیفون از طریق یک لینک مستقیم، با ظاهر و عملکردی معادل نسخه‌ی اندروید.</li>
          <li><span className="font-bold">بهینه‌سازی برای اینترنت ضعیف:</span> فشرده‌سازی خودکار تصاویر پیش از نمایش و ذخیره‌سازی موقت (Cache) اطلاعات بازدیدشده، جهت کاهش چشمگیر مصرف اینترنت و افزایش سرعت بارگذاری صفحات در استفاده‌های بعدی.</li>
          <li><span className="font-bold">سرعت و سادگی در تعامل کاربر:</span> فرآیندها به گونه‌ای بهینه‌سازی می‌شوند که ثبت یک آگهی در کمترین زمان ممکن (در حد یک دقیقه) انجام شود و یافتن راننده یا خدمات‌دهنده‌ی مورد نیاز صرفاً با چند لمس ساده میسر باشد.</li>
          <li><span className="font-bold">معماری توسعه‌پذیر:</span> طراحی ساختار فنی سامانه به گونه‌ای که در آینده، بدون نیاز به بازنویسی کامل، امکان افزودن قابلیت‌های جدید به آن وجود داشته باشد.</li>
          <li><span className="font-bold text-blue-700">چارچوب تغییرات جزئی:</span> انجام تغییرات جزئی صرفاً شامل اصلاحات ظاهری (UI) نظیر تغییر رنگ‌ها، جابه‌جایی المان‌های موجود و اصلاح متون، پیش از تایید نهایی فاز دوم می‌باشد. هرگونه تغییر در منطق برنامه‌نویسی یا افزودن امکانات و ماژول جدید، مشمول عقد قرارداد مکمل و برآورد هزینه و زمان مجزا خواهد بود.</li>
        </ul>
      </section>

      {/* ماده ۳ */}
      <section>
        <h4 className="text-red-600 font-black text-lg mb-3 border-b-2 border-red-100 inline-block pb-1">ماده ۳: وابستگی‌ها و محدودیت‌های سرویس‌دهنده</h4>
        <p className="mb-2">با توجه به ماهیت وب و موبایل بودن سیستم، کارفرما موارد زیر را می‌پذیرد:</p>
        <ul className="list-disc list-outside pr-5 space-y-2">
          <li><span className="font-bold text-red-600">پنل پیامک (SMS API جهت OTP):</span> تهیه و تامین هزینه‌ی پنل ارسال پیامک از یک شرکت ارائه‌دهنده‌ی خدمات پیامکی در افغانستان، جهت ارسال کد تایید به کاربران، بر عهده‌ی کارفرما می‌باشد. هزینه‌ی این سرویس به‌صورت ماهیانه و بر اساس تعداد پیامک ارسالی به کاربران متغیر است (برآورد اولیه در حدود ۵,۰۰۰,۰۰۰ تومان در ماه).</li>
          <li><span className="font-bold text-red-600">مالکیت زیرساخت ابری (Supabase):</span> حساب کاربری Supabase و کلیه‌ی سرویس‌های مرتبط با آن (پایگاه‌داده، فضای ذخیره‌سازی و غیره) با نام و ایمیل شخصی کارفرما ایجاد می‌گردد تا کلیه‌ی اطلاعات و مالکیت داده‌ها، از همان ابتدا و به‌طور کامل در اختیار ایشان باشد.</li>
          <li><span className="font-bold text-red-600">هزینه سرور و میزبانی:</span> هزینه‌ی ماهیانه‌ی سرور/زیرساخت میزبانی، متناسب با میزان منابع مصرفی سامانه (بر اساس تعداد کاربران و ترافیک) محاسبه شده و بر عهده‌ی کارفرماست.</li>
          <li><span className="font-bold">پشتیبان‌گیری (Backup):</span> امکان دریافت نسخه‌ی پشتیبان از اطلاعات کاربران، از طریق دکمه‌ی اختصاصی «تهیه بک‌آپ» در پنل مدیریت، برای کارفرما فراهم می‌گردد. در شرایط عادی هیچ داده‌ای از دیتابیس حذف نخواهد شد، مگر با اقدام عمدی.</li>
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
            <span className="font-bold">حفظ محرمانگی:</span> پیمانکار متعهد می‌گردد تمامی اطلاعات مربوط به آگهی‌های ثبت‌شده، اطلاعات کاربران، رانندگان، متخصصین خدماتی، املاک ثبت‌شده و اطلاعات مالی و فنی کارفرما را محرمانه تلقی کرده و در اختیار هیچ شخص ثالثی قرار ندهد.
          </li>
        </ul>
      </section>

    </div>
  );
}