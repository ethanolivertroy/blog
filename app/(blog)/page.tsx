import Link from "next/link";
import { getPosts } from "./get-posts";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <header className="mb-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">ETgoHOME</h1>
        <a
          href="https://x.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          aria-label="Follow on X"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </header>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/${post.slug}`}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between group"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {post.publishedAt ? formatDate(post.publishedAt) : ""}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
