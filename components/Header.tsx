"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Layers } from "lucide-react"; // آیکون Layers برای نمونه‌کارها اضافه شد

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-5 md:py-8" 
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-center gap-4 md:gap-8">
        
        {/* ۱. لوگو */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl shadow-lg transition-all duration-300 ${
              isScrolled ? "bg-blue-600 text-white shadow-blue-500/20" : "bg-white/10 text-white backdrop-blur-sm border border-white/20"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="m9 15 2 2 4-4" />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}>
              Kiya<span className="text-blue-500">Dev</span>
            </span>
          </div>
        </Link>

        {/* خط جداکننده اول */}
        <div className={`hidden sm:block h-6 md:h-8 w-[1px] rounded-full transition-colors ${isScrolled ? "bg-slate-300" : "bg-white/20"}`}></div>

        {/* ۲. دکمه نمونه‌کارها (جدید) - لینک به صفحه آرشیو */}
        <Link 
          href="/portfolio" 
          className={`hidden sm:flex items-center gap-2 text-sm font-bold transition-colors hover:scale-105 ${
            isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-white"
          }`}
        >
          <Layers size={18} />
          نمونه‌کارها
        </Link>

        {/* خط جداکننده دوم (فقط در دسکتاپ برای زیبایی) */}
        <div className={`h-6 md:h-8 w-[1px] rounded-full transition-colors ${isScrolled ? "bg-slate-300" : "bg-white/20"}`}></div>

        {/* ۳. دکمه تماس */}
        <a
          href="tel:09168038017"
          className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-xl ${
              isScrolled 
              ? "bg-slate-900 text-white shadow-slate-900/20 hover:bg-slate-800" 
              : "bg-white text-slate-900 hover:bg-blue-50 shadow-white/10"
          }`}
        >
          <Phone size={16} className="md:w-[18px] md:h-[18px]" />
          <span>مشاوره رایگان</span>
        </a>

      </div>
    </header>
  );
}