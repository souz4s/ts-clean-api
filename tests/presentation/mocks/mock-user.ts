import { CreateUser, GetUserByEmail } from "@/domain/use-cases";
import { mockCreateUserParams } from "@/tests/domain/mocks";

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

export class GetUserByEmailSpy implements GetUserByEmail {
  params: GetUserByEmail.Params | undefined;
  callsCount = 0;
  result = mockCreateUserParams();
  perform = async (params: GetUserByEmail.Params): Promise<GetUserByEmail.Result> => {
    this.callsCount++;
    this.params = params;
    return { user: this.result };
  };
}
