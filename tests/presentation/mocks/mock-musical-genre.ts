import { UpdateMusicalGenreScore } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

export class UpdateMusicalGenreScoreSpy implements UpdateMusicalGenreScore {
  callsCount = 0;
  receivedParams: unknown[] = [];
  result = parseInt(faker.random.numeric(2));
  perform = async (params: UpdateMusicalGenreScore.Params): Promise<UpdateMusicalGenreScore.Result> => {
    this.callsCount++;
    this.receivedParams.push(params);
    return { score: this.result };
  };
}
