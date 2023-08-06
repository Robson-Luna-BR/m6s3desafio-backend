import { Router } from "express";
import { checkIfEmailAlreadyExist } from "../middlewares/checkIfEmailAlreadyExist.middleware";
import { createUserController } from "../controllers/createUserController";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userRequestSchema } from "../schemas/user.schemas";
import { validateTokenInfo } from "../middlewares/validateTokenInfo.middleware";
import { checkIfIdExists } from "../middlewares/checkIfIdExists.middleware";
import { updateUserController } from "../controllers/updateUserController";


export const userRoutes: Router = Router();

userRoutes.post("", validateBody(userRequestSchema),checkIfEmailAlreadyExist, createUserController);
userRoutes.patch(
    "/:id",
    checkIfIdExists,
    validateTokenInfo,
    updateUserController
  );
