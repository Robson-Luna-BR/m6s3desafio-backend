import { Request, Response } from "express";
import { TLogin } from "../interfaces/login.interfaces";
import { loginUserService } from "../services/loginUser.service";

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const login: TLogin = req.body;

  const token: string = await loginUserService(login);

  return res.json({ token });
};
