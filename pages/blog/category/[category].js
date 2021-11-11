import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

import Layout from "../../components/Layout";
import Post from "../../components/Post";
import { sortDates } from "../../../utils";

export default function BlogPage({ posts, category }) {
  return (
    <Layout>
      <h2 className="mt-2 mb-6 text-lg text-gray-100">
        📑 Ramblings on {category}{" "}
      </h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => {
          return <Post post={post} key={post.slug} />;
        })}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = await readdirSync(join("posts"));
  const categories = new Set();
  files.forEach((file) => {
    const rawMarkdown = readFileSync(join("posts", file), "utf-8");
    const { data: frontmatter } = matter(rawMarkdown);
    categories.add(frontmatter.category);
  });
  console.log(categories);
  return {
    paths: Array.from(categories).map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  console.log(category);
  const fileNames = readdirSync(join("posts"));
  const posts = fileNames
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const rawMarkdown = readFileSync(join("posts", filename), "utf-8");

      const { data: frontmatter } = matter(rawMarkdown);
      return {
        frontmatter,
        slug,
      };
    })
    .filter(({ frontmatter }) => frontmatter.category === category);
  return {
    props: {
      category,
      posts: posts.sort(sortDates).slice(0, 6),
    },
  };
}
