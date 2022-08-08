import { GetUserByEmailController } from ".";
import { UserModel } from "@/domain/models";
import { GetUserByEmail } from "@/domain/use-cases";

class GetUserByEmailSpy implements GetUserByEmail {
  result: UserModel | undefined;
  callsCount = 0;
  receivedParams: GetUserByEmail.Params[] = [];
  perform = async (params: GetUserByEmail.Params): Promise<GetUserByEmail.Result> => {
    void (await Promise.resolve());
    this.callsCount++;
    this.receivedParams.push(params);

    return { user: this.result };
  };
}

const mockUserModel = (overwriteModel: Partial<UserModel> = {}): UserModel => ({
  id: 1,
  email: "some-email",
  name: "some-name",
  musicalGenreId: 1,
  ...overwriteModel,
});

const makeSut = () => {
  const getUserByEmailSpy = new GetUserByEmailSpy();
  const sut = new GetUserByEmailController(getUserByEmailSpy);

  return { sut, getUserByEmailSpy };
};

describe("GetUserByEmailController", () => {
  it("should return the status ok when get user by email", async () => {
    const { sut, getUserByEmailSpy } = makeSut();
    const result = await sut.handle(mockUserModel());

    expect(getUserByEmailSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(200);
  });

  it("should return bad request error when missing required parameters", async () => {
    const { sut, getUserByEmailSpy } = makeSut();
    const result = await sut.handle(mockUserModel({ email: undefined }));

    expect(getUserByEmailSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });

  it("should return internal server error when getUserByEmail throws error", async () => {
    const { sut, getUserByEmailSpy } = makeSut();
    jest.spyOn(getUserByEmailSpy, "perform").mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await sut.handle(mockUserModel());

    expect(getUserByEmailSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(500);
  });
});
