// @ts-nocheck
import { GetUserByEmailController } from "@/presentation/controllers";
import { mockCreateUserParams } from "@/tests/domain/mocks";
import { GetUserByEmailSpy } from "@/tests/presentation/mocks";

const makeSut = () => {
  const getUserByEmailSpy = new GetUserByEmailSpy();
  const sut = new GetUserByEmailController(getUserByEmailSpy);
  return { sut, getUserByEmailSpy };
};

describe("GetUserByEmailController", () => {
  it("should return the status ok when get user by email", async () => {
    const { sut, getUserByEmailSpy } = makeSut();
    const result = await sut.handle(mockCreateUserParams());
    expect(getUserByEmailSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(200);
  });

  it("should return bad request error when missing required parameters", async () => {
    const { sut, getUserByEmailSpy } = makeSut();
    const result = await sut.handle({ email: undefined });
    expect(getUserByEmailSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });

  it("should return internal server error when getUserByEmail throws error", async () => {
    const { sut, getUserByEmailSpy } = makeSut();
    jest.spyOn(getUserByEmailSpy, "perform").mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await sut.handle(mockCreateUserParams());
    expect(getUserByEmailSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(500);
  });
});
