import Link from "next/link";
import type { Metadata } from "next";
import BlogNav from "@/components/blog-nav";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog Index" };

export const dynamic = "force-static";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div>
      <header className="mb-12">
        <h1 className="text-2xl font-bold mb-3">Blog Index</h1>
        <BlogNav active="index" />
      </header>

      <ul className="divide-y divide-[var(--border)]">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}/`}
              className="flex py-3 justify-between gap-6 items-baseline"
            >
              <span className="font-mono text-xs sm:text-sm text-[var(--muted)] whitespace-nowrap tabular-nums">
                {post.date.replace(/-/g, "/")}
              </span>
              <span className="text-right flex-1 hover:text-[var(--link-hover)]">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}