import { NextFunction, Request, Response } from "express";
import {
  TUpdateRequestUser,
  TUpdateValidatedUserSchema,
} from "../interfaces/user.interfaces";
import { updateUserService } from "../services/updateUser.service";

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const user: TUpdateRequestUser = req.body;
  const id: number = Number(req.params.id);

  const userUpdate = await updateUserService(user, id);

  return res.status(200).json(userUpdate);
};
