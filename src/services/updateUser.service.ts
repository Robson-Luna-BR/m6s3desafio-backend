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
  userListSchema,
  userResponseSchema,
} from "../schemas/user.schemas";
import { hashSync } from "bcryptjs";

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

  validUser.password = hashSync(validUser.password!, 10)
  
  const newUser: any = {
    ...oldUserData,
    ...validUser,
  };

  await userRepository.save(newUser);

  const updatedUser = userListSchema.parse(newUser);
  return updatedUser;
};
