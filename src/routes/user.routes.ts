import { Router } from "express";
import { checkIfEmailAlreadyExist } from "../middlewares/checkIfEmailAlreadyExist.middleware";
import { createUserController } from "../controllers/createUserController";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userRequestSchema } from "../schemas/user.schemas";

export const userRoutes: Router = Router();

userRoutes.post("", validateBody(userRequestSchema),checkIfEmailAlreadyExist, createUserController);
