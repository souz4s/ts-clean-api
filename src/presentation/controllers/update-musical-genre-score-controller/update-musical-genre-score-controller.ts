import { UserModel } from "@/domain/models";
import { UpdateMusicalGenreScore } from "@/domain/use-cases";
import { HttpHelper } from "@/presentation/helpers";
import { OnUpdateController } from "@/presentation/protocols";
import { MissingParametersError } from "@/presentation/errors";

export class UpdateMusicalGenreScoreController implements OnUpdateController<UserModel> {
  constructor(private readonly updateMusicalGenreScore: UpdateMusicalGenreScore) {}
  handle = async (params: OnUpdateController.Params<UserModel>) => {
    try {
      if (!params.newData.id) return HttpHelper.BAD_REQUEST(new MissingParametersError());

      const creationResult = await this.updateMusicalGenreScore.perform({
        id: params.newData.id,
      });

      return HttpHelper.OK(creationResult);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}
