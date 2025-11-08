import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

export const GET_CHARACTERS_BY_ID = gql`
  query GetCharactersById($id: [ID!]!) {
    charactersByIds(ids: $id) {
      id
      name
      status
      species
      image
    }
  }
`;