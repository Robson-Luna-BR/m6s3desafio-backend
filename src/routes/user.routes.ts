import { Router } from "express";
import { checkIfEmailAlreadyExist } from "../middlewares/checkIfEmailAlreadyExist.middleware";
import { createUserController } from "../controllers/createUserController";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userRequestSchema } from "../schemas/user.schemas";
import { validateTokenInfo } from "../middlewares/validateTokenInfo.middleware";
import { checkIfIdExists } from "../middlewares/checkIfIdExists.middleware";
import { updateUserController } from "../controllers/updateUserController";
import { checkIfUserIsOwnerOrAdm } from "../middlewares/checkIfUserIsOwnerOrAdm.middleware";
import { deleteUserController } from "../controllers/deleteUserController";
import { listUsersController } from "../controllers/listUserController";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateBody(userRequestSchema),
  checkIfEmailAlreadyExist,
  createUserController
);
userRoutes.get("/:id", validateTokenInfo, listUsersController);

userRoutes.patch(
  "/:id",
  checkIfIdExists,
  checkIfEmailAlreadyExist,
  validateTokenInfo,
  updateUserController
);
userRoutes.delete(
  "/:id",
  checkIfIdExists,
  validateTokenInfo,
  deleteUserController
);
