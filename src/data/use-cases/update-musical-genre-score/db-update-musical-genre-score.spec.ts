import { DbUpdateMusicalGenreScore } from ".";
import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";

class UpdateMusicalGenreScoreRepositorySpy implements UpdateMusicalGenreScoreRepository {
  result = 1;
  callsCount = 0;
  updateScore = async (params: UpdateMusicalGenreScoreRepository.Params): Promise<UpdateMusicalGenreScoreRepository.Result> => {
    void (await Promise.resolve(params));
    this.callsCount++;

    return { score: this.result };
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

    expect(result).toHaveProperty("score");
    expect(updateMusicalGenreScoreRepositorySpy.callsCount).toBe(1);
  });
});
