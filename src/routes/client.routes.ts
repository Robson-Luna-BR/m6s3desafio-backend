import { Router } from "express";
import { clientRequestSchema } from "../schemas/client.schemas";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createClientController } from "../controllers/createClientController";
import { checkIfIdExists } from "../middlewares/checkIfIdExists.middleware";
import { validateTokenInfo } from "../middlewares/validateTokenInfo.middleware";
import { updateClientController } from "../controllers/updateClientController";
import { deleteClientController } from "../controllers/deleteClientController";

export const clientRoutes: Router = Router();

clientRoutes.post(
  "/:id",
  validateBody(clientRequestSchema),
  createClientController
);

clientRoutes.patch(
  "/:id",
  checkIfIdExists,
  validateTokenInfo,
  updateClientController
);

clientRoutes.delete(
  "/:id",
  checkIfIdExists,
  validateTokenInfo,
  deleteClientController
);
