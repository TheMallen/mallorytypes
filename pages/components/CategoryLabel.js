import Link from "next/link";

const COLOR_KEY = {
  js: "green",
  life: "purple",
  vr: "indigo",
  legacy: "gray",
};

export default function CategoryLabel({ children }) {
  const color = COLOR_KEY[children] || "gray";
  return (
    <div
      className={`family-unicode font-light text-xs lg:text-sm my-1 px-2 py-2 rounded text-gray-200 bg-${color}-500`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
