import { UpdateMusicalGenreScore } from "@/domain/use-cases";

import { faker } from "@faker-js/faker";

export const mockUpdateMusicalGenreScore = (): UpdateMusicalGenreScore.Params => ({
  id: parseInt(faker.random.numeric(2)),
});
