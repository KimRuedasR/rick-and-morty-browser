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
    <header className="w-full h-[70px] flex justify-between items-center px-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" style={{ background: 'linear-gradient(90deg, rgba(0, 181, 204, 0.1) 0%, rgba(0, 181, 204, 0.05) 50%, rgba(0, 0, 0, 0) 100%)' }}>
      <h1 className="text-2xl font-bold text-[#0A0A0A]">
        Rick & Morty Browser
      </h1>
      {/* View Options */}
      <div className="flex gap-3">
        <Button
          variant="ghost"
          onClick={() => onViewChange("characters")}
          className={
            activeView === "characters"
              ? "rounded-[10px] bg-[#00B5CC] hover:bg-[#00B5CC]/90 text-white font-normal text-base h-10 px-6"
              : "rounded-[10px] bg-transparent text-[#0A0A0A] hover:bg-gray-100 font-normal text-base h-10 px-6"
          }
        >
          All Characters
        </Button>
        <Button
          variant="ghost"
          onClick={() => onViewChange("favorites")}
          className={
            activeView === "favorites"
              ? "rounded-[10px] bg-[#00B5CC] hover:bg-[#00B5CC]/90 text-white font-normal text-base h-10 px-6"
              : "rounded-[10px] bg-transparent text-[#0A0A0A] hover:bg-gray-100 font-normal text-base h-10 px-6"
          }
        >
          Favorites ({favoritesCount})
        </Button>
      </div>
    </header>
  );
}