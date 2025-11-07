import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import type { GetCharactersQueryResponse, GetCharactersQueryVariables } from "@/types/graphql";
import { useDebounce } from "@/hooks/useDebounce";
import CharacterGrid from "../character/CharacterGrid";
import CharacterGridSkeleton from "../character/CharacterGridSkeleton";
import SearchBar from "../common/SearchBar";

export default function CharactersView() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const { data, loading, error } = useQuery<
    GetCharactersQueryResponse,
    GetCharactersQueryVariables
  >(GET_CHARACTERS, {
    variables: { page: 1, name: debouncedSearchTerm },
  });

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-8 text-center text-destructive">
        <p>Error loading characters: {error.message}</p>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex justify-center md:justify-start">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onClear={() => setSearchTerm("")}
        />
      </div>

      {loading ? (
        <CharacterGridSkeleton />
      ) : (
        <CharacterGrid characters={data?.characters.results ?? []} />
      )}
    </section>
  );
}