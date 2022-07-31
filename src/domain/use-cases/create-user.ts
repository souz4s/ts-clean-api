export interface CreateUser {
  perform: (params: CreateUser.Params) => Promise<CreateUser.Result>;
}

export namespace CreateUser {
  export type Params = { email: string; name: string };

  export type Result = { id: string };
}
