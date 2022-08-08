export interface CreateUser {
  perform: (params: CreateUser.Params) => Promise<CreateUser.Result>;
}

export namespace CreateUser {
  export type Params = { email: string; name: string; musicalGenreId: number };
  export type Result = { id: number };
}
