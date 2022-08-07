import { makeDbGetUserByEmail } from "@/main/factories/use-cases/db";
import { GetUserByEmailController } from "@/presentation/controllers";

export const makeDbGetUserByEmailController = () => {
  const controller = new GetUserByEmailController(makeDbGetUserByEmail());
  return controller;
};
