export interface CreateUserRepository {
  createUser: (params: CreateUserRepository.Params) => Promise<CreateUserRepository.Result>;
}

export namespace CreateUserRepository {
  export type Params = { email: string; name: string; musicalGenreId: number };
  export type Result = { id: number };
}
