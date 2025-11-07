import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function CharacterSkeletonCard() {
  return (
    <Card className="w-full overflow-hidden shadow-md border-0 rounded-[14px] p-0 gap-0">
      <Skeleton className="w-full aspect-square" />
      <CardContent className="p-4">
        <Skeleton className="h-7 w-3/4 mb-3" />
        <Skeleton className="h-5 w-1/4 mb-2" />
        <Skeleton className="h-5 w-1/3" />
      </CardContent>
    </Card>
  );
}

export default function CharacterSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <CharacterSkeletonCard key={index} />
      ))}
    </div>
  );
}