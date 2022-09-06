import { CreateUser } from "@/domain/use-cases";
import { CreateUserRepository } from "@/data/protocols";

export class DbCreateUser implements CreateUser {
  constructor(private readonly createUserRepository: CreateUserRepository) {}
  perform = async (params: CreateUser.Params): Promise<CreateUser.Result> => {
    const createResult = await this.createUserRepository.createUser({
      ...params,
    });
    return { id: createResult.id };
  };
}
