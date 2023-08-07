import { MongoCompatibilityError, Repository } from "typeorm";
import User from "../entities/user.entity";
import { TLogin } from "../interfaces/login.interfaces";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUserService = async (loginData: TLogin) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
    relations:{
      client: true
    }
  });

  if (!findUser) {
    throw new AppError("Invalid credentials", 401);
  }
  const checkPassword = await compare(loginData.password, findUser.password);

  if (!checkPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign({ email: findUser.email }, process.env.SECRET_KEY!, {
    expiresIn: "1d",
  });

  let response = [token, findUser ]
   console.log(response[1], "///////////////////////////////")

  return response;
};
