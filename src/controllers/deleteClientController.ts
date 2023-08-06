import { NextFunction, Request, Response } from "express";
import { deleteUserService } from "../services/deleteUser.service";
import { deleteClientService } from "../services/deleteClient.service";

export const deleteClientController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const id = Number(req.params.id);

  const deleteClient = await deleteClientService(id);

  return res.status(204).send();
};
