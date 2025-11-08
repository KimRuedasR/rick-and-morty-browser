// src/components/views/FavoritesView.tsx
import { useQuery } from "@apollo/client";
import { Heart } from "lucide-react";
import { GET_CHARACTERS_BY_ID } from "@/graphql/queries";
import { useFavoritesStore } from "@/store/favorites";
import CharacterGrid from "@/components/character/CharacterGrid";
import CharacterGridSkeleton from "@/components/character/CharacterGridSkeleton";
import type { GetCharactersByIdQueryResponse, GetCharactersByIdQueryVariables } from "@/types/graphql";

export default function FavoritesView() {
  const favoriteId = useFavoritesStore((state) => state.favoriteId);

  const { data, loading, error } = useQuery<
    GetCharactersByIdQueryResponse,
    GetCharactersByIdQueryVariables
  >(GET_CHARACTERS_BY_ID, {
    variables: { id: favoriteId },
    // Avoid network error
    skip: favoriteId.length === 0,
  });

  if (favoriteId.length === 0) {
    return (
      <div className="w-full max-w-[1248px] h-[300px] mx-auto flex flex-col items-center justify-center text-center">
        <Heart className="w-16 h-16 text-gray-400 mb-4" strokeWidth={1.5} />
        <h3 className="text-xl font-normal text-[#0A0A0A] mb-4">
          No favorites yet
        </h3>
        <p className="text-base font-normal text-[#717182]">
          Start adding characters to your favorites!
        </p>
      </div>
    );
  }

  if (loading) {
    return <CharacterGridSkeleton />;
  }

  if (error) {
    return (
      <div className="py-20 text-center text-destructive">
        Error loading favorites. Please try again later.
      </div>
    );
  }

  return (
     <section className="space-y-8">
         {/* Reusing the same grid component ensures consistent layout */}
        <CharacterGrid characters={data?.charactersByIds ?? []} />
     </section>
  );
}