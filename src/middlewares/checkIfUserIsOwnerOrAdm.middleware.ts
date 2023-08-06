import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const checkIfUserIsOwnerOrAdm = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const patchId = req.params.id;
  const userId = res.locals.id;
  const isAdmin = res.locals.admin;

  if (patchId != userId && isAdmin == false) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};
