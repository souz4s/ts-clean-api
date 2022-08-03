import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";
import { prismaClient } from "@/infrastructure/db";

export class MusicalGenreRepository implements UpdateMusicalGenreScoreRepository {
  updateScore = async (params: UpdateMusicalGenreScoreRepository.Params): Promise<UpdateMusicalGenreScoreRepository.Result> => {
    const musicalGenreCollection = prismaClient.getConnection().musicalGenres;
    const musicalGenre = await musicalGenreCollection.update({
      where: {
        id: params.id,
      },
      data: {
        score: +1,
      },
    });

    return { score: musicalGenre.score };
  };
}
