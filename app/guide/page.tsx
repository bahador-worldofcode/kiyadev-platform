"use client";

import React from "react";
import { Printer, ArrowRight, ScanLine, Rocket, Mic } from "lucide-react";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";

export default function GuidePage() {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center py-10 px-2 print:p-0 print:bg-white selection:bg-blue-500 selection:text-white" dir="rtl">
            
            <style dangerouslySetInnerHTML={{ __html: `
                .a4-page {
                    width: 794px;
                    height: 1123px;
                    background-color: #ffffff;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 30px;
                    box-sizing: border-box;
                }
                @media (max-width: 820px) {
                    .a4-wrapper {
                        transform: scale(0.45);
                        transform-origin: top center;
                        margin-bottom: -550px; 
                    }
                }
                @media (max-width: 400px) {
                    .a4-wrapper {
                        transform: scale(0.4);
                        margin-bottom: -600px;
                    }
                }
                @media print {
                    body { background-color: #fff; }
                    .a4-page {
                        box-shadow: none;
                        margin: 0;
                        page-break-after: always;
                    }
                    .a4-wrapper {
                        transform: none !important;
                        margin-bottom: 0 !important;
                    }
                    @page { size: A4 portrait; margin: 0; }
                }
            `}} />

            {/* دکمه‌های کنترل */}
            <div className="relative z-50 mb-8 flex flex-wrap justify-center gap-4 print:hidden w-full max-w-4xl px-4">
                <Link href="/" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-2xl shadow-xl transition-all active:scale-95 text-sm md:text-base border-2 border-white/20">
                    <ArrowRight className="w-5 h-5" />
                    بازگشت به سایت
                </Link>
                
                <button 
                    onClick={() => window.print()} 
                    className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-black py-3 px-6 rounded-2xl shadow-xl transition-all active:scale-95 text-sm md:text-base border-2 border-slate-300"
                >
                    <Printer className="w-5 h-5" />
                    پرینت کاتالوگ
                </button>
            </div>

            {/* بخش ویس‌ها */}
            <div className="w-full max-w-4xl mx-auto mb-12 print:hidden px-4">
                <div className="bg-slate-900 rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 mb-8 border-b border-white/10 pb-6">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-3xl text-white shadow-lg shadow-blue-600/30">
                            <Mic className="w-8 h-8" />
                        </div>
                        <div className="text-center md:text-right">
                            <h2 className="text-2xl font-black text-white mb-2">آموزش صوتی ویژه نمایندگان کیا دِو</h2>
                            <p className="text-blue-200/80 text-sm font-medium leading-relaxed max-w-2xl">
                                همکار عزیز، شرایط کاری، نحوه پرزنت مشتری و شیوه تسویه حساب به طور کامل در ۳ فایل صوتی زیر توضیح داده شده است. لطفاً پیش از شروع فعالیت، با دقت به این نکات گوش دهید.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold shadow-md">۱</span>
                                <h3 className="text-white font-bold text-sm">معرفی و کلیات کار</h3>
                            </div>
                            <audio controls className="w-full h-10 rounded-lg outline-none">
                                <source src="/audio/voice-1.mp3" type="audio/mpeg" />
                                مرورگر شما پشتیبانی نمی‌کند.
                            </audio>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold shadow-md">۲</span>
                                <h3 className="text-white font-bold text-sm">نحوه پرزنت و کاتالوگ</h3>
                            </div>
                            <audio controls className="w-full h-10 rounded-lg outline-none">
                                <source src="/audio/voice-2.mp3" type="audio/mpeg" />
                                مرورگر شما پشتیبانی نمی‌کند.
                            </audio>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold shadow-md">۳</span>
                                <h3 className="text-white font-bold text-sm">قرارداد و تسویه حساب</h3>
                            </div>
                            <audio controls className="w-full h-10 rounded-lg outline-none">
                                <source src="/audio/voice-3.mp3" type="audio/mpeg" />
                                مرورگر شما پشتیبانی نمی‌کند.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>

            {/* صفحات کاتالوگ */}
            <div className="a4-wrapper text-slate-900">
                
                {/* صفحه اول کاتالوگ */}
                <div className="a4-page flex flex-col p-8 bg-white" id="page-1">
                    <div className="flex items-center justify-between border-b-4 border-blue-600 pb-4 mb-5">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 mb-1">طراحی و اجرای پلتفرم اختصاصی</h1>
                            <p className="text-slate-500 font-bold text-base">تحولی واقعی در فروش دیجیتال شما با تکنولوژی روز</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                            <div className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl font-black text-xl tracking-widest shadow-lg">
                                KIYADEV
                            </div>
                            <div className="bg-red-500 text-white px-3 py-1 rounded-full font-black text-xs shadow-md">
                                ٪۷۰ تخفیف ویژه
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-400 shadow-sm">
                        <h2 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
                            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-xs">مهم</span>
                            ما دقیقاً چه کار می‌کنیم؟
                        </h2>
                        <p className="text-slate-800 leading-relaxed text-sm font-bold text-justify">
                            ما یک <strong>شرکت نرم‌افزاری</strong> هستیم که صفر تا صد <strong>وب‌سایت و اپلیکیشن موبایل اختصاصی</strong> برای کسب‌وکار شما می‌سازیم.
                            با خرید هر یک از پکیج‌های زیر، کار طراحی سایت و اپلیکیشن شما انجام می‌شود؛
                            تنها فرق این پکیج‌ها در امکانات جانبی و گستردگی آن‌هاست.
                        </p>
                    </div>

                    <div className="mb-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <h2 className="text-lg font-black text-blue-700 mb-2">چرا کار ما تو بازار تکه؟</h2>
                        <p className="text-slate-700 leading-relaxed text-sm font-medium text-justify">
                            ببینید، خیالتون رو راحت کنم؛
                            در تیم توسعه <strong>کیا دِو</strong>، ما اصلا سمت سایت‌سازهای کُند، تکراری و قالب‌های آماده مثل «وردپرس» نمیریم.
                            هر پروژه‌ای که دست می‌گیریم، از خط اول تا آخرش <strong>برای شما و از صفر طراحی و ساخته میشه</strong>!
                            شما یک سایت با زیرساخت فوق‌العاده قوی به همراه <strong>«اپلیکیشن موبایل برای مدیریت کل کاسبی»</strong> تحویل می‌گیرید.
                        </p>
                    </div>

                    <div className="mb-auto">
                        <h2 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
                            <span className="text-blue-600">مقایسه و مشخصات</span> پکیج‌های طراحی وب‌سایت
                        </h2>
                        
                        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
                            <table className="w-full text-right border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white text-[13px]">
                                        <th className="p-2.5 font-black border-l border-slate-800 w-1/4">مشخصات و امکانات</th>
                                        <th className="p-2.5 font-black text-center border-l border-slate-800 bg-slate-800 w-1/4">پکیج ورود به بازار</th>
                                        <th className="p-2.5 font-black text-center border-l border-blue-500 bg-blue-600 w-1/4 shadow-md">پکیج استاندارد (پیشنهادی)</th>
                                        <th className="p-2.5 font-black text-center bg-slate-800 w-1/4">پکیج پادشاهی</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="bg-white border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">طراحی و ساخت کامل وب‌سایت (از صفر)</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100 bg-blue-50/20">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black">✔</td>
                                    </tr>
                                    <tr className="bg-slate-50/50 border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">اپلیکیشن مدیریت سایت</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100 bg-blue-50/20">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black">✔</td>
                                    </tr>
                                    <tr className="bg-white border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">سیستم ابری پیشرفته</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100 bg-blue-50/20">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black">✔</td>
                                    </tr>
                                    <tr className="bg-slate-50/50 border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">سئوی پایه و استاندارد گوگل</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100 bg-blue-50/20">✔</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black">✔</td>
                                    </tr>
                                    <tr className="bg-white border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">تعداد ورود محصول اولیه</td>
                                        <td className="p-2.5 text-center text-slate-700 font-bold border-l border-slate-100">۵ محصول</td>
                                        <td className="p-2.5 text-center text-blue-700 font-black border-l border-slate-100 bg-blue-50/40">۳۰ محصول</td>
                                        <td className="p-2.5 text-center text-slate-700 font-bold">۱۰۰ محصول کامل</td>
                                    </tr>
                                    <tr className="bg-slate-50/50 border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">بنر گرافیکی اختصاصی</td>
                                        <td className="p-2.5 text-center text-slate-400 border-l border-slate-100">❌</td>
                                        <td className="p-2.5 text-center text-slate-700 font-bold border-l border-slate-100 bg-blue-50/20">۲ بنر شیک صفحه اصلی</td>
                                        <td className="p-2.5 text-center text-slate-700 font-bold">ظاهر لوکس و سفارشی</td>
                                    </tr>
                                    <tr className="bg-white border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">ربات اعلام سفارش (بله)</td>
                                        <td className="p-2.5 text-center text-slate-400 border-l border-slate-100">❌</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black border-l border-slate-100 bg-blue-50/40">✔ اتصال لحظه‌ای</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black">✔ اتصال لحظه‌ای</td>
                                    </tr>
                                    <tr className="bg-slate-50/50 border-b border-slate-100">
                                        <td className="p-2.5 font-bold text-slate-900 border-l border-slate-100">مقالات و وبلاگ سئوشده</td>
                                        <td className="p-2.5 text-center text-slate-400 border-l border-slate-100">❌</td>
                                        <td className="p-2.5 text-center text-slate-400 border-l border-slate-100 bg-blue-50/20">❌</td>
                                        <td className="p-2.5 text-center text-blue-600 font-black">✔ ۵ مقاله سئوشده</td>
                                    </tr>
                                    <tr className="bg-slate-100">
                                        <td className="p-2 text-slate-500 border-l border-slate-200 text-xs font-bold">قیمت قبل از تخفیف</td>
                                        <td className="p-2 text-center text-slate-400 border-l border-slate-200 text-xs line-through">۸۱.۵ میلیون تومان</td>
                                        <td className="p-2 text-center text-slate-400 bg-blue-50 border-l border-blue-200 text-xs line-through">۱۱۵ میلیون تومان</td>
                                        <td className="p-2 text-center text-slate-400 text-xs line-through">۱۴۸.۵ میلیون تومان</td>
                                    </tr>
                                    <tr className="bg-slate-100 font-black">
                                        <td className="p-3 text-slate-900 border-l border-slate-200 text-sm">قیمت نهایی پکیج (٪۷۰ تخفیف)</td>
                                        <td className="p-3 text-center text-slate-900 border-l border-slate-200 text-base">۲۴.۵ میلیون تومان</td>
                                        <td className="p-3 text-center text-white bg-blue-600 text-lg border-l border-blue-700 shadow-md scale-105">۳۴.۵ میلیون تومان</td>
                                        <td className="p-3 text-center text-slate-900 text-base">۴۴.۵ میلیون تومان</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-5 text-center text-slate-400 font-bold text-xs">
                        صفحه ۱ از ۳ - وب‌سایت رسمی: www.kiyadev.ir
                    </div>
                </div>

                {/* صفحه دوم کاتالوگ */}
                <div className="a4-page flex flex-col p-8 bg-white" id="page-2">
                    <div className="mb-6">
                        <h2 className="text-xl font-black text-slate-800 mb-4 border-b-2 border-slate-100 pb-2 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            چرا داشتن سایت از نون شب واجب‌تره؟
                        </h2>
                        
                        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                            <table className="w-full text-right border-collapse">
                                <thead>
                                    <tr className="bg-blue-600 text-white">
                                        <th className="p-3 font-black text-[14px] w-1/3 border-l border-blue-500">مزیت طلایی</th>
                                        <th className="p-3 font-black text-[14px] w-2/3">سودی که تو جیب شما می‌ره</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="bg-white border-b border-slate-100">
                                        <td className="p-3 font-bold text-blue-700 border-l border-slate-100 align-top">
                                            🛒 فروش اتوماتیک (حتی تو خواب!)
                                        </td>
                                        <td className="p-3 text-slate-700 font-medium leading-relaxed">
                                            تو اینستاگرام باید تا صبح دایرکت جواب بدی و شماره کارت بفرستی!
                                            اما سایت مثل یک <strong className="text-slate-900">فروشنده ۲۴ ساعته</strong> عمل می‌کنه؛ مشتری خودش جنس رو می‌بینه و آنلاین پرداخت می‌کنه.
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <td className="p-3 font-bold text-blue-700 border-l border-slate-100 align-top">
                                            💎 مالکیت ۱۰۰٪ و حذف واسطه‌ها
                                        </td>
                                        <td className="p-3 text-slate-700 font-medium leading-relaxed">
                                            تو پلتفرم‌های واسطه باید پورسانت سنگین بدی. اما سایت با دامنه اختصاصی، <strong className="text-slate-900">مغازه شش‌دانگ خودته!</strong> تمام سود فروش بدون کسر یک ریال کارمزد، مستقیم تو جیب خودت میره.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b border-slate-100">
                                        <td className="p-3 font-bold text-blue-700 border-l border-slate-100 align-top">
                                            🔍 جذب مشتری از گوگل
                                        </td>
                                        <td className="p-3 text-slate-700 font-medium leading-relaxed">
                                            با داشتن سایت، هرکسی تو کل ایران داخل گوگل سرچ کنه، مستقیم میاد تو مغازه‌ت.
                                            این یعنی <strong className="text-slate-900">وصل شدن به سیل مشتریان جدید و ناشناس!</strong>
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <td className="p-3 font-bold text-blue-700 border-l border-slate-100 align-top">
                                            🛡️ اعتبار قطعی و کلاس کاری
                                        </td>
                                        <td className="p-3 text-slate-700 font-medium leading-relaxed">
                                            مشتری به سایتی که <strong className="text-slate-900">درگاه پرداخت بانکی مستقیم</strong> داره خیلی راحت‌تر از پیجی که میگه "عکس فیش واریزی بفرست" اعتماد می‌کنه. اعتمادسازی ۱۰۰٪ میشه.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b border-slate-100">
                                        <td className="p-3 font-bold text-blue-700 border-l border-slate-100 align-top">
                                            📱 اپلیکیشن اختصاصی کیا دِو
                                        </td>
                                        <td className="p-3 text-slate-700 font-medium leading-relaxed">
                                            برعکس بقیه سایت‌ها که نیاز به لپ‌تاپ دارن، ما بهت <strong className="text-slate-900">یک اپلیکیشن موبایل</strong> می‌دیم که کل سایتت رو از تو گوشیت مدیریت می‌کنی.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mb-4 flex items-center gap-4">
                        <div className="bg-emerald-500 text-white p-3 rounded-xl shrink-0 shadow-md">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-black text-emerald-800 text-[17px] mb-1">قرارداد قرص و محکم: اول ببین، بعد تسویه کن!</h3>
                            <p className="text-emerald-700 font-medium text-[14px]">
                                برای شروع فقط یه بیعانه اولیه می‌گیریم.
                                مابقی پول رو <strong>فقط زمانی پرداخت می‌کنید که سایت اختصاصی و اپلیکیشن‌تون رو کامل تحویل گرفتید</strong> و تایید کردید.
                            </p>
                        </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-5 mb-4 shadow-sm text-center mt-auto">
                        <h3 className="text-lg font-black text-red-600 mb-2">🔴 توجه خیلی مهم (حفظ حقوق نمایندگان)</h3>
                        <p className="text-slate-800 font-bold text-[15px] leading-relaxed">
                            تیم برنامه‌نویسی کیا دِو، مستقیماً هیچ مشتری جدیدی رو پذیرش نمی‌کنه.
                            <br/>
                            برای استارت کار، <strong className="text-red-600">فقط و فقط از طریق نماینده‌ی رسمی ما که الان پیش شماست</strong> اقدام کنید. نماینده‌ی ما تمام قد کنار شماست.
                        </p>
                    </div>

                    <div className="bg-slate-100 border border-slate-300 rounded-xl p-3 mb-2 flex items-center justify-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-full text-white shrink-0 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <span className="text-slate-800 font-bold text-[14px]">
                            دفتر مرکزی: تهران، سعادت‌آباد، خیابان سرو غربی، پلاک ۱۲۴، طبقه ۵، واحد توسعه و مهندسی کیا دِو
                        </span>
                    </div>

                    <div className="text-center text-slate-400 font-bold text-xs mt-2">
                        صفحه ۲ از ۳ - کاتالوگ فروش | طراحی اختصاصی کیا دِو
                    </div>
                </div>

                {/* صفحه سوم کاتالوگ (کیوآر کدها) */}
                <div className="a4-page flex flex-col p-8 bg-white" id="page-3">
                    <div className="flex items-center justify-between border-b-4 border-blue-600 pb-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 mb-1">تست زنده تکنولوژی (Live Demo)</h1>
                            <p className="text-slate-500 font-bold text-base">همین الان قدرت سیستم را با گوشی خود لمس کنید</p>
                        </div>
                        <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                            <ScanLine className="w-8 h-8" />
                        </div>
                    </div>

                    <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 p-8 rounded-[2rem] mb-12">
                        <div className="inline-flex items-center justify-center gap-3 text-indigo-700 font-black text-2xl mb-5 w-full">
                            <Rocket className="w-8 h-8 text-indigo-600" />
                            شگفت‌زده خواهید شد!
                        </div>
                        <p className="text-slate-700 leading-[2.2] text-lg font-medium text-justify">
                            با اسکن کیوآر کد اپلیکیشن (سمت چپ) و نصب آن روی گوشی اندرویدی خود، مدیریت وب‌سایت نمونه ما را به دست بگیرید.
                            <strong className="text-indigo-700 bg-indigo-100/50 px-2 py-1 rounded mx-1">قیمت‌ها را تغییر دهید، روی محصولات تخفیف بگذارید یا وضعیت فروشگاه را تغییر دهید</strong> 
                            و در همان لحظه (زیر ۱ ثانیه) با اسکن کیوآر کد وب‌سایت (سمت راست)، تغییرات را به صورت زنده مشاهده کنید.
                        </p>
                    </div>

                    <div className="flex flex-row gap-8 justify-center items-center mb-auto">
                        {/* QR سایت */}
                        <div className="bg-slate-50 p-6 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center flex-1">
                            <div className="bg-white p-4 rounded-2xl mb-5 shadow-sm border border-slate-100">
                                {/* استفاده از QRCodeCanvas که مشکل ارور را حل می‌کند */}
                                <QRCodeCanvas value="https://www.kiyadev.ir/demo-app" size={180} level="M" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-xl">وب‌سایت نمونه</h4>
                            <p className="text-sm text-slate-500 mt-2 font-medium">اسکن برای مشاهده زنده سایت</p>
                        </div>

                        {/* QR اپلیکیشن */}
                        <div className="bg-slate-50 p-6 rounded-[2rem] shadow-sm border border-slate-100 text-center flex flex-col items-center flex-1">
                            <div className="bg-white p-4 rounded-2xl mb-5 shadow-sm border border-slate-100">
                                {/* استفاده از QRCodeCanvas که مشکل ارور را حل می‌کند */}
                                <QRCodeCanvas value="https://github.com/bahadorbahador11111-cmd/Kiyadev-App/releases/download/v1.0.0/Kiyadev.App.v1.apk" size={180} level="M" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-xl">اپلیکیشن مدیریت</h4>
                            <p className="text-sm text-slate-500 mt-2 font-medium">اسکن برای نصب روی اندروید</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center shadow-sm">
                        <p className="text-blue-800 font-bold text-sm leading-relaxed">
                            💡 راهنمایی: این یک دموی واقعی از تکنولوژی Real-time کیا دِو است.
                            دقیقاً همین سرعت و کیفیت برای کسب‌وکار شما نیز پیاده‌سازی خواهد شد.
                        </p>
                    </div>

                    <div className="text-center text-slate-400 font-bold text-xs mt-6">
                        صفحه ۳ از ۳ - کاتالوگ فروش | طراحی اختصاصی کیا دِو
                    </div>
                </div>

            </div>
        </div>
    );
}
