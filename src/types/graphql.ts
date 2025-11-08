import type { Character } from "./character";

export interface PageInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

export interface GetCharactersQueryResponse {
  characters: {
    info: PageInfo;
    results: Character[];
  };
}

export interface GetCharactersQueryVariables {
  page?: number;
  name?: string;
}

export interface GetCharactersByIdQueryResponse {
  charactersByIds: Character[];
}

export interface GetCharactersByIdQueryVariables {
  id: string[];
}