import { CreateUserController } from ".";
import { UserModel } from "@/domain/models";
import { CreateUser } from "@/domain/use-cases";
import { OnCreateController } from "@/presentation/protocols";

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
  ...overwriteModel,
});

const mockParams = (user: UserModel): OnCreateController.Params<UserModel> => ({
  eventType: "created",
  previousData: undefined,
  newData: user,
});

const makeSut = () => {
  const createUserSpy = new CreateUserSpy();
  const sut = new CreateUserController(createUserSpy);

  return { sut, createUserSpy };
};

describe("CreateUserController", () => {
  it("should call 'createUser' in the creation of the user", async () => {
    const params = mockParams(mockUserModel());
    const { sut, createUserSpy } = makeSut();
    await sut.handle(params);

    expect(createUserSpy.callsCount).toBe(1);
  });

  it("should return the status ok when creating the user", async () => {
    const params = mockParams(mockUserModel());
    const { sut, createUserSpy } = makeSut();
    const result = await sut.handle(params);

    expect(createUserSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(200);
  });

  it("should return bad request error when missing required parameters", async () => {
    const params = mockParams(mockUserModel({ email: undefined }));
    const { sut, createUserSpy } = makeSut();
    const result = await sut.handle(params);

    expect(createUserSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });
});
