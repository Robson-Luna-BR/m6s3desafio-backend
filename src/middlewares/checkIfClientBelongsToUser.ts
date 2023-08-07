import { Request, Response, NextFunction } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import { Repository } from "typeorm";
import User from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const checkIfClientBelongsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userId= req.params.userId

  const listDataSelect = await userRepository.findOne({
    // @ts-ignore
    where: {
      id: userId,
    },
    relations: {
   
      client: true,
    },
  });

  console.log(listDataSelect)


  return next();
};
