import { CreateUserController } from ".";
import { UserModel } from "@/domain/models";
import { CreateUser } from "@/domain/use-cases";

class CreateUserSpy implements CreateUser {
  callsCount = 0;
  result: CreateUser.Result = {
    id: 0,
  };
  perform = async (params: CreateUser.Params): Promise<CreateUser.Result> => {
    void (await Promise.resolve(params));
    this.callsCount++;

    return { id: this.result.id };
  };
}

const mockUserModel = (overwriteModel: Partial<UserModel> = {}): UserModel => ({
  id: 0,
  email: "some-email",
  name: "some-name",
  musicalGenreId: 1,
  ...overwriteModel,
});

const makeSut = () => {
  const createUserSpy = new CreateUserSpy();
  const sut = new CreateUserController(createUserSpy);

  return { sut, createUserSpy };
};

describe("CreateUserController", () => {
  it("should call 'createUser' in the creation of the user", async () => {
    const { sut, createUserSpy } = makeSut();
    await sut.handle(mockUserModel());

    expect(createUserSpy.callsCount).toBe(1);
  });

  it("should return the status ok when creating the user", async () => {
    const { sut, createUserSpy } = makeSut();
    const result = await sut.handle(mockUserModel());

    expect(createUserSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(200);
  });

  it("should return bad request error when missing required parameters", async () => {
    const { sut, createUserSpy } = makeSut();
    const result = await sut.handle(mockUserModel({ email: undefined, name: undefined, musicalGenreId: undefined }));

    expect(createUserSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });

  it("should return internal server error when createUser throws error", async () => {
    const { sut, createUserSpy } = makeSut();
    jest.spyOn(createUserSpy, "perform").mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await sut.handle(mockUserModel());

    expect(createUserSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(500);
  });
});
