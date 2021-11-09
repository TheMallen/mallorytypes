import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Layout from "../components/Layout";
import CategoryLabel from "../components/CategoryLabel";

export default function PostPage({
  frontmatter: { title, category, date, cover },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <article className="w-full px-10 py-4 mt-6 bg-white rounded-lg shadow-md px-">
        <header className="flex items-center justify-between mt-4 mb-4">
          <h1 className="text-2xl md:text-3xl">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </header>
        <img
          src={cover}
          alt="Art of the magic card named New Perspectives"
          className="w-full rounded"
        />
        <div className="flex items-center justify-between p-2 mt-6 bg-gray-100 rounded">
          <h4>Written by Mallory Allen</h4>
          <div className="mr-4">{date}</div>
        </div>

        <div className="mx-auto prose prose-lg text-gray-700 lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </article>

      <footer className="mt-4 hover:text-indigo-600">
        <Link href="/blog">Back</Link>
      </footer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = await readdirSync(join("posts"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const raw = readFileSync(join("posts", `${slug}.md`), "utf-8");
  const { data: frontmatter, content } = matter(raw);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
