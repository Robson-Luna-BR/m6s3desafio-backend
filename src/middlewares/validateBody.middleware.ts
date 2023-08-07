import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validateBody =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const valideBody = schema.parse(req.body);
    req.body = valideBody;

    return next();
  };
