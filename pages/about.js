import Image from "next/image";

import Layout from "./components/Layout";
import Github from "./components/icons/github.svg";
import Twitter from "./components/icons/twitter.svg";
import LinkedIn from "./components/icons/linkedin.svg";
import GithubRepos from "./components/GithubRepos";

export default function AboutPage() {
  return (
    <Layout title="About Mallory">
      <div className="flex flex-col mb-6 md:flex-row align-center">
        <div className="flex flex-col justify-center flex-shrink-0 px-4 pt-6 mr-6 text-center align-middle xl:flex-1">
          <div className="max-w-md overflow-hidden rounded-full xl:mx-auto justify-self-center">
            <Image
              className="rounded-full"
              src="/images/Mallory.png"
              width="200"
              height="200"
              objectFit="contain"
              alt="Portrait of Mallory Allen"
            />
          </div>

          <div className="max-w-md xl:mx-auto justify-self-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-100">
              Mallory Allen
            </h1>
            <h2 className="mb-3 text-xl text-gray-200">Staff Developer</h2>
            <nav className="flex justify-around max-w-xs mx-auto md:max-w-lg justify-self-center">
              <a href="https://github.com/TheMallen">
                <Github className="text-white fill-current hover:text-indigo-600" />
              </a>
              <a href="https://www.linkedin.com/in/mallory-allen/">
                <LinkedIn className="text-white fill-current hover:text-indigo-600" />
              </a>
              <a href="https://twitter.com/the_mallen">
                <Twitter className="text-white fill-current hover:text-indigo-600" />
              </a>
            </nav>
          </div>
        </div>

        <article className="flex-1 px-6 py-6 mt-6 bg-gray-200 border-t-2 rounded-lg shadow lg:text-lg">
          <div className="prose">
            <h2 className="text-xl text-gray-100 no-prose lg:text-2xl">Hi!</h2>
            <p>
              I&apos;m a professional software developer and even more
              professional cat mom. I started programming at a tender young age
              making weird broken flash games and writing hacks for Jedi Knight.
            </p>
            <p>
              Eventually I found my way into the tech industry proper focusing
              on web applications. I&apos;ve now worked at Shopify for over 6
              years focusing on front-end development, developer tooling, and
              React foundations.
            </p>

            <p>
              Lately I&apos;ve been getting into developing VRChat Udon worlds,
              exploring next-gen web tooling, and giving developers the best
              experience they can get.
            </p>
          </div>
          <div className="flex justify-between mt-6 mb-2 align-middle">
            <Image
              className="mr-2"
              width="16"
              height="16"
              src="/images/sprites/Me.png"
              alt="A pixel-art sprite of me"
            ></Image>
            <Image
              className="mr-2"
              width="16"
              height="16"
              src="/images/sprites/Kokusho.png"
              alt="A pixel-art sprite of my black cat Kokusho"
            ></Image>
            <Image
              className="mr-2"
              width="16"
              height="16"
              src="/images/sprites/Skye.png"
              alt="A pixel-art sprite of my calico cat Skye Kitten"
            ></Image>
          </div>
        </article>
      </div>
      <div>
        <h2 className="mb-6 text-lg text-gray-200">📌 Repos</h2>
        <GithubRepos></GithubRepos>
      </div>
    </Layout>
  );
}
