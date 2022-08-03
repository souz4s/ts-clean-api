import { UserModel } from "@/domain/models";
import { CreateUser } from "@/domain/use-cases";
import { OnCreateController } from "@/presentation/protocols";
import { HttpHelper } from "@/presentation/helpers";
import { MissingParametersError } from "@/presentation/errors";

export class CreateUserController implements OnCreateController<UserModel> {
  constructor(private readonly createUser: CreateUser) {}
  handle = async (params: OnCreateController.Params<UserModel>) => {
    try {
      const createdUser = params.newData;
      const requiredFields = createdUser.email && createdUser.name;

      if (!requiredFields) return HttpHelper.BAD_REQUEST(new MissingParametersError());

      const creationResult = await this.createUser.perform(createdUser);

      return HttpHelper.OK(creationResult);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}
