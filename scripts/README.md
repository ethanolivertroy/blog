# Scripts

This directory contains utility scripts for managing your blog.

## Creating a Test Post

To create a test post in your Sanity CMS:

### Prerequisites

1. **Set up Sanity Project**
   - Go to [sanity.io](https://sanity.io) and create a new project
   - Note your project ID and dataset name

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Fill in your Sanity credentials:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
     - `NEXT_PUBLIC_SANITY_DATASET`: Your dataset name (usually `production`)
     - `SANITY_API_TOKEN`: API token with write permissions

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

### Running the Script

```bash
pnpm create-test-post
```

This will create a test post titled "My First Test Post" with sample content including:
- Introduction paragraph
- Multiple sections with headings
- Bulleted list of features
- Getting started information

After running the script, you can:
- View the post at `http://localhost:3000/posts/my-first-test-post`
- Edit the post in Sanity Studio at `http://localhost:3000/studio`

### Troubleshooting

If you encounter errors:
- Ensure your `.env.local` file has the correct Sanity credentials
- Verify your API token has write permissions
- Check that your Sanity project is active

## Alternative: Using Sanity Studio

You can also create posts directly through the Sanity Studio interface:

1. Start the dev server: `pnpm dev`
2. Navigate to `http://localhost:3000/studio`
3. Click "Create new" and select "Post"
4. Fill in the title, generate a slug, and add your content
5. Click "Publish"
