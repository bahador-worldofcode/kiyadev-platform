export const projects = [
  // --- ۳ پروژه اول (نمایش در صفحه اصلی + آرشیو) ---
  {
    id: 1,
    title: "Tivan Ex (صرافی تیوان اکس)",
    category: "Web3",
    description: "پلتفرم معاملاتی رمزارز با موتور مچینگ اختصاصی (۱۰۰k تراکنش در ثانیه)، نمودارهای تریدینگ ویو، احراز هویت هوشمند AI و امنیت کیف پول سرد.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Web3"],
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    image: "/projects/tivan-ex.png",
    link: "https://tivan-ex.vercel.app/",
    github: "#"
  },
  {
    id: 2,
    title: "Alpha Dashboard",
    category: "SaaS",
    description: "داشبورد جامع مدیریت منابع انسانی با قابلیت گزارش‌گیری پیشرفته، چارت‌های تعاملی و حالت دارک‌مود اختصاصی.",
    tags: ["React", "TypeScript", "Recharts", "Supabase"],
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    image: "/projects/alpha-dashboard.png",
    link: "https://alpha-system-eight.vercel.app/",
    github: "#"
  },
  {
    id: 3,
    title: "Luxe Shop (فروشگاه لوکس)",
    category: "PWA",
    description: "فروشگاه اینترنتی مدرن با معماری Next.js، سبد خرید ریل‌تایم، انیمیشن‌های Framer Motion و پنل مدیریت محصولات.",
    tags: ["Next.js 15", "Redux Toolkit", "PWA", "Tailwind"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    image: "/projects/luxe-shop.png",
    link: "https://luxe-shop-ten.vercel.app/",
    github: "#"
  },
  
  // --- پروژه‌های بعدی (نمایش فقط در آرشیو Portfolio) ---
  {
    id: 4,
    title: "MindOrbit AI (دستیار هوشمند)",
    category: "AI",
    description: "دستیار هوشمند با رابط کاربری چت (Chat UI)، قابلیت ایده‌پردازی، تولید محتوا و کدنویسی. متصل به مدل‌های زبانی پیشرفته.",
    tags: ["Next.js", "OpenAI API", "Tailwind", "React"],
    gradient: "from-pink-500 via-rose-500 to-yellow-500",
    image: "/projects/mind-orbit.png",
    link: "https://mind-orbit-lyart.vercel.app/",
    github: "#"
  },
  {
    id: 5,
    title: "Coconut (فروشگاه کوکونات)",
    category: "StartUp", // دسته‌بندی استارتاپ
    description: "مارکت‌پلیس هایپرلوکال برای خرید آنلاین میوه و پروتئین در شهر پرند. با قابلیت انبارداری هوشمند و ارسال فوری.",
    tags: ["Next.js", "TypeScript", "PWA", "Leaflet Map"],
    gradient: "from-green-500 via-emerald-500 to-lime-500",
    image: "/projects/coconut.png", // عکس کوکونات
    link: "https://www.cocodelivery.ir/",
    github: "#"
  },
  {
    id: 6,
    title: "Soughat Shop (سوغات شاپ)",
    category: "Fintech", // دسته‌بندی فین‌تک/کریپتو
    description: "اولین پلتفرم ارسال هدیه به ایران با پرداخت ارزی و کریپتو (Tether/Solana). پل ارتباطی ایرانیان خارج از کشور.",
    tags: ["Next.js", "Blockchain Payment", "Solana", "E-Commerce"],
    gradient: "from-rose-500 via-pink-600 to-purple-600",
    image: "/projects/soughat-shop.png", // عکس سوغات شاپ
    link: "https://soughat.shop/",
    github: "#"
  }
];