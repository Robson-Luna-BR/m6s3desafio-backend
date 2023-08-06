import { Repository } from "typeorm";
import {
  TUpdateRequestUser,
  TUser,
  TUserResponse,
} from "../interfaces/user.interfaces";
import User from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import {
  updateValidatedUserSchema,
  userResponseSchema,
} from "../schemas/user.schemas";

export const updateUserService = async (
  updateUser: TUpdateRequestUser,
  id: number
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const validUser: TUpdateRequestUser =
    updateValidatedUserSchema.parse(updateUser);

  const oldUserData: User | null = await userRepository.findOneBy({
    // @ts-ignore
    id: id,
  });

  const newUser: any = {
    ...oldUserData,
    ...validUser,
  };

  await userRepository.save(newUser);

  const updatedUser = userResponseSchema.parse(newUser);
  return updatedUser;
};
