import { UserModel } from "@/domain/models";

export interface CreateUserRepository {
  createUser: (params: CreateUserRepository.Params) => Promise<CreateUserRepository.Result>;
}

export namespace CreateUserRepository {
  export type Params = { email: string; name: string };
  export type Result = UserModel;
}
