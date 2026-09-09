---
title: Welcome
date: 2026-09-09
tag: meta
---

This is your first post. Everything in `/content` gets pulled into the list and an `rss.xml` at build time, so all you have to do is write.

## How it works

Drop a `.md` file in `content/` with frontmatter like this:

```yaml
---
title: Welcome
date: 2026-09-09
tag: meta
---
```

The pipeline uses `gray-matter` to read the metadata and `remark` to render the body.

## Formatting cheatsheet

A regular paragraph with a [link to pbanks.net](https://pbanks.net).

> A blockquote for when you need to slow down.

### Lists

- Unordered items
- More items
  - Nested

1. Ordered one
2. Ordered two

### Code

Inline `code` and a fenced block:

```js
export function greet(name) {
  return `hello, ${name}`;
}
```

That's it. Delete this post and start writing.