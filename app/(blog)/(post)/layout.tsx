import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose">
      {children}
      <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/"
          className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Back to home
        </Link>
      </footer>
    </article>
  );
}
