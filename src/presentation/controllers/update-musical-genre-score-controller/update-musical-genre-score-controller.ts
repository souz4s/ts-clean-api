import { UpdateMusicalGenreScore } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { MissingParametersError } from "@/presentation/errors";

export class UpdateMusicalGenreScoreController implements Controller {
  constructor(private readonly updateMusicalGenreScore: UpdateMusicalGenreScore) {}
  handle = async (params: UpdateMusicalGenreScore.Params) => {
    try {
      if (!params.id) return HttpHelper.BAD_REQUEST(new MissingParametersError());

      const creationResult = await this.updateMusicalGenreScore.perform({
        id: params.id,
      });

      return HttpHelper.OK(creationResult);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}
