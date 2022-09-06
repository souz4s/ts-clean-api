import { UpdateMusicalGenreScore } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { MissingParametersError } from "@/presentation/errors";

export class UpdateMusicalGenreScoreController implements Controller {
  constructor(private readonly updateMusicalGenreScore: UpdateMusicalGenreScore) {}
  handle = async (request: UpdateMusicalGenreScoreController.Request) => {
    try {
      if (!request.id) return HttpHelper.BAD_REQUEST(new MissingParametersError());
      const getResult = await this.updateMusicalGenreScore.perform({
        id: request.id,
      });
      return HttpHelper.OK(getResult.score);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}

export namespace UpdateMusicalGenreScoreController {
  export type Request = { id: number };
}
