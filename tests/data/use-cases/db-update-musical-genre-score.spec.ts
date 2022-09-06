import { DbUpdateMusicalGenreScore } from "@/data/use-cases";
import { UpdateMusicalGenreScoreRepositorySpy } from "@/tests/data/mocks";

import { faker } from "@faker-js/faker";

const makeSut = () => {
  const updateMusicalGenreScoreRepositorySpy = new UpdateMusicalGenreScoreRepositorySpy();
  const sut = new DbUpdateMusicalGenreScore(updateMusicalGenreScoreRepositorySpy);
  return { sut, updateMusicalGenreScoreRepositorySpy };
};

describe("DbUpdateMusicalGenreScore", () => {
  it("should call 'updateMusicalGenreScoreRepository'", async () => {
    const { sut, updateMusicalGenreScoreRepositorySpy } = makeSut();
    const result = await sut.perform({ id: parseInt(faker.random.numeric(1)) });
    expect(result).toHaveProperty("score");
    expect(updateMusicalGenreScoreRepositorySpy.callsCount).toBe(1);
  });
});
