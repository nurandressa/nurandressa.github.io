export default function Subscribe() {
  return (
    <section className="border-t border-[var(--border)] pt-8">
      <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-4">
        Get new posts by email
      </h2>
      <form
        action="https://api.follow.it/subscription-form/aUthZTh4a3pPV1hucU1xWDh3cWx0aysyOERSek1oVjArRHFFNTZ4UjFVYnc2SGxSbDBDb3hySy9xaVBmNEFtalRSUHBTbkl1akwxbVFzZHM4cmtQeUtuZnN0UGZQRW9iSHdDdHBEelRNZG04N2Z5TjAvZGpqNjhZemx3ZllscjJ8QjBCU0k2QldmSzM4YU1ZQjRrNm9za2VnMGFKWEJDQmNIM1F5eGF5YWdZOD0=/8"
        method="post"
        className="flex gap-2"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="flex-1 min-w-0 px-3 py-2 border border-[var(--border)] bg-transparent font-mono text-sm text-[var(--text)] outline-none focus:border-[var(--text)]"
        />
        <button
          type="submit"
          className="px-4 py-2 border border-[var(--text)] font-mono text-sm hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors"
        >
          Subscribe
        </button>
      </form>
      <a
        href="https://follow.it"
        className="mt-3 inline-block text-xs text-[var(--muted)] hover:underline"
      >
        Powered by follow.it
      </a>
    </section>
  );
}