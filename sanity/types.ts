import type { PortableTextBlock } from "next-sanity"

export interface PostSummary {
  slug: string
  title: string
  publishedAt: string
}

export interface Post extends PostSummary {
  body: PortableTextBlock[]
}
