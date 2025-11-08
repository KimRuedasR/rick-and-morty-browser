import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import type { GetCharactersQueryResponse, GetCharactersQueryVariables } from "@/types/graphql";
import { useDebounce } from "@/hooks/useDebounce";
import CharacterGrid from "@/components/character/CharacterGrid";
import CharacterGridSkeleton from "@/components/character/CharacterGridSkeleton";
import SearchBar from "@/components/common/SearchBar";
import NoResults from "@/components/common/NoResults";


export default function CharactersView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm]);

  const { data, loading, error } = useQuery<
    GetCharactersQueryResponse,
    GetCharactersQueryVariables
  >(GET_CHARACTERS, {
    variables: { page, name: debouncedSearchTerm },
  });

  // GraphQL API returns 404
  if (error) {
    if (error.message.includes("404: Not Found")) {
      return <NoResults searchTerm={debouncedSearchTerm} />;
    }
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="space-y-8">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />

      {loading ? (
        <CharacterGridSkeleton />
      ) : data?.characters.results && data.characters.results.length > 0 ? (
        <CharacterGrid characters={data.characters.results} />
      ) : (
        <NoResults searchTerm={debouncedSearchTerm} />
      )}
    </section>
  );
}