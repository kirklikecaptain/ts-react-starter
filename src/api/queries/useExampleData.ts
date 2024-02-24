import { useQuery } from "@tanstack/react-query";

async function fetchRepoData() {
  const response = await fetch("https://api.github.com/repos/TanStack/query");

  if (!response.ok) {
    throw new Error(`An error has occurred: ${response.status}`);
  }

  return await response.json();
}

export function useExampleData() {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: fetchRepoData,
  });
}
