import Head from "next/head";

export default function Metadata({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/images/favicon.png?v=1" />
    </Head>
  );
}

Metadata.defaultProps = {
  title: "Mallory Types",
  keywords: "development, coding, nerd, programming, games",
  description:
    "Listen to a coffee addicted cat mom tell you about code, life in our cyber-punk dystopia, and adventures in nerd-dom.",
};
