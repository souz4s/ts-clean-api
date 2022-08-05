import { DbUpdateMusicalGenreScore } from "@/data/use-cases";
import { MusicalGenreRepository } from "@/infrastructure/db/repositories";

export const makeDbUpdateMusicalGenreScore = (): DbUpdateMusicalGenreScore => {
  const musicalGenreRepository = new MusicalGenreRepository();
  return new DbUpdateMusicalGenreScore(musicalGenreRepository);
};
