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

const mockMusicalGenreModel = (overwriteModel: Partial<MusicalGenreModel> = {}): MusicalGenreModel => ({
  id: 1,
  name: "some-name",
  score: 0,
  Users: [],
  ...overwriteModel,
});

const makeSut = () => {
  const updateMusicalGenreScoreSpy = new UpdateMusicalGenreScoreSpy();
  const sut = new UpdateMusicalGenreScoreController(updateMusicalGenreScoreSpy);

  return { sut, updateMusicalGenreScoreSpy };
};

describe("UpdateMusicalGenreScoreController", () => {
  it("should call 'updateMusicalGenreScore' in the update of the score", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    await sut.handle(mockMusicalGenreModel());

    expect(updateMusicalGenreScoreSpy.callsCount).toBe(1);
  });

  it("should return the status ok when update musical genre score", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    const result = await sut.handle(mockMusicalGenreModel());

    expect(updateMusicalGenreScoreSpy.callsCount).toBe(1);
    expect(result.statusCode).toBe(200);
  });

  it("should return bad request error when missing required parameters", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    const result = await sut.handle(mockMusicalGenreModel({ id: undefined }));

    expect(updateMusicalGenreScoreSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(400);
  });

  it("should return internal server error when updateMusicalGenreScore throws error", async () => {
    const { sut, updateMusicalGenreScoreSpy } = makeSut();
    jest.spyOn(updateMusicalGenreScoreSpy, "perform").mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await sut.handle(mockMusicalGenreModel());

    expect(updateMusicalGenreScoreSpy.callsCount).toBe(0);
    expect(result.statusCode).toBe(500);
  });
});
