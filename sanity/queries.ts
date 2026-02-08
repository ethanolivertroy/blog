import { defineQuery } from "next-sanity"

export const postsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    publishedAt
  }`
)

export const postBySlugQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    publishedAt,
    body
  }`
)

export const postSlugsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
)
