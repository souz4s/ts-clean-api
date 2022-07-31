import { UserModel } from "./user";

export type MusicalGenreModel = {
  id: string;
  name: string;
  score: string;
  Users: UserModel;
  updateAt: Date;
};
