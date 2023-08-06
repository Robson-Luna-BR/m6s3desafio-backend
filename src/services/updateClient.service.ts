import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";
import Client from "../entities/client.entity";
import { TUpdateRequestClient } from "../interfaces/client.interfaces";
import {
  clientResponseSchema,
  updateValidatedClientSchema,
} from "../schemas/client.schemas";

export const updateClientService = async (
  updateClient: TUpdateRequestClient,
  id: number
) => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const validClient: TUpdateRequestClient =
    updateValidatedClientSchema.parse(updateClient);

  const oldClientData: Client | null = await clientRepository.findOneBy({
    // @ts-ignore
    id: id,
  });

  const newClient: any = {
    ...oldClientData,
    ...validClient,
  };

  await clientRepository.save(newClient);

  const updatedclient = clientResponseSchema.parse(newClient);
  return updatedclient;
};
