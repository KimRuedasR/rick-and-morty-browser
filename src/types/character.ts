export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface Character {
  id: string;
  name: string;
  status: CharacterStatus;
  species: string;
  image: string;
}