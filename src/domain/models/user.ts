import { MusicalGenreModel } from "./musical-genre";

export type UserModel = {
  id: string;
  email: string;
  name: string;
  musicalGenre: MusicalGenreModel[];
  musicalGenresId: string;
};
