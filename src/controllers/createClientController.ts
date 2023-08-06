import { Request, Response } from "express";
import { TUserResponse } from "../interfaces/user.interfaces";
import { createUserService } from "../services/createUser.service";
import Client from "../entities/client.entity";
import { TClientRequest } from "../interfaces/client.interfaces";
import { createClientService } from "../services/createClient.service";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client: TClientRequest = req.body;
  const userId = Number(req.params.id);

  const newClient: TUserResponse = await createClientService(client, userId);

  return res.status(201).json(newClient);
};
