import Link from "next/link";

export default function BlogNav({ active }: { active: "index" | "rolling" }) {
  return (
    <nav className="font-mono text-xs text-[var(--muted)]">
      {active === "index" ? (
        <span className="text-[var(--text)]">Blog Index</span>
      ) : (
        <Link href="/blog/" className="hover:text-[var(--text)]">
          Blog Index
        </Link>
      )}
      {" — "}
      {active === "rolling" ? (
        <span className="text-[var(--text)]">Rolling View</span>
      ) : (
        <Link href="/blog/rolling/" className="hover:text-[var(--text)]">
          Rolling View
        </Link>
      )}
      {" — "}
      <Link href="/feed.xml" className="hover:text-[var(--text)]">
        RSS
      </Link>
    </nav>
  );
}