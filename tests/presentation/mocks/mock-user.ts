import { CreateUser } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

export class CreateUserSpy implements CreateUser {
  params: CreateUser.Params | undefined;
  callsCount = 0;
  result = parseInt(faker.random.numeric(2));
  perform = async (params: CreateUser.Params): Promise<CreateUser.Result> => {
    this.callsCount++;
    this.params = params;
    return { id: this.result };
  };
}
