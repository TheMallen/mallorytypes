import useSWR from "swr";
import Spinner from "./Spinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GithubRepos() {
  const { data, error } = useSWR("/api/pinned-repos", fetcher);
  return (
    <>
      {!data && !error && <Spinner />}
      <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
        {error && "failed to load"}

        {data &&
          data.user.pinnedItems.edges.map(({ node: repo }) => {
            return (
              <a
                key={repo.id}
                href={repo.url}
                className="hover:text-indigo-600 fade-in"
              >
                <div className="p-4 bg-gray-200 border-2 rounded-lg shadow">
                  <header className="flex content-center justify-between w-full mb-2 h-fill">
                    <h3 className="text-xl">{repo.name}</h3>
                    <span
                      className="self-center justify-self-end"
                      style={{ color: repo.primaryLanguage.color }}
                    >
                      {repo.primaryLanguage.name}
                    </span>
                  </header>

                  {repo.description}
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
}
