import type { Character } from "@/types/character";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StatusBadge } from "@/components/common/StatusBadge";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover transition-transform"
          loading="lazy" 
        />
      </div>
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-lg font-bold" title={character.name}>
            {character.name}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">{character.species}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
         <StatusBadge status={character.status} />
      </CardFooter>
    </Card>
  );
}