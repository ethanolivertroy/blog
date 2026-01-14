import Link from "next/link";
import { getPosts } from "./get-posts";

export default function Home() {
  const posts = getPosts();

  return (
    <div>
      <header className="mb-16">
        <h1 className="text-2xl font-bold tracking-tight">Blog</h1>
      </header>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/${post.id}`}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between group"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {post.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
