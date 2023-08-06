import { Repository } from "typeorm";

import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces";
import { AppDataSource } from "../data-source";
import { userListSchema, userResponseSchema } from "../schemas/user.schemas";
import User from "../entities/user.entity";

export const createUserService = async (user: TUserRequest) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser = userRepository.create(user);

  await userRepository.save(newUser);

  const userResponse = userListSchema.parse(newUser);

  return userResponse;
};
