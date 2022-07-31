import { MusicalGenreModel } from "@/domain/models";

export type UserModel = {
  id: string;
  email: string;
  name: string;
  musicalGenre: MusicalGenreModel["name"];
  musicalGenresId: string;
};
