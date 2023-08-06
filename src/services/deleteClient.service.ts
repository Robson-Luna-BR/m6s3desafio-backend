import { Repository } from "typeorm";
import User from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import Client from "../entities/client.entity";

export const deleteClientService = async (id: number): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const pickClient: Client | null = await clientRepository.findOneBy({
    // @ts-ignore
    id: id,
  });

  await clientRepository.softRemove(pickClient!);
};
