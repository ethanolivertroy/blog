# rauchg-blog-template

A minimalist blog template inspired by [rauchg's blog](https://rauchg.com). Built with Next.js 16, MDX, Tailwind CSS, and Geist font.

## Features

- **Next.js 16** - App Router with Turbopack
- **MDX** - Write posts in Markdown with React components
- **Tailwind CSS** - Utility-first styling
- **Geist Font** - Clean typography from Vercel
- **Dark Mode** - Automatic theme switching
- **TypeScript** - Full type safety
- **Vercel Ready** - One-click deploy

## Quick Start

1. Click "Use this template" on GitHub
2. Clone your new repo
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the dev server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Adding Posts

1. Create a folder in `app/(post)/your-post-slug/`
2. Add a `page.mdx` file:
   ```mdx
   # Your Post Title

   Your content here...
   ```
3. Update `app/posts.json`:
   ```json
   [
     {
       "id": "your-post-slug",
       "date": "Jan 1, 2025",
       "title": "Your Post Title"
     }
   ]
   ```

## Customization

- **Site title**: Edit `app/layout.tsx`
- **Social links**: Edit `app/page.tsx` (X/Twitter link)
- **Styles**: Edit `app/globals.css`
- **MDX components**: Edit `mdx-components.tsx`

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ethanolivertroy/rauchg-blog-template)

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

## Credits

Inspired by [rauchg/blog](https://github.com/rauchg/blog) by Guillermo Rauch (CEO of Vercel).

## License

MIT
