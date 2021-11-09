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
        <div className="flex flex-col justify-center flex-shrink-0 px-4 pt-6 mr-6 text-center align-middle">
          <div className="max-w-md overflow-hidden rounded-full justify-self-center">
            <Image
              className="rounded-full"
              src="/images/Mallory.png"
              width="200"
              height="200"
              objectFit="contain"
              alt="Portrait of Mallory Allen"
            />
          </div>

          <div className="max-w-md justify-self-center">
            <h1 className="mb-4 text-3xl">Mallory Allen</h1>
            <h2 className="mb-4 text-xl text-gray-600">Staff Developer</h2>
            <nav className="flex justify-around max-w-lg justify-self-center">
              <a href="https://github.com/TheMallen">
                <Github className="fill-current hover:text-indigo-600" />
              </a>
              <a href="https://www.linkedin.com/in/mallory-allen/">
                <LinkedIn className="fill-current hover:text-indigo-600" />
              </a>
              <a href="https://twitter.com/the_mallen">
                <Twitter className="fill-current hover:text-indigo-600" />
              </a>
            </nav>
          </div>
        </div>

        <article className="max-w-full py-6 mt-6 prose border-t-2 md:px-10 md:rounded md:bg-white md:shadow lg:text-lg">
          <h2 className="text-xl lg:text-2xl">Hi!</h2>
          <p>
            I'm a professional software developer and even more professional cat
            mom. I started programming at a tender young age making weird broken
            flash games and writing hacks for Jedi Knight.
          </p>
          <p>
            I've worked at Shopify for about the past 6 years as a software
            developer focusing on front-end development, developer tooling, and
            React foundations.
          </p>

          <p>
            Lately I've been getting into developing VRChat Udon worlds,
            exploring next-gen web tooling, and making making commerce better
            for everyone better for some.
          </p>
        </article>
      </div>
      <div>
        <h2 className="mb-6 text-lg">📌 Repos</h2>
        <GithubRepos></GithubRepos>
      </div>
    </Layout>
  );
}
