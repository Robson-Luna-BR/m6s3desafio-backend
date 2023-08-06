import { NextFunction, Request, Response } from "express";
import { TUpdateRequestClient } from "../interfaces/client.interfaces";
import { updateClientService } from "../services/updateClient.service";

export const updateClientController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const client: TUpdateRequestClient = req.body;
  const id: number = Number(req.params.id);

  const clientUpdate = await updateClientService(client, id);

  return res.status(200).json(clientUpdate);
};
