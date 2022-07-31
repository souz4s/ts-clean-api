import { MusicalGenreModel } from "@/domain/models";

export interface CreateUser {
  perform: (params: CreateUser.Params) => Promise<CreateUser.Result>;
}

export namespace CreateUser {
  export type Params = {
    id: string;
    email: string;
    name: string;
    musicalGenre: MusicalGenreModel["name"];
    musicalGenresId: string;
  };

  export type Result = { id: string };
}
