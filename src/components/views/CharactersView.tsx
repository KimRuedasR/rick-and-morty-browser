import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import type { GetCharactersQueryResponse, GetCharactersQueryVariables } from "@/types/graphql";
import CharacterGrid from "../character/CharacterGrid";
import CharacterGridSkeleton from "../character/CharacterGridSkeleton";

export default function CharactersView() {
  const { data, loading, error } = useQuery<
    GetCharactersQueryResponse,
    GetCharactersQueryVariables
  >(GET_CHARACTERS, {
    variables: { page: 1, name: "" },
  });

  if (loading) {
    return <CharacterGridSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-8 text-center text-destructive">
        <p>Error loading characters: {error.message}</p>
      </div>
    );
  }

  const characters = data?.characters?.results ?? [];

  return (
    <section>
      <CharacterGrid characters={characters} />
    </section>
  );
}