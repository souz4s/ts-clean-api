import { CreateUserRepository, GetUserByEmailRepository } from "@/data/protocols";
import { prismaClient } from "@/infrastructure/db";

export class UserRepository implements CreateUserRepository, GetUserByEmailRepository {
  createUser = async (params: CreateUserRepository.Params): Promise<CreateUserRepository.Result> => {
    const userCollection = prismaClient.getConnection().users;
    const user = await userCollection.create({
      data: {
        musicalGenre: {},
        ...params,
      },
    });

    return { id: user.id };
  };

  getByEmail = async (params: GetUserByEmailRepository.Params): Promise<GetUserByEmailRepository.Result> => {
    const userCollection = prismaClient.getConnection().users;
    const user = await userCollection.findFirst({
      where: {
        email: params.userEmail,
      },
    });

    return { user: user || undefined };
  };
}
