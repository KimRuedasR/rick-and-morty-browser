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

  // Debug
  console.log("Favorites Debug:", { favoriteId, data, loading, error: error?.message });

  if (favoriteId.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="rounded-full bg-gray-100 p-6 mb-4">
           <Heart className="h-10 w-10 text-gray-400" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-bold text-[#0A0A0A]">No favorites yet</h2>
        <p className="text-gray-600 mt-2 max-w-md">
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