import { Button } from "@/components/ui/button";
import { useFavoritesStore } from "@/store/favorites";

export type ActiveView = "characters" | "favorites";

interface HeaderProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
}

export default function Header({ activeView, onViewChange }: HeaderProps) {
  const favoritesCount = useFavoritesStore((state) => state.favoriteId.length);

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-white/95 px-4 py-4 shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0A0A0A]">
          Rick & Morty Browser
        </h1>
        {/* View Options */}
        <nav className="flex gap-2">
          <Button
            variant={activeView === "characters" ? "default" : "ghost"}
            onClick={() => onViewChange("characters")}
            className="rounded-lg"
          >
            All Characters
          </Button>
          <Button
            variant={activeView === "favorites" ? "default" : "ghost"}
            onClick={() => onViewChange("favorites")}
            className="rounded-lg"
          >
            Favorites ({favoritesCount})
          </Button>
        </nav>
      </div>
    </header>
  );
}