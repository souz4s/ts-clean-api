import { UpdateMusicalGenreScoreController } from ".";
import { MusicalGenreModel } from "@/domain/models";
import { UpdateMusicalGenreScore } from "@/domain/use-cases";

class UpdateMusicalGenreScoreSpy implements UpdateMusicalGenreScore {
  result = 0;
  callsCount = 0;
  receivedParams: UpdateMusicalGenreScore.Params[] = [];
  perform = async (params: UpdateMusicalGenreScore.Params): Promise<UpdateMusicalGenreScore.Result> => {
    void (await Promise.resolve());
    this.callsCount++;
    this.receivedParams.push(params);

    return { score: this.result };
  };
}

const mockMusicalGenreModel = (): MusicalGenreModel => ({
  id: 1,
  name: "some-name",
  score: 0,
  Users: [],
});

const makeSut = () => {
  const updateMusicalGenreScoreSpy = new UpdateMusicalGenreScoreSpy();
  const sut = new UpdateMusicalGenreScoreController(updateMusicalGenreScoreSpy);

  return { sut, updateMusicalGenreScoreSpy };
};

describe("UpdateMusicalGenreScoreController", () => {
  it("should call 'updateMusicalGenreScore' in the update of the score", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    await sut.handle({ eventType: "updated", previousData: mockMusicalGenreModel(), newData: mockMusicalGenreModel() });

    expect(updateMusicalGenreScoreSpy.callsCount).toBe(1);
  });
});
