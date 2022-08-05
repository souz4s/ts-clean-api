import { makeDbCreateUser } from "@/main/factories/use-cases/db";
import { CreateUserController } from "@/presentation/controllers";

export const makeDbCreateUserController = () => {
  const controller = new CreateUserController(makeDbCreateUser());
  return controller;
};
