import { DbCreateUser } from "@/data/use-cases";
import { UserRepository } from "@/infrastructure/db/repositories";

export const makeDbCreateUser = (): DbCreateUser => {
  const userRepository = new UserRepository();
  return new DbCreateUser(userRepository);
};
