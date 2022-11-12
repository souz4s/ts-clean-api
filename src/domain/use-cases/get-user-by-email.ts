import { UserModel } from "@/domain/models";

export interface GetUserByEmail {
  perform: (params: GetUserByEmail.Params) => Promise<GetUserByEmail.Result>;
}

export namespace GetUserByEmail {
  export type Params = { email: string };
  export type Result = { user?: UserModel };
}
