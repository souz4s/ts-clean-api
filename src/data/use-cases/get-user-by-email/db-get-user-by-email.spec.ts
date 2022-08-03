import { DbGetUserByEmail } from ".";
import { GetUserByEmailRepository } from "@/data/protocols";
import { UserModel } from "@/domain/models";

class GetUserByEmailRepositorySpy implements GetUserByEmailRepository {
  result: UserModel | undefined;
  getByEmail = async ({ email }: GetUserByEmailRepository.Params): Promise<GetUserByEmailRepository.Result> => {
    void (await Promise.resolve(email));

    return { user: this.result };
  };
}

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
