type Person = {
  readonly id: number;           // identificativo non modificabile
  readonly name: string;        // nome completo non modificabile
  birth_year: number;           // anno di nascita
  death_year?: number;          // anno di morte (opzionale)
  biography: string;            // breve biografia
  image: string;                // URL dell'immagine
};

type Nationality =
  | "American"
  | "British"
  | "Australian"
  | "Israeli-American"
  | "South African"
  | "French"
  | "Indian"
  | "Israeli"
  | "Spanish"
  | "South Korean"
  | "Chinese";

type Actress = Person & {
  most_famous_movies: [string, string, string]; // tupla di 3 stringhe
  awards: string;
  nationality: Nationality;
};