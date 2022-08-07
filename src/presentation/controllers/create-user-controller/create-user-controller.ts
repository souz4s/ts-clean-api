import { CreateUser } from "@/domain/use-cases";
import { Controller } from "@/presentation/protocols";
import { HttpHelper } from "@/presentation/helpers";
import { MissingParametersError } from "@/presentation/errors";

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}
  handle = async (params: CreateUser.Params) => {
    try {
      const createdUser = params;
      const requiredFields = createdUser.email && createdUser.name;

      if (!requiredFields) return HttpHelper.BAD_REQUEST(new MissingParametersError());

      const getResult = await this.createUser.perform(createdUser);

      return HttpHelper.OK(getResult.id);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}
