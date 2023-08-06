import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import User from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const checkIfIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const id = Number(req.params.id);

  const checkUserId: User | null = await userRepository.findOne({
    // @ts-ignore
    where:{

      id: id,
    }
  });

  if (!checkUserId) {
    throw new AppError("User not found", 404);
  }
  next();
};
