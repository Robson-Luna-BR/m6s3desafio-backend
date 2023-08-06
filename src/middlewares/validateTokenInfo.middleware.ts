import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { AppError } from "../error";

export const validateTokenInfo = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let token: string | undefined = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);

   

    res.locals.id = decoded.sub;
    res.locals.admin = decoded.admin;

   
    return next();
  });
};
