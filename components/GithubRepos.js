import useSWR from "swr";
import Spinner from "./Spinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GithubRepos() {
  const { data, error } = useSWR("/api/pinned-repos", fetcher);
  return (
    <>
      {!data && !error && <Spinner />}
      {error && (
        <span className="p-2 text-white bg-red-400 rounded shadow">
          Pinned github repos failed to load, check your network status and
          refresh the page.
        </span>
      )}

      <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
        {data &&
          data.user.pinnedItems.edges.map(({ node: repo }) => {
            const useDarkText =
              repo.primaryLanguage.name.toLowerCase() === "javascript";
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
                      className={`self-center px-2 py-2 my-1 text-xs font-light ${
                        useDarkText ? "text-gray-900" : "text-gray-100"
                      } rounded family-unicode lg:text-sm justify-self-end`}
                      style={{ background: repo.primaryLanguage.color }}
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
