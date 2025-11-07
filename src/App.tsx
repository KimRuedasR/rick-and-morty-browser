import { useQuery } from "@apollo/client";
import AppLayout from "./components/layout/AppLayout";
import Header from "./components/layout/Header";
import { GET_CHARACTERS } from "./graphql/queries";
import type { Character } from "./types/character";
import type { GetCharactersQueryResponse } from "./types/graphql";

function App() {
  function DisplayCharacters() {
    const { loading, error, data } =
      useQuery<GetCharactersQueryResponse>(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data</p>;

    return data.characters.results.map(({ id, name, status, species }: Character) => (
      <div key={id}>
        <h3>{name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    ));
  }

  return (
    <AppLayout>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Character List</h2>
        <DisplayCharacters />
      </main>
    </AppLayout>
  );
}

export default App;