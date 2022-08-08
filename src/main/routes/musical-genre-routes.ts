/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { expressRouterAdapter } from "@/main/adapters";
import { makeDbUpdateMusicalGenreScoreController } from "@/main/factories/controller";

const musicalGenresRoutes = Router();

musicalGenresRoutes.put("/musicalGenres/:id", expressRouterAdapter(makeDbUpdateMusicalGenreScoreController()));

export { musicalGenresRoutes };
