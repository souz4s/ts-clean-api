import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";
import { prismaClient } from "@/infrastructure/db";

export class MusicalGenreRepository implements UpdateMusicalGenreScoreRepository {
  updateScore = async (params: UpdateMusicalGenreScoreRepository.Params): Promise<void> => {
    const userCollection = prismaClient.getConnection().musicalGenres;
    await userCollection.update({
      where: {
        id: params.id,
      },
      data: {
        score: +1,
      },
    });
  };
}
