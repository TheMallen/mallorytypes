import { graphql } from "@octokit/graphql";

const gql = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

export default async function handler(req, res) {
  try {
    const result = await gql(`
      {
        user(login:"themallen") {
            pinnedItems(first: 5, types: [REPOSITORY, GIST]) {
                totalCount
                edges {
                    node {
                        ... on Repository {
                            id
                            name
                            url
                            stargazerCount
                            description
                            primaryLanguage {
                              name,
                              color
                            }
                        }
                    }
                }
            }
        }
    }
    `);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
}
