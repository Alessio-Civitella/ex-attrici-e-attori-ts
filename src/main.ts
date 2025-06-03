type Person = {
  readonly id: number;           // identificativo non modificabile
  readonly name: string;        // nome completo non modificabile
  birth_year: number;           // anno di nascita
  death_year?: number;          // anno di morte (opzionale)
  biography: string;            // breve biografia
  image: string;                // URL dell'immagine
};
