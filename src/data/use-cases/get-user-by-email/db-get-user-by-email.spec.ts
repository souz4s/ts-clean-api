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

const mockParams = (overwriteParams: Partial<UserModel> = {}): UserModel => ({
  email: "some-email",
  id: 0,
  name: "some-name",
  musicalGenre: {},
  musicalGenreId: 0,
  ...overwriteParams,
});

describe("DbGetUserByEmail", () => {
  it("should return the property 'user' as undefined for unexisting user", async () => {
    const { sut } = makeSut();
    const result = await sut.perform({ email: "some-email" });

    expect(result).toHaveProperty("user");
    expect(result.user).toBeUndefined();
  });

  it("should return the 'user' as UserModel", async () => {
    const { sut, getUserByEmailRepositorySpy } = makeSut();
    getUserByEmailRepositorySpy.result = mockParams();
    const result = await sut.perform({ email: "some-email" });

    expect(result.user).toBe(getUserByEmailRepositorySpy.result);
  });
});
