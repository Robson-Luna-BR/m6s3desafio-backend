import { Request, Response } from "express";
import { TUser, TUserResponse } from "../interfaces/user.interfaces";
import { listUsersService } from "../services/listUsers.service";
import { userResponseSchema } from "../schemas/user.schemas";

export const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = Number(req.params.id);
  const listUsers = await listUsersService(id);

  return res.status(200).json(listUsers);
};
