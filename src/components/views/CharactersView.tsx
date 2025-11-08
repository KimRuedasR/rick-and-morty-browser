import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import type { GetCharactersQueryResponse, GetCharactersQueryVariables } from "@/types/graphql";
import { useDebounce } from "@/hooks/useDebounce";
import CharacterGrid from "@/components/character/CharacterGrid";
import CharacterGridSkeleton from "@/components/character/CharacterGridSkeleton";
import SearchBar from "@/components/common/SearchBar";
import NoResults from "@/components/common/NoResults";
import Pagination from "@/components/common/Pagination"; // <-- Import Pagination

export default function CharactersView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // CRITICAL: Reset page to 1 when search term changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm]);

  // Scroll to top on page change for better UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const { data, loading, error } = useQuery<
    GetCharactersQueryResponse,
    GetCharactersQueryVariables
  >(GET_CHARACTERS, {
    variables: { page, name: debouncedSearchTerm },
    // This also helps with UX on page/search changes
    onCompleted: () => {
      window.scrollTo(0, 0);
    },
  });

  // Handle API error state
  if (error) {
    // API returns 404 when search yields no results. Treat this as an empty state.
    if (error.message.includes("404")) {
      return (
        <section className="space-y-8">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm("")}
          />
          <NoResults searchTerm={debouncedSearchTerm} />
        </section>
      );
    }
    // Handle actual GraphQL/network errors
    return (
      <div className="py-20 text-center text-destructive">
        <p>An error occurred: {error.message}</p>
      </div>
    );
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
        // Success state: Show grid and pagination
        <>
          <CharacterGrid characters={data.characters.results} />
          <Pagination
            currentPage={page}
            info={data.characters.info}
            onPageChange={setPage}
          />
        </>
      ) : (
        // Empty state (search returned no results)
        <NoResults searchTerm={debouncedSearchTerm} />
      )}
    </section>
  );
}