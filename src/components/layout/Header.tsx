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
    <header className="w-full min-h-[70px] h-auto flex flex-col sm:flex-row justify-between items-center px-3 sm:px-4 py-3 sm:py-0 gap-3 sm:gap-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" style={{ background: 'linear-gradient(90deg, rgba(0, 181, 204, 0.1) 0%, rgba(0, 181, 204, 0.05) 50%, rgba(0, 0, 0, 0) 100%)' }}>
      <h1 className="text-base sm:text-xl md:text-2xl font-bold text-[#0A0A0A] text-center sm:text-left">
        Rick & Morty Browser
      </h1>
      {/* View Options */}
      <div className="flex gap-2 sm:gap-3 w-full sm:w-auto justify-center">
        <Button
          variant="ghost"
          onClick={() => onViewChange("characters")}
          className={
            activeView === "characters"
              ? "rounded-[10px] bg-[#00B5CC] hover:bg-[#00B5CC]/90 text-white font-normal text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-6 flex-1 sm:flex-none"
              : "rounded-[10px] bg-transparent text-[#0A0A0A] hover:bg-gray-100 font-normal text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-6 flex-1 sm:flex-none"
          }
        >
          All Characters
        </Button>
        <Button
          variant="ghost"
          onClick={() => onViewChange("favorites")}
          className={
            activeView === "favorites"
              ? "rounded-[10px] bg-[#00B5CC] hover:bg-[#00B5CC]/90 text-white font-normal text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-6 flex-1 sm:flex-none"
              : "rounded-[10px] bg-transparent text-[#0A0A0A] hover:bg-gray-100 font-normal text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-6 flex-1 sm:flex-none"
          }
        >
          Favorites ({favoritesCount})
        </Button>
      </div>
    </header>
  );
}