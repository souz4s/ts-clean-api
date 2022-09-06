import { CreateUserRepository } from "@/data/protocols";

import { faker } from "@faker-js/faker";

export class CreateUserRepositorySpy implements CreateUserRepository {
  params: CreateUserRepository.Params | undefined;
  result = parseInt(faker.random.numeric(2));
  createUser = async (params: CreateUserRepository.Params): Promise<CreateUserRepository.Result> => {
    this.params = params;
    return { id: this.result };
  };
}
