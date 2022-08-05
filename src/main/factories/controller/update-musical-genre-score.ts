import { makeDbUpdateMusicalGenreScore } from "@/main/factories/use-cases/db";
import { UpdateMusicalGenreScoreController } from "@/presentation/controllers";

export const makeDbUpdateMusicalGenreScoreController = () => {
  const controller = new UpdateMusicalGenreScoreController(makeDbUpdateMusicalGenreScore());
  return controller;
};
