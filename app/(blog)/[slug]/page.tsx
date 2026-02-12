import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { postSlugsQuery } from "@/sanity/queries";
import { getPost } from "../get-posts";
import { PostBody } from "./post-body";

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="prose">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{post.title}</h1>
      {post.publishedAt && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}

      <PostBody body={post.body} />

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
