import { DbGetUserByEmail } from "@/data/use-cases";
import { mockCreateUserParams } from "@/tests/domain/mocks";
import { GetUserByEmailRepositorySpy } from "@/tests/data/mocks";

const makeSut = () => {
  const getUserByEmailRepositorySpy = new GetUserByEmailRepositorySpy();
  const sut = new DbGetUserByEmail(getUserByEmailRepositorySpy);
  return { sut, getUserByEmailRepositorySpy };
};

describe("DbGetUserByEmail", () => {
  it("should return the property 'user' as undefined for unexisting user", async () => {
    const { sut } = makeSut();
    const result = await sut.perform(mockCreateUserParams());
    result.user = undefined;
    expect(result).toHaveProperty("user");
  });

  it("should return the 'user' as UserModel", async () => {
    const { sut, getUserByEmailRepositorySpy } = makeSut();
    getUserByEmailRepositorySpy.result = mockCreateUserParams();
    const result = await sut.perform(mockCreateUserParams());
    expect(result.user).toBe(getUserByEmailRepositorySpy.result);
  });
});
