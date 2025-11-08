import type { Character } from "@/types/character";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { StatusBadge } from "@/components/common/StatusBadge";
import { useFavoritesStore } from "@/store/favorites";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  // Get favorite state and toggle function
  const isFavorited = useFavoritesStore((state) => state.isFavorited(character.id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <Card className="w-full overflow-hidden shadow-md border-0 rounded-[14px] p-0 gap-0">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleFavorite(character.id)}
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          aria-label={isFavorited ? `Remove ${character.name} from favorites` : `Add ${character.name} to favorites`}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isFavorited ? "fill-[#FB2C36] text-[#FB2C36]" : "text-gray-500"
            )}
          />
        </Button>
      </div>
       <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-2">
          <h3
            className="line-clamp-1 text-xl font-bold text-[#0A0A0A]"
            title={character.name}
          >
            {character.name}
          </h3>
          <div className="flex">
            <StatusBadge status={character.status} />
          </div>
        </div>
        <p className="text-sm text-[#6A7282] line-clamp-1">
          {character.species}
        </p>
      </CardContent>
    </Card>
  );
}