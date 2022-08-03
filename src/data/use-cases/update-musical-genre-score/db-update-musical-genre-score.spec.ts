import { DbUpdateMusicalGenreScore } from ".";
import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";

class UpdateMusicalGenreScoreRepositorySpy implements UpdateMusicalGenreScoreRepository {
  result = undefined;
  callsCount = 0;
  updateScore = async (params: UpdateMusicalGenreScoreRepository.Params): Promise<void> => {
    void (await Promise.resolve(params));
    this.callsCount++;

    return this.result;
  };
}

const makeSut = () => {
  const updateMusicalGenreScoreRepositorySpy = new UpdateMusicalGenreScoreRepositorySpy();
  const sut = new DbUpdateMusicalGenreScore(updateMusicalGenreScoreRepositorySpy);

  return { sut, updateMusicalGenreScoreRepositorySpy };
};

describe("DbUpdateMusicalGenreScore", () => {
  it("should call 'updateMusicalGenreScoreRepository'", async () => {
    const { sut, updateMusicalGenreScoreRepositorySpy } = makeSut();
    const result = await sut.perform({ id: 0 });

    expect(result).toBeUndefined();
    expect(updateMusicalGenreScoreRepositorySpy.callsCount).toBe(1);
  });
});
