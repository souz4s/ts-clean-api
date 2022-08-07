import { Router } from "express";

import { usersRoutes } from "@/main/routes";

const router = Router();

router.use(usersRoutes);

export { router };
