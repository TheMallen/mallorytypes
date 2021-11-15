import Image from "next/image";
import Link from "next/link";
import Metadata from "./Metadata";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Metadata title={title} keywords={keywords} description={description} />
      <header className="sticky top-0 z-50 w-full py-4 text-gray-100 bg-purple-700 shadow-lg md:py-5">
        <div className="container flex items-center justify-between flex-1 w-4/5 pt-2 mx-auto justify-self-start xl:w-4/5">
          <Link href="/">
            <a className="flex items-center font-mono font-medium md:w-2/5 title-font md:justify-start hover:text-indigo-300">
              <Image
                width="26"
                height="25"
                src="/images/Mallory_Key_White.png"
                alt="A stylized keyboard key with an M on it"
              />
              <span className="ml-4 text-lg md:text-2xl">Mallory Types</span>
            </a>
          </Link>

          <nav className="flex mr-2 text-base align-self-middle justify-self-end">
            <Link href="/blog">
              <a className="ml-4 font-mono cursor-pointer md:ml-5 md:text-lg hover:text-indigo-300">
                Blog
              </a>
            </Link>
            <Link href="/about">
              <a className="ml-4 font-mono cursor-pointer md:ml-5 md:text-lg hover:text-indigo-300">
                About
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container w-4/5 px-2 py-2 mx-auto lg:py-6">
        {children}
      </main>
    </>
  );
}
