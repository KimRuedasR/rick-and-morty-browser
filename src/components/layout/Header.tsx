import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-bbg-white/95 px-4 py-4 shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0A0A0A]">
          Rick & Morty Browser
        </h1>
        {/* View Options */}
        <nav className="flex gap-2">
          <Button className="rounded-lg">
            All Characters
          </Button>
          <Button className="rounded-lg">
            Favorites (0)
          </Button>
        </nav>
      </div>
    </header>
  );
}