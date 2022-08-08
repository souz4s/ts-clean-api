import { Router } from "express";

import { usersRoutes } from "@/main/routes";
import { musicalGenresRoutes } from "@/main/routes";

const router = Router();

router.use(usersRoutes);
router.use(musicalGenresRoutes);

export { router, usersRoutes, musicalGenresRoutes };
