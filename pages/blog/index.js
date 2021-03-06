import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

import Layout from "../../components/Layout";
import Post from "../../components/Post";
import { sortDates } from "../../utils";

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <h2 className="mt-2 mb-6 text-lg text-gray-100">📑 Ramblings</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => {
          return <Post post={post} key={post.slug} />;
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const fileNames = readdirSync(join("posts"));
  const posts = fileNames.map((filename) => {
    const slug = filename.replace(".md", "");
    const rawMarkdown = readFileSync(join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(rawMarkdown);
    return {
      frontmatter,
      slug,
    };
  });
  return {
    props: {
      posts: posts.sort(sortDates),
    },
  };
}
