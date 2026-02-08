"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { codeInput } from "@sanity/code-input"
import { table } from "@sanity/table"
import { assist } from "@sanity/assist"
import { media } from "sanity-plugin-media"
import { markdownSchema } from "sanity-plugin-markdown"
import { Iframe } from "sanity-plugin-iframe-pane"
import { schemaTypes } from "./sanity/schemaTypes"
import { projectId, dataset } from "./sanity/env"
import type { DefaultDocumentNodeResolver } from "sanity/structure"

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: { slug?: { current?: string } }) =>
            doc?.slug?.current ? `/posts/${doc.slug.current}` : "/posts",
          reload: { button: true },
        })
        .title("Preview"),
    ])
  }
  return S.document()
}

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ defaultDocumentNode }),
    codeInput(),
    table(),
    assist(),
    media(),
    markdownSchema(),
  ],
  schema: { types: schemaTypes },
})
