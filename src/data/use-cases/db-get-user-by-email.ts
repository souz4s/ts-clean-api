import { GetUserByEmail } from "@/domain/use-cases";
import { GetUserByEmailRepository } from "@/data/protocols";

export class DbGetUserByEmail implements GetUserByEmail {
  constructor(private readonly getUserByEmailRepository: GetUserByEmailRepository) {}
  perform = async (params: GetUserByEmail.Params): Promise<GetUserByEmail.Result> => {
    const createResult = await this.getUserByEmailRepository.getByEmail(params);
    return { user: createResult.user };
  };
}
