import posts from "./posts.json";

export interface Post {
  id: string;
  date: string;
  title: string;
}

export function getPosts(): Post[] {
  return posts;
}

export function getPost(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}
