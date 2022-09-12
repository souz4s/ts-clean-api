import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";

import { faker } from "@faker-js/faker";

export class UpdateMusicalGenreScoreRepositorySpy implements UpdateMusicalGenreScoreRepository {
  callsCount = 0;
  receivedParams: unknown[] = [];
  result = parseInt(faker.random.numeric(2));
  updateScore = async (params: UpdateMusicalGenreScoreRepository.Params): Promise<UpdateMusicalGenreScoreRepository.Result> => {
    this.callsCount++;
    this.receivedParams.push(params);
    return { score: this.result };
  };
}
