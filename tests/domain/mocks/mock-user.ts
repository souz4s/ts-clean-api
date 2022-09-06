import { CreateUser } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

export const mockCreateUserParams = (): CreateUser.Params => ({
  email: faker.internet.email().toString(),
  name: faker.name.toString(),
  musicalGenreId: parseInt(faker.random.numeric(2)),
});
