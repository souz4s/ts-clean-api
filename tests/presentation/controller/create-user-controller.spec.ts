// @ts-nocheck
import { CreateUserController } from "@/presentation/controllers";
import { mockCreateUserParams } from "@/tests/domain/mocks";
import { CreateUserSpy } from "@/tests/presentation/mocks";

const makeSut = () => {
  const createUserSpy = new CreateUserSpy();
  const sut = new CreateUserController(createUserSpy);
  return { sut, createUserSpy };
};

describe("CreateUserController", () => {
  it("should call 'createUser' in the creation of the user", async () => {
    const { sut, createUserSpy } = makeSut();
    await sut.handle(mockCreateUserParams());
    expect(createUserSpy.callsCount).toBe(1);
  });

  it("should return the status created when creating the user", async () => {
    const { sut, createUserSpy } = makeSut();
    const result = await sut.handle(mockCreateUserParams());
    expect(createUserSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(201);
  });

  it("should return bad request error when missing required parameters", async () => {
    const { sut, createUserSpy } = makeSut();
    const result = await sut.handle({ email: undefined, name: undefined, musicalGenreId: undefined });
    expect(createUserSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });

  it("should return internal server error when createUser throws error", async () => {
    const { sut, createUserSpy } = makeSut();
    jest.spyOn(createUserSpy, "perform").mockImplementationOnce(() => {
      throw new Error().stack;
    });
    const result = await sut.handle(mockCreateUserParams());
    expect(createUserSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(500);
  });
});
