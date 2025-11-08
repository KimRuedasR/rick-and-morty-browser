import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiUri = import.meta.env.VITE_GRAPHQL_API;

if (!apiUri) {
  throw new Error("VITE_GRAPHQL_API_ENDPOINT is not defined");
}

export const client = new ApolloClient({
  uri: apiUri,
  cache: new InMemoryCache(),
});
