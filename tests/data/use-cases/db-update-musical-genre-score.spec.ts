import { DbUpdateMusicalGenreScore } from "@/data/use-cases";
import { UpdateMusicalGenreScoreRepositorySpy } from "@/tests/data/mocks";
import { mockUpdateMusicalGenreScore } from "@/tests/domain/mocks";

const makeSut = () => {
  const updateMusicalGenreScoreRepositorySpy = new UpdateMusicalGenreScoreRepositorySpy();
  const sut = new DbUpdateMusicalGenreScore(updateMusicalGenreScoreRepositorySpy);
  return { sut, updateMusicalGenreScoreRepositorySpy };
};

describe("DbUpdateMusicalGenreScore", () => {
  it("should call 'updateMusicalGenreScoreRepository'", async () => {
    const { sut, updateMusicalGenreScoreRepositorySpy } = makeSut();
    const result = await sut.perform(mockUpdateMusicalGenreScore());
    expect(result).toHaveProperty("score");
    expect(updateMusicalGenreScoreRepositorySpy.callsCount).toBe(1);
  });
});
