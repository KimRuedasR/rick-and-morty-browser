import AppLayout from "./components/layout/AppLayout";
import Header from "./components/layout/Header";

function App() {
  return (
    <AppLayout>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-xl">Character List</h2>
      </main>
    </AppLayout>
  );
}

export default App;