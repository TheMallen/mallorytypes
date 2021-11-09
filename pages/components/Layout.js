import Image from "next/image";
import Link from "next/link";
import Metadata from "./Metadata";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Metadata title={title} keywords={keywords} description={description} />
      <header className="w-full px-2 text-gray-100 bg-purple-600 shadow-lg">
        <div className="container flex flex-col flex-wrap items-center w-4/5 p-5 mx-auto md:flex-row xl:w-4/5">
          <Link href="/">
            <a className="flex items-center mb-4 font-mono font-medium md:w-2/5 title-font md:justify-start md:mb-0 hover:text-indigo-300">
              <Image
                width="26"
                height="25"
                src="/images/Mallory_Key_White.png"
                alt="A stylized keyboard key with an M on it"
              />
              <span className="ml-4 text-2xl">Mallory Types</span>
            </a>
          </Link>

          <nav className="flex flex-wrap items-center justify-end pb-1 mt-4 text-base border-t-2 border-b-2 md:border-0 md:mt-0 md:-4/5 md:ml-auto">
            <Link href="/blog">
              <a className="mx-5 font-mono text-lg cursor-pointer hover:text-indigo-300">
                Blog
              </a>
            </Link>
            <Link href="/about">
              <a className="mx-5 font-mono text-lg cursor-pointer hover:text-indigo-300">
                About
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container w-4/5 px-2 py-5 mx-auto debug-screens">
        {children}
      </main>
    </>
  );
}
