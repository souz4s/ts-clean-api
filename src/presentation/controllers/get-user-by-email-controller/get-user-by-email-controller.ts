import { GetUserByEmail } from "@/domain/use-cases";
import { Controller } from "@/presentation/protocols";
import { HttpHelper } from "@/presentation/helpers";
import { MissingParametersError } from "@/presentation/errors";

export class GetUserByEmailController implements Controller {
  constructor(private readonly getUserByEmail: GetUserByEmail) {}
  handle = async (request: GetUserByEmailController.Request) => {
    try {
      const getUser = request;
      const requiredFields = getUser.email;

      if (!requiredFields) {
        return HttpHelper.BAD_REQUEST(new MissingParametersError());
      }

      const getResult = await this.getUserByEmail.perform(getUser);

      return HttpHelper.OK(getResult.user);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  };
}

export namespace GetUserByEmailController {
  export type Request = { email: string };
}
