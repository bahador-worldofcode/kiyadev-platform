import { createClient } from '@supabase/supabase-js';

// دریافت متغیرها به صورت ایمن (بدون علامت ! تا بیلد فیل نشود)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// تابعی که چک می‌کند آیا به دیتابیس وصل هستیم یا نه
export const isSupabaseConfigured = () => {
  return supabaseUrl.length > 0 && supabaseAnonKey.length > 0;
};

// ساخت کلاینت (اگر یو‌آر‌ال نبود، مقادیر فیک می‌گذارد تا فقط بیلد رد شود)
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder"
);