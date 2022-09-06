import { DbCreateUser } from "@/data/use-cases";
import { mockCreateUserParams } from "@/tests/domain/mocks";
import { CreateUserRepositorySpy } from "@/tests/data/mocks";

const makeSut = () => {
  const createUserRepositorySpy = new CreateUserRepositorySpy();
  const sut = new DbCreateUser(createUserRepositorySpy);
  return { sut, createUserRepositorySpy };
};

describe("DbCreateUser", () => {
  it("should return the id of created user", async () => {
    const { sut } = makeSut();
    const mockedParams = mockCreateUserParams();
    const result = await sut.perform(mockedParams);
    expect(result).toHaveProperty("id");
  });
});
