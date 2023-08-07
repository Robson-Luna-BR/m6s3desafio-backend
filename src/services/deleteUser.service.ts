import { Repository } from "typeorm";
import User from "../entities/user.entity";
import { AppDataSource } from "../data-source";

export const deleteUserService = async (id: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  console.log(id, "//////////////////////////////")
  const pickUser: User | null = await userRepository.findOneBy({
    // @ts-ignore
    id: id,
  });
  console.log(pickUser, "****************************")

  await userRepository.softRemove(pickUser!);
};
