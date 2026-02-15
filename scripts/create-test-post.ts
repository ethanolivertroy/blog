import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: '2025-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function createTestPost() {
  try {
    const post = await client.create({
      _type: 'post',
      title: 'My First Test Post',
      slug: {
        _type: 'slug',
        current: 'my-first-test-post',
      },
      publishedAt: new Date().toISOString(),
      body: [
        {
          _type: 'block',
          _key: 'block1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span1',
              text: 'Welcome to my blog! This is a test post created to demonstrate the blog functionality.',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block2',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'span2',
              text: 'What is this blog about?',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block3',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span3',
              text: 'This blog is built with Next.js 16 and Sanity CMS. It features a minimalist design inspired by modern web aesthetics.',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block4',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'span4',
              text: 'Key Features',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block5',
          style: 'normal',
          listItem: 'bullet',
          level: 1,
          children: [
            {
              _type: 'span',
              _key: 'span5',
              text: 'Fast and responsive design',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block6',
          style: 'normal',
          listItem: 'bullet',
          level: 1,
          children: [
            {
              _type: 'span',
              _key: 'span6',
              text: 'Sanity CMS for content management',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block7',
          style: 'normal',
          listItem: 'bullet',
          level: 1,
          children: [
            {
              _type: 'span',
              _key: 'span7',
              text: 'Dark mode support',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block8',
          style: 'normal',
          listItem: 'bullet',
          level: 1,
          children: [
            {
              _type: 'span',
              _key: 'span8',
              text: 'TypeScript for type safety',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block9',
          style: 'h2',
          children: [
            {
              _type: 'span',
              _key: 'span9',
              text: 'Getting Started',
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: 'block',
          _key: 'block10',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span10',
              text: 'To get started with your own blog, simply configure your Sanity project and start creating content through the Sanity Studio at ',
              marks: [],
            },
            {
              _type: 'span',
              _key: 'span11',
              text: '/studio',
              marks: ['code'],
            },
            {
              _type: 'span',
              _key: 'span12',
              text: '.',
              marks: [],
            },
          ],
          markDefs: [],
        },
      ],
    })

    console.log('✅ Test post created successfully!')
    console.log('Post ID:', post._id)
    console.log('View at: http://localhost:3000/posts/my-first-test-post')
  } catch (error) {
    console.error('❌ Error creating test post:', error)
    process.exit(1)
  }
}

createTestPost()
