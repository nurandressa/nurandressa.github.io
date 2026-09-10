import Link from "next/link";
import type { Metadata } from "next";
import BlogNav from "@/components/blog-nav";
import { getAllPosts, postsToHtml } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export const dynamic = "force-static";

function weekday(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleString("en-US", {
    weekday: "short",
    timeZone: "UTC",
  });
}

export default async function RollingPage() {
  const posts = getAllPosts();
  const rendered = await Promise.all(
    posts.map(async (post) => ({ post, html: await postsToHtml(post.content) }))
  );

  return (
    <div>
      <header className="mb-12">
        <h1 className="text-2xl font-bold mb-3">Blog</h1>
        <BlogNav active="rolling" />
      </header>

      <div className="space-y-16">
        {rendered.map(({ post, html }) => (
          <section key={post.slug}>
            <h2 className="text-xl font-bold mb-1">{post.title}</h2>
            <p className="mb-5 font-mono text-xs text-[var(--muted)]">
              [
              <Link
                href={`/blog/${post.slug}/`}
                className="hover:underline"
              >
                link—standalone
              </Link>
              ]
            </p>
            <div
              className="prose text-base"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <p className="mt-6 font-mono text-xs text-[var(--muted)] tabular-nums">
              {weekday(post.date)}, {post.date.replace(/-/g, "/")}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}