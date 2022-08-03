import { DbCreateUser } from ".";
import { CreateUserRepository } from "@/data/protocols";
import { CreateUser } from "@/domain/use-cases";

class CreateUserRepositorySpy implements CreateUserRepository {
  result = 0;
  createUser = async (params: CreateUserRepository.Params): Promise<CreateUserRepository.Result> => {
    void (await Promise.resolve(params));

    return { id: this.result };
  };
}

const makeSut = () => {
  const createBilletRepositorySpy = new CreateUserRepositorySpy();
  const sut = new DbCreateUser(createBilletRepositorySpy);

  return { sut, createBilletRepositorySpy };
};

const mockParams = (overwriteParams: Partial<CreateUser.Params> = {}): CreateUser.Params => ({
  email: "some-email",
  name: "some-name",
  ...overwriteParams,
});

describe("DbCreateUser", () => {
  it("should return the id of created user", async () => {
    const { sut } = makeSut();
    const mockedParams = mockParams();
    const result = await sut.perform(mockedParams);

    expect(result).toHaveProperty("id");
  });
});
