import { supabase, isSupabaseConfigured } from "@/lib/supabase";

// تعریف ساختار دیتای پست (مطابق با نیاز کامپوننت‌های فرانت‌اند)
export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  published_date: string | null;
  tag: string | null;
  image_url: string | null; // کامپوننت منتظر این فیلد است
  reading_time: string | null;
}

// تابع ۱: دریافت تمام پست‌های منتشر شده (برای صفحه اصلی و لیست بلاگ)
export async function getSortedPostsData() {
  // جلوگیری از خطای بیلد در صورت نبودن متغیرهای محیطی
  if (!isSupabaseConfigured()) {
    console.warn("⚠️ Supabase credentials missing. Returning empty list.");
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*') // ستون cover_image از دیتابیس دریافت می‌شود
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    // نگاشت (Mapping) داده‌های دیتابیس به ساختار فرانت‌اند
    return data.map((post) => ({
      ...post,
      // *** اصلاح اصلی: اتصال نام ستون دیتابیس به نام متغیر در کد ***
      image_url: post.cover_image, 
      date: post.published_date,
      tag: post.tag || "عمومی",
    }));
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
}

// تابع ۲: دریافت یک پست خاص بر اساس اسلاگ (برای صفحه داخلی مقاله)
export async function getPostData(slug: string) {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured");
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    throw new Error("Post not found");
  }

  return {
    ...data,
    // *** اصلاح اصلی: اتصال نام ستون دیتابیس به نام متغیر در کد ***
    image_url: data.cover_image,
    date: data.published_date,
    tag: data.tag || "عمومی",
  };
}