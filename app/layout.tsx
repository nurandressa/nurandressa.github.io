import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Your Name";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "A minimalist personal blog.";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s – ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="border-b border-[var(--border)]">
            <div className="max-w-3xl mx-auto px-6 py-5 flex items-baseline justify-between">
              <Link href="/" className="font-bold text-base">
                {SITE_NAME}
              </Link>
              <nav className="font-mono text-xs text-[var(--muted)] flex gap-4">
                <Link href="/" className="hover:text-[var(--text)] transition-colors">
                  home
                </Link>
                <Link href="/blog/" className="hover:text-[var(--text)] transition-colors">
                  blog
                </Link>
                <Link href="/feed.xml" className="hover:text-[var(--text)] transition-colors">
                  rss
                </Link>
              </nav>
            </div>
          </header>
          <main className="max-w-3xl mx-auto px-6 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}