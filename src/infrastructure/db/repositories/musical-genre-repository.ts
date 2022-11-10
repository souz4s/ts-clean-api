import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";
import { prismaClient } from "@/infrastructure/db";

export class MusicalGenreRepository implements UpdateMusicalGenreScoreRepository {
  updateScore = async (params: UpdateMusicalGenreScoreRepository.Params): Promise<UpdateMusicalGenreScoreRepository.Result> => {
    const musicalGenreCollection = prismaClient.getConnection().musicalGenres;
    const getMusicalGenreScore = await musicalGenreCollection.findFirst({
      where: { id: params.id },
    });
    const score = getMusicalGenreScore?.score != undefined ? getMusicalGenreScore?.score + 1 : 0;
    const musicalGenre = await musicalGenreCollection.update({
      where: { id: params.id },
      data: { score: score },
    });
    return { score: musicalGenre.score };
  };
}
