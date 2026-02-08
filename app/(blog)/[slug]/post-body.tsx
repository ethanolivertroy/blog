import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";
import Link from "next/link";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="leading-7 mb-4 text-zinc-700 dark:text-zinc-300">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic my-4 text-zinc-600 dark:text-zinc-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-zinc-700 dark:text-zinc-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-zinc-700 dark:text-zinc-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => (
      <Link
        href={value?.href ?? "#"}
        className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300"
      >
        {children}
      </Link>
    ),
    code: ({ children }) => (
      <code className="bg-zinc-100 dark:bg-zinc-800 rounded px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
  },
};

export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
