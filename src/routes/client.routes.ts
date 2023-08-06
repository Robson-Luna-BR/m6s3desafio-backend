import { Router } from "express";
import { clientRequestSchema } from "../schemas/client.schemas";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createClientController } from "../controllers/createClientController";

export const clientRoutes: Router = Router();

clientRoutes.post(
    "/:id",
    validateBody(clientRequestSchema),
    createClientController
  );