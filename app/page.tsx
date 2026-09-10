import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Subscribe from "@/components/subscribe";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Your Name";
const SITE_TAGLINE =
  process.env.NEXT_PUBLIC_SITE_TAGLINE || "Learner, teacher.";
const SITE_BIO =
  process.env.NEXT_PUBLIC_SITE_BIO ||
  "I write about the things I am learning and exploring in life.";

const SOCIAL_LINKS = [
  {
    label: "github",
    url: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/nurandressa",
  },
  {
    label: "email",
    url: process.env.NEXT_PUBLIC_EMAIL_URL || "mailto:nurandressa@gmail.com",
  },
];

export const dynamic = "force-static";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16">
      <section>
        <p className="text-lg">{SITE_TAGLINE}</p>
        <p className="mt-4 max-w-xl text-[var(--muted)]">{SITE_BIO}</p>
        <div className="mt-5 font-mono text-xs flex flex-wrap gap-x-4 gap-y-2">
          {SOCIAL_LINKS.map(
            (link) =>
              link.url && (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-[var(--link)] hover:underline"
                  rel="noopener noreferrer"
                >
                  {link.label}↗
                </a>
              ),
          )}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-6">
          Posts
        </h2>
        {posts.length === 0 ? (
          <p className="font-mono text-sm text-[var(--muted)]">
            no posts yet. add a `.md` file to /content deslugged.
          </p>
        ) : (
          <ul className="divide-y divide-[var(--border)]">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex py-3 justify-between gap-6 items-baseline"
                >
                  <span className="font-mono text-xs sm:text-sm text-[var(--muted)] whitespace-nowrap tabular-nums">
                    {post.date.replace(/-/g, "/")}
                  </span>
                  <span className="text-right flex-1 group-hover:text-[var(--link-hover)]">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Subscribe />
    </div>
  );
}
