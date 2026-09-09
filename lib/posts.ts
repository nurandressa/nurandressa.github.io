import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Post {
  slug: string;
  title: string;
  date: string;
  tag?: string;
  content: string;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function formatDateIso(d: Date): string {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(
    d.getUTCDate()
  )}`;
}

function parseDate(date: unknown): string {
  if (date instanceof Date && !isNaN(date.getTime())) {
    return formatDateIso(date);
  }
  if (typeof date === "string" && !isNaN(Date.parse(date))) {
    return date.slice(0, 10);
  }
  throw new Error(
    `Invalid or missing frontmatter date. Expected YYYY-MM-DD, got: ${date}`
  );
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: parseDate(data.date),
    tag: data.tag || undefined,
    content,
  };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function postsToHtml(markdown: string): Promise<string> {
  const file = await remark().use(remarkHtml).process(markdown);
  return file.toString();
}