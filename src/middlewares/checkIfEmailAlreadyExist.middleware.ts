import { Request, Response, NextFunction } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import { Repository } from "typeorm";
import User from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const checkIfEmailAlreadyExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const checkEmail: TUserRequest | null = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (checkEmail) {
    throw new AppError("Email already exists", 409);
  }

  const checkName: TUserRequest | null = await userRepository.findOneBy({
    name: req.body.name,
  });

  if (checkName) {
    throw new AppError("Name already exists", 409);
  }

  return next();
};
