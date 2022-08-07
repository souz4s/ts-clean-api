/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { expressRouterAdapter } from "@/main/adapters";
import { makeDbCreateUserController, makeDbGetUserByEmailController } from "@/main/factories/controller";

const usersRoutes = Router();

usersRoutes.post("/users", expressRouterAdapter(makeDbCreateUserController()));
usersRoutes.get("/users/:email", expressRouterAdapter(makeDbGetUserByEmailController()));

export { usersRoutes };
