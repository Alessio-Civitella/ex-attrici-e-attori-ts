type Person = {
  readonly id: number;
  readonly name: string;
  birth_year: number;
  death_year?: number;
  biography: string;
  image: string;
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
  most_famous_movies: [string, string, string];
  awards: string;
  nationality: Nationality;
};

function isActress(obj: any): obj is Actress {
  return (
    obj &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.birth_year === "number" &&
    (typeof obj.death_year === "undefined" || typeof obj.death_year === "number") &&
    typeof obj.biography === "string" &&
    typeof obj.image === "string" &&
    Array.isArray(obj.most_famous_movies) &&
    obj.most_famous_movies.length === 3 &&
    obj.most_famous_movies.every((movie: any) => typeof movie === "string") &&
    typeof obj.awards === "string" &&
    [
      "American",
      "British",
      "Australian",
      "Israeli-American",
      "South African",
      "French",
      "Indian",
      "Israeli",
      "Spanish",
      "South Korean",
      "Chinese"
    ].includes(obj.nationality)
  );
}


async function getActress(id: number): Promise<Actress | null> {
  try {
    const res = await fetch(`http://localhost:3333/actresses/${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return isActress(data) ? data : null;
  } catch (error) {
    console.error("Errore nella richiesta:", error);
    return null;
  }
}