import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";
import CharactersView from "@/components/views/CharactersView";

function App() {
  return (
    <AppLayout>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
         <CharactersView />
      </main>
    </AppLayout>
  );
}

export default App;