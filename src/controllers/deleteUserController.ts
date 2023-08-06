import { NextFunction, Request, Response } from "express";
import { deleteUserService } from "../services/deleteUser.service";

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const id = Number(req.params.id);

  const deleteUser = await deleteUserService(id);

  return res.status(204).send();
};
