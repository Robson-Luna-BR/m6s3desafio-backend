import { Request, Response, NextFunction } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import { Repository } from "typeorm";
import User from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import Client from "../entities/client.entity";
import { TClientRequest } from "../interfaces/client.interfaces";

export const checkIfEmailAlreadyExistClient = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const checkEmail: TClientRequest | null = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (checkEmail) {
    throw new AppError("Email already exists", 409);
  }

  const checkName: TClientRequest | null = await userRepository.findOneBy({
    name: req.body.name,
  });

  if (checkName) {
    throw new AppError("Name already exists", 409);
  }

  return next();
};
