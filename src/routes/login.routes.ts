import { Router } from "express";
import { loginSchema } from "../schemas/login.schemas";
import { validateBody } from "../middlewares/validateBody.middleware";
import { loginUserController } from "../controllers/loginUserController";

export const loginRoutes: Router = Router();
loginRoutes.post("", validateBody(loginSchema), loginUserController);
