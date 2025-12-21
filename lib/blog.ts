import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getSortedPostsData() {
  // اگر پوشه بلاگ هنوز ساخته نشده بود، خطا نده و یک لیست خالی برگردان
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; date: string; excerpt: string; tag: string }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // چک کردن برای جلوگیری از کراش سایت در صورت نبود فایل
  if (!fs.existsSync(fullPath)) {
    throw new Error("PostNotFound");
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  
  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as { title: string; date: string; tag: string }),
  };
}