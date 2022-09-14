import { CreateUserRepository, GetUserByEmailRepository } from "@/data/protocols";
import { mockCreateUserParams } from "@/tests/domain/mocks";

import { faker } from "@faker-js/faker";

export class CreateUserRepositorySpy implements CreateUserRepository {
  params: CreateUserRepository.Params | undefined;
  result = parseInt(faker.random.numeric(2));
  createUser = async (params: CreateUserRepository.Params): Promise<CreateUserRepository.Result> => {
    this.params = params;
    return { id: this.result };
  };
}

export class GetUserByEmailRepositorySpy implements GetUserByEmailRepository {
  params: GetUserByEmailRepository.Params | undefined;
  result = mockCreateUserParams();
  getByEmail = async (params: GetUserByEmailRepository.Params): Promise<GetUserByEmailRepository.Result> => {
    this.params = params;
    return { user: this.result };
  };
}
