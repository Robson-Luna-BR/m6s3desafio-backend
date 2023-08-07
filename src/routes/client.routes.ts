import { Router } from "express";
import { clientRequestSchema } from "../schemas/client.schemas";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createClientController } from "../controllers/createClientController";

import { validateTokenInfo } from "../middlewares/validateTokenInfo.middleware";
import { updateClientController } from "../controllers/updateClientController";
import { deleteClientController } from "../controllers/deleteClientController";
import { checkIfClientIdExists } from "../middlewares/checkIfClientIdExists.middleware";
import {checkIfEmailAlreadyExistClient} from "../middlewares/checkIfEmailAlreadyExistClient.middleware "
import { checkIfUserIsOwnerOrAdm } from "../middlewares/checkIfUserIsOwnerOrAdm.middleware";
import { checkIfClientBelongsToUser } from "../middlewares/checkIfClientBelongsToUser";


export const clientRoutes: Router = Router();

clientRoutes.post(
  "/:id",
  validateBody(clientRequestSchema),
  validateTokenInfo,
  checkIfUserIsOwnerOrAdm,
  checkIfEmailAlreadyExistClient,
  createClientController
);

clientRoutes.patch(
  "/:id/user/:userId",
  checkIfClientIdExists,
  validateTokenInfo,
  checkIfEmailAlreadyExistClient,
  updateClientController
);

clientRoutes.delete(
  "/:id/user/:userId",
  checkIfClientIdExists,
  validateTokenInfo,
  deleteClientController
);
