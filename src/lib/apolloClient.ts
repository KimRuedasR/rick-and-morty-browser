import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const apiUri = import.meta.env.VITE_GRAPHQL_API;

if (!apiUri) {
  throw new Error("VITE_GRAPHQL_API_ENDPOINT is not defined");
}

const httpLink = new HttpLink({
  uri: apiUri,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
