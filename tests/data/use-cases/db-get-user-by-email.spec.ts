import { DbGetUserByEmail } from "@/data/use-cases";
import { GetUserByEmailRepositorySpy } from "@/tests/data/mocks";

const makeSut = () => {
  const getUserByEmailRepositorySpy = new GetUserByEmailRepositorySpy();
  const sut = new DbGetUserByEmail(getUserByEmailRepositorySpy);
  return { sut, getUserByEmailRepositorySpy };
};

describe("DbGetUserByEmail", () => {
  it("should return the property 'user' as undefined for unexisting user", async () => {
    const { sut } = makeSut();
    const result = await sut.perform({ email: "some-email" });
    expect(result).toHaveProperty("user");
    expect(result.user).toBeUndefined();
  });
});
