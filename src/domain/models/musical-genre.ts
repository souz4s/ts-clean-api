import { UserModel } from "@/domain/models";

export type MusicalGenreModel = {
  id: string;
  name: string;
  score: string;
  Users: UserModel["id"];
  updateAt: Date;
};