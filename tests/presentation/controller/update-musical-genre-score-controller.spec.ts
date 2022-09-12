// @ts-nocheck
import { UpdateMusicalGenreScoreController } from "@/presentation/controllers";
import { mockUpdateMusicalGenreScore } from "@/tests/domain/mocks";
import { UpdateMusicalGenreScoreSpy } from "@/tests/presentation/mocks";

const makeSut = () => {
  const updateMusicalGenreScoreSpy = new UpdateMusicalGenreScoreSpy();
  const sut = new UpdateMusicalGenreScoreController(updateMusicalGenreScoreSpy);
  return { sut, updateMusicalGenreScoreSpy };
};

describe("UpdateMusicalGenreScoreController", () => {
  it("should call 'updateMusicalGenreScore' in the update of the score", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    await sut.handle(mockUpdateMusicalGenreScore());
    expect(updateMusicalGenreScoreSpy.callsCount).toBe(1);
  });

  it("should return the status ok when update musical genre score", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    const result = await sut.handle(mockUpdateMusicalGenreScore());
    expect(updateMusicalGenreScoreSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(200);
  });

  it("should return bad request error when missing required parameters", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    const result = await sut.handle({ id: undefined });
    expect(updateMusicalGenreScoreSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });

  it("should return internal server error when updateMusicalGenreScore throws error", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    jest.spyOn(updateMusicalGenreScoreSpy, "perform").mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await sut.handle(mockUpdateMusicalGenreScore());
    expect(updateMusicalGenreScoreSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(500);
  });
});
