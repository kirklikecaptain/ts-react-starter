import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useExampleData } from "~/api/queries/useExampleData";

export default function Home() {
  const { data, error, isPending } = useExampleData();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Box>
      <Heading as="h1">{data.name}</Heading>
      <Text>{data.description}</Text>
      <UnorderedList>
        <ListItem>👀 {data.subscribers_count}</ListItem>
        <ListItem>🌟 {data.stargazers_count}</ListItem>
        <ListItem>🍴 {data.forks_count}</ListItem>
      </UnorderedList>
    </Box>
  );
}
