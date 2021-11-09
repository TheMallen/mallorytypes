import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

import CategoryLabel from "./CategoryLabel";
import { humanizeDate } from "../../utils";

export default function Post({ post }) {
  return (
    <div className="flex flex-col w-full px-4 py-6 bg-white border-l-2 rounded-lg shadow-md">
      {post.frontmatter.cover && (
        <Image
          src={post.frontmatter.cover}
          objectFit="cover"
          alt=""
          height={420}
          width={600}
        />
      )}
      <div className="flex items-center justify-between mb-2">
        <span className="font-light text-gray-600">
          {humanizeDate(post.frontmatter.date)}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>
      <h3 className="mb-2 text-xl" key={post.frontmatter.slug}>
        {post.frontmatter.title}
      </h3>
      <p className="flex-grow text-gray-600">{post.frontmatter.exerpt}</p>
      <div className="flex items-center justify-between mt-6 justify-self-end align-self-end">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-indigo-600">Read more</a>
        </Link>
      </div>
    </div>
  );
}
