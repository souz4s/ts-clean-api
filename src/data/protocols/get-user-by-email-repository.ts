export interface GetUserByEmailRepository {
  getByEmail: (params: GetUserByEmailRepository.Params) => Promise<GetUserByEmailRepository.Result>;
}

export namespace GetUserByEmailRepository {
  export type Params = { userEmail: string };
  export type Result = { user?: object };
}
