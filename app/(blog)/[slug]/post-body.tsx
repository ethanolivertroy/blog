import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import markdown from "highlight.js/lib/languages/markdown";
import sql from "highlight.js/lib/languages/sql";
import yaml from "highlight.js/lib/languages/yaml";
import go from "highlight.js/lib/languages/go";
import rust from "highlight.js/lib/languages/rust";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("go", go);
hljs.registerLanguage("rust", rust);

function highlightCode(code: string, language?: string): string {
  if (language && hljs.getLanguage(language)) {
    return hljs.highlight(code, { language }).value;
  }
  return hljs.highlightAuto(code).value;
}

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
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).auto("format").url()}
        alt={value.alt || ""}
        className="rounded-lg my-6 w-full"
        loading="lazy"
      />
    ),
    code: ({ value }: { value: { code?: string; language?: string; filename?: string } }) => {
      const code = value.code || "";
      const highlighted = highlightCode(code, value.language);
      return (
        <div className="my-6 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
          {(value.filename || value.language) && (
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              {value.filename && <span>{value.filename}</span>}
              {value.filename && value.language && <span className="text-zinc-300 dark:text-zinc-600">|</span>}
              {value.language && <span>{value.language}</span>}
            </div>
          )}
          <pre className="bg-zinc-950 p-4 overflow-x-auto">
            <code
              className="text-sm font-mono text-zinc-100 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </pre>
        </div>
      );
    },
    table: ({ value }: { value: { rows?: Array<{ _key: string; cells: string[] }> } }) => {
      const rows = value.rows || [];
      if (rows.length === 0) return null;
      const [headerRow, ...bodyRows] = rows;
      return (
        <div className="my-6 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                {headerRow.cells.map((cell, i) => (
                  <th
                    key={i}
                    className="px-4 py-2.5 text-left font-semibold text-zinc-700 dark:text-zinc-300"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row) => (
                <tr
                  key={row._key}
                  className="border-t border-zinc-200 dark:border-zinc-700 even:bg-zinc-50 dark:even:bg-zinc-800/50"
                >
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className="px-4 py-2.5 text-zinc-700 dark:text-zinc-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
    file: ({ value }: { value: { asset?: { _ref?: string; url?: string }; originalFilename?: string } }) => {
      const ref = value.asset?._ref;
      if (!ref) return null;
      // Sanity file asset ref format: file-{id}-{extension}
      const parts = ref.split("-");
      const ext = parts[parts.length - 1];
      const id = parts.slice(1, -1).join("-");
      const url = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${ext}`;
      const filename = value.originalFilename || `download.${ext}`;
      return (
        <a
          href={url}
          download={filename}
          className="flex items-center gap-3 my-6 px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <svg
            className="w-5 h-5 text-zinc-500 dark:text-zinc-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
            />
          </svg>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {filename}
          </span>
        </a>
      );
    },
  },
};

export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
