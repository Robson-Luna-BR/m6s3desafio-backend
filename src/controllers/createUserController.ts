import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces";
import { createUserService } from "../services/createUser.service";
import User from "../entities/user.entity";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserRequest = req.body;

  const newUser: TUserResponse = await createUserService(user);

  return res.status(201).json(newUser);
};
