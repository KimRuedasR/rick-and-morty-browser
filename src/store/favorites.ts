import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FavoritesState {
  favoriteId: string[];
  toggleFavorite: (id: string) => void;
  isFavorited: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteId: [],

      toggleFavorite: (id: string) => {
        const currentFavorites = get().favoriteId;
        const isCurrentlyFavorited = currentFavorites.includes(id);

        set({
          favoriteId: isCurrentlyFavorited
            ? currentFavorites.filter((favId) => favId !== id)
            : [...currentFavorites, id],
        });
      },

      isFavorited: (id: string) => get().favoriteId.includes(id),
    }),
    {
      name: 'rick-morty-favorites', 
      storage: createJSONStorage(() => localStorage),
    }
  )
);