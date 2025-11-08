import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import Header, { type ActiveView } from "@/components/layout/Header";
import CharactersView from "@/components/views/CharactersView";
import FavoritesView from "@/components/views/FavoritesView";

function App() {
  const [activeView, setActiveView] = useState<ActiveView>("characters");

  return (
    <AppLayout>
      <Header activeView={activeView} onViewChange={setActiveView} />
      <main className="mx-auto max-w-7xl px-4 py-8">
        {activeView === "characters" ? ( <CharactersView /> ) : (<FavoritesView />
        )}
      </main>
    </AppLayout>
  );
}

export default App;