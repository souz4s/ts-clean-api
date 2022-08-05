import { DbGetUserByEmail } from "@/data/use-cases";
import { UserRepository } from "@/infrastructure/db/repositories";

export const makeDbGetUserByEmail = (): DbGetUserByEmail => {
  const userRepository = new UserRepository();
  return new DbGetUserByEmail(userRepository);
};
