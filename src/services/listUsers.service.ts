import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";

import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../interfaces/user.interfaces";
import User from "../entities/user.entity";
import { userListSchema, userResponseSchema } from "../schemas/user.schemas";

export const listUsersService = async (id: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users = await userRepository.findOne({
    // @ts-ignore
    where: {
      id: id,
    },
    relations: {
      client: true,
    },
  });

  const userResponse = userResponseSchema.parse(users);

  return userResponse;
};
