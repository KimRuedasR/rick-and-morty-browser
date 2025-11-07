import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/graphql/queries";
import type { GetCharactersQueryResponse, GetCharactersQueryVariables } from "@/types/graphql";
import CharacterGrid from "../character/CharacterGrid";

export default function AllCharactersView() {
  const { data, loading, error } = useQuery<
    GetCharactersQueryResponse,
    GetCharactersQueryVariables
  >(GET_CHARACTERS, {
    variables: { page: 1, name: "" },
  });

  if (loading) {
    return (
       <div className="py-20 text-center text-muted-foreground">
         Loading...
       </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center text-red-800">
        <p>Error: {error.message}</p>
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