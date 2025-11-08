import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function CharacterSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square w-full bg-gray-100">
        <Skeleton className="h-full w-full" />
      </div>
      <CardContent className="flex flex-col gap-2 p-4">
        <Skeleton className="h-7 w-3/4" /> {/* Name placeholder */}
        <Skeleton className="h-4 w-1/2" /> {/* Species placeholder */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-6 w-20 rounded-full" /> {/* Badge placeholder */}
      </CardFooter>
    </Card>
  );
}

export default function CharacterGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <CharacterSkeleton key={i} />
      ))}
    </div>
  );
}