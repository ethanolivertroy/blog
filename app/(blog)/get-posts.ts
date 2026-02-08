import { client } from "@/sanity/client"
import { postsQuery, postBySlugQuery } from "@/sanity/queries"
import type { PostSummary, Post } from "@/sanity/types"

export async function getPosts(): Promise<PostSummary[]> {
  return client.fetch(postsQuery)
}

export async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(postBySlugQuery, { slug })
}
