import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";

import { faker } from "@faker-js/faker";

export class UpdateMusicalGenreScoreRepositorySpy implements UpdateMusicalGenreScoreRepository {
  params: UpdateMusicalGenreScoreRepository.Params | undefined;
  callsCount = 0;
  result = parseInt(faker.random.numeric(2));
  updateScore = async (params: UpdateMusicalGenreScoreRepository.Params): Promise<UpdateMusicalGenreScoreRepository.Result> => {
    this.params = params;
    this.callsCount++;
    return { score: this.result };
  };
}
