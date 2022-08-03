import { UpdateMusicalGenreScore } from "@/domain/use-cases";
import { UpdateMusicalGenreScoreRepository } from "@/data/protocols";

export class DbUpdateMusicalGenreScore implements UpdateMusicalGenreScore {
  constructor(private readonly updateMusicalGenreScoreRepository: UpdateMusicalGenreScoreRepository) {}
  perform = async (params: UpdateMusicalGenreScore.Params) => {
    await this.updateMusicalGenreScoreRepository.updateScore({
      id: params.id,
      quantity: 1,
    });
  };
}
