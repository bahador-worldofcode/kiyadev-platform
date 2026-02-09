import { supabase } from "@/lib/supabase";

// تعریف ساختار دیتای پست (مطابق با جدول جدید)
export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  published_date: string | null;
  tag: string | null;
  image_url: string | null;
  reading_time: string | null;
}

// تابع ۱: دریافت تمام پست‌های منتشر شده (برای صفحه اصلی و لیست بلاگ)
export async function getSortedPostsData() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('is_published', true) // فقط پست‌های منتشر شده
    .order('created_at', { ascending: false }); // جدیدترین‌ها اول

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  // مپ کردن نام فیلدها برای هماهنگی با کامپوننت‌های قبلی
  return data.map((post) => ({
    ...post,
    date: post.published_date, // کامپوننت‌های ما date می‌شناسند، نه published_date
    tag: post.tag || "عمومی",
  }));
}

// تابع ۲: دریافت یک پست خاص بر اساس اسلاگ (برای صفحه داخلی مقاله)
export async function getPostData(slug: string) {
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
    date: data.published_date,
    tag: data.tag || "عمومی",
  };
}