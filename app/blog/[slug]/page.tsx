import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, getPostSlugs, postsToHtml } from "@/lib/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const html = await postsToHtml(post.content);

  return (
    <article>
      <nav className="mb-10">
        <Link
          href="/"
          className="font-mono text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          ← back
        </Link>
      </nav>

      <header className="mb-10">
        <h1 className="text-2xl font-bold leading-snug">{post.title}</h1>
        {post.tag && (
          <p className="mt-2 font-mono text-xs text-[var(--muted)]">
            #{post.tag}
          </p>
        )}
        <p className="mt-2 font-mono text-xs text-[var(--muted)] tabular-nums">
          {post.date.replace(/-/g, "/")}
        </p>
      </header>

      <div
        className="prose text-base"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}