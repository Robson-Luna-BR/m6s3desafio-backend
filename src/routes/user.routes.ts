import { Router } from "express";
import { checkIfEmailAlreadyExist } from "../middlewares/checkIfEmailAlreadyExist.middleware";
import { createUserController } from "../controllers/createUserController";

export const userRoutes: Router = Router();

userRoutes.post("", checkIfEmailAlreadyExist, createUserController);
