import { Repository } from "typeorm";

import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces";
import { AppDataSource } from "../data-source";
import { userResponseSchema } from "../schemas/user.schemas";
import Client from "../entities/client.entity";
import { TClientRequest } from "../interfaces/client.interfaces";
import User from "../entities/user.entity";
import { AppError } from "../error";

export const createClientService = async (
  client: TClientRequest,
  userId: number
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const user = await userRepository.findOne({
    // @ts-ignore
    where: {
      id: userId,
    },
  });
  const clientData = {
    ...client,
    user: user!,
  };

  const checkClient = await clientRepository.findOne({
    // @ts-ignore
    where: {
      name: client.name,
      email: client.email,
    },
  });

  if(!checkClient){
    const newClient = clientRepository.create(clientData);
  
    await clientRepository.save(newClient);
      }
    


  const listResponseSelect = await userRepository.findOne({
    // @ts-ignore
    where: {
      id: userId,
    },
    relations: {
      client: true,
    },
  });

 

  const clientResponse = userResponseSchema.parse(listResponseSelect);

  return clientResponse;
};
