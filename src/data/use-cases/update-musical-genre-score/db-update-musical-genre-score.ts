import { UpdateMusicalGenreScore } from "@/domain/use-cases";
import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";

export class DbUpdateMusicalGenreScore implements UpdateMusicalGenreScore {
  constructor(private readonly updateMusicalGenreScoreRepository: UpdateMusicalGenreScoreRepository) {}
  perform = async (params: UpdateMusicalGenreScore.Params): Promise<UpdateMusicalGenreScore.Result> => {
    const result = await this.updateMusicalGenreScoreRepository.updateScore({
      id: params.id,
    });

    return { score: result.score };
  };
}
